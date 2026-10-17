import React from 'react';
import {
  Stamp,
  BookUser,
  BadgeCheck,
  FileCheck,
  Users,
  ShieldAlert,
  Calendar,
  Download,
  Mail,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PRIMARY_CONSULAR_SERVICES, ConsularService } from '../data/embassyData';

interface ConsularServicesProps {
  onSelectService: (service: ConsularService) => void;
  onOpenAppointmentModal: () => void;
  onOpenFormsModal: () => void;
}

const iconMap: Record<string, React.ElementType> = {
  Stamp,
  BookUser,
  BadgeCheck,
  FileCheck,
  Users,
  ShieldAlert,
};

export const ConsularServices: React.FC<ConsularServicesProps> = ({
  onSelectService,
  onOpenAppointmentModal,
  onOpenFormsModal,
}) => {
  const { t } = useLanguage();

  return (
    <section
      id="services"
      aria-label="Consular Services"
      className="py-24 sm:py-28 lg:py-32 bg-[#F8F7F3] border-b border-slate-200/70"
    >
      {/* Slightly increased content width: max-w-[1380px] */}
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Editorial Heading */}
        <div className="space-y-3">
          <span className="font-condensed text-xs font-bold tracking-[0.2em] uppercase text-[#C89A3D] block">
            {t({ en: 'PUBLIC CHANCERY', fr: 'CHANCELLERIE PUBLIQUE' })}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-medium text-[#071A2F] tracking-tight">
            {t({ en: 'CONSULAR SERVICES', fr: 'SERVICES CONSULAIRES' })}
          </h2>
          <p className="font-sans text-[15px] sm:text-base text-[#536273] font-light max-w-2xl leading-relaxed">
            {t({
              en: 'Essential services for Congolese citizens, visitors and partners.',
              fr: 'Services essentiels pour les citoyens congolais, visiteurs et partenaires.',
            })}
          </p>
        </div>

        {/* 3 × 2 Grid: 6 Quiet Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-9">
          {PRIMARY_CONSULAR_SERVICES.map((service) => {
            const Icon = iconMap[service.iconName] || FileCheck;

            return (
              <div
                key={service.id}
                className="bg-white border border-slate-200/90 hover:border-[#C89A3D]/70 p-7 sm:p-9 flex flex-col justify-between group transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="text-[#1478C8] group-hover:text-[#C89A3D] transition-colors">
                    <Icon size={24} className="stroke-[1.8]" />
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#071A2F]">
                    {t(service.title)}
                  </h3>

                  <p className="font-sans text-[15px] sm:text-base text-[#536273] font-light leading-relaxed">
                    {t(service.description)}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => onSelectService(service)}
                    className="group/btn inline-flex items-center gap-1.5 text-xs font-condensed font-bold tracking-wider uppercase text-[#071A2F] group-hover:text-[#1478C8] transition-colors cursor-pointer"
                  >
                    <span>{t({ en: 'Learn more →', fr: 'En savoir plus →' })}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* ONE Horizontal Action Bar */}
        <div className="bg-[#071A2F] text-[#F8F7F3] p-7 sm:p-9 flex flex-col md:flex-row items-center justify-between gap-6 border border-[#C89A3D]/30">
          <div className="text-center md:text-left space-y-1">
            <span className="font-condensed text-[10px] font-bold tracking-widest uppercase text-[#C89A3D]">
              {t({ en: 'CONSULAR ASSISTANCE', fr: 'ASSISTANCE CONSULAIRE' })}
            </span>
            <p className="font-serif text-xl sm:text-2xl text-white">
              {t({
                en: 'Direct access to official embassy procedures',
                fr: 'Accès direct aux démarches officielles de la chancellerie',
              })}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3.5 shrink-0">
            <button
              type="button"
              onClick={onOpenAppointmentModal}
              className="inline-flex items-center gap-2 bg-[#C89A3D] hover:bg-[#b88c32] active:bg-[#a67d2a] text-[#071A2F] text-xs font-condensed font-bold uppercase tracking-widest px-6 py-3.5 transition-colors cursor-pointer shadow-xs whitespace-nowrap"
            >
              <Calendar size={14} className="stroke-[2.5]" />
              <span>{t({ en: 'Book an Appointment', fr: 'Prendre Rendez-vous' })}</span>
            </button>

            <button
              type="button"
              onClick={onOpenFormsModal}
              className="inline-flex items-center gap-2 border border-[#F8F7F3]/30 hover:border-white text-[#F8F7F3] text-xs font-condensed font-semibold uppercase tracking-widest px-5 py-3.5 transition-colors cursor-pointer whitespace-nowrap"
            >
              <Download size={14} className="text-[#1478C8]" />
              <span>{t({ en: 'Download Forms', fr: 'Télécharger Formulaires' })}</span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-[#F8F7F3]/30 hover:border-white text-[#F8F7F3] text-xs font-condensed font-semibold uppercase tracking-widest px-5 py-3.5 transition-colors cursor-pointer whitespace-nowrap"
            >
              <Mail size={14} className="text-[#C89A3D]" />
              <span>{t({ en: 'Contact Consular Services', fr: 'Contacter la Section' })}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
