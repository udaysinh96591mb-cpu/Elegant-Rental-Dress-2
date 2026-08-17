import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/helpers';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How does the security deposit work and when is it refunded?',
      a: 'We take a nominal security deposit (typically ₹1,500 to ₹3,000 depending on the outfit). The full deposit is refunded immediately upon return of the outfit once basic fabric inspection is completed.'
    },
    {
      q: 'Can I visit your showroom in Jagatpura, Jaipur for a trial?',
      a: 'Yes, absolutely! We encourage you to visit our boutique at Shop F-1&2 Khatushyam Plaza, Near Turtle School, Jagatpura, Jaipur. You can try multiple lehengas, gowns, and party wear pieces before reserving your date.'
    },
    {
      q: 'Are custom alterations and fitting included in the rental price?',
      a: 'Yes! All alterations for bust, waist, and length hemming are provided completely free of charge by our in-house master tailor so you get a bespoke fit for your big day.'
    },
    {
      q: 'How long is the standard rental period?',
      a: 'Our standard rental duration is 3 Days (Day 1: Pickup / Delivery, Day 2: Your Event Day, Day 3: Return). Need more days for destination weddings or outstation functions? Extended 5 to 7 days rentals are available upon request.'
    },
    {
      q: 'Do I need to dry-clean the outfit before returning it?',
      a: 'No! We handle 100% of the dry cleaning, steam sanitization, and care. You simply enjoy your event and return the outfit as-is.'
    },
    {
      q: 'How early should I book my wedding or engagement outfit?',
      a: 'We recommend booking 2 to 6 weeks in advance for peak wedding seasons (October to March) to secure your favorite bridal pieces before other brides reserve the same dates.'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FAF7F2] border-t border-[#E7E0D8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FCE7EC] text-[#854D0E] text-[11px] font-semibold tracking-widest uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Got Questions?</span>
          </div>

          <h2 className="font-cinzel text-2xl sm:text-4xl font-bold tracking-tight text-[#1C1917] uppercase mb-3">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-sm sm:text-base text-[#78716C]">
            Everything you need to know about renting designer outfits in Jaipur.
          </p>
          <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mt-4" />
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3.5 mb-10">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-[#FFFDF9] rounded-2xl border border-[#E7E0D8] overflow-hidden transition-all shadow-2xs hover:border-[#D4AF37]"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full px-6 py-4 sm:py-5 flex items-center justify-between text-left gap-4 focus:outline-none"
                >
                  <span className="font-cinzel text-sm sm:text-base font-bold text-[#1C1917]">
                    {faq.q}
                  </span>
                  <div className={`p-1 rounded-full bg-[#FAF7F2] text-[#854D0E] transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#FDF2F4]' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#57534E] leading-relaxed border-t border-[#F5EFEB]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions */}
        <div className="bg-[#FAF5EE] border border-[#E7E0D8] rounded-2xl p-6 text-center space-y-3">
          <p className="text-xs sm:text-sm font-semibold text-[#1C1917]">
            Have a custom inquiry or special outfit requirement?
          </p>
          <a
            href={getWhatsAppUrl('Hi Elegant Rental Dress! I have a question about outfit rental terms.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1faa4f] text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Ask Us on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
