# Quy tắc dự án & Chỉ dẫn vận hành (AGENTS.md)

1. **Bảo tồn cấu trúc ứng dụng & giáo án gốc**:
   - Giữ nguyên toàn bộ cấu trúc giao diện, luồng xử lý và logic đã hoàn thiện.
   - Không tự ý thay đổi hoặc tái cấu trúc lớn khi chưa có yêu cầu cụ thể từ người dùng.
   - Giữ đúng 100% mẫu cấu trúc giáo án gốc (bảng biểu, đề mục, phân số, chỉ số trên/dưới, công thức toán học/hóa học).

2. **Cấu hình mô hình AI & Quy tắc tích hợp**:
   - Model chính: `gemini-3.6-flash` (dùng SDK `@google/genai`).
   - Tích hợp chi tiết vào đầy đủ 4 bước hoạt động dạy học (Công văn 5512): Bước 1 (Giao nhiệm vụ cụ thể/công cụ/từ khóa/prompt), Bước 2 (HS thực hiện/thao tác), Bước 3 (Báo cáo/thảo luận/sản phẩm số), Bước 4 (Đánh giá/nhận định/kết luận).
   - Môn Tiếng Anh: Tích hợp hoàn toàn bằng tiếng Anh chuyên môn sư phạm.
   - Bảo toàn tuyệt đối các công thức toán, phân số, lũy thừa, hóa học ([MATH_ID_...], <sub>, <sup>); cấm làm biến đổi hay lỗi ký tự.

3. **Trải nghiệm người dùng & Sản phẩm xuất bản**:
   - Duy trì hiệu năng cao, giao diện mượt mà và trực quan.
   - Trả về sản phẩm giáo án hoàn chỉnh 100%, không bị cắt cụt, tải về (Word DOCX/TXT) là sử dụng được ngay.

