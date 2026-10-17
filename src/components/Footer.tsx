import React from 'react';
import { Phone, MapPin, Mail } from 'lucide-react';
import { DrcEmblem } from './Emblem';
import { useLanguage } from '../context/LanguageContext';
import { EMBASSY_INFO } from '../data/embassyData';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { href: '#hero', label: t({ en: 'Home', fr: 'Accueil' }) },
    { href: '#the-embassy', label: t({ en: 'The Embassy', fr: 'L’Ambassade' }) },
    { href: '#services', label: t({ en: 'Consular Services', fr: 'Services Consulaires' }) },
    { href: '#bilateral', label: t({ en: 'DRC & Namibia', fr: 'RDC & Namibie' }) },
    { href: '#team', label: t({ en: 'Diplomatic Team', fr: 'Équipe' }) },
    { href: '#news', label: t({ en: 'News & Notices', fr: 'Actualités' }) },
    { href: '#discover', label: t({ en: 'Discover DRC', fr: 'Découvrir la RDC' }) },
    { href: '#contact', label: t({ en: 'Contact', fr: 'Contact' }) },
  ];

  return (
    <footer
      aria-label="Embassy footer"
      className="bg-[#071A2F] text-[#F8F7F3] border-t border-[#0D223E] py-12 sm:py-16 font-sans text-xs"
    >
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* 3 Columns: Left (Emblem & Name) · Center (Quick Links) · Right (Contact Details) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-10 border-b border-slate-800">
          {/* Left: Embassy Emblem & Name (4 cols) */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <DrcEmblem size={40} className="shrink-0" />
              <div className="flex flex-col">
                <span className="text-[10px] font-condensed tracking-widest uppercase text-[#C89A3D]">
                  {t({ en: 'Official Mission', fr: 'Mission Officielle' })}
                </span>
                <h3 className="font-serif text-base sm:text-lg font-medium text-white leading-tight">
                  {t({
                    en: 'Embassy of the Democratic Republic of the Congo',
                    fr: 'Ambassade de la République Démocratique du Congo',
                  })}
                </h3>
                <span className="text-[10px] font-condensed tracking-widest uppercase text-slate-400">
                  {t({ en: 'in Namibia', fr: 'en Namibie' })}
                </span>
              </div>
            </div>

            <p className="font-sans text-xs text-slate-400 font-light max-w-sm leading-relaxed pt-1">
              {t({
                en: 'Diplomatic mission accredited to the Republic of Namibia. Dedicated to bilateral cooperation and consular protection.',
                fr: 'Mission diplomatique accréditée auprès de la République de Namibie. Dévouée à la coopération bilatérale et à la protection consulaire.',
              })}
            </p>
          </div>

          {/* Center: Quick Links (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <span className="font-condensed text-[11px] font-bold tracking-widest uppercase text-[#C89A3D] block">
              {t({ en: 'PORTAL INDEX', fr: 'SOMMAIRE' })}
            </span>
            <nav className="grid grid-cols-2 gap-x-4 gap-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-slate-300 hover:text-[#C89A3D] transition-colors py-0.5 tracking-wide"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Right: Contact Details (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-condensed text-[11px] font-bold tracking-widest uppercase text-[#C89A3D] block">
              {t({ en: 'CHANCERY COORDINATES', fr: 'COORDONNÉES' })}
            </span>

            <div className="space-y-2 text-slate-300 text-xs">
              <div className="flex items-start gap-2">
                <MapPin size={13} className="text-[#C89A3D] shrink-0 mt-0.5" />
                <span className="text-slate-400">56, Simeon Leenakele Shixungileni, Eros, Windhoek</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone size={13} className="text-[#C89A3D] shrink-0" />
                <a href="tel:+26461256287" className="font-mono text-white hover:text-[#C89A3D] transition-colors">
                  +264 61 256 287
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail size={13} className="text-[#C89A3D] shrink-0" />
                <span className="font-mono text-slate-400">contact@ambardc-windhoek.cd</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Line: Copyright, Privacy/Accessibility/Terms, and Kitoko Digital credit */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 pt-2">
          <p className="text-center sm:text-left">
            © 2026 {t({
              en: 'Embassy of the Democratic Republic of the Congo in Namibia.',
              fr: 'Ambassade de la République Démocratique du Congo en Namibie.',
            })}
          </p>

          <div className="flex items-center gap-3 text-slate-400 text-xs">
            <span className="hover:text-white transition-colors cursor-pointer">
              {t({ en: 'Privacy', fr: 'Confidentialité' })}
            </span>
            <span className="text-slate-600">·</span>
            <span className="hover:text-white transition-colors cursor-pointer">
              {t({ en: 'Accessibility', fr: 'Accessibilité' })}
            </span>
            <span className="text-slate-600">·</span>
            <span className="hover:text-white transition-colors cursor-pointer">
              {t({ en: 'Terms', fr: 'Mentions Légales' })}
            </span>
          </div>

          <div className="text-[11px] text-slate-500 font-light">
            {t({
              en: 'Digital Experience by Kitoko Digital',
              fr: 'Expérience Numérique par Kitoko Digital',
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};
