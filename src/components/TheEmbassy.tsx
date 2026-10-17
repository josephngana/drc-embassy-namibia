import React from 'react';
import { Landmark, FileText, TrendingUp, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const TheEmbassy: React.FC = () => {
  const { t } = useLanguage();

  const responsibilities = [
    {
      icon: Landmark,
      title: { en: 'Diplomatic Relations', fr: 'Relations Diplomatiques' },
      description: {
        en: 'Advancing high-level political dialogue, sovereign representation, and strategic coordination within SADC and the African Union.',
        fr: 'Conduire le dialogue politique de haut niveau, la représentation souveraine et la concertation stratégique au sein de la SADC et de l’Union Africaine.',
      },
    },
    {
      icon: FileText,
      title: { en: 'Consular Affairs', fr: 'Affaires Consulaires' },
      description: {
        en: 'Delivering prompt, transparent citizen documentation, civil registry maintenance, and entry visas for international travelers.',
        fr: 'Délivrer les actes civils, passeports et visas d’entrée en RDC avec rigueur, transparence et respect des usagers.',
      },
    },
    {
      icon: TrendingUp,
      title: { en: 'Economic Cooperation', fr: 'Coopération Économique' },
      description: {
        en: 'Fostering bilateral investment, critical mineral logistics, and trade corridor facilitation linking southern DRC to Walvis Bay.',
        fr: 'Développer les investissements bilatéraux, les filières minières stratégiques et les corridors logistiques reliés à Walvis Bay.',
      },
    },
    {
      icon: Users,
      title: { en: 'Community Engagement', fr: 'Engagement Communautaire' },
      description: {
        en: 'Supporting the Congolese diaspora throughout Namibia, academic exchanges for students, and national cultural heritage.',
        fr: 'Accompagner la diaspora congolaise en Namibie, encadrer la mobilité universitaire et valoriser le patrimoine culturel national.',
      },
    },
  ];

  return (
    <section
      id="the-embassy"
      aria-label="The Embassy institutional mandate"
      className="py-24 sm:py-28 lg:py-32 bg-white border-b border-slate-200/70"
    >
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT: Heading & Large Institutional Statement (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <span className="font-condensed text-xs font-bold tracking-[0.2em] uppercase text-[#C89A3D] block">
              {t({ en: 'INSTITUTION', fr: 'INSTITUTION' })}
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-medium text-[#071A2F] leading-tight">
              {t({ en: 'THE EMBASSY', fr: 'L’AMBASSADE' })}
            </h2>

            <p className="font-serif text-xl sm:text-2xl text-[#071A2F] leading-snug font-normal">
              {t({
                en: 'Representing the sovereign interests of the Democratic Republic of the Congo, fostering bilateral solidarity with Namibia, and providing dedicated service to our people.',
                fr: 'Représenter les intérêts souverains de la République Démocratique du Congo, fortifier la solidarité fraternelle avec la Namibie et servir dignement nos concitoyens.',
              })}
            </p>

            <p className="font-sans text-[15px] sm:text-base text-[#536273] font-light leading-[1.75] max-w-md">
              {t({
                en: 'Operating under the authority of the Ministry of Foreign Affairs, International Cooperation and Francophonie, the Embassy is the permanent diplomatic channel between Kinshasa and Windhoek.',
                fr: 'Sous l’autorité du Ministère des Affaires Étrangères, de la Coopération Internationale et de la Francophonie, l’Ambassade constitue le relais diplomatique permanent entre Kinshasa et Windhoek.',
              })}
            </p>
          </div>

          {/* RIGHT: 4 Compact Responsibilities listed vertically (7 cols) */}
          <div className="lg:col-span-7 divide-y divide-slate-200/80">
            {responsibilities.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`flex items-start gap-5 ${
                    index === 0 ? 'pb-6 sm:pb-7' : 'py-6 sm:py-7'
                  }`}
                >
                  <div className="mt-1 text-[#1478C8] shrink-0">
                    <Icon size={20} className="stroke-[1.8]" />
                  </div>

                  <div className="space-y-1.5 flex-1">
                    <h3 className="font-serif text-lg sm:text-xl font-medium text-[#071A2F]">
                      {t(item.title)}
                    </h3>
                    <p className="font-sans text-[15px] sm:text-base text-[#536273] font-light leading-relaxed">
                      {t(item.description)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
