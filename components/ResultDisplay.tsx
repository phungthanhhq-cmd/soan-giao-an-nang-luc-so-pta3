import React, { useState } from 'react';
import { Download, CheckCircle, FileText, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { 
  Document, 
  Paragraph, 
  TextRun, 
  HeadingLevel, 
  Packer, 
  UnderlineType, 
  Table, 
  TableRow, 
  TableCell, 
  BorderStyle,
  WidthType,
  AlignmentType,
  TableLayoutType,
  LineRuleType,
  PageOrientation,
  ImportedXmlComponent
} from 'docx';
import FileSaver from 'file-saver';

interface ResultDisplayProps {
  result: string | null;
  loading: boolean;
  mathMap: Record<string, string>;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ result, loading, mathMap }) => {
  const [showPreview, setShowPreview] = useState(false);
  const [isGeneratingDoc, setIsGeneratingDoc] = useState(false);

  // Helper: Clean raw AI result to remove conversational filler, markdown artifact noise, and unneeded tags
  const cleanResultText = (text: string): string => {
    if (!text) return "";
    
    // 1. Remove markdown code blocks
    let clean = text.replace(/^```markdown\s*/i, "").replace(/^```\s*/i, "").replace(/```\s*$/i, "");
    
    // 2. Remove HTML Anchors (Bookmarks artifacts from Word conversion) e.g., <a id="_Hlk147258080"></a>
    clean = clean.replace(/<a\s+id="[^"]*"><\/a>/gi, "");
    
    // 3. Clean consecutive asterisks like **** or *** to standard **
    clean = clean.replace(/\*{3,}/g, "**");

    // 4. Remove common AI intros
    const lines = clean.split('\n');
    if (lines.length > 0) {
        const firstLine = lines[0].trim().toLowerCase();
        const introPatterns = [
            "dưới đây là", "sau đây là", "đây là", "kết quả", 
            "here is", "sure, here", "giáo án đã được", 
            "bản giáo án", "nội dung giáo án", "chào bạn"
        ];
        
        if (firstLine.length < 100 && introPatterns.some(p => firstLine.includes(p))) {
             lines.shift(); 
             if (lines.length > 0 && lines[0].trim() === "") lines.shift(); 
        }
    }
    return lines.join('\n').trim();
  };

  const safeResult = result ? cleanResultText(result) : null;

  interface TextStyle {
    bold?: boolean;
    italics?: boolean;
    underline?: boolean;
    subScript?: boolean;
    superScript?: boolean;
    color?: string;
  }

  // Helper: Parse text with recursive formatting and complete cleanup of rogue markup tags
  const parseTextWithFormatting = (rawText: string): any[] => {
    const runs: any[] = [];

    const emitRun = (textChunk: string, styles: TextStyle) => {
      // Split on <br>
      const segments = textChunk.split(/<br\s*\/?>/gi);
      segments.forEach((seg, index) => {
        if (index > 0) {
          runs.push(new TextRun({ text: "", break: 1 }));
        }
        // Strip any residual HTML/XML tags (like unclosed <nls>, <u>, <span>, etc.) so raw tags NEVER appear in text
        let cleanSeg = seg.replace(/<\/?[a-zA-Z0-9_-]+(\s+[^>]*)?>/g, "");
        // Clean stray escaped asterisks or redundant asterisks
        cleanSeg = cleanSeg.replace(/\\\*/g, "").replace(/\*{2,}/g, "");

        if (cleanSeg) {
          runs.push(new TextRun({
            text: cleanSeg,
            bold: styles.bold,
            italics: styles.italics,
            underline: styles.underline ? { type: UnderlineType.SINGLE } : undefined,
            subScript: styles.subScript,
            superScript: styles.superScript,
            color: styles.color,
            font: "Times New Roman",
            size: 28, // 14pt
          }));
        }
      });
    };

    const processSegment = (text: string, styles: TextStyle) => {
      if (!text) return;

      // 1. Math OMML placeholders
      if (text.includes('[MATH_ID_')) {
        const parts = text.split(/(\[MATH_ID_\d+_\d+\])/g);
        if (parts.length > 1) {
          parts.forEach(part => {
            if (part.startsWith('[MATH_ID_') && part.endsWith(']')) {
              const mathId = part.slice(1, -1);
              const omml = mathMap[mathId];
              if (omml) {
                try {
                  runs.push(ImportedXmlComponent.fromXmlString(omml));
                } catch (e) {
                  emitRun(part, styles);
                }
              } else {
                emitRun(part, styles);
              }
            } else {
              processSegment(part, styles);
            }
          });
          return;
        }
      }

      // 2. <nls> tags (Integrated content marked in red)
      if (/<nls>[\s\S]*?<\/nls>/i.test(text)) {
        const parts = text.split(/(<nls>[\s\S]*?<\/nls>)/gi);
        if (parts.length > 1) {
          parts.forEach(part => {
            if (/^<nls>[\s\S]*?<\/nls>$/i.test(part)) {
              const inner = part.replace(/^<nls>/i, "").replace(/<\/nls>$/i, "");
              processSegment(inner, { ...styles, color: "FF0000", bold: true });
            } else {
              processSegment(part, styles);
            }
          });
          return;
        }
      }

      // 3. <u> tags (Underline or highlighted red)
      if (/<u>[\s\S]*?<\/u>/i.test(text)) {
        const parts = text.split(/(<u>[\s\S]*?<\/u>)/gi);
        if (parts.length > 1) {
          parts.forEach(part => {
            if (/^<u>[\s\S]*?<\/u>$/i.test(part)) {
              const inner = part.replace(/^<u>/i, "").replace(/<\/u>$/i, "");
              processSegment(inner, { ...styles, color: "FF0000" });
            } else {
              processSegment(part, styles);
            }
          });
          return;
        }
      }

      // 4. <sub> and <sup>
      if (/<sub>[\s\S]*?<\/sub>|<sup>[\s\S]*?<\/sup>/i.test(text)) {
        const parts = text.split(/(<sub>[\s\S]*?<\/sub>|<sup>[\s\S]*?<\/sup>)/gi);
        if (parts.length > 1) {
          parts.forEach(part => {
            if (/^<sub>[\s\S]*?<\/sub>$/i.test(part)) {
              const inner = part.replace(/^<sub>/i, "").replace(/<\/sub>$/i, "");
              processSegment(inner, { ...styles, subScript: true });
            } else if (/^<sup>[\s\S]*?<\/sup>$/i.test(part)) {
              const inner = part.replace(/^<sup>/i, "").replace(/<\/sup>$/i, "");
              processSegment(inner, { ...styles, superScript: true });
            } else {
              processSegment(part, styles);
            }
          });
          return;
        }
      }

      // 5. **Bold**
      if (/\*\*[\s\S]*?\*\*/.test(text)) {
        const parts = text.split(/(\*\*[\s\S]*?\*\*)/g);
        if (parts.length > 1) {
          parts.forEach(part => {
            if (part.startsWith('**') && part.endsWith('**') && part.length >= 4) {
              const inner = part.slice(2, -2);
              processSegment(inner, { ...styles, bold: true });
            } else {
              processSegment(part, styles);
            }
          });
          return;
        }
      }

      // 6. *Italic* or _Italic_
      if (/\*[^*\n]+\*|_[^_\n]+_/.test(text)) {
        const parts = text.split(/(\*[^*\n]+\*|_[^_\n]+_)/g);
        if (parts.length > 1) {
          parts.forEach(part => {
            if ((part.startsWith('*') && part.endsWith('*')) || (part.startsWith('_') && part.endsWith('_'))) {
              const inner = part.slice(1, -1);
              processSegment(inner, { ...styles, italics: true });
            } else {
              processSegment(part, styles);
            }
          });
          return;
        }
      }

      // Base plain text chunk
      emitRun(text, styles);
    };

    processSegment(rawText, {});
    return runs;
  };

  // Helper: Create Docx Table from Markdown lines
  const createTableFromMarkdown = (tableLines: string[]): Table | null => {
    try {
        const validLines = tableLines.filter(line => !line.match(/^\|?\s*[-:]+[-|\s:]*\|?\s*$/));
        
        // Parse raw cells for each row
        const parsedRows = validLines.map(line => {
            const cells = line.split('|');
            if (line.trim().startsWith('|') && cells.length > 0 && cells[0].trim() === '') cells.shift();
            if (line.trim().endsWith('|') && cells.length > 0 && cells[cells.length - 1].trim() === '') cells.pop();
            return cells;
        });

        if (parsedRows.length === 0) return null;

        // Determine standard column count from first row (typically the header)
        const hdrCount = Math.max(parsedRows[0].length, 1);

        const getColumnWidth = (colIndex: number, totalCols: number): number => {
            if (totalCols === 2) {
                // Perfect proportions for 2-column teacher lesson plans
                return colIndex === 0 ? 35 : 65;
            }
            if (totalCols === 3) {
                if (colIndex === 0) return 25;
                if (colIndex === 1) return 35;
                return 40;
            }
            // Equal distribution for other number of columns
            return Math.floor(100 / totalCols);
        };

        const rows = parsedRows.map((cells) => {
            // Normalize row cells to match hdrCount exactly by merging extra cells or padding empty ones
            let normalizedCells: string[] = [];
            if (cells.length === hdrCount) {
                normalizedCells = cells;
            } else if (cells.length > hdrCount) {
                normalizedCells = cells.slice(0, hdrCount - 1);
                const extraCells = cells.slice(hdrCount - 1);
                const mergedContent = extraCells.map(c => c.trim()).filter(Boolean).join("<br>");
                normalizedCells.push(mergedContent);
            } else {
                normalizedCells = [...cells];
                while (normalizedCells.length < hdrCount) {
                    normalizedCells.push("");
                }
            }

            return new TableRow({
                children: normalizedCells.map((cellContent, cellIndex) => {
                    let cellText = cellContent.trim();
                    cellText = cellText.replace(/^\\\*\s*/, "").replace(/^\\\s+/, "");

                    const cellW = getColumnWidth(cellIndex, hdrCount);

                    return new TableCell({
                        children: [new Paragraph({
                            children: parseTextWithFormatting(cellText),
                            spacing: { before: 120, after: 0, line: 240, lineRule: LineRuleType.AUTO },
                            indent: { firstLine: 0, left: 0, right: 0 },
                            alignment: AlignmentType.LEFT
                        })],
                        width: {
                            size: cellW,
                            type: WidthType.PERCENTAGE,
                        },
                        borders: {
                            top: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
                            bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
                            left: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
                            right: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
                        },
                    });
                })
            });
        });

        return new Table({
            rows: rows,
            width: { size: 100, type: WidthType.PERCENTAGE },
            layout: TableLayoutType.FIXED,
        });
    } catch (e) {
        console.error("Lỗi parse table:", e);
        return null;
    }
  };

  const generateDocx = async () => {
    if (!safeResult) return;
    setIsGeneratingDoc(true);

    try {
      const lines = safeResult.split('\n');
      const children: (Paragraph | Table)[] = [];
      let tableBuffer: string[] = [];
      let inTable = false;

      // === CONSTANTS FOR FORMATTING ===
      const FIRST_LINE_INDENT = 720; // 1.27cm
      const PARAGRAPH_SPACING = { before: 120, after: 0, line: 240, lineRule: LineRuleType.AUTO };

      for (let i = 0; i < lines.length; i++) {
        const rawLine = lines[i].trimEnd();
        let trimmed = rawLine.trim();

        // --- CLEANING ARTIFACTS START ---
        // 1. Remove leftover HTML anchors if any (though cleanResultText handles most)
        trimmed = trimmed.replace(/<a\s+id="[^"]*"><\/a>/gi, "");
        
        // 2. Remove escaped asterisk at start (e.g. "\* Text")
        trimmed = trimmed.replace(/^\\\*\s*/, "");

        // 3. Remove escaped space at start (e.g. "\ Text")
        trimmed = trimmed.replace(/^\\\s+/, "");
        
        // Re-trim after cleaning
        trimmed = trimmed.trim();
        // --- CLEANING ARTIFACTS END ---

        // 1. Table Handling
        if (trimmed.startsWith('|')) {
            inTable = true;
            tableBuffer.push(rawLine); // Use rawLine for table parsing to keep separators align if needed
            continue;
        } else if (inTable) {
            if (tableBuffer.length > 0) {
                const tableNode = createTableFromMarkdown(tableBuffer);
                if (tableNode) {
                    children.push(tableNode);
                }
                tableBuffer = [];
            }
            inTable = false;
        }

        // 2. Empty Line Handling
        if (!trimmed) {
          continue;
        }

        // 3. Heading Handling
        if (trimmed.startsWith('## ')) {
          children.push(new Paragraph({
            children: parseTextWithFormatting(trimmed.replace('## ', '')),
            heading: HeadingLevel.HEADING_1,
            spacing: PARAGRAPH_SPACING,
            indent: { firstLine: FIRST_LINE_INDENT },
            alignment: AlignmentType.JUSTIFIED
          }));
        } 
        else if (trimmed.startsWith('### ')) {
          children.push(new Paragraph({
             children: parseTextWithFormatting(trimmed.replace('### ', '')),
            heading: HeadingLevel.HEADING_2,
            spacing: PARAGRAPH_SPACING,
            indent: { firstLine: FIRST_LINE_INDENT },
            alignment: AlignmentType.JUSTIFIED
          }));
        }
        else if (trimmed.startsWith('#### ')) {
            children.push(new Paragraph({
               children: parseTextWithFormatting(trimmed.replace('#### ', '')),
              heading: HeadingLevel.HEADING_3,
              spacing: PARAGRAPH_SPACING,
              indent: { firstLine: FIRST_LINE_INDENT },
              alignment: AlignmentType.JUSTIFIED
            }));
        }
        // 4. List Handling
        else if (trimmed.startsWith('- ') || trimmed.startsWith('+ ') || trimmed.startsWith('* ')) {
            const content = trimmed.substring(2);
            children.push(new Paragraph({
                children: parseTextWithFormatting(`- ${content}`),
                spacing: PARAGRAPH_SPACING,
                indent: { firstLine: FIRST_LINE_INDENT },
                alignment: AlignmentType.JUSTIFIED
            }));
        }
        // 5. Regular Text
        else {
             children.push(new Paragraph({
                children: parseTextWithFormatting(trimmed),
                spacing: PARAGRAPH_SPACING,
                indent: { firstLine: FIRST_LINE_INDENT },
                alignment: AlignmentType.JUSTIFIED
            }));
        }
      }

      // Flush remaining table
      if (tableBuffer.length > 0) {
         const tableNode = createTableFromMarkdown(tableBuffer);
         if (tableNode) children.push(tableNode);
      }

      // === PAGE MARGINS ===
      const doc = new Document({
        styles: {
          default: {
            document: {
              run: {
                size: 28, // 14pt
                font: "Times New Roman",
                color: "000000"
              },
              paragraph: {
                spacing: { line: 240, before: 120, after: 0 },
              }
            },
            heading1: {
                run: { size: 28, bold: true, font: "Times New Roman", color: "000000" },
                paragraph: { spacing: { before: 120, after: 0 }, indent: { firstLine: FIRST_LINE_INDENT } }
            },
            heading2: {
                run: { size: 28, bold: true, font: "Times New Roman", color: "000000" },
                paragraph: { spacing: { before: 120, after: 0 }, indent: { firstLine: FIRST_LINE_INDENT } }
            },
            heading3: {
                run: { size: 28, bold: true, font: "Times New Roman", color: "000000" },
                paragraph: { spacing: { before: 120, after: 0 }, indent: { firstLine: FIRST_LINE_INDENT } }
            }
          }
        },
        sections: [{
          properties: {
            page: {
              margin: {
                top: 1134,
                bottom: 1134,
                left: 1418, 
                right: 1134,
              },
            },
          },
          children: children,
        }],
      });

      const blob = await Packer.toBlob(doc);
      FileSaver.saveAs(blob, "Giao_an_NLS_Chuan.docx");
    } catch (error) {
      console.error("Lỗi tạo docx:", error);
      alert("Lỗi khi tạo file DOCX. Đang tải xuống file văn bản thay thế.");
      handleDownloadTxt();
    } finally {
      setIsGeneratingDoc(false);
    }
  };

  const handleDownloadTxt = () => {
    if (!safeResult) return;
    let txtResult = safeResult.replace(/\[MATH_ID_\d+_\d+\]/g, '[Công thức Toán học]');
    // Strip all HTML/XML tags and markdown formatting for clean plain text
    txtResult = txtResult.replace(/<\/?[a-zA-Z0-9_-]+(\s+[^>]*)?>/g, '');
    txtResult = txtResult.replace(/\*\*/g, '');
    txtResult = txtResult.replace(/\\/g, '');
    const blob = new Blob([txtResult], { type: 'text/plain;charset=utf-8' });
    FileSaver.saveAs(blob, 'Giao_an_NLS.txt');
  };

  if (loading) {
    return (
      <div className="bg-white/90 backdrop-blur-md p-16 rounded-3xl shadow-xl border border-indigo-100 flex flex-col items-center justify-center min-h-[400px]">
        <div className="relative">
             <div className="absolute inset-0 bg-indigo-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
             <div className="relative p-6 bg-white rounded-full shadow-lg">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-indigo-100 border-t-indigo-600"></div>
             </div>
        </div>
        <h3 className="text-xl font-bold text-slate-800 mt-8">Đang xử lý thông minh</h3>
        <p className="text-slate-500 mt-2 text-center max-w-xs">AI đang đọc hiểu cấu trúc file và tích hợp năng lực số...</p>
      </div>
    );
  }

  if (!safeResult) return null;

  return (
    <div className="bg-white rounded-3xl shadow-2xl shadow-indigo-200/50 border border-indigo-50 overflow-hidden animate-fade-in-up">
      <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800 px-6 py-12 flex flex-col items-center justify-center text-center space-y-4 text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="relative z-10 p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
           <Sparkles className="text-yellow-300" size={32} />
        </div>
        
        <div className="relative z-10">
            <h2 className="text-3xl font-extrabold tracking-tight">Xử lý thành công!</h2>
            <p className="text-indigo-100 mt-2 max-w-lg mx-auto text-lg font-light">
                Giáo án đã được chuẩn hóa định dạng và tích hợp năng lực số.
            </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full max-w-md relative z-10">
          <button 
            onClick={generateDocx}
            disabled={isGeneratingDoc}
            className="flex-1 flex items-center justify-center space-x-2 px-6 py-4 bg-white text-indigo-700 rounded-2xl text-lg font-bold hover:bg-indigo-50 transition-all shadow-lg transform hover:-translate-y-1 active:scale-95"
          >
             {isGeneratingDoc ? (
                 <span className="animate-pulse">Đang tạo file...</span>
             ) : (
                 <>
                    <Download size={22} />
                    <span>Tải về DOCX (Chuẩn)</span>
                 </>
             )}
          </button>
        </div>
      </div>
      
      <div className="bg-slate-50 border-t border-slate-200">
        <button 
            onClick={() => setShowPreview(!showPreview)}
            className="w-full flex items-center justify-center text-slate-500 text-sm font-semibold uppercase tracking-wider py-4 hover:bg-slate-100 transition-colors"
        >
            {showPreview ? (
                <>Thu gọn <ChevronUp size={16} className="ml-2" /></>
            ) : (
                <>Xem trước nội dung <ChevronDown size={16} className="ml-2" /></>
            )}
        </button>
      </div>

      {showPreview && (
        <div className="p-10 prose prose-slate max-w-none prose-p:text-slate-600 prose-headings:text-indigo-900 prose-headings:font-bold prose-strong:text-indigo-700 prose-li:text-slate-600 border-t border-slate-200 bg-white">
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>
            {safeResult.replace(/\[MATH_ID_\d+_\d+\]/g, '[Công thức Toán học]')}
            </ReactMarkdown>
        </div>
      )}
    </div>
  );
};

export default ResultDisplay;