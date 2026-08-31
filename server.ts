import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "./constants";
import { LessonInfo, ProcessingOptions } from "./types";
import { buildUserPrompt, postProcessResult } from "./services/geminiService";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Use JSON and URL-encoded body parsers with generous limits for large documents
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ extended: true, limit: "50mb" }));

  // API route for generating lesson plans runs server-side to hide the API Key
  app.post("/api/generate-lesson-plan", async (req, res, next) => {
    try {
      const { info, options } = req.body as { info: LessonInfo; options: ProcessingOptions };
      if (!info || !options) {
        return res.status(400).json({ error: "Thiếu dữ liệu đầu vào để tạo giáo án." });
      }

      const apiKey = (req.headers["x-api-key"] as string) ||
                     process.env.GEMINI_API_KEY || 
                     process.env.API_KEY || 
                     process.env.KAY_API_GEMINI || 
                     process.env.KEY_API_GEMINI || 
                     process.env.GEMINI_KEY || 
                     process.env.GEMINI_API;
      if (!apiKey || !apiKey.trim()) {
        return res.status(400).json({
          error: "Chưa thiết lập Gemini API Key. Vui lòng nhấn nút 'CẤU HÌNH API KEY' ở thanh trên cùng để dán API Key của bạn.",
        });
      }

      const ai = new GoogleGenAI({
        apiKey: apiKey.trim(),
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });

      // Danh sách các mô hình thử nghiệm theo thứ tự ưu tiên
      const modelsToTry = [
        "gemini-3.6-flash",
        "gemini-2.5-flash",
        "gemini-2.0-flash",
        "gemini-1.5-flash",
      ];

      const userPrompt = buildUserPrompt(info, options);

      const callModel = async (modelId: string) => {
        const response = await ai.models.generateContent({
          model: modelId,
          config: {
            systemInstruction: SYSTEM_INSTRUCTION,
            temperature: 0.1,
          },
          contents: userPrompt,
        });

        const rawText = response.text || "";
        return postProcessResult(rawText);
      };

      // Hàm làm sạch và trích xuất thông điệp lỗi dạng văn bản rõ ràng, loại bỏ chuỗi JSON thô
      const extractCleanErrorMessage = (err: any): string => {
        if (!err) return "Lỗi không xác định";
        let msg = err?.message || String(err);
        
        for (let i = 0; i < 3; i++) {
          if (typeof msg === "string" && (msg.trim().startsWith("{") || msg.trim().startsWith("["))) {
            try {
              const parsed = JSON.parse(msg.trim());
              if (parsed?.error?.message) {
                msg = parsed.error.message;
              } else if (parsed?.message) {
                msg = parsed.message;
              } else {
                break;
              }
            } catch (_) {
              break;
            }
          }
        }

        if (typeof msg === "object" && msg !== null) {
          if ((msg as any).error?.message) msg = (msg as any).error.message;
          else if ((msg as any).message) msg = (msg as any).message;
          else msg = JSON.stringify(msg);
        }

        return String(msg);
      };

      let lastErrorMessage = "";
      for (const modelName of modelsToTry) {
        try {
          console.log(`[Server] Đang kết nối với model: ${modelName}...`);
          const resultText = await callModel(modelName);
          if (resultText && resultText.trim().length > 0) {
            return res.json({ text: resultText });
          }
        } catch (err: any) {
          lastErrorMessage = extractCleanErrorMessage(err);
          console.warn(`[Server] Model ${modelName} bị lỗi: ${lastErrorMessage}. Chuyển sang model tiếp theo...`);
        }
      }

      console.error(`[Server] Tất cả các mô hình AI đều thất bại. Chi tiết lỗi cuối:`, lastErrorMessage);

      if (lastErrorMessage.includes("API_KEY_INVALID") || lastErrorMessage.includes("API key not valid") || lastErrorMessage.includes("403") || lastErrorMessage.includes("401") || lastErrorMessage.includes("invalid API key")) {
        return res.status(401).json({
          error: "Mã API Key chưa hợp lệ hoặc đang chờ Google kích hoạt. (Lưu ý: API Key vừa tạo trên Google AI Studio có thể cần 1-2 phút để kích hoạt hoàn toàn). Vui lòng thử lại sau giây lát.",
        });
      }
      if (lastErrorMessage.includes("429") || lastErrorMessage.includes("RESOURCE_EXHAUSTED") || lastErrorMessage.includes("Quota exceeded") || lastErrorMessage.includes("quota")) {
        return res.status(429).json({
          error: "Mã API Key này đã hết lượt gọi miễn phí trong phút này (Quota Exceeded). Vui lòng đợi 1-2 phút hoặc dán API Key Gemini khác.",
        });
      }

      return res.status(500).json({
        error: `Thông báo từ AI: ${lastErrorMessage}. Vui lòng thử lại hoặc bấm 'CẤU HÌNH API KEY' để kiểm tra lại chìa khóa.`,
      });
    } catch (err: any) {
      console.error("[Server API Error]:", err);
      return res.status(500).json({ error: err.message || "Lỗi xử lý yêu cầu soạn giáo án từ AI." });
    }
  });

  // Middleware xử lý lỗi tập trung cho toàn bộ API (đảm bảo luôn phản hồi dạng JSON)
  app.use("/api", (err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error("[API Error Handler]:", err);
    if (err.type === 'entity.too.large') {
      return res.status(413).json({ error: "Dung lượng giáo án quá lớn (vượt quá giới hạn 50MB). Vui lòng rút ngắn nội dung file." });
    }
    return res.status(err.status || 500).json({
      error: err.message || "Đã xảy ra lỗi kết nối với API máy chủ."
    });
  });

  // Vite development integration or production static files serving
  if (process.env.NODE_ENV !== "production") {
    console.log("[Server] Đang khởi chạy Vite ở chế độ development...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("[Server] Đang khởi chạy ở chế độ production...");
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*all", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Server] Server fullstack đang chạy cực kì mượt mà tại http://0.0.0.0:${PORT}`);
  });
}

startServer();
