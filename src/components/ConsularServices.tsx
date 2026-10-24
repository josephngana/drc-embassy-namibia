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
      className="py-16 sm:py-20 lg:py-24 bg-[#F8F7F3] border-b border-slate-200/70"
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
        <div className="consular-assistance p-6 sm:p-8 space-y-6">
          <div className="min-w-0 space-y-2">
            <span className="font-condensed text-xs font-bold tracking-widest uppercase text-[#176FA6]">
              {t({ en: 'CONSULAR ASSISTANCE', fr: 'ASSISTANCE CONSULAIRE' })}
            </span>
            <p className="font-serif text-2xl sm:text-3xl text-[#173B56]">
              {t({
                en: 'Direct access to official embassy procedures',
                fr: 'Accès direct aux démarches officielles de la chancellerie',
              })}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <button
              type="button"
              onClick={onOpenAppointmentModal}
              className="consular-action consular-action-primary"
            >
              <Calendar size={14} className="stroke-[2.5]" />
              <span>{t({ en: 'Arrange an Appointment', fr: 'Organiser un rendez-vous' })}</span>
            </button>

            <button
              type="button"
              onClick={onOpenFormsModal}
              className="consular-action consular-action-secondary"
            >
              <Download size={14} className="shrink-0" />
              <span>{t({ en: 'Download Forms', fr: 'Télécharger Formulaires' })}</span>
            </button>

            <a
              href="#contact"
              className="consular-action consular-action-secondary"
            >
              <Mail size={14} className="shrink-0" />
              <span>{t({ en: 'Contact Consular Services', fr: 'Contacter la Section' })}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
