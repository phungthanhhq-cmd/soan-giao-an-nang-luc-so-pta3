export enum Textbook {
  KNTT = "Kết nối tri thức",
  CTST = "Chân trời sáng tạo",
  CD = "Cánh diều"
}

export enum SchoolLevel {
  TH = "TH",
  THCS = "THCS",
  THPT = "THPT"
}

export enum Subject {
  TIN = "Tin Học",
  TOAN = "Toán",
  VAN = "Ngữ Văn",
  LY = "Vật Lí",
  HOA = "Hóa Học",
  SINH = "Sinh Học",
  ANH = "Tiếng Anh",
  SU = "Lịch Sử",
  DIA = "Địa Lí",
  GDCD = "GDCD",
  CONG_NGHE = "Công Nghệ",
  THE_DUC = "Thể Dục",
  NQTN = "Nghệ thuật",
  HDKH = "Hoạt động trải nghiệm",
  TAT_CA = "Tất cả môn",
  TIENG_VIET = "Tiếng Việt",
  NGOAI_NGU_1 = "Ngoại ngữ 1",
  GD_LOI_SONG = "Giáo dục lối sống",
  DAO_DUC = "Đạo đức",
  TN_XH = "Tự nhiên và Xã hội",
  LS_DL = "Lịch sử và Địa lý",
  KHOA_HOC = "Khoa học",
  TIN_CONG_NGHE = "Tin học và Công nghệ",
  GD_THE_CHAT = "Giáo dục thể chất",
  TIENG_DT_THIEU_SO = "Tiếng dân tộc thiểu số",
  KHAC = "Khác"
}

export interface ManualNLSEntry {
  id: string; // unique id for list management
  code: string; // e.g., "1.1"
  name: string; // e.g., "Duyệt, tìm kiếm..."
  description: string; // User typed content
}

export interface ManualAIEntry {
  id: string; // unique id for list management
  code: string; // e.g., "AI.1.TC1a", "AI.2.6a"
  name: string; // e.g., "Hiểu biết về Trí tuệ nhân tạo"
  description: string; // User typed content or indicator
}

export interface LessonInfo {
  textbook: Textbook;
  schoolLevel: SchoolLevel;
  subject: Subject;
  grade: number;
  content: string; 
  distributionContent?: string;
  enableNLSIntegration?: boolean; // Flag to toggle Digital Competence integration (TT 02/2025)
  manualNLS?: ManualNLSEntry[]; // Digital competence inputs (TT 02/2025)
  enableAIIntegration?: boolean; // Flag to toggle AI competence integration (QD 2422)
  manualAI?: ManualAIEntry[]; // AI competence inputs (QD 2422)
}

export interface DocxImageInfo {
  dataUri: string; // base64 data URI (e.g. data:image/png;base64,...)
  base64: string;  // raw base64 string
  mime: string;    // MIME type
  ext: string;     // file extension
}

export type ImageMap = Record<string, DocxImageInfo>;

export interface ProcessingOptions {
  analyzeOnly: boolean;
  detailedReport: boolean;
  comparisonExport: boolean;
}

export interface GeminiResponse {
  rawText: string;
}