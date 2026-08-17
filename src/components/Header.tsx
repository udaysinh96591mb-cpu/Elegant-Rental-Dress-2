import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Clock, MapPin, Sparkles, Gift, Wand2, Heart } from 'lucide-react';
import { DISPLAY_PHONE, getWhatsAppUrl, getStoreStatus, STORE_ADDRESS } from '../utils/helpers';

interface HeaderProps {
  onOpenAppointment: () => void;
  onSelectCategory?: (category: string) => void;
  onOpenQuiz?: () => void;
  onOpenSpinWheel?: () => void;
  onOpenMoodboard?: () => void;
  savedCount?: number;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenAppointment,
  onOpenQuiz,
  onOpenSpinWheel,
  onOpenMoodboard,
  savedCount = 0
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [storeStatus, setStoreStatus] = useState(getStoreStatus());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Update store status every 2 minutes
    const interval = setInterval(() => {
      setStoreStatus(getStoreStatus());
    }, 120000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Collection', href: '#collection' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top micro announcement bar */}
      <div className="bg-gradient-to-r from-[#1C1917] via-[#2D1B1E] to-[#1C1917] text-[#FAF7F2] text-xs py-2 px-4 tracking-wider transition-all border-b border-[#D4AF37]/30 shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center justify-center w-full sm:w-auto">
            <button
              onClick={onOpenSpinWheel}
              className="inline-flex items-center gap-2 font-medium text-[#F3E5AB] hover:text-[#D4AF37] transition-colors cursor-pointer group text-[11px] sm:text-xs"
            >
              <span className="w-5 h-5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/60 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Gift className="w-3 h-3 text-[#E5C378] group-hover:rotate-12 transition-transform" />
              </span>
              <span className="font-cinzel tracking-wider uppercase underline decoration-[#D4AF37]/60 underline-offset-4 truncate">
                Spin Lucky Wheel & Win ₹500 OFF! (Tap Here)
              </span>
            </button>
          </div>

          <div className="hidden md:flex items-center gap-4 text-[11px] text-[#A8A29E]">
            <button
              onClick={onOpenQuiz}
              className="flex items-center gap-1.5 text-[#E5C378] hover:text-white transition-colors font-medium font-cinzel"
            >
              <Wand2 className="w-3 h-3 text-[#D4AF37]" />
              <span>AI Outfit Finder</span>
            </button>
            <span className="text-[#57534E]">✦</span>
            <span className="flex items-center gap-1 text-[#E7E0D8]">
              <MapPin className="w-3 h-3 text-[#D4AF37]" />
              <span>Jagatpura, Jaipur</span>
            </span>
            <span className="text-[#57534E]">✦</span>
            <span className="flex items-center gap-1.5 bg-[#1C1917]/80 px-2.5 py-0.5 rounded-full border border-[#D4AF37]/20">
              <span className={`w-2 h-2 rounded-full ${storeStatus.isOpen ? 'bg-emerald-400 animate-ping' : 'bg-amber-400'}`} />
              <span className={storeStatus.isOpen ? 'text-emerald-300 font-medium' : 'text-stone-300'}>
                {storeStatus.text}
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-xl shadow-lg py-2 border-b border-[#D4AF37]/30'
            : 'bg-gradient-to-b from-[#FAF7F2] via-[#FAF7F2] to-[#F7F2EA] py-3.5 border-b border-[#D4AF37]/20 shadow-xs'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo with ERD emblem inspired by Instagram */}
          <a
            href="#hero"
            id="header-brand-logo"
            className="flex items-center gap-2.5 sm:gap-3 group text-left focus:outline-none min-w-0"
          >
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-[#991B1B] via-[#7F1D1D] to-[#1C1917] border-2 border-[#D4AF37] shadow-md flex items-center justify-center p-1 group-hover:scale-105 group-hover:border-[#F3E5AB] transition-all shrink-0">
              <div className="absolute inset-0.5 rounded-full border border-[#D4AF37]/40 pointer-events-none" />
              <span className="font-cinzel text-xs sm:text-sm font-bold tracking-widest text-[#F3E5AB] drop-shadow-sm font-serif">
                ERD
              </span>
            </div>
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="font-cinzel text-xs sm:text-base md:text-lg font-bold tracking-wider text-[#1C1917] leading-tight uppercase group-hover:text-[#991B1B] transition-colors truncate">
                  Elegant Rental Dress
                </span>
                <span className="hidden sm:inline-block text-[10px] px-1.5 py-0.2 rounded-full bg-[#991B1B]/10 text-[#991B1B] font-bold border border-[#991B1B]/20 font-cinzel">
                  👑 JAIPUR
                </span>
              </div>
              <span className="text-[9px] sm:text-[10px] tracking-widest text-[#854D0E] font-semibold uppercase truncate flex items-center gap-1">
                <span>✦</span> Bridal & Party Wear Rental <span>✦</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-bold uppercase tracking-wider text-[#44403C] hover:text-[#991B1B] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#D4AF37] hover:after:w-full after:transition-all font-cinzel"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Style Match Quiz Button */}
            <button
              onClick={onOpenQuiz}
              className="flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase px-3.5 py-2 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#E5C378] to-[#C59E3F] text-[#1C1917] hover:brightness-105 shadow-sm transition-all hover:scale-105"
            >
              <Wand2 className="w-3.5 h-3.5" />
              <span>Style Quiz</span>
            </button>

            {/* Wishlist / Moodboard Pill */}
            <button
              onClick={onOpenMoodboard}
              aria-label="Open Moodboard"
              className="relative p-2 rounded-full border border-[#D4AF37]/40 bg-white text-[#1C1917] hover:border-[#E11D48] hover:text-[#E11D48] shadow-xs transition-all"
            >
              <Heart className={`w-4 h-4 ${savedCount > 0 ? 'fill-[#E11D48] text-[#E11D48]' : ''}`} />
              {savedCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#E11D48] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                  {savedCount}
                </span>
              )}
            </button>

            <button
              onClick={onOpenAppointment}
              id="header-book-trial-btn"
              className="text-xs font-bold tracking-wider uppercase px-3.5 py-2 rounded-full border border-[#991B1B] text-[#991B1B] bg-white hover:bg-[#991B1B] hover:text-white transition-all shadow-xs"
            >
              Book Trial
            </button>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              id="header-whatsapp-btn"
              className="flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile quick actions and menu */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenAppointment}
              className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1.5 rounded-full border border-[#991B1B] text-[#991B1B] bg-white shadow-xs"
            >
              Book Trial
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              aria-label="Toggle navigation menu"
              className="p-1.5 rounded-xl text-[#1C1917] bg-white border border-[#D4AF37]/50 hover:bg-[#F3ECE4] shadow-xs transition-colors touch-manipulation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 text-[#854D0E]" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF7F2] border-b border-[#E7E0D8] px-4 pt-3 pb-6 space-y-3 shadow-xl animate-fadeIn">
            <div className="flex items-center justify-between pb-2 border-b border-[#E7E0D8]/60 text-xs text-[#78716C]">
              <span className="flex items-center gap-1.5">
                <span className={`w-2 h-2 rounded-full ${storeStatus.isOpen ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                {storeStatus.text}
              </span>
              <span className="text-[#854D0E] font-medium">Jagatpura, Jaipur</span>
            </div>

            {/* Interactive Feature Buttons in Mobile Menu */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenQuiz) onOpenQuiz();
                }}
                className="flex items-center justify-center gap-1.5 p-2.5 rounded-xl bg-[#1C1917] text-[#E5C378] text-xs font-bold uppercase tracking-wider"
              >
                <Wand2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Style Quiz</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenSpinWheel) onOpenSpinWheel();
                }}
                className="flex items-center justify-center gap-1.5 p-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C59E3F] text-[#1C1917] text-xs font-bold uppercase tracking-wider"
              >
                <Gift className="w-3.5 h-3.5" />
                <span>Spin & Win</span>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 py-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-semibold uppercase tracking-wider text-[#292524] hover:bg-[#F3ECE4] rounded-md transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-[#E7E0D8] flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAppointment();
                }}
                className="w-full text-center py-2.5 rounded-full border border-[#D4AF37] text-[#854D0E] font-semibold text-xs uppercase tracking-wider bg-white"
              >
                Schedule Showroom Trial Visit
              </button>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-2.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat & Book on WhatsApp</span>
              </a>

              <a
                href={`tel:${DISPLAY_PHONE.replace(/\s+/g, '')}`}
                className="w-full flex items-center justify-center gap-2 bg-[#1C1917] text-white py-2.5 rounded-full text-xs font-bold uppercase tracking-wider"
              >
                <Phone className="w-4 h-4" />
                <span>Call +91 7877993251</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

