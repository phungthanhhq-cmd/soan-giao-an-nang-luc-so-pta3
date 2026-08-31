
export const NLS_COMPONENT_OPTIONS = [
  { code: "1.1", label: "1.1. Duyệt, tìm kiếm và lọc dữ liệu" },
  { code: "1.2", label: "1.2. Đánh giá dữ liệu, thông tin và nội dung số" },
  { code: "1.3", label: "1.3. Quản lý dữ liệu, thông tin và nội dung số" },
  { code: "2.1", label: "2.1. Tương tác thông qua công nghệ số" },
  { code: "2.2", label: "2.2. Chia sẻ thông tin và nội dung thông qua công nghệ số" },
  { code: "2.3", label: "2.3. Sử dụng công nghệ số để thực hiện trách nhiệm công dân" },
  { code: "2.4", label: "2.4. Hợp tác thông qua công nghệ số" },
  { code: "2.5", label: "2.5. Thực hiện quy tắc ứng xử trên mạng" },
  { code: "2.6", label: "2.6. Quản lý danh tính số" },
  { code: "3.1", label: "3.1. Phát triển nội dung số" },
  { code: "3.2", label: "3.2. Tích hợp và tạo lập lại nội dung số" },
  { code: "3.3", label: "3.3. Thực thi bản quyền và giấy phép" },
  { code: "3.4", label: "3.4. Lập trình" },
  { code: "4.1", label: "4.1. Bảo vệ thiết bị" },
  { code: "4.2", label: "4.2. Bảo vệ dữ liệu cá nhân và quyền riêng tư" },
  { code: "4.3", label: "4.3. Bảo vệ sức khỏe và an sinh số" },
  { code: "4.4", label: "4.4. Bảo vệ môi trường" },
  { code: "5.1", label: "5.1. Giải quyết các vấn đề kỹ thuật" },
  { code: "5.2", label: "5.2. Xác định nhu cầu và giải pháp công nghệ" },
  { code: "5.3", label: "5.3. Sử dụng sáng tạo công nghệ số" },
  { code: "5.4", label: "5.4. Xác định các vấn đề cần cải thiện về năng lực số" },
  { code: "6.1", label: "6.1. Hiểu biết về trí tuệ nhân tạo (AI)" },
  { code: "6.2", label: "6.2. Sử dụng trí tuệ nhân tạo" },
  { code: "6.3", label: "6.3. Đánh giá trí tuệ nhân tạo" },
];

