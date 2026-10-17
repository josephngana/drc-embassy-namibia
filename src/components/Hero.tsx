import React from 'react';
import { FileText, ChevronRight } from 'lucide-react';
import { DrcFlag, NamibiaFlag } from './Emblem';
import { useLanguage } from '../context/LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      aria-label="Embassy of the Democratic Republic of the Congo"
      className="relative bg-[#071A2F] text-[#F8F7F3] pt-16 pb-20 sm:pt-20 sm:pb-28 lg:pt-28 lg:pb-32 overflow-hidden"
    >
      {/* Background Subtle Diagonal Ribbon Motif */}
      <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 900"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Subtle diagonal ribbon band */}
          <path d="M-200 900 L950 0 L1080 0 L-70 900 Z" fill="#1478C8" fillOpacity="0.12" />
          <path d="M-60 900 L1090 0 L1125 0 L-25 900 Z" fill="#C89A3D" fillOpacity="0.18" />
          <path d="M-20 900 L1130 0 L1175 0 L25 900 Z" fill="#9E2F3A" fillOpacity="0.14" />
          <path d="M30 900 L1180 0 L1215 0 L65 900 Z" fill="#C89A3D" fillOpacity="0.18" />
        </svg>
      </div>

      <div className="relative max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT SIDE: Editorial Headline & Presentation (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Small Diplomatic Label */}
            <div className="inline-flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C89A3D]" aria-hidden="true" />
              <span className="font-condensed text-xs sm:text-[13px] tracking-[0.2em] uppercase text-[#C89A3D] font-semibold">
                DEMOCRATIC REPUBLIC OF THE CONGO × REPUBLIC OF NAMIBIA
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight leading-[1.12] text-balance">
              <span className="block text-[#F8F7F3]">
                {t({ en: 'STRENGTHENING', fr: 'CONSOLIDER' })}
              </span>
              <span className="block text-[#F8F7F3]">
                {t({ en: 'RELATIONS.', fr: 'LES RELATIONS.' })}
              </span>
              <span className="block text-[#C89A3D] mt-2 sm:mt-3">
                {t({ en: 'SERVING OUR PEOPLE.', fr: 'SERVIR NOTRE NATION.' })}
              </span>
            </h1>

            {/* Supporting Copy */}
            <div className="space-y-3 max-w-xl">
              <p className="font-serif text-base sm:text-lg text-[#F8F7F3]/90 italic leading-snug">
                {t({
                  en: 'Embassy of the Democratic Republic of the Congo in the Republic of Namibia',
                  fr: 'Ambassade de la République Démocratique du Congo en République de Namibie',
                })}
              </p>
              {/* Increased readability: 16px desktop body text */}
              <p className="font-sans text-[15px] sm:text-base text-slate-300 font-light leading-[1.75]">
                {t({
                  en: 'Promoting diplomatic cooperation, serving the Congolese community and strengthening bilateral relations between the Democratic Republic of the Congo and Namibia.',
                  fr: 'Promouvoir la coopération diplomatique, servir la communauté congolaise et fortifier les relations bilatérales entre la République Démocratique du Congo et la Namibie.',
                })}
              </p>
            </div>

            {/* Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-[#C89A3D] hover:bg-[#b88c32] active:bg-[#a67d2a] text-[#071A2F] text-xs font-condensed font-bold tracking-widest uppercase px-7 py-3.5 transition-colors shadow-sm cursor-pointer"
              >
                <FileText size={14} className="stroke-[2.5]" />
                <span>{t({ en: 'CONSULAR SERVICES', fr: 'SERVICES CONSULAIRES' })}</span>
              </a>

              <a
                href="#ambassador"
                className="inline-flex items-center justify-center gap-2 border border-[#F8F7F3]/30 hover:border-[#C89A3D] text-[#F8F7F3] hover:text-[#C89A3D] text-xs font-condensed font-semibold tracking-widest uppercase px-6 py-3.5 transition-colors cursor-pointer"
              >
                <span>{t({ en: 'ABOUT THE EMBASSY', fr: 'À PROPOS DE L’AMBASSADE' })}</span>
                <ChevronRight size={14} />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: Neutral High-Level Diplomatic Composition (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative group mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative hairline */}
              <div className="absolute -inset-2 border border-[#C89A3D]/25 pointer-events-none translate-x-1 translate-y-1" />

              {/* Main Image Frame - Neutral High-Level Diplomatic Setting */}
              <div className="relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-[#051322] shadow-2xl">
                {/* Neutral diplomatic conference chamber / bilateral summit environment without unrelated politicians */}
                <img
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80"
                  alt="High-level diplomatic bilateral conference chamber and chancery setting"
                  className="w-full h-full object-cover object-center filter brightness-90 contrast-105 transition-transform duration-700 group-hover:scale-102"
                />

                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071A2F] via-[#071A2F]/25 to-transparent" />

                {/* Subtle Diplomatic Ribbon Diagonal Accent across corner */}
                <div className="absolute top-0 right-0 w-32 h-32 pointer-events-none overflow-hidden">
                  <div className="absolute top-4 -right-12 w-44 h-1.5 bg-gradient-to-r from-[#1478C8] via-[#C89A3D] to-[#9E2F3A] rotate-45 opacity-80" />
                </div>

                {/* Bilateral flags badge subtly integrated in top left */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-[#071A2F]/90 backdrop-blur-xs px-3 py-1.5 border border-[#C89A3D]/40 shadow-md">
                  <div className="flex items-center -space-x-1">
                    <DrcFlag size={16} />
                    <NamibiaFlag size={16} />
                  </div>
                  <span className="font-condensed text-[10px] tracking-wider uppercase text-[#C89A3D] font-bold">
                    DRC × NAMIBIA
                  </span>
                </div>

                {/* Bottom Caption: Only CHANCERY · WINDHOEK */}
                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 flex items-center justify-between border-t border-[#F8F7F3]/10 bg-[#071A2F]/80 backdrop-blur-xs">
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C89A3D]" />
                    <span className="font-condensed text-xs sm:text-sm tracking-[0.25em] uppercase text-[#F8F7F3] font-medium">
                      CHANCERY · WINDHOEK
                    </span>
                  </div>
                  <span className="text-[10px] font-condensed tracking-widest text-[#C89A3D] uppercase">
                    OFFICIAL MISSION
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
