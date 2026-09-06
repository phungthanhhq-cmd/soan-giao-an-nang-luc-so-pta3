import { GoogleGenAI } from "@google/genai";
import { LessonInfo, ProcessingOptions, Subject } from "../types";
import { SYSTEM_INSTRUCTION, NLS_FRAMEWORK_DATA, AI_2422_FRAMEWORK_DATA } from "../constants";

export const buildUserPrompt = (info: LessonInfo, options: ProcessingOptions): string => {
  const hasDistribution = Boolean(info.distributionContent && info.distributionContent.trim().length > 0);
  const isNLSEnabled = info.enableNLSIntegration !== false;
  const isAIEnabled = Boolean(info.enableAIIntegration);

  let modeInstruction = "";

  if (hasDistribution) {
    // Trường hợp 1: CÓ PHỤ LỤC PHÂN PHỐI CHƯƠNG TRÌNH (PPCT / PHỤ LỤC 3)
    modeInstruction = `
    ========================================================================================
    🚨 QUY TẮC PHÁP LÝ TỐI THƯỢNG: ĐỒNG BỘ PHỤ LỤC 3 / PHÂN PHỐI CHƯƠNG TRÌNH THEO TỪNG TIẾT
    Người dùng ĐÃ TẢI LÊN nội dung Phụ lục 3 / Phân phối chương trình (PPCT).
    Đây là căn cứ cao nhất. Bạn BẮT BUỘC phải đối chiếu CHÍNH XÁC SỐ TIẾT của bài học trong giáo án với SỐ TIẾT tương ứng trong Phụ lục:

    1. ĐỐI CHIẾU SỐ TIẾT:
       - Đọc tên bài học và các Tiết (ví dụ: Tiết 1, Tiết 2, Tiết 3...) trong "NỘI DUNG GIÁO ÁN GỐC".
       - Tìm đúng bài học và từng Tiết tương ứng trong "NỘI DUNG PHỤ LỤC 3 / PPCT".

    2. QUY TẮC TÍCH HỢP TRÙNG KHỚP 100% CHO TỪNG TIẾT:
       - Tiết nào trong Phụ lục chỉ có mã Năng lực số (NLS - Thông tư 02): CHỈ ĐƯỢC TÍCH HỢP NLS đúng theo mã đó cho tiết đó. ⛔ NGHIÊM CẤM TỰ Ý THÊM NĂNG LỰC AI (NLA) VÀO TIẾT NÀY.
       - Tiết nào trong Phụ lục chỉ có mã Năng lực Trí tuệ nhân tạo (AI/NLA - Quyết định 2422): CHỈ ĐƯỢC TÍCH HỢP NLA đúng theo mã đó cho tiết đó. ⛔ NGHIÊM CẤM TỰ Ý THÊM NĂNG LỰC SỐ (NLS) VÀO TIẾT NÀY.
       - Tiết nào trong Phụ lục có đồng thời cả mã NLS và mã AI: Tích hợp đồng thời cả hai đúng theo mã trong Phụ lục cho tiết đó.
       - Tiết nào trong Phụ lục không ghi mã NLS/AI: KHÔNG ĐƯỢC tích hợp NLS hay AI vào tiết đó, giữ nguyên tiến trình dạy học gốc.

    3. NỘI DUNG PHỤ LỤC 3 / PPCT CỦA NGƯỜI DÙNG:
    ${info.distributionContent}

    ${(info.manualNLS && info.manualNLS.length > 0) ? `* Mã NLS bổ sung người dùng chọn thêm:\n${info.manualNLS.map(item => `  - [${item.code}]: ${item.description}`).join('\n')}` : ''}
    ${(info.enableAIIntegration && info.manualAI && info.manualAI.length > 0) ? `* Mã AI bổ sung người dùng chọn thêm:\n${info.manualAI.map(item => `  - [${item.code}]: ${item.description}`).join('\n')}` : ''}
    ========================================================================================
    `;
  } else {
    // Trường hợp 2: KHÔNG CÓ PHỤ LỤC -> CĂN CỨ THEO LỰA CHỌN MÃ VÀ TRẠNG THÁI BẬT/TẮT CỦA NGƯỜI DÙNG
    const hasManualNLS = Boolean(info.enableNLSIntegration !== false && info.manualNLS && info.manualNLS.length > 0);
    const hasManualAI = Boolean(info.enableAIIntegration && info.manualAI && info.manualAI.length > 0);

    if (hasManualNLS && !hasManualAI) {
      // Chỉ chọn NLS
      const manualItems = (info.manualNLS || [])
        .map((item) => `- Mã [${item.code} - ${item.name}]: ${item.description}`)
        .join("\n");

      modeInstruction = `
      ========================================================================================
      🎯 TRƯỜNG HỢP: NGƯỜI DÙNG CHỈ CHỌN TÍCH HỢP NĂNG LỰC SỐ (THÔNG TƯ 02/2025/TT-BGDĐT)
      Danh sách mã Năng lực số người dùng đã chọn:
      ${manualItems}

      YÊU CẦU BẮT BUỘC:
      1. Tích hợp ĐẦY ĐỦ và CHÍNH XÁC các mã NLS ở trên vào mục Mục tiêu Năng lực và các Hoạt động Dạy học tương ứng.
      2. ⛔ ĐIỀU CẤM TUYỆT ĐỐI: Người dùng KHÔNG chọn tích hợp AI. NGHIÊM CẤM TỰ Ý THÊM BẤT KỲ MỤC TIÊU HAY HOẠT ĐỘNG NĂNG LỰC TRÍ TUỆ NHÂN TẠO (AI / NLA / QĐ 2422) NÀO VÀO GIÁO ÁN.
      ========================================================================================
      `;
    } else if (!hasManualNLS && hasManualAI) {
      // Chỉ chọn AI (NLA)
      const aiItems = (info.manualAI || [])
        .map((item) => `- Mã AI [${item.code} - ${item.name}]: ${item.description}`)
        .join("\n");

      modeInstruction = `
      ========================================================================================
      🤖 TRƯỜNG HỢP: NGƯỜI DÙNG CHỈ CHỌN TÍCH HỢP NĂNG LỰC TRÍ TUỆ NHÂN TẠO (AI - QĐ 2422/QĐ-BGDĐT)
      Danh sách mã Năng lực AI người dùng đã chọn:
      ${aiItems}

      YÊU CẦU BẮT BUỘC:
      1. Tích hợp ĐẦY ĐỦ và CHÍNH XÁC các mã AI ở trên vào mục Mục tiêu Năng lực và các Hoạt động Dạy học tương ứng.
      2. ⛔ ĐIỀU CẤM TUYỆT ĐỐI: Người dùng KHÔNG chọn tích hợp NLS. NGHIÊM CẤM TỰ Ý THÊM BẤT KỲ MỤC TIÊU HAY HOẠT ĐỘNG NĂNG LỰC SỐ (NLS / TT 02) NÀO VÀO GIÁO ÁN.
      ========================================================================================
      `;
    } else if (hasManualNLS && hasManualAI) {
      // Chọn CẢ HAI
      const manualItems = (info.manualNLS || [])
        .map((item) => `- Mã NLS [${item.code} - ${item.name}]: ${item.description}`)
        .join("\n");
      const aiItems = (info.manualAI || [])
        .map((item) => `- Mã AI [${item.code} - ${item.name}]: ${item.description}`)
        .join("\n");

      modeInstruction = `
      ========================================================================================
      ⚡ TRƯỜNG HỢP: NGƯỜI DÙNG CHỌN TÍCH HỢP ĐỒNG THỜI CẢ NĂNG LỰC SỐ & NĂNG LỰC AI
      1. Danh sách mã Năng lực số (TT 02/2025):
      ${manualItems}

      2. Danh sách mã Năng lực Trí tuệ nhân tạo (QĐ 2422):
      ${aiItems}

      YÊU CẦU BẮT BUỘC:
      - Tích hợp đồng thời cả NLS và NLA vào mục tiêu năng lực và các hoạt động dạy học phù hợp theo đúng danh sách mã trên.
      ========================================================================================
      `;
    } else {
      // Người dùng không chọn mã nào hoặc cả 2 tính năng đang tắt
      modeInstruction = `
      ========================================================================================
      📄 TRƯỜNG HỢP: KHÔNG CÓ YÊU CẦU TÍCH HỢP NLS HAY NLA
      - Giữ nguyên toàn bộ nội dung giáo án gốc.
      - Chuyển đổi sang định dạng Markdown chuẩn, bảo toàn toàn bộ Bảng biểu, tiêu đề và công thức toán học [MATH_ID_...].
      - KHÔNG tự ý bịa thêm mục tiêu NLS hay NLA nếu người dùng không cung cấp mã.
      ========================================================================================
      `;
    }
  }

  const isEnglishSubject = info.subject === Subject.ANH || info.subject === Subject.NGOAI_NGU_1 || /anh|tiếng anh|ngoại ngữ|english/i.test(String(info.subject));

  const englishRule = isEnglishSubject ? `
  ========================================================================================
  🇬🇧 QUY TẮC ĐẶC BIỆT DÀNH RIÊNG CHO MÔN TIẾNG ANH (ENGLISH LESSON PLAN INTEGRATION):
  - Môn học được chọn là TIẾNG ANH (hoặc giáo án gốc viết bằng tiếng Anh).
  - BẢO TOÀN CẤU TRÚC 100%: Giữ nguyên hoàn toàn hệ thống đề mục tiếng Anh gốc của giáo án (Ví dụ: I. OBJECTIVES: 1. Knowledge, 2. Competences/Competencies, 3. Qualities; II. TEACHING AIDS / MATERIALS; III. PROCEDURE / TEACHING STEPS; Teacher's Activities, Students' Activities, v.v.).
  - BẮT BUỘC TÍCH HỢP 100% BẰNG TIẾNG ANH:
    + Toàn bộ mục tiêu tích hợp Năng lực số (Digital Competence) và Năng lực AI (AI Competence) PHẢI ĐƯỢC VIẾT HOÀN TOÀN BẰNG TIẾNG ANH (Ví dụ: "2.3. Digital Competence: [1.1.CB1a] Students are able to search and retrieve online learning materials...", "2.4. AI Competence: [AI.1.6a] Students can formulate effective English prompts using AI chatbots...").
    + ⛔ TUYỆT ĐỐI KHÔNG VIẾT BẰNG TIẾNG VIỆT TRONG BẤT KỲ PHẦN NÀO CỦA GIÁO ÁN TIẾNG ANH.

  🔥 QUY CÁCH CHÈN NỘI DUNG TÍCH HỢP VÀO HOẠT ĐỘNG DẠY HỌC MÔN TIẾNG ANH (TỰ NHIÊN - KHÔNG SINH RA KÝ TỰ/TIÊU ĐỀ THỪA):
  - TUYỆT ĐỐI KHÔNG tự ý chèn thêm các tiêu đề lạ như "Step 1:...", "Step 2:...", "Step 3:...", "Step 4:..." nếu trong giáo án gốc của giáo viên KHÔNG có các tiêu đề đó.
  - BẢO TỒN NGUYÊN BẢN CẤU TRÚC GỐC: Nếu giáo án gốc chia 2 cột "Teacher's Activities" / "Students' Activities" hoặc các mục "Warm-up", "Presentation", "Practice", "Production", "Consolidation", hãy giữ nguyên 100% các đề mục đó.
  - CHỈ CHÈN NỘI DUNG TÍCH HỢP (bọc trong thẻ <nls>...</nls>) một cách mượt mà, tự nhiên vào đúng các bước/vị trí tương ứng trong hoạt động của giáo viên và học sinh:
    * Nhiệm vụ của GV (Giao nhiệm vụ): Chèn hành động GV hướng dẫn dùng công cụ số/nền tảng/chatbot AI, cung cấp từ khóa/prompt tiếng Anh mẫu (Ví dụ: "T asks students to use [App/Platform] with the prompt '...' to...").
    * Hoạt động của HS (Thực hiện): Chèn hành động HS tương tác với thiết bị số/ứng dụng/AI theo nhóm hoặc cá nhân để luyện tập phát âm, tra cứu, làm bài tập số (Ví dụ: "Ss access [Platform], type the prompt, practice dialogue with AI, and record results while T monitors...").
    * Báo cáo/Thảo luận: Chèn hành động HS trình chiếu/chia sẻ kết quả số (Padlet, slide, kết quả AI) bằng tiếng Anh; các bạn lắng nghe và nhận xét (Ví dụ: "Representative students present their digital output / Padlet screen in English; other groups peer-assess.").
    * Đánh giá/Nhận xét: Chèn hành động GV nhận xét kỹ năng ngôn ngữ và kỹ năng số/sử dụng AI của học sinh, chốt kiến thức trọng tâm (Ví dụ: "T gives feedback on students' pronunciation, language accuracy, and digital interaction skills, then summarizes key structures.").
  - NGHIÊM CẤM TỰ PHÁT SINH KÝ TỰ LẠ, LỜI DẪN THỪA, TIÊU ĐỀ THỪA NGOÀI GIÁO ÁN GỐC.
  ========================================================================================
  ` : "";

  return `
    ${info.enableNLSIntegration !== false ? `DỮ LIỆU THAM CHIẾU KHUNG NĂNG LỰC SỐ (Thông tư 02/2025/TT-BGDĐT):\n${NLS_FRAMEWORK_DATA}` : ''}

    ${Boolean(info.enableAIIntegration) ? `DỮ LIỆU THAM CHIẾU KHUNG NĂNG LỰC AI (Quyết định 2422/QĐ-BGDĐT):\n${AI_2422_FRAMEWORK_DATA}` : ''}

    THÔNG TIN GIÁO ÁN ĐẦU VÀO:
    - Bộ sách: ${info.textbook}
    - Cấp học: ${info.schoolLevel}
    - Môn học: ${info.subject}
    - Khối lớp: ${info.grade}
    
    ${englishRule}

    ${modeInstruction}

    YÊU CẦU XỬ LÝ NỘI DUNG:
    ${options.analyzeOnly ? "- Chỉ phân tích, không chỉnh sửa chi tiết." : "- Chỉnh sửa giáo án và TÍCH HỢP NĂNG LỰC theo đúng các quy tắc nghiêm ngặt ở trên."}
    ${options.detailedReport ? "- Kèm theo bảng giải thích chi tiết mã năng lực đã chọn ở cuối bài." : ""}
    
    YÊU CẦU VỀ ĐỊNH DẠNG VÀ TÍCH HỢP 4 BƯỚC (BẮT BUỘC):
    1. ĐỊNH DẠNG ĐẦU VÀO: Nội dung giáo án gốc bên dưới có thể là HTML (được chuyển từ DOCX). Các công thức toán học đã được thay thế bằng các mã giữ chỗ có dạng [MATH_ID_...].
    2. NHIỆM VỤ: Bạn phải chuyển đổi nội dung này sang MARKDOWN, đồng thời TÍCH HỢP nội dung theo đúng yêu cầu.
    3. BẢO TOÀN 100% CẤU TRÚC VÀ DẠNG BIỂU CỘT CỦA GIÁO ÁN GỐC (BẮT BUỘC TUYỆT ĐỐI):
       - Mỗi người dùng/nhà trường có một mẫu giáo án riêng (Công văn 5512, Công văn 2345, mẫu 2 cột, mẫu 3 cột, mẫu 4 cột, bảng tiến trình, hay văn bản dạng mục).
       - TUYỆT ĐỐI BẢO TỒN NGUYÊN VẸN 100% mẫu cấu trúc giáo án mà người dùng đã đưa lên: giữ đúng toàn bộ tiêu đề, đề mục lớn nhỏ, nội dung chuyên môn, câu hỏi, bài tập gốc.
       - BẢO TỒN NGUYÊN VẸN BẢNG BIỂU CỘT: Nếu giáo án gốc dùng bảng (2 cột: Hoạt động GV - Hoạt động HS, hoặc 4 cột: Mục tiêu - Nội dung - Sản phẩm - Tổ chức thực hiện, v.v.), ĐẦU RA BẮT BUỘC PHẢI GIỮ ĐÚNG BẢNG BIỂU ĐÓ dưới dạng Markdown Table. TUYỆT ĐỐI KHÔNG được phá vỡ bảng thành văn bản trơn hay thay đổi số cột/tiêu đề cột của người dùng.
       - TRONG Ô BẢNG: Sử dụng thẻ <br> để ngắt dòng bên trong ô, không nhấn Enter xuống dòng tự do làm hỏng cấu trúc bảng.
       - NGUYÊN TẮC TÍCH HỢP LÀ "CHÈN THÊM VÀO ĐÚNG VỊ TRÍ - KHÔNG VIẾT LẠI GIÁO ÁN": Chỉ bổ sung các nội dung tích hợp (Mục tiêu NLS/NLA và 4 bước thực hiện) vào đúng các vị trí phù hợp trong cấu trúc của người dùng, bọc trong thẻ <nls>...</nls>. Giữ nguyên 100% tất cả các phần còn lại.
    4. QUY CÁCH TÍCH HỢP NĂNG LỰC SỐ & AI VÀO TIẾN TRÌNH 4 BƯỚC CỦA HOẠT ĐỘNG DẠY HỌC:
       - TUYỆT ĐỐI KHÔNG VIẾT CHUNG CHUNG, SƠ SÀI.
       - Trong các hoạt động dạy học được chọn tích hợp, nội dung tích hợp (bọc trong thẻ <nls>...</nls>) PHẢI ĐƯỢC CHÈN CHI TIẾT VÀO ĐỦ 4 BƯỚC:
         + Bước 1: Chuyển giao nhiệm vụ (Nêu rõ GV giao nhiệm vụ thế nào, chỉ định phần mềm/nền tảng số/thiết bị gì, công cụ AI/từ khóa tra cứu/câu lệnh prompt cụ thể nào).
         + Bước 2: Thực hiện nhiệm vụ (Nêu rõ HS tiếp nhận nhiệm vụ, thao tác trên thiết bị số/phần mềm ra sao, khai thác/xử lý thông tin số/AI thế nào, GV quan sát hỗ trợ gì).
         + Bước 3: Báo cáo, thảo luận (Nêu rõ HS báo cáo sản phẩm số thế nào qua slide, padlet, màn hình trình chiếu số, thảo luận phản biện ra sao).
         + Bước 4: Kết luận, nhận định (Nêu rõ GV nhận xét, đánh giá kết quả và kỹ năng số/kỹ năng AI của học sinh như thế nào, chốt chuẩn kiến thức).
    5. BẢO TOÀN CÔNG THỨC MÔN KHOA HỌC TỰ NHIÊN, TOÁN, VẬT LÍ, HÓA HỌC, SINH HỌC (QUAN TRỌNG NHẤT): 
       - Đối với tất cả các môn Khoa học tự nhiên (Toán, KHTN, Vật lí, Hóa học, Sinh học): BẮT BUỘC GIỮ NGUYÊN 100% ĐÚNG TẤT CẢ CÔNG THỨC, PHƯƠNG TRÌNH, PHẢN ỨNG HÓA HỌC, PHÂN SỐ, CĂN THỨC, LŨY THỪA TỪ GIÁO ÁN GỐC.
       - TUYỆT ĐỐI KHÔNG ĐƯỢC TỰ Ý THAY ĐỔI, KHÔNG RÚT GỌN, KHÔNG SỬA ĐỔI BẤT KỲ KÝ HIỆU KHOA HỌC HOẶC ĐƠN VỊ ĐO NÀO.
       - Bạn TUYỆT ĐỐI KHÔNG ĐƯỢC thay đổi, dịch, hay xóa các mã giữ chỗ [MATH_ID_...] và các mã hình ảnh [IMG_ID_...]. Phải giữ nguyên vẹn 100% các mã này trong văn bản đầu ra đúng vị trí của chúng.
       - KHÔNG ĐƯỢC đặt các mã [MATH_ID_...] hoặc [IMG_ID_...] bên trong các thẻ định dạng như in đậm (**), in nghiêng (*).
       - TUYỆT ĐỐI KHÔNG SỬ DỤNG LATEX (DẤU $ HOẶC $$) TRONG TOÀN BỘ VĂN BẢN ĐẦU RA.
       - Đối với các công thức hóa học hoặc các chữ có chỉ số dưới/chỉ số trên (ví dụ: H<sub>2</sub>O, CO<sub>2</sub>, CaCO<sub>3</sub>, C<sub>15</sub>H<sub>31</sub>COOH, m<sup>2</sup>, m/s<sup>2</sup>), hãy giữ nguyên thẻ HTML <sub> và <sup>. KHÔNG chuyển thành dạng $C_{15}H_{31}COOH$.
    6. BẮT BUỘC BÔI ĐỎ BẰNG THẺ <nls>...</nls> CHO TOÀN BỘ NỘI DUNG TÍCH HỢP:
       - Dùng thẻ <nls>...</nls> đóng mở chuẩn xác để bao bọc TOÀN BỘ các nội dung được tích hợp thêm vào (cả ở phần Mục tiêu năng lực số/AI và trong toàn bộ các bước hoạt động dạy học):
         + TẠI PHẦN MỤC TIÊU BÀI HỌC (MỤC NĂNG LỰC): BẮT BUỘC bọc thẻ <nls>...</nls> cho cả tiêu đề "2.3. Năng lực số", "2.4. Năng lực Trí tuệ nhân tạo (AI)" và TOÀN BỘ các dòng gạch đầu dòng mã NLS, mã AI bên dưới.
           Ví dụ chuẩn mẫu:
           <nls>**2.3. Năng lực số**</nls>
           <nls>- Mã [1.1.TC1a - 1.1. Duyệt, tìm kiếm và lọc dữ liệu]: Giải thích rõ ràng nhu cầu thông tin cá nhân cho các mục đích cụ thể khi tìm kiếm, tra cứu tài liệu số về bài học.</nls>
           <nls>**2.4. Năng lực Trí tuệ nhân tạo (AI)**</nls>
           <nls>- Mã [6.A1.1 - Tính chủ động của con người]: Giải thích AI là sản phẩm do con người tạo ra, lập trình và điều khiển; AI không tự sinh ra và không hoạt động độc lập khi khai thác thông tin và tìm hiểu bài học.</nls>
           *LƯU Ý QUAN TRỌNG: Bọc thẻ <nls>...</nls> trên TỪNG DÒNG riêng biệt (mỗi dòng một cặp thẻ đóng mở), tuyệt đối không mở thẻ ở dòng này rồi xuống nhiều dòng sau mới đóng.
         + TẠI PHẦN TIẾN TRÌNH HOẠT ĐỘNG DẠY HỌC (4 bước): BẮT BUỘC bọc thẻ <nls>...</nls> cho mọi câu chữ nội dung bổ sung liên quan đến Năng lực số hoặc Năng lực AI (GV giao nhiệm vụ số/AI, HS thao tác thiết bị số/prompt AI, HS báo cáo sản phẩm số, GV đánh giá kỹ năng số/AI) để hiển thị màu đỏ nổi bật trong văn bản. Không được để sót bất kỳ nội dung tích hợp nào mà không bọc trong <nls>...</nls>.
    
    ĐỊNH DẠNG ĐẦU RA (NGHIÊM NGẶT):
    - Trả về toàn bộ nội dung giáo án dưới dạng Markdown.
    - Cấu trúc mục TIÊU BÀI HỌC bắt buộc:
       1. Về kiến thức
       2. Về năng lực (Bao gồm: Năng lực Chung, Năng lực Đặc thù môn học, Năng lực số và Năng lực AI nếu có tích hợp).
       3. Về phẩm chất
    - KHÔNG ĐƯỢC CÓ LỜI DẪN MỞ ĐẦU HOẶC KẾT THÚC.
    - Bắt đầu ngay bằng nội dung giáo án.
    
    NỘI DUNG GIÁO ÁN GỐC (CÓ THỂ LÀ HTML):
    ${info.content}
  `;
};

