import React from 'react';
import { ArrowRight, Bell, FileText } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { NEWS_STORIES, NewsArticle, OFFICIAL_NOTICE } from '../data/embassyData';

interface NewsSectionProps {
  onSelectArticle: (article: NewsArticle) => void;
  onOpenNoticeModal?: () => void;
}
export const NewsSection: React.FC<NewsSectionProps> = ({onSelectArticle,onOpenNoticeModal}) => {
  const { t } = useLanguage();
  return <section id="news" aria-labelledby="news-heading" className="py-16 sm:py-20 lg:py-24 bg-white border-y border-sky-100">
    <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10">
        <div><span className="section-kicker">{t({en:'From the embassy',fr:'L’ambassade vous informe'})}</span><h2 id="news-heading" className="font-serif text-4xl sm:text-5xl text-[#173B56] mt-3">{t({en:'News & notices',fr:'Actualités et avis'})}</h2></div>
        <p className="max-w-sm text-sm leading-relaxed text-[#536273]">{t({en:'Consular information and updates from the diplomatic mission in Windhoek.',fr:'Informations consulaires et nouvelles de la mission diplomatique à Windhoek.'})}</p>
      </div>
      <div className="grid lg:grid-cols-[.8fr_1.3fr] gap-8 lg:gap-12 items-start">
        <aside className="embassy-bulletin p-7 sm:p-9" aria-labelledby="notice-heading">
          <div className="flex items-center gap-3 text-[#176FA6]"><Bell size={20}/><span className="font-condensed text-xs tracking-[.16em] uppercase font-bold">{t({en:'Consular notice',fr:'Avis consulaire'})}</span></div>
          <h3 id="notice-heading" className="font-serif text-3xl leading-tight text-[#173B56] mt-6">{t({en:'Before you visit',fr:'Avant votre visite'})}</h3>
          <p className="mt-5 text-[15px] leading-relaxed text-[#49667B]">{t(OFFICIAL_NOTICE.fullNotice)}</p>
          <div className="mt-7 pt-5 border-t border-sky-200 flex flex-wrap gap-5">
            {onOpenNoticeModal && <button onClick={onOpenNoticeModal} type="button" className="inline-flex gap-2 items-center text-sm font-semibold text-[#176FA6] hover:underline">{t({en:'Read full notice',fr:'Lire l’avis complet'})}<ArrowRight size={16}/></button>}
            <a href="#contact" className="text-sm font-semibold text-[#176FA6] hover:underline">{t({en:'Contact & directions',fr:'Coordonnées et accès'})}</a>
          </div>
        </aside>
        <div>
          <div className="flex gap-3 items-start bg-[#F3F8FC] border border-sky-100 p-4 mb-2 text-[#49667B]"><FileText size={18} className="shrink-0 mt-0.5"/><p className="text-sm leading-relaxed"><strong className="text-[#173B56]">{t({en:'Sample news',fr:'Exemples d’actualités'})}.</strong> {t({en:'The stories below are demonstration content, not verified embassy announcements.',fr:'Les articles ci-dessous sont des exemples et non des communiqués vérifiés de l’ambassade.'})}</p></div>
          {NEWS_STORIES.map(article=><article key={article.id} className="news-bulletin-row py-6 sm:py-7 border-b border-slate-200">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs"><span className="text-[#176FA6] font-semibold">{t(article.category)}</span><span className="text-[#64788A]">{t(article.date)}</span><span className="sample-label">{t({en:'Sample',fr:'Exemple'})}</span></div>
            <h3 className="font-serif text-2xl leading-snug mt-3"><button type="button" onClick={()=>onSelectArticle(article)} className="text-left text-[#173B56] hover:text-[#176FA6] transition-colors">{t(article.headline)}</button></h3>
            <p className="text-sm leading-relaxed text-[#536273] mt-3">{t(article.excerpt)}</p>
            <button type="button" onClick={()=>onSelectArticle(article)} className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-[#176FA6] hover:underline" aria-label={t({en:'Read sample: ',fr:'Lire l’exemple : '})+t(article.headline)}>{t({en:'Read sample story',fr:'Lire l’article exemple'})}<ArrowRight size={15}/></button>
          </article>)}
        </div>
      </div>
    </div>
  </section>;
};
