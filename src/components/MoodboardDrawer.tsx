import React from 'react';
import { X, Sparkles, Heart, Trash2, MessageCircle, ArrowRight, Share2 } from 'lucide-react';
import { Outfit } from '../types';
import { OUTFITS } from '../data/outfitsData';
import { formatINR, getWhatsAppUrl } from '../utils/helpers';

interface MoodboardDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedOutfitIds: string[];
  onToggleSave: (id: string) => void;
  onSelectOutfit: (outfit: Outfit) => void;
  onExploreMore: () => void;
}

export const MoodboardDrawer: React.FC<MoodboardDrawerProps> = ({
  isOpen,
  onClose,
  savedOutfitIds,
  onToggleSave,
  onSelectOutfit,
  onExploreMore
}) => {
  if (!isOpen) return null;

  const savedOutfits = OUTFITS.filter((o) => savedOutfitIds.includes(o.id));
  const totalRent = savedOutfits.reduce((sum, o) => sum + o.rentalPrice, 0);
  const totalRetail = savedOutfits.reduce((sum, o) => sum + o.originalPrice, 0);
  const totalSaved = totalRetail - totalRent;

  const handleShareWhatsApp = () => {
    const outfitNames = savedOutfits.map((o) => `• ${o.name} (${formatINR(o.rentalPrice)}/3d)`).join('\n');
    const msg = `Hi Elegant Rental Dress! Here is my shortlisted Jaipur Wedding Moodboard:\n\n${outfitNames}\n\nTotal Estimated Rental: ${formatINR(totalRent)}\nI would like to check availability for my event dates!`;
    window.open(getWhatsAppUrl(msg), '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/75 backdrop-blur-sm flex justify-end animate-fadeIn">
      <div className="w-full max-w-md bg-[#FFFDF9] text-[#1C1917] h-full shadow-2xl flex flex-col justify-between border-l border-[#D4AF37]/50 animate-slideLeft">
        
        {/* Header */}
        <div className="p-5 bg-[#1C1917] text-white flex items-center justify-between border-b border-[#44403C]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#E11D48]/20 border border-[#E11D48] flex items-center justify-center">
              <Heart className="w-4 h-4 fill-[#E11D48] text-[#E11D48]" />
            </div>
            <div>
              <h3 className="font-cinzel text-base font-bold">My Bridal Moodboard</h3>
              <span className="text-[11px] text-[#E5C378]">
                {savedOutfits.length} Outfits Shortlisted
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Moodboard"
            className="p-1.5 text-white/60 hover:text-white rounded-full bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Saved Outfits List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {savedOutfits.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <div className="w-16 h-16 rounded-full bg-[#FAF5EE] border border-[#E7E0D8] flex items-center justify-center mx-auto text-[#A8A29E]">
                <Heart className="w-7 h-7" />
              </div>
              <h4 className="font-cinzel text-sm font-bold text-[#1C1917]">
                Your Moodboard is Empty
              </h4>
              <p className="text-xs text-[#78716C] max-w-xs mx-auto">
                Tap the heart (♡) icon on any bridal lehenga, gown, or party dress to create your custom wedding lookbook!
              </p>
              <button
                onClick={() => {
                  onClose();
                  onExploreMore();
                }}
                className="mt-2 px-6 py-2.5 rounded-full bg-[#1C1917] text-white text-xs font-bold uppercase tracking-wider"
              >
                Browse Collection
              </button>
            </div>
          ) : (
            <>
              {/* Savings Summary Banner */}
              <div className="bg-gradient-to-r from-[#FDF2F4] to-[#FFFDF9] border border-[#D4AF37]/40 rounded-2xl p-4 space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#78716C]">Retail Purchase Value:</span>
                  <span className="font-semibold text-[#1C1917] line-through">{formatINR(totalRetail)}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#854D0E] font-bold">Total 3-Day Rental:</span>
                  <span className="font-cinzel text-base font-bold text-[#854D0E]">{formatINR(totalRent)}</span>
                </div>
                <div className="text-[11px] text-emerald-700 font-bold pt-1 border-t border-[#F5EFEB] flex items-center justify-between">
                  <span>🎉 Your Total Savings:</span>
                  <span>{formatINR(totalSaved)} (Save ~{Math.round((totalSaved / (totalRetail || 1)) * 100)}%)</span>
                </div>
              </div>

              {/* Items */}
              <div className="space-y-3">
                {savedOutfits.map((outfit) => (
                  <div
                    key={outfit.id}
                    className="bg-[#FAF7F2] rounded-2xl p-3 border border-[#E7E0D8] flex items-center gap-3.5 relative group"
                  >
                    <img
                      src={outfit.images[0]}
                      alt={outfit.name}
                      onClick={() => {
                        onClose();
                        onSelectOutfit(outfit);
                      }}
                      className="w-16 h-20 rounded-xl object-cover cursor-pointer hover:opacity-90 shrink-0"
                    />

                    <div className="flex-1 min-w-0">
                      <h4
                        onClick={() => {
                          onClose();
                          onSelectOutfit(outfit);
                        }}
                        className="font-cinzel text-xs font-bold text-[#1C1917] truncate cursor-pointer hover:text-[#854D0E]"
                      >
                        {outfit.name}
                      </h4>
                      <div className="text-[11px] text-[#78716C] mt-0.5">
                        {outfit.category.replace('_', ' ')} • {outfit.fabric.split(' ')[0]}
                      </div>
                      <div className="font-cinzel text-xs font-bold text-[#854D0E] mt-1">
                        {formatINR(outfit.rentalPrice)} <span className="text-[10px] text-[#78716C] font-normal">/ 3 days</span>
                      </div>
                    </div>

                    <button
                      onClick={() => onToggleSave(outfit.id)}
                      aria-label="Remove from moodboard"
                      className="p-2 text-[#A8A29E] hover:text-[#E11D48] transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Footer Actions */}
        {savedOutfits.length > 0 && (
          <div className="p-5 bg-white border-t border-[#E7E0D8] space-y-2.5">
            <button
              onClick={handleShareWhatsApp}
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1faa4f] text-white py-3.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Send Moodboard to Stylist on WhatsApp</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onExploreMore();
              }}
              className="w-full text-center text-xs font-bold text-[#57534E] hover:text-[#1C1917] py-1"
            >
              Add More Outfits →
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
