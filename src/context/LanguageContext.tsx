import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '../data/embassyData';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: <T>(obj: { en: T; fr: T }) => T;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('drc_embassy_lang');
      if (saved === 'fr' || saved === 'en') return saved;
    } catch {
      // ignore
    }
    return 'en';
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem('drc_embassy_lang', newLang);
    } catch {
      // ignore
    }
  };

  const t = <T,>(obj: { en: T; fr: T }): T => {
    return obj[lang] ?? obj.en;
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
