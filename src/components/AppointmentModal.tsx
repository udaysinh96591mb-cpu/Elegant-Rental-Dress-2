import React, { useState } from 'react';
import { X, CalendarCheck, MessageCircle, Clock, MapPin, Sparkles } from 'lucide-react';
import { getAppointmentWhatsAppUrl, STORE_ADDRESS } from '../utils/helpers';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '04:00 PM',
    outfitInterest: 'Bridal Lehenga'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const url = getAppointmentWhatsAppUrl({
      name: formData.name,
      phone: formData.phone,
      date: formData.date || 'Upcoming Weekend',
      time: formData.time,
      outfitInterest: formData.outfitInterest
    });

    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#FFFDF9] rounded-3xl shadow-2xl border border-[#D4AF37]/40 overflow-hidden my-auto">
        
        {/* Header */}
        <div className="bg-[#1C1917] p-6 text-white flex items-center justify-between border-b border-[#44403C]">
          <div>
            <div className="flex items-center gap-1.5 text-[#E5C378] text-[11px] font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Jagatpura Boutique Trial</span>
            </div>
            <h3 className="font-cinzel text-lg sm:text-xl font-bold">
              Book Showroom Trial
            </h3>
          </div>

          <button
            onClick={onClose}
            aria-label="Close trial modal"
            className="p-1.5 text-[#A8A29E] hover:text-white rounded-full bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content & Form */}
        <div className="p-6 sm:p-8 space-y-4">
          <div className="bg-[#FAF5EE] p-3.5 rounded-xl border border-[#E7E0D8] text-xs text-[#57534E] flex items-start gap-2.5">
            <MapPin className="w-4 h-4 text-[#854D0E] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#1C1917] block">Showroom Location:</strong>
              Shop F-1&2, Khatushyam Plaza, Near Turtle School, Jagatpura, Jaipur.
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 pt-1">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#1C1917] mb-1">
                Your Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Pooja Sharma"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#E7E0D8] focus:border-[#D4AF37] text-xs sm:text-sm text-[#1C1917] outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#1C1917] mb-1">
                WhatsApp Phone Number *
              </label>
              <input
                type="tel"
                required
                placeholder="e.g. +91 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#E7E0D8] focus:border-[#D4AF37] text-xs sm:text-sm text-[#1C1917] outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1C1917] mb-1">
                  Visit Date
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[#FAF7F2] border border-[#E7E0D8] text-xs text-[#1C1917] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1C1917] mb-1">
                  Time Slot
                </label>
                <select
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[#FAF7F2] border border-[#E7E0D8] text-xs text-[#1C1917] outline-none"
                >
                  <option value="11:30 AM">11:30 AM</option>
                  <option value="01:30 PM">01:30 PM</option>
                  <option value="04:00 PM">04:00 PM</option>
                  <option value="06:00 PM">06:00 PM</option>
                  <option value="07:30 PM">07:30 PM</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#1C1917] mb-1">
                Outfit Category
              </label>
              <select
                value={formData.outfitInterest}
                onChange={(e) => setFormData({ ...formData, outfitInterest: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#E7E0D8] text-xs text-[#1C1917] outline-none"
              >
                <option value="Bridal Lehenga">Bridal Lehenga</option>
                <option value="Designer Gown">Designer Gown</option>
                <option value="Engagement Pastel Lehenga">Engagement Pastel Lehenga</option>
                <option value="Party Wear / Indo-Western">Party Wear / Indo-Western</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1faa4f] text-white py-3.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md transition-all mt-2"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Confirm Appointment via WhatsApp</span>
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};
