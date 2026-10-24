import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface NoticeBarProps {
  onOpenNoticeModal: () => void;
}

export const NoticeBar: React.FC<NoticeBarProps> = ({ onOpenNoticeModal }) => {
  const { t } = useLanguage();

  return (
    <aside
      aria-label="Official diplomatic notice"
      className="bg-[#125D8D] border-b border-[#0D223E] py-2 px-4 sm:px-6 lg:px-8 text-xs text-[#F8F7F3]"
    >
      <div className="max-w-[1340px] mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 overflow-hidden">
          <span className="text-[10px] font-condensed font-bold tracking-widest uppercase text-[#FFE3A0] shrink-0">
            {t({ en: 'OFFICIAL NOTICE', fr: 'AVIS OFFICIEL' })}
          </span>
          <span className="text-slate-600 hidden sm:inline" aria-hidden="true">·</span>
          <p className="truncate text-sky-50 text-xs font-sans">
            {t({
              en: 'Important consular information and public announcements.',
              fr: 'Informations consulaires importantes et annonces officielles.',
            })}
          </p>
        </div>

        <button
          type="button"
          onClick={onOpenNoticeModal}
          className="group inline-flex items-center gap-1.5 text-xs font-condensed font-semibold text-[#FFE3A0] hover:text-white transition-colors whitespace-nowrap cursor-pointer shrink-0"
        >
          <span>{t({ en: 'View notice →', fr: 'Consulter l’avis →' })}</span>
        </button>
      </div>
    </aside>
  );
};
