import React, { useState, useEffect } from 'react';
import { Sparkles, MessageCircle, ArrowRight, ShieldCheck, Scissors, HeartHandshake, Wand2, Gift, Play, Flame } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/helpers';

interface HeroProps {
  onExploreClick: () => void;
  onOpenAppointment: () => void;
  onOpenQuiz?: () => void;
  onOpenSpinWheel?: () => void;
}

const HERO_LOOKS = [
  {
    id: 'bridal',
    label: '👑 Royal Bridal',
    tag: 'Zardozi Lehengas',
    headline: 'ROYAL BRIDAL COUTURE',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1920&auto=format&fit=crop',
    price: 'From ₹4,999'
  },
  {
    id: 'gown',
    label: '💃 Red Carpet Gowns',
    tag: 'Cocktail & Receptions',
    headline: 'DESIGNER EVENING GOWNS',
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1920&auto=format&fit=crop',
    price: 'From ₹2,999'
  },
  {
    id: 'pastel',
    label: '🌸 Pastel Fairytale',
    tag: 'Sangeet & Engagement',
    headline: '3D FLORAL PASTEL LEHENGAS',
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=1920&auto=format&fit=crop',
    price: 'From ₹3,499'
  }
];

export const Hero: React.FC<HeroProps> = ({
  onExploreClick,
  onOpenAppointment,
  onOpenQuiz,
  onOpenSpinWheel
}) => {
  const [activeLookIdx, setActiveLookIdx] = useState(0);
  const activeLook = HERO_LOOKS[activeLookIdx];

  // Auto switch looks every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveLookIdx((prev) => (prev + 1) % HERO_LOOKS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#181514] text-[#FAF7F2]">
      
      {/* Dynamic Background Image with Smooth Crossfade */}
      <div className="absolute inset-0 z-0">
        {HERO_LOOKS.map((look, idx) => (
          <img
            key={look.id}
            src={look.image}
            alt={look.headline}
            className={`absolute inset-0 w-full h-full object-cover object-center lg:object-[center_25%] transition-opacity duration-1000 ease-in-out ${
              activeLookIdx === idx ? 'opacity-40 scale-105' : 'opacity-0 scale-100'
            }`}
          />
        ))}
        {/* Soft luxury vignettes and gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#181514] via-[#181514]/75 to-transparent" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#181514]/50 to-[#181514]/90" />
      </div>

      {/* Floating subtle ambient particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        <div className="absolute top-1/4 left-10 w-2 h-2 rounded-full bg-[#D4AF37] opacity-60 animate-ping" />
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 rounded-full bg-[#F5D0C5] opacity-50 animate-pulse" />
        <div className="absolute bottom-1/3 left-1/5 w-2 h-2 rounded-full bg-[#E5C378] opacity-40 animate-bounce" />
        <div className="absolute top-2/3 right-16 w-2 h-2 rounded-full bg-[#D4AF37] opacity-50 animate-ping" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-14 lg:py-16 text-center flex flex-col items-center justify-center w-full">
        
        {/* Interactive Mood Selector Tabs at the top of Hero */}
        <div className="w-full flex justify-center mb-3 sm:mb-5">
          <div className="inline-flex p-1 rounded-full bg-black/70 backdrop-blur-md border border-[#D4AF37]/50 max-w-full overflow-x-auto no-scrollbar shadow-md">
            {HERO_LOOKS.map((look, idx) => (
              <button
                key={look.id}
                onClick={() => setActiveLookIdx(idx)}
                className={`px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap touch-manipulation ${
                  activeLookIdx === idx
                    ? 'bg-gradient-to-r from-[#D4AF37] to-[#C59E3F] text-[#1C1917] shadow-md scale-100'
                    : 'text-[#D6D3D1] hover:text-white'
                }`}
              >
                {look.label}
              </button>
            ))}
          </div>
        </div>

        {/* Small traditional gold badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#D4AF37]/50 bg-[#1C1917]/90 backdrop-blur-md mb-2.5 sm:mb-4 animate-fadeIn shadow-sm">
          <Sparkles className="w-3 h-3 text-[#D4AF37]" />
          <span className="text-[9px] sm:text-[11px] font-semibold tracking-widest text-[#E5C378] uppercase font-cinzel">
            ELEGANT RENTAL DRESS • JAIPUR
          </span>
        </div>

        {/* Main Heading - Responsive & Auto-Fitted */}
        <div className="w-full max-w-2xl mx-auto mb-2 sm:mb-3">
          <span className="block font-cinzel text-xs sm:text-lg md:text-xl font-semibold tracking-widest text-[#F5D0C5] mb-0.5 uppercase">
            RENT YOUR DREAM
          </span>
          <h1 className="font-cinzel text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAF7F2] uppercase leading-tight drop-shadow-md break-words">
            <span className="text-gold-gradient">{activeLook.headline}</span>
          </h1>
        </div>

        {/* Supporting Tagline & Price */}
        <div className="inline-flex items-center gap-2 bg-[#292524]/80 backdrop-blur-sm border border-[#D4AF37]/30 px-3.5 py-1 rounded-full text-xs sm:text-sm md:text-base font-cinzel text-[#FAF7F2] mb-3">
          <span>Lehengas • Gowns • Party Wear</span>
          <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
          <span className="text-[#F3E5AB] font-bold">{activeLook.price}</span>
        </div>

        {/* Descriptive sentence */}
        <p className="max-w-xl text-[11px] sm:text-sm text-[#D6D3D1] mb-5 sm:mb-6 font-normal leading-relaxed px-2">
          Jaipur's premier designer bridal couture & party wear rental in Jagatpura. Look royal & regal on your special day at 90% less price!
        </p>

        {/* Primary and Interactive Feature Call-to-action buttons */}
        <div className="w-full max-w-sm sm:max-w-md mx-auto space-y-2 sm:space-y-0 sm:flex sm:items-center sm:justify-center sm:gap-3 mb-5 sm:mb-6">
          <button
            onClick={onExploreClick}
            id="hero-explore-collection-btn"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-[#D4AF37] via-[#FFF3D1] to-[#C59E3F] btn-shimmer animate-royal-glow hover:brightness-110 active:scale-95 text-[#1C1917] px-6 py-2.5 sm:py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all touch-manipulation min-h-[42px] relative overflow-hidden group cursor-pointer"
          >
            <span className="relative z-10 font-cinzel tracking-widest">EXPLORE COLLECTION</span>
            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="grid grid-cols-2 gap-2 w-full sm:w-auto">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-whatsapp-booking-btn"
              className="flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#1faa4f] animate-wa-pulse active:scale-95 text-white px-3 sm:px-5 py-2.5 sm:py-3 rounded-full font-bold text-xs uppercase tracking-wider shadow-md transition-all touch-manipulation min-h-[42px] cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white shrink-0 animate-bounce-short" />
              <span>WHATSAPP</span>
            </a>

            {onOpenSpinWheel && (
              <button
                onClick={onOpenSpinWheel}
                className="flex items-center justify-center gap-1.5 bg-gradient-to-r from-[#881337] via-[#BE123C] to-[#9F1239] animate-wiggle-periodic hover:brightness-110 active:scale-95 border border-[#FDA4AF]/50 text-white px-3 sm:px-5 py-2.5 sm:py-3 rounded-full font-bold text-xs uppercase tracking-wider shadow-md transition-all touch-manipulation min-h-[42px] cursor-pointer"
              >
                <Gift className="w-3.5 h-3.5 text-[#FECDD3] shrink-0" />
                <span className="font-cinzel">SPIN & WIN</span>
              </button>
            )}
          </div>
        </div>

        {/* Mini Traditional Trust Badges */}
        <div className="grid grid-cols-3 gap-1.5 sm:gap-4 w-full max-w-xl text-center pt-3 border-t border-[#44403C]/60">
          <div className="flex flex-col items-center justify-center gap-1 text-[9px] sm:text-xs text-[#E7E0D8] bg-[#292524]/60 p-1.5 sm:p-2.5 rounded-xl border border-[#44403C]/40 backdrop-blur-sm">
            <Scissors className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
            <span className="font-medium">Custom Fit</span>
          </div>

          <div className="flex flex-col items-center justify-center gap-1 text-[9px] sm:text-xs text-[#E7E0D8] bg-[#292524]/60 p-1.5 sm:p-2.5 rounded-xl border border-[#44403C]/40 backdrop-blur-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
            <span className="font-medium">Dry Cleaned</span>
          </div>

          <div className="flex flex-col items-center justify-center gap-1 text-[9px] sm:text-xs text-[#E7E0D8] bg-[#292524]/60 p-1.5 sm:p-2.5 rounded-xl border border-[#44403C]/40 backdrop-blur-sm">
            <HeartHandshake className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
            <span className="font-medium">90% Savings</span>
          </div>
        </div>

      </div>
    </section>
  );
};
