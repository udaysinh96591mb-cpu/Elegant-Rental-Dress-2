import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  Instagram,
  Clock,
  Navigation,
  Sparkles,
  CalendarCheck,
  Send
} from 'lucide-react';
import {
  STORE_ADDRESS,
  DISPLAY_PHONE,
  STORE_EMAIL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  MAPS_URL,
  getWhatsAppUrl,
  getAppointmentWhatsAppUrl,
  getStoreStatus
} from '../utils/helpers';

interface ContactSectionProps {
  onOpenAppointment?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '12:00 PM',
    outfitInterest: 'Bridal Lehenga',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const storeStatus = getStoreStatus();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const whatsappUrl = getAppointmentWhatsAppUrl({
      name: formData.name,
      phone: formData.phone,
      date: formData.date || 'Flexible / Upcoming Weekend',
      time: formData.time,
      outfitInterest: formData.outfitInterest
    });

    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#FAF7F2] border-t border-[#E7E0D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FCE7EC] text-[#854D0E] text-[11px] font-semibold tracking-widest uppercase mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Visit Our Jaipur Boutique</span>
          </div>

          <h2 className="font-cinzel text-2xl sm:text-4xl font-bold tracking-tight text-[#1C1917] uppercase mb-3">
            VISIT ELEGANT RENTAL DRESS
          </h2>
          <p className="text-sm sm:text-base text-[#78716C]">
            Experience luxury trials, personalized fittings & bridal consultations in Jagatpura.
          </p>
          <div className="w-16 h-0.5 bg-[#D4AF37] mx-auto mt-4" />
        </div>

        {/* 2-Column Split: Left Contact info & Map, Right Appointment Booking Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Info & Location Card (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="bg-[#FFFDF9] rounded-3xl p-6 sm:p-8 border border-[#E7E0D8] shadow-sm space-y-6">
              
              {/* Store Status Pill */}
              <div className="flex items-center justify-between pb-4 border-b border-[#F5EFEB]">
                <div className="flex items-center gap-2">
                  <span className={`w-2.5 h-2.5 rounded-full ${storeStatus.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`} />
                  <span className="font-cinzel text-xs font-bold uppercase tracking-wider text-[#1C1917]">
                    {storeStatus.text}
                  </span>
                </div>
                <span className="text-xs text-[#854D0E] font-medium font-sans">
                  Jaipur Time (IST)
                </span>
              </div>

              {/* Contact List */}
              <div className="space-y-4 text-xs sm:text-sm">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#FDF2F4] border border-[#D4AF37]/40 flex items-center justify-center shrink-0 text-[#854D0E]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-[#1C1917] block mb-0.5 font-cinzel">
                      Store Address
                    </span>
                    <p className="text-[#57534E] leading-relaxed">
                      {STORE_ADDRESS}
                    </p>
                  </div>
                </div>

