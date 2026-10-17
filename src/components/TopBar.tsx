import React from 'react';
import { Phone, ShieldAlert } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface TopBarProps {
  onOpenEmergencyModal: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onOpenEmergencyModal }) => {
  const { lang, setLang, t } = useLanguage();

  return (
    <div className="bg-[#051322] text-[#F8F7F3]/75 text-xs border-b border-[#0D223E] py-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1340px] mx-auto flex items-center justify-between gap-4">
        {/* Left: Official statement */}
        <div className="flex items-center gap-2 truncate">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C89A3D] shrink-0" aria-hidden="true" />
          <span className="font-normal text-[#F8F7F3]/80 text-[11px] sm:text-xs truncate tracking-wide">
            {t({
              en: 'Official Diplomatic Mission of the Democratic Republic of the Congo in Namibia',
              fr: 'Mission Diplomatique Officielle de la République Démocratique du Congo en Namibie',
            })}
          </span>
        </div>

        {/* Right: Contact, Emergency, Language */}
        <div className="flex items-center gap-4 sm:gap-6 text-[#F8F7F3]/80 shrink-0 text-[11px] sm:text-xs font-condensed">
          <a
            href="#contact"
            className="hover:text-[#C89A3D] transition-colors flex items-center gap-1.5 whitespace-nowrap"
          >
            <Phone size={11} className="text-[#C89A3D]" />
            <span className="hidden sm:inline">{t({ en: 'Contact', fr: 'Contact' })}</span>
          </a>

          <button
            type="button"
            onClick={onOpenEmergencyModal}
            className="hover:text-[#9E2F3A] text-[#F8F7F3]/90 transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
          >
            <ShieldAlert size={12} className="text-[#9E2F3A]" />
            <span>{t({ en: 'Emergency', fr: 'Urgence' })}</span>
          </button>

          {/* Clean minimal Language Switcher EN / FR */}
          <div className="flex items-center text-[11px] font-semibold tracking-wider text-slate-400">
            <button
              type="button"
              onClick={() => setLang('en')}
              className={`hover:text-white transition-colors cursor-pointer px-1 ${
                lang === 'en' ? 'text-[#C89A3D] font-bold' : ''
              }`}
              aria-label="Switch to English"
            >
              EN
            </button>
            <span className="text-slate-600 px-0.5">/</span>
            <button
              type="button"
              onClick={() => setLang('fr')}
              className={`hover:text-white transition-colors cursor-pointer px-1 ${
                lang === 'fr' ? 'text-[#C89A3D] font-bold' : ''
              }`}
              aria-label="Passer en Français"
            >
              FR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