// Helper: Tự động đảm bảo toàn bộ nội dung tích hợp (Mục tiêu NLS & AI và các mã năng lực) được bọc <nls>...</nls> để bôi đỏ
export const ensureIntegratedContentRed = (text: string): string => {
  if (!text) return "";

  // 1. Phân rã khối <nls>...</nls> nhiều dòng thành từng dòng riêng lẻ để tránh mất style khi xuất Word theo dòng
  let processed = text.replace(/<nls>([\s\S]*?)<\/nls>/gi, (_match, inner) => {
    return inner
      .split('\n')
      .map((line: string) => {
        const trimmed = line.trim();
        if (!trimmed) return line;
        if (line.includes('<nls>') && line.includes('</nls>')) return line;
        return `<nls>${line}</nls>`;
      })
      .join('\n');
  });

  // 2. Quét để tự động bọc <nls>...</nls> cho mục Năng lực số, Năng lực AI và các mã năng lực nếu AI quên gắn thẻ
  const lines = processed.split('\n');
  let inIntegratedObjectivesBlock = false;

  const resultLines = lines.map(line => {
    const trimmed = line.trim();
    if (!trimmed) return line;

    // Dấu hiệu nhận biết bắt đầu đề mục NLS hoặc NLA/AI trong mục tiêu
    const isNLSHeading = /(?:^|\s)(?:(?:\d+\.)*\d+\.\s*)?Năng lực số\b/i.test(trimmed);
    const isAIHeading = /(?:^|\s)(?:(?:\d+\.)*\d+\.\s*)?Năng lực (?:Trí tuệ nhân tạo|AI)\b/i.test(trimmed);
    
    // Dấu hiệu kết thúc mục năng lực tích hợp (sang mục phẩm chất hoặc mục II thiết bị)
    const isExitSection = /^(?:#+\s*)?(?:3\.\s*(?:Về\s*)?Phẩm chất|[I|V|X]+\.\s*(?:THIẾT BỊ|ĐỒ DÙNG|TIẾN TRÌNH|HOẠT ĐỘNG)|B\.\s*HOẠT ĐỘNG)/i.test(trimmed);

    if (isExitSection) {
      inIntegratedObjectivesBlock = false;
      return line;
    }

    if (isNLSHeading || isAIHeading) {
      inIntegratedObjectivesBlock = true;
      if (!line.includes('<nls>')) {
        return `<nls>${line}</nls>`;
      }
      return line;
    }

    // Nhận diện dòng gạch đầu dòng chứa mã năng lực: ví dụ "- Mã [1.1...", "- [1.1...", "- Mã [6.A...", "+ Mã ["
    const isCompetencyCodeLine = /^(?:[-+*]\s*)?(?:Mã\s*)?\[(?:1\.[123]|2\.[1-6]|3\.[1-4]|4\.[1-4]|5\.[1-4]|6\.[123]|6\.[ABCD])/i.test(trimmed) ||
                                /^(?:[-+*]\s*)?Mã\s*\[/i.test(trimmed);

    if (isCompetencyCodeLine) {
      if (!line.includes('<nls>')) {
        return `<nls>${line}</nls>`;
      }
      return line;
    }

    // Nếu đang trong khối mục tiêu NLS/AI
    if (inIntegratedObjectivesBlock) {
      // Nếu gặp đề mục số khác không phải NLS/AI (ví dụ "2.5. Phẩm chất", "3.")
      if (/^(?:#+\s*)?(?:2\.[5-9]|3\.)\s+/i.test(trimmed)) {
        inIntegratedObjectivesBlock = false;
        return line;
      }
      if (!line.includes('<nls>')) {
        return `<nls>${line}</nls>`;
      }
    }

    return line;
  });

  return resultLines.join('\n');
};

export const postProcessResult = (text: string): string => {
  let fixed = text.replace(/\$\$?([^$]+)\$\$?/g, (match, content) => {
    if (content.includes("MATH_ID")) return match;
    let f = content;
    f = f.replace(/_\{([^}]+)\}/g, "<sub>$1</sub>");
    f = f.replace(/\^\{([^}]+)\}/g, "<sup>$1</sup>");
    f = f.replace(/_([a-zA-Z0-9])/g, "<sub>$1</sub>");
    f = f.replace(/\^([a-zA-Z0-9])/g, "<sup>$1</sup>");
    f = f.replace(/([A-Za-z])\{([0-9]+)\}/g, "$1<sub>$2</sub>");
    return f;
  });

  fixed = fixed.replace(/_\{([^}]+)\}/g, "<sub>$1</sub>");
  fixed = fixed.replace(/\^\{([^}]+)\}/g, "<sup>$1</sup>");
  fixed = fixed.replace(/([A-Za-z])\{([0-9]+)\}/g, "$1<sub>$2</sub>");

  // Áp dụng bôi đỏ tự động cho toàn bộ nội dung tích hợp (Mục tiêu 2.3/2.4 và các mã NLS/AI)
  fixed = ensureIntegratedContentRed(fixed);

  return fixed;
};

