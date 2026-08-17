import React from 'react';
import {
  Sparkles,
  ArrowRight,
  MessageCircle,
  Phone,
  MapPin,
  Mail,
  Instagram,
  Heart
} from 'lucide-react';
import {
  DISPLAY_PHONE,
  STORE_ADDRESS,
  STORE_EMAIL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  getWhatsAppUrl
} from '../utils/helpers';

interface FooterProps {
  onExploreClick: () => void;
  onSelectCategory: (cat: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onExploreClick, onSelectCategory }) => {
  return (
    <footer className="bg-[#141211] text-[#FAF7F2] border-t border-[#332D29] relative overflow-hidden pb-16 lg:pb-0">
      
      {/* FINAL CTA BANNER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-12 mb-16 relative z-10">
        <div className="rounded-3xl bg-gradient-to-r from-[#292524] via-[#1C1917] to-[#292524] border-2 border-[#D4AF37]/60 p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#38312E] border border-[#D4AF37]/40 text-[#E5C378] text-[11px] font-bold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Jaipur’s Premier Rental Boutique</span>
          </div>

          <h2 className="font-cinzel text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FAF7F2] uppercase mb-3">
            READY TO FIND YOUR PERFECT LOOK?
          </h2>

          <p className="text-sm sm:text-base text-[#D6D3D1] font-cormorant text-lg sm:text-xl max-w-xl mx-auto mb-8">
            Your special occasion deserves an elegant outfit. Browse our collection or speak with our stylist on WhatsApp today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onExploreClick}
              id="footer-cta-explore-btn"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#C59E3F] hover:from-[#E5C378] hover:to-[#D4AF37] text-[#1C1917] font-bold text-xs uppercase tracking-widest shadow-lg transition-all"
            >
              EXPLORE COLLECTION
            </button>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              id="footer-cta-whatsapp-btn"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1faa4f] text-white px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-widest shadow-lg transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>BOOK ON WHATSAPP</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FDF2F4] via-[#FCE7EC] to-[#F8D2DB] border-2 border-[#D4AF37] flex items-center justify-center">
                <span className="font-cinzel text-xl font-bold text-[#854D0E]">
                  ERD
                </span>
              </div>
              <div>
                <span className="font-cinzel text-lg font-bold tracking-wider text-[#FAF7F2] uppercase block">
                  Elegant Rental Dress
                </span>
                <span className="text-[11px] text-[#A8A29E] tracking-widest uppercase">
                  Rent Your Dream Wedding Look
                </span>
              </div>
            </div>

            <p className="text-xs text-[#A8A29E] leading-relaxed max-w-sm">
              Jaipur's premier designer outfit rental destination in Jagatpura. Handcrafted bridal lehengas, reception gowns, and couture party wear on rent at affordable rates.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-[#292524] hover:bg-[#E1306C] text-[#FAF7F2] flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-[#292524] hover:bg-[#25D366] text-[#FAF7F2] flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={`tel:${DISPLAY_PHONE.replace(/\s+/g, '')}`}
                aria-label="Call"
                className="w-9 h-9 rounded-full bg-[#292524] hover:bg-[#D4AF37] hover:text-[#1C1917] text-[#FAF7F2] flex items-center justify-center transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-xs font-bold text-[#E5C378] uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-[#A8A29E]">
              <li><a href="#hero" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#collection" className="hover:text-white transition-colors">Collection</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Instagram Gallery</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Client Reviews</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Store & Contact</a></li>
            </ul>
          </div>

          {/* Collections */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-xs font-bold text-[#E5C378] uppercase tracking-wider">
              Collections
            </h4>
            <ul className="space-y-2 text-xs text-[#A8A29E]">
              <li><button onClick={() => onSelectCategory('bridal')} className="hover:text-white text-left transition-colors">Bridal Lehengas</button></li>
              <li><button onClick={() => onSelectCategory('gown')} className="hover:text-white text-left transition-colors">Designer Gowns</button></li>
              <li><button onClick={() => onSelectCategory('party')} className="hover:text-white text-left transition-colors">Party Wear</button></li>
              <li><button onClick={() => onSelectCategory('engagement')} className="hover:text-white text-left transition-colors">Engagement Outfits</button></li>
              <li><button onClick={() => onSelectCategory('wedding_guest')} className="hover:text-white text-left transition-colors">Wedding Guest Looks</button></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-xs font-bold text-[#E5C378] uppercase tracking-wider">
              Jaipur Boutique
            </h4>
            <div className="space-y-2 text-xs text-[#A8A29E]">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>Shop F-1&2 Khatushyam Plaza, Near Turtle School, Jagatpura, Jaipur 302017</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href={`tel:${DISPLAY_PHONE.replace(/\s+/g, '')}`} className="hover:text-white">{DISPLAY_PHONE}</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href={`mailto:${STORE_EMAIL}`} className="hover:text-white">{STORE_EMAIL}</a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Local SEO Tagline */}
        <div className="pt-8 mt-8 border-t border-[#292524] flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-[11px] text-[#78716C]">
          <p>
            © 2026 <strong>Elegant Rental Dress</strong>. All Rights Reserved. • Jagatpura, Jaipur.
          </p>
          <p className="flex items-center justify-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3 h-3 text-[#E11D48] fill-[#E11D48]" />
            <span>for brides & celebrations across Rajasthan</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