export const NLS_LEVEL_DETAILS: Record<string, { code: string; desc: string; level: number }[]> = {
  "1.1": [
    { code: "1.1.CB1a", level: 1, desc: "Xác định nhu cầu thông tin cơ bản và tìm kiếm dữ liệu qua từ khóa đơn giản." },
    { code: "1.1.CB1b", level: 1, desc: "Thực hiện tìm kiếm thông tin có sự hướng dẫn của giáo viên." },
    { code: "1.1.CB2a", level: 2, desc: "Tự chủ tìm kiếm dữ liệu, thông tin và biết cách điều hướng giữa các kết quả." },
    { code: "1.1.CB2b", level: 2, desc: "Lựa chọn từ khóa tìm kiếm phù hợp để tra cứu nội dung học tập." },
    { code: "1.1.TC1a", level: 3, desc: "Giải thích rõ ràng nhu cầu thông tin cá nhân cho các mục đích cụ thể." },
    { code: "1.1.TC1b", level: 3, desc: "Thực hiện tìm kiếm thông tin, dữ liệu trong môi trường số theo quy trình xác định." },
    { code: "1.1.TC1c", level: 3, desc: "Giải thích cách truy cập và điều hướng qua các kết quả tìm kiếm." },
    { code: "1.1.TC1d", level: 3, desc: "Giải thích được các chiến lược tìm kiếm thông tin theo quy trình rõ ràng." },
    { code: "1.1.TC2a", level: 4, desc: "Minh họa được nhu cầu thông tin cá nhân và giải thích mục đích tìm kiếm." },
    { code: "1.1.TC2b", level: 4, desc: "Tổ chức tìm kiếm dữ liệu, thông tin và nội dung trong môi trường số một cách độc lập." },
    { code: "1.1.TC2c", level: 4, desc: "Mô tả cách truy cập và điều hướng nội dung số một cách thành thạo." },
    { code: "1.1.TC2d", level: 4, desc: "Tổ chức và thực hiện các chiến lược tìm kiếm thông tin một cách hiệu quả." },
    { code: "1.1.NC1a", level: 5, desc: "Áp dụng kỹ thuật tìm kiếm nâng cao, tự đề xuất chiến lược tìm kiếm hiệu quả." },
    { code: "1.1.NC1b", level: 5, desc: "Phân tích và kết hợp dữ liệu từ nhiều nguồn tìm kiếm khác nhau." },
    { code: "1.1.NC2a", level: 6, desc: "Đánh giá nhu cầu, điều chỉnh linh hoạt và đa dạng chiến lược tìm kiếm trong bối cảnh phức tạp." },
    { code: "1.1.NC2b", level: 6, desc: "Tự động hóa và dẫn dắt quy trình thu thập, lọc dữ liệu quy mô lớn." }
  ],
  "1.2": [
    { code: "1.2.CB1a", level: 1, desc: "Phát hiện độ tin cậy và tính chính xác cơ bản của các nguồn dữ liệu quen thuộc." },
    { code: "1.2.CB2a", level: 2, desc: "Đánh giá độ tin cậy của các nguồn tin với khả năng tự chủ và hướng dẫn phù hợp." },
    { code: "1.2.TC1a", level: 3, desc: "Phân tích, so sánh và đánh giá độ tin cậy của các nguồn dữ liệu đã được tổ chức rõ ràng." },
    { code: "1.2.TC1b", level: 3, desc: "Phân tích, diễn giải và đánh giá nội dung số dựa trên các tiêu chí xác định." },
    { code: "1.2.TC2a", level: 4, desc: "Thực hiện phân tích, so sánh và đánh giá độc lập các nguồn dữ liệu/nội dung số." },
    { code: "1.2.TC2b", level: 4, desc: "Thực hiện diễn giải và đánh giá dữ liệu một cách độc lập dựa trên nhu cầu riêng." },
    { code: "1.2.NC1a", level: 5, desc: "Thực hiện đánh giá sâu sắc độ tin cậy, tiến hành thẩm định nhiều loại dữ liệu đa chiều." },
    { code: "1.2.NC1b", level: 5, desc: "Xác định các định kiến, tính phiến diện và thông tin giả mạo trong môi trường số." },
    { code: "1.2.NC2a", level: 6, desc: "Đánh giá có tính phê phán, phân tích các nguồn dữ liệu trong bối cảnh phức tạp." },
    { code: "1.2.NC2b", level: 6, desc: "Xây dựng khung tiêu chí thẩm định nội dung số cho tổ chức và cộng đồng." }
  ],
  "1.3": [
    { code: "1.3.CB1a", level: 1, desc: "Lưu trữ, đặt tên và mở lại các tệp tin trong các thư mục đơn giản." },
    { code: "1.3.CB2a", level: 2, desc: "Sắp xếp tệp tin, dữ liệu có trật tự theo phân loại thư mục rõ ràng." },
    { code: "1.3.TC1a", level: 3, desc: "Lựa chọn dữ liệu và nội dung phù hợp để tổ chức, lưu trữ và truy xuất thường xuyên." },
    { code: "1.3.TC1b", level: 3, desc: "Sắp xếp dữ liệu và nội dung một cách trật tự trong môi trường có cấu trúc." },
    { code: "1.3.TC2a", level: 4, desc: "Thực hiện sắp xếp và quản lý thông tin, dữ liệu giúp việc truy xuất dễ dàng." },
    { code: "1.3.TC2b", level: 4, desc: "Tổ chức thông tin, dữ liệu và nội dung hiệu quả trong môi trường đám mây." },
    { code: "1.3.NC1a", level: 5, desc: "Thiết kế hệ thống phân loại, lưu trữ và sao lưu dữ liệu bảo đảm an toàn." },
    { code: "1.3.NC2a", level: 6, desc: "Quản trị cơ sở dữ liệu số phức tạp và thiết lập chính sách lưu trữ dài hạn." }
  ],
  "2.1": [
    { code: "2.1.CB1a", level: 1, desc: "Lựa chọn các công nghệ số đơn giản để tương tác và gửi phản hồi." },
    { code: "2.1.CB2a", level: 2, desc: "Xác định và sử dụng các phương tiện giao tiếp phù hợp cho tình huống học tập." },
    { code: "2.1.TC1a", level: 3, desc: "Thực hiện các tương tác xác định rõ và thường xuyên với các công nghệ số." },
    { code: "2.1.TC1b", level: 3, desc: "Lựa chọn phương tiện giao tiếp số phù hợp với quy trình cho một bối cảnh cụ thể." },
    { code: "2.1.TC2a", level: 4, desc: "Lựa chọn và sử dụng nhiều công nghệ số khác nhau để tương tác hiệu quả." },
    { code: "2.1.TC2b", level: 4, desc: "Lựa chọn linh hoạt nhiều phương tiện giao tiếp số phù hợp cho các bối cảnh khác nhau." },
    { code: "2.1.NC1a", level: 5, desc: "Sử dụng thuần thục nhiều công nghệ số, chỉ dẫn được cho người khác phương tiện tốt nhất." },
    { code: "2.1.NC2a", level: 6, desc: "Thích nghi linh hoạt với các công nghệ tương tác mới và điều phối mạng lưới giao tiếp số." }
  ],
  "2.2": [
    { code: "2.2.CB1a", level: 1, desc: "Chia sẻ tệp dữ liệu đơn giản qua liên kết hoặc phần mềm học tập." },
    { code: "2.2.CB2a", level: 2, desc: "Chia sẻ nội dung số với bạn bè kèm theo thông tin nguồn tác giả cơ bản." },
    { code: "2.2.TC1a", level: 3, desc: "Lựa chọn và xác định rõ các công nghệ số phù hợp để trao đổi dữ liệu/nội dung số." },
    { code: "2.2.TC1b", level: 3, desc: "Giải thích vai trò trung gian trong việc chia sẻ thông tin và nội dung số." },
    { code: "2.2.TC1c", level: 3, desc: "Minh họa rõ ràng và thường xuyên cách tham chiếu và ghi chú nguồn dữ liệu." },
    { code: "2.2.TC2a", level: 4, desc: "Vận dụng thành thạo các công nghệ số phù hợp để chia sẻ và trao đổi thông tin." },
    { code: "2.2.TC2b", level: 4, desc: "Đóng vai trò trung gian một cách chủ động trong việc chia sẻ thông tin qua công nghệ số." },
    { code: "2.2.TC2c", level: 4, desc: "Áp dụng đúng các phương pháp tham chiếu và trích dẫn nguồn khi chia sẻ nội dung." },
    { code: "2.2.NC1a", level: 5, desc: "Quản lý và phân phối thông tin đa nền tảng một cách chủ động và an toàn." },
    { code: "2.2.NC2a", level: 6, desc: "Xây dựng các kênh chia sẻ tri thức mở và lan tỏa tài nguyên học tập cộng đồng." }
  ],
  "2.3": [
    { code: "2.3.CB1a", level: 1, desc: "Nhận biết các dịch vụ số công cộng và tiện ích trường học trực tuyến." },
    { code: "2.3.CB2a", level: 2, desc: "Sử dụng các dịch vụ số đơn giản phục vụ sinh hoạt và học tập hàng ngày." },
    { code: "2.3.TC1a", level: 3, desc: "Lựa chọn và sử dụng thành thạo các dịch vụ số phổ biến để tham gia xã hội." },
    { code: "2.3.TC1b", level: 3, desc: "Xác định rõ các công nghệ số hỗ trợ vai trò và trách nhiệm công dân số." },
    { code: "2.3.TC2a", level: 4, desc: "Lựa chọn độc lập các dịch vụ số phù hợp để thực hiện quyền và nghĩa vụ công dân." },
    { code: "2.3.TC2b", level: 4, desc: "Thảo luận và áp dụng các công nghệ số để nâng cao năng lực bản thân với tư cách công dân." },
    { code: "2.3.NC1a", level: 5, desc: "Chủ động đề xuất và tham gia các sáng kiến số phục vụ lợi ích cộng đồng." },
    { code: "2.3.NC2a", level: 6, desc: "Dẫn dắt các phong trào chuyển đổi số và nâng cao trách nhiệm xã hội số." }
  ],
  "2.4": [
    { code: "2.4.CB1a", level: 1, desc: "Cùng bạn quan sát và đóng góp ý kiến vào tài liệu học tập chung." },
    { code: "2.4.CB2a", level: 2, desc: "Sử dụng các công cụ cộng tác trực tuyến đơn giản (như bảng tương tác, Google Docs)." },
    { code: "2.4.TC1a", level: 3, desc: "Lựa chọn và sử dụng thuần thục các công cụ số được xác định cho việc hợp tác nhóm." },
    { code: "2.4.TC1b", level: 3, desc: "Đóng góp và cùng chỉnh sửa sản phẩm học tập trên nền tảng làm việc chung." },
    { code: "2.4.TC2a", level: 4, desc: "Lựa chọn độc lập các công cụ và công nghệ số phù hợp cho các quy trình hợp tác nhóm." },
    { code: "2.4.TC2b", level: 4, desc: "Chủ trì, phân công nhiệm vụ và phối hợp đồng sáng tạo sản phẩm số trong nhóm." },
    { code: "2.4.NC1a", level: 5, desc: "Thiết kế môi trường làm việc số tối ưu cho các dự án hợp tác liên ngành." },
    { code: "2.4.NC2a", level: 6, desc: "Điều hành mạng lưới làm việc cộng tác đa văn hóa và đa nền tảng quy mô lớn." }
  ],
  "2.5": [
    { code: "2.5.CB1a", level: 1, desc: "Giao tiếp lịch sự, thân thiện và tôn trọng khi nhắn tin, trao đổi trực tuyến." },
    { code: "2.5.CB2a", level: 2, desc: "Tuân thủ các quy định ứng xử cơ bản trong phòng học trực tuyến và nhóm chat." },
    { code: "2.5.TC1a", level: 3, desc: "Làm rõ và áp dụng các chuẩn mực hành vi thông thường khi tương tác trong môi trường số." },
    { code: "2.5.TC1b", level: 3, desc: "Thể hiện các chiến lược và phương thức giao tiếp phù hợp với quy trình trong môi trường số." },
    { code: "2.5.TC1c", level: 3, desc: "Mô tả và tôn trọng các khía cạnh đa dạng văn hóa và thế hệ được xác định rõ ràng." },
    { code: "2.5.TC2a", level: 4, desc: "Thảo luận và thống nhất các chuẩn mực hành vi, cách ứng xử khi làm việc nhóm trực tuyến." },
    { code: "2.5.TC2b", level: 4, desc: "Thảo luận và lựa chọn các chiến lược giao tiếp số phù hợp một cách độc lập." },
    { code: "2.5.TC2c", level: 4, desc: "Thảo luận về sự đa dạng văn hóa/thế hệ và các lưu ý cần thiết trong tương tác số." },
    { code: "2.5.NC1a", level: 5, desc: "Xử lý hiệu quả các xung đột giao tiếp trực tuyến và lan tỏa văn hóa mạng tích cực." },
    { code: "2.5.NC2a", level: 6, desc: "Xây dựng các quy tắc văn hóa ứng xử số chuẩn mực cho tổ chức và trường học." }
  ],
  "2.6": [
    { code: "2.6.CB1a", level: 1, desc: "Biết giữ bí mật mật khẩu tài khoản học tập cá nhân." },
    { code: "2.6.CB2a", level: 2, desc: "Nhận biết hồ sơ cá nhân trên môi trường số và không dùng chung tài khoản bừa bãi." },
    { code: "2.6.TC1a", level: 3, desc: "Phân biệt được các loại danh tính số thông thường và cách nhận diện chúng." },
    { code: "2.6.TC1b", level: 3, desc: "Giải thích các cách xác định rõ ràng để bảo vệ danh tiếng trực tuyến cá nhân." },
    { code: "2.6.TC1c", level: 3, desc: "Mô tả dữ liệu thu thập được thông qua các công cụ hoặc dịch vụ số thường dùng." },
    { code: "2.6.TC2a", level: 4, desc: "Hiển thị và quản lý độc lập các danh tính số cụ thể trên các nền tảng khác nhau." },
    { code: "2.6.TC2b", level: 4, desc: "Thảo luận và thực hiện các biện pháp cụ thể để bảo vệ uy tín và danh tiếng trực tuyến." },
    { code: "2.6.TC2c", level: 4, desc: "Thao tác và kiểm soát dữ liệu cá nhân tạo ra từ các công cụ/dịch vụ số một cách chủ động." },
    { code: "2.6.NC1a", level: 5, desc: "Xây dựng và bảo vệ hình ảnh, uy tín học thuật / nghề nghiệp số tích cực." },
    { code: "2.6.NC2a", level: 6, desc: "Quản trị toàn diện danh tính số và dữ liệu định danh của tổ chức." }
  ],
  "3.1": [
    { code: "3.1.CB1a", level: 1, desc: "Tạo và chỉnh sửa nội dung văn bản đơn giản, vẽ tranh hoặc ghi âm bằng phần mềm cơ bản." },
    { code: "3.1.CB2a", level: 2, desc: "Tạo bài trình chiếu đơn giản, video ngắn hoặc đồ họa cơ bản để thể hiện ý tưởng." },
    { code: "3.1.TC1a", level: 3, desc: "Chỉ ra cách tạo, chỉnh sửa nội dung có mục tiêu cụ thể và định dạng rõ ràng (văn bản, slide, sơ đồ)." },
    { code: "3.1.TC1b", level: 3, desc: "Áp dụng các định dạng chuẩn và bố cục hợp lý khi thiết kế sản phẩm học tập." },
    { code: "3.1.TC2a", level: 4, desc: "Thực hiện tạo/chỉnh sửa nội dung số ở các định dạng khác nhau để thể hiện bản thân." },
    { code: "3.1.TC2b", level: 4, desc: "Biên tập âm thanh, hình ảnh, video và đồ họa thông tin (infographic) chất lượng cao." },
    { code: "3.1.NC1a", level: 5, desc: "Phát triển nội dung số tương tác và các ấn phẩm đa phương tiện chuyên nghiệp." },
    { code: "3.1.NC2a", level: 6, desc: "Sáng tạo các công trình truyền thông số phức tạp và có giá trị thẩm mỹ cao." }
  ],
  "3.2": [
    { code: "3.2.CB1a", level: 1, desc: "Chèn hình ảnh, âm thanh có sẵn vào tài liệu văn bản hoặc bài thuyết trình." },
    { code: "3.2.CB2a", level: 2, desc: "Chỉnh sửa, cắt ghép lại các nội dung số đơn giản để phục vụ bài học." },
    { code: "3.2.TC1a", level: 3, desc: "Tổng hợp, xử lý và kết hợp dữ liệu từ nhiều nguồn khác nhau vào một sản phẩm số mới." },
    { code: "3.2.TC1b", level: 3, desc: "Chuyển đổi định dạng tệp tin và tích hợp các thành phần đa phương tiện phù hợp." },
    { code: "3.2.TC2a", level: 4, desc: "Tái cấu trúc và nâng cấp nội dung số sẵn có để tạo ra giá trị mới độc đáo." },
    { code: "3.2.TC2b", level: 4, desc: "Kết hợp linh hoạt các định dạng tài nguyên số phục vụ giải thích kiến thức phức tạp." },
    { code: "3.2.NC1a", level: 5, desc: "Tích hợp hệ thống dữ liệu số đa nguồn thành các giải pháp học liệu tương tác." },
    { code: "3.2.NC2a", level: 6, desc: "Thiết kế kiến trúc tích hợp nội dung số quy mô lớn và tương thích đa nền tảng." }
  ],
  "3.3": [
    { code: "3.3.CB1a", level: 1, desc: "Nhận biết nội dung trên mạng thuộc quyền sở hữu của người tạo ra." },
    { code: "3.3.CB2a", level: 2, desc: "Biết ghi nguồn tác giả khi sử dụng hình ảnh, bài viết tìm thấy trên internet." },
    { code: "3.3.TC1a", level: 3, desc: "Hiểu và tuân thủ các quy định bản quyền, quyền sở hữu trí tuệ khi sử dụng tài nguyên số." },
    { code: "3.3.TC1b", level: 3, desc: "Nhận biết và áp dụng đúng các loại giấy phép tài nguyên giáo dục mở (Creative Commons)." },
    { code: "3.3.TC2a", level: 4, desc: "Trích dẫn nguồn tài liệu số chính xác theo chuẩn khoa học trong các sản phẩm học tập." },
    { code: "3.3.TC2b", level: 4, desc: "Lựa chọn và đăng ký giấy phép bản quyền phù hợp cho các sản phẩm số cá nhân/nhóm." },
    { code: "3.3.NC1a", level: 5, desc: "Tư vấn và kiểm soát việc tuân thủ bản quyền số trong các dự án học đường." },
    { code: "3.3.NC2a", level: 6, desc: "Thẩm định pháp lý về sở hữu trí tuệ số và xây dựng chính sách bản quyền mở." }
  ],
  "3.4": [
    { code: "3.4.CB1a", level: 1, desc: "Làm quen với các câu lệnh tuần tự đơn giản qua môi trường kéo thả (Scratch Jr, Code.org)." },
    { code: "3.4.CB2a", level: 2, desc: "Xây dựng kịch bản và lập trình hoạt hình/trò chơi đơn giản bằng Scratch." },
    { code: "3.4.TC1a", level: 3, desc: "Hiểu và áp dụng các cấu trúc rẽ nhánh, lặp, biến và hàm trong lập trình." },
    { code: "3.4.TC1b", level: 3, desc: "Viết chương trình máy tính để giải quyết bài toán học tập cụ thể bằng ngôn ngữ lập trình." },
    { code: "3.4.TC2a", level: 4, desc: "Thiết kế thuật toán, tổ chức chương trình dạng mô-đun và gỡ lỗi (debug) thành thạo." },
    { code: "3.4.TC2b", level: 4, desc: "Xây dựng ứng dụng phần mềm hoặc trang web đơn giản phục vụ bài học." },
    { code: "3.4.NC1a", level: 5, desc: "Áp dụng cấu trúc dữ liệu và giải thuật nâng cao để tối ưu hóa chương trình." },
    { code: "3.4.NC2a", level: 6, desc: "Phát triển các hệ thống phần mềm hoàn chỉnh và tích hợp công nghệ mới." }
  ],
  "4.1": [
    { code: "4.1.CB1a", level: 1, desc: "Sử dụng và bảo quản thiết bị điện tử đúng cách, cẩn thận." },
    { code: "4.1.CB2a", level: 2, desc: "Nhận biết các dấu hiệu nguy hiểm khi cắm thiết bị lưu trữ ngoài hoặc mở tệp lạ." },
    { code: "4.1.TC1a", level: 3, desc: "Thiết lập mật khẩu an toàn, khóa màn hình và cập nhật phần mềm bảo mật định kỳ." },
    { code: "4.1.TC1b", level: 3, desc: "Nhận biết và phòng ngừa các loại virus, mã độc hại (malware) xâm nhập thiết bị." },
    { code: "4.1.TC2a", level: 4, desc: "Cấu hình tường lửa, sao lưu an toàn và kiểm tra bảo mật thiết bị khi dùng mạng công cộng." },
    { code: "4.1.TC2b", level: 4, desc: "Chẩn đoán và cô lập thiết bị khi nghi ngờ bị nhiễm phần mềm độc hại." },
    { code: "4.1.NC1a", level: 5, desc: "Thiết lập quy trình an toàn thông tin toàn diện cho mạng thiết bị học tập." },
    { code: "4.1.NC2a", level: 6, desc: "Ứng phó và khắc phục sự cố tấn công an ninh mạng trên hệ thống thiết bị." }
  ],
  "4.2": [
    { code: "4.2.CB1a", level: 1, desc: "Không chia sẻ thông tin cá nhân (họ tên, trường lớp, số điện thoại) cho người lạ trên mạng." },
    { code: "4.2.CB2a", level: 2, desc: "Nhận biết tầm quan trọng của việc giữ kín thông tin định danh và mật khẩu riêng tư." },
    { code: "4.2.TC1a", level: 3, desc: "Giải thích các quy tắc cơ bản và phổ biến để bảo vệ dữ liệu cá nhân trong môi trường số." },
    { code: "4.2.TC1b", level: 3, desc: "Nhận biết các hình thức lừa đảo trực tuyến (phishing) nhằm đánh cắp thông tin." },
    { code: "4.2.TC2a", level: 4, desc: "Thảo luận và áp dụng thành thạo các biện pháp bảo vệ dữ liệu cá nhân và quyền riêng tư." },
    { code: "4.2.TC2b", level: 4, desc: "Áp dụng xác thực hai yếu tố (2FA) và kiểm soát quyền truy cập của các ứng dụng." },
    { code: "4.2.NC1a", level: 5, desc: "Đánh giá mức độ rủi ro quyền riêng tư và áp dụng các biện pháp mã hóa dữ liệu." },
    { code: "4.2.NC2a", level: 6, desc: "Xây dựng chính sách bảo vệ dữ liệu cá nhân theo tiêu chuẩn an toàn thông tin quốc gia." }
  ],
  "4.3": [
    { code: "4.3.CB1a", level: 1, desc: "Ngồi học đúng tư thế, giữ khoảng cách mắt hợp lý khi dùng máy tính hoặc điện thoại." },
    { code: "4.3.CB2a", level: 2, desc: "Nghỉ ngơi mắt và vận động nhẹ sau mỗi khoảng thời gian sử dụng thiết bị số." },
    { code: "4.3.TC1a", level: 3, desc: "Hiểu tác động của thiết bị số đến thị lực, xương khớp và sức khỏe tinh thần." },
    { code: "4.3.TC1b", level: 3, desc: "Nhận biết và phòng ngừa nguy cơ nghiện mạng xã hội, trò chơi trực tuyến." },
    { code: "4.3.TC2a", level: 4, desc: "Quản lý thời gian sử dụng màn hình (Screen Time) một cách khoa học và tự giác." },
    { code: "4.3.TC2b", level: 4, desc: "Giữ gìn sự cân bằng tâm lý và bảo vệ an sinh tinh thần trên môi trường số." },
    { code: "4.3.NC1a", level: 5, desc: "Tuyên truyền lối sống số lành mạnh và hỗ trợ bạn bè phòng chống bắt nạt mạng." },
    { code: "4.3.NC2a", level: 6, desc: "Đánh giá tác động toàn diện của công nghệ số đến hành vi và tâm lý cộng đồng." }
  ],
  "4.4": [
    { code: "4.4.CB1a", level: 1, desc: "Tắt thiết bị điện tử khi không sử dụng để tiết kiệm năng lượng." },
    { code: "4.4.CB2a", level: 2, desc: "Tận dụng tài liệu số để giảm thiểu việc in ấn lãng phí giấy." },
    { code: "4.4.TC1a", level: 3, desc: "Nhận thức về rác thải điện tử (E-waste) và tầm quan trọng của việc tái chế thiết bị số." },
    { code: "4.4.TC1b", level: 3, desc: "Thực hành các biện pháp tiết kiệm điện năng khi vận hành máy tính và thiết bị ngoại vi." },
    { code: "4.4.TC2a", level: 4, desc: "Tối ưu hóa tài nguyên số để giảm thiểu dấu chân carbon kỹ thuật số." },
    { code: "4.4.TC2b", level: 4, desc: "Tham gia các chương trình thu gom, tái chế thiết bị công nghệ cũ an toàn." },
    { code: "4.4.NC1a", level: 5, desc: "Đề xuất và áp dụng các giải pháp công nghệ xanh trong trường học." },
    { code: "4.4.NC2a", level: 6, desc: "Dẫn dắt các sáng kiến phát triển bền vững và giảm thiểu tác động môi trường của CNTT." }
  ],
  "5.1": [
    { code: "5.1.CB1a", level: 1, desc: "Nhận biết lỗi kỹ thuật đơn giản như mất âm thanh, bàn phím/chuột chưa cắm chặt." },
    { code: "5.1.CB2a", level: 2, desc: "Biết khởi động lại phần mềm hoặc máy tính khi gặp sự cố đứng máy." },
    { code: "5.1.TC1a", level: 3, desc: "Chẩn đoán và xử lý các sự cố cơ bản về phần mềm, phần cứng và kết nối mạng." },
    { code: "5.1.TC1b", level: 3, desc: "Tìm kiếm giải pháp kỹ thuật qua tài liệu hướng dẫn trực tuyến và diễn đàn trợ giúp." },
    { code: "5.1.TC2a", level: 4, desc: "Tự khắc phục các lỗi hệ thống, cài đặt lại phần mềm và tối ưu hiệu suất thiết bị." },
    { code: "5.1.TC2b", level: 4, desc: "Hỗ trợ bạn bè xử lý các vấn đề kỹ thuật phát sinh trong quá trình học tập nhóm." },
    { code: "5.1.NC1a", level: 5, desc: "Chẩn đoán và khắc phục sự cố hệ thống mạng và ứng dụng phức tạp." },
    { code: "5.1.NC2a", level: 6, desc: "Thiết kế quy trình bảo trì, giám sát và xử lý lỗi kỹ thuật tự động." }
  ],
  "5.2": [
    { code: "5.2.CB1a", level: 1, desc: "Lựa chọn công cụ phần mềm phù hợp để vẽ tranh, gõ văn bản theo yêu cầu." },
    { code: "5.2.CB2a", level: 2, desc: "Tìm kiếm và lựa chọn ứng dụng hỗ trợ ôn tập, làm bài tập hiệu quả." },
    { code: "5.2.TC1a", level: 3, desc: "Phân tích nhu cầu học tập và lựa chọn giải pháp/công cụ công nghệ số tối ưu." },
    { code: "5.2.TC1b", level: 3, desc: "Đánh giá sự phù hợp của các phần mềm và nền tảng số đối với từng nhiệm vụ cụ thể." },
    { code: "5.2.TC2a", level: 4, desc: "Tùy biến và kết hợp các công cụ số để đáp ứng nhu cầu nghiên cứu, sáng tạo phức tạp." },
    { code: "5.2.TC2b", level: 4, desc: "Đề xuất các ứng dụng công nghệ mới nhằm nâng cao chất lượng hoạt động học tập." },
    { code: "5.2.NC1a", level: 5, desc: "Xây dựng chiến lược áp dụng các giải pháp số hóa toàn diện cho tổ chức." },
    { code: "5.2.NC2a", level: 6, desc: "Nghiên cứu và thử nghiệm các giải pháp công nghệ tiên phong cho giáo dục." }
  ],
  "5.3": [
    { code: "5.3.CB1a", level: 1, desc: "Sử dụng công cụ số để biểu đạt ý tưởng sáng tạo trong các bài tập vẽ/kể chuyện." },
    { code: "5.3.CB2a", level: 2, desc: "Tạo ra các sản phẩm học tập đa dạng, độc đáo nhờ kết hợp phần mềm số." },
    { code: "5.3.TC1a", level: 3, desc: "Ứng dụng công nghệ số để giải quyết sáng tạo các vấn đề thực tiễn trong học tập." },
    { code: "5.3.TC1b", level: 3, desc: "Thiết kế sản phẩm số mang tính ứng dụng cao hỗ trợ học tập liên môn." },
    { code: "5.3.TC2a", level: 4, desc: "Đổi mới phương pháp giải quyết vấn đề bằng công cụ mô phỏng và mô hình hóa số." },
    { code: "5.3.TC2b", level: 4, desc: "Sáng tạo các giải pháp số độc đáo đáp ứng thách thức của cộng đồng học sinh." },
    { code: "5.3.NC1a", level: 5, desc: "Dẫn dắt các dự án đổi mới sáng tạo số có giá trị ứng dụng thực tế cao." },
    { code: "5.3.NC2a", level: 6, desc: "Phát minh và phát triển các sản phẩm, mô hình chuyển đổi số đột phá." }
  ],
  "5.4": [
    { code: "5.4.CB1a", level: 1, desc: "Nhận biết những thao tác công nghệ mình chưa biết làm và nhờ trợ giúp." },
    { code: "5.4.CB2a", level: 2, desc: "Chủ động xem video hướng dẫn để tự rèn luyện kỹ năng sử dụng máy tính mới." },
    { code: "5.4.TC1a", level: 3, desc: "Tự đánh giá khoảng trống kỹ năng số của bản thân và lập kế hoạch tự bồi dưỡng." },
    { code: "5.4.TC1b", level: 3, desc: "Tham gia các khóa học, diễn đàn trực tuyến để cập nhật và nâng cao năng lực số." },
    { code: "5.4.TC2a", level: 4, desc: "Chủ động thích ứng và làm chủ các công cụ công nghệ mới xuất hiện." },
    { code: "5.4.TC2b", level: 4, desc: "Chia sẻ kinh nghiệm và hỗ trợ người khác cùng phát triển năng lực số." },
    { code: "5.4.NC1a", level: 5, desc: "Xây dựng chương trình phát triển năng lực số cá nhân và nhóm học tập." },
    { code: "5.4.NC2a", level: 6, desc: "Định hình khung năng lực số và dẫn dắt hoạt động đào tạo số cho cộng đồng." }
  ],
  "6.1": [
    { code: "6.1.CB1a", level: 1, desc: "Nhận biết AI trong các sản phẩm quen thuộc (trợ lý giọng nói, robot hút bụi, nhận diện khuôn mặt)." },
    { code: "6.1.CB2a", level: 2, desc: "Hiểu nguyên lý cơ bản: AI học từ dữ liệu do con người cung cấp; AI không có cảm xúc." },
    { code: "6.1.TC1a", level: 3, desc: "Giải thích các thành phần cơ bản của hệ thống AI gồm Dữ liệu + Thuật toán + Mô hình học máy." },
    { code: "6.1.TC1b", level: 3, desc: "Phân biệt trí tuệ nhân tạo (AI) với các chương trình phần mềm tự động thông thường." },
    { code: "6.1.TC2a", level: 4, desc: "Phân tích cách AI học sâu (Machine Learning/Deep Learning) và nhận diện quy luật dữ liệu." },
    { code: "6.1.TC2b", level: 4, desc: "Nhận biết hiện tượng thiên vị dữ liệu (data bias) và các yếu tố ảnh hưởng đến độ chính xác AI." },
    { code: "6.1.NC1a", level: 5, desc: "Đánh giá cấu trúc mô hình ngôn ngữ lớn (LLM) và các kiến trúc AI tạo sinh hiện đại." },
    { code: "6.1.NC2a", level: 6, desc: "Nghiên cứu sâu nguyên lý thuật toán AI tiên tiến và đề xuất cải tiến mô hình." }
  ],
  "6.2": [
    { code: "6.2.CB1a", level: 1, desc: "Trải nghiệm tương tác cơ bản với công cụ AI đơn giản dưới sự hướng dẫn của thầy cô." },
    { code: "6.2.CB2a", level: 2, desc: "Sử dụng công cụ AI hỗ trợ tìm kiếm ý tưởng bài học hoặc tra cứu/dịch thuật cơ bản." },
    { code: "6.2.TC1a", level: 3, desc: "Sử dụng AI tạo sinh để hỗ trợ học tập, giải thích khái niệm và tóm tắt tài liệu." },
    { code: "6.2.TC1b", level: 3, desc: "Viết câu lệnh (Prompt) cơ bản rõ ràng, đủ ngữ cảnh để tương tác hiệu quả với AI." },
    { code: "6.2.TC2a", level: 4, desc: "Áp dụng kỹ thuật viết Prompt nâng cao (đóng vai, cung cấp ví dụ, định dạng đầu ra) với AI." },
    { code: "6.2.TC2b", level: 4, desc: "Tích hợp công cụ AI vào quy trình nghiên cứu, làm bài tập và hoàn thành dự án học tập." },
    { code: "6.2.NC1a", level: 5, desc: "Tùy biến và tích hợp API AI để tự động hóa các tác vụ học tập và nghiên cứu phức tạp." },
    { code: "6.2.NC2a", level: 6, desc: "Phát triển các ứng dụng trí tuệ nhân tạo chuyên biệt phục vụ bài toán thực tế." }
  ],
  "6.3": [
    { code: "6.3.CB1a", level: 1, desc: "Nhận biết AI có thể đưa ra kết quả sai và cần hỏi lại thầy cô/người lớn để kiểm chứng." },
    { code: "6.3.CB2a", level: 2, desc: "Đối chiếu câu trả lời của AI với sách giáo khoa và tài liệu chính thống." },
    { code: "6.3.TC1a", level: 3, desc: "Phân tích hiện tượng ảo giác (hallucination) và đánh giá tính chính xác của phản hồi AI." },
    { code: "6.3.TC1b", level: 3, desc: "Nhận thức rủi ro bảo mật dữ liệu và quyền riêng tư khi đưa thông tin cá nhân vào công cụ AI." },
    { code: "6.3.TC2a", level: 4, desc: "Thẩm định độc lập và phản biện nội dung do AI tạo ra trước khi sử dụng vào học tập." },
    { code: "6.3.TC2b", level: 4, desc: "Thực hiện liêm chính học thuật và trích dẫn rõ ràng khi sử dụng nội dung do AI hỗ trợ." },
    { code: "6.3.NC1a", level: 5, desc: "Đánh giá toàn diện rủi ro đạo đức, pháp lý và tác động xã hội của các ứng dụng AI." },
    { code: "6.3.NC2a", level: 6, desc: "Xây dựng tiêu chuẩn an toàn và liêm chính trong việc ứng dụng AI cho nhà trường/tổ chức." }
  ]
};

