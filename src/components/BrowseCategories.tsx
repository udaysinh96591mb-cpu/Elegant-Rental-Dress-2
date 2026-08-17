import React from 'react';
import { ArrowRight, Sparkles, Heart } from 'lucide-react';
import { CATEGORIES_DATA } from '../data/outfitsData';

interface BrowseCategoriesProps {
  onSelectCategory: (categoryId: string) => void;
}

export const BrowseCategories: React.FC<BrowseCategoriesProps> = ({ onSelectCategory }) => {
  return (
    <section id="categories" className="py-16 sm:py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCE7EC] text-[#854D0E] text-[11px] font-bold tracking-widest uppercase mb-3 border border-[#D4AF37]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>INDIAN WEDDING & FESTIVE COUTURE</span>
          </div>
          <h2 className="font-cinzel text-2xl sm:text-4xl font-bold tracking-tight text-[#1C1917] uppercase mb-3">
            EXPLORE BY WEDDING CELEBRATION
          </h2>
          <p className="text-sm sm:text-base text-[#78716C] font-cormorant text-lg sm:text-xl italic">
            Handcrafted designer lehengas, bridal couture, reception gowns & sangeet outfits in Jagatpura, Jaipur.
          </p>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-4" />
        </div>

        {/* 5-Category Grid: Highly optimized for mobile/Android screens & tablets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
          {CATEGORIES_DATA.map((cat, idx) => {
            return (
              <div
                key={cat.id}
                id={`category-card-${cat.id}`}
                onClick={() => onSelectCategory(cat.id)}
                className="group relative overflow-hidden rounded-2xl cursor-pointer bg-[#181514] shadow-md hover:shadow-2xl active:scale-[0.98] transition-all duration-300 border border-[#E7E0D8] aspect-[4/5] sm:aspect-[3/4] md:min-h-[420px] flex flex-col justify-end"
              >
                {/* Background Indian Wedding Photo with Zoom */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={`${cat.name} - Authentic Indian Wedding Rental Wear`}
                    className="w-full h-full object-cover object-top group-hover:scale-108 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  {/* Luxury dark gradient for high legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#181514] via-[#181514]/50 to-transparent group-hover:via-[#181514]/30 transition-all duration-300" />
                  
                  {/* Subtle Gold Shimmer Border on Hover */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#D4AF37] rounded-2xl transition-all duration-300 pointer-events-none" />
                </div>

                {/* Price & Count Badge */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 z-10 flex items-center justify-between pointer-events-none">
                  <span className="bg-[#181514]/90 backdrop-blur-md text-[#E5C378] text-[10px] sm:text-[11px] font-bold tracking-wider uppercase px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-[#D4AF37]/50 shadow-sm">
                    Starting {cat.startingPrice}
                  </span>
                  <span className="bg-[#FAF7F2]/95 text-[#1C1917] text-[10px] sm:text-[11px] font-extrabold px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full shadow-sm">
                    {cat.count}
                  </span>
                </div>

                {/* Bottom Content Info */}
                <div className="relative p-4 sm:p-6 z-10 text-white flex flex-col justify-end">
                  <h3 className="font-cinzel text-lg sm:text-2xl font-bold tracking-wider uppercase text-[#FAF7F2] group-hover:text-[#E5C378] transition-colors mb-1 sm:mb-1.5 drop-shadow-sm">
                    {cat.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#E7E0D8] font-sans mb-3 sm:mb-4 font-normal leading-relaxed line-clamp-2">
                    {cat.tagline}
                  </p>

                  <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#E5C378] group-hover:text-white transition-colors pt-2 border-t border-[#44403C]/60">
                    <span>VIEW DESIGNS</span>
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transform group-hover:translate-x-1.5 transition-transform text-[#D4AF37]" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
