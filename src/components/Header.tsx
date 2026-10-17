import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Calendar,
  ChevronRight,
  Phone,
  ShieldAlert,
  MapPin,
  Clock,
  FileText,
  Landmark,
  UserCheck,
  Handshake,
  Award,
  Globe,
  Sparkles,
} from 'lucide-react';
import { DrcEmblem, DrcFlag, NamibiaFlag } from './Emblem';
import { useLanguage } from '../context/LanguageContext';
import { EMBASSY_INFO } from '../data/embassyData';

interface HeaderProps {
  onOpenAppointmentModal: () => void;
  onOpenEmergencyModal?: () => void;
  onOpenFormsModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenAppointmentModal,
  onOpenEmergencyModal,
  onOpenFormsModal,
}) => {
  const { lang, setLang, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle escape key to close drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    {
      href: '#hero',
      label: t({ en: 'Home', fr: 'Accueil' }),
      icon: Landmark,
    },
    {
      href: '#ambassador',
      label: t({ en: 'Embassy', fr: 'Ambassade' }),
      icon: Award,
    },
    {
      href: '#services',
      label: t({ en: 'Consular', fr: 'Consulat' }),
      icon: FileText,
    },
    {
      href: '#bilateral',
      label: t({ en: 'DRC & Namibia', fr: 'RDC & Namibie' }),
      icon: Handshake,
    },
    {
      href: '#team',
      label: t({ en: 'Team', fr: 'Équipe' }),
      icon: UserCheck,
    },
    {
      href: '#news',
      label: t({ en: 'News', fr: 'Actualités' }),
      icon: Globe,
    },
    {
      href: '#discover',
      label: t({ en: 'Discover DRC', fr: 'Découvrir la RDC' }),
      icon: Sparkles,
    },
    {
      href: '#contact',
      label: t({ en: 'Contact', fr: 'Contact' }),
      icon: MapPin,
    },
  ];

  const handleNavLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#071A2F]/98 backdrop-blur-md shadow-md border-b border-[#C89A3D]/25 py-2.5'
            : 'bg-[#071A2F] border-b border-[#0D223E] py-3.5'
        }`}
      >
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 xl:gap-8">
            {/* Left: Official Emblem + Formal Name */}
            <a
              href="#hero"
              className="flex items-center gap-3 group text-left shrink-0"
              aria-label="Embassy of the Democratic Republic of the Congo in Namibia"
            >
              <DrcEmblem size={38} className="transition-transform group-hover:scale-105 shrink-0" />
              <div className="flex flex-col">
                <span className="text-[9px] font-condensed font-medium tracking-[0.16em] uppercase text-[#C89A3D] leading-none">
                  {t({ en: 'Embassy of the', fr: 'Ambassade de la' })}
                </span>
                <span className="text-xs sm:text-[13px] font-serif font-semibold tracking-wider uppercase text-[#F8F7F3] leading-tight mt-0.5">
                  {t({ en: 'Democratic Republic of the Congo', fr: 'République Démocratique du Congo' })}
                </span>
                <span className="text-[9px] font-condensed font-light tracking-[0.16em] uppercase text-[#F8F7F3]/70 leading-none mt-0.5">
                  {t({ en: 'in Namibia', fr: 'en Namibie' })}
                </span>
              </div>
            </a>

            {/* Desktop Navigation: Compact & Elegant */}
            <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-[13px] font-sans font-medium text-[#F8F7F3]/90">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-[#C89A3D] transition-colors whitespace-nowrap py-1 tracking-wide"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right: Primary Button & Mobile Drawer Toggle */}
            <div className="flex items-center gap-2.5 shrink-0">
              <button
                type="button"
                onClick={onOpenAppointmentModal}
                className="hidden sm:inline-flex items-center gap-2 bg-[#C89A3D] hover:bg-[#b88c32] active:bg-[#a67d2a] text-[#071A2F] text-[11px] font-condensed font-bold tracking-widest uppercase px-4 py-2.5 rounded-none transition-colors whitespace-nowrap cursor-pointer shadow-xs"
              >
                <Calendar size={13} className="stroke-[2.5]" />
                <span>{t({ en: 'Book an Appointment', fr: 'Prendre Rendez-vous' })}</span>
              </button>

              {/* Mobile Drawer Trigger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden flex items-center gap-1.5 px-2.5 py-1.5 text-[#F8F7F3] bg-slate-800/40 hover:bg-slate-800/70 border border-slate-700/60 rounded-none transition-colors cursor-pointer"
                aria-label="Open diplomatic navigation drawer"
                aria-expanded={mobileMenuOpen}
              >
                <span className="text-[11px] font-condensed uppercase tracking-wider text-slate-300 hidden xs:inline">
                  {t({ en: 'Menu', fr: 'Menu' })}
                </span>
                <Menu size={20} className="text-[#C89A3D]" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex justify-end">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-xs animate-drawer-backdrop cursor-pointer"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          <div
            className="relative w-full max-w-[340px] xs:max-w-sm sm:max-w-md bg-[#071A2F] text-[#F8F7F3] h-full shadow-2xl flex flex-col justify-between border-l border-[#C89A3D]/30 overflow-hidden z-10 animate-drawer-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Diplomatic Navigation Drawer"
          >
            {/* Drawer Header */}
            <div className="p-5 border-b border-[#0D223E] bg-[#051322] shrink-0">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <DrcEmblem size={36} />
                  <div className="flex flex-col">
                    <span className="text-[9px] font-condensed font-bold tracking-[0.18em] uppercase text-[#C89A3D]">
                      {t({ en: 'Official Mission', fr: 'Mission Officielle' })}
                    </span>
                    <h2 className="text-xs font-serif font-bold text-white tracking-wider uppercase leading-snug">
                      {t({ en: 'Embassy of the DRC', fr: 'Ambassade de la RDC' })}
                    </h2>
                    <span className="text-[10px] text-slate-400 font-sans">
                      {t({ en: 'Windhoek · Namibia', fr: 'Windhoek · Namibie' })}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close drawer"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Bilateral and Language Row */}
              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="flex items-center -space-x-1">
                    <DrcFlag size={16} />
                    <NamibiaFlag size={16} />
                  </div>
                  <span className="text-[10px] uppercase font-condensed tracking-wider text-[#C89A3D]">
                    {t({ en: 'DRC × Namibia', fr: 'RDC × Namibie' })}
                  </span>
                </div>

                {/* EN / FR Switcher */}
                <div className="flex items-center bg-[#071A2F] border border-slate-700 rounded-none px-2 py-0.5 text-[11px] font-condensed">
                  <button
                    type="button"
                    onClick={() => setLang('en')}
                    className={`cursor-pointer ${lang === 'en' ? 'text-[#C89A3D] font-bold' : 'text-slate-400'}`}
                  >
                    EN
                  </button>
                  <span className="text-slate-600 px-1">/</span>
                  <button
                    type="button"
                    onClick={() => setLang('fr')}
                    className={`cursor-pointer ${lang === 'fr' ? 'text-[#C89A3D] font-bold' : 'text-slate-400'}`}
                  >
                    FR
                  </button>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-2">
              <span className="text-[10px] font-condensed font-semibold tracking-[0.2em] uppercase text-[#C89A3D] block mb-2">
                {t({ en: 'Index', fr: 'Sommaire' })}
              </span>

              <nav className="space-y-1">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={handleNavLinkClick}
                      className="flex items-center justify-between px-3 py-2.5 text-sm font-sans text-slate-200 hover:text-white hover:bg-[#0B2548] transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <Icon size={15} className="text-[#1478C8]" />
                        <span>{link.label}</span>
                      </div>
                      <ChevronRight size={14} className="text-slate-500" />
                    </a>
                  );
                })}
              </nav>

              {/* Action buttons inside drawer */}
              <div className="pt-4 border-t border-slate-800 space-y-2">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAppointmentModal();
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-[#C89A3D] text-[#071A2F] text-xs font-condensed font-bold tracking-widest uppercase py-3 transition-colors shadow-xs cursor-pointer"
                >
                  <Calendar size={14} className="stroke-[2.5]" />
                  <span>{t({ en: 'Book an Appointment', fr: 'Prendre Rendez-vous' })}</span>
                </button>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  {onOpenFormsModal ? (
                    <button
                      type="button"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        onOpenFormsModal();
                      }}
                      className="flex items-center justify-center gap-1.5 bg-[#0B2548] text-slate-200 text-xs py-2 px-2 border border-slate-700/60 cursor-pointer"
                    >
                      <FileText size={12} className="text-[#1478C8]" />
                      <span>{t({ en: 'Forms', fr: 'Formulaires' })}</span>
                    </button>
                  ) : (
                    <a
                      href="#services"
                      onClick={handleNavLinkClick}
                      className="flex items-center justify-center gap-1.5 bg-[#0B2548] text-slate-200 text-xs py-2 px-2 border border-slate-700/60"
                    >
                      <FileText size={12} className="text-[#1478C8]" />
                      <span>{t({ en: 'Forms', fr: 'Formulaires' })}</span>
                    </a>
                  )}

                  {onOpenEmergencyModal ? (
                    <button
                      type="button"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        onOpenEmergencyModal();
                      }}
                      className="flex items-center justify-center gap-1.5 bg-[#9E2F3A]/20 text-red-200 text-xs py-2 px-2 border border-[#9E2F3A]/40 cursor-pointer"
                    >
                      <ShieldAlert size={12} className="text-[#9E2F3A]" />
                      <span>{t({ en: 'Emergency', fr: 'Urgence' })}</span>
                    </button>
                  ) : (
                    <a
                      href={`tel:${EMBASSY_INFO.phone.replace(/\s+/g, '')}`}
                      className="flex items-center justify-center gap-1.5 bg-[#9E2F3A]/20 text-red-200 text-xs py-2 px-2 border border-[#9E2F3A]/40"
                    >
                      <Phone size={12} className="text-[#9E2F3A]" />
                      <span>{t({ en: 'Call Hotline', fr: 'Appel Urgence' })}</span>
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Drawer Footer */}
            <div className="p-4 bg-[#051322] border-t border-[#0D223E] space-y-1.5 text-xs text-slate-400 shrink-0">
              <div className="flex items-center gap-2 text-slate-300">
                <Phone size={12} className="text-[#C89A3D]" />
                <span className="font-mono text-[#C89A3D]">{EMBASSY_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-[11px]">
                <MapPin size={12} className="text-[#1478C8] shrink-0" />
                <span>56, Simeon Leenakele Shixungileni, Eros, Windhoek</span>
              </div>
              <div className="pt-2 text-[10px] text-slate-500 flex items-center justify-between">
                <span>© 2026 Embassy of the DRC</span>
                <span className="font-light">Kitoko Digital</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
