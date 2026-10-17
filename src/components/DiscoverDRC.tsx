import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { DISCOVER_DRC_3_CARDS } from '../data/embassyData';

export const DiscoverDRC: React.FC = () => {
  const { t } = useLanguage();
  const [selectedTheme, setSelectedTheme] = useState<(typeof DISCOVER_DRC_3_CARDS)[0] | null>(null);

  // Unmistakably Congolese imagery: Virunga mountain gorillas, authentic cultural arts, and modern investment skyline
  const themeImages = [
    {
      id: 'culture-heritage',
      image:
        'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80',
      label: { en: 'CULTURE & HERITAGE', fr: 'CULTURE & PATRIMOINE' },
      subtitle: { en: 'Congolese Rumba & Sovereign Arts', fr: 'Rumba Congolaise & Arts Souverains' },
      summary: {
        en: 'UNESCO Intangible Cultural Heritage, iconic Congolese rumba melodies, and renowned contemporary Kinshasa plastic arts.',
        fr: 'Patrimoine culturel immatériel de l’UNESCO, rumba congolaise mythique et rayonnement international de l’école de Kinshasa.',
      },
    },
    {
      id: 'tourism-nature',
      image:
        'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&w=1200&q=80',
      label: { en: 'NATURE & TOURISM', fr: 'NATURE & TOURISME' },
      subtitle: { en: 'Virunga Sanctuaries & Congo Basin', fr: 'Sanctuaires des Virunga & Bassin du Congo' },
      summary: {
        en: 'Home to the mountain gorillas of Virunga, the second largest rainforest lung on Earth, and the majestic Congo River.',
        fr: 'Sanctuaire des gorilles de montagne des Virunga, deuxième poumon vert de la planète et majestueux fleuve Congo.',
      },
    },
    {
      id: 'business-investment',
      image:
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      label: { en: 'BUSINESS & INVESTMENT', fr: 'ÉCONOMIE & INVESTISSEMENT' },
      subtitle: { en: 'Strategic Minerals & Modern Logistics', fr: 'Minerais Stratégiques & Logistique Moderne' },
      summary: {
        en: 'World leader in cobalt and high-grade copper, monumental Inga hydropower potential, and Special Economic Zones facilitated by ANAPI.',
        fr: 'Leader mondial du cobalt et du cuivre, potentiel hydroélectrique colossal du Grand Inga et guichet unique d’investissement ANAPI.',
      },
    },
  ];

  return (
    <section
      id="discover"
      aria-label="Discover the Democratic Republic of the Congo"
      className="py-24 sm:py-28 lg:py-32 bg-[#071A2F] text-[#F8F7F3] border-b border-[#0D223E]"
    >
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Editorial Section Heading */}
        <div className="space-y-3">
          <span className="font-condensed text-xs font-bold tracking-[0.2em] uppercase text-[#C89A3D] block">
            {t({ en: 'SOVEREIGN PANORAMA', fr: 'PANORAMA SOUVERAIN' })}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#F8F7F3] tracking-tight leading-tight">
            <span className="block">{t({ en: 'DISCOVER', fr: 'DÉCOUVRIR' })}</span>
            <span className="block text-[#C89A3D]">
              {t({
                en: 'THE DEMOCRATIC REPUBLIC OF THE CONGO',
                fr: 'LA RÉPUBLIQUE DÉMOCRATIQUE DU CONGO',
              })}
            </span>
          </h2>
          <p className="font-sans text-[15px] sm:text-base text-slate-300 font-light max-w-2xl leading-[1.75]">
            {t({
              en: 'A continent-sized nation of cultural vitality, peerless biodiversity, and vital energy resources at the heart of Africa.',
              fr: 'Une nation aux dimensions continentales, caractérisée par une vitalité culturelle, une biodiversité unique et des ressources stratégiques au cœur de l’Afrique.',
            })}
          </p>
        </div>

        {/* 3 Large Editorial Image Tiles: Culture & Heritage, Nature & Tourism, Business & Investment */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {themeImages.map((theme, index) => {
            const matchedData =
              DISCOVER_DRC_3_CARDS.find((c) => c.id === theme.id) || DISCOVER_DRC_3_CARDS[0];

            return (
              <div
                key={theme.id}
                onClick={() => setSelectedTheme(matchedData)}
                className="group cursor-pointer space-y-4"
              >
                {/* Large Dominant Image Tile */}
                <div className="relative aspect-[3/4] overflow-hidden bg-[#051322] border border-[#C89A3D]/20 group-hover:border-[#C89A3D]/80 transition-all duration-500 shadow-xl">
                  <img
                    src={theme.image}
                    alt={t(theme.label)}
                    className="w-full h-full object-cover filter brightness-90 contrast-105 group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Gradient Overlay for Editorial Depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071A2F] via-[#071A2F]/30 to-transparent opacity-85 group-hover:opacity-75 transition-opacity" />

                  {/* Editorial Overlay Caption */}
                  <div className="absolute inset-0 p-6 sm:p-7 flex flex-col justify-between">
                    <span className="font-condensed text-[11px] font-bold text-[#C89A3D] tracking-widest uppercase">
                      0{index + 1}
                    </span>

                    <div className="space-y-1.5">
                      <span className="font-condensed text-xs font-semibold tracking-wider text-[#1478C8] uppercase block">
                        {t(theme.subtitle)}
                      </span>
                      <h3 className="font-serif text-2xl font-medium text-white group-hover:text-[#C89A3D] transition-colors leading-tight">
                        {t(theme.label)}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-slate-300 font-light leading-relaxed pt-1">
                        {t(theme.summary)}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Subtle Text Link */}
                <div className="pt-1">
                  <span className="inline-flex items-center gap-1.5 text-xs font-condensed font-bold tracking-widest uppercase text-[#C89A3D] group-hover:text-white transition-colors">
                    <span>{t({ en: 'Explore Theme →', fr: 'Consulter le volet →' })}</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Editorial Theme Briefing Dialog */}
      {selectedTheme && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#071A2F] border border-[#C89A3D]/50 max-w-2xl w-full p-6 sm:p-8 text-[#F8F7F3] relative shadow-2xl space-y-6 animate-drawer-panel">
            <button
              type="button"
              onClick={() => setSelectedTheme(null)}
              className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X size={20} />
            </button>

            <div className="space-y-1">
              <span className="font-condensed text-xs font-bold tracking-widest text-[#C89A3D] uppercase">
                {t(selectedTheme.subtitle)}
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-medium text-white">
                {t(selectedTheme.title)}
              </h3>
            </div>

            <p className="font-sans text-sm sm:text-base text-slate-300 leading-relaxed font-light">
              {t(selectedTheme.desc)}
            </p>

            <div className="p-4 bg-[#051322] border border-slate-700/80 text-xs font-condensed uppercase tracking-wider text-[#C89A3D] flex items-center justify-between">
              <span>{t({ en: 'Strategic Keynote', fr: 'Repère Stratégique' })}</span>
              <span className="font-bold text-white">{t(selectedTheme.keyPoint)}</span>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedTheme(null)}
                className="px-5 py-2.5 bg-[#C89A3D] text-[#071A2F] text-xs font-condensed font-bold uppercase tracking-widest cursor-pointer"
              >
                {t({ en: 'Close', fr: 'Fermer' })}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
