import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { DrcEmblem } from './Emblem';

interface DiplomatMember {
  id: string;
  name: string;
  title: {
    en: string;
    fr: string;
  };
  department: {
    en: string;
    fr: string;
  };
  initials: string;
  imagePath: string;
}

export const DiplomaticTeam: React.FC = () => {
  const { t } = useLanguage();
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const team: DiplomatMember[] = [
    {
      id: 'lievin-muyumba',
      name: 'MR. LIEVIN MUYUMBA',
      title: {
        en: 'Minister Counsellor',
        fr: 'Ministre Conseiller',
      },
      department: {
        en: 'Chancery & Political Affairs',
        fr: 'Chancellerie & Affaires Politiques',
      },
      initials: 'LM',
      imagePath: '/lievin-muyumba.png',
    },
    {
      id: 'kennedy-besako',
      name: 'MR. KENNEDY BESAKO',
      title: {
        en: 'First Counsellor',
        fr: 'Premier Conseiller',
      },
      department: {
        en: 'Economic Affairs & Trade Corridors',
        fr: 'Affaires Économiques & Corridors',
      },
      initials: 'KB',
      imagePath: '/kennedy-besako.png',
    },
    {
      id: 'elysee-nsombe',
      name: 'MRS. ELYSEE NSOMBE',
      title: {
        en: 'Second Counsellor',
        fr: 'Deuxième Conseiller',
      },
      department: {
        en: 'Consular Section & Diaspora Relations',
        fr: 'Section Consulaire & Diaspora',
      },
      initials: 'EN',
      imagePath: '/elysee-nsombe.png',
    },
    {
      id: 'guy-felix-munumwey',
      name: 'MR. GUY FELIX MUNUMWEY',
      title: {
        en: 'First Secretary',
        fr: 'Premier Secrétaire',
      },
      department: {
        en: 'Cultural, Academic & Protocol Affairs',
        fr: 'Affaires Culturelles & Protocole',
      },
      initials: 'GM',
      imagePath: '/guy-felix-munumwey.png',
    },
  ];

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section
      id="team"
      aria-label="Diplomatic Team"
      className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/70"
    >
      {/* Slightly increased content width: max-w-[1380px] */}
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Editorial Section Heading */}
        <div className="space-y-3">
          <span className="font-condensed text-xs font-bold tracking-[0.2em] uppercase text-[#C89A3D] block">
            {t({ en: 'CHANCERY LEADERSHIP', fr: 'CORPS DIPLOMATIQUE' })}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-medium text-[#071A2F] tracking-tight">
            {t({ en: 'DIPLOMATIC TEAM', fr: 'ÉQUIPE DIPLOMATIQUE' })}
          </h2>
          <p className="font-sans text-[15px] sm:text-base text-[#536273] font-light max-w-xl leading-relaxed">
            {t({
              en: 'Dedicated diplomatic officers advancing bilateral relations and serving the Congolese community in the Republic of Namibia.',
              fr: 'Membres du corps diplomatique au service des relations bilatérales et de la communauté congolaise en Namibie.',
            })}
          </p>
        </div>

        {/* 4 Portraits in one row on desktop: strictly no generic stock models, 4:5 ratio, neutral treatment */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-9">
          {team.map((member) => {
            const hasError = failedImages[member.id];

            return (
              <div key={member.id} className="group space-y-4">
                {/* 4:5 Ratio Portrait Frame */}
                <div className="relative aspect-[4/5] overflow-hidden bg-[#176FA6] border border-slate-200 group-hover:border-[#C89A3D]/70 transition-all duration-300 shadow-sm">
                  {/* Image render if provided asset exists */}
                  {!hasError && (
                    <img
                      src={member.imagePath}
                      alt={`${member.name} - ${t(member.title)}`}
                      onError={() => handleImageError(member.id)}
                      className="absolute inset-0 w-full h-full object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 transition-all duration-700"
                    />
                  )}

                  {/* Diplomatic Chancery Credential Plate (Ensures authentic dignity without random stock models) */}
                  {hasError && (
                    <div className="relative h-full w-full p-6 flex flex-col justify-between text-center bg-gradient-to-b from-[#092240] via-[#071A2F] to-[#04101E] select-none">
                      {/* Subtle watermark */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                        <DrcEmblem size={140} variant="monochrome" />
                      </div>

                      {/* Header ribbon */}
                      <div className="relative z-10 flex items-center justify-between border-b border-[#C89A3D]/25 pb-2 text-[9px] font-condensed tracking-widest text-slate-300 uppercase">
                        <span>MISSION DIPLOMATIQUE</span>
                        <span className="text-[#C89A3D]">RDC</span>
                      </div>

                      {/* Center Diplomatic Insignia */}
                      <div className="relative z-10 space-y-3 my-auto py-2">
                        <div className="w-16 h-16 mx-auto rounded-full bg-[#125D8D] border border-[#C89A3D] p-1 shadow-inner flex items-center justify-center">
                          <span className="font-serif text-xl font-bold tracking-wider text-[#C89A3D]">
                            {member.initials}
                          </span>
                        </div>

                        <div className="space-y-1">
                          <span className="font-serif text-sm font-semibold tracking-wide text-white uppercase block">
                            {member.name}
                          </span>
                          <span className="font-condensed text-[11px] text-[#C89A3D] font-medium uppercase tracking-wider block">
                            {t(member.title)}
                          </span>
                        </div>
                      </div>

                      {/* Department designation */}
                      <div className="relative z-10 border-t border-[#C89A3D]/25 pt-2 text-[10px] font-condensed text-slate-400">
                        <span>{t(member.department)}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Information beneath photograph: Name, Gold Rule, Official Title */}
                <div className="space-y-1.5 pt-1">
                  <h3 className="font-serif text-lg font-medium text-[#071A2F] tracking-wide">
                    {member.name}
                  </h3>

                  {/* Gold Rule above the title */}
                  <div className="w-8 h-[1.5px] bg-[#C89A3D]" />

                  <p className="font-condensed text-xs font-semibold uppercase tracking-wider text-[#536273]">
                    {t(member.title)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
