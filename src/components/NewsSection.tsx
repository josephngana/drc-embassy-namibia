import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { NEWS_STORIES, NewsArticle, OFFICIAL_NOTICE } from '../data/embassyData';

interface NewsSectionProps {
  onSelectArticle: (article: NewsArticle) => void;
  onOpenNoticeModal?: () => void;
}

export const NewsSection: React.FC<NewsSectionProps> = ({
  onSelectArticle,
  onOpenNoticeModal,
}) => {
  const { t } = useLanguage();

  const featured = NEWS_STORIES.find((a) => a.featured) || NEWS_STORIES[0];
  const sideArticles = NEWS_STORIES.filter((a) => a.id !== featured.id);

  // Neutral, high-level diplomatic summit and chancery photography (strictly no unrelated foreign politicians)
  const articleImages: Record<string, string> = {
    'tshisekedi-cooperation':
      'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&w=1200&q=80',
    'ambassador-mirco':
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    'consular-advisory':
      'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
  };

  return (
    <section
      id="news"
      aria-label="Latest News and Official Communications"
      className="py-24 sm:py-28 lg:py-32 bg-[#F8F7F3] border-b border-slate-200/70"
    >
      {/* Slightly increased content width: max-w-[1380px] */}
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Editorial Section Heading */}
        <div className="space-y-3">
          <span className="font-condensed text-xs font-bold tracking-[0.2em] uppercase text-[#C89A3D] block">
            {t({ en: 'OFFICIAL COMMUNICATIONS', fr: 'COMMUNICATIONS OFFICIELLES' })}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-medium text-[#071A2F] tracking-tight leading-tight">
            <span className="block">{t({ en: 'LATEST NEWS', fr: 'ACTUALITÉS' })}</span>
            <span className="block text-[#C89A3D]">
              {t({ en: '& OFFICIAL COMMUNICATIONS', fr: '& COMMUNIQUÉS OFFICIELS' })}
            </span>
          </h2>
        </div>

        {/* Magazine-Style Editorial Layout: 60% Featured (7 cols) / 40% Secondary (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Featured Article ~60% */}
          <article
            onClick={() => onSelectArticle(featured)}
            className="lg:col-span-7 bg-white border border-slate-200/90 hover:border-[#C89A3D]/70 transition-all duration-300 cursor-pointer group flex flex-col justify-between overflow-hidden shadow-xs"
          >
            <div>
              <div className="relative aspect-[16/10] overflow-hidden bg-[#071A2F]">
                <img
                  src={articleImages[featured.id] || articleImages['tshisekedi-cooperation']}
                  alt={t(featured.headline)}
                  className="w-full h-full object-cover filter brightness-95 group-hover:scale-102 transition-transform duration-700"
                />

                {/* Prototype Content Badge */}
                <div className="absolute top-4 left-4 bg-[#071A2F]/90 backdrop-blur-xs px-3 py-1 border border-[#C89A3D]/40">
                  <span className="font-condensed text-[10px] tracking-widest uppercase text-[#C89A3D] font-bold">
                    {t({ en: 'PROTOTYPE DISPATCH', fr: 'COMMUNIQUÉ PROTOTYPE' })}
                  </span>
                </div>
              </div>

              <div className="p-7 sm:p-9 space-y-4">
                <div className="flex items-center gap-3 text-xs font-condensed">
                  <span className="font-bold tracking-widest uppercase text-[#1478C8]">
                    {t(featured.category)}
                  </span>
                  <span className="text-slate-400">·</span>
                  <span className="text-[#536273] tracking-wide">{t(featured.date)}</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#071A2F] group-hover:text-[#1478C8] transition-colors leading-snug">
                  {t(featured.headline)}
                </h3>

                <p className="font-sans text-[15px] sm:text-base text-[#536273] font-light leading-[1.75]">
                  {t(featured.excerpt)}
                </p>
              </div>
            </div>

            <div className="px-7 sm:px-9 pb-7 sm:pb-9 pt-2">
              <span className="inline-flex items-center text-xs font-condensed font-bold tracking-wider uppercase text-[#071A2F] group-hover:text-[#1478C8] transition-colors">
                {t({ en: 'Read more →', fr: 'Lire la suite →' })}
              </span>
            </div>
          </article>

          {/* 2 Smaller Articles ~40% */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {sideArticles.map((article) => (
              <article
                key={article.id}
                onClick={() => onSelectArticle(article)}
                className="bg-white border border-slate-200/90 hover:border-[#C89A3D]/70 transition-all duration-300 cursor-pointer group flex flex-col sm:flex-row lg:flex-col overflow-hidden shadow-xs"
              >
                <div className="relative sm:w-2/5 lg:w-full aspect-[16/9] overflow-hidden bg-[#071A2F] shrink-0">
                  <img
                    src={articleImages[article.id] || articleImages['ambassador-mirco']}
                    alt={t(article.headline)}
                    className="w-full h-full object-cover filter brightness-95 group-hover:scale-102 transition-transform duration-700"
                  />

                  {/* Prototype Content Badge */}
                  <div className="absolute top-3 left-3 bg-[#071A2F]/90 backdrop-blur-xs px-2.5 py-0.5 border border-[#C89A3D]/40">
                    <span className="font-condensed text-[9px] tracking-widest uppercase text-[#C89A3D] font-semibold">
                      {t({ en: 'PROTOTYPE', fr: 'PROTOTYPE' })}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-condensed">
                      <span className="font-bold tracking-widest uppercase text-[#1478C8]">
                        {t(article.category)}
                      </span>
                      <span className="text-slate-400">·</span>
                      <span className="text-[#536273]">{t(article.date)}</span>
                    </div>

                    <h4 className="font-serif text-lg sm:text-xl font-medium text-[#071A2F] group-hover:text-[#1478C8] transition-colors leading-snug">
                      {t(article.headline)}
                    </h4>

                    <p className="font-sans text-sm text-[#536273] font-light leading-relaxed line-clamp-2">
                      {t(article.excerpt)}
                    </p>
                  </div>

                  <div className="pt-2">
                    <span className="inline-flex items-center text-xs font-condensed font-bold tracking-wider uppercase text-[#071A2F] group-hover:text-[#1478C8] transition-colors">
                      {t({ en: 'Read more →', fr: 'Lire la suite →' })}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Small Separate Official Notice Text Block */}
        <aside
          aria-label="Official Chancery Notice"
          className="border-l-2 border-[#C89A3D] bg-white p-7 sm:p-8 border border-slate-200/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs"
        >
          <div className="space-y-1.5">
            <span className="font-condensed text-[11px] font-bold tracking-widest uppercase text-[#C89A3D]">
              {t({ en: 'OFFICIAL NOTICE', fr: 'AVIS OFFICIEL' })}
            </span>
            <p className="font-serif text-lg sm:text-xl text-[#071A2F]">
              {t(OFFICIAL_NOTICE.headline)}
            </p>
            <p className="font-sans text-sm text-[#536273] font-light leading-relaxed max-w-3xl">
              {t(OFFICIAL_NOTICE.fullNotice)}
            </p>
          </div>

          {onOpenNoticeModal && (
            <button
              type="button"
              onClick={onOpenNoticeModal}
              className="font-condensed text-xs font-bold tracking-wider uppercase text-[#071A2F] hover:text-[#C89A3D] transition-colors whitespace-nowrap cursor-pointer shrink-0"
            >
              {t({ en: 'View full notice →', fr: 'Voir l’avis complet →' })}
            </button>
          )}
        </aside>
      </div>
    </section>
  );
};