                {/* Phone & WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#FDF2F4] border border-[#D4AF37]/40 flex items-center justify-center shrink-0 text-[#854D0E]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-[#1C1917] block mb-0.5 font-cinzel">
                      Call & WhatsApp
                    </span>
                    <a
                      href={`tel:${DISPLAY_PHONE.replace(/\s+/g, '')}`}
                      className="text-[#854D0E] font-bold hover:underline block"
                    >
                      {DISPLAY_PHONE}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#FDF2F4] border border-[#D4AF37]/40 flex items-center justify-center shrink-0 text-[#854D0E]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-[#1C1917] block mb-0.5 font-cinzel">
                      Email
                    </span>
                    <a
                      href={`mailto:${STORE_EMAIL}`}
                      className="text-[#57534E] hover:text-[#854D0E]"
                    >
                      {STORE_EMAIL}
                    </a>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#FDF2F4] border border-[#D4AF37]/40 flex items-center justify-center shrink-0 text-[#854D0E]">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-[#1C1917] block mb-0.5 font-cinzel">
                      Showroom Hours
                    </span>
                    <div className="text-[#57534E] space-y-0.5">
                      <p>Monday – Saturday: 11:00 AM – 8:30 PM</p>
                      <p>Sunday: 12:00 PM – 7:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons: Call, WhatsApp, Get Directions */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-4 border-t border-[#F5EFEB]">
                <a
                  href={`tel:${DISPLAY_PHONE.replace(/\s+/g, '')}`}
                  id="contact-call-now-btn"
                  className="flex items-center justify-center gap-1.5 bg-[#1C1917] hover:bg-[#292524] text-white py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>CALL NOW</span>
                </a>

                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-whatsapp-btn"
                  className="flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#1faa4f] text-white py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white" />
                  <span>WHATSAPP</span>
                </a>

                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-directions-btn"
                  className="flex items-center justify-center gap-1.5 border border-[#D4AF37] text-[#854D0E] hover:bg-[#FDF2F4] bg-white py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>DIRECTIONS</span>
                </a>
              </div>

            </div>

            {/* Map Placeholder / Card */}
            <div className="bg-[#1C1917] rounded-3xl p-6 text-white border border-[#44403C] overflow-hidden relative shadow-md">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#D4AF37]" />
                  <span className="font-cinzel text-xs font-bold uppercase tracking-wider text-[#FAF7F2]">
                    Jagatpura Studio Location
                  </span>
                </div>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-[#E5C378] hover:underline flex items-center gap-1"
                >
                  Open in Google Maps →
                </a>
              </div>

              {/* Stylized Jaipur Map Frame */}
              <div className="relative aspect-[16/7] rounded-xl overflow-hidden bg-[#262220] border border-[#44403C]/60 flex items-center justify-center text-center p-4">
                <div className="space-y-1.5">
                  <div className="w-10 h-10 rounded-full bg-[#854D0E] border-2 border-[#D4AF37] text-white flex items-center justify-center mx-auto shadow-md animate-bounce">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h4 className="font-cinzel text-xs font-bold text-[#FAF7F2]">
                    Khatushyam Plaza, Jagatpura
                  </h4>
                  <p className="text-[10px] text-[#A8A29E]">
                    Near Turtle School • 10 mins from Malviya Nagar & Jagatpura Flyover
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right: Book a Trial / Visit Appointment Form (6 cols) */}
          <div className="lg:col-span-6 bg-[#FFFDF9] rounded-3xl p-6 sm:p-10 border border-[#D4AF37]/40 shadow-xl">
            
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#854D0E] mb-1">
                <CalendarCheck className="w-4 h-4 text-[#D4AF37]" />
                <span>Complimentary Fitting Trial</span>
              </div>
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#1C1917] uppercase">
                SCHEDULE YOUR SHOWROOM VISIT
              </h3>
              <p className="text-xs text-[#78716C] mt-1">
                Reserve a VIP trial slot with our stylist at our Jagatpura studio.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1C1917] mb-1.5">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Pooja Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#E7E0D8] focus:border-[#D4AF37] focus:bg-white text-xs sm:text-sm text-[#1C1917] outline-none transition-all"
                />
              </div>

              {/* Phone / WhatsApp */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1C1917] mb-1.5">
                  WhatsApp Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#E7E0D8] focus:border-[#D4AF37] focus:bg-white text-xs sm:text-sm text-[#1C1917] outline-none transition-all"
                />
              </div>

              {/* Date & Time Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1C1917] mb-1.5">
                    Preferred Visit Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#E7E0D8] focus:border-[#D4AF37] focus:bg-white text-xs sm:text-sm text-[#1C1917] outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1C1917] mb-1.5">
                    Preferred Time Slot
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#E7E0D8] focus:border-[#D4AF37] focus:bg-white text-xs sm:text-sm text-[#1C1917] outline-none transition-all"
                  >
                    <option value="11:30 AM">11:30 AM (Morning)</option>
                    <option value="01:00 PM">01:00 PM (Afternoon)</option>
                    <option value="03:30 PM">03:30 PM (Afternoon)</option>
                    <option value="05:30 PM">05:30 PM (Evening)</option>
                    <option value="07:00 PM">07:00 PM (Evening)</option>
                  </select>
                </div>
              </div>

              {/* Outfit Interest */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1C1917] mb-1.5">
                  What are you looking to rent?
                </label>
                <select
                  value={formData.outfitInterest}
                  onChange={(e) => setFormData({ ...formData, outfitInterest: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#E7E0D8] focus:border-[#D4AF37] focus:bg-white text-xs sm:text-sm text-[#1C1917] outline-none transition-all"
                >
                  <option value="Bridal Wedding Lehenga">Bridal Wedding Lehenga</option>
                  <option value="Reception / Cocktail Gown">Reception / Cocktail Gown</option>
                  <option value="Engagement Pastel Lehenga">Engagement Pastel Lehenga</option>
                  <option value="Sangeet / Party Wear">Sangeet / Party Wear</option>
                  <option value="Multiple Looks (Wedding Package)">Multiple Looks (Wedding Package)</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                id="contact-submit-appointment-btn"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1faa4f] text-white py-3.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 mt-2"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>CONFIRM TRIAL ON WHATSAPP</span>
              </button>

              <p className="text-[11px] text-[#78716C] text-center pt-1">
                🔒 Free consultation • No advance payment needed for showroom trials.
              </p>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
};