// AI Specific Requirements by Grade (Decision 3439 & 2422)
export const AI_GRADE_REQUIREMENTS: Record<number, { code: string; desc: string }[]> = {
  1: [
    { code: "A1.1", desc: "Nhận biết con người có cảm xúc, AI thì không; AI thể hiện cảm xúc do lập trình." },
    { code: "C1.1", desc: "Nhận biết AI trong một số sản phẩm quen thuộc (loa thông minh, robot hút bụi)." },
    { code: "D1.1", desc: "Nêu được ví dụ về tình huống AI học từ hình ảnh hoặc thông tin con người cung cấp." }
  ],
  6: [
    { code: "A1.6", desc: "Giải thích AI do con người tạo ra để phục vụ nhiệm vụ cụ thể, không tự sinh ra." },
    { code: "C1.6", desc: "Hiểu các thành phần cơ bản của AI (Dữ liệu + Thuật toán) và cách chúng hoạt động." },
    { code: "D1.6", desc: "Phân tích được khi nào nên hoặc không nên dùng AI trong các tình huống thực tế." }
  ],
  10: [
    { code: "A1.10", desc: "Xác định vai trò dẫn dắt của con người trong việc thiết kế và tùy chỉnh hệ thống AI." },
    { code: "C2.10", desc: "Liên hệ ứng dụng AI với các vấn đề thực tế (nông nghiệp, y tế, cộng đồng)." },
    { code: "D2.10", desc: "Mô tả cấu trúc cơ bản hệ thống AI (Dữ liệu, Mô hình, Đầu ra, Phản hồi)." }
  ]
};

// ==========================================
// KHUNG NĂNG LỰC AI THEO QUYẾT ĐỊNH 2422/QĐ-BGDĐT
// ==========================================
export const AI_2422_STRANDS = [
  { code: "A", label: "A. Tư duy lấy con người làm trung tâm", desc: "Tính chủ động của con người, AI vì sự tiến bộ, Công dân trong kỉ nguyên AI" },
  { code: "B", label: "B. Đạo đức AI", desc: "Khía cạnh đạo đức, Sử dụng AI an toàn & có trách nhiệm, Nguyên tắc đạo đức & Xã hội" },
  { code: "C", label: "C. Các kĩ thuật và ứng dụng AI", desc: "Đặc điểm AI, Ứng dụng AI học tập & cuộc sống, Công nghệ AI, Dữ liệu, Thuật toán" },
  { code: "D", label: "D. Thiết kế hệ thống AI", desc: "Nhận diện & hình thành giải pháp, Cấu trúc & tương tác, Cải tiến hệ thống" }
];

export const AI_2422_TOPICS: Record<string, { code: string; name: string }[]> = {
  "A": [
    { code: "A1", name: "Chủ đề A1. Tính chủ động của con người" },
    { code: "A2", name: "Chủ đề A2. AI vì sự tiến bộ của con người" },
    { code: "A3", name: "Chủ đề A3. Công dân trong kỉ nguyên AI" }
  ],
  "B": [
    { code: "B1", name: "Chủ đề B1. Các khía cạnh đạo đức của AI" },
    { code: "B2", name: "Chủ đề B2. Sử dụng AI an toàn và có trách nhiệm" },
    { code: "B3", name: "Chủ đề B3. Nguyên tắc đạo đức và trách nhiệm xã hội" }
  ],
  "C": [
    { code: "C1", name: "Chủ đề C1. Đặc điểm chính của AI" },
    { code: "C2", name: "Chủ đề C2. Ứng dụng AI trong học tập và cuộc sống" },
    { code: "C3", name: "Chủ đề C3. Công nghệ AI" },
    { code: "C4", name: "Chủ đề C4. Dữ liệu trong AI" },
    { code: "C5", name: "Chủ đề C5. Kĩ thuật và thuật toán AI" }
  ],
  "D": [
    { code: "D1", name: "Chủ đề D1. Nhận diện và hình thành giải pháp" },
    { code: "D2", name: "Chủ đề D2. Cấu trúc và tương tác, cải tiến hệ thống" }
  ]
};

