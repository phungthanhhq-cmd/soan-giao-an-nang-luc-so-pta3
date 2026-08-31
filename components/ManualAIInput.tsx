import React, { useState, useEffect, useRef } from 'react';
import { Plus, Trash2, Bot, Info, Sparkles, ChevronDown, Search, Brain, RefreshCw, X, LayoutGrid, List } from 'lucide-react';
import { 
  AI_2422_STRANDS,
  AI_2422_TOPICS,
  AI_2422_GRADE_REQUIREMENTS,
  findAIRequirementByCode
} from '../constants';
import { ManualAIEntry, SchoolLevel } from '../types';

interface ManualAIInputProps {
  entries: ManualAIEntry[];
  setEntries: (entries: ManualAIEntry[]) => void;
  enabled: boolean;
  setEnabled: (enabled: boolean) => void;
  schoolLevel: SchoolLevel;
  grade: number;
}

const ManualAIInput: React.FC<ManualAIInputProps> = ({ 
  entries, 
  setEntries, 
  enabled,
  setEnabled,
  schoolLevel, 
  grade 
}) => {
  const [selectedStrand, setSelectedStrand] = useState<string>("ALL");
  const [selectedTopic, setSelectedTopic] = useState<string>("ALL");
  const [description, setDescription] = useState<string>('');
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [viewMode, setViewMode] = useState<'compact' | 'detailed'>('compact');
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Auto-suggest function: Suggests 2-3 representative AI codes for the current grade
  const autoSelectGradeCodes = (targetGrade: number) => {
    const gradeReqs = AI_2422_GRADE_REQUIREMENTS[targetGrade] || [];
    if (gradeReqs.length > 0) {
      // Pick 2 representative non-extension requirements for a clean start
      const nonExt = gradeReqs.filter(r => !r.isExtension);
      const selectedSubset = nonExt.slice(0, 2);
      const itemsToSet = selectedSubset.length > 0 ? selectedSubset : gradeReqs.slice(0, 2);
      
      const newEntries: ManualAIEntry[] = itemsToSet.map(req => ({
        id: Date.now().toString() + '_' + Math.random().toString(36).substring(2, 6) + '_' + req.code,
        code: req.code,
        name: req.topicName,
        description: req.desc
      }));
      setEntries(newEntries);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Reset topic when strand changes
  useEffect(() => {
    setSelectedTopic("ALL");
  }, [selectedStrand]);

  const handleAddCustom = () => {
    if (!description.trim()) {
      alert("Vui lòng nhập mã AI (ví dụ: 6.A3.1, 6.B2.1) hoặc nội dung yêu cầu.");
      return;
    }

    const rawInput = description.trim();
    // Split by comma, semicolon, newline or forward slash
    const tokens = rawInput.split(/[,;\n/]+/).map(t => t.trim()).filter(Boolean);
    const newItems: ManualAIEntry[] = [];

    tokens.forEach(token => {
      // Check if format like "6.A3.1: Mô tả" or "6.A3.1 - Mô tả"
      const colonMatch = token.match(/^([0-9]+\.[A-Za-z0-9]+\.[A-Za-z0-9]+)[\s:–-]+(.*)$/);
      const candidateCode = colonMatch ? colonMatch[1] : token;
      const customNote = colonMatch ? colonMatch[2]?.trim() : '';

      const matchedStd = findAIRequirementByCode(candidateCode);
      if (matchedStd) {
        newItems.push({
          id: Date.now().toString() + '_' + Math.random().toString(36).substring(2, 6) + '_' + matchedStd.code,
          code: matchedStd.code,
          name: matchedStd.name,
          description: customNote ? `${matchedStd.desc} (${customNote})` : matchedStd.desc
        });
      } else {
        const looksLikeCode = token.length <= 16 && !token.includes(' ') && /[0-9]/.test(token);
        newItems.push({
          id: Date.now().toString() + '_' + Math.random().toString(36).substring(2, 6),
          code: looksLikeCode ? token.toUpperCase() : `${grade}.AI.TUYCHINH`,
          name: "Yêu cầu AI bổ sung",
          description: token
        });
      }
    });

    const existingCodes = new Set(entries.map(e => e.code));
    const uniqueToAdd = newItems.filter(item => !existingCodes.has(item.code));

    if (uniqueToAdd.length === 0 && newItems.length > 0) {
      alert("Mã AI bạn nhập đã có trong danh sách đã chọn.");
      return;
    }

    setEntries([...entries, ...uniqueToAdd]);
    setDescription(""); 
  };

  const handleRemove = (id: string) => {
    setEntries(entries.filter(e => e.id !== id));
  };

  // Get available requirements for the selected grade from Quyết định 2422
  const gradeRequirements = AI_2422_GRADE_REQUIREMENTS[grade] || [];

  // Filter available requirements by strand, topic, and search term
  const availableCodesList = gradeRequirements.filter(req => {
    if (selectedStrand !== "ALL" && req.strandCode !== selectedStrand) return false;
    if (selectedTopic !== "ALL" && req.topicCode !== selectedTopic) return false;
    return true;
  });

  // Filter list by search term
  const filteredCodesList = availableCodesList.filter(item => {
    if (!searchTerm.trim()) return true;
    const term = searchTerm.toLowerCase().trim();
    return item.code.toLowerCase().includes(term) || 
           item.desc.toLowerCase().includes(term) || 
           item.topicName.toLowerCase().includes(term);
  });

  const isCodeChecked = (code: string) => entries.some(e => e.code === code);

  const toggleCode = (codeItem: { code: string; desc: string; topicCode: string; strandCode: string; topicName: string }) => {
    if (isCodeChecked(codeItem.code)) {
      setEntries(entries.filter(e => e.code !== codeItem.code));
    } else {
      const newEntry: ManualAIEntry = {
        id: Date.now().toString() + '_' + Math.random().toString(36).substring(2, 6),
        code: codeItem.code,
        name: codeItem.topicName,
        description: codeItem.desc
      };
      setEntries([...entries, newEntry]);
    }
  };

  const handleSelectAll = () => {
    const updatedEntries = [...entries];
    filteredCodesList.forEach(item => {
      if (!updatedEntries.some(e => e.code === item.code)) {
        updatedEntries.push({
          id: Date.now().toString() + '_' + Math.random().toString(36).substring(2, 6),
          code: item.code,
          name: item.topicName,
          description: item.desc
        });
      }
    });
    setEntries(updatedEntries);
  };

  const handleDeselectAll = () => {
    const codeSet = new Set(filteredCodesList.map(c => c.code));
    setEntries(entries.filter(e => !codeSet.has(e.code)));
  };

  const checkedCountInCurrent = availableCodesList.filter(item => isCodeChecked(item.code)).length;

  // Available topics based on selectedStrand
  const availableTopics = selectedStrand === "ALL" 
    ? Object.values(AI_2422_TOPICS).flat() 
    : (AI_2422_TOPICS[selectedStrand] || []);

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-purple-100 p-5 md:p-6 transition-all duration-300 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-50 rounded-full blur-3xl -z-10 pointer-events-none opacity-60" />

      {/* Header with Switch */}
      <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
        <div className="flex items-center">
          <div className={`p-2.5 rounded-2xl mr-3 transition-colors ${enabled ? 'bg-purple-100 text-purple-700' : 'bg-slate-100 text-slate-400'}`}>
            <Bot size={22} className="stroke-[2.2]" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="text-lg font-bold text-slate-800">Tích hợp Năng lực Trí tuệ nhân tạo (AI)</h2>
              <span className="text-[10px] font-extrabold bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-2 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                QĐ 2422/QĐ-BGDĐT
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Khung năng lực AI trong trường học: <span className="font-semibold text-purple-700">{schoolLevel} - Lớp {grade}</span>
            </p>
          </div>
        </div>

        {/* Toggle Switch */}
        <div className="flex items-center gap-3">
          <label className="relative inline-flex items-center cursor-pointer">
            <input 
              type="checkbox" 
              checked={enabled} 
              onChange={(e) => {
                const isChecked = e.target.checked;
                setEnabled(isChecked);
              }} 
              className="sr-only peer" 
            />
            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
            <span className="ml-2.5 text-xs font-bold text-slate-700">
              {enabled ? 'Đang bật AI' : 'Tắt AI'}
            </span>
          </label>
        </div>
      </div>

      {/* Main Content when Enabled */}
      {enabled ? (
        <div className="space-y-4 animate-in fade-in-50 duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3.5 items-end">
            {/* Dropdown 1: Mạch Nội dung AI */}
            <div className="lg:col-span-1">
              <label className="block text-[10px] font-bold text-slate-500 mb-1.5 uppercase ml-1">1. Mạch Nội dung AI</label>
              <select
                value={selectedStrand}
                onChange={(e) => setSelectedStrand(e.target.value)}
                className="block w-full rounded-xl border-0 bg-slate-50 py-2 px-2.5 text-slate-700 ring-1 ring-inset ring-slate-200 focus:ring-2 focus:ring-inset focus:ring-purple-600 text-xs font-medium transition-shadow cursor-pointer hover:bg-slate-100"
              >
                <option value="ALL">-- Tất cả 4 mạch AI --</option>
                {AI_2422_STRANDS.map((opt) => (
                  <option key={opt.code} value={opt.code}>{opt.label}</option>
                ))}
              </select>
            </div>

            {/* Dropdown 2: Chủ đề AI */}
            <div className="lg:col-span-1">
              <label className="block text-[10px] font-bold text-slate-500 mb-1.5 uppercase ml-1">2. Chủ đề AI (QĐ 2422)</label>
              <select
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
                className="block w-full rounded-xl border-0 bg-slate-50 py-2 px-2.5 text-slate-700 ring-1 ring-inset ring-slate-200 focus:ring-2 focus:ring-inset focus:ring-purple-600 text-xs font-semibold transition-shadow cursor-pointer hover:bg-slate-100"
              >
                <option value="ALL">-- Tất cả chủ đề --</option>
                {availableTopics.map(t => (
                  <option key={t.code} value={t.code}>
                    {t.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Dropdown 3: Mã Tích hợp AI (Multi-select) */}
            <div className="lg:col-span-1 relative" ref={dropdownRef}>
              <label className="block text-[10px] font-bold text-slate-500 mb-1.5 uppercase ml-1 flex justify-between items-center">
                <span>3. Chọn mã AI (Lớp {grade})</span>
                {checkedCountInCurrent > 0 && (
                  <span className="text-[10px] font-semibold text-purple-600 bg-purple-50 px-1.5 py-0.2 rounded-full">
                    {checkedCountInCurrent}/{availableCodesList.length}
                  </span>
                )}
              </label>
              
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`w-full rounded-xl border-0 bg-slate-50 py-2 px-2.5 text-slate-700 ring-1 ring-inset ${
                  isDropdownOpen ? 'ring-2 ring-purple-600 bg-purple-50/40' : 'ring-slate-200 hover:bg-slate-100'
                } text-xs font-medium transition-all flex items-center justify-between cursor-pointer`}
              >
                <span className="truncate text-left font-medium">
                  {availableCodesList.length === 0
                    ? "Không có mã"
                    : checkedCountInCurrent === 0
                    ? `-- Tích chọn mã AI (${availableCodesList.length} mã) --`
                    : `Đã tích ${checkedCountInCurrent} mã Lớp ${grade}`}
                </span>
                <ChevronDown size={14} className={`text-slate-400 transition-transform flex-shrink-0 ml-1 ${isDropdownOpen ? 'rotate-180 text-purple-600' : ''}`} />
              </button>

              {/* Popup menu with checkboxes */}
              {isDropdownOpen && (
                <div className="absolute z-30 top-full left-0 mt-1.5 w-80 md:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200/80 p-3.5 text-xs space-y-2.5 max-h-80 overflow-y-auto">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                    <div>
                      <span className="font-bold text-slate-800 text-[11px] uppercase tracking-wider block">
                        Mã Chuẩn QĐ 2422 - Lớp {grade}
                      </span>
                      <span className="text-[10px] text-slate-500">
                        {selectedStrand === "ALL" ? `Tất cả 4 mạch AI (${availableCodesList.length} mã)` : `${availableCodesList.length} mã trong mạch`}
                      </span>
                    </div>
                    <div className="flex gap-1.5">
                      <button
                        type="button"
                        onClick={handleSelectAll}
                        className="px-2 py-1 text-[10px] font-bold text-purple-700 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors cursor-pointer"
                      >
                        Chọn hết
                      </button>
                      <button
                        type="button"
                        onClick={handleDeselectAll}
                        className="px-2 py-1 text-[10px] font-bold text-slate-500 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
                      >
                        Bỏ chọn
                      </button>
                    </div>
                  </div>

                  {/* Quick Search */}
                  <div className="relative">
                    <Search size={13} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Tìm mã AI (vd: 1.A1.1, 6.A3.1, Prompt...)"
                      className="w-full bg-slate-50 rounded-xl py-1.5 pl-8 pr-2.5 text-[11px] border border-slate-200 focus:outline-none focus:ring-1 focus:ring-purple-500 text-slate-700 placeholder:text-slate-400"
                    />
                  </div>

                  {filteredCodesList.length === 0 ? (
                    <p className="text-slate-400 italic py-4 text-center text-xs">
                      {searchTerm ? "Không tìm thấy mã AI phù hợp" : "Không có mã AI nào trong bộ lọc này"}
                    </p>
                  ) : (
                    <div className="space-y-1.5 pr-1">
                      {filteredCodesList.map((item) => {
                        const checked = isCodeChecked(item.code);
                        return (
                          <label
                            key={item.code}
                            className={`flex items-start gap-2.5 p-2 rounded-xl cursor-pointer transition-all ${
                              checked 
                                ? 'bg-purple-50 border border-purple-300 shadow-sm' 
                                : 'hover:bg-slate-50 border border-slate-100'
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={checked}
                              onChange={() => toggleCode(item)}
                              className="mt-0.5 h-4 w-4 rounded border-slate-300 text-purple-600 focus:ring-purple-500 cursor-pointer accent-purple-600 flex-shrink-0"
                            />
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-1.5 mb-0.5 flex-wrap">
                                <span className={`font-bold px-1.5 py-0.5 rounded text-[10px] tracking-wide ${
                                  checked ? 'bg-purple-600 text-white' : 'bg-purple-100 text-purple-700'
                                }`}>
                                  {item.code}
                                </span>
                                <span className="text-[10px] text-slate-500 font-semibold truncate max-w-[170px]" title={item.topicName}>
                                  {item.topicName}
                                </span>
                                {item.isExtension && (
                                  <span className="text-[9px] font-bold bg-amber-100 text-amber-800 px-1 rounded">Mở rộng</span>
                                )}
                              </div>
                              <p className="text-[11px] text-slate-600 leading-snug">
                                {item.desc}
                              </p>
                            </div>
                          </label>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Input 4: Nhập mã AI / Đồng bộ Phụ lục */}
            <div className="lg:col-span-2">
              <label className="block text-[10px] font-bold text-slate-500 mb-1.5 uppercase ml-1 flex justify-between items-center">
                <span>4. Nhập mã AI / Đồng bộ Phụ lục</span>
                <span className="text-[10px] text-purple-600 font-medium lowercase">gõ mã (vd: {grade}.A3.1, {grade}.B2.1)</span>
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder={`Nhập mã (vd: ${grade}.A3.1, ${grade}.B2.1) hoặc dán từ phụ lục...`}
                  className="block w-full rounded-xl border-0 bg-slate-50 py-2 px-3 text-slate-700 ring-1 ring-inset ring-slate-200 focus:ring-2 focus:ring-inset focus:ring-purple-600 text-xs transition-shadow placeholder:text-slate-400 h-[38px]"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleAddCustom();
                    }
                  }}
                />
                <button
                  type="button"
                  onClick={handleAddCustom}
                  disabled={!description.trim()}
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-3.5 h-[38px] rounded-xl text-xs transition-all shadow-sm shadow-purple-500/20 disabled:bg-slate-300 disabled:shadow-none flex items-center justify-center shrink-0 cursor-pointer"
                  title="Thêm mã AI này vào danh sách"
                >
                  <Plus size={16} className="mr-1" />
                  <span>Thêm</span>
                </button>
              </div>
            </div>
          </div>

          {/* Compact Selected AI Codes Section */}
          <div className="pt-3 border-t border-slate-100">
            {entries.length === 0 ? (
              <div className="flex items-center justify-between py-2 px-3 bg-purple-50/40 border border-purple-100 rounded-xl text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <Info className="text-purple-400 shrink-0" size={15} />
                  <span>Chưa chọn mã AI nào. Hãy mở <strong>"3. Chọn mã AI"</strong> để tích các mã phù hợp với bài học.</span>
                </div>
                <button
                  type="button"
                  onClick={() => autoSelectGradeCodes(grade)}
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-purple-700 hover:text-purple-900 bg-purple-100/70 hover:bg-purple-100 px-2.5 py-1 rounded-lg transition-colors cursor-pointer shrink-0 ml-2"
                >
                  <Sparkles size={12} />
                  <span>Gợi ý 2 mã Lớp {grade}</span>
                </button>
              </div>
            ) : (
              <div className="space-y-2">
                {/* Header with count and View Mode Switcher */}
                <div className="flex items-center justify-between flex-wrap gap-2 px-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                      <Brain size={14} className="text-purple-600" />
                      Mã Năng lực AI đã chọn ({entries.length})
                    </span>
                    
                    {/* View mode toggle */}
                    <div className="inline-flex bg-slate-100 p-0.5 rounded-lg border border-slate-200 text-[10px]">
                      <button
                        type="button"
                        onClick={() => setViewMode('compact')}
                        className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md font-semibold transition-all cursor-pointer ${
                          viewMode === 'compact' ? 'bg-white text-purple-700 shadow-xs' : 'text-slate-500 hover:text-slate-800'
                        }`}
                        title="Dạng thẻ gọn (Chip)"
                      >
                        <LayoutGrid size={11} />
                        <span>Thu gọn</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setViewMode('detailed')}
                        className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md font-semibold transition-all cursor-pointer ${
                          viewMode === 'detailed' ? 'bg-white text-purple-700 shadow-xs' : 'text-slate-500 hover:text-slate-800'
                        }`}
                        title="Xem chi tiết nội dung chỉ báo"
                      >
                        <List size={11} />
                        <span>Chi tiết</span>
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => autoSelectGradeCodes(grade)}
                      className="text-[11px] font-medium text-purple-600 hover:text-purple-800 transition-colors cursor-pointer inline-flex items-center gap-1"
                      title="Gợi ý chọn lại 2 mã AI đại diện"
                    >
                      <RefreshCw size={11} />
                      <span>Gợi ý lại</span>
                    </button>
                    <span className="text-slate-300">|</span>
                    <button
                      type="button"
                      onClick={() => setEntries([])}
                      className="text-[11px] font-semibold text-rose-500 hover:text-rose-700 transition-colors cursor-pointer"
                    >
                      Xóa tất cả
                    </button>
                  </div>
                </div>

                {/* Compact View: Chips / Tags */}
                {viewMode === 'compact' ? (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {entries.map((entry) => (
                      <div 
                        key={entry.id}
                        className="group inline-flex items-center gap-2 bg-purple-50 hover:bg-purple-100/70 border border-purple-200 text-purple-950 px-2.5 py-1.5 rounded-xl text-xs transition-all shadow-xs"
                        title={entry.description}
                      >
                        <span className="font-extrabold bg-purple-600 text-white text-[10px] px-1.5 py-0.5 rounded-md tracking-wide shrink-0">
                          {entry.code}
                        </span>
                        <span className="font-semibold text-slate-700 truncate max-w-[220px]">
                          {entry.name}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleRemove(entry.id)}
                          className="text-slate-400 hover:text-rose-600 hover:bg-rose-50 p-0.5 rounded-md transition-colors cursor-pointer shrink-0 ml-0.5"
                          title="Bỏ chọn mã này"
                        >
                          <X size={13} />
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  /* Detailed View: Compact list with scroll */
                  <div className="space-y-1.5 max-h-64 overflow-y-auto pr-1">
                    {entries.map((entry) => (
                      <div 
                        key={entry.id} 
                        className="group flex items-start justify-between bg-purple-50/40 hover:bg-purple-50 border border-purple-100/80 p-2.5 rounded-xl transition-all"
                      >
                        <div className="flex items-start flex-1 min-w-0">
                          <span className="text-[10px] font-bold bg-purple-600 text-white px-2 py-0.5 rounded-md uppercase tracking-wider mr-2 shrink-0 mt-0.5">
                            {entry.code}
                          </span>
                          <div className="flex-1 min-w-0">
                            <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block mb-0.5 truncate">
                              {entry.name}
                            </span>
                            <p className="text-xs text-slate-600 leading-relaxed font-normal">{entry.description}</p>
                          </div>
                        </div>
                        <button 
                          onClick={() => handleRemove(entry.id)}
                          className="text-slate-400 hover:text-rose-500 hover:bg-rose-50 p-1 rounded-lg transition-all ml-2 shrink-0 cursor-pointer"
                          title="Xóa mã AI này"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="py-2 text-center text-xs text-slate-400">
          Tích hợp Năng lực AI (QĐ 2422/QĐ-BGDĐT) đang tắt. Bật công tắc ở trên để kích hoạt và chọn mã AI cho bài giảng.
        </div>
      )}
    </div>
  );
};

export default ManualAIInput;

