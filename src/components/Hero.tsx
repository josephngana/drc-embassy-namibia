import React from 'react';
import { ArrowUpRight, FileText, MapPin, Phone } from 'lucide-react';
import { DrcFlag, NamibiaFlag } from './Emblem';
import { useLanguage } from '../context/LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section id="hero" aria-label={t({en:'Welcome to the embassy',fr:'Bienvenue à l’ambassade'})} className="hero-light relative overflow-hidden border-b border-sky-200">
      <div className="relative max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24 grid lg:grid-cols-[1.35fr_1fr] gap-10 lg:gap-20 items-center">
        <div>
          <div className="flex flex-wrap items-center gap-3 mb-7 text-[#176FA6] font-condensed text-xs font-semibold tracking-[.16em] uppercase"><DrcFlag size={24}/><NamibiaFlag size={24}/><span>{t({en:'Democratic Republic of the Congo · Namibia',fr:'République démocratique du Congo · Namibie'})}</span></div>
          <h1 className="font-serif text-[42px] sm:text-6xl lg:text-7xl leading-[1.06] tracking-tight text-[#173B56]">{t({en:'Connecting nations.',fr:'Unir les nations.'})}<br/><span className="text-[#176FA6]">{t({en:'Serving our people.',fr:'Servir nos citoyens.'})}</span></h1>
          <p className="mt-6 text-base sm:text-lg text-[#49667B] leading-relaxed max-w-xl">{t({en:'Welcome to the Embassy of the Democratic Republic of the Congo in Namibia. Find consular guidance, prepare your visit, and stay connected with your embassy.',fr:'Bienvenue à l’Ambassade de la République démocratique du Congo en Namibie. Retrouvez les informations consulaires, préparez votre visite et restez en contact avec votre ambassade.'})}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#services" className="inline-flex items-center gap-3 bg-[#176FA6] hover:bg-[#125D8D] text-white px-6 py-3.5 text-sm font-semibold"><FileText size={17}/>{t({en:'Explore consular services',fr:'Nos services consulaires'})}<ArrowUpRight size={17}/></a>
            <a href="#ambassador" className="inline-flex items-center gap-2 border border-[#176FA6]/30 hover:bg-white text-[#173B56] px-6 py-3.5 text-sm font-semibold">{t({en:'About the embassy',fr:'À propos de l’ambassade'})}</a>
          </div>
        </div>
        <aside className="bg-white/95 border border-sky-200 shadow-[0_16px_50px_-25px_rgba(23,111,166,.3)]">
          <div className="h-1.5 bg-[#C89A3D]"/>
          <div className="p-7 sm:p-9">
            <span className="text-xs font-condensed tracking-[.18em] uppercase text-[#176FA6] font-bold">{t({en:'Your embassy, within reach',fr:'Votre ambassade à vos côtés'})}</span>
            <h2 className="font-serif text-3xl text-[#173B56] mt-3 mb-6">{t({en:'How can we help?',fr:'Comment vous aider ?'})}</h2>
            {[
              {href:'#services',title:t({en:'Visas & travel',fr:'Visas et voyages'}),body:t({en:'Prepare your application and documents',fr:'Préparer votre dossier et vos documents'})},
              {href:'#services',title:t({en:'Passports & citizen services',fr:'Passeports et services aux citoyens'}),body:t({en:'Guidance for the Congolese community',fr:'Accompagner la communauté congolaise'})},
              {href:'#contact',title:t({en:'Plan a visit',fr:'Préparer une visite'}),body:t({en:'Contact details, opening hours & directions',fr:'Coordonnées, horaires et itinéraire'})},
            ].map(item=><a key={item.title} href={item.href} className="flex items-center justify-between gap-4 py-4 border-t border-sky-100 group"><span><span className="block text-[#173B56] font-semibold group-hover:text-[#176FA6]">{item.title}</span><span className="block text-sm text-[#536273] mt-1">{item.body}</span></span><ArrowUpRight size={19} className="text-[#176FA6] shrink-0"/></a>)}
            <div className="pt-5 border-t border-sky-100 flex flex-wrap gap-4 text-sm text-[#49667B]"><span className="flex items-center gap-2"><MapPin size={15}/>Windhoek, Namibia</span><a href="#contact" className="flex items-center gap-2 text-[#176FA6] hover:underline"><Phone size={15}/>{t({en:'Contact us',fr:'Nous contacter'})}</a></div>
          </div>
        </aside>
      </div>
    </section>
  );
};
