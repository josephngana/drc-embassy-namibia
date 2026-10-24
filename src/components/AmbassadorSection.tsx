import React, { useState } from 'react';
import { ArrowRight, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { EMBASSY_INFO } from '../data/embassyData';
import { DrcEmblem, DrcFlag, NamibiaFlag } from './Emblem';

interface AmbassadorSectionProps {
  onOpenAmbassadorModal: () => void;
}

export const AmbassadorSection: React.FC<AmbassadorSectionProps> = ({
  onOpenAmbassadorModal,
}) => {
  const { lang, t } = useLanguage();
  const { ambassador } = EMBASSY_INFO;
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="ambassador"
      aria-label="The Ambassador's message"
      className="py-16 sm:py-20 lg:py-24 bg-[#F8F7F3] border-b border-slate-200/70"
    >
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[220px_minmax(0,1fr)] gap-8 md:gap-10 lg:gap-16 items-start">
          {/* LEFT: 40% Authentic Diplomatic Portrait Plate (5 cols) */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-full max-w-[182px] group">
              {/* Subtle gold offset rule frame */}
              <div className="absolute -inset-2.5 border border-[#C89A3D]/30 -z-10 translate-x-1 translate-y-1 pointer-events-none" />

              <div className="relative aspect-[182/273] overflow-hidden bg-[#176FA6] border border-[#C89A3D]/40 shadow-xl flex flex-col justify-between">
                {/* Official supplied portrait of Ambassador Christian Katoto */}
                {!imgError ? (
                  <img
                    src="/christian-katoto.png"
                    width={182}
                    height={273}
                    loading="lazy"
                    alt="H.E. Christian Katoto, Ambassador Extraordinary and Plenipotentiary of the Democratic Republic of the Congo to the Republic of Namibia"
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover object-top"
                  />
                ) : null}

                {/* Official Diplomatic State Portrait Plate Fallback (Used when image file is loading or unavailable, ensuring authentic dignity without random stock models) */}
                {imgError && (
                  <div className="relative h-full w-full p-7 sm:p-8 flex flex-col justify-between text-center select-none bg-gradient-to-b from-[#092240] via-[#071A2F] to-[#04101E]">
                    {/* Faint heraldic watermark */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                      <DrcEmblem size={240} variant="gold" />
                    </div>

                    {/* Top Protocol Ribbon */}
                    <div className="relative z-10 flex items-center justify-between border-b border-[#C89A3D]/30 pb-3">
                      <div className="flex items-center gap-1.5">
                        <DrcFlag size={16} />
                        <NamibiaFlag size={16} />
                      </div>
                      <span className="font-condensed text-[10px] tracking-[0.2em] uppercase text-[#C89A3D] font-bold">
                        {t({ en: 'STATE DIPLOMATIC PORTRAIT', fr: 'PORTRAIT OFFICIEL D’ÉTAT' })}
                      </span>
                    </div>

                    {/* Center Sovereign Seal and Title */}
                    <div className="relative z-10 space-y-4 my-auto py-4">
                      <div className="w-24 h-24 mx-auto rounded-full p-2 bg-[#125D8D] border-2 border-[#C89A3D] shadow-inner flex items-center justify-center">
                        <DrcEmblem size={64} variant="gold" />
                      </div>

                      <div className="space-y-1.5">
                        <span className="font-condensed text-[10px] tracking-[0.25em] uppercase text-slate-300 block">
                          {t({ en: 'HEAD OF DIPLOMATIC MISSION', fr: 'CHEF DE MISSION DIPLOMATIQUE' })}
                        </span>
                        <h3 className="font-serif text-2xl font-bold tracking-wider text-white uppercase">
                          {lang === 'fr' ? ambassador.nameFr : ambassador.name}
                        </h3>
                        <div className="w-12 h-[1px] bg-[#C89A3D] mx-auto my-2" />
                        <p className="font-condensed text-xs text-[#C89A3D] font-semibold tracking-wider uppercase max-w-[260px] mx-auto leading-relaxed">
                          {t({
                            en: 'Ambassador Extraordinary & Plenipotentiary to Namibia',
                            fr: 'Ambassadeur Extraordinaire & Plénipotentiaire en Namibie',
                          })}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Accreditation Caption */}
                    <div className="relative z-10 border-t border-[#C89A3D]/30 pt-3 flex items-center justify-between text-[10px] font-condensed tracking-wider text-slate-400">
                      <span>CHANCERY ARCHIVE</span>
                      <span className="text-[#C89A3D]">WINDHOEK</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Dignified Caption Below Image */}
              <div className="pt-3 flex flex-col items-start gap-1 text-xs font-condensed tracking-wider">
                <span className="text-[#071A2F] font-bold uppercase">
                  {lang === 'fr' ? ambassador.nameFr : ambassador.name}
                </span>
                <span className="text-[#C89A3D] uppercase">
                  CHANCERY · WINDHOEK
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: 60% Content (7 cols in 12-col grid = ~58%) */}
          <div className="min-w-0 space-y-6">
            <div className="space-y-2">
              <span className="font-condensed text-xs font-bold tracking-[0.2em] uppercase text-[#C89A3D] block">
                {t({ en: 'THE AMBASSADOR', fr: 'L’AMBASSADEUR' })}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-serif font-medium text-[#071A2F] leading-tight">
                {t({ en: 'A Message from His Excellency', fr: 'Le Message de Son Excellence' })}
              </h2>
              <div className="pt-1">
                <p className="font-sans text-sm font-semibold text-[#071A2F]">
                  {lang === 'fr' ? ambassador.nameFr : ambassador.name}
                </p>
                <p className="font-sans text-xs text-[#536273] font-normal">
                  {t(ambassador.title)}
                </p>
              </div>
            </div>

            {/* Fine Gold Rule */}
            <div className="w-16 h-[2px] bg-[#C89A3D]" />

            {/* Pull Quote */}
            <blockquote className="font-serif italic text-lg sm:text-xl text-[#071A2F] leading-relaxed border-l-2 border-[#C89A3D] pl-5 py-0.5">
              “{t({
                en: 'Welcome to the official digital platform of the Embassy of the Democratic Republic of the Congo in Namibia.',
                fr: 'Bienvenue sur la plateforme numérique officielle de l’Ambassade de la République Démocratique du Congo en Namibie.',
              })}”
            </blockquote>

            {/* 2 Short Paragraphs: polished readable 16px desktop body copy */}
            <div className="space-y-4 font-sans text-[15px] sm:text-base text-[#536273] leading-[1.75]">
              <p>
                {t({
                  en: 'The Democratic Republic of the Congo and the Republic of Namibia share deep and enduring bonds of brotherhood, solidarity, and common dedication to regional peace, sovereignty, and sustainable development within the Southern African Development Community (SADC).',
                  fr: 'La République Démocratique du Congo et la République de Namibie partagent des liens profonds et durables de fraternité, de solidarité et un attachement commun à la paix, à la souveraineté et au développement durable au sein de la Communauté de Développement d’Afrique Australe (SADC).',
                })}
              </p>
              <p>
                {t({
                  en: 'Our mission is firmly committed to elevating our bilateral partnership, expanding mutually beneficial trade and investment, and providing our Congolese compatriots with diligent, respectful, and dignified consular service.',
                  fr: 'Notre mission est résolument engagée à approfondir notre partenariat bilatéral, à développer des échanges économiques mutuellement avantageux et à offrir à nos compatriotes congolais un service consulaire diligent, transparent et respectueux.',
                })}
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenAmbassadorModal}
                className="group inline-flex items-center gap-2 text-xs font-condensed font-bold tracking-widest uppercase text-[#071A2F] hover:text-[#C89A3D] transition-colors cursor-pointer"
              >
                <span>{t({ en: 'READ THE FULL MESSAGE →', fr: 'LIRE LE MESSAGE INTÉGRAL →' })}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
