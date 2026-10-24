import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Printer,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Compass,
  Copy,
  Check,
  Building2,
  ShieldCheck,
  Car,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { DrcEmblem, DrcFlag, NamibiaFlag } from './Emblem';

export const ContactSection: React.FC = () => {
  const { t } = useLanguage();

  const [copiedCoords, setCopiedCoords] = useState(false);

  const handleCopyCoords = () => {
    navigator.clipboard.writeText('22°33\'21.0"S 17°05\'32.0"E').then(() => { setCopiedCoords(true); setTimeout(() => setCopiedCoords(false), 2400); }).catch(() => setCopiedCoords(false));
  };

  return (
    <section
      id="contact"
      aria-label="Visit or Contact the Embassy"
      className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/70"
    >
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 lg:space-y-16">
        {/* ========================================================================= */}
        {/* PART 1: Embassy Information (Left ~40%) + Contact Form (Right ~60%)       */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* ----------------------------------------------------------------------- */}
          {/* LEFT COLUMN: Embassy identity and practical information (~40% = 5 cols) */}
          {/* ----------------------------------------------------------------------- */}
          <div className="lg:col-span-5 space-y-10 font-sans">
            {/* Section Heading & Identity */}
            <div className="space-y-4">
              <span className="font-condensed text-xs font-bold tracking-[0.25em] uppercase text-[#C89A3D] block">
                {t({ en: 'CHANCERY COMMUNICATIONS', fr: 'CHANCELLERIE & COMMUNICATIONS' })}
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#071A2F] tracking-tight leading-[1.15]">
                <span className="block">{t({ en: 'VISIT OR CONTACT', fr: 'VENIR OU CONTACTER' })}</span>
                <span className="block text-[#C89A3D] italic font-light">
                  {t({ en: 'THE EMBASSY', fr: 'L’AMBASSADE' })}
                </span>
              </h2>

              <div className="pt-1 space-y-1">
                <p className="font-serif text-lg text-[#071A2F] font-normal leading-snug">
                  {t({
                    en: 'Embassy of the Democratic Republic of the Congo in the Republic of Namibia',
                    fr: 'Ambassade de la République Démocratique du Congo en République de Namibie',
                  })}
                </p>
                <div className="flex items-center gap-2 pt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C89A3D]" />
                  <span className="font-condensed text-xs font-bold tracking-[0.2em] uppercase text-[#C89A3D]">
                    WINDHOEK · NAMIBIA
                  </span>
                </div>
              </div>
            </div>

            {/* Subtle Gold Rule */}
            <div className="w-16 h-[2px] bg-[#C89A3D]" />

            {/* Practical Information with Generous Diplomatic Spacing */}
            <div className="space-y-8 text-base">
              {/* ADDRESS */}
              <div className="space-y-2">
                <span className="font-condensed text-xs font-bold tracking-[0.18em] uppercase text-[#071A2F] flex items-center gap-2">
                  <MapPin size={14} className="text-[#C89A3D]" />
                  {t({ en: 'ADDRESS', fr: 'ADRESSE' })}
                </span>
                <div className="pl-5 text-[#536273] font-light leading-relaxed">
                  <p className="text-[#071A2F] font-medium">56, Simeon Leenakele Shixungileni</p>
                  <p>P.O. Box 9140</p>
                  <p>Eros, Windhoek</p>
                  <p>Namibia</p>
                </div>
              </div>

              {/* TELEPHONE */}
              <div className="space-y-2">
                <span className="font-condensed text-xs font-bold tracking-[0.18em] uppercase text-[#071A2F] flex items-center gap-2">
                  <Phone size={14} className="text-[#C89A3D]" />
                  {t({ en: 'TELEPHONE', fr: 'TÉLÉPHONE' })}
                </span>
                <div className="pl-5">
                  <a
                    href="tel:+26461256287"
                    className="font-mono text-lg text-[#071A2F] font-semibold hover:text-[#1478C8] transition-colors"
                  >
                    +264 61 256 287
                  </a>
                </div>
              </div>

              {/* FAX */}
              <div className="space-y-2">
                <span className="font-condensed text-xs font-bold tracking-[0.18em] uppercase text-[#071A2F] flex items-center gap-2">
                  <Printer size={14} className="text-[#C89A3D]" />
                  {t({ en: 'FAX', fr: 'TÉLÉCOPIE' })}
                </span>
                <div className="pl-5">
                  <span className="font-mono text-base text-[#536273]">+264 61 256 286</span>
                </div>
              </div>

              {/* OPENING HOURS */}
              <div className="space-y-2.5 pt-2 border-t border-slate-200">
                <span className="font-condensed text-xs font-bold tracking-[0.18em] uppercase text-[#071A2F] flex items-center gap-2">
                  <Clock size={14} className="text-[#C89A3D]" />
                  {t({ en: 'OPENING HOURS', fr: 'HORAIRES D’OUVERTURE' })}
                </span>

                <div className="pl-5 space-y-2 text-[#536273] font-light">
                  <div className="flex items-center justify-between max-w-xs">
                    <span className="text-[#071A2F] font-normal">
                      {t({ en: 'Monday – Thursday', fr: 'Lundi – Jeudi' })}:
                    </span>
                    <span className="font-mono font-medium text-[#071A2F]">09:00 – 16:30</span>
                  </div>

                  <div className="flex items-center justify-between max-w-xs">
                    <span className="text-[#071A2F] font-normal">
                      {t({ en: 'Friday', fr: 'Vendredi' })}:
                    </span>
                    <span className="font-mono font-medium text-[#071A2F]">09:00 – 16:00</span>
                  </div>

                  <div className="pt-2">
                    <span className="inline-block px-3 py-1 bg-[#1478C8]/10 text-[#1478C8] text-xs font-condensed font-semibold tracking-wider uppercase">
                      {t({
                        en: 'Consular Window: 09:30 – 13:00',
                        fr: 'Guichet Consulaire : 09h30 – 13h00',
                      })}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ----------------------------------------------------------------------- */}
          {/* RIGHT COLUMN: Contact Form (~60% = 7 cols)                              */}
          {/* ----------------------------------------------------------------------- */}
          <div className="lg:col-span-7 bg-[#F8F7F3] border border-slate-200/90 p-8 sm:p-12 shadow-sm">
              <div className="space-y-8 font-sans">
                {/* Form Header */}
                <div className="space-y-2 border-b border-slate-200 pb-5">
                  <span className="font-condensed text-[11px] font-bold tracking-[0.2em] uppercase text-[#C89A3D] block">
                    {t({ en: 'OFFICIAL CORRESPONDENCE', fr: 'CORRESPONDANCE OFFICIELLE' })}
                  </span>
                  <h3 className="font-serif text-2xl font-medium text-[#071A2F]">
                    {t({ en: 'Direct Inquiry to the Mission', fr: 'Transmission Directe à la Mission' })}
                  </h3>
                  <p className="text-sm text-[#536273] font-light">
                    {t({
                      en: 'Use the contact details below to discuss your inquiry. Online messaging is planned after approval.',
                      fr: 'Utilisez les coordonnées ci-dessous pour votre demande. La messagerie en ligne est prévue après validation.',
                    })}
                  </p>
                </div>

                <div className="p-6 bg-sky-50 border border-sky-200 text-[#173B56] space-y-4" role="status"><h4 className="font-serif text-2xl">{t({en:'Contact us directly',fr:'Contactez-nous directement'})}</h4><p className="leading-relaxed">{t({en:'Online inquiries are not available yet. Please call the embassy to discuss your request, confirm opening hours, or arrange a consular appointment.',fr:'Les demandes en ligne ne sont pas encore disponibles. Veuillez appeler l’ambassade pour discuter de votre demande, confirmer les horaires ou organiser un rendez-vous consulaire.'})}</p><a href="tel:+26461256287" className="inline-flex items-center gap-2 font-semibold text-[#176FA6] hover:underline"><Phone size={17}/>+264 61 256 287</a></div>
              </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PART 2: Premium Location / Map Experience (Full-Width directly below)     */}
        {/* ========================================================================= */}
        <div className="space-y-6 pt-8 border-t border-slate-200">
          {/* Header Bar for Map */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-condensed tracking-wider uppercase">
            <div className="flex items-center gap-2">
              <Compass size={15} className="text-[#C89A3D]" />
              <span className="font-bold text-[#071A2F] text-sm">
                {t({ en: 'CHANCERY LOCATION & PRECINCT MAP', fr: 'PLAN D’ACCÈS & DISTRICT DE LA CHANCELLERIE' })}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-[#071A2F] font-semibold bg-slate-100 px-2.5 py-1 border border-slate-200">
                22°33'21.0"S 17°05'32.0"E
              </span>
              <button
                type="button"
                onClick={handleCopyCoords}
                className="inline-flex items-center gap-1.5 text-[#536273] hover:text-[#071A2F] transition-colors cursor-pointer text-[11px]"
                title="Copy coordinates"
              >
                {copiedCoords ? (
                  <>
                    <Check size={13} className="text-emerald-600" />
                    <span className="text-emerald-600 font-bold">{t({ en: 'Copied', fr: 'Copié' })}</span>
                  </>
                ) : (
                  <>
                    <Copy size={13} />
                    <span>{t({ en: 'Copy GPS', fr: 'Copier GPS' })}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Full-Width Cartographic Stage */}
          <div className="relative aspect-[16/9] sm:aspect-[2.5/1] lg:aspect-[3.2/1] overflow-hidden bg-[#176FA6] border border-[#0D223E] shadow-xl">
            {/* Precision Cartographic Vector Artwork */}
            <svg
              className="w-full h-full"
              viewBox="0 0 1440 450"
              preserveAspectRatio="xMidYMid slice"
              aria-hidden="true"
            >
              <defs>
                {/* Chancery Area Grid */}
                <pattern id="chancery-grid-dense" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1478C8" strokeWidth="0.5" strokeOpacity="0.12" />
                </pattern>
                <pattern id="chancery-subgrid" width="160" height="160" patternUnits="userSpaceOnUse">
                  <path d="M 160 0 L 0 0 0 160" fill="none" stroke="#C89A3D" strokeWidth="0.6" strokeOpacity="0.2" />
                </pattern>
                <linearGradient id="mapVignette" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#051322" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#071A2F" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#051322" stopOpacity="0.85" />
                </linearGradient>
              </defs>

              {/* Background fills */}
              <rect width="1440" height="450" fill="#071A2F" />
              <rect width="1440" height="450" fill="url(#chancery-grid-dense)" />
              <rect width="1440" height="450" fill="url(#chancery-subgrid)" />

              {/* Topographic Contours of Windhoek Eros District */}
              <path
                d="M-50 80 Q 250 140, 500 90 T 1000 130 T 1500 70"
                fill="none"
                stroke="#1E3A5F"
                strokeWidth="1"
                strokeDasharray="4 4"
                opacity="0.4"
              />
              <path
                d="M-50 200 Q 300 160, 650 220 T 1150 180 T 1500 240"
                fill="none"
                stroke="#1E3A5F"
                strokeWidth="1"
                strokeDasharray="4 4"
                opacity="0.4"
              />
              <path
                d="M-50 360 Q 350 400, 750 330 T 1200 370 T 1500 340"
                fill="none"
                stroke="#1E3A5F"
                strokeWidth="1"
                strokeDasharray="4 4"
                opacity="0.4"
              />

              {/* Primary Arteries of Windhoek */}
              {/* Nelson Mandela Avenue (Broad artery) */}
              <line x1="0" y1="160" x2="1440" y2="160" stroke="#334E68" strokeWidth="12" strokeLinecap="round" opacity="0.6" />
              <line x1="0" y1="160" x2="1440" y2="160" stroke="#C89A3D" strokeWidth="1.5" strokeDasharray="8 6" opacity="0.7" />

              {/* Kenneth Kaunda Street */}
              <line x1="0" y1="310" x2="1440" y2="310" stroke="#243B53" strokeWidth="8" opacity="0.5" />

              {/* Robert Mugabe Avenue */}
              <line x1="260" y1="0" x2="260" y2="450" stroke="#334E68" strokeWidth="8" opacity="0.5" />

              {/* Simeon Leenakele Shixungileni (The Chancery Street) */}
              <line x1="720" y1="0" x2="720" y2="450" stroke="#627D98" strokeWidth="10" strokeLinecap="round" opacity="0.8" />
              <line x1="720" y1="0" x2="720" y2="450" stroke="#F8F7F3" strokeWidth="2" opacity="0.9" />

              {/* Eros Road connecting avenue */}
              <line x1="1100" y1="0" x2="1100" y2="450" stroke="#243B53" strokeWidth="8" opacity="0.5" />

              {/* Diagonal connecting lanes */}
              <line x1="300" y1="80" x2="720" y2="240" stroke="#334E68" strokeWidth="4" opacity="0.4" />
              <line x1="720" y1="240" x2="1150" y2="400" stroke="#334E68" strokeWidth="4" opacity="0.4" />

              {/* Street Typography */}
              <text x="80" y="145" fill="#9FB3C8" fontSize="11" fontFamily="sans-serif" letterSpacing="4" fontWeight="600">
                NELSON MANDELA AVENUE
              </text>
              <text x="80" y="295" fill="#829AB1" fontSize="10" fontFamily="sans-serif" letterSpacing="3">
                KENNETH KAUNDA STREET
              </text>
              <text x="735" y="60" fill="#F8F7F3" fontSize="11" fontFamily="sans-serif" letterSpacing="3" fontWeight="700">
                SIMEON LEENAKELE SHIXUNGILENI
              </text>
              <text x="735" y="380" fill="#9FB3C8" fontSize="10" fontFamily="sans-serif" letterSpacing="3">
                EROS DIPLOMATIC PRECINCT · WINDHOEK
              </text>
              <text x="275" y="420" fill="#829AB1" fontSize="10" fontFamily="sans-serif" letterSpacing="3">
                ROBERT MUGABE AVE
              </text>

              {/* Embassy Location Focal Point: (720, 240) */}
              {/* Concentric diplomatic pulse rings */}
              <circle cx="720" cy="240" r="45" fill="#C89A3D" fillOpacity="0.06" stroke="#C89A3D" strokeWidth="1" strokeDasharray="3 3" />
              <circle cx="720" cy="240" r="28" fill="#1478C8" fillOpacity="0.12" stroke="#1478C8" strokeWidth="1.2" />
              <circle cx="720" cy="240" r="14" fill="#C89A3D" fillOpacity="0.25" />
              <circle cx="720" cy="240" r="6" fill="#C89A3D" />

              {/* Vignette Overlay */}
              <rect width="1440" height="450" fill="url(#mapVignette)" />
            </svg>

            {/* Central Embassy Identification Card Overlay */}
            <div className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none">
              <div className="pointer-events-auto max-w-xl w-full bg-[#125D8D]/95 border-2 border-[#C89A3D]/70 p-5 sm:p-6 backdrop-blur-md shadow-2xl space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-[#176FA6] border border-[#C89A3D] flex items-center justify-center shrink-0 shadow-inner">
                      <MapPin size={22} className="text-[#C89A3D] stroke-[2.2]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <DrcFlag size={14} />
                        <NamibiaFlag size={14} />
                        <span className="font-condensed text-[10px] tracking-[0.2em] uppercase text-[#C89A3D] font-bold">
                          CHANCERY MISSION
                        </span>
                      </div>
                      <h4 className="font-serif text-base sm:text-lg font-medium text-white tracking-wide">
                        Embassy of the Democratic Republic of the Congo
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-700/80 pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div className="space-y-0.5 text-slate-300 font-sans">
                    <p className="text-white font-medium">56, Simeon Leenakele Shixungileni</p>
                    <p className="text-slate-400">Eros, Windhoek · Republic of Namibia</p>
                  </div>

                  <a
                    href="https://maps.google.com/?q=56+Simeon+Shixungileni+Windhoek+Namibia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#C89A3D] hover:bg-[#b88c32] text-[#071A2F] font-condensed text-xs font-bold tracking-wider uppercase px-4 py-2.5 transition-colors shrink-0 shadow-sm"
                  >
                    <span>{t({ en: 'OPEN IN GOOGLE MAPS', fr: 'OUVRIR DANS GOOGLE MAPS' })}</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Practical Arrival Briefing Tiles Below Map */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            {/* Consular Gate Access */}
            <div className="p-6 bg-[#F8F7F3] border border-slate-200/80 space-y-2.5">
              <div className="flex items-center gap-2 text-[#071A2F]">
                <Building2 size={16} className="text-[#C89A3D]" />
                <h4 className="font-condensed text-xs font-bold tracking-wider uppercase">
                  {t({ en: 'CONSULAR GATE ACCESS', fr: 'ACCÈS AU GUICHET CONSULAIRE' })}
                </h4>
              </div>
              <p className="font-sans text-xs sm:text-[13px] text-[#536273] font-light leading-relaxed">
                {t({
                  en: 'The consular section is accessible Monday through Thursday from 09:30 to 13:00. Visa applicants are kindly requested to confirm booking in advance.',
                  fr: 'La section consulaire est accessible du lundi au jeudi de 09h30 à 13h00. Les demandeurs de visa sont priés de confirmer leur rendez-vous à l’avance.',
                })}
              </p>
            </div>

            {/* Protocol & Security */}
            <div className="p-6 bg-[#F8F7F3] border border-slate-200/80 space-y-2.5">
              <div className="flex items-center gap-2 text-[#071A2F]">
                <ShieldCheck size={16} className="text-[#C89A3D]" />
                <h4 className="font-condensed text-xs font-bold tracking-wider uppercase">
                  {t({ en: 'SECURITY & PROTOCOL', fr: 'SÉCURITÉ & PROTOCOLE' })}
                </h4>
              </div>
              <p className="font-sans text-xs sm:text-[13px] text-[#536273] font-light leading-relaxed">
                {t({
                  en: 'Visitors must present valid government photo identification or passport at chancery entrance. Photography and unauthorized recording are strictly prohibited.',
                  fr: 'Les visiteurs doivent présenter une pièce d’identité officielle avec photographie à l’entrée. Les prises de vue sont interdites dans l’enceinte.',
                })}
              </p>
            </div>

            {/* Parking & Transportation */}
            <div className="p-6 bg-[#F8F7F3] border border-slate-200/80 space-y-2.5">
              <div className="flex items-center gap-2 text-[#071A2F]">
                <Car size={16} className="text-[#C89A3D]" />
                <h4 className="font-condensed text-xs font-bold tracking-wider uppercase">
                  {t({ en: 'PARKING & TRANSIT', fr: 'STATIONNEMENT & ACCÈS' })}
                </h4>
              </div>
              <p className="font-sans text-xs sm:text-[13px] text-[#536273] font-light leading-relaxed">
                {t({
                  en: 'Visitor parking is available along Simeon Leenakele Shixungileni. The chancery is conveniently located 5 minutes from Central Windhoek via Nelson Mandela Avenue.',
                  fr: 'Des places de stationnement sont disponibles le long de l’avenue Simeon Shixungileni. La Chancellerie se trouve à 5 minutes du centre-ville.',
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
