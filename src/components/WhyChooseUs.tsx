import React from 'react';
import { CheckCircle2, Sparkles, Crown, Wallet, ShieldCheck, Shirt, PartyPopper, MessageCircle, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/helpers';

interface WhyChooseUsProps {
  onDiscoverMore: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onDiscoverMore }) => {
  const benefits = [
    {
      title: 'Designer Rental Collection',
      desc: 'Exclusive handcrafted bridal lehengas, reception gowns, and festive dresses sourced from top artisans.',
      icon: Crown
    },
    {
      title: 'Affordable Pricing',
      desc: 'Wear ₹50,000 to ₹1,50,000 couture starting from just ₹1,999 to ₹5,999 with 100% transparent security deposits.',
      icon: Wallet
    },
    {
      title: 'Premium Quality & Hygiene',
      desc: 'Every garment undergoes medical-grade dry cleaning, steam sanitization, and strict fabric inspection.',
      icon: ShieldCheck
    },
    {
      title: 'Multiple Styles & Custom Sizes',
      desc: 'In-house master tailor adjustments for custom bust, waist, and height hemming included free with your booking.',
      icon: Shirt
    },
    {
      title: 'Perfect for Weddings & Parties',
      desc: 'Ideal for brides, sisters, bridesmaids, and wedding guests attending sangeet, cocktail, and haldi events.',
      icon: PartyPopper
    },
    {
      title: 'Easy WhatsApp Booking',
      desc: 'No complicated checkouts. Check real-time date availability, request video previews, and book on WhatsApp.',
      icon: MessageCircle
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FFFDF9] border-t border-[#E7E0D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FCE7EC] text-[#854D0E] text-[11px] font-semibold tracking-widest uppercase mb-3">
            <Sparkles className="w-3 h-3 text-[#D4AF37]" />
            <span>Jaipur’s Trusted Bridal Rental House</span>
          </div>

          <h2 className="font-cinzel text-2xl sm:text-4xl font-bold tracking-tight text-[#1C1917] uppercase mb-3">
            WHY CHOOSE ELEGANT RENTAL DRESS
          </h2>
          <p className="text-sm sm:text-base text-[#78716C] font-cormorant text-lg sm:text-xl">
            We redefine festive luxury by blending royal elegance with modern affordability.
          </p>
          <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mt-4" />
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#FAF7F2] rounded-2xl p-6 sm:p-7 border border-[#E7E0D8] hover:border-[#D4AF37] shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white border border-[#E7E0D8] group-hover:border-[#D4AF37] group-hover:bg-[#FDF2F4] flex items-center justify-center transition-colors shadow-2xs">
                      <Icon className="w-6 h-6 text-[#854D0E]" strokeWidth={1.5} />
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-[#25D366]" />
                  </div>

                  <h3 className="font-cinzel text-sm sm:text-base font-bold text-[#1C1917] uppercase mb-2 group-hover:text-[#854D0E] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Discover More & WhatsApp CTA */}
        <div className="text-center flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onDiscoverMore}
            className="inline-flex items-center gap-2 bg-[#1C1917] hover:bg-[#292524] text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-md"
          >
            <span>DISCOVER MORE</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1faa4f] text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-md"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Chat With Stylist</span>
          </a>
        </div>

      </div>
    </section>
  );
};
