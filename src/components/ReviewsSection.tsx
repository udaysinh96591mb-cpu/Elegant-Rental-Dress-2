import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles, CheckCircle2 } from 'lucide-react';
import { REVIEWS_DATA } from '../data/reviewsData';

export const ReviewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS_DATA.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + REVIEWS_DATA.length) % REVIEWS_DATA.length);
  };

  const activeReview = REVIEWS_DATA[currentIndex];

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-[#FAF7F2] border-t border-[#E7E0D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FCE7EC] text-[#854D0E] text-[11px] font-semibold tracking-widest uppercase mb-3">
            <Sparkles className="w-3 h-3 text-[#D4AF37]" />
            <span>Real Jaipur Client Stories</span>
          </div>

          <h2 className="font-cinzel text-2xl sm:text-4xl font-bold tracking-tight text-[#1C1917] uppercase mb-3">
            WHAT OUR CLIENTS SAY
          </h2>
          <p className="text-sm sm:text-base text-[#78716C] font-cormorant text-lg sm:text-xl italic">
            Over 350+ happy brides, bridesmaids, and fashion lovers in Jaipur.
          </p>
          <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mt-4" />
        </div>

        {/* Featured Testimonial Slider Card */}
        <div className="max-w-4xl mx-auto bg-[#FFFDF9] rounded-3xl border border-[#D4AF37]/30 shadow-lg p-6 sm:p-10 relative overflow-hidden mb-12">
          
          <Quote className="absolute top-6 right-6 w-16 h-16 text-[#D4AF37]/15 pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
            {/* Avatar & Location */}
            <div className="flex flex-col items-center text-center shrink-0">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-[#D4AF37] p-1 shadow-sm mb-3">
                <img
                  src={activeReview.avatar}
                  alt={activeReview.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="font-cinzel text-base font-bold text-[#1C1917]">
                {activeReview.name}
              </h3>
              <span className="text-xs text-[#78716C]">{activeReview.location}</span>
              <div className="flex items-center gap-1 text-[11px] text-emerald-700 font-medium mt-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                <span>Verified Client</span>
              </div>
            </div>

            {/* Quote & Details */}
            <div className="space-y-4 text-center md:text-left flex-grow">
              <div className="flex items-center justify-center md:justify-start gap-1 text-[#D4AF37]">
                {[...Array(activeReview.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
                <span className="text-xs text-[#78716C] font-semibold ml-2">
                  5.0 Rating • {activeReview.date}
                </span>
              </div>

              <p className="text-sm sm:text-base text-[#44403C] leading-relaxed italic font-cormorant text-xl">
                “{activeReview.review}”
              </p>

              <div className="inline-block bg-[#FDF2F4] text-[#854D0E] text-xs font-semibold px-3 py-1 rounded-full border border-[#D4AF37]/30">
                Outfit: {activeReview.outfitWorn}
              </div>
            </div>
          </div>

          {/* Slider Controls */}
          <div className="flex items-center justify-between pt-6 mt-6 border-t border-[#F5EFEB]">
            <div className="flex gap-1.5">
              {REVIEWS_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to review ${idx + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    currentIndex === idx ? 'w-6 bg-[#854D0E]' : 'w-2 bg-[#E7E0D8]'
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prevReview}
                aria-label="Previous review"
                className="p-2 rounded-full border border-[#E7E0D8] text-[#57534E] hover:border-[#D4AF37] hover:bg-[#FAF7F2] transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextReview}
                aria-label="Next review"
                className="p-2 rounded-full border border-[#E7E0D8] text-[#57534E] hover:border-[#D4AF37] hover:bg-[#FAF7F2] transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 3 Secondary Review Snippet Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS_DATA.slice(1, 4).map((rev) => (
            <div
              key={rev.id}
              className="bg-[#FFFDF9] rounded-2xl p-6 border border-[#E7E0D8] shadow-2xs hover:shadow-sm transition-all"
            >
              <div className="flex items-center gap-1 text-[#D4AF37] mb-2">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-[#57534E] line-clamp-3 mb-4 leading-relaxed">
                “{rev.review}”
              </p>
              <div className="flex items-center gap-3 pt-3 border-t border-[#F5EFEB]">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div>
                  <span className="text-xs font-bold text-[#1C1917] block">
                    {rev.name}
                  </span>
                  <span className="text-[10px] text-[#78716C]">{rev.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
