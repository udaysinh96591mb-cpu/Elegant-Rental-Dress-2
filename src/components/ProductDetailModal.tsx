import React, { useState } from 'react';
import {
  X,
  MessageCircle,
  Sparkles,
  ShieldCheck,
  Scissors,
  CheckCircle2,
  Calendar,
  CalendarDays,
  Truck,
  Heart,
  Share2,
  Phone,
  Info,
  MapPin
} from 'lucide-react';
import { Outfit } from '../types';
import { formatINR, getOutfitWhatsAppUrl, DISPLAY_PHONE } from '../utils/helpers';

interface ProductDetailModalProps {
  outfit: Outfit | null;
  onClose: () => void;
  onOpenAppointment: () => void;
  isSaved?: boolean;
  onToggleSave?: (id: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  outfit,
  onClose,
  onOpenAppointment,
  isSaved = false,
  onToggleSave,
}) => {
  if (!outfit) return null;

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(outfit.sizes[0]);
  const [eventDate, setEventDate] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);

  const savingsAmount = outfit.originalPrice - outfit.rentalPrice;
  const savingsPercent = Math.round((savingsAmount / outfit.originalPrice) * 100);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${outfit.name} - Elegant Rental Dress Jaipur`,
        text: `Rent ${outfit.name} for ${formatINR(outfit.rentalPrice)} at Elegant Rental Dress Jaipur`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const whatsappBookingUrl = getOutfitWhatsAppUrl(
    outfit.name,
    outfit.code,
    eventDate ? eventDate : undefined,
    selectedSize
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-6 animate-fadeIn">
      {/* Modal Card */}
      <div className="relative w-full max-w-5xl bg-[#FAF7F2] rounded-t-3xl sm:rounded-3xl shadow-2xl border border-[#D4AF37]/40 overflow-hidden flex flex-col max-h-[90vh] sm:max-h-[92vh]">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#1C1917] text-[#FAF7F2] border-b border-[#44403C]/50">
          <div className="flex items-center gap-2">
            <span className="bg-[#854D0E] text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded">
              {outfit.code}
            </span>
            <span className="text-xs text-[#E5C378] font-cinzel font-semibold tracking-wider uppercase">
              {outfit.category.replace('_', ' ')} Collection
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              aria-label="Share outfit"
              className="p-2 text-[#D6D3D1] hover:text-white hover:bg-[#292524] rounded-full transition-colors"
            >
              <Share2 className="w-4 h-4" />
            </button>

            {onToggleSave && (
              <button
                onClick={() => onToggleSave(outfit.id)}
                aria-label="Save outfit"
                className="p-2 text-[#D6D3D1] hover:text-[#E11D48] hover:bg-[#292524] rounded-full transition-colors"
              >
                <Heart className={`w-4 h-4 ${isSaved ? 'fill-[#E11D48] text-[#E11D48]' : ''}`} />
              </button>
            )}

            <button
              onClick={onClose}
              id="close-product-detail-modal-btn"
              aria-label="Close modal"
              className="p-2 text-[#D6D3D1] hover:text-white hover:bg-[#292524] rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: Photos Carousel / Thumbnails (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#F5EFEB] border border-[#E7E0D8] shadow-sm">
              <img
                src={outfit.images[selectedImageIndex] || outfit.images[0]}
                alt={outfit.name}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-3 left-3 bg-[#1C1917]/80 backdrop-blur-md text-[#FAF7F2] text-[10px] px-2.5 py-1 rounded-full font-medium">
                Photo {selectedImageIndex + 1} of {outfit.images.length}
              </div>
            </div>

            {/* Thumbnail Selectors */}
            {outfit.images.length > 1 && (
              <div className="flex gap-2.5 overflow-x-auto pb-1 no-scrollbar">
                {outfit.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`relative w-16 h-20 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                      selectedImageIndex === idx
                        ? 'border-[#D4AF37] scale-105 shadow-sm'
                        : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Jagatpura Showroom Badge */}
            <div className="bg-[#FFFDF9] border border-[#E7E0D8] rounded-xl p-3.5 flex items-start gap-3 text-xs text-[#57534E]">
              <MapPin className="w-4 h-4 text-[#854D0E] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-[#1C1917]">Available for Live Trial</span>
                <p className="text-[11px] text-[#78716C]">
                  Shop F-1&2, Khatushyam Plaza, Jagatpura, Jaipur.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Details & Booking Actions (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            
            <div>
              {/* Occasions & Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="bg-[#FCE7EC] text-[#854D0E] text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded">
                  {outfit.style}
                </span>
                {outfit.occasion.map((occ) => (
                  <span
                    key={occ}
                    className="bg-[#FAF7F2] border border-[#E7E0D8] text-[#57534E] text-[10px] px-2 py-0.5 rounded"
                  >
                    {occ}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h2 className="font-cinzel text-xl sm:text-2xl lg:text-3xl font-bold text-[#1C1917] mb-3">
                {outfit.name}
              </h2>

              {/* Pricing Box */}
              <div className="bg-[#FFFDF9] rounded-2xl border border-[#E7E0D8] p-4 sm:p-5 mb-5 shadow-xs">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1.5">
                  <div className="flex items-baseline gap-2">
                    <span className="font-cinzel text-2xl sm:text-3xl font-bold text-[#854D0E]">
                      {formatINR(outfit.rentalPrice)}
                    </span>
                    <span className="text-xs text-[#78716C]">
                      / {outfit.duration} Rental
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs text-[#A8A29E] line-through">
                      Retail: {formatINR(outfit.originalPrice)}
                    </span>
                    <span className="bg-[#25D366] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                      Save {savingsPercent}% ({formatINR(savingsAmount)})
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] text-[#78716C] pt-2 border-t border-[#F5EFEB]">
                  <span>Refundable Security Deposit: <strong>{formatINR(outfit.depositAmount)}</strong></span>
                  <span className="text-emerald-700 font-medium">✓ 100% Refundable on Return</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed mb-4">
                {outfit.description}
              </p>

              {/* Fabric & Work Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5 text-xs bg-[#FAF5EE] p-3.5 rounded-xl border border-[#E7E0D8]">
                <div>
                  <span className="font-bold text-[#1C1917] block mb-0.5">Fabric & Dupatta:</span>
                  <span className="text-[#57534E]">{outfit.fabric}</span>
                </div>
                <div>
                  <span className="font-bold text-[#1C1917] block mb-0.5">Artisanal Embroidery:</span>
                  <span className="text-[#57534E]">{outfit.workDetails}</span>
                </div>
              </div>

              {/* Size Selector */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#1C1917]">
                    Select Your Size:
                  </label>
                  <button
                    onClick={onOpenAppointment}
                    className="text-[11px] text-[#854D0E] hover:underline font-medium"
                  >
                    Custom fitting available in-store
                  </button>
                </div>

                <div className="flex flex-wrap gap-2">
                  {outfit.sizes.map((size) => {
                    const isSelected = selectedSize === size;
                    return (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`text-xs px-3.5 py-2 rounded-xl border font-semibold transition-all ${
                          isSelected
                            ? 'bg-[#1C1917] text-[#FAF7F2] border-[#1C1917] shadow-sm'
                            : 'bg-white text-[#44403C] border-[#E7E0D8] hover:border-[#D4AF37]'
                        }`}
                      >
                        {size}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Event Date Picker (Optional to pre-fill WhatsApp) */}
              <div className="mb-5">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1C1917] mb-1.5">
                  Your Event / Wedding Date (Optional):
                </label>
                <div className="relative">
                  <CalendarDays className="w-4 h-4 text-[#78716C] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-xl bg-white border border-[#E7E0D8] text-xs text-[#1C1917] focus:border-[#D4AF37] outline-none"
                  />
                </div>
              </div>

              {/* Inclusions Checklist */}
              <div className="mb-6 space-y-1.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#78716C] block">
                  Included with Your Rental:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {outfit.inclusions.map((inc, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs text-[#57534E]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-[#E7E0D8] space-y-2.5">
              <a
                href={whatsappBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="modal-book-whatsapp-btn"
                className="w-full flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1faa4f] text-white py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>BOOK THIS OUTFIT ON WHATSAPP</span>
              </a>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    onClose();
                    onOpenAppointment();
                  }}
                  className="flex-1 py-3 rounded-full border border-[#D4AF37] text-[#854D0E] hover:bg-[#FDF2F4] text-xs font-bold uppercase tracking-wider bg-white transition-colors"
                >
                  Schedule Trial at Showroom
                </button>

                <a
                  href={`tel:${DISPLAY_PHONE.replace(/\s+/g, '')}`}
                  className="px-5 py-3 rounded-full bg-[#1C1917] hover:bg-[#292524] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Us</span>
                </a>
              </div>

              {copiedLink && (
                <p className="text-center text-xs text-emerald-600 font-medium">
                  ✓ Link copied to clipboard!
                </p>
              )}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
