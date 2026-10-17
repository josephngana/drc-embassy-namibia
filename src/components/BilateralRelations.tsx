import React, { useState } from 'react';
import { X, Handshake } from 'lucide-react';
import { DrcFlag, NamibiaFlag } from './Emblem';
import { useLanguage } from '../context/LanguageContext';
import { BILATERAL_PILLARS } from '../data/embassyData';

export const BilateralRelations: React.FC = () => {
  const { t } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section
      id="bilateral"
      aria-label="DRC and Namibia Bilateral Relations"
      className="py-24 sm:py-28 lg:py-32 bg-[#071A2F] text-[#F8F7F3] border-b border-[#0D223E] relative overflow-hidden"
    >
      {/* Subtle ribbon line divider */}
      <div className="absolute top-0 inset-x-0 diplomatic-ribbon-line opacity-40" />

      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Editorial Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="font-condensed text-xs font-bold tracking-[0.2em] uppercase text-[#C89A3D]">
              {t({ en: 'BILATERAL RELATIONS', fr: 'RELATIONS BILATÉRALES' })}
            </span>
            <div className="flex items-center -space-x-1 opacity-90">
              <DrcFlag size={18} />
              <NamibiaFlag size={18} />
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#F8F7F3] tracking-tight leading-tight">
            <span className="block">{t({ en: 'TWO NATIONS.', fr: 'DEUX NATIONS.' })}</span>
            <span className="block text-[#C89A3D]">{t({ en: 'A SHARED FUTURE.', fr: 'UN AVENIR PARTAGÉ.' })}</span>
          </h2>

          <p className="font-sans text-[15px] sm:text-base text-slate-300 font-light max-w-2xl leading-[1.75]">
            {t({
              en: 'Forged through decades of fraternal solidarity within SADC, the Democratic Republic of the Congo and the Republic of Namibia maintain an enduring strategic alliance rooted in mutual sovereignty, maritime corridors, and economic synergy.',
              fr: 'Forgée par des décennies de solidarité fraternelle au sein de la SADC, l’alliance entre la République Démocratique du Congo et la République de Namibie repose sur la souveraineté partagée, les corridors maritimes et les complémentarités économiques.',
            })}
          </p>
        </div>

        {/* High-Impact Bilateral Diplomacy Imagery (Diplomatic Handshake / Summit Setting) */}
        <div className="relative aspect-[21/9] sm:aspect-[2.6/1] overflow-hidden bg-[#051322] border border-[#C89A3D]/30 shadow-2xl group">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80"
            alt="Official diplomatic bilateral partnership and cooperation accords between DRC and Namibia"
            className="w-full h-full object-cover object-center filter brightness-90 contrast-105 transition-transform duration-700 group-hover:scale-102"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071A2F] via-[#071A2F]/30 to-transparent" />

          {/* Bilateral Flags Seal Overlaid directly on the bilateral diplomacy composition */}
          <div className="absolute top-5 left-6 sm:top-6 sm:left-8 flex items-center gap-2.5 bg-[#071A2F]/85 backdrop-blur-xs px-3.5 py-2 border border-[#C89A3D]/40">
            <div className="flex items-center -space-x-1">
              <DrcFlag size={20} />
              <NamibiaFlag size={20} />
            </div>
            <span className="font-condensed text-[11px] font-bold text-[#F8F7F3] tracking-widest uppercase">
              DRC × NAMIBIA STRATEGIC AXIS
            </span>
          </div>

          {/* Discreet image caption at bottom */}
          <div className="absolute bottom-4 left-6 sm:bottom-6 sm:left-8 flex items-center gap-2 text-xs font-condensed tracking-widest text-[#F8F7F3]/90">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C89A3D]" />
            <span>
              {t({
                en: 'KINSHASA · WINDHOEK BILATERAL SUMMIT & TRADE CORRIDOR ACCORDS',
                fr: 'AXE DIPLOMATIQUE KINSHASA · WINDHOEK — ACCORDS DE COOPÉRATION ET CORRIDORS',
              })}
            </span>
          </div>
        </div>

        {/* 3 Relationship Pillars: Editorial Columns separated by Fine Vertical Rules (No cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-700/60 pt-4">
          {BILATERAL_PILLARS.map((pillar, index) => (
            <div
              key={pillar.id}
              className={`space-y-3 ${
                index === 0
                  ? 'pb-6 md:pb-0 md:pr-8'
                  : index === 1
                  ? 'py-6 md:py-0 md:px-8'
                  : 'pt-6 md:pt-0 md:pl-8'
              }`}
            >
              <span className="font-condensed text-[11px] font-bold text-[#C89A3D] tracking-wider uppercase block">
                0{index + 1}
              </span>

              <h3 className="font-serif text-xl sm:text-2xl font-medium text-white">
                {t(pillar.title)}
              </h3>

              <p className="font-sans text-[15px] sm:text-base text-slate-300 font-light leading-[1.75]">
                {t(pillar.desc)}
              </p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="pt-2">
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="group inline-flex items-center gap-2 text-xs font-condensed font-bold tracking-widest uppercase text-[#C89A3D] hover:text-white transition-colors cursor-pointer"
          >
            <span>{t({ en: 'EXPLORE BILATERAL RELATIONS →', fr: 'EXPLORER LES RELATIONS BILATÉRALES →' })}</span>
          </button>
        </div>
      </div>

      {/* Diplomatic Brief Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#071A2F] border border-[#C89A3D]/50 max-w-2xl w-full p-6 sm:p-8 text-[#F8F7F3] relative shadow-2xl space-y-6 animate-drawer-panel">
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="space-y-1">
              <span className="font-condensed text-xs font-bold tracking-widest text-[#C89A3D] uppercase">
                {t({ en: 'DIPLOMATIC BRIEFING', fr: 'NOTE DIPLOMATIQUE' })}
              </span>
              <h3 className="text-2xl font-serif font-medium text-white">
                {t({ en: 'DRC–Namibia Strategic Partnership', fr: 'Partenariat Stratégique RDC–Namibie' })}
              </h3>
            </div>

            <div className="space-y-4 font-sans text-sm sm:text-base text-slate-300 font-light leading-relaxed">
              <p>
                {t({
                  en: 'The Democratic Republic of the Congo and the Republic of Namibia maintain diplomatic ties anchored in shared anti-colonial solidarity and joint commitment to SADC regional stability. A major pillar of this partnership is the Walvis Bay–Ndola–Lubumbashi Development Corridor (WBNLDC), providing mineral-rich southern DRC with efficient, secure access to the Atlantic Ocean.',
                  fr: 'La République Démocratique du Congo et la République de Namibie entretiennent des liens historiques ancrés dans la solidarité régionale et la souveraineté au sein de la SADC. L’axe névralgique de ce partenariat s’incarne dans le Corridor de Walvis Bay–Ndola–Lubumbashi (WBNLDC), ouvrant aux minerais congolais une desserte maritime atlantique directe.',
                })}
              </p>
              <p>
                {t({
                  en: 'Academic accords also facilitate student exchanges at the University of Namibia (UNAM) and Namibia University of Science and Technology (NUST), while the Joint Permanent Commission on Cooperation (JPCC) meets regularly to review bilateral treaties.',
                  fr: 'Les accords académiques facilitent la formation d’étudiants congolais à l’UNAM et à la NUST, tandis que la Commission Mixte Permanente de Coopération (CMPC) assure le suivi des traités bilatéraux.',
                })}
              </p>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="px-5 py-2.5 bg-[#C89A3D] text-[#071A2F] text-xs font-condensed font-bold uppercase tracking-widest cursor-pointer"
              >
                {t({ en: 'Close Brief', fr: 'Fermer' })}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
