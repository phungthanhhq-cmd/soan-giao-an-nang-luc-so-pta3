import React, { useState, useEffect, useRef } from 'react';
import { Plus, Trash2, Target, Info, Zap, ChevronDown, Check, Search, Filter, X, LayoutGrid, List, Sparkles } from 'lucide-react';
import { NLS_COMPONENT_OPTIONS, NLS_LEVEL_DETAILS, AI_GRADE_REQUIREMENTS, findNLSRequirementByCode } from '../constants';
import { ManualNLSEntry, SchoolLevel } from '../types';

interface ManualNLSInputProps {
  entries: ManualNLSEntry[];
  setEntries: (entries: ManualNLSEntry[]) => void;
  enabled?: boolean;
  setEnabled?: (enabled: boolean) => void;
  schoolLevel: SchoolLevel;
  grade: number;
}

const ManualNLSInput: React.FC<ManualNLSInputProps> = ({ 
  entries, 
  setEntries, 
  enabled = true,
  setEnabled,
  schoolLevel, 
  grade 
}) => {
  // Helper to determine suggested default proficiency level from school level & grade
  const getSuggestedDefaultLevel = (sLevel: SchoolLevel, gr: number): number => {
    if (sLevel === SchoolLevel.TH || (gr >= 1 && gr <= 5)) {
      return gr >= 4 ? 2 : 1;
    }
    if (sLevel === SchoolLevel.THCS || (gr >= 6 && gr <= 9)) {
      return gr >= 8 ? 4 : 3;
    }
    return gr >= 12 ? 6 : 5;
  };

  const [selectedDomain, setSelectedDomain] = useState<string>("ALL");
  const [targetProficiencyLevel, setTargetProficiencyLevel] = useState<number>(() => getSuggestedDefaultLevel(schoolLevel, grade));
  const [description, setDescription] = useState<string>('');
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [viewMode, setViewMode] = useState<'compact' | 'detailed'>('compact');
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  // Update level selection when schoolLevel or grade changes
  useEffect(() => {
    const defaultLevel = getSuggestedDefaultLevel(schoolLevel, grade);
    setTargetProficiencyLevel(defaultLevel);
  }, [schoolLevel, grade]);

  // Reset description when domain or level changes
  useEffect(() => {
    setDescription("");
  }, [selectedDomain, targetProficiencyLevel]);

  const handleAddCustom = () => {
    if (!description.trim()) {
      alert("Vui lòng nhập mã NLS (ví dụ: 1.1.CB1a, 2.3.TC1b) hoặc nội dung yêu cầu.");
      return;
    }

    const rawInput = description.trim();
    // Split by comma, semicolon, newline or forward slash
    const tokens = rawInput.split(/[,;\n/]+/).map(t => t.trim()).filter(Boolean);
    const newItems: ManualNLSEntry[] = [];

    tokens.forEach(token => {
      // Check if format like "1.1.CB1a: Mô tả" or "1.1.CB1a - Mô tả"
      const colonMatch日益 = token.match(/^([0-9]+\.[0-9]+\.[A-Za-z0-9]+)[\s:–-]+(.*)$/);
      const candidateCode = colonMatch日益 ? colonMatch日益[1] : token;
      const customNote = colonMatch日益 ? colonMatch日益[2]?.trim() : '';

      const matchedStd = findNLSRequirementByCode(candidateCode);
      if (matchedStd) {
        newItems.push({
          id: Date.now().toString() + '_' + Math.random().toString(36).substring(2, 6) + '_' + matchedStd.code,
          code: matchedStd.code,
          name: matchedStd.name,
          description: customNote ? `${matchedStd.desc} (${customNote})` : matchedStd.desc
        });
      } else {
        const domainCode = selectedDomain === "ALL" ? "NLS.TUYCHINH" : selectedDomain;
        const component = NLS_COMPONENT_OPTIONS.find(opt => opt.code === domainCode);
        const looksLikeCode = token.length <= 16 && !token.includes(' ') && /[0-9]/.test(token);
        newItems.push({
          id: Date.now().toString() + '_' + Math.random().toString(36).substring(2, 6),
          code: looksLikeCode ? token.toUpperCase() : domainCode,
          name: component ? component.label : "Yêu cầu NLS bổ sung",
          description: token
        });
      }
    });

    const existingCodes = new Set(entries.map(e => e.code));
    const uniqueToAdd = newItems.filter(item => !existingCodes.has(item.code));

    if (uniqueToAdd.length === 0 && newItems.length > 0) {
      alert("Mã NLS bạn nhập đã có trong danh sách đã chọn.");
      return;
    }

    setEntries([...entries, ...uniqueToAdd]);
    setDescription(""); 
  };

  const handleRemove = (id: string) => {
    setEntries(entries.filter(e => e.id !== id));
  };

  // Map numbers to desired display codes
  const proficiencyLabels: Record<number, { code: string; name: string }> = {
    1: { code: "CB1", name: "Cơ bản 1 (Lớp 1-3)" },
    2: { code: "CB2", name: "Cơ bản 2 (Lớp 4-5)" },
    3: { code: "TC1", name: "Trung cấp 1 (Lớp 6-7)" },
    4: { code: "TC2", name: "Trung cấp 2 (Lớp 8-9)" },
    5: { code: "NC1", name: "Nâng cao 1 (Lớp 10-11)" },
    6: { code: "NC2", name: "Nâng cao 2 (Lớp 12)" }
  };

  // Suggested levels display logic based on school level
  const suggestedLevels = schoolLevel === SchoolLevel.TH ? [1, 2] : 
                         schoolLevel === SchoolLevel.THCS ? [3, 4] : [5, 6];

  // Build full available codes list based on selectedDomain and targetProficiencyLevel
  const availableCodesList: { code: string; desc: string; domainCode: string; domainLabel: string }[] = [];

  const componentsToScan = selectedDomain === "ALL" 
    ? NLS_COMPONENT_OPTIONS.map(opt => opt.code)
    : [selectedDomain];

  componentsToScan.forEach(compCode => {
    const compOption = NLS_COMPONENT_OPTIONS.find(opt => opt.code === compCode);
    const compLabel = compOption ? compOption.label : compCode;
    const levels = NLS_LEVEL_DETAILS[compCode] || [];

    // Filter by target proficiency level
    const matched = levels.filter(lvl => lvl.level === targetProficiencyLevel);
    matched.forEach(lvl => {
      if (!availableCodesList.some(item => item.code === lvl.code)) {
        availableCodesList.push({
          code: lvl.code,
          desc: lvl.desc,
          domainCode: compCode,
          domainLabel: compLabel
        });
      }
    });

    // If scanning AI components and grade requirements exist
    if (compCode.startsWith("6") && (selectedDomain === "ALL" || selectedDomain === compCode)) {
      const aiReqs = AI_GRADE_REQUIREMENTS[grade] || [];
      aiReqs.forEach(req => {
        if (!availableCodesList.some(item => item.code === req.code)) {
          availableCodesList.push({
            code: req.code,
            desc: req.desc,
            domainCode: compCode,
            domainLabel: compLabel
          });
        }
      });
    }
  });

  // Filter list by search term
  const filteredCodesList = availableCodesList.filter(item => {
    if (!searchTerm.trim()) return true;
    const term = searchTerm.toLowerCase().trim();
    return item.code.toLowerCase().includes(term) || 
           item.desc.toLowerCase().includes(term) || 
           item.domainLabel.toLowerCase().includes(term);
  });

  const isCodeChecked = (code: string) => entries.some(e => e.code === code);

  const toggleCode = (codeItem: { code: string; desc: string; domainCode: string; domainLabel: string }) => {
    if (isCodeChecked(codeItem.code)) {
      setEntries(entries.filter(e => e.code !== codeItem.code));
    } else {
      const newEntry: ManualNLSEntry = {
        id: Date.now().toString() + '_' + Math.random().toString(36).substring(2, 6),
        code: codeItem.code,
        name: codeItem.domainLabel,
        description: codeItem.desc
      };
      setEntries([...entries, newEntry]);
      setDescription(codeItem.desc);
    }
  };

  const handleSelectAll = () => {
    const updatedEntries = [...entries];
    filteredCodesList.forEach(item => {
      if (!updatedEntries.some(e => e.code === item.code)) {
        updatedEntries.push({
          id: Date.now().toString() + '_' + Math.random().toString(36).substring(2, 6),
          code: item.code,
          name: item.domainLabel,
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

  return (
    <div className={`bg-white rounded-3xl shadow-xl shadow-indigo-100/50 p-8 border border-white/50 backdrop-blur-sm mt-6 relative ${isDropdownOpen ? 'z-40' : 'z-20'}`}>
      {/* Header with Switch */}
      <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
        <div className="flex items-center">
          <div className={`p-3 rounded-2xl mr-4 transition-colors ${enabled ? 'bg-indigo-100 text-indigo-600' : 'bg-slate-100 text-slate-400'}`}>
            <Target size={24} className="stroke-[2.2]" />
          </div>
          <div>
             <div className="flex items-center gap-2 flex-wrap">
               <h2 className="text-xl font-bold text-slate-800">Yêu cầu Năng lực số áp dụng</h2>
               <span className="text-[10px] font-extrabold bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-2 py-0.5 rounded-full uppercase tracking-wider shadow-xs">
                 Thông tư 02/2025
               </span>
             </div>
             <p className="text-xs text-slate-500 mt-0.5">
               Chuẩn Thông tư 02 & QĐ 3439: <span className="font-semibold text-indigo-700">{schoolLevel} - Lớp {grade}</span> (Gợi ý: <span className="font-bold text-indigo-700">{proficiencyLabels[targetProficiencyLevel]?.code}</span>)
             </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {entries.length > 0 && enabled && (
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-indigo-700 bg-indigo-50 border border-indigo-200 px-3 py-1.5 rounded-xl">
                Đã chọn <span className="font-bold text-indigo-800">{entries.length}</span> mã NLS
              </span>
            </div>
          )}

          {setEnabled && (
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                checked={enabled} 
                onChange={(e) => setEnabled(e.target.checked)} 
                className="sr-only peer" 
              />
              <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
              <span className="ml-2.5 text-xs font-bold text-slate-700">
                {enabled ? 'Đang bật NLS' : 'Tắt NLS'}
              </span>
            </label>
          )}
        </div>
      </div>

      {enabled ? (
        <div className="space-y-4 animate-in fade-in-50 duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
        
        {/* Dropdown 1: Miền năng lực */}
        <div className="lg:col-span-1">
           <label className="block text-[10px] font-bold text-slate-500 mb-1.5 uppercase ml-1">1. Miền Năng lực</label>
           <select
             value={selectedDomain}
             onChange={(e) => setSelectedDomain(e.target.value)}
             className="block w-full rounded-xl border-0 bg-slate-50 py-2.5 px-3 text-slate-700 ring-1 ring-inset ring-slate-200 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-xs font-medium transition-shadow cursor-pointer hover:bg-slate-100"
           >
             <option value="ALL">-- Tất cả miền (Toàn bộ 6 miền) --</option>
             {NLS_COMPONENT_OPTIONS.map((opt) => (
               <option key={opt.code} value={opt.code}>{opt.label}</option>
             ))}
           </select>
        </div>

        {/* Dropdown 2: Mức độ (Bậc) */}
        <div className="lg:col-span-1">
           <label className="block text-[10px] font-bold text-slate-500 mb-1.5 uppercase ml-1">2. Mức độ (Bậc NLS)</label>
           <select
             value={targetProficiencyLevel}
             onChange={(e) => setTargetProficiencyLevel(parseInt(e.target.value))}
             className="block w-full rounded-xl border-0 bg-slate-50 py-2.5 px-3 text-slate-700 ring-1 ring-inset ring-slate-200 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-xs font-medium transition-shadow cursor-pointer hover:bg-slate-100 font-semibold"
           >
             {[1, 2, 3, 4, 5, 6].map(b => (
               <option key={b} value={b}>
                 {proficiencyLabels[b].code} - {proficiencyLabels[b].name} { suggestedLevels.includes(b) ? " ⭐ (Phù hợp)" : "" }
               </option>
             ))}
           </select>
        </div>

        {/* Multi-Select Dropdown 3: Mã tích hợp */}
        <div className={`lg:col-span-1 relative ${isDropdownOpen ? 'z-50' : 'z-10'}`} ref={dropdownRef}>
           <label className="block text-[10px] font-bold text-slate-500 mb-1.5 uppercase ml-1 flex justify-between items-center">
             <span>3. Mã Tích hợp</span>
             {checkedCountInCurrent > 0 && (
               <span className="text-[10px] font-semibold text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded-full">
                 {checkedCountInCurrent}/{availableCodesList.length}
               </span>
             )}
           </label>

           <button
             type="button"
             onClick={() => setIsDropdownOpen(!isDropdownOpen)}
             className={`w-full rounded-xl border-0 bg-slate-50 py-2.5 px-3 text-slate-700 ring-1 ring-inset ${
               isDropdownOpen ? 'ring-2 ring-indigo-600 bg-indigo-50/40' : 'ring-slate-200 hover:bg-slate-100'
             } text-xs font-medium transition-all flex items-center justify-between cursor-pointer`}
           >
             <span className="truncate text-left font-medium">
               {availableCodesList.length === 0
                 ? "Không có mã"
                 : checkedCountInCurrent === 0
                 ? `-- Chọn mã [${proficiencyLabels[targetProficiencyLevel]?.code}] (${availableCodesList.length} mã) --`
                 : `Đã tích ${checkedCountInCurrent} mã [${proficiencyLabels[targetProficiencyLevel]?.code}]`}
             </span>
             <ChevronDown size={14} className={`text-slate-400 transition-transform flex-shrink-0 ml-1 ${isDropdownOpen ? 'rotate-180 text-indigo-600' : ''}`} />
           </button>

           {/* Popup menu with checkboxes */}
           {isDropdownOpen && (
             <div className="absolute z-50 top-full left-0 mt-1.5 w-80 sm:w-96 md:w-[420px] max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-3.5 text-xs space-y-2.5 max-h-[380px] overflow-y-auto">
               <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                 <div>
                   <span className="font-bold text-slate-800 text-[11px] uppercase tracking-wider block">
                     Chuẩn NLS [{proficiencyLabels[targetProficiencyLevel]?.code}]
                   </span>
                   <span className="text-[10px] text-slate-500">
                     {selectedDomain === "ALL" ? `Tất cả 6 miền (${availableCodesList.length} mã)` : `${availableCodesList.length} mã trong miền`}
                   </span>
                 </div>
                 <div className="flex gap-1.5">
                   <button
                     type="button"
                     onClick={handleSelectAll}
                     className="text-[10px] font-bold text-indigo-600 hover:text-indigo-800 bg-indigo-50 hover:bg-indigo-100 px-2 py-1 rounded-lg transition-colors"
                   >
                     Chọn tất cả
                   </button>
                   <button
                     type="button"
                     onClick={handleDeselectAll}
                     className="text-[10px] font-bold text-slate-500 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 px-2 py-1 rounded-lg transition-colors"
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
                   placeholder="Tìm mã hoặc từ khóa (ví dụ: 1.1, AI, tìm kiếm...)"
                   className="w-full bg-slate-50 rounded-xl py-1.5 pl-8 pr-2.5 text-[11px] border border-slate-200 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-slate-700 placeholder:text-slate-400"
                 />
               </div>

               {filteredCodesList.length === 0 ? (
                 <p className="text-slate-400 italic py-4 text-center text-xs">
                   {searchTerm ? "Không tìm thấy mã phù hợp với từ khóa" : "Không có mã nào ở mức độ này"}
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
                             ? 'bg-indigo-50 border border-indigo-300 shadow-sm' 
                             : 'hover:bg-slate-50 border border-slate-100'
                         }`}
                       >
                         <input
                           type="checkbox"
                           checked={checked}
                           onChange={() => toggleCode(item)}
                           className="mt-0.5 h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer accent-indigo-600 flex-shrink-0"
                         />
                         <div className="flex-1 min-w-0">
                           <div className="flex items-center gap-1.5 mb-0.5 flex-wrap">
                             <span className={`font-bold px-1.5 py-0.5 rounded text-[10px] tracking-wide ${
                               checked ? 'bg-indigo-600 text-white' : 'bg-indigo-100 text-indigo-700'
                             }`}>
                               {item.code}
                             </span>
                             <span className="text-[10px] text-slate-400 font-medium truncate max-w-[170px]" title={item.domainLabel}>
                               {item.domainLabel}
                             </span>
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

        {/* Input Description & Add Button */}
        <div className="lg:col-span-2">
           <label className="block text-[10px] font-bold text-slate-500 mb-1.5 uppercase ml-1 flex justify-between items-center">
             <span>4. Nhập mã NLS / Đồng bộ Phụ lục</span>
             <span className="text-[10px] text-indigo-600 font-medium lowercase">gõ mã (vd: 1.1.CB1a, 2.3.TC1b)</span>
           </label>
           <div className="flex gap-2">
             <input
               type="text"
               value={description}
               onChange={(e) => setDescription(e.target.value)}
               placeholder="Nhập mã (vd: 1.1.CB1a, 2.3.TC1b) hoặc dán từ phụ lục..."
               className="block w-full rounded-xl border-0 bg-slate-50 py-2 px-3 text-slate-700 ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-xs transition-shadow h-[38px]"
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
               className="bg-indigo-600 text-white px-3.5 h-[38px] rounded-xl hover:bg-indigo-700 transition-all shadow-sm shadow-indigo-500/20 disabled:bg-slate-300 disabled:shadow-none flex items-center justify-center font-bold text-xs shrink-0 cursor-pointer"
               title="Thêm mã NLS này vào danh sách"
             >
               <Plus size={16} className="mr-1" />
               <span>Thêm</span>
             </button>
           </div>
        </div>

      </div>

      {/* Selected Items List */}
      <div className="mt-5 pt-3 border-t border-slate-100">
        {entries.length === 0 ? (
          <div className="flex items-center justify-between py-2 px-3 bg-indigo-50/40 border border-indigo-100 rounded-xl text-xs text-slate-500">
             <div className="flex items-center gap-2">
               <Info className="text-indigo-400 shrink-0" size={15} />
               <span>Chưa chọn mã NLS nào. Mở ô <strong>"3. Mã Tích hợp"</strong> ở trên để tích chọn mã phù hợp.</span>
             </div>
          </div>
        ) : (
          <div className="space-y-2">
            {/* Header with count and View Mode Switcher */}
            <div className="flex items-center justify-between flex-wrap gap-2 px-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                  <Zap size={14} className="text-indigo-600 fill-current" />
                  Mã Năng lực số đã chọn ({entries.length})
                </span>
                
                {/* View mode toggle */}
                <div className="inline-flex bg-slate-100 p-0.5 rounded-lg border border-slate-200 text-[10px]">
                  <button
                    type="button"
                    onClick={() => setViewMode('compact')}
                    className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md font-semibold transition-all cursor-pointer ${
                      viewMode === 'compact' ? 'bg-white text-indigo-700 shadow-xs' : 'text-slate-500 hover:text-slate-800'
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
                      viewMode === 'detailed' ? 'bg-white text-indigo-700 shadow-xs' : 'text-slate-500 hover:text-slate-800'
                    }`}
                    title="Xem chi tiết nội dung chỉ báo"
                  >
                    <List size={11} />
                    <span>Chi tiết</span>
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setEntries([])}
                className="text-[11px] font-semibold text-rose-500 hover:text-rose-700 transition-colors cursor-pointer"
              >
                Xóa tất cả
              </button>
            </div>

            {/* Compact View: Chips / Tags */}
            {viewMode === 'compact' ? (
              <div className="flex flex-wrap gap-2 pt-1">
                {entries.map((entry) => (
                  <div 
                    key={entry.id} 
                    className="group inline-flex items-center gap-2 bg-indigo-50 hover:bg-indigo-100/70 border border-indigo-200 text-indigo-950 px-2.5 py-1.5 rounded-xl text-xs transition-all shadow-xs"
                    title={entry.description}
                  >
                    <span className="font-extrabold bg-indigo-600 text-white text-[10px] px-1.5 py-0.5 rounded-md tracking-wide shrink-0">
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
                    className="group flex items-start justify-between bg-indigo-50/40 hover:bg-indigo-50 border border-indigo-100/80 p-2.5 rounded-xl transition-all"
                  >
                    <div className="flex items-start flex-1 min-w-0">
                      <span className="text-[10px] font-bold bg-indigo-600 text-white px-2 py-0.5 rounded-md uppercase tracking-wider mr-2 shrink-0 mt-0.5">
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
                      title="Xóa mã này"
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
    <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200/80 rounded-2xl text-xs text-slate-500">
      <div className="flex items-center gap-2">
        <Info size={16} className="text-slate-400 shrink-0" />
        <span>Tính năng <strong>Tích hợp Năng lực số (Thông tư 02)</strong> đang tắt. Bật công tắc ở trên nếu bài học cần tích hợp NLS.</span>
      </div>
      {setEnabled && (
        <button
          type="button"
          onClick={() => setEnabled(true)}
          className="text-xs font-bold text-indigo-600 hover:text-indigo-800 bg-white border border-indigo-200 hover:bg-indigo-50 px-3 py-1.5 rounded-xl transition-all shadow-xs cursor-pointer shrink-0 ml-3"
        >
          Bật tích hợp NLS
        </button>
      )}
    </div>
  )}
</div>
);
};

export default ManualNLSInput;
