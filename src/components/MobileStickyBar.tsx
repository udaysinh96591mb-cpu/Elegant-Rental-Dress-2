import React from 'react';
import { Home, Sparkles, Wand2, Heart, MessageCircle, Phone, Compass } from 'lucide-react';
import { DISPLAY_PHONE, getWhatsAppUrl } from '../utils/helpers';

interface MobileStickyBarProps {
  onScrollToTop?: () => void;
  onExploreClick?: () => void;
  onOpenQuiz?: () => void;
  onOpenMoodboard?: () => void;
  savedCount?: number;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({
  onScrollToTop,
  onExploreClick,
  onOpenQuiz,
  onOpenMoodboard,
  savedCount = 0
}) => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-white/95 backdrop-blur-xl border-t border-[#E7E0D8] px-2 pt-2 pb-safe shadow-[0_-8px_30px_rgba(0,0,0,0.12)]">
      <div className="flex items-center justify-around max-w-md mx-auto">
        
        {/* 1. Home Button */}
        <button
          onClick={onScrollToTop || (() => window.scrollTo({ top: 0, behavior: 'smooth' }))}
          className="flex flex-col items-center justify-center min-w-[56px] py-1.5 px-2 rounded-2xl text-[#78716C] active:text-[#854D0E] active:bg-[#FCE7EC]/50 active:scale-95 transition-all touch-manipulation group"
        >
          <Home className="w-5 h-5 group-hover:text-[#1C1917]" />
          <span className="text-[10px] font-semibold tracking-tight mt-0.5">Home</span>
        </button>

        {/* 2. Explore / Collection */}
        <button
          onClick={onExploreClick}
          className="flex flex-col items-center justify-center min-w-[56px] py-1.5 px-2 rounded-2xl text-[#78716C] active:text-[#854D0E] active:bg-[#FCE7EC]/50 active:scale-95 transition-all touch-manipulation group"
        >
          <Compass className="w-5 h-5 group-hover:text-[#1C1917]" />
          <span className="text-[10px] font-semibold tracking-tight mt-0.5">Catalog</span>
        </button>

        {/* 3. Center Highlight: Style Match Quiz */}
        <button
          onClick={onOpenQuiz}
          className="relative -top-4 flex flex-col items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-[#D4AF37] via-[#E5C378] to-[#C59E3F] text-[#1C1917] shadow-xl border-4 border-[#FAF7F2] active:scale-90 transition-transform touch-manipulation"
          aria-label="Find Outfit with AI Quiz"
        >
          <Wand2 className="w-5 h-5 fill-current" />
          <span className="sr-only">Style Quiz</span>
        </button>

        {/* 4. Moodboard / Wishlist */}
        <button
          onClick={onOpenMoodboard}
          className="relative flex flex-col items-center justify-center min-w-[56px] py-1.5 px-2 rounded-2xl text-[#78716C] active:text-[#E11D48] active:bg-[#FDF2F4] active:scale-95 transition-all touch-manipulation group"
        >
          <Heart className={`w-5 h-5 ${savedCount > 0 ? 'fill-[#E11D48] text-[#E11D48]' : 'group-hover:text-[#1C1917]'}`} />
          <span className="text-[10px] font-semibold tracking-tight mt-0.5">Saved</span>
          {savedCount > 0 && (
            <span className="absolute top-0 right-2 bg-[#E11D48] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
              {savedCount}
            </span>
          )}
        </button>

        {/* 5. WhatsApp Instant Booking */}
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center min-w-[56px] py-1.5 px-2 rounded-2xl text-[#25D366] active:bg-emerald-50 active:scale-95 transition-all touch-manipulation group"
        >
          <div className="relative">
            <MessageCircle className="w-5 h-5 fill-[#25D366] text-[#25D366]" />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          </div>
          <span className="text-[10px] font-bold text-[#1C1917] tracking-tight mt-0.5">Chat</span>
        </a>

      </div>
    </div>
  );
};
