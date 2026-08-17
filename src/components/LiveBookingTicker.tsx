import React, { useState, useEffect } from 'react';
import { Sparkles, X, MapPin, CheckCircle2, Heart } from 'lucide-react';
import { Outfit } from '../types';
import { OUTFITS } from '../data/outfitsData';

interface LiveBookingTickerProps {
  onSelectOutfit: (outfit: Outfit) => void;
}

const RECENT_ACTIVITIES = [
  {
    name: 'Priya Sharma',
    city: 'Vaishali Nagar, Jaipur',
    action: 'reserved',
    outfitId: 'erd-01',
    timeAgo: '4 mins ago',
    icon: '👰'
  },
  {
    name: 'Anjali Meena',
    city: 'Jagatpura, Jaipur',
    action: 'booked a trial for Saturday for',
    outfitId: 'erd-04',
    timeAgo: '12 mins ago',
    icon: '✨'
  },
  {
    name: 'Kritika Rathore',
    city: 'Malviya Nagar, Jaipur',
    action: 'rented',
    outfitId: 'erd-02',
    timeAgo: '28 mins ago',
    icon: '👑'
  },
  {
    name: 'Divya Soni',
    city: 'Mansarovar, Jaipur',
    action: 'claimed ₹500 OFF for',
    outfitId: 'erd-03',
    timeAgo: '42 mins ago',
    icon: '🎁'
  },
  {
    name: 'Pooja Agarwal',
    city: 'C-Scheme, Jaipur',
    action: 'reserved',
    outfitId: 'erd-07',
    timeAgo: '1 hour ago',
    icon: '💃'
  }
];

export const LiveBookingTicker: React.FC<LiveBookingTickerProps> = ({ onSelectOutfit }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    // Show initial after 3.5 seconds
    const initialTimer = setTimeout(() => {
      setVisible(true);
    }, 3500);

    // Loop interval
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentIdx((prev) => (prev + 1) % RECENT_ACTIVITIES.length);
        setVisible(true);
      }, 600);
    }, 8500);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [dismissed]);

  if (dismissed) return null;

  const currentActivity = RECENT_ACTIVITIES[currentIdx];
  const matchedOutfit = OUTFITS.find((o) => o.id === currentActivity.outfitId) || OUTFITS[0];

  return (
    <div
      className={`fixed bottom-20 lg:bottom-6 left-4 z-30 hidden sm:block max-w-xs sm:max-w-sm transition-all duration-500 ease-out transform ${
        visible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-6 opacity-0 scale-95 pointer-events-none'
      }`}
    >
      <div className="bg-[#1C1917]/95 backdrop-blur-md text-white rounded-2xl border border-[#D4AF37]/50 p-3.5 shadow-2xl flex items-center gap-3 relative overflow-hidden group">
        
        {/* Glow accent */}
        <div className="absolute top-0 left-0 w-1 h-full bg-[#D4AF37]" />

        {/* Outfit Thumbnail */}
        <div
          onClick={() => onSelectOutfit(matchedOutfit)}
          className="w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-white/20 relative cursor-pointer hover:opacity-90"
        >
          <img
            src={matchedOutfit.images[0]}
            alt={matchedOutfit.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text details */}
        <div className="flex-1 min-w-0 pr-4 text-left">
          <div className="flex items-center gap-1 text-[10px] text-[#E5C378] font-bold uppercase tracking-wider">
            <span>{currentActivity.icon}</span>
            <span>{currentActivity.name}</span>
            <span className="text-white/40">• {currentActivity.timeAgo}</span>
          </div>

          <p className="text-xs text-[#FAF7F2] truncate font-medium mt-0.5">
            {currentActivity.action} <span className="text-[#D4AF37] font-semibold">{matchedOutfit.name}</span>
          </p>

          <div className="flex items-center gap-1 text-[9px] text-[#A8A29E] mt-0.5">
            <MapPin className="w-2.5 h-2.5 text-[#D4AF37]" />
            <span className="truncate">{currentActivity.city}</span>
          </div>
        </div>

        {/* Dismiss Button */}
        <button
          onClick={() => setDismissed(true)}
          aria-label="Dismiss booking notification"
          className="absolute top-2 right-2 text-white/40 hover:text-white p-1 rounded-full"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