// Chi tiết toàn bộ Yêu cầu cần đạt theo đúng Mã chuẩn [Lớp].[Mã chủ đề].[Số thứ tự/MR] từ Quyết định 2422/QĐ-BGDĐT
export const AI_2422_GRADE_REQUIREMENTS: Record<number, { code: string; topicCode: string; strandCode: string; topicName: string; desc: string; isExtension?: boolean }[]> = {
  1: [
    { code: "1.A1.1", topicCode: "A1", strandCode: "A", topicName: "Tính chủ động của con người", desc: "Nêu được ví dụ về một số cảm xúc quen thuộc của con người (vui, buồn, giận dữ, sợ hãi, ngạc nhiên,…) và bước đầu nhận ra con người có cảm xúc còn AI thì không." },
    { code: "1.A1.2", topicCode: "A1", strandCode: "A", topicName: "Tính chủ động của con người", desc: "Nêu được rằng AI có thể mô phỏng hoặc nhận diện cảm xúc của con người, chứ không trải nghiệm cảm xúc như con người." },
    { code: "1.A1.3", topicCode: "A1", strandCode: "A", topicName: "Tính chủ động của con người", desc: "Nêu được rằng việc AI thể hiện cảm xúc là do con người lập trình hoặc thiết kế trước." },
    { code: "1.A1.4", topicCode: "A1", strandCode: "A", topicName: "Tính chủ động của con người", desc: "Nêu được một số ví dụ minh họa và giải thích được rằng biểu hiện của AI chỉ là phản ứng được lập trình sẵn." },
    { code: "1.A2.1", topicCode: "A2", strandCode: "A", topicName: "AI vì sự tiến bộ của con người", desc: "Nêu được các cách mà AI thể hiện cảm xúc qua hình ảnh, giọng nói hoặc hành vi." },
    { code: "1.A2.MR1", topicCode: "A2", strandCode: "A", topicName: "AI vì sự tiến bộ của con người", desc: "[Mở rộng] Nêu được rằng biểu hiện cảm xúc giúp AI giao tiếp tự nhiên hơn, khiến người dùng cảm thấy gần gũi, thoải mái hơn.", isExtension: true },
    { code: "1.A2.2", topicCode: "A2", strandCode: "A", topicName: "AI vì sự tiến bộ của con người", desc: "Nhận biết và kể tên được một số sản phẩm hoặc thiết bị có sử dụng AI (loa thông minh, trợ lí ảo, robot hút bụi, camera nhận diện...)." },
    { code: "1.A2.3", topicCode: "A2", strandCode: "A", topicName: "AI vì sự tiến bộ của con người", desc: "Mô tả được công dụng chính của từng sản phẩm và cách AI giúp sản phẩm hoạt động thông minh hơn." },
    { code: "1.B1.1", topicCode: "B1", strandCode: "B", topicName: "Các khía cạnh đạo đức của AI", desc: "Nêu được một số hành vi sử dụng AI có thể gây hại cho người khác." },
    { code: "1.B3.1", topicCode: "B3", strandCode: "B", topicName: "Nguyên tắc đạo đức và trách nhiệm xã hội", desc: "Nhận biết được rằng không được phép sử dụng AI với mục đích làm hại người khác." },
    { code: "1.B3.2", topicCode: "B3", strandCode: "B", topicName: "Nguyên tắc đạo đức và trách nhiệm xã hội", desc: "Nêu được ví dụ về việc con người sử dụng AI đúng cách, vì mục đích tốt đẹp." },
    { code: "1.C1.1", topicCode: "C1", strandCode: "C", topicName: "Đặc điểm chính của AI", desc: "Nhận biết được AI trong một số ví dụ cụ thể và đơn giản về AI." },
    { code: "1.C1.2", topicCode: "C1", strandCode: "C", topicName: "Đặc điểm chính của AI", desc: "Nhận diện được một số công cụ AI quen thuộc và phổ biến trên điện thoại hoặc máy tính bảng." },
    { code: "1.C1.3", topicCode: "C1", strandCode: "C", topicName: "Đặc điểm chính của AI", desc: "Nhận biết được các thiết bị thông minh có các bộ phận giống con người (camera là mắt, micro là tai)." },
    { code: "1.C1.4", topicCode: "C1", strandCode: "C", topicName: "Đặc điểm chính của AI", desc: "Nhận biết được AI có khả năng hiểu các mệnh lệnh đơn giản của con người, trò chuyện theo kịch bản định sẵn." },
    { code: "1.C1.MR1", topicCode: "C1", strandCode: "C", topicName: "Đặc điểm chính của AI", desc: "[Mở rộng] Nhận biết được AI có khả năng xử lí hình ảnh nhận được để nhận diện các đồ vật.", isExtension: true },
    { code: "1.C1.MR2", topicCode: "C1", strandCode: "C", topicName: "Đặc điểm chính của AI", desc: "[Mở rộng] Nhận biết được AI có khả năng xử lí âm thanh để phân biệt các loại âm thanh khác nhau.", isExtension: true },
    { code: "1.D1.1", topicCode: "D1", strandCode: "D", topicName: "Nhận diện và hình thành giải pháp", desc: "Nêu được ví dụ về một tình huống mà AI học từ hình ảnh hoặc thông tin do con người cung cấp." },
    { code: "1.D1.MR1", topicCode: "D1", strandCode: "D", topicName: "Nhận diện và hình thành giải pháp", desc: "[Mở rộng] Biết được rằng để AI trả lời đúng cần có nhiều ví dụ đúng và khác nhau để AI học.", isExtension: true },
    { code: "1.D2.1", topicCode: "D2", strandCode: "D", topicName: "Cấu trúc và tương tác, cải tiến hệ thống", desc: "Nhận biết được có loại máy thông minh chỉ làm được một việc, có loại làm được nhiều việc khác nhau." },
    { code: "1.D2.2", topicCode: "D2", strandCode: "D", topicName: "Cấu trúc và tương tác, cải tiến hệ thống", desc: "Xếp được một số máy thông minh vào hai nhóm: chỉ làm được một việc và làm được nhiều việc khác nhau." }
  ],
  2: [
    { code: "2.A1.1", topicCode: "A1", strandCode: "A", topicName: "Tính chủ động của con người", desc: "Trình bày được một số tình huống trong cuộc sống mà AI có thể hỗ trợ con người hiệu quả." },
    { code: "2.A1.2", topicCode: "A1", strandCode: "A", topicName: "Tính chủ động của con người", desc: "Trình bày được tình huống không nên hoặc cần thận trọng khi sử dụng AI (làm lộ thông tin cá nhân, thay thế hoàn toàn con người)." },
    { code: "2.A1.3", topicCode: "A1", strandCode: "A", topicName: "Tính chủ động của con người", desc: "Nêu được ví dụ cụ thể về tình huống cần con người giám sát AI (lái xe tự lái, bác sĩ kiểm tra kết quả AI)." },
    { code: "2.A1.4", topicCode: "A1", strandCode: "A", topicName: "Tính chủ động của con người", desc: "Nêu được ví dụ về thái độ đúng đắn khi sử dụng AI: tin tưởng hợp lý, có trách nhiệm và sự kiểm soát của con người." },
    { code: "2.A2.1", topicCode: "A2", strandCode: "A", topicName: "AI vì sự tiến bộ của con người", desc: "Nêu được một số thiết bị hoặc ứng dụng trong gia đình có sử dụng AI." },
    { code: "2.A2.MR1", topicCode: "A2", strandCode: "A", topicName: "AI vì sự tiến bộ của con người", desc: "[Mở rộng] Thực hành sử dụng một số thiết bị hoặc ứng dụng có sử dụng AI với sự giám sát của giáo viên.", isExtension: true },
    { code: "2.A2.MR2", topicCode: "A2", strandCode: "A", topicName: "AI vì sự tiến bộ của con người", desc: "[Mở rộng] Nêu được rằng không được sử dụng thiết bị AI mà không có sự giám sát của người lớn.", isExtension: true },
    { code: "2.A2.2", topicCode: "A2", strandCode: "A", topicName: "AI vì sự tiến bộ của con người", desc: "Nhận biết và kể tên được các thành viên trong gia đình mà AI có thể hỗ trợ." },
    { code: "2.A2.MR3", topicCode: "A2", strandCode: "A", topicName: "AI vì sự tiến bộ của con người", desc: "[Mở rộng] Nêu được mục tiêu của AI trong gia đình là giúp cuộc sống tiện nghi, an toàn hơn.", isExtension: true },
    { code: "2.A3.1", topicCode: "A3", strandCode: "A", topicName: "Công dân trong kỉ nguyên AI", desc: "Nhận biết được mỗi lần tương tác với AI, AI có thể ghi nhận dữ liệu để học hỏi cách con người suy nghĩ." },
    { code: "2.A3.MR1", topicCode: "A3", strandCode: "A", topicName: "Công dân trong kỉ nguyên AI", desc: "[Mở rộng] Nêu được vai trò quan trọng của con người trong việc dạy AI qua cách tương tác có trách nhiệm.", isExtension: true },
    { code: "2.B1.1", topicCode: "B1", strandCode: "B", topicName: "Các khía cạnh đạo đức của AI", desc: "Nhận biết được AI đôi khi có thể thiên kiến, đối xử không công bằng với một số nhóm người." },
    { code: "2.B1.MR1", topicCode: "B1", strandCode: "B", topicName: "Các khía cạnh đạo đức của AI", desc: "[Mở rộng] Nêu được ví dụ về các tình huống thể hiện sự thiên kiến của AI.", isExtension: true },
    { code: "2.B1.MR2", topicCode: "B1", strandCode: "B", topicName: "Các khía cạnh đạo đức của AI", desc: "[Mở rộng] Giải thích được nếu dữ liệu chưa đa dạng thì AI có thể học theo cách thiên vị.", isExtension: true },
    { code: "2.B3.1", topicCode: "B3", strandCode: "B", topicName: "Nguyên tắc đạo đức và trách nhiệm xã hội", desc: "Kể được tên một số thứ là của riêng em và một số thứ là của người khác." },
    { code: "2.B3.2", topicCode: "B3", strandCode: "B", topicName: "Nguyên tắc đạo đức và trách nhiệm xã hội", desc: "Nêu được ví dụ về quyền sở hữu đối với sản phẩm do con người hoặc AI tạo ra." },
    { code: "2.B3.MR1", topicCode: "B3", strandCode: "B", topicName: "Nguyên tắc đạo đức và trách nhiệm xã hội", desc: "[Mở rộng] Phân biệt được thứ của mình với thứ của người khác trong một vài tình huống đơn giản.", isExtension: true },
    { code: "2.B3.MR2", topicCode: "B3", strandCode: "B", topicName: "Nguyên tắc đạo đức và trách nhiệm xã hội", desc: "[Mở rộng] Nêu được rằng muốn dùng thứ của người khác thì phải hỏi và được người đó đồng ý.", isExtension: true },
    { code: "2.C1.1", topicCode: "C1", strandCode: "C", topicName: "Đặc điểm chính của AI", desc: "Giải thích được dữ liệu là những ví dụ (hình ảnh, âm thanh) mà con người dùng để dạy cho AI." },
    { code: "2.C1.MR1", topicCode: "C1", strandCode: "C", topicName: "Đặc điểm chính của AI", desc: "[Mở rộng] So sánh được ở mức độ cơ bản giữa cách học của con người và AI.", isExtension: true },
    { code: "2.C3.1", topicCode: "C3", strandCode: "C", topicName: "Công nghệ AI", desc: "Nhận biết được rằng AI có thể phân loại đồ vật." },
    { code: "2.C3.2", topicCode: "C3", strandCode: "C", topicName: "Công nghệ AI", desc: "Nêu được rằng AI có thể phân loại sai." },
    { code: "2.C3.MR1", topicCode: "C3", strandCode: "C", topicName: "Công nghệ AI", desc: "[Mở rộng] Quan sát thao tác phân loại và so sánh cách AI phân loại với cách con người phân loại.", isExtension: true },
    { code: "2.D1.1", topicCode: "D1", strandCode: "D", topicName: "Nhận diện và hình thành giải pháp", desc: "Nêu được một số vấn đề đơn giản gần gũi có thể áp dụng AI để giải quyết." },
    { code: "2.D1.2", topicCode: "D1", strandCode: "D", topicName: "Nhận diện và hình thành giải pháp", desc: "Nêu được một số ý tưởng máy thông minh quanh em." },
    { code: "2.D1.MR1", topicCode: "D1", strandCode: "D", topicName: "Nhận diện và hình thành giải pháp", desc: "[Mở rộng] Nêu một số ví dụ phù hợp để dạy AI trong một tình huống cụ thể.", isExtension: true },
    { code: "2.D2.1", topicCode: "D2", strandCode: "D", topicName: "Cấu trúc và tương tác, cải tiến hệ thống", desc: "Giải thích được ở mức cơ bản vai trò của dữ liệu trong việc dạy AI." },
    { code: "2.D2.2", topicCode: "D2", strandCode: "D", topicName: "Cấu trúc và tương tác, cải tiến hệ thống", desc: "Giải thích được cần cung cấp cho AI dữ liệu chính xác, rõ ràng để AI đưa ra kết quả đúng." },
    { code: "2.D2.MR1", topicCode: "D2", strandCode: "D", topicName: "Cấu trúc và tương tác, cải tiến hệ thống", desc: "[Mở rộng] Thực hành thu thập một số dữ liệu để dạy AI trong một tình huống cụ thể.", isExtension: true }
  ],
  3: [
    { code: "3.A1.1", topicCode: "A1", strandCode: "A", topicName: "Tính chủ động của con người", desc: "Nhận biết được một số tình huống sử dụng AI hỗ trợ học sinh trong học tập." },
    { code: "3.A1.2", topicCode: "A1", strandCode: "A", topicName: "Tính chủ động của con người", desc: "Nêu được cách sử dụng trợ lí học tập thông minh, ứng dụng học ngôn ngữ để hỗ trợ học tập." },
    { code: "3.A1.MR1", topicCode: "A1", strandCode: "A", topicName: "Tính chủ động của con người", desc: "[Mở rộng] Thực hành sử dụng trợ lí học tập thông minh, ứng dụng học ngôn ngữ.", isExtension: true },
    { code: "3.A1.3", topicCode: "A1", strandCode: "A", topicName: "Tính chủ động của con người", desc: "Phân biệt được giữa sử dụng AI hỗ trợ (chủ động, có kiểm soát) và để AI làm thay toàn bộ (thụ động)." },
    { code: "3.A1.MR2", topicCode: "A1", strandCode: "A", topicName: "Tính chủ động của con người", desc: "[Mở rộng] Nêu được hậu quả của việc phụ thuộc quá mức vào AI (giảm tư duy độc lập, mất kĩ năng).", isExtension: true },
    { code: "3.A1.4", topicCode: "A1", strandCode: "A", topicName: "Tính chủ động của con người", desc: "Nêu được một số tình huống có thể gây rủi ro hoặc hậu quả không mong muốn khi dùng AI." },
    { code: "3.A1.5", topicCode: "A1", strandCode: "A", topicName: "Tính chủ động của con người", desc: "Tự đặt và trả lời được các câu hỏi trước khi quyết định dùng AI trong tình huống cụ thể." },
    { code: "3.A1.MR3", topicCode: "A1", strandCode: "A", topicName: "Tính chủ động của con người", desc: "[Mở rộng] Giải thích vì sao suy nghĩ trước khi dùng AI giúp phòng tránh rủi ro, bảo vệ an toàn.", isExtension: true },
    { code: "3.A2.1", topicCode: "A2", strandCode: "A", topicName: "AI vì sự tiến bộ của con người", desc: "Nhận biết được một số ứng dụng hoặc thiết bị AI trong trường học (robot, bảng thông minh, chấm bài...)." },
    { code: "3.A2.2", topicCode: "A2", strandCode: "A", topicName: "AI vì sự tiến bộ của con người", desc: "Nêu được mục đích của AI trong trường học: cá nhân hóa việc học, tăng hứng thú học tập." },
    { code: "3.A2.MR1", topicCode: "A2", strandCode: "A", topicName: "AI vì sự tiến bộ của con người", desc: "[Mở rộng] Mô tả trường học mong muốn trong tương lai có ứng dụng AI.", isExtension: true },
    { code: "3.A2.MR2", topicCode: "A2", strandCode: "A", topicName: "AI vì sự tiến bộ của con người", desc: "[Mở rộng] Đề xuất được một số nguyên tắc khi sử dụng AI trong học tập.", isExtension: true },
    { code: "3.A2.3", topicCode: "A2", strandCode: "A", topicName: "AI vì sự tiến bộ của con người", desc: "Nêu được các đối tượng trong trường học mà AI có thể hỗ trợ (học sinh, giáo viên...)." },
    { code: "3.A2.MR3", topicCode: "A2", strandCode: "A", topicName: "AI vì sự tiến bộ của con người", desc: "[Mở rộng] Nêu mục tiêu AI giúp việc dạy và học trở nên dễ dàng, hiệu quả và công bằng hơn.", isExtension: true },
    { code: "3.A3.1", topicCode: "A3", strandCode: "A", topicName: "Công dân trong kỉ nguyên AI", desc: "Nêu được ví dụ cụ thể về việc AI có thể sai (dịch sai, nhận diện nhầm, chatbot nói sai sự thật)." },
    { code: "3.A3.2", topicCode: "A3", strandCode: "A", topicName: "Công dân trong kỉ nguyên AI", desc: "Trình bày được khi dùng AI cần kiểm tra lại kết quả, so sánh nhiều nguồn và hỏi thầy cô/người lớn." },
    { code: "3.B2.1", topicCode: "B2", strandCode: "B", topicName: "Sử dụng AI an toàn và có trách nhiệm", desc: "Nhận biết và nêu được ví dụ về việc thông tin hoặc sản phẩm do AI tạo ra có thể không đúng sự thật." },
    { code: "3.B3.1", topicCode: "B3", strandCode: "B", topicName: "Nguyên tắc đạo đức và trách nhiệm xã hội", desc: "Nhận biết không nên tạo hoặc dùng AI cho mục đích xấu (lừa đảo, bắt nạt, gây hại)." },
    { code: "3.B3.MR1", topicCode: "B3", strandCode: "B", topicName: "Nguyên tắc đạo đức và trách nhiệm xã hội", desc: "[Mở rộng] Nêu được con người cần cung cấp dữ liệu đúng và đa dạng để AI hoạt động chính xác, công bằng.", isExtension: true },
    { code: "3.C4.1", topicCode: "C4", strandCode: "C", topicName: "Dữ liệu trong AI", desc: "Trình bày được khái niệm dữ liệu học máy thông qua một số ví dụ." },
    { code: "3.C4.MR1", topicCode: "C4", strandCode: "C", topicName: "Dữ liệu trong AI", desc: "[Mở rộng] Xác định được đặc trưng của một số bộ dữ liệu đơn giản.", isExtension: true },
    { code: "3.C5.1", topicCode: "C5", strandCode: "C", topicName: "Kĩ thuật và thuật toán AI", desc: "Mô tả được cấu trúc 'nếu... thì...' trong việc giải quyết tình huống hoặc phân loại." },
    { code: "3.C5.MR1", topicCode: "C5", strandCode: "C", topicName: "Kĩ thuật và thuật toán AI", desc: "[Mở rộng] Nêu được một số công cụ AI đơn giản sử dụng cấu trúc nếu... thì...", isExtension: true },
    { code: "3.C5.2", topicCode: "C5", strandCode: "C", topicName: "Kĩ thuật và thuật toán AI", desc: "Nêu được đặc điểm chính của học máy là học trên dữ liệu." },
    { code: "3.C5.3", topicCode: "C5", strandCode: "C", topicName: "Kĩ thuật và thuật toán AI", desc: "Nêu được tình huống áp dụng học máy (phân loại rau củ trong nông trại thông minh, dự báo mưa lũ...)." },
    { code: "3.C5.4", topicCode: "C5", strandCode: "C", topicName: "Kĩ thuật và thuật toán AI", desc: "Nhận biết được bài toán học máy phân loại và dự đoán qua tình huống cụ thể." },
    { code: "3.C5.MR2", topicCode: "C5", strandCode: "C", topicName: "Kĩ thuật và thuật toán AI", desc: "[Mở rộng] Minh họa bài toán phân loại và dự đoán bằng Teachable Machine / ML for Kids trong Scratch.", isExtension: true },
    { code: "3.D1.1", topicCode: "D1", strandCode: "D", topicName: "Nhận diện và hình thành giải pháp", desc: "Trình bày quá trình đơn giản huấn luyện AI: thu thập ví dụ và cho AI học từ ví dụ đó." },
    { code: "3.D2.1", topicCode: "D2", strandCode: "D", topicName: "Cấu trúc và tương tác, cải tiến hệ thống", desc: "Nêu được rằng dữ liệu dùng để dạy AI có thể bị thiếu, nhầm lẫn hoặc không đúng sự thật." },
    { code: "3.D2.2", topicCode: "D2", strandCode: "D", topicName: "Cấu trúc và tương tác, cải tiến hệ thống", desc: "Nêu được một số yêu cầu cơ bản đối với dữ liệu dùng để huấn luyện AI." },
    { code: "3.D2.MR1", topicCode: "D2", strandCode: "D", topicName: "Cấu trúc và tương tác, cải tiến hệ thống", desc: "[Mở rộng] Thực hành kiểm tra bộ dữ liệu mẫu và loại bỏ thẻ gán nhãn nhầm, không đúng sự thật.", isExtension: true },
    { code: "3.D2.3", topicCode: "D2", strandCode: "D", topicName: "Cấu trúc và tương tác, cải tiến hệ thống", desc: "Trình bày được rằng nếu dữ liệu sai hoặc không tốt thì AI sẽ không hiệu quả, thậm chí học sai." }
  ],
  4: [
    { code: "4.A1.1", topicCode: "A1", strandCode: "A", topicName: "Tính chủ động của con người", desc: "Trình bày một số lĩnh vực AI có thể hỗ trợ con người (nông nghiệp, y tế, giao thông...)." },
    { code: "4.A1.2", topicCode: "A1", strandCode: "A", topicName: "Tính chủ động của con người", desc: "Nhận biết AI hỗ trợ học tập và làm việc hiệu quả hơn nhưng không thể thay thế tư duy, cảm xúc, sáng tạo của con người." },
    { code: "4.A1.MR1", topicCode: "A1", strandCode: "A", topicName: "Tính chủ động của con người", desc: "[Mở rộng] Giải thích vì sao người học cần tự suy nghĩ, hiểu bài thay vì chỉ chép kết quả do AI đưa ra.", isExtension: true },
    { code: "4.A2.1", topicCode: "A2", strandCode: "A", topicName: "AI vì sự tiến bộ của con người", desc: "Nêu được AI giúp giải quyết vấn đề, tiết kiệm thời gian và nâng cao chất lượng cuộc sống." },
    { code: "4.A2.2", topicCode: "A2", strandCode: "A", topicName: "AI vì sự tiến bộ của con người", desc: "Trình bày các đối tượng AI có thể hỗ trợ (người lao động, người yếu thế...)." },
    { code: "4.A3.1", topicCode: "A3", strandCode: "A", topicName: "Công dân trong kỉ nguyên AI", desc: "Trình bày việc quyết định dùng AI phụ thuộc vào mục đích, nhu cầu và sự an toàn của con người." },
    { code: "4.A3.MR1", topicCode: "A3", strandCode: "A", topicName: "Công dân trong kỉ nguyên AI", desc: "[Mở rộng] Thực hành ra quyết định có sử dụng AI hay không trong một số tình huống cụ thể.", isExtension: true },
    { code: "4.B2.1", topicCode: "B2", strandCode: "B", topicName: "Sử dụng AI an toàn và có trách nhiệm", desc: "Nêu một số loại thông tin cá nhân cần giữ bí mật và không nên chia sẻ cho AI." },
    { code: "4.B2.2", topicCode: "B2", strandCode: "B", topicName: "Sử dụng AI an toàn và có trách nhiệm", desc: "Nêu một số hậu quả khi thông tin cá nhân bị lộ hoặc bị lợi dụng." },
    { code: "4.B2.MR1", topicCode: "B2", strandCode: "B", topicName: "Sử dụng AI an toàn và có trách nhiệm", desc: "[Mở rộng] Thực hành xử lí tình huống giả định đơn giản về việc bị lộ thông tin cá nhân khi dùng AI.", isExtension: true },
    { code: "4.C2.1", topicCode: "C2", strandCode: "C", topicName: "Ứng dụng AI trong học tập và cuộc sống", desc: "Nêu các ứng dụng của AI trong học tập và đời sống, đặc biệt gần gũi với bối cảnh Việt Nam." },
    { code: "4.C2.MR1", topicCode: "C2", strandCode: "C", topicName: "Ứng dụng AI trong học tập và cuộc sống", desc: "[Mở rộng] Thực hành trải nghiệm một số ứng dụng AI trong học tập và đời sống.", isExtension: true },
    { code: "4.C5.MR1", topicCode: "C5", strandCode: "C", topicName: "Kĩ thuật và thuật toán AI", desc: "[Mở rộng] Thực hiện các bước thao tác cơ bản với công cụ trải nghiệm AI trực quan (Teachable Machine/Scratch AI).", isExtension: true },
    { code: "4.C5.MR2", topicCode: "C5", strandCode: "C", topicName: "Kĩ thuật và thuật toán AI", desc: "[Mở rộng] Lặp lại đầy đủ 4 bước huấn luyện máy học với nhóm dữ liệu tự chọn và mô tả thao tác.", isExtension: true },
    { code: "4.D1.1", topicCode: "D1", strandCode: "D", topicName: "Nhận diện và hình thành giải pháp", desc: "Nêu ý tưởng ban đầu về cách AI giúp giải quyết vấn đề gần gũi ở Việt Nam (phân loại rác tái chế...)." },
    { code: "4.D1.MR1", topicCode: "D1", strandCode: "D", topicName: "Nhận diện và hình thành giải pháp", desc: "[Mở rộng] Trình bày cách dùng AI giải quyết vấn đề đơn giản (dịch tiếng dân tộc thiểu số sang tiếng phổ thông).", isExtension: true },
    { code: "4.D2.1", topicCode: "D2", strandCode: "D", topicName: "Cấu trúc và tương tác, cải tiến hệ thống", desc: "Trình bày con người cần liên tục đánh giá và nâng cấp sản phẩm để hệ thống AI cho ra kết quả tốt hơn." }
  ],
  5: [
    { code: "5.A1.1", topicCode: "A1", strandCode: "A", topicName: "Tính chủ động của con người", desc: "Trình bày AI có thể làm việc lặp lại, nguy hiểm thay con người (lắp ráp nhà máy, kiểm tra lỗi, xe tự lái)." },
    { code: "5.A1.2", topicCode: "A1", strandCode: "A", topicName: "Tính chủ động của con người", desc: "Nêu ví dụ về trách nhiệm của người tạo và dùng AI (bác sĩ kiểm tra lại kết quả chẩn đoán của AI)." },
    { code: "5.A1.MR1", topicCode: "A1", strandCode: "A", topicName: "Tính chủ động của con người", desc: "[Mở rộng] Trình bày con người chịu trách nhiệm cuối cùng về mọi quyết định hoặc kết quả do AI tạo ra.", isExtension: true },
    { code: "5.A2.1", topicCode: "A2", strandCode: "A", topicName: "AI vì sự tiến bộ của con người", desc: "Giải thích mục đích AI là hỗ trợ con người, không thay thế vai trò, tư duy, cảm xúc và trách nhiệm xã hội." },
    { code: "5.A2.MR1", topicCode: "A2", strandCode: "A", topicName: "AI vì sự tiến bộ của con người", desc: "[Mở rộng] Trình bày chỉ con người mới có tư duy sáng tạo, cảm xúc và đạo đức nên con người luôn phải kiểm soát AI.", isExtension: true },
    { code: "5.A2.2", topicCode: "A2", strandCode: "A", topicName: "AI vì sự tiến bộ của con người", desc: "Trình bày AI phục vụ lợi ích chung của xã hội, cải thiện chất lượng sống và hỗ trợ nhiều lĩnh vực." },
    { code: "5.A2.3", topicCode: "A2", strandCode: "A", topicName: "AI vì sự tiến bộ của con người", desc: "Nêu ví dụ về AI mang lại lợi ích cộng đồng: y tế, giáo dục, môi trường." },
    { code: "5.A3.1", topicCode: "A3", strandCode: "A", topicName: "Công dân trong kỉ nguyên AI", desc: "Trình bày mọi người đều cần hiểu và biết cách sử dụng AI phục vụ cuộc sống an toàn, hiệu quả." },
    { code: "5.A3.2", topicCode: "A3", strandCode: "A", topicName: "Công dân trong kỉ nguyên AI", desc: "Trình bày việc dùng AI phải đúng mục đích, tránh lạm dụng, không chia sẻ thông tin cá nhân bừa bãi." },
    { code: "5.A3.MR1", topicCode: "A3", strandCode: "A", topicName: "Công dân trong kỉ nguyên AI", desc: "[Mở rộng] Trình bày ý tưởng về tình huống trong tương lai mà AI hỗ trợ trẻ em hoặc người cao tuổi.", isExtension: true },
    { code: "5.B1.1", topicCode: "B1", strandCode: "B", topicName: "Các khía cạnh đạo đức của AI", desc: "Nêu ví dụ về sự công bằng hoặc không công bằng trong đời sống và khi AI phục vụ con người." },
    { code: "5.B1.2", topicCode: "B1", strandCode: "B", topicName: "Các khía cạnh đạo đức của AI", desc: "Giải thích AI cần phục vụ công bằng, không phân biệt giới tính, vùng miền, hoàn cảnh kinh tế." },
    { code: "5.B2.1", topicCode: "B2", strandCode: "B", topicName: "Sử dụng AI an toàn và có trách nhiệm", desc: "Nêu cách giúp AI hoạt động công bằng hơn (dữ liệu đa dạng, tránh định kiến, kiểm tra lại kết quả)." },
    { code: "5.B2.MR1", topicCode: "B2", strandCode: "B", topicName: "Sử dụng AI an toàn và có trách nhiệm", desc: "[Mở rộng] Đề xuất một số quy tắc khi thu thập dữ liệu để có được bộ dữ liệu đa dạng.", isExtension: true },
    { code: "5.B3.1", topicCode: "B3", strandCode: "B", topicName: "Nguyên tắc đạo đức và trách nhiệm xã hội", desc: "Giải thích vì sao con người cần hiểu cách AI ra quyết định để bảo đảm tính minh bạch, tin cậy." },
    { code: "5.C5.1", topicCode: "C5", strandCode: "C", topicName: "Kĩ thuật và thuật toán AI", desc: "Nêu được cách sử dụng cấu trúc nếu... thì... trong lập trình AI đơn giản." },
    { code: "5.C5.MR1", topicCode: "C5", strandCode: "C", topicName: "Kĩ thuật và thuật toán AI", desc: "[Mở rộng] Thực hành sử dụng cấu trúc nếu... thì... trong lập trình AI đơn giản.", isExtension: true },
    { code: "5.C5.2", topicCode: "C5", strandCode: "C", topicName: "Kĩ thuật và thuật toán AI", desc: "Thực hiện thao tác cơ bản với công cụ AI trực quan (Teachable Machine, ML for Kids...)." },
    { code: "5.C5.MR2", topicCode: "C5", strandCode: "C", topicName: "Kĩ thuật và thuật toán AI", desc: "[Mở rộng] Huấn luyện mô hình phân loại đơn giản (ví dụ phân loại lá cây khỏe - lá cây sâu bệnh).", isExtension: true },
    { code: "5.C5.MR3", topicCode: "C5", strandCode: "C", topicName: "Kĩ thuật và thuật toán AI", desc: "[Mở rộng] Kiểm tra kết quả mô hình đưa ra, chỉ ra trường hợp mô hình phân loại sai.", isExtension: true },
    { code: "5.D1.1", topicCode: "D1", strandCode: "D", topicName: "Nhận diện và hình thành giải pháp", desc: "Mô tả các bước cơ bản huấn luyện mô hình AI: xác định vấn đề, thu thập dữ liệu, dạy máy học, kiểm tra và đánh giá." },
    { code: "5.D1.MR1", topicCode: "D1", strandCode: "D", topicName: "Nhận diện và hình thành giải pháp", desc: "[Mở rộng] Thực hành thu thập dữ liệu nhằm huấn luyện mô hình AI giải quyết một vấn đề đơn giản.", isExtension: true },
    { code: "5.D2.1", topicCode: "D2", strandCode: "D", topicName: "Cấu trúc và tương tác, cải tiến hệ thống", desc: "Giải thích bằng ví dụ rằng hệ thống AI được cải tiến tốt hơn khi dữ liệu được bổ sung và cập nhật thường xuyên." },
    { code: "5.D2.MR1", topicCode: "D2", strandCode: "D", topicName: "Cấu trúc và tương tác, cải tiến hệ thống", desc: "[Mở rộng] Thực hành cải tiến hệ thống AI bằng cách bổ sung dữ liệu.", isExtension: true }
  ],
  6: [
    { code: "6.A1.1", topicCode: "A1", strandCode: "A", topicName: "Tính chủ động của con người", desc: "Giải thích AI là sản phẩm do con người tạo ra, lập trình và điều khiển; AI không tự sinh ra và không hoạt động độc lập." },
    { code: "6.A1.2", topicCode: "A1", strandCode: "A", topicName: "Tính chủ động của con người", desc: "Trình bày AI chỉ là công cụ hỗ trợ; con người đưa ra quyết định cuối cùng và chịu trách nhiệm khi sử dụng AI." },
    { code: "6.A1.3", topicCode: "A1", strandCode: "A", topicName: "Tính chủ động của con người", desc: "Thực hiện việc kiểm tra lại kết quả do AI đưa ra trước khi dùng, thể hiện thói quen 'con người quyết định cuối cùng'." },
    { code: "6.A3.1", topicCode: "A3", strandCode: "A", topicName: "Công dân trong kỉ nguyên AI", desc: "Nêu ví dụ về tình huống con người ra quyết định với sự hỗ trợ của AI và thực hành ra quyết định có cân nhắc." },
    { code: "6.A3.2", topicCode: "A3", strandCode: "A", topicName: "Công dân trong kỉ nguyên AI", desc: "Trình bày lợi ích của AI trong học hỏi, rèn luyện; sử dụng công cụ AI phù hợp lứa tuổi để hỗ trợ học tập." },
    { code: "6.A3.3", topicCode: "A3", strandCode: "A", topicName: "Công dân trong kỉ nguyên AI", desc: "Giải thích dữ liệu cá nhân là tài sản của mỗi người; chỉ chủ sở hữu mới có quyền quyết định chia sẻ." },
    { code: "6.A3.4", topicCode: "A3", strandCode: "A", topicName: "Công dân trong kỉ nguyên AI", desc: "Trình bày khái niệm quyền riêng tư; nêu tác hại khi lộ dữ liệu cá nhân và cách ứng phó bảo vệ an toàn." },
    { code: "6.B1.1", topicCode: "B1", strandCode: "B", topicName: "Các khía cạnh đạo đức của AI", desc: "Chỉ ra mặt tích cực và hạn chế của tính năng AI cụ thể (thu thập dữ liệu giúp gợi ý chính xác nhưng ảnh hưởng quyền riêng tư)." },
    { code: "6.B2.1", topicCode: "B2", strandCode: "B", topicName: "Sử dụng AI an toàn và có trách nhiệm", desc: "Đặt các câu hỏi kiểm tra tính an toàn, minh bạch của ứng dụng AI và nhận xét mức độ an toàn của công cụ." },
    { code: "6.C1.1", topicCode: "C1", strandCode: "C", topicName: "Đặc điểm chính của AI", desc: "Giải thích 2 thành phần chính để huấn luyện AI là dữ liệu và thuật toán; mô tả các bước hoạt động chính của công cụ AI." },
    { code: "6.C1.MR1", topicCode: "C1", strandCode: "C", topicName: "Đặc điểm chính của AI", desc: "[Mở rộng] Chỉ ra mối liên hệ giữa quá trình huấn luyện và hoạt động của một công cụ AI.", isExtension: true },
    { code: "6.C1.MR2", topicCode: "C1", strandCode: "C", topicName: "Đặc điểm chính của AI", desc: "[Mở rộng] Thử nghiệm đơn giản với công cụ AI và nhận xét các bước hoạt động của công cụ đó.", isExtension: true },
    { code: "6.C1.2", topicCode: "C1", strandCode: "C", topicName: "Đặc điểm chính của AI", desc: "Nêu ví dụ về tác động tích cực và tác động tiêu cực của AI đối với bản thân, gia đình." },
    { code: "6.C1.MR3", topicCode: "C1", strandCode: "C", topicName: "Đặc điểm chính của AI", desc: "[Mở rộng] Phân tích tác động của một công cụ AI cụ thể đối với bản thân và gia đình.", isExtension: true },
    { code: "6.C2.1", topicCode: "C2", strandCode: "C", topicName: "Ứng dụng AI trong học tập và cuộc sống", desc: "Phân biệt công cụ có ứng dụng AI và không ứng dụng AI qua các ví dụ gần gũi." },
    { code: "6.C2.2", topicCode: "C2", strandCode: "C", topicName: "Ứng dụng AI trong học tập và cuộc sống", desc: "Kể tên và mô tả chức năng chính của một số công cụ AI thông dụng (trợ lí ảo, ứng dụng bản đồ, dịch thuật...)." },
    { code: "6.C2.MR1", topicCode: "C2", strandCode: "C", topicName: "Ứng dụng AI trong học tập và cuộc sống", desc: "[Mở rộng] Nêu ví dụ về ứng dụng AI trong thực tiễn ở Việt Nam (nông nghiệp, giáo dục, dự báo lũ, dịch ngôn ngữ dân tộc...).", isExtension: true },
    { code: "6.C3.1", topicCode: "C3", strandCode: "C", topicName: "Công nghệ AI", desc: "Kể tên một số công nghệ AI quen thuộc trong đời sống (nhận dạng hình ảnh, chuyển đổi văn bản và giọng nói...)." },
    { code: "6.C3.MR1", topicCode: "C3", strandCode: "C", topicName: "Công nghệ AI", desc: "[Mở rộng] Trình bày tính năng AI gợi ý nội dung trên mạng xã hội, quảng cáo cá nhân hóa và ảnh hưởng tới người dùng.", isExtension: true },
    { code: "6.D1.1", topicCode: "D1", strandCode: "D", topicName: "Nhận diện và hình thành giải pháp", desc: "Nêu tình huống nên hoặc không nên dùng AI (nên dùng luyện phát âm, không nên nhờ AI viết hộ bài văn làm mất cơ hội tự rèn luyện)." },
    { code: "6.D1.MR1", topicCode: "D1", strandCode: "D", topicName: "Nhận diện và hình thành giải pháp", desc: "[Mở rộng] Trình bày ý kiến cá nhân về việc nên/không nên dùng AI dựa trên lợi ích và tác hại.", isExtension: true },
    { code: "6.D2.1", topicCode: "D2", strandCode: "D", topicName: "Cấu trúc và tương tác, cải tiến hệ thống", desc: "Trình bày giới hạn của hệ thống AI so với con người (cần cảm xúc, sáng tạo, ra quyết định phức tạp)." },
    { code: "6.D2.MR1", topicCode: "D2", strandCode: "D", topicName: "Cấu trúc và tương tác, cải tiến hệ thống", desc: "[Mở rộng] Giải thích vì sao AI gặp giới hạn (học từ dữ liệu cũ nên khó xử lí tình huống mới, không có cảm xúc thật).", isExtension: true },
    { code: "6.D2.MR2", topicCode: "D2", strandCode: "D", topicName: "Cấu trúc và tương tác, cải tiến hệ thống", desc: "[Mở rộng] Đề xuất cách kết hợp giữa con người và AI để phát huy thế mạnh của mỗi bên.", isExtension: true }
  ],
  7: [
    { code: "7.A1.1", topicCode: "A1", strandCode: "A", topicName: "Tính chủ động của con người", desc: "Giải thích lí do con người cần giữ quyền ra quyết định khi sử dụng AI (bảo đảm công bằng, an toàn, bảo vệ quyền lợi)." },
    { code: "7.A1.2", topicCode: "A1", strandCode: "A", topicName: "Tính chủ động của con người", desc: "Nêu ví dụ hậu quả có thể xảy ra khi không có sự xác thực của con người về độ chính xác của kết quả do AI đưa ra." },
    { code: "7.A1.MR1", topicCode: "A1", strandCode: "A", topicName: "Tính chủ động của con người", desc: "[Mở rộng] Thực hiện kiểm chứng một thông tin do AI cung cấp bằng ít nhất một nguồn đáng tin cậy khác.", isExtension: true },
    { code: "7.A2.1", topicCode: "A2", strandCode: "A", topicName: "AI vì sự tiến bộ của con người", desc: "Phân tích các tác hại có thể xảy ra nếu con người cho phép AI đưa ra quyết định cuối cùng trong một số tình huống thực tế." },
    { code: "7.A2.2", topicCode: "A2", strandCode: "A", topicName: "AI vì sự tiến bộ của con người", desc: "Nêu các hậu quả nếu không có quy định pháp lý ngăn chặn việc thiết kế, sản xuất công cụ AI có hại." },
    { code: "7.A3.1", topicCode: "A3", strandCode: "A", topicName: "Công dân trong kỉ nguyên AI", desc: "Nêu ví dụ về tình huống AI được tự động hóa (sửa chính tả) và tình huống con người cần trực tiếp quyết định." },
    { code: "7.A3.MR1", topicCode: "A3", strandCode: "A", topicName: "Công dân trong kỉ nguyên AI", desc: "[Mở rộng] Trình bày ví dụ về xung đột giữa quyền tự chủ của con người và mức độ tự chủ của AI.", isExtension: true },
    { code: "7.A3.MR2", topicCode: "A3", strandCode: "A", topicName: "Công dân trong kỉ nguyên AI", desc: "[Mở rộng] Nêu yêu cầu đánh giá mức độ tự chủ của AI dựa trên nhu cầu và bối cảnh cụ thể.", isExtension: true },
    { code: "7.A3.2", topicCode: "A3", strandCode: "A", topicName: "Công dân trong kỉ nguyên AI", desc: "Giải thích sự cần thiết phải bảo vệ quyền tự chủ của con người khi dùng AI đưa ra các quyết định quan trọng." },
    { code: "7.B2.1", topicCode: "B2", strandCode: "B", topicName: "Sử dụng AI an toàn và có trách nhiệm", desc: "Nêu một số tiêu chí đơn giản để đánh giá mức độ phù hợp, an toàn của một ứng dụng AI." },
    { code: "7.B2.2", topicCode: "B2", strandCode: "B", topicName: "Sử dụng AI an toàn và có trách nhiệm", desc: "Nêu ví dụ về hành động cụ thể xây dựng môi trường AI có đạo đức (báo cáo lỗi, không dùng app độc hại, yêu cầu minh bạch)." },
    { code: "7.B3.1", topicCode: "B3", strandCode: "B", topicName: "Nguyên tắc đạo đức và trách nhiệm xã hội", desc: "Thể hiện thái độ và cam kết sử dụng AI có trách nhiệm; khai báo trung thực khi có dùng AI trong sản phẩm học tập." },
    { code: "7.C4.1", topicCode: "C4", strandCode: "C", topicName: "Dữ liệu trong AI", desc: "Trình bày các vấn đề đạo đức có thể nảy sinh từ dữ liệu huấn luyện AI (thiếu đa dạng, phân biệt đối xử, xâm phạm dữ liệu riêng tư)." },
    { code: "7.C4.MR1", topicCode: "C4", strandCode: "C", topicName: "Dữ liệu trong AI", desc: "[Mở rộng] Phân tích tầm quan trọng của việc sử dụng bộ dữ liệu sạch và công bằng trong tạo ra công cụ AI có đạo đức.", isExtension: true },
    { code: "7.C5.1", topicCode: "C5", strandCode: "C", topicName: "Kĩ thuật và thuật toán AI", desc: "Mô tả các bước chính trong quá trình huấn luyện AI (thu thập dữ liệu, gán nhãn, cho máy học, kiểm tra, điều chỉnh)." },
    { code: "7.C5.2", topicCode: "C5", strandCode: "C", topicName: "Kĩ thuật và thuật toán AI", desc: "Nêu ví dụ về một số cách học của AI (học từ dữ liệu gán nhãn, tự tìm quy luật, học qua thử nghiệm rút kinh nghiệm)." },
    { code: "7.C5.MR1", topicCode: "C5", strandCode: "C", topicName: "Kĩ thuật và thuật toán AI", desc: "[Mở rộng] Phân biệt ba phương pháp học máy cơ bản (học có giám sát, không giám sát, học tăng cường).", isExtension: true },
    { code: "7.D1.1", topicCode: "D1", strandCode: "D", topicName: "Nhận diện và hình thành giải pháp", desc: "Nêu ví dụ về vấn đề trong trường học hoặc cộng đồng có thể giải quyết bằng AI (chatbot nội quy, nhận dạng phân loại rác)." },
    { code: "7.D1.MR1", topicCode: "D1", strandCode: "D", topicName: "Nhận diện và hình thành giải pháp", desc: "[Mở rộng] Phân tích tính khả thi của ý tưởng dự án AI (dữ liệu, rủi ro đạo đức, độ phức tạp, chi phí).", isExtension: true },
    { code: "7.D2.1", topicCode: "D2", strandCode: "D", topicName: "Cấu trúc và tương tác, cải tiến hệ thống", desc: "Lập được kế hoạch cho một dự án sáng tạo có sử dụng AI theo nhóm nhỏ." },
    { code: "7.D2.MR1", topicCode: "D2", strandCode: "D", topicName: "Cấu trúc và tương tác, cải tiến hệ thống", desc: "[Mở rộng] Thực hành tạo được sản phẩm đơn giản theo kế hoạch đã xây dựng.", isExtension: true }
  ],
  8: [
    { code: "8.A1.1", topicCode: "A1", strandCode: "A", topicName: "Tính chủ động của con người", desc: "Nêu các lĩnh vực AI không nên thay thế con người (giáo dục cần thấu hiểu học sinh, y tế cần sự động viên bệnh nhân, nghệ thuật cần cảm xúc)." },
    { code: "8.A1.2", topicCode: "A1", strandCode: "A", topicName: "Tính chủ động của con người", desc: "Nêu rủi ro khi lạm dụng AI tạo sinh (suy giảm tư duy phản biện, sáng tạo) và sự cần thiết kiểm chứng nguồn thông tin." },
    { code: "8.A2.1", topicCode: "A2", strandCode: "A", topicName: "AI vì sự tiến bộ của con người", desc: "Giải thích hệ thống AI có thể thu thập dữ liệu cá nhân để thao túng quyết định hoặc hành vi của con người." },
    { code: "8.A2.2", topicCode: "A2", strandCode: "A", topicName: "AI vì sự tiến bộ của con người", desc: "Nhận biết hiện tượng sử dụng AI kiểm soát người dùng không minh bạch (theo dõi, quảng cáo một chiều, mất kiểm soát dữ liệu)." },
    { code: "8.A3.1", topicCode: "A3", strandCode: "A", topicName: "Công dân trong kỉ nguyên AI", desc: "Phân biệt vai trò của người dùng và người phát triển khi tương tác với AI." },
    { code: "8.A3.MR1", topicCode: "A3", strandCode: "A", topicName: "Công dân trong kỉ nguyên AI", desc: "[Mở rộng] Giải thích việc người dùng cũng góp phần tác động đến công cụ AI qua dữ liệu và tương tác.", isExtension: true },
    { code: "8.A3.2", topicCode: "A3", strandCode: "A", topicName: "Công dân trong kỉ nguyên AI", desc: "Nêu ví dụ về trách nhiệm pháp lý của người sáng tạo, nhà cung cấp, người dùng đối với hậu quả do AI gây ra." },
    { code: "8.A3.3", topicCode: "A3", strandCode: "A", topicName: "Công dân trong kỉ nguyên AI", desc: "Nêu những việc thể hiện trách nhiệm giải trình khi dùng AI trong học tập (khai báo phần dùng AI, kiểm tra tính chính xác)." },
    { code: "8.A3.MR2", topicCode: "A3", strandCode: "A", topicName: "Công dân trong kỉ nguyên AI", desc: "[Mở rộng] Nêu những việc thể hiện trách nhiệm giải trình khi thiết kế AI (nguồn dữ liệu, cách thức hoạt động).", isExtension: true },
    { code: "8.B1.1", topicCode: "B1", strandCode: "B", topicName: "Các khía cạnh đạo đức của AI", desc: "Nhận diện và phân loại các rủi ro: dữ liệu & riêng tư, thuật toán thiên vị/kết luận sai, lừa đảo bằng nội dung giả mạo AI." },
    { code: "8.B2.1", topicCode: "B2", strandCode: "B", topicName: "Sử dụng AI an toàn và có trách nhiệm", desc: "Trình bày cách thức bảo vệ dữ liệu cá nhân, tôn trọng bản quyền và giảm thiểu rủi ro khi dùng AI trong dự án học tập." },
    { code: "8.B3.1", topicCode: "B3", strandCode: "B", topicName: "Nguyên tắc đạo đức và trách nhiệm xã hội", desc: "Nêu các vấn đề đạo đức cần lưu ý khi phát triển AI (bảo mật thông tin, không cung cấp thông tin sai lệch, không xúc phạm)." },
    { code: "8.C1.1", topicCode: "C1", strandCode: "C", topicName: "Đặc điểm chính của AI", desc: "Mô tả ở mức đơn giản cách AI thực hiện các chức năng cơ bản như đọc, nghe, nhìn." },
    { code: "8.C1.MR1", topicCode: "C1", strandCode: "C", topicName: "Đặc điểm chính của AI", desc: "[Mở rộng] Phân tích một số công nghệ đảm nhiệm chức năng đọc, nghe, nhìn (NLP, nhận dạng giọng nói, thị giác máy tính).", isExtension: true },
    { code: "8.C5.1", topicCode: "C5", strandCode: "C", topicName: "Kĩ thuật và thuật toán AI", desc: "Nêu cách AI nhận diện cảm xúc dựa vào đặc điểm (nét mặt, từ khóa, ngữ điệu, cử chỉ...)." },
    { code: "8.C5.MR1", topicCode: "C5", strandCode: "C", topicName: "Kĩ thuật và thuật toán AI", desc: "[Mở rộng] Nhận xét về độ tin cậy và giới hạn của việc AI nhận diện cảm xúc theo bối cảnh.", isExtension: true },
    { code: "8.D1.1", topicCode: "D1", strandCode: "D", topicName: "Nhận diện và hình thành giải pháp", desc: "Xác định được một số vấn đề thực tế có thể giải quyết bằng AI." },
    { code: "8.D1.MR1", topicCode: "D1", strandCode: "D", topicName: "Nhận diện và hình thành giải pháp", desc: "[Mở rộng] Lập kế hoạch sơ bộ cho dự án AI để giải quyết vấn đề đã xác định.", isExtension: true },
    { code: "8.D2.1", topicCode: "D2", strandCode: "D", topicName: "Cấu trúc và tương tác, cải tiến hệ thống", desc: "Trình bày ví dụ về một kịch bản hội thoại cho một tình huống cụ thể có ứng dụng AI (chatbot, trợ lí ảo)." },
    { code: "8.D2.MR1", topicCode: "D2", strandCode: "D", topicName: "Cấu trúc và tương tác, cải tiến hệ thống", desc: "[Mở rộng] Mô tả một số đặc điểm cơ bản của trải nghiệm người dùng (UX) tốt khi tương tác với AI.", isExtension: true },
    { code: "8.D2.MR2", topicCode: "D2", strandCode: "D", topicName: "Cấu trúc và tương tác, cải tiến hệ thống", desc: "[Mở rộng] Lập kế hoạch và triển khai hoạt động nhóm phát triển sản phẩm AI đơn giản bằng công cụ có sẵn.", isExtension: true }
  ],
  9: [
    { code: "9.A1.1", topicCode: "A1", strandCode: "A", topicName: "Tính chủ động của con người", desc: "Trình bày ý kiến cá nhân về thách thức xã hội đối mặt trong kỉ nguyên AI (hi sinh an toàn để ưu tiên đổi mới)." },
    { code: "9.A2.1", topicCode: "A2", strandCode: "A", topicName: "AI vì sự tiến bộ của con người", desc: "Nêu dẫn chứng giải thích vì sao AI có tác động lớn đến xã hội." },
    { code: "9.A2.2", topicCode: "A2", strandCode: "A", topicName: "AI vì sự tiến bộ của con người", desc: "Giải thích các vấn đề thiên vị, thành kiến mà AI có thể gây ra đối với xã hội." },
    { code: "9.A3.1", topicCode: "A3", strandCode: "A", topicName: "Công dân trong kỉ nguyên AI", desc: "Trình bày các năng lực con người cần rèn luyện trong thế giới AI: tự học, tư duy phản biện, sáng tạo, cảm xúc, hợp tác." },
    { code: "9.A3.2", topicCode: "A3", strandCode: "A", topicName: "Công dân trong kỉ nguyên AI", desc: "Xác định mục tiêu học tập cá nhân trong thế giới có AI và phát triển kĩ năng mềm AI không thay thế được." },
    { code: "9.A3.3", topicCode: "A3", strandCode: "A", topicName: "Công dân trong kỉ nguyên AI", desc: "Nêu ví dụ cách sử dụng AI như một công cụ giúp thể hiện bản thân và theo đuổi đam mê." },
    { code: "9.A3.4", topicCode: "A3", strandCode: "A", topicName: "Công dân trong kỉ nguyên AI", desc: "Trình bày thay đổi của các ngành nghề tương lai dưới tác động của AI và kĩ năng cần trang bị." },
    { code: "9.B2.1", topicCode: "B2", strandCode: "B", topicName: "Sử dụng AI an toàn và có trách nhiệm", desc: "Trình bày vai trò người dùng trong việc kiểm soát, chịu trách nhiệm kết quả AI và khai báo sử dụng AI trong học tập." },
    { code: "9.B2.2", topicCode: "B2", strandCode: "B", topicName: "Sử dụng AI an toàn và có trách nhiệm", desc: "Nêu vai trò của cá nhân, cộng đồng trong việc giám sát, phản hồi để sử dụng AI an toàn, công bằng, hợp lý." },
    { code: "9.B2.3", topicCode: "B2", strandCode: "B", topicName: "Sử dụng AI an toàn và có trách nhiệm", desc: "Phân tích dấu hiệu nội dung giả mạo AI, kiểm chứng thông tin và cách ứng phó khi gặp lừa đảo/giả mạo." },
    { code: "9.B3.1", topicCode: "B3", strandCode: "B", topicName: "Nguyên tắc đạo đức và trách nhiệm xã hội", desc: "Giải thích tầm quan trọng của việc huấn luyện AI không phân biệt đối xử và tôn trọng sự đa dạng." },
    { code: "9.B3.2", topicCode: "B3", strandCode: "B", topicName: "Nguyên tắc đạo đức và trách nhiệm xã hội", desc: "Nêu cách thu thập dữ liệu bảo đảm công bằng, không bỏ sót hay thiên vị các nhóm đối tượng." },
    { code: "9.C2.1", topicCode: "C2", strandCode: "C", topicName: "Ứng dụng AI trong học tập và cuộc sống", desc: "Đề xuất ý tưởng mới, sáng tạo để giải quyết một vấn đề bằng AI." },
    { code: "9.C2.MR1", topicCode: "C2", strandCode: "C", topicName: "Ứng dụng AI trong học tập và cuộc sống", desc: "[Mở rộng] Vận dụng kiến thức tạo công cụ AI đơn giản (chatbot, nhận dạng ảnh) trên nền tảng an toàn, miễn phí.", isExtension: true },
    { code: "9.C4.1", topicCode: "C4", strandCode: "C", topicName: "Dữ liệu trong AI", desc: "Trình bày các cách cải thiện bộ dữ liệu để nâng cao chất lượng sản phẩm AI (bổ sung, loại bỏ trùng lặp, sửa nhãn sai)." },
    { code: "9.C4.MR1", topicCode: "C4", strandCode: "C", topicName: "Dữ liệu trong AI", desc: "[Mở rộng] Chỉ ra các điểm cần cải thiện trong bộ dữ liệu cụ thể ảnh hưởng đến chất lượng sản phẩm AI.", isExtension: true },
    { code: "9.C4.MR2", topicCode: "C4", strandCode: "C", topicName: "Dữ liệu trong AI", desc: "[Mở rộng] Thực hiện việc cải thiện bộ dữ liệu (thêm, xóa, sửa) để nâng cao chất lượng sản phẩm AI.", isExtension: true },
    { code: "9.D1.1", topicCode: "D1", strandCode: "D", topicName: "Nhận diện và hình thành giải pháp", desc: "Trình bày vai trò của con người là người đồng sáng tạo và dẫn dắt trong thiết kế, vận hành hệ thống AI." },
    { code: "9.D1.MR1", topicCode: "D1", strandCode: "D", topicName: "Nhận diện và hình thành giải pháp", desc: "[Mở rộng] Phân tích vai trò đồng sáng tạo và dẫn dắt của con người qua hệ thống AI cụ thể.", isExtension: true },
    { code: "9.D2.1", topicCode: "D2", strandCode: "D", topicName: "Cấu trúc và tương tác, cải tiến hệ thống", desc: "Nêu một số cách kiểm tra đơn giản để đánh giá sản phẩm AI (thử dữ liệu mới, đặt nhiều câu hỏi cho chatbot...)." },
    { code: "9.D2.MR1", topicCode: "D2", strandCode: "D", topicName: "Cấu trúc và tương tác, cải tiến hệ thống", desc: "[Mở rộng] Thiết kế và thực hiện được một số kiểm tra đơn giản để đánh giá sản phẩm AI.", isExtension: true },
    { code: "9.D2.MR2", topicCode: "D2", strandCode: "D", topicName: "Cấu trúc và tương tác, cải tiến hệ thống", desc: "[Mở rộng] Phân tích kết quả kiểm tra và chủ động thử nghiệm các cách cải tiến chất lượng sản phẩm.", isExtension: true }
  ],
  10: [
    { code: "10.A1.1", topicCode: "A1", strandCode: "A", topicName: "Tính chủ động của con người", desc: "Thực hành xác định vai trò của con người trong sử dụng, vận hành, tùy chỉnh một hệ thống AI cụ thể." },
    { code: "10.A1.2", topicCode: "A1", strandCode: "A", topicName: "Tính chủ động của con người", desc: "Giải thích tại sao việc con người kiểm soát AI là quan trọng (an toàn, công bằng và quyền lợi con người)." },
    { code: "10.A2.1", topicCode: "A2", strandCode: "A", topicName: "AI vì sự tiến bộ của con người", desc: "Nêu một số rủi ro đối với con người, xã hội mà một sản phẩm AI có thể đem lại." },
    { code: "10.A2.MR1", topicCode: "A2", strandCode: "A", topicName: "AI vì sự tiến bộ của con người", desc: "[Mở rộng] Nêu biện pháp hạn chế các rủi ro của sản phẩm AI thông qua một dự án sáng tạo AI.", isExtension: true },
    { code: "10.A3.1", topicCode: "A3", strandCode: "A", topicName: "Công dân trong kỉ nguyên AI", desc: "Kể tên các luật/quy định bảo vệ người dùng trong không gian số (Luật An ninh mạng, Luật Dữ liệu, Luật Bảo vệ dữ liệu cá nhân)." },
    { code: "10.B2.1", topicCode: "B2", strandCode: "B", topicName: "Sử dụng AI an toàn và có trách nhiệm", desc: "Nêu ví dụ về hành vi sử dụng AI vi phạm quy định của nhà trường hoặc pháp luật CNTT." },
    { code: "10.B2.MR1", topicCode: "B2", strandCode: "B", topicName: "Sử dụng AI an toàn và có trách nhiệm", desc: "[Mở rộng] Nhận biết dấu hiệu nội dung do AI tạo sinh tạo ra; kiểm tra mức độ minh bạch của việc khai báo AI.", isExtension: true },
    { code: "10.B3.1", topicCode: "B3", strandCode: "B", topicName: "Nguyên tắc đạo đức và trách nhiệm xã hội", desc: "Trình bày ví dụ các vấn đề đạo đức phát sinh trong thiết kế, vận hành AI (thiên vị dữ liệu, vi phạm quyền riêng tư, thiếu minh bạch)." },
    { code: "10.C2.1", topicCode: "C2", strandCode: "C", topicName: "Ứng dụng AI trong học tập và cuộc sống", desc: "Xác định các vấn đề thực tế có thể ứng dụng AI thực hiện (nông nghiệp, cộng đồng thiểu số...)." },
    { code: "10.C2.2", topicCode: "C2", strandCode: "C", topicName: "Ứng dụng AI trong học tập và cuộc sống", desc: "Liệt kê tên các ứng dụng AI theo tính năng của hệ thống." },
    { code: "10.C2.MR1", topicCode: "C2", strandCode: "C", topicName: "Ứng dụng AI trong học tập và cuộc sống", desc: "[Mở rộng] Xác định các yêu cầu cần có đối với việc ứng dụng AI thực hiện nhiệm vụ cụ thể.", isExtension: true },
    { code: "10.C2.3", topicCode: "C2", strandCode: "C", topicName: "Ứng dụng AI trong học tập và cuộc sống", desc: "Nêu ví dụ một số trường hợp sử dụng AI hỗ trợ quá trình học tập." },
    { code: "10.C2.MR2", topicCode: "C2", strandCode: "C", topicName: "Ứng dụng AI trong học tập và cuộc sống", desc: "[Mở rộng] Sử dụng được một số ứng dụng AI trong học tập.", isExtension: true },
    { code: "10.C3.1", topicCode: "C3", strandCode: "C", topicName: "Công nghệ AI", desc: "Mô tả các yêu cầu để đưa ra prompt phù hợp với mục tiêu cụ thể." },
    { code: "10.C3.2", topicCode: "C3", strandCode: "C", topicName: "Công nghệ AI", desc: "Thực hành đặt prompt giải quyết một số vấn đề gần gũi trong học tập và cuộc sống một cách hiệu quả." },
    { code: "10.C3.3", topicCode: "C3", strandCode: "C", topicName: "Công nghệ AI", desc: "Phân biệt được AI tạo sinh với các hệ thống AI phân loại, dự đoán qua ví dụ cụ thể." },
    { code: "10.C3.MR1", topicCode: "C3", strandCode: "C", topicName: "Công nghệ AI", desc: "[Mở rộng] Trình bày ví dụ mô tả một số công nghệ để thiết kế và tạo AI.", isExtension: true },
    { code: "10.C4.1", topicCode: "C4", strandCode: "C", topicName: "Dữ liệu trong AI", desc: "Phân tích sự ảnh hưởng của chất lượng dữ liệu đến chất lượng hệ thống AI." },
    { code: "10.C4.MR1", topicCode: "C4", strandCode: "C", topicName: "Dữ liệu trong AI", desc: "[Mở rộng] Phân tích các dạng dữ liệu (hình ảnh, âm thanh, từ ngữ...) dùng để huấn luyện AI.", isExtension: true },
    { code: "10.D1.1", topicCode: "D1", strandCode: "D", topicName: "Nhận diện và hình thành giải pháp", desc: "Nêu ví dụ cụ thể, xác định nhiệm vụ/mục tiêu và mối liên hệ với các thành phần chính của hệ thống AI." },
    { code: "10.D2.1", topicCode: "D2", strandCode: "D", topicName: "Cấu trúc và tương tác, cải tiến hệ thống", desc: "Mô tả các thành phần cơ bản của hệ thống AI (dữ liệu, mô hình, thuật toán, đầu ra, phản hồi)." },
    { code: "10.D2.2", topicCode: "D2", strandCode: "D", topicName: "Cấu trúc và tương tác, cải tiến hệ thống", desc: "Nêu ví dụ về vấn đề phát sinh trong vận hành, tối ưu hóa AI và ý nghĩa của việc khắc phục." }
  ],
  11: [
    { code: "11.A1.1", topicCode: "A1", strandCode: "A", topicName: "Tính chủ động của con người", desc: "Xây dựng được quy trình sử dụng một sản phẩm AI cụ thể một cách thích hợp, an toàn." },
    { code: "11.A1.2", topicCode: "A1", strandCode: "A", topicName: "Tính chủ động của con người", desc: "Phân tích trường hợp thực tế thấy tầm quan trọng của AI nâng cao năng lực con người nhưng vẫn đảm bảo kiểm soát của con người." },
    { code: "11.A2.1", topicCode: "A2", strandCode: "A", topicName: "AI vì sự tiến bộ của con người", desc: "Nêu ví dụ về ứng dụng AI mang lại lợi ích xã hội lâu dài (AI trong nông nghiệp, y tế...)." },
    { code: "11.A2.2", topicCode: "A2", strandCode: "A", topicName: "AI vì sự tiến bộ của con người", desc: "Phân tích các yếu tố thể hiện tính bền vững (tiết kiệm năng lượng, bảo vệ môi trường) và công bằng của hệ thống AI." },
    { code: "11.A3.1", topicCode: "A3", strandCode: "A", topicName: "Công dân trong kỉ nguyên AI", desc: "Trình bày các quyền cơ bản của người dùng dữ liệu (quyền được biết, quyền đồng ý, quyền yêu cầu xóa dữ liệu...)." },
    { code: "11.A3.MR1", topicCode: "A3", strandCode: "A", topicName: "Công dân trong kỉ nguyên AI", desc: "[Mở rộng] Phân tích mức độ đảm bảo quyền cơ bản của người dùng thông qua một dự án sáng tạo AI.", isExtension: true },
    { code: "11.B2.1", topicCode: "B2", strandCode: "B", topicName: "Sử dụng AI an toàn và có trách nhiệm", desc: "Nhận biết và phân loại các rủi ro/sự cố khi dùng AI có thể dẫn đến vi phạm quy định nhà trường hoặc pháp luật." },
    { code: "11.B3.MR1", topicCode: "B3", strandCode: "B", topicName: "Nguyên tắc đạo đức và trách nhiệm xã hội", desc: "[Mở rộng] Xác định và sơ đồ hóa các vấn đề đạo đức có thể phát sinh trong từng bước thiết kế và vận hành AI.", isExtension: true },
    { code: "11.C2.1", topicCode: "C2", strandCode: "C", topicName: "Ứng dụng AI trong học tập và cuộc sống", desc: "Trình bày cách AI hỗ trợ quá trình học tập và thiết kế các công cụ hỗ trợ." },
    { code: "11.C2.2", topicCode: "C2", strandCode: "C", topicName: "Ứng dụng AI trong học tập và cuộc sống", desc: "Đề xuất các tính năng AI hỗ trợ hoạt động học tập." },
    { code: "11.C2.MR1", topicCode: "C2", strandCode: "C", topicName: "Ứng dụng AI trong học tập và cuộc sống", desc: "[Mở rộng] Sử dụng công cụ AI để tạo và biên tập nội dung học liệu phục vụ học tập và đánh giá.", isExtension: true },
    { code: "11.C3.1", topicCode: "C3", strandCode: "C", topicName: "Công nghệ AI", desc: "Xác định các kĩ thuật prompt nâng cao (ràng buộc định dạng đầu ra, chia nhỏ nhiệm vụ)." },
    { code: "11.C3.MR1", topicCode: "C3", strandCode: "C", topicName: "Công nghệ AI", desc: "[Mở rộng] Vận dụng được một số kĩ thuật prompt nâng cao (ràng buộc định dạng đầu ra, chia nhỏ nhiệm vụ).", isExtension: true },
    { code: "11.C3.2", topicCode: "C3", strandCode: "C", topicName: "Công nghệ AI", desc: "Mô tả một số công nghệ AI cơ bản (chatbot, NLP, thị giác máy tính, cảm biến)." },
    { code: "11.C3.MR2", topicCode: "C3", strandCode: "C", topicName: "Công nghệ AI", desc: "[Mở rộng] Phân tích cách các công nghệ AI cơ bản vận hành trong hệ thống AI.", isExtension: true },
    { code: "11.C3.MR3", topicCode: "C3", strandCode: "C", topicName: "Công nghệ AI", desc: "[Mở rộng] Xác định các phương pháp tùy chỉnh hệ thống AI (bổ sung dữ liệu, tham số, chỉ dẫn hệ thống, kĩ thuật RAG...).", isExtension: true },
    { code: "11.C3.MR4", topicCode: "C3", strandCode: "C", topicName: "Công nghệ AI", desc: "[Mở rộng] Trình bày khái niệm kĩ thuật sinh nội dung tăng cường bằng truy xuất (RAG) và vì sao giúp giảm sai lệch.", isExtension: true },
    { code: "11.C5.1", topicCode: "C5", strandCode: "C", topicName: "Kĩ thuật và thuật toán AI", desc: "Nêu được một số ứng dụng mạng nơ-ron nhân tạo." },
    { code: "11.C5.MR1", topicCode: "C5", strandCode: "C", topicName: "Kĩ thuật và thuật toán AI", desc: "[Mở rộng] Trình bày kiến thức cơ bản về mạng nơ-ron nhân tạo.", isExtension: true },
    { code: "11.C5.2", topicCode: "C5", strandCode: "C", topicName: "Kĩ thuật và thuật toán AI", desc: "Nêu được một số ứng dụng thuật toán phân cụm, phân lớp." },
    { code: "11.C5.MR2", topicCode: "C5", strandCode: "C", topicName: "Kĩ thuật và thuật toán AI", desc: "[Mở rộng] Trình bày kiến thức cơ bản về thuật toán phân cụm, phân lớp và ý tưởng thực hiện.", isExtension: true },
    { code: "11.D1.1", topicCode: "D1", strandCode: "D", topicName: "Nhận diện và hình thành giải pháp", desc: "Trình bày cách thiết kế và vận hành tổng thể hệ thống AI (quan hệ giữa mục tiêu, dữ liệu và các thành phần)." },
    { code: "11.D2.1", topicCode: "D2", strandCode: "D", topicName: "Cấu trúc và tương tác, cải tiến hệ thống", desc: "Trình bày cách vận hành công nghệ trong hệ thống AI để thực hiện một nhiệm vụ cụ thể." },
    { code: "11.D2.MR1", topicCode: "D2", strandCode: "D", topicName: "Cấu trúc và tương tác, cải tiến hệ thống", desc: "[Mở rộng] Trình bày các cách giải quyết vấn đề phát sinh nhằm tối ưu hóa hiệu quả hoạt động hệ thống AI.", isExtension: true }
  ],
  12: [
    { code: "12.A1.1", topicCode: "A1", strandCode: "A", topicName: "Tính chủ động của con người", desc: "Phân tích hệ thống AI đảm bảo con người có quyền kiểm soát và chịu trách nhiệm với tất cả các bước quan trọng trong vòng đời AI." },
    { code: "12.A1.MR1", topicCode: "A1", strandCode: "A", topicName: "Tính chủ động của con người", desc: "[Mở rộng] Thực hiện phân tích quyền kiểm soát và trách nhiệm con người trong vòng đời AI qua dự án sáng tạo AI.", isExtension: true },
    { code: "12.A1.2", topicCode: "A1", strandCode: "A", topicName: "Tính chủ động của con người", desc: "Phân tích vai trò của con người và AI trong các bước chính của quá trình ra quyết định." },
    { code: "12.A1.3", topicCode: "A1", strandCode: "A", topicName: "Tính chủ động của con người", desc: "Kiểm tra việc thực hiện trách nhiệm giải trình của con người đối với các quyết định theo quy định trong nước và quốc tế." },
    { code: "12.A2.1", topicCode: "A2", strandCode: "A", topicName: "AI vì sự tiến bộ của con người", desc: "Trình bày các nguyên tắc đạo đức cơ bản thiết kế AI: an toàn, công bằng, minh bạch, quyền riêng tư, trách nhiệm, lợi ích xã hội." },
    { code: "12.A2.MR1", topicCode: "A2", strandCode: "A", topicName: "AI vì sự tiến bộ của con người", desc: "[Mở rộng] Vận dụng soạn thảo bộ nguyên tắc cá nhân cho dự án AI; đối chiếu và điều chỉnh khi có nguy cơ vi phạm.", isExtension: true },
    { code: "12.A3.1", topicCode: "A3", strandCode: "A", topicName: "Công dân trong kỉ nguyên AI", desc: "Phân tích nội hàm 'trách nhiệm công dân trong xã hội AI': an toàn, trung thực, đạo đức, tôn trọng bản quyền, không lan truyền tin giả." },
    { code: "12.B1.MR1", topicCode: "B1", strandCode: "B", topicName: "Các khía cạnh đạo đức của AI", desc: "[Mở rộng] Phân tích nguyên nhân dẫn đến các vấn đề đạo đức hoặc sai lệch trong quá trình hoạt động của hệ thống AI.", isExtension: true },
    { code: "12.B2.1", topicCode: "B2", strandCode: "B", topicName: "Sử dụng AI an toàn và có trách nhiệm", desc: "Xác định mức độ rủi ro khi dùng AI có thể dẫn đến vi phạm quy định nhà trường hoặc pháp luật liên quan." },
    { code: "12.B3.1", topicCode: "B3", strandCode: "B", topicName: "Nguyên tắc đạo đức và trách nhiệm xã hội", desc: "Trình bày quyền và trách nhiệm của người phát triển, người dùng AI và vai trò trong đề xuất xây dựng chính sách AI." },
    { code: "12.C2.1", topicCode: "C2", strandCode: "C", topicName: "Ứng dụng AI trong học tập và cuộc sống", desc: "Lựa chọn được ý tưởng thiết kế một số công cụ AI để thực hiện các công việc khác nhau." },
    { code: "12.C2.MR1", topicCode: "C2", strandCode: "C", topicName: "Ứng dụng AI trong học tập và cuộc sống", desc: "[Mở rộng] Tùy chỉnh các yêu cầu hệ thống AI để hỗ trợ hoạt động học tập và xã hội.", isExtension: true },
    { code: "12.C3.1", topicCode: "C3", strandCode: "C", topicName: "Công nghệ AI", desc: "Nêu một số công cụ mã nguồn mở/miễn phí thiết kế AI (Teachable Machine, ML5.js, TensorFlow.js, MIT App Inventor...)." },
    { code: "12.C3.MR1", topicCode: "C3", strandCode: "C", topicName: "Công nghệ AI", desc: "[Mở rộng] Sử dụng công cụ mã nguồn mở/miễn phí để thiết kế, huấn luyện và phát triển hệ thống AI.", isExtension: true },
    { code: "12.C3.2", topicCode: "C3", strandCode: "C", topicName: "Công nghệ AI", desc: "Nêu ví dụ về cách thức đánh giá hiệu quả của hệ thống AI." },
    { code: "12.C3.MR2", topicCode: "C3", strandCode: "C", topicName: "Công nghệ AI", desc: "[Mở rộng] Đánh giá khả năng tối ưu hệ thống AI thông qua cập nhật công nghệ, kĩ thuật mới.", isExtension: true },
    { code: "12.C3.MR3", topicCode: "C3", strandCode: "C", topicName: "Công nghệ AI", desc: "[Mở rộng] Trình bày khái niệm: hàm mục tiêu, tối ưu hoá hệ thống, mô hình quá khớp dữ liệu (overfitting).", isExtension: true },
    { code: "12.C4.MR1", topicCode: "C4", strandCode: "C", topicName: "Dữ liệu trong AI", desc: "[Mở rộng] Thu thập và tổ chức được dữ liệu đáp ứng yêu cầu phát triển hệ thống AI.", isExtension: true },
    { code: "12.C4.MR2", topicCode: "C4", strandCode: "C", topicName: "Dữ liệu trong AI", desc: "[Mở rộng] Phân tích và xác định nền tảng/bộ công cụ phát triển AI, cải thiện dữ liệu thiết kế, phát triển AI.", isExtension: true },
    { code: "12.D1.1", topicCode: "D1", strandCode: "D", topicName: "Nhận diện và hình thành giải pháp", desc: "Nhận biết các phương án thiết kế và vận hành hệ thống AI phù hợp để đạt hiệu quả cao trong nhiệm vụ cụ thể." },
    { code: "12.D1.MR1", topicCode: "D1", strandCode: "D", topicName: "Nhận diện và hình thành giải pháp", desc: "[Mở rộng] Phân tích các phương án thiết kế và vận hành hệ thống AI phù hợp để đạt hiệu quả cao.", isExtension: true },
    { code: "12.D2.1", topicCode: "D2", strandCode: "D", topicName: "Cấu trúc và tương tác, cải tiến hệ thống", desc: "Nhận biết các vai trò khác nhau trong phát triển AI (ý tưởng, lập trình, huấn luyện, kiểm thử) và sự hợp tác nhiều vai trò." },
    { code: "12.D2.MR1", topicCode: "D2", strandCode: "D", topicName: "Cấu trúc và tương tác, cải tiến hệ thống", desc: "[Mở rộng] Phân tích nguyên nhân các vấn đề phát sinh và lựa chọn cách giải quyết để hệ thống hoạt động ổn định.", isExtension: true },
    { code: "12.D2.MR2", topicCode: "D2", strandCode: "D", topicName: "Cấu trúc và tương tác, cải tiến hệ thống", desc: "[Mở rộng] Trình bày khả năng và cấu trúc cơ bản của một hệ thống tác nhân AI (AI agent).", isExtension: true },
    { code: "12.D2.MR3", topicCode: "D2", strandCode: "D", topicName: "Cấu trúc và tương tác, cải tiến hệ thống", desc: "[Mở rộng] Xây dựng và kiểm thử hệ thống tác nhân AI đơn giản phục vụ nhiệm vụ học tập hoặc cộng đồng.", isExtension: true }
  ]
};