async function generateLessonPlanClientSide(
  info: LessonInfo,
  options: ProcessingOptions,
  apiKey: string
): Promise<string> {
  if (!apiKey || !apiKey.trim()) {
    throw new Error("Trang web đang chạy trên Netlify/Web tĩnh. Vui lòng bấm nút 'CẤU HÌNH API KEY' ở góc trên để dán API Key Gemini của bạn để ứng dụng hoạt động!");
  }

  const ai = new GoogleGenAI({ apiKey: apiKey.trim() });
  const userPrompt = buildUserPrompt(info, options);

  const modelsToTry = [
    "gemini-3.6-flash",
    "gemini-flash-latest",
    "gemini-3.8-flash",
    "gemini-3.1-flash-lite",
    "gemini-3.1-pro-preview",
  ];

  const callModel = async (modelId: string) => {
    const res = await ai.models.generateContent({
      model: modelId,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.1,
      },
      contents: userPrompt,
    });
    return res.text || "";
  };

  const cleanErrorMessage = (raw: any): string => {
    if (!raw) return "Lỗi không xác định";
    let text = typeof raw === "string" ? raw : (raw?.message || JSON.stringify(raw));
    for (let i = 0; i < 3; i++) {
      if (typeof text === "string" && (text.trim().startsWith("{") || text.trim().startsWith("["))) {
        try {
          const parsed = JSON.parse(text.trim());
          if (parsed?.error?.message) text = parsed.error.message;
          else if (parsed?.message) text = parsed.message;
          else break;
        } catch (_) {
          break;
        }
      }
    }
    return String(text);
  };

  let lastClientErr = "";
  for (const modelId of modelsToTry) {
    try {
      const resText = await callModel(modelId);
      if (resText && resText.trim().length > 0) {
        return postProcessResult(resText);
      }
    } catch (err: any) {
      lastClientErr = cleanErrorMessage(err);
      console.warn(`[Client AI] Model ${modelId} error:`, lastClientErr);
    }
  }

  if (lastClientErr.includes("API_KEY_INVALID") || lastClientErr.includes("API key not valid") || lastClientErr.includes("403") || lastClientErr.includes("401")) {
    throw new Error("Mã API Key chưa hợp lệ hoặc đang chờ Google kích hoạt (Lưu ý: API Key mới tạo trên Google AI Studio có thể mất 1-2 phút để hệ thống Google đồng bộ). Vui lòng đợi ít phút rồi thử lại.");
  }
  if (lastClientErr.includes("429") || lastClientErr.includes("RESOURCE_EXHAUSTED") || lastClientErr.includes("quota")) {
    throw new Error("API Key này đã hết lượt gọi trong phút này (Quota Exceeded). Vui lòng đợi 1-2 phút hoặc đổi API Key khác.");
  }
  throw new Error(`Lỗi kết nối Gemini AI: ${lastClientErr}`);

  throw new Error("Không nhận được kết quả từ Gemini AI.");
}

