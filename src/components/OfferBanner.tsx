import React from 'react';
import { Sparkles, ArrowRight, MessageCircle, Gift } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/helpers';

interface OfferBannerProps {
  onExploreClick: () => void;
}

export const OfferBanner: React.FC<OfferBannerProps> = ({ onExploreClick }) => {
  return (
    <section className="py-12 sm:py-16 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#FDF2F4] via-[#FCE7EC] to-[#F9E5EA] border-2 border-[#D4AF37]/50 shadow-xl p-8 sm:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Background Decorative Gold Motifs */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-gradient-to-br from-[#D4AF37]/20 to-transparent rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-gradient-to-tr from-[#E11D48]/10 to-transparent rounded-full blur-2xl pointer-events-none" />

          {/* Left Text Block */}
          <div className="relative z-10 space-y-4 text-center md:text-left max-w-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#D4AF37]/40 text-[#854D0E] text-xs font-bold uppercase tracking-widest shadow-2xs">
              <Gift className="w-3.5 h-3.5 text-[#E11D48]" />
              <span>Special Wedding Season Offer</span>
            </div>

            <h2 className="font-cinzel text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C1917] uppercase leading-tight">
              YOUR DREAM LOOK, <br />
              <span className="text-[#854D0E]">WITHOUT THE DREAM PRICE</span>
            </h2>

            <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
              Rent designer fashion for your special occasion. Book 2 or more looks (Bridal + Sangeet or Sister of the Bride) and receive a <strong>Flat ₹500 Instant Discount</strong> + Free Custom Tailoring!
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
              <button
                onClick={onExploreClick}
                className="px-7 py-3 rounded-full bg-[#1C1917] hover:bg-[#292524] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
              >
                VIEW COLLECTION
              </button>

              <a
                href={getWhatsAppUrl('Hi Elegant Rental Dress! I would like to claim the Wedding Season Flat ₹500 OFF offer for my upcoming event.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-7 py-3 rounded-full bg-[#25D366] hover:bg-[#1faa4f] text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Claim on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Image Frame with Model */}
          <div className="relative z-10 shrink-0 w-64 sm:w-72 md:w-80 aspect-[3/4] rounded-2xl overflow-hidden border-2 border-white shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=800&auto=format&fit=crop"
              alt="Special Bridal Offer Elegant Rental Dress Jaipur"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-3 inset-x-3 bg-white/95 backdrop-blur-md p-2.5 rounded-xl text-center text-[#1C1917]">
              <span className="font-cinzel text-xs font-bold text-[#854D0E] block">
                JAIPUR BRIDAL SPECIAL
              </span>
              <span className="text-[10px] text-[#78716C]">Rentals starting from ₹1,999</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