export const AI_2422_FRAMEWORK_DATA = `
KHUNG NỘI DUNG GIÁO DỤC TRÍ TUỆ NHÂN TẠO (AI) CHO HỌC SINH PHỔ THÔNG - QUYẾT ĐỊNH 2422/QĐ-BGDĐT
Bao gồm bốn mạch nội dung chính (tương ứng với bốn năng lực đặc thù):
A. Tư duy lấy con người làm trung tâm (Chủ đề A1: Tính chủ động của con người, A2: AI vì sự tiến bộ của con người, A3: Công dân trong kỉ nguyên AI).
B. Đạo đức AI (Chủ đề B1: Các khía cạnh đạo đức của AI, B2: Sử dụng AI an toàn và có trách nhiệm, B3: Nguyên tắc đạo đức và trách nhiệm xã hội).
C. Các kĩ thuật và ứng dụng AI (Chủ đề C1: Đặc điểm chính của AI, C2: Ứng dụng AI trong học tập và cuộc sống, C3: Công nghệ AI, C4: Dữ liệu trong AI, C5: Kĩ thuật và thuật toán AI).
D. Thiết kế hệ thống AI (Chủ đề D1: Nhận diện và hình thành giải pháp, D2: Cấu trúc và tương tác, cải tiến hệ thống).

Quy ước mã hoá Yêu cầu cần đạt chuẩn Quyết định 2422:
[Lớp].[Mã chủ đề].[Số thứ tự] (Ví dụ: 1.A1.1, 6.A1.2, 10.C3.1, hoặc có tiền tố MR cho nội dung mở rộng như 6.A1.MR1, 11.C3.MR3).
BẮT BUỘC: Sử dụng đúng chính xác định dạng mã chuẩn [Lớp].[Mã chủ đề].[Số thứ tự] của Quyết định 2422/QĐ-BGDĐT khi trích dẫn và tích hợp vào giáo án.
`;