export const generateNLSLessonPlan = async (
  info: LessonInfo,
  options: ProcessingOptions
): Promise<string> => {
  const userApiKey = localStorage.getItem("USER_GEMINI_API_KEY") || "";

  try {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };
    if (userApiKey.trim()) {
      headers["x-api-key"] = userApiKey.trim();
    }

    const response = await fetch("/api/generate-lesson-plan", {
      method: "POST",
      headers,
      body: JSON.stringify({ info, options }),
    });

    // Handle Netlify / Static hosting where /api route does not exist (returns 404 or index.html)
    if (response.status === 404) {
      console.log("[GeminiService] Server /api route returned 404. Switching to client-side Gemini execution...");
      return await generateLessonPlanClientSide(info, options, userApiKey);
    }

    const responseText = await response.text();
    let data: any = {};
    try {
      data = JSON.parse(responseText);
    } catch (parseErr) {
      console.error("Phản hồi không phải dạng JSON:", responseText);
      if (!response.ok) {
        if (response.status === 413) {
          throw new Error("Dung lượng giáo án quá lớn. Vui lòng rút ngắn nội dung hoặc giảm dung lượng file.");
        }
        if (response.status === 504 || response.status === 502) {
          throw new Error("Hệ thống mất quá nhiều thời gian để xử lý. Vui lòng thử lại sau ít phút.");
        }
        // Fall back to client side if HTML error page was returned
        return await generateLessonPlanClientSide(info, options, userApiKey);
      }
      throw new Error("Định dạng dữ liệu trả về từ máy chủ không hợp lệ.");
    }

    if (!response.ok) {
      // If error is 401, 403, 429, or 500 and user has client-side API Key, seamlessly fallback to client-side
      if (userApiKey.trim()) {
        try {
          console.log("[GeminiService] Server returned error, falling back to client-side execution with saved API Key...");
          return await generateLessonPlanClientSide(info, options, userApiKey);
        } catch (clientErr: any) {
          throw clientErr;
        }
      }
      throw new Error(data.error || `Lỗi từ Server AI (${response.status})`);
    }

    if (!data.text) {
      throw new Error("Server AI trả về kết quả rỗng.");
    }

    return data.text;
  } catch (err: any) {
    console.error("Lỗi khi kết nối API:", err);
    
    // If backend fetch completely failed (e.g., offline or host down), attempt client-side execution if user has key
    if (userApiKey.trim() && err.message?.includes("Failed to fetch")) {
      try {
        return await generateLessonPlanClientSide(info, options, userApiKey);
      } catch (clientErr: any) {
        throw clientErr;
      }
    }

    const detailMsg = err.message || (typeof err === "string" ? err : JSON.stringify(err)) || "Không thể kết nối đến máy chủ AI";
    throw new Error(detailMsg);
  }
};

