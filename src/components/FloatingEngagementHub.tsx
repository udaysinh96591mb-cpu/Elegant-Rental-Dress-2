import React from 'react';
import { Gift, Wand2, Heart } from 'lucide-react';

interface FloatingEngagementHubProps {
  onOpenSpinWheel: () => void;
  onOpenQuiz: () => void;
  onOpenMoodboard: () => void;
  savedCount: number;
}

export const FloatingEngagementHub: React.FC<FloatingEngagementHubProps> = ({
  onOpenSpinWheel,
  onOpenQuiz,
  onOpenMoodboard,
  savedCount
}) => {
  return (
    <div className="fixed right-3 sm:right-5 bottom-20 lg:bottom-8 z-30 hidden md:flex flex-col items-end gap-2.5">
      
      {/* 1. Spin & Win Lucky Wheel Floating Pill (Desktop secondary) */}
      <button
        onClick={onOpenSpinWheel}
        className="group flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C59E3F] text-[#1C1917] px-3 sm:px-4 py-2 sm:py-2.5 rounded-full shadow-xl border-2 border-white hover:scale-105 active:scale-95 transition-all duration-300 animate-bounce-short"
        aria-label="Spin lucky wheel for wedding discount"
      >
        <div className="w-6 h-6 rounded-full bg-[#1C1917] text-[#E5C378] flex items-center justify-center group-hover:rotate-45 transition-transform shrink-0">
          <Gift className="w-3.5 h-3.5" />
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider leading-none">
            Spin & Win!
          </span>
          <span className="text-[9px] text-[#44403C] font-semibold hidden sm:inline">
            Up to ₹500 OFF
          </span>
        </div>
      </button>

      {/* 2. AI Style Match Quiz Floating Pill (Desktop secondary) */}
      <button
        onClick={onOpenQuiz}
        className="flex items-center gap-2 bg-[#1C1917]/90 backdrop-blur-md hover:bg-[#1C1917] text-[#FAF7F2] px-3.5 py-2.5 rounded-full shadow-xl border border-[#D4AF37]/50 hover:scale-105 active:scale-95 transition-all duration-300"
        aria-label="Find Dream Outfit with Style Quiz"
      >
        <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#C59E3F] text-[#1C1917] flex items-center justify-center shrink-0">
          <Wand2 className="w-3.5 h-3.5" />
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#E5C378] leading-none">
            Style Matcher
          </span>
          <span className="text-[9px] text-[#A8A29E] font-medium">
            AI Outfit Quiz
          </span>
        </div>
      </button>

      {/* 3. Wishlist / Moodboard Floating Pill (Desktop secondary) */}
      <button
        onClick={onOpenMoodboard}
        className="flex items-center gap-2 bg-white/95 backdrop-blur-md hover:bg-white text-[#1C1917] px-3.5 py-2.5 rounded-full shadow-lg border border-[#E7E0D8] hover:border-[#E11D48] hover:scale-105 active:scale-95 transition-all duration-300 relative"
        aria-label="Open saved moodboard"
      >
        <div className="w-6 h-6 rounded-full bg-[#FDF2F4] text-[#E11D48] flex items-center justify-center shrink-0">
          <Heart className={`w-3.5 h-3.5 ${savedCount > 0 ? 'fill-[#E11D48]' : ''}`} />
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[10px] font-extrabold uppercase tracking-wider leading-none">
            Moodboard
          </span>
          <span className="text-[9px] text-[#78716C]">
            {savedCount} Saved
          </span>
        </div>
        {savedCount > 0 && (
          <span className="absolute -top-1 -left-1 bg-[#E11D48] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
            {savedCount}
          </span>
        )}
      </button>

    </div>
  );
};