export const NLS_FRAMEWORK_DATA = `
KHUNG NĂNG LỰC SỐ (DIGITAL COMPETENCE FRAMEWORK) - THÔNG TƯ 02/2025/TT-BGDĐT

CẤU TRÚC PHÂN BẬC (K-12):
- Bậc 1-2 (Cơ bản): Phù hợp cấp Tiểu học (Lớp 1-5).
- Bậc 3-4 (Trung cấp): Phù hợp cấp THCS (Lớp 6-9).
- Bậc 5-6 (Nâng cao): Phù hợp cấp THPT (Lớp 10-12).

6 MIỀN NĂNG LỰC:
1. Khai thác dữ liệu và thông tin
2. Giao tiếp và Hợp tác
3. Sáng tạo nội dung số
4. An toàn
5. Giải quyết vấn đề
6. Ứng dụng AI (Decision 3439)
`;

export const SYSTEM_INSTRUCTION = `
Bạn là trợ lý AI chuyên nghiệp hỗ trợ giáo viên soạn giáo án tích hợp Năng lực số (Thông tư 02/2025/TT-BGDĐT) và Năng lực Trí tuệ nhân tạo (Quyết định 2422/QĐ-BGDĐT).

NGUYÊN TẮC CỐT LÕI VÀ ĐIỀU CẤM NGHIÊM NGẶT:
1. ĐỘC LẬP HOÀN TOÀN GIỮA NLS VÀ NĂNG LỰC AI (NLA):
   - Hai chức năng này chỉ hoạt động khi người dùng BẬT/CHỌN:
     + Nếu chỉ chọn NLS: CHỈ ĐƯỢC PHÉP tích hợp Năng lực số (TT 02/2025). NGHIÊM CẤM TUYỆT ĐỐI việc tự ý thêm bất kỳ mục tiêu hay hoạt động Năng lực AI (NLA) nào.
     + Nếu chỉ chọn NLA (AI): CHỈ ĐƯỢC PHÉP tích hợp Năng lực Trí tuệ nhân tạo (QĐ 2422). NGHIÊM CẤM TUYỆT ĐỐI việc tự ý thêm bất kỳ mục tiêu hay hoạt động Năng lực số (NLS) nào.
     + Nếu chọn cả hai: Tích hợp đồng thời cả NLS và NLA theo đúng mã đã chỉ định.
     + Nếu không chọn chức năng nào: KHÔNG tích hợp cả NLS lẫn NLA, chỉ chuẩn hóa cấu trúc giáo án.

2. QUY TẮC ĐỒNG BỘ PHỤ LỤC 3 / PPCT THEO TỪNG TIẾT HỌC:
   - Khi người dùng cung cấp Phụ lục 3 / PPCT:
     + Phải đối chiếu chính xác SỐ TIẾT trong giáo án với SỐ TIẾT tương ứng trong Phụ lục.
     + Tiết nào trong Phụ lục ghi mã NLS -> CHỈ tích hợp NLS đúng mã đó cho tiết đó.
     + Tiết nào trong Phụ lục ghi mã NLA (AI) -> CHỈ tích hợp NLA đúng mã đó cho tiết đó.
     + Tiết nào ghi cả hai mã -> Tích hợp cả hai đúng theo mã trong Phụ lục.
     + Tiết nào không ghi mã tích hợp trong Phụ lục -> KHÔNG tích hợp NLS hay NLA cho tiết đó.
   - Khi không có Phụ lục: Tích hợp chính xác theo danh sách mã người dùng đã chọn/nhập thủ công.

3. BẢO TOÀN 100% CẤU TRÚC GỐC VÀ KHÔNG THÊM KÝ TỰ LẠ, KÝ TỰ THỪA (BẮT BUỘC):
   - Dữ liệu đầu vào có thể là mã HTML (do chuyển từ file DOCX).
   - Bạn phải đọc hiểu cấu trúc HTML đó (Bảng <table>, Tiêu đề <h1>, Danh sách <ul>) và chuyển đổi chúng sang định dạng MARKDOWN tương ứng.
   - TUYỆT ĐỐI GIỮ ĐÚNG 100% MẪU CẤU TRÚC GIÁO ÁN GỐC người dùng đưa lên. Chỉ bổ sung phần tích hợp theo yêu cầu.
   - TUYỆT ĐỐI KHÔNG làm mất bảng biểu. Nếu đầu vào là bảng, đầu ra phải là Markdown Table.
   - TRONG BẢNG: Nếu một ô có nhiều dòng, HÃY DÙNG thẻ <br> để xuống dòng. TUYỆT ĐỐI KHÔNG dùng phím Enter (xuống dòng mới) trong ô bảng vì sẽ làm vỡ bảng Markdown.
   - TUYỆT ĐỐI KHÔNG làm mất các đề mục, không tự ý tóm tắt nội dung bài dạy.
   - NGHIÊM CẤM thêm bớt các ký tự lạ thừa, các dấu ** không cần thiết hoặc các thẻ rườm rà vào giáo án.

4. QUY TẮC TÍCH HỢP CHI TIẾT THEO TIẾN TRÌNH 4 BƯỚC HOẠT ĐỘNG DẠY HỌC (CÔNG VĂN 5512/BGDĐT):
   - TUYỆT ĐỐI KHÔNG VIẾT SƠ SÀI, CHUNG CHUNG (ví dụ: cấm chỉ ghi "HS dùng internet tra cứu" hay "HS dùng máy tính").
   - Trong các hoạt động dạy học được chọn để tích hợp, nội dung tích hợp NLS (Thông tư 02) và NLA (QĐ 2422) PHẢI ĐƯỢC CHÈN CHI TIẾT, CỤ THỂ VÀO TỪNG BƯỚC CỦA TIẾN TRÌNH:
     + BƯỚC 1 (CHUYỂN GIAO NHIỆM VỤ): Nêu rõ giáo viên giao nhiệm vụ số/AI như thế nào? Cung cấp link, nền tảng số, thiết bị, phần mềm, bộ từ khóa tra cứu, hoặc cấu trúc câu lệnh Prompt cụ thể ra sao?
     + BƯỚC 2 (THỰC HIỆN NHIỆM VỤ): Nêu rõ học sinh tiếp nhận và thực hiện nhiệm vụ thế nào? Thao tác trên thiết bị số/phần mềm số, kỹ năng tìm kiếm, sàng lọc dữ liệu, tương tác nhóm trên không gian số, xử lý thông tin ra sao? GV theo dõi và hướng dẫn hỗ trợ những gì?
     + BƯỚC 3 (BÁO CÁO, THẢO LUẬN): Nêu rõ học sinh báo cáo kết quả như thế nào? Trình chiếu sản phẩm số (slide, video, sơ đồ tư duy số, padlet, quiz...), cách chia sẻ và đại diện phản biện, thảo luận, đối chiếu kết quả ra sao?
     + BƯỚC 4 (KẾT LUẬN, NHẬN ĐỊNH): Nêu rõ giáo viên đánh giá, nhận xét gì về mức độ hoàn thành nhiệm vụ, kỹ năng số/kỹ năng AI và tính chính xác, liêm chính học thuật của học sinh; chuẩn hóa kiến thức bài học.
   - Mọi nội dung tích hợp bổ sung PHẢI BẢO ĐẢM PHÙ HỢP CHẶT CHẼ với nội dung kiến thức chuyên môn và nhiệm vụ học tập của học sinh trong bài học đó.

5. QUY TẮC RIÊNG CHO MÔN TIẾNG ANH (ENGLISH LESSON PLANS):
   - Khi môn học là TIẾNG ANH (hoặc giáo án gốc viết bằng Tiếng Anh):
     + Giữ đúng 100% mẫu cấu trúc giáo án gốc của giáo viên (I. Objectives / Objectives: 1. Knowledge, 2. Competences/Competencies, 3. Qualities; II. Teaching procedure / Learning activities, v.v.).
     + BẮT BUỘC: Toàn bộ nội dung bổ sung tích hợp Năng lực số (Digital Competence) và Năng lực AI (AI Competence) ở phần Mục tiêu và cả 4 bước hoạt động (Step 1: Delivering task, Step 2: Task performance, Step 3: Reporting & Discussion, Step 4: Assessment & Conclusion) PHẢI ĐƯỢC VIẾT HOÀN TOÀN BẰNG TIẾNG ANH chi tiết, chuyên nghiệp và chuẩn mực sư phạm.
     + TUYỆT ĐỐI KHÔNG viết nội dung tích hợp bằng Tiếng Việt chèn vào giáo án Tiếng Anh.

6. CÔNG THỨC TOÁN HỌC VÀ HÓA HỌC:
   - TUYỆT ĐỐI KHÔNG ĐƯỢC thay đổi, dịch sang LaTeX, hay xóa các mã giữ chỗ có dạng [MATH_ID_...].
   - Phải giữ nguyên vẹn các mã này trong văn bản đầu ra.
   - KHÔNG ĐƯỢC đặt các mã này bên trong các thẻ định dạng như in đậm (**), in nghiêng (*).
   - Dùng thẻ <nls>...</nls> đóng mở chuẩn xác để bao bọc các nội dung NLS hoặc NLA được tích hợp bổ sung vào hoạt động dạy học.

ĐẦU RA BẮT BUỘC:
- Trả về toàn bộ nội dung giáo án hoàn chỉnh dưới dạng Markdown.
- KHÔNG trả về JSON/XML, KHÔNG có lời dẫn hay lời chào mở đầu/kết thúc.
- Bắt đầu ngay bằng nội dung giáo án (Ví dụ: "TÊN BÀI HỌC...", "I. MỤC TIÊU...").
`;

