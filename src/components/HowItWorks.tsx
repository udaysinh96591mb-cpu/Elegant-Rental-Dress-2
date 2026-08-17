import React from 'react';
import { Eye, MessageCircle, CalendarCheck, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/helpers';

interface HowItWorksProps {
  onOpenAppointment: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenAppointment }) => {
  const steps = [
    {
      num: '01',
      title: 'CHOOSE YOUR LOOK',
      desc: 'Browse our designer rental collection online or visit our Jagatpura studio and select your favourite outfit.',
      icon: Eye,
      detail: 'View 100+ designer bridal lehengas, gowns & party sets.'
    },
    {
      num: '02',
      title: 'BOOK & TRY',
      desc: 'Contact us on WhatsApp and schedule your visit or trial. We provide free custom alterations for your perfect fit.',
      icon: MessageCircle,
      detail: 'In-house tailor ensures exact waist, bust & length fit.'
    },
    {
      num: '03',
      title: 'WEAR & RETURN',
      desc: 'Wear your outfit for your special occasion and return it after use. We handle all dry-cleaning & sanitization!',
      icon: CalendarCheck,
      detail: 'Zero dry cleaning hassle. Immediate deposit refund upon return.'
    }
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-[#FAF5EE] border-t border-[#E7E0D8] relative overflow-hidden">
      {/* Subtle gold ornamental accents */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FCE7EC] text-[#854D0E] text-[11px] font-semibold tracking-widest uppercase mb-3">
            <Sparkles className="w-3 h-3 text-[#D4AF37]" />
            <span>Simple 3-Step Process</span>
          </div>
          <h2 className="font-cinzel text-2xl sm:text-4xl font-bold tracking-tight text-[#1C1917] uppercase mb-3">
            HOW RENTAL WORKS
          </h2>
          <p className="text-sm sm:text-base text-[#78716C]">
            Rent high-end designer outfits for weddings and events in 3 effortless steps.
          </p>
          <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mt-4" />
        </div>

        {/* 3 Step Cards with connecting line on desktop */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 mb-14">
          {/* Connecting Line between cards on desktop */}
          <div className="hidden md:block absolute top-1/4 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-[#D4AF37]/20 via-[#D4AF37] to-[#D4AF37]/20 z-0" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative z-10 flex flex-col items-center text-center bg-[#FFFDF9] rounded-2xl p-8 border border-[#E7E0D8] shadow-sm hover:shadow-md hover:border-[#D4AF37]/50 transition-all duration-300 group"
              >
                {/* Step Number badge */}
                <div className="absolute -top-4 bg-[#854D0E] text-[#FAF7F2] font-cinzel text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  STEP {step.num}
                </div>

                {/* Elegant Circular Icon */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FDF2F4] to-[#FCE7EC] border-2 border-[#D4AF37] flex items-center justify-center mb-6 mt-2 group-hover:scale-110 transition-transform shadow-xs">
                  <Icon className="w-7 h-7 text-[#854D0E]" strokeWidth={1.5} />
                </div>

                {/* Step Title */}
                <h3 className="font-cinzel text-base font-bold tracking-wider text-[#1C1917] uppercase mb-3">
                  {step.num} — {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed mb-4">
                  {step.desc}
                </p>

                {/* Feature highlight */}
                <div className="mt-auto pt-3 border-t border-[#F5EFEB] w-full text-[11px] text-[#854D0E] font-medium flex items-center justify-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>{step.detail}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action strip */}
        <div className="bg-[#1C1917] rounded-2xl p-6 sm:p-8 text-[#FAF7F2] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-[#D4AF37]/30">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-cinzel text-lg sm:text-xl font-bold text-[#E5C378]">
              Ready for a Showroom Trial in Jagatpura?
            </h4>
            <p className="text-xs sm:text-sm text-[#A8A29E]">
              Visit our boutique to try multiple designer styles before booking.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenAppointment}
              className="px-6 py-2.5 rounded-full border border-[#D4AF37] text-[#E5C378] hover:bg-[#D4AF37] hover:text-[#1C1917] text-xs font-bold uppercase tracking-wider transition-all"
            >
              Book Showroom Visit
            </button>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1faa4f] text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Instant WhatsApp Inquiry</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
