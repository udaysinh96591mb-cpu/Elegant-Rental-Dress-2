import React, { useState, useRef } from 'react';
import { X, Sparkles, Gift, Trophy, ArrowRight, MessageCircle, PartyPopper } from 'lucide-react';
import confetti from 'canvas-confetti';
import { getWhatsAppUrl } from '../utils/helpers';

interface SpinWheelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PRIZES = [
  { text: 'Flat ₹500 OFF', code: 'ERD500', color: '#D4AF37', textCol: '#1C1917' },
  { text: 'Free Matching Potli', code: 'FREEPOTLI', color: '#1C1917', textCol: '#FAF7F2' },
  { text: 'Free Express Fitting', code: 'FREEFITTING', color: '#854D0E', textCol: '#FAF7F2' },
  { text: 'Flat ₹300 OFF', code: 'ERD300', color: '#D4AF37', textCol: '#1C1917' },
  { text: '20% OFF 2nd Look', code: 'DOUBLELOOK', color: '#1C1917', textCol: '#FAF7F2' },
  { text: 'Free Styling Trial', code: 'VIPSTYLING', color: '#854D0E', textCol: '#FAF7F2' }
];

export const SpinWheelModal: React.FC<SpinWheelModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [spinning, setSpinning] = useState(false);
  const [wonPrize, setWonPrize] = useState<{ text: string; code: string } | null>(null);
  const [rotation, setRotation] = useState(0);

  const handleSpin = () => {
    if (spinning || wonPrize) return;

    setSpinning(true);
    // Pick a random prize index (0 to 5)
    const prizeIndex = Math.floor(Math.random() * PRIZES.length);
    const selected = PRIZES[prizeIndex];

    // Segment size is 360 / 6 = 60 degrees.
    // To land on prizeIndex, the arrow at the top (270 deg / 90 deg) points to it.
    const segmentAngle = 360 / PRIZES.length;
    const extraSpins = 5 * 360; // 5 full revolutions
    const targetAngle = extraSpins + (360 - (prizeIndex * segmentAngle + segmentAngle / 2));

    setRotation(targetAngle);

    setTimeout(() => {
      setSpinning(false);
      setWonPrize(selected);

      // Trigger Confetti explosion
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {}
    }, 4500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div className="relative w-full max-w-md bg-gradient-to-b from-[#1C1917] via-[#292524] to-[#1C1917] rounded-3xl shadow-2xl border-2 border-[#D4AF37]/60 overflow-hidden text-white p-6 sm:p-8 text-center my-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Spin Wheel"
          className="absolute top-4 right-4 z-20 p-2 text-white/70 hover:text-white bg-white/10 rounded-full"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Header */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/50 text-[#E5C378] text-[11px] font-bold tracking-widest uppercase mb-2">
          <Gift className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Wedding Season Lucky Wheel</span>
        </div>

        <h3 className="font-cinzel text-xl sm:text-2xl font-bold uppercase text-[#FAF7F2] mb-1">
          SPIN TO WIN YOUR DISCOUNT
        </h3>
        <p className="text-xs text-[#D6D3D1] mb-6">
          Spin the wheel to unlock exclusive bridal rental deals & gifts!
        </p>

        {/* Wheel Container */}
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 mx-auto mb-6 flex items-center justify-center">
          
          {/* Outer Gold Pointer Needle at Top */}
          <div className="absolute -top-3 z-30 flex flex-col items-center">
            <div className="w-5 h-7 bg-[#E11D48] clip-triangle shadow-lg border border-white" style={{ clipPath: 'polygon(50% 100%, 0 0, 100% 0)' }} />
          </div>

          {/* Outer Glowing Ring */}
          <div className="absolute inset-0 rounded-full border-4 border-[#D4AF37] shadow-[0_0_25px_rgba(212,175,55,0.4)] pointer-events-none z-10" />

          {/* The Spinning Wheel */}
          <div
            className="w-full h-full rounded-full overflow-hidden transition-transform duration-[4500ms] ease-out border-2 border-white/20 relative shadow-inner"
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            {PRIZES.map((prize, idx) => {
              const rotateAngle = idx * 60;
              return (
                <div
                  key={idx}
                  className="absolute top-0 left-0 w-full h-full"
                  style={{
                    transform: `rotate(${rotateAngle}deg)`,
                    transformOrigin: '50% 50%'
                  }}
                >
                  {/* Slice shape */}
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-36 origin-bottom"
                    style={{
                      backgroundColor: prize.color,
                      clipPath: 'polygon(0 0, 100% 0, 50% 100%)'
                    }}
                  >
                    <span
                      className="block text-[10px] sm:text-[11px] font-bold font-cinzel text-center pt-3 tracking-wider"
                      style={{ color: prize.textCol }}
                    >
                      {prize.text}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Center Spin Button / Hub */}
          <button
            onClick={handleSpin}
            disabled={spinning || !!wonPrize}
            className={`absolute z-20 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#D4AF37] via-[#F3E5AB] to-[#C59E3F] text-[#1C1917] font-cinzel font-bold text-xs sm:text-sm uppercase tracking-wider shadow-2xl border-4 border-[#1C1917] flex flex-col items-center justify-center transition-all ${
              spinning ? 'animate-pulse' : 'hover:scale-105 active:scale-95'
            }`}
          >
            {spinning ? 'SPINNING...' : wonPrize ? 'WON!' : 'SPIN NOW'}
          </button>
        </div>

        {/* Result Win Box */}
        {wonPrize ? (
          <div className="bg-[#FAF7F2] text-[#1C1917] p-5 rounded-2xl border-2 border-[#D4AF37] animate-bounce-short space-y-3">
            <div className="flex items-center justify-center gap-1 text-[#854D0E] font-bold text-xs uppercase tracking-wider">
              <PartyPopper className="w-4 h-4 text-[#E11D48]" />
              <span>Congratulations! You Won</span>
            </div>

            <div className="font-cinzel text-xl font-bold text-[#854D0E]">
              {wonPrize.text}
            </div>

            <div className="bg-[#1C1917] text-[#E5C378] py-1.5 px-4 rounded-xl text-xs font-mono font-bold tracking-widest inline-block border border-[#D4AF37]/50">
              Coupon Code: {wonPrize.code}
            </div>

            <p className="text-[11px] text-[#57534E]">
              Show this code when booking on WhatsApp to claim your reward!
            </p>

            <a
              href={getWhatsAppUrl(`Hi Elegant Rental Dress! I just spun the lucky wheel and won "${wonPrize.text}" (Code: ${wonPrize.code}). I would like to redeem it for my outfit rental!`)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1faa4f] text-white py-3 rounded-full text-xs font-bold uppercase tracking-wider shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Claim Coupon on WhatsApp</span>
            </a>
          </div>
        ) : (
          <p className="text-[11px] text-[#A8A29E]">
            💡 100% Guaranteed reward on every spin for Jaipur rentals!
          </p>
        )}

      </div>
    </div>
  );
};