// Helper: Tra cứu mã Năng lực số (Thông tư 02/2025/TT-BGDĐT)
export function findNLSRequirementByCode(rawCode: string): { code: string; name: string; desc: string } | null {
  if (!rawCode) return null;
  const cleanCode = rawCode.trim().toUpperCase().replace(/\s+/g, '');
  
  for (const [compCode, list] of Object.entries(NLS_LEVEL_DETAILS)) {
    const compOption = NLS_COMPONENT_OPTIONS.find(opt => opt.code === compCode);
    const compLabel = compOption ? compOption.label : `Mạch ${compCode}`;
    
    for (const item of list) {
      if (item.code.toUpperCase().replace(/\s+/g, '') === cleanCode) {
        return {
          code: item.code,
          name: compLabel,
          desc: item.desc
        };
      }
    }
  }

  // Check fallback AI_GRADE_REQUIREMENTS
  for (const [, list] of Object.entries(AI_GRADE_REQUIREMENTS)) {
    for (const item of list) {
      if (item.code.toUpperCase().replace(/\s+/g, '') === cleanCode) {
        return {
          code: item.code,
          name: "Năng lực AI (Thông tư 02/2025)",
          desc: item.desc
        };
      }
    }
  }

  return null;
}

// Helper: Tra cứu mã Năng lực AI (Quyết định 2422/QĐ-BGDĐT)
export function findAIRequirementByCode(rawCode: string): { code: string; name: string; desc: string } | null {
  if (!rawCode) return null;
  const cleanCode = rawCode.trim().toUpperCase().replace(/\s+/g, '');
  
  for (const [, list] of Object.entries(AI_2422_GRADE_REQUIREMENTS)) {
    for (const item of list) {
      if (item.code.toUpperCase().replace(/\s+/g, '') === cleanCode) {
        return {
          code: item.code,
          name: item.topicName,
          desc: item.desc
        };
      }
    }
  }

  // Check fallback
  for (const [, list] of Object.entries(AI_GRADE_REQUIREMENTS)) {
    for (const item of list) {
      if (item.code.toUpperCase().replace(/\s+/g, '') === cleanCode) {
        return {
          code: item.code,
          name: "Năng lực AI bổ trợ",
          desc: item.desc
        };
      }
    }
  }

  return null;
}

export const PLACEHOLDER_LESSON = `TÊN BÀI HỌC: THỐNG KÊ MÔ TẢ
Môn: Toán - Lớp: 7

I. MỤC TIÊU
1. Kiến thức: Học sinh nắm được khái niệm thống kê, biết cách thu thập số liệu.
2. Kỹ năng: Biết lập bảng số liệu thống kê.
3. Thái độ: Cẩn thận, chính xác.

II. TIẾN TRÌNH DẠY HỌC
Hoạt động 1: Khởi động
- GV cho HS xem video về ứng dụng thống kê trong đời sống.
- HS quan sát và nhận xét.

Hoạt động 2: Hình thành kiến thức
- GV hướng dẫn học sinh cách thu thập số liệu từ thực tế.
- HS thực hành ghi chép số liệu chiều cao của các bạn trong tổ.
`;