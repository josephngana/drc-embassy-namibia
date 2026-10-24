import { AccessibleModal } from './AccessibleModal';
import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  Calendar,
  CheckCircle2,
  FileText,
  MapPin,
  Search,
  Shield,
  Download,
  AlertTriangle,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import {
  ConsularService,
  Diplomat,
  NewsArticle,
  EMBASSY_INFO,
  OFFICIAL_NOTICE,
} from '../data/embassyData';
import { DrcEmblem, DrcFlag } from './Emblem';

// ==========================================
// 1. APPOINTMENT BOOKING MODAL
// ==========================================
export const AppointmentModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
}> = ({ isOpen, onClose, preselectedServiceId }) => {
  const { t } = useLanguage();
  if (!isOpen) return null;
  return (
    <AccessibleModal onClose={onClose}>
      <section  className="relative max-w-lg w-full bg-white text-[#173B56] p-8 sm:p-10 shadow-2xl border-t-4 border-[#C89A3D]" onClick={e => e.stopPropagation()}>
        <button type="button" onClick={onClose} aria-label={t({en:'Close',fr:'Fermer'})} autoFocus className="absolute top-4 right-4 p-2 hover:bg-sky-50"><X size={20}/></button>
        <Calendar className="text-[#176FA6] mb-5" size={28}/>
        <h2 id="appointment-title" className="font-serif text-3xl mb-4">{t({en:'Plan your consular visit',fr:'Préparer votre visite consulaire'})}</h2>
        <p className="leading-relaxed text-slate-600">{t({en:'Online booking is not available yet. Please contact the embassy to arrange your appointment and confirm the required documents before visiting.',fr:'La prise de rendez-vous en ligne n’est pas encore disponible. Veuillez contacter l’ambassade pour organiser votre rendez-vous et confirmer les pièces à fournir avant votre visite.'})}</p>
        <a href="#contact" onClick={onClose} className="mt-7 inline-flex bg-[#176FA6] text-white px-6 py-3 font-semibold hover:bg-[#125D8D]">{t({en:'Contact the embassy',fr:'Contacter l’ambassade'})} →</a>
      </section>
    </AccessibleModal>
  );
};

// ==========================================
// 2. SERVICE DETAIL MODAL
// ==========================================
export const ServiceDetailModal: React.FC<{
  service: ConsularService | null;
  onClose: () => void;
  onBookAppointment: (serviceId: string) => void;
}> = ({ service, onClose, onBookAppointment }) => {
  const { t } = useLanguage();
  if (!service) return null;

  return (
    <AccessibleModal onClose={onClose}>
      <div className="bg-[#176FA6] border border-[#D6A84B] rounded-xs max-w-2xl w-full p-6 sm:p-8 text-white relative shadow-2xl my-8 space-y-6">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-sky-100 hover:text-white bg-slate-800/60 rounded-xs cursor-pointer"
        >
          <X size={20} />
        </button>

        <div className="space-y-1 pb-4 border-b border-slate-700">
          <div className="flex items-center gap-2">
            <Shield size={16} className="text-[#D6A84B]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D6A84B]">
              {t({ en: 'Official Consular Specification', fr: 'Spécification Consulaire' })}
            </span>
          </div>
          <h3 className="text-2xl font-serif font-bold text-white">
            {t(service.title)}
          </h3>
          <p className="text-xs text-[#D6A84B]">
            {t(service.subtitle)}
          </p>
        </div>

        <p className="text-xs sm:text-sm text-sky-50 leading-relaxed font-light">
          {t(service.description)}
        </p>

        {/* Required Documents Checklist */}
        <div className="space-y-2.5 bg-[#125D8D] p-5 rounded-xs border border-slate-700">
          <h4 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
            <FileText size={14} className="text-[#007FFF]" />
            <span>{t({ en: 'Mandatory Requirements Checklist', fr: 'Pièces Justificatives Obligatoires' })}</span>
          </h4>
          <ul className="space-y-2 text-xs text-sky-50">
            {t(service.requirements).map((req, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-[#D6A84B] font-bold">✓</span>
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Processing & Fee Notice */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="p-3 bg-[#0B2548] rounded-xs border border-slate-700 space-y-1">
            <span className="text-sky-100 text-[10px] uppercase tracking-wider block">
              {t({ en: 'Turnaround Time', fr: 'Délais de Traitement' })}
            </span>
            <span className="text-white font-medium block">
              {t(service.processingTime)}
            </span>
          </div>

          <div className="p-3 bg-[#0B2548] rounded-xs border border-slate-700 space-y-1">
            <span className="text-sky-100 text-[10px] uppercase tracking-wider block">
              {t({ en: 'Chancery Fee', fr: 'Droits de Chancellerie' })}
            </span>
            <span className="text-[#D6A84B] font-medium block">
              {t(service.officialFeeNote)}
            </span>
          </div>
        </div>

        {/* Action row */}
        <div className="pt-3 border-t border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
          {service.formName ? (
            <button
              type="button"
              disabled aria-disabled="true"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1478C8] hover:text-[#C89A3D] cursor-pointer transition-colors"
            >
              <Download size={14} />
              <span>{t({en:'Approved form pending',fr:'Formulaire en attente de validation'})}</span>
            </button>
          ) : <div />}

          <button
            type="button"
            onClick={() => {
              onClose();
              onBookAppointment(service.id);
            }}
            className="w-full sm:w-auto px-5 py-2.5 bg-[#D6A84B] hover:bg-[#c59937] text-[#071B33] text-xs font-bold uppercase tracking-wider rounded-xs cursor-pointer shadow-sm"
          >
            {t({ en: 'Book Appointment for this Service', fr: 'Prendre Rendez-vous' })}
          </button>
        </div>
      </div>
    </AccessibleModal>
  );
};

// ==========================================
// 3. AMBASSADOR FULL MESSAGE MODAL
// ==========================================
export const AmbassadorModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const { ambassador } = EMBASSY_INFO;

  if (!isOpen) return null;

  return (
    <AccessibleModal onClose={onClose}>
      <div className="bg-[#FBF9F5] border-2 border-[#D6A84B] rounded-xs max-w-3xl w-full p-8 sm:p-12 text-[#101828] relative shadow-2xl my-8 space-y-6">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-slate-500 hover:text-black bg-slate-200/60 rounded-xs cursor-pointer"
        >
          <X size={20} />
        </button>

        {/* Diplomatic Letterhead */}
        <div className="text-center pb-6 border-b border-stone-300 space-y-3">
          <DrcEmblem size={64} variant="full" className="mx-auto" />
          <div className="space-y-0.5">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D6A84B] font-bold block">
              {t({ en: 'Official Diplomatic Mission', fr: 'Mission Diplomatique Officielle' })}
            </span>
            <h3 className="text-lg font-serif font-bold text-[#071B33]">
              {t({
                en: 'Embassy of the Democratic Republic of the Congo in Namibia',
                fr: 'Ambassade de la République Démocratique du Congo en Namibie',
              })}
            </h3>
            <p className="text-xs text-slate-500 font-serif italic">
              Windhoek · Chancery of the Head of Mission
            </p>
          </div>
        </div>

        {/* Message Title */}
        <div className="space-y-1">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-[#D6A84B]">
            {t({ en: 'Official Greeting', fr: 'Allocution Officielle' })}
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#071B33]">
            {t({
              en: 'Message from His Excellency Ambassador Christian Katoto',
              fr: 'Message de Son Excellence l’Ambassadeur Christian Katoto',
            })}
          </h2>
        </div>

        {/* Text Paragraphs */}
        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed font-normal">
          {t(ambassador.fullMessageParagraphs).map((para, i) => (
            <p key={i}>
              {para}
            </p>
          ))}
        </div>

        {/* Signature Box */}
        <div className="pt-6 border-t border-stone-300 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-xs text-stone-500 font-mono">
            Windhoek, 2026 · Official Chancery Records
          </div>

          <div className="text-right space-y-1">
            <div className="font-serif italic text-2xl text-[#071B33] font-bold">
              Christian Katoto
            </div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#D6A84B]">
              {t(ambassador.title)}
            </p>
          </div>
        </div>
      </div>
    </AccessibleModal>
  );
};

// ==========================================
// 4. OFFICIAL NOTICE MODAL
// ==========================================
export const NoticeModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  if (!isOpen) return null;

  return (
    <AccessibleModal onClose={onClose}>
      <div className="bg-[#176FA6] border border-[#D6A84B] rounded-xs max-w-xl w-full p-6 sm:p-8 text-white relative shadow-2xl space-y-5">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-sky-100 hover:text-white bg-slate-800/60 rounded-xs cursor-pointer"
        >
          <X size={20} />
        </button>

        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-xs bg-[#D6A84B]/20 text-[#D6A84B] text-xs font-bold uppercase tracking-wider border border-[#D6A84B]/40">
            {t({ en: 'OFFICIAL NOTICE', fr: 'COMMUNIQUÉ OFFICIEL' })}
          </span>
          <span className="text-xs text-sky-100 font-mono">{OFFICIAL_NOTICE.refCode}</span>
        </div>

        <h3 className="text-xl font-serif font-bold text-white">
          {t(OFFICIAL_NOTICE.headline)}
        </h3>

        <div className="bg-[#125D8D] border border-slate-700 p-5 rounded-xs text-xs sm:text-sm text-sky-50 leading-relaxed space-y-3 font-light">
          <p>{t(OFFICIAL_NOTICE.fullNotice)}</p>
          <p className="text-[#D6A84B]">
            {t({
              en: 'For urgent inquiries, contact the consular secretariat at +264 61 256 287.',
              fr: 'Pour toute urgence, contacter la chancellerie au +264 61 256 287.',
            })}
          </p>
        </div>

        <div className="flex justify-end pt-2">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 bg-[#D6A84B] hover:bg-[#c59937] text-[#071B33] text-xs font-bold uppercase tracking-wider rounded-xs cursor-pointer"
          >
            {t({ en: 'Understood', fr: 'Compris' })}
          </button>
        </div>
      </div>
    </AccessibleModal>
  );
};

// ==========================================
// 5. EMERGENCY ASSISTANCE MODAL
// ==========================================
export const EmergencyModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  if (!isOpen) return null;

  return (
    <AccessibleModal onClose={onClose}>
      <div className="bg-[#176FA6] border-2 border-red-500/80 rounded-xs max-w-xl w-full p-6 sm:p-8 text-white relative shadow-2xl space-y-6">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-sky-100 hover:text-white bg-slate-800/60 rounded-xs cursor-pointer"
        >
          <X size={20} />
        </button>

        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center">
            <AlertTriangle size={24} />
          </div>
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-red-400 block">
              {t({ en: '24/7 Consular Protection Protocol', fr: 'Permanence Consulaire 24h/7' })}
            </span>
            <h3 className="text-xl font-serif font-bold text-white">
              {t({ en: 'Emergency Citizen Assistance', fr: 'Assistance Consulaire d’Urgence' })}
            </h3>
          </div>
        </div>

        <div className="bg-[#125D8D] border border-red-500/30 p-5 rounded-xs space-y-3">
          <span className="text-xs uppercase tracking-wider text-sky-100 block">
            {t({ en: 'Emergency Duty Officer Hotline', fr: 'Standard d’Urgence' })}
          </span>
          <div className="text-2xl font-mono font-bold text-[#D6A84B]">
            {EMBASSY_INFO.phone}
          </div>
          <p className="text-xs text-sky-50 leading-relaxed font-light">
            {t(EMBASSY_INFO.emergencyNote)}
          </p>
        </div>

        <div className="space-y-2 text-xs text-sky-50">
          <span className="font-bold text-white block">
            {t({ en: 'Applicable Emergency Situations:', fr: 'Situations d’Urgence Prises en Charge :' })}
          </span>
          <ul className="space-y-1.5 list-disc list-inside text-sky-50">
            <li>{t({ en: 'Acute medical distress or urgent hospitalization of a citizen', fr: 'Détresse médicale aiguë ou hospitalisation grave d’un compatriote' })}</li>
            <li>{t({ en: 'Detention, police arrest or deprivation of liberty in Namibia', fr: 'Arrestation ou garde à vue sur le territoire namibien' })}</li>
            <li>{t({ en: 'Emergency repatriation coordination', fr: 'Coordination de rapatriement d’urgence' })}</li>
            <li>{t({ en: 'Immediate loss of travel documents with flight scheduled within 24 hours', fr: 'Perte de documents de voyage avec vol sous 24 heures' })}</li>
          </ul>
        </div>

        <div className="pt-2 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider rounded-xs cursor-pointer"
          >
            {t({ en: 'Close Emergency Notice', fr: 'Fermer l’Avis' })}
          </button>
        </div>
      </div>
    </AccessibleModal>
  );
};

// ==========================================
// 6. DOWNLOAD FORMS MODAL
// ==========================================
export const FormsModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  if (!isOpen) return null;

  const formsList = [
    {
      id: 'f1',
      title: { en: 'Official DRC Visa Application Form', fr: 'Formulaire Officiel de Demande de Visa RDC' },
      size: '240 KB',
      code: 'FORM-VISA-RDC-01',
    },
    {
      id: 'f2',
      title: { en: 'Consular Registration Application Form', fr: 'Fiche d’Immatriculation Consulaire' },
      size: '180 KB',
      code: 'FORM-IMM-RDC-02',
    },
    {
      id: 'f3',
      title: { en: 'Biometric Passport Enrollment Checklist & Slip', fr: 'Bordereau d’Enrôlement Passeport Biométrique' },
      size: '310 KB',
      code: 'FORM-PASS-RDC-03',
    },
    {
      id: 'f4',
      title: { en: 'Legalization & Certification Submission Document', fr: 'Bordereau de Dépôt d’Actes à Légaliser' },
      size: '150 KB',
      code: 'FORM-LEG-RDC-04',
    },
    {
      id: 'f5',
      title: { en: 'Power of Attorney (Procuration) Standard Template', fr: 'Modèle Type de Procuration Spéciale' },
      size: '120 KB',
      code: 'FORM-PROC-RDC-05',
    },
  ];

  return (
    <AccessibleModal onClose={onClose}>
      <div className="bg-[#176FA6] border border-[#D6A84B] rounded-xs max-w-xl w-full p-6 sm:p-8 text-white relative shadow-2xl space-y-6">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-sky-100 hover:text-white bg-slate-800/60 rounded-xs cursor-pointer"
        >
          <X size={20} />
        </button>

        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Download size={16} className="text-[#D6A84B]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D6A84B]">
              {t({ en: 'Document Repository', fr: 'Formulaires Consulaires' })}
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
            {t({ en: 'Download Official Consular Forms', fr: 'Télécharger les Formulaires' })}
          </h3>
          <p className="text-xs text-sky-50">
            {t({
              en: 'Presentation preview: approved PDF forms will be added after embassy validation.',
              fr: 'Version de présentation : les formulaires PDF approuvés seront ajoutés après validation de l’ambassade.',
            })}
          </p>
        </div>

        <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
          {formsList.map((form) => (
            <div
              key={form.id}
              className="bg-[#0B2548] border border-slate-700 p-4 rounded-xs flex items-center justify-between gap-4"
            >
              <div className="space-y-0.5">
                <span className="text-[10px] font-mono text-[#D6A84B] block">
                  {form.code} · {t({en:'Pending approval',fr:'En attente de validation'})}
                </span>
                <h4 className="text-xs font-semibold text-white">
                  {t(form.title)}
                </h4>
              </div>

              <button
                type="button"
                disabled aria-disabled="true"
                className="px-3 py-1.5 bg-[#C89A3D] hover:bg-[#b88c32] text-[#071A2F] text-xs font-condensed font-bold uppercase rounded-none cursor-pointer shrink-0 flex items-center gap-1 transition-colors"
              >
                <Download size={13} />
                <span>{t({en:'Pending',fr:'À venir'})}</span>
              </button>
            </div>
          ))}
        </div>

        <div className="pt-2 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 bg-slate-700 hover:bg-slate-600 text-white text-xs font-bold uppercase tracking-wider rounded-xs cursor-pointer"
          >
            {t({ en: 'Close', fr: 'Fermer' })}
          </button>
        </div>
      </div>
    </AccessibleModal>
  );
};

// ==========================================
// 7. DIPLOMAT PROFILE MODAL
// ==========================================
export const DiplomatModal: React.FC<{
  diplomat: Diplomat | null;
  onClose: () => void;
}> = ({ diplomat, onClose }) => {
  const { t } = useLanguage();
  if (!diplomat) return null;

  return (
    <AccessibleModal onClose={onClose}>
      <div className="bg-[#176FA6] border border-[#D6A84B] rounded-xs max-w-xl w-full p-6 sm:p-8 text-white relative shadow-2xl space-y-6">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-sky-100 hover:text-white bg-slate-800/60 rounded-xs cursor-pointer"
        >
          <X size={20} />
        </button>

        <div className="flex items-center gap-4 border-b border-slate-700 pb-5">
          <div className="w-16 h-16 rounded-full border-2 border-[#D6A84B] bg-[#0B2548] flex items-center justify-center text-[#D6A84B] font-serif text-xl font-bold shrink-0">
            {diplomat.name.replace(/^(MR\.|MRS\.)\s*/, '').split(' ').map((n) => n[0]).join('')}
          </div>
          <div className="space-y-1">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D6A84B] block">
              {t(diplomat.department)}
            </span>
            <h3 className="text-xl font-serif font-bold text-white">
              {diplomat.name}
            </h3>
            <p className="text-xs text-[#007FFF] font-medium">
              {t(diplomat.position)}
            </p>
          </div>
        </div>

        <p className="text-sm text-sky-50 leading-relaxed font-light">
          {t(diplomat.bio)}
        </p>

        <div className="space-y-2 bg-[#125D8D] p-4 rounded-xs border border-slate-700 text-xs">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#D6A84B] block">
            {t({ en: 'Official Responsibilities', fr: 'Attributions Officielles' })}
          </span>
          <ul className="space-y-1.5 text-sky-50">
            {t(diplomat.responsibilities).map((resp, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-[#D6A84B] font-bold">✓</span>
                <span>{resp}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-2 flex justify-between items-center text-xs text-slate-500 font-mono">
          <span>Windhoek Chancery</span>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 bg-[#D6A84B] hover:bg-[#c59937] text-[#071B33] text-xs font-bold uppercase tracking-wider rounded-xs cursor-pointer"
          >
            {t({ en: 'Close Profile', fr: 'Fermer' })}
          </button>
        </div>
      </div>
    </AccessibleModal>
  );
};

// ==========================================
// 8. ARTICLE READER MODAL
// ==========================================
export const ArticleModal: React.FC<{
  article: NewsArticle | null;
  onClose: () => void;
}> = ({ article, onClose }) => {
  const { t } = useLanguage();
  if (!article) return null;

  return (
    <AccessibleModal onClose={onClose}>
      <div className="bg-[#FBF9F5] border-2 border-[#071B33] rounded-xs max-w-3xl w-full p-8 sm:p-12 text-[#101828] relative shadow-2xl my-8 space-y-6">
        <button
          type="button"
          onClick={onClose}
          aria-label={t({en: 'Close sample story', fr: 'Fermer l’article exemple'})}
          className="absolute top-6 right-6 p-2 text-slate-500 hover:text-black bg-slate-200/60 rounded-xs cursor-pointer"
        >
          <X size={20} />
        </button>

        <p className="text-sm leading-relaxed bg-sky-50 border border-sky-200 text-[#173B56] p-4">{t({en:'Sample story — demonstration content, not a verified embassy announcement.',fr:'Article exemple — contenu de démonstration, et non un communiqué vérifié de l’ambassade.'})}</p>
        {/* Dispatch Header */}
        <div className="space-y-3 pb-6 border-b border-stone-300">
          <div className="flex flex-wrap items-center gap-3">
            <DrcFlag size={18} />
            <span className="text-xs font-bold uppercase tracking-widest text-[#007FFF]">
              {t(article.category)}
            </span>
            <span className="text-stone-400">·</span>
            <span className="text-xs text-stone-500 font-mono">{t(article.date)}</span>
            <span className="text-stone-400">·</span>
            <span className="text-xs text-stone-500">{t(article.location)}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#071B33] leading-snug">
            {t(article.headline)}
          </h2>

          <p className="text-stone-600 text-sm font-medium italic">
            {t(article.excerpt)}
          </p>
        </div>

        {/* Dispatch Body */}
        <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
          {t(article.content).map((paragraph, i) => (
            <p key={i}>
              {paragraph}
            </p>
          ))}
        </div>

        {/* Footer */}
        <div className="pt-6 border-t border-stone-300 flex items-center justify-between text-xs text-stone-500">
          <span className="font-serif italic">
            {t({
              en: 'Demonstration content for the embassy website',
              fr: 'Contenu de démonstration pour le site de l’ambassade',
            })}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-[#176FA6] hover:bg-[#007FFF] text-white font-bold uppercase tracking-wider rounded-xs cursor-pointer"
          >
            {t({ en: 'Close Dispatch', fr: 'Fermer la Dépêche' })}
          </button>
        </div>
      </div>
    </AccessibleModal>
  );
};

// ==========================================
// 9. GALLERY MODAL (Integrated Photo View)
// ==========================================
export const GalleryModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  if (!isOpen) return null;

  const galleryItems = [
    {
      id: 'g1',
      title: {
        en: 'Bilateral Consultations at MIRCO Headquarters',
        fr: 'Consultations Bilatérales au Siège du MIRCO',
      },
      location: 'Windhoek',
      date: '2026',
      desc: {
        en: 'Ambassador Christian Katoto and senior diplomatic staff during official bilateral working sessions on trade corridors and regional diplomacy.',
        fr: 'L’Ambassadeur Christian Katoto et les hauts diplomates lors des sessions de travail bilatérales sur les corridors et la diplomatie régionale.',
      },
    },
    {
      id: 'g2',
      title: {
        en: 'Commemoration of 66th Independence Day of the DRC',
        fr: 'Célébration du 66ème Anniversaire de l’Indépendance de la RDC',
      },
      location: 'Official Residence, Windhoek',
      date: 'June 30, 2026',
      desc: {
        en: 'Diplomatic reception hosted by the Ambassador attended by Namibian cabinet ministers and members of the Diplomatic Corps.',
        fr: 'Réception diplomatique offerte par l’Ambassadeur en présence des ministres namibiens et du corps diplomatique.',
      },
    },
    {
      id: 'g3',
      title: {
        en: 'Mobile Consular Engagement with Diaspora in Walvis Bay',
        fr: 'Mission Consulaire Foraine auprès de la Communauté à Walvis Bay',
      },
      location: 'Civic Centre, Erongo',
      date: '2026',
      desc: {
        en: 'Chancery consular officers processing biometric passport pre-enrollment and issuing consular census cards to citizens.',
        fr: 'L’équipe consulaire procédant au pré-enrôlement biométrique et délivrant les cartes consulaires.',
      },
    },
  ];

  return (
    <AccessibleModal onClose={onClose}>
      <div className="bg-[#176FA6] border border-[#D6A84B] rounded-xs max-w-3xl w-full p-6 sm:p-8 text-white relative shadow-2xl my-8 space-y-6">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-sky-100 hover:text-white bg-slate-800/60 rounded-xs cursor-pointer"
        >
          <X size={20} />
        </button>

        <div className="space-y-1">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-[#D6A84B]">
            {t({ en: 'Photographic Archive', fr: 'Archives Photographiques' })}
          </span>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
            {t({ en: 'Diplomacy in Action — Photo Gallery', fr: 'La Diplomatie en Action — Galerie Photos' })}
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#0B2548] border border-slate-700 rounded-xs p-4 space-y-3 flex flex-col justify-between"
            >
              <div className="aspect-[16/10] bg-gradient-to-tr from-[#051325] to-[#0A203E] rounded-xs border border-slate-700/80 p-3 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <DrcFlag size={14} />
                  <span className="text-[10px] text-sky-100 font-mono">{item.date}</span>
                </div>
                <div>
                  <span className="text-[9px] font-semibold uppercase tracking-wider text-[#D6A84B]">
                    {item.location}
                  </span>
                  <h4 className="text-xs font-serif font-bold text-white line-clamp-2">
                    {t(item.title)}
                  </h4>
                </div>
              </div>

              <p className="text-[11px] text-sky-50 font-light leading-relaxed line-clamp-3">
                {t(item.desc)}
              </p>
            </div>
          ))}
        </div>

        <div className="pt-2 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 bg-[#D6A84B] hover:bg-[#c59937] text-[#071B33] text-xs font-bold uppercase tracking-wider rounded-xs cursor-pointer"
          >
            {t({ en: 'Close Gallery', fr: 'Fermer' })}
          </button>
        </div>
      </div>
    </AccessibleModal>
  );
};
