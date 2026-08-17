import React from 'react';
import { Crown, BadgePercent, Sparkles, MessageCircleHeart } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const features = [
    {
      icon: Crown,
      title: 'DESIGNER COLLECTION',
      desc: 'Curated bridal lehengas, reception gowns & party wear.'
    },
    {
      icon: BadgePercent,
      title: 'AFFORDABLE RENTALS',
      desc: 'Wear luxury outfits starting from ₹1,999 for 3 days.'
    },
    {
      icon: Sparkles,
      title: 'PREMIUM QUALITY',
      desc: 'Handcrafted zardozi, custom fitting & sanitized care.'
    },
    {
      icon: MessageCircleHeart,
      title: 'EASY WHATSAPP BOOKING',
      desc: 'Instant availability check & showroom trials in Jaipur.'
    }
  ];

  return (
    <div className="bg-[#FFFDF9] border-y border-[#E7E0D8] py-6 sm:py-9">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-3.5 p-3 sm:p-4 rounded-xl bg-[#FAF7F2]/60 sm:bg-transparent border border-[#E7E0D8]/60 sm:border-0 hover:bg-[#FAF7F2] transition-colors group"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#FDF2F4] border border-[#D4AF37]/40 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-[#D4AF37] transition-all shadow-xs">
                  <Icon className="w-5 h-5 text-[#854D0E]" strokeWidth={1.5} />
                </div>
                <div className="space-y-0.5 sm:space-y-1">
                  <h3 className="font-cinzel text-[11px] sm:text-xs font-bold tracking-wider text-[#1C1917] uppercase">
                    {feat.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-[#78716C] leading-snug line-clamp-2 sm:line-clamp-none">
                    {feat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
