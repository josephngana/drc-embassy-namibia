import React from 'react';
import { ArrowRight, ChevronDown, Music2, Trees, Gem } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { DrcFlag } from './Emblem';

export const DiscoverDRC: React.FC = () => {
  const { t } = useLanguage();
  const themes = [
    { id:'culture', Icon:Music2, title:{en:'Culture & heritage',fr:'Culture et patrimoine'}, subtitle:{en:'The rhythm of a nation',fr:'Le rythme d’une nation'}, text:{en:'Discover Congolese rumba, visual arts, literature, and the creativity of communities across the country.',fr:'Découvrez la rumba congolaise, les arts visuels, la littérature et la créativité des communautés du pays.'}, detail:{en:'From music and dance to contemporary art, Congolese cultural expression connects generations and communities at home and abroad.',fr:'De la musique et la danse à l’art contemporain, la culture congolaise relie les générations et les communautés au pays comme à l’étranger.'}},
    { id:'nature', Icon:Trees, title:{en:'Nature & landscapes',fr:'Nature et paysages'}, subtitle:{en:'Along the Congo River',fr:'Au fil du fleuve Congo'}, text:{en:'Explore the country through its great river, the forests of the Congo Basin, and the landscapes of Virunga.',fr:'Explorez le pays à travers son grand fleuve, les forêts du bassin du Congo et les paysages des Virunga.'}, detail:{en:'These landscapes are part of the country’s natural heritage. Contact the embassy for travel guidance before planning a visit.',fr:'Ces paysages font partie du patrimoine naturel du pays. Contactez l’ambassade pour vous renseigner avant de préparer un voyage.'}},
    { id:'investment', Icon:Gem, title:{en:'Business & cooperation',fr:'Affaires et coopération'}, subtitle:{en:'Building lasting connections',fr:'Construire des liens durables'}, text:{en:'Learn about opportunities for cooperation in agriculture, energy, natural resources, and trade.',fr:'Découvrez les possibilités de coopération dans l’agriculture, l’énergie, les ressources naturelles et le commerce.'}, detail:{en:'The embassy can direct business inquiries to the appropriate institutions and help establish connections between Congolese and Namibian partners.',fr:'L’ambassade peut orienter les demandes économiques vers les institutions compétentes et faciliter les contacts entre partenaires congolais et namibiens.'}},
  ];
  return <section id="discover" aria-labelledby="discover-heading" className="drc-discover py-16 sm:py-20 lg:py-24">
    <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-[.85fr_1.4fr] gap-10 lg:gap-20 items-start">
        <div>
          <span className="section-kicker">{t({en:'Discover our country',fr:'Découvrez notre pays'})}</span>
          <h2 id="discover-heading" className="font-serif text-4xl sm:text-5xl leading-[1.08] text-[#173B56] mt-4">{t({en:'A closer look at',fr:'Un regard sur'})}<br/><span className="text-[#176FA6]">{t({en:'the Congo.',fr:'le Congo.'})}</span></h2>
          <p className="text-[#49667B] leading-relaxed mt-5 max-w-md">{t({en:'A country of living traditions, remarkable landscapes, and connections that reach beyond its borders.',fr:'Un pays de traditions vivantes, de paysages remarquables et de liens qui dépassent ses frontières.'})}</p>
          <figure className="drc-flag-panel mt-8 p-7 sm:p-9">
            <DrcFlag size={130} className="discover-flag"/>
            <figcaption className="mt-5 text-sm font-medium text-[#173B56]">{t({en:'Democratic Republic of the Congo',fr:'République démocratique du Congo'})}<span className="block mt-1 text-xs tracking-[.14em] uppercase text-[#49667B]">Justice · Paix · Travail</span></figcaption>
          </figure>
        </div>
        <div className="divide-y divide-[#BBD8EA] border-y border-[#BBD8EA]">
          {themes.map(({id,Icon,title,subtitle,text,detail})=><article key={id} className="py-7 sm:py-8 grid grid-cols-[44px_1fr] sm:grid-cols-[56px_1fr] gap-4 sm:gap-5">
            <div className="theme-icon"><Icon size={23} strokeWidth={1.5} aria-hidden="true"/></div>
            <div><span className="text-xs text-[#176FA6] font-semibold tracking-wide">{t(subtitle)}</span><h3 className="font-serif text-2xl sm:text-3xl text-[#173B56] mt-1">{t(title)}</h3><p className="mt-3 leading-relaxed text-[#49667B] text-[15px]">{t(text)}</p>
              <details className="theme-details mt-4"><summary className="inline-flex items-center gap-2 text-sm text-[#176FA6] font-semibold cursor-pointer hover:text-[#125D8D]">{t({en:'Explore this theme',fr:'Explorer ce thème'})}<ChevronDown size={15} aria-hidden="true"/></summary><p className="mt-3 text-sm leading-relaxed text-[#49667B]">{t(detail)}</p></details>
            </div>
          </article>)}
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-[#BBD8EA] flex flex-col sm:flex-row sm:items-center justify-between gap-4"><p className="text-sm text-[#49667B]">{t({en:'Planning a visit or looking to connect with Congolese partners?',fr:'Un projet de voyage ou de partenariat avec le Congo ?'})}</p><a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-[#176FA6] hover:underline">{t({en:'Speak with the embassy',fr:'Contacter l’ambassade'})}<ArrowRight size={16}/></a></div>
    </div>
  </section>;
};
