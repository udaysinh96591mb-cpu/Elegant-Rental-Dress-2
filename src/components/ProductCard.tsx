import React from 'react';
import { MessageCircle, Eye, Star, Heart } from 'lucide-react';
import { Outfit } from '../types';
import { formatINR, getOutfitWhatsAppUrl } from '../utils/helpers';

interface ProductCardProps {
  outfit: Outfit;
  onQuickView: (outfit: Outfit) => void;
  isSaved?: boolean;
  onToggleSave?: (id: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  outfit,
  onQuickView,
  isSaved = false,
  onToggleSave,
}) => {
  const savingsPercent = Math.round(
    ((outfit.originalPrice - outfit.rentalPrice) / outfit.originalPrice) * 100
  );

  return (
    <div className="group relative bg-[#FFFDF9] rounded-2xl overflow-hidden border border-[#E7E0D8] hover:border-[#D4AF37]/60 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
      {/* Image Showcase */}
      <div
        className="relative aspect-[3/4] overflow-hidden bg-[#F5EFEB] cursor-pointer"
        onClick={() => onQuickView(outfit)}
      >
        <img
          src={outfit.images[0]}
          alt={outfit.name}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />

        {/* Shimmer gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 sm:p-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(outfit);
            }}
            className="w-full py-2 sm:py-2.5 bg-white/95 backdrop-blur-md text-[#1C1917] rounded-xl text-[11px] sm:text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-[#D4AF37] hover:text-white transition-colors shadow-md"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick View</span>
          </button>
        </div>

        {/* Badges on top left */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 z-10">
          {outfit.trending && (
            <span className="bg-[#854D0E] text-[#FAF7F2] text-[9px] sm:text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md shadow-xs">
              Trending
            </span>
          )}
          {outfit.isNew && (
            <span className="bg-[#B45309] text-white text-[9px] sm:text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md shadow-xs">
              New
            </span>
          )}
        </div>

        {/* Code & Wishlist icon on top right */}
        <div className="absolute top-2.5 right-2.5 flex items-center gap-1 z-10">
          <span className="bg-[#1C1917]/80 backdrop-blur-xs text-[#FAF7F2] text-[9px] font-mono font-medium px-1.5 py-0.5 rounded hidden sm:inline">
            {outfit.code}
          </span>
          {onToggleSave && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleSave(outfit.id);
              }}
              aria-label="Save to wishlist"
              className="p-1.5 rounded-full bg-white/90 backdrop-blur-xs hover:bg-white text-[#78716C] hover:text-[#E11D48] active:scale-90 transition-all shadow-xs"
            >
              <Heart className={`w-3.5 h-3.5 ${isSaved ? 'fill-[#E11D48] text-[#E11D48]' : ''}`} />
            </button>
          )}
        </div>

        {/* Save Percentage Badge */}
        <div className="absolute bottom-2.5 left-2.5 z-10">
          <span className="bg-[#25D366] text-white text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs">
            Save {savingsPercent}%
          </span>
        </div>
      </div>

      {/* Outfit Info */}
      <div className="p-3 sm:p-4.5 flex flex-col flex-grow justify-between space-y-2.5">
        <div>
          {/* Category & Occasion */}
          <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-[#78716C] mb-1">
            <span className="font-semibold text-[#854D0E] uppercase tracking-wider truncate max-w-[65%]">
              {outfit.style}
            </span>
            <div className="flex items-center gap-0.5 text-[#B45309] font-bold text-[10px] sm:text-[11px]">
              <Star className="w-3 h-3 fill-[#B45309]" />
              <span>{outfit.rating}</span>
            </div>
          </div>

          {/* Outfit Name */}
          <h3
            onClick={() => onQuickView(outfit)}
            className="font-cinzel text-xs sm:text-base font-bold text-[#1C1917] group-hover:text-[#854D0E] transition-colors line-clamp-1 cursor-pointer"
          >
            {outfit.name}
          </h3>

          {/* Occasion Tags (Hidden on very narrow 2-col cards for cleaner look) */}
          <div className="flex flex-wrap gap-1 mt-1 mb-1.5">
            {outfit.occasion.slice(0, 2).map((occ) => (
              <span
                key={occ}
                className="text-[9px] sm:text-[10px] bg-[#FCE7EC]/70 text-[#854D0E] px-1.5 py-0.5 rounded truncate"
              >
                {occ}
              </span>
            ))}
          </div>
        </div>

        {/* Pricing and Action */}
        <div className="pt-2 border-t border-[#F5EFEB] space-y-2">
          <div className="flex items-baseline justify-between">
            <div>
              <span className="text-[10px] text-[#78716C]">Rent </span>
              <span className="font-cinzel text-sm sm:text-lg font-bold text-[#1C1917]">
                {formatINR(outfit.rentalPrice)}
              </span>
              <span className="text-[9px] sm:text-[11px] text-[#78716C]"> / 3d</span>
            </div>
            <div className="text-[10px] sm:text-[11px] text-[#A8A29E] line-through">
              {formatINR(outfit.originalPrice)}
            </div>
          </div>

          {/* WhatsApp Direct Enquiry Button */}
          <a
            href={getOutfitWhatsAppUrl(outfit.name, outfit.code)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1faa4f] hover:shadow-lg active:scale-[0.96] text-white py-2.5 sm:py-2.5 min-h-[44px] rounded-xl text-xs font-bold uppercase tracking-wider shadow-sm transition-all touch-manipulation group/wa"
          >
            <MessageCircle className="w-4 h-4 fill-white shrink-0 group-hover/wa:rotate-12 transition-transform" />
            <span className="truncate">Book on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
