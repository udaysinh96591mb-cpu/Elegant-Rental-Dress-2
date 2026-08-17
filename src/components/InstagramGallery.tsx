import React, { useState } from 'react';
import { Instagram, Heart, MessageCircle, Sparkles, ExternalLink } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/reviewsData';
import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../utils/helpers';

export const InstagramGallery: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'bridal' | 'gown' | 'models' | 'clients'>('all');

  const filteredItems = filter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === filter);

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-[#FAF7F2] border-t border-[#E7E0D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FCE7EC] text-[#854D0E] text-[11px] font-semibold tracking-widest uppercase mb-3">
            <Instagram className="w-3.5 h-3.5 text-[#E1306C]" />
            <span>{INSTAGRAM_HANDLE}</span>
          </div>

          <h2 className="font-cinzel text-2xl sm:text-4xl font-bold tracking-tight text-[#1C1917] uppercase mb-3">
            THE ELEGANT LOOK
          </h2>
          <p className="text-sm sm:text-base text-[#78716C] font-cormorant text-lg sm:text-xl italic">
            Explore our latest collections, client looks and fashion inspiration in Jaipur.
          </p>
          <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mt-4" />
        </div>

        {/* Gallery Filter Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {[
            { id: 'all', label: 'All Photos' },
            { id: 'bridal', label: 'Bridal Lehengas' },
            { id: 'gown', label: 'Cocktail & Gowns' },
            { id: 'clients', label: 'Real Client Looks' },
            { id: 'models', label: 'Editorial Shoots' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`text-xs font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full transition-all whitespace-nowrap ${
                filter === tab.id
                  ? 'bg-[#1C1917] text-white shadow-sm'
                  : 'bg-white text-[#57534E] border border-[#E7E0D8] hover:border-[#D4AF37]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Masonry / Grid Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 mb-12">
          {filteredItems.map((item, idx) => (
            <a
              key={item.id}
              href={item.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden rounded-2xl bg-[#1C1917] shadow-xs hover:shadow-xl transition-all duration-300 ${
                idx % 5 === 0 ? 'aspect-[3/4] sm:row-span-1' : 'aspect-square'
              }`}
            >
              <img
                src={item.imageUrl}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Bottom Visible Label on Card */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-2.5 sm:p-3 pointer-events-none transition-opacity duration-200 group-hover:opacity-0">
                <p className="text-[11px] sm:text-xs font-semibold text-white font-cinzel truncate">
                  {item.title}
                </p>
                <span className="text-[9px] sm:text-[10px] text-[#F3E5AB] font-medium capitalize">
                  {item.category === 'bridal' ? '👑 Bridal Collection' : item.category === 'gown' ? '✨ Evening Gown' : item.category === 'clients' ? '💍 Real Bride' : '📸 Editorial'}
                </span>
              </div>

              {/* Instagram Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-white text-center">
                <Instagram className="w-6 h-6 text-[#F5D0C5] mb-2" />
                <p className="text-xs font-semibold font-cinzel line-clamp-2 mb-3">
                  {item.title}
                </p>

                <div className="flex items-center gap-4 text-xs font-medium text-[#FAF7F2]">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 fill-[#E11D48] text-[#E11D48]" />
                    {item.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3.5 h-3.5 fill-white text-white" />
                    {item.comments}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Instagram Follow CTA Card */}
        <div className="bg-gradient-to-r from-[#FFFDF9] via-[#FDF2F4] to-[#FFFDF9] rounded-2xl border border-[#D4AF37]/40 p-8 text-center max-w-2xl mx-auto shadow-sm">
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white flex items-center justify-center mx-auto mb-3 shadow-md">
            <Instagram className="w-6 h-6" />
          </div>
          <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#1C1917] uppercase mb-1">
            FOLLOW US ON INSTAGRAM
          </h3>
          <p className="text-xs sm:text-sm text-[#78716C] mb-5">
            Tag <strong className="text-[#854D0E]">@elegant_rentaldress</strong> on your big day for a feature on our page!
          </p>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="gallery-instagram-btn"
            className="inline-flex items-center gap-2 bg-[#1C1917] hover:bg-[#292524] text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
          >
            <span>Follow @elegant_rentaldress</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
