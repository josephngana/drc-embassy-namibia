/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { TopBar } from './components/TopBar';
import { Header } from './components/Header';
import { NoticeBar } from './components/NoticeBar';
import { Hero } from './components/Hero';
import { AmbassadorSection } from './components/AmbassadorSection';
import { TheEmbassy } from './components/TheEmbassy';
import { ConsularServices } from './components/ConsularServices';
import { BilateralRelations } from './components/BilateralRelations';
import { DiplomaticTeam } from './components/DiplomaticTeam';
import { NewsSection } from './components/NewsSection';
import { DiscoverDRC } from './components/DiscoverDRC';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

// Modals
import {
  AppointmentModal,
  ServiceDetailModal,
  AmbassadorModal,
  NoticeModal,
  EmergencyModal,
  FormsModal,
  DiplomatModal,
  ArticleModal,
} from './components/Modals';

import { ConsularService, Diplomat, NewsArticle } from './data/embassyData';

function EmbassyOnePageApp() {
  // Modal states
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);
  const [formsModalOpen, setFormsModalOpen] = useState(false);
  const [emergencyModalOpen, setEmergencyModalOpen] = useState(false);
  const [noticeModalOpen, setNoticeModalOpen] = useState(false);
  const [ambassadorModalOpen, setAmbassadorModalOpen] = useState(false);

  const [selectedService, setSelectedService] = useState<ConsularService | null>(null);
  const [selectedDiplomat, setSelectedDiplomat] = useState<Diplomat | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);

  const handleOpenAppointment = (serviceId?: string) => {
    setPreselectedService(serviceId);
    setAppointmentModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8F7F3] text-[#071A2F] flex flex-col font-sans selection:bg-[#1478C8]/20 selection:text-[#071A2F]">
      {/* 1. TOP UTILITY BAR */}
      <TopBar onOpenEmergencyModal={() => setEmergencyModalOpen(true)} />

      {/* 1b. MAIN NAVIGATION HEADER */}
      <Header
        onOpenAppointmentModal={() => handleOpenAppointment()}
        onOpenEmergencyModal={() => setEmergencyModalOpen(true)}
        onOpenFormsModal={() => setFormsModalOpen(true)}
      />

      {/* 2. SLIM OFFICIAL NOTICE */}
      <NoticeBar onOpenNoticeModal={() => setNoticeModalOpen(true)} />

      <main className="flex-1">
        {/* 3. HERO (Full-width editorial composition, dark navy) */}
        <Hero />

        {/* 4. AMBASSADOR (Magazine profile / presidential communication) */}
        <AmbassadorSection
          onOpenAmbassadorModal={() => setAmbassadorModalOpen(true)}
        />

        {/* 5. THE EMBASSY (Editorial split layout: Statement + 4 vertical responsibilities) */}
        <TheEmbassy />

        {/* 6. CONSULAR SERVICES (Quiet 3x2 grid + single horizontal action bar) */}
        <ConsularServices
          onSelectService={(service) => setSelectedService(service)}
          onOpenAppointmentModal={() => handleOpenAppointment()}
          onOpenFormsModal={() => setFormsModalOpen(true)}
        />

        {/* 7. DRC & NAMIBIA (Visual bilateral relations, 3 editorial columns) */}
        <BilateralRelations />

        {/* 8. DIPLOMATIC TEAM (4 editorial portraits in one row, gold rules) */}
        <DiplomaticTeam />

        {/* 9. NEWS & OFFICIAL COMMUNICATIONS (60/40 magazine layout + separate notice) */}
        <NewsSection
          onSelectArticle={(article) => setSelectedArticle(article)}
          onOpenNoticeModal={() => setNoticeModalOpen(true)}
        />

        {/* 10. DISCOVER DRC (3 large dominant editorial image tiles) */}
        <DiscoverDRC />

        {/* 11. CONTACT (2 columns: Coordinates & Form + Wide Map) */}
        <ContactSection />
      </main>

      {/* 12. FOOTER (Dark navy, 3 columns, Kitoko Digital accreditation) */}
      <Footer />

      {/* Dialogs & Modals */}
      <AppointmentModal
        isOpen={appointmentModalOpen}
        onClose={() => setAppointmentModalOpen(false)}
        preselectedServiceId={preselectedService}
      />

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookAppointment={(serviceId) => handleOpenAppointment(serviceId)}
      />

      <AmbassadorModal
        isOpen={ambassadorModalOpen}
        onClose={() => setAmbassadorModalOpen(false)}
      />

      <NoticeModal
        isOpen={noticeModalOpen}
        onClose={() => setNoticeModalOpen(false)}
      />

      <EmergencyModal
        isOpen={emergencyModalOpen}
        onClose={() => setEmergencyModalOpen(false)}
      />

      <FormsModal
        isOpen={formsModalOpen}
        onClose={() => setFormsModalOpen(false)}
      />

      <DiplomatModal
        diplomat={selectedDiplomat}
        onClose={() => setSelectedDiplomat(null)}
      />

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <EmbassyOnePageApp />
    </LanguageProvider>
  );
}
