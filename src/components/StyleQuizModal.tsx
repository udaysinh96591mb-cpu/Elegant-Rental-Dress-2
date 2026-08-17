import React, { useState } from 'react';
import { X, Sparkles, Wand2, Check, ArrowRight, RotateCcw, MessageCircle, Heart, Star } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Outfit } from '../types';
import { OUTFITS } from '../data/outfitsData';
import { formatINR, getOutfitWhatsAppUrl, getWhatsAppUrl } from '../utils/helpers';

interface StyleQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectOutfit: (outfit: Outfit) => void;
}

export const StyleQuizModal: React.FC<StyleQuizModalProps> = ({
  isOpen,
  onClose,
  onSelectOutfit
}) => {
  if (!isOpen) return null;

  const [step, setStep] = useState(1);
  const [role, setRole] = useState<'bride' | 'sister' | 'guest' | 'party'>('bride');
  const [colorVibe, setColorVibe] = useState<'red' | 'pastel' | 'dark' | 'gold'>('red');
  const [budget, setBudget] = useState<'budget' | 'mid' | 'luxury'>('mid');
  const [matchedOutfits, setMatchedOutfits] = useState<Outfit[]>([]);

  const handleFinishQuiz = () => {
    // Score & match outfits
    let filtered = OUTFITS.filter((o) => {
      if (role === 'bride') return o.category === 'bridal' || o.occasion.includes('Wedding');
      if (role === 'sister') return o.category === 'engagement' || o.category === 'party';
      if (role === 'guest') return o.category === 'wedding_guest' || o.category === 'gown';
      return o.category === 'party' || o.category === 'gown';
    });

    if (filtered.length < 3) {
      filtered = OUTFITS;
    }

    setMatchedOutfits(filtered.slice(0, 3));
    setStep(4); // Results step

    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.5 }
      });
    } catch (e) {}
  };

  const handleReset = () => {
    setStep(1);
    setMatchedOutfits([]);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#FFFDF9] rounded-3xl shadow-2xl border border-[#D4AF37]/50 overflow-hidden my-auto text-[#1C1917]">
        
        {/* Top Header */}
        <div className="bg-[#1C1917] p-6 text-white flex items-center justify-between border-b border-[#44403C]">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#C59E3F] text-[#1C1917] flex items-center justify-center font-bold">
              <Wand2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[#E5C378] text-[10px] font-bold uppercase tracking-widest">
                AI Jaipur Wedding Stylist
              </div>
              <h3 className="font-cinzel text-lg sm:text-xl font-bold">
                Find Your Dream Outfit
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close quiz"
            className="p-1.5 text-white/70 hover:text-white bg-white/10 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-[#E7E0D8] h-1.5">
          <div
            className="bg-[#D4AF37] h-1.5 transition-all duration-300"
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          
          {/* STEP 1: Occasion / Role */}
          {step === 1 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="text-center max-w-md mx-auto">
                <span className="text-xs font-bold text-[#854D0E] uppercase tracking-wider block mb-1">
                  Step 1 of 3
                </span>
                <h4 className="font-cinzel text-xl sm:text-2xl font-bold text-[#1C1917]">
                  What is your role for the event?
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  { id: 'bride', label: 'The Bride', desc: 'Main Wedding / Pheras / Reception look', icon: '👰' },
                  { id: 'sister', label: 'Sister of the Bride / Groom', desc: 'Glamorous Sangeet & Engagement looks', icon: '💃' },
                  { id: 'guest', label: 'Wedding Guest / Family', desc: 'Classy Anarkalis, Sarees & Lehengas', icon: '✨' },
                  { id: 'party', label: 'Cocktail / Reception Party', desc: 'High-slit & Mermaid designer gowns', icon: '🥂' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setRole(item.id as any);
                      setStep(2);
                    }}
                    className={`p-4 rounded-2xl border text-left flex items-start gap-3.5 transition-all hover:scale-[1.02] ${
                      role === item.id
                        ? 'border-[#D4AF37] bg-[#FDF2F4] shadow-xs'
                        : 'border-[#E7E0D8] bg-[#FAF7F2] hover:border-[#D4AF37]'
                    }`}
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <div className="font-cinzel text-sm font-bold text-[#1C1917]">{item.label}</div>
                      <div className="text-[11px] text-[#78716C] mt-0.5">{item.desc}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: Color Palette */}
          {step === 2 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="text-center max-w-md mx-auto">
                <span className="text-xs font-bold text-[#854D0E] uppercase tracking-wider block mb-1">
                  Step 2 of 3
                </span>
                <h4 className="font-cinzel text-xl sm:text-2xl font-bold text-[#1C1917]">
                  What color vibe are you dreaming of?
                </h4>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
                {[
                  { id: 'red', label: 'Royal Red & Maroon', hex: 'bg-rose-800', desc: 'Traditional Heritage' },
                  { id: 'pastel', label: 'Blush Pink & Lilac', hex: 'bg-pink-300', desc: 'Modern Fairytale' },
                  { id: 'dark', label: 'Emerald & Midnight', hex: 'bg-emerald-900', desc: 'Regal Drama' },
                  { id: 'gold', label: 'Champagne Gold', hex: 'bg-amber-400', desc: 'Glitz & Shimmer' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setColorVibe(item.id as any);
                      setStep(3);
                    }}
                    className={`p-4 rounded-2xl border text-center flex flex-col items-center gap-2.5 transition-all hover:scale-[1.02] ${
                      colorVibe === item.id
                        ? 'border-[#D4AF37] bg-[#FDF2F4] shadow-xs'
                        : 'border-[#E7E0D8] bg-[#FAF7F2] hover:border-[#D4AF37]'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full ${item.hex} shadow-sm border border-white`} />
                    <div>
                      <div className="font-cinzel text-xs font-bold text-[#1C1917]">{item.label}</div>
                      <div className="text-[10px] text-[#78716C]">{item.desc}</div>
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex justify-between items-center pt-2">
                <button
                  onClick={() => setStep(1)}
                  className="text-xs font-semibold text-[#78716C] hover:text-[#1C1917]"
                >
                  ← Back
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Rental Budget */}
          {step === 3 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="text-center max-w-md mx-auto">
                <span className="text-xs font-bold text-[#854D0E] uppercase tracking-wider block mb-1">
                  Step 3 of 3
                </span>
                <h4 className="font-cinzel text-xl sm:text-2xl font-bold text-[#1C1917]">
                  What is your rental budget for 3 Days?
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                {[
                  { id: 'budget', label: 'Under ₹2,999', desc: 'Party Wear & Chic Gowns' },
                  { id: 'mid', label: '₹3,000 – ₹4,999', desc: 'Engagement & Sangeet Lehengas' },
                  { id: 'luxury', label: '₹5,000+', desc: 'Grand Heavy Bridal Couture' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setBudget(item.id as any);
                    }}
                    className={`p-5 rounded-2xl border text-center transition-all ${
                      budget === item.id
                        ? 'border-[#D4AF37] bg-[#FDF2F4] shadow-xs'
                        : 'border-[#E7E0D8] bg-[#FAF7F2] hover:border-[#D4AF37]'
                    }`}
                  >
                    <div className="font-cinzel text-sm font-bold text-[#1C1917]">{item.label}</div>
                    <div className="text-[11px] text-[#78716C] mt-1">{item.desc}</div>
                  </button>
                ))}
              </div>

              <div className="flex justify-between items-center pt-4">
                <button
                  onClick={() => setStep(2)}
                  className="text-xs font-semibold text-[#78716C] hover:text-[#1C1917]"
                >
                  ← Back
                </button>

                <button
                  onClick={handleFinishQuiz}
                  className="flex items-center gap-2 px-8 py-3 rounded-full bg-[#1C1917] hover:bg-[#292524] text-white text-xs font-bold uppercase tracking-wider shadow-md"
                >
                  <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                  <span>Reveal My Matches!</span>
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Results Showcase */}
          {step === 4 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="text-center">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold uppercase tracking-wider mb-2">
                  <Star className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
                  <span>98% Compatibility Found!</span>
                </div>
                <h4 className="font-cinzel text-xl sm:text-2xl font-bold text-[#1C1917]">
                  YOUR CURATED JAIPUR WEDDING LOOKS
                </h4>
                <p className="text-xs text-[#78716C]">
                  Handpicked outfits matching your style, occasion and budget.
                </p>
              </div>

              {/* 3 Matched Outfits Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {matchedOutfits.map((outfit) => (
                  <div
                    key={outfit.id}
                    className="bg-[#FAF7F2] rounded-2xl border border-[#E7E0D8] overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <img
                        src={outfit.images[0]}
                        alt={outfit.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-2 left-2 bg-[#1C1917]/85 text-[#E5C378] text-[9px] font-bold px-2 py-0.5 rounded-full">
                        {outfit.occasion[0]}
                      </div>
                    </div>

                    <div className="p-3.5 space-y-2">
                      <h5 className="font-cinzel text-xs font-bold text-[#1C1917] line-clamp-1">
                        {outfit.name}
                      </h5>
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-[#854D0E]">
                          {formatINR(outfit.rentalPrice)} <span className="text-[10px] text-[#78716C] font-normal">/ 3d</span>
                        </span>
                        <span className="text-[10px] text-emerald-700 font-semibold">
                          Save {Math.round(((outfit.originalPrice - outfit.rentalPrice) / outfit.originalPrice) * 100)}%
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 pt-1">
                        <button
                          onClick={() => {
                            onClose();
                            onSelectOutfit(outfit);
                          }}
                          className="flex-1 bg-[#1C1917] hover:bg-[#292524] text-white py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider text-center"
                        >
                          View Details
                        </button>

                        <a
                          href={getOutfitWhatsAppUrl(outfit.name, outfit.code)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 bg-[#25D366] text-white rounded-lg hover:bg-[#1faa4f]"
                        >
                          <MessageCircle className="w-3.5 h-3.5 fill-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Actions */}
              <div className="flex items-center justify-between pt-2 border-t border-[#E7E0D8]">
                <button
                  onClick={handleReset}
                  className="flex items-center gap-1 text-xs text-[#78716C] hover:text-[#1C1917] font-semibold"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake Style Quiz</span>
                </button>

                <a
                  href={getWhatsAppUrl(`Hi Elegant Rental Dress! I completed your Style Quiz and liked the recommendations. I want to book a showroom trial in Jagatpura!`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1faa4f] text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white" />
                  <span>Book Trial on WhatsApp</span>
                </a>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
