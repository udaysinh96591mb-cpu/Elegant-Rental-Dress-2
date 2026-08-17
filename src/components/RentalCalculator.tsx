import React, { useState } from 'react';
import { Calculator, Sparkles, MessageCircle, Check, ArrowRight, TrendingDown } from 'lucide-react';
import { formatINR, getWhatsAppUrl } from '../utils/helpers';

export const RentalCalculator: React.FC = () => {
  const [occasion, setOccasion] = useState<'bridal' | 'engagement' | 'reception' | 'sangeet' | 'party'>('bridal');

  const dataMap = {
    bridal: {
      name: 'Bridal Wedding Lehenga',
      buyPrice: 85000,
      rentPrice: 5499,
      dryCleaningCost: 3500,
      preservationCost: 2000,
    },
    engagement: {
      name: 'Engagement Pastel Lehenga',
      buyPrice: 65000,
      rentPrice: 4499,
      dryCleaningCost: 2500,
      preservationCost: 1500,
    },
    reception: {
      name: 'Designer Reception Gown',
      buyPrice: 52000,
      rentPrice: 3299,
      dryCleaningCost: 2000,
      preservationCost: 1000,
    },
    sangeet: {
      name: 'Sequin Sangeet Ensemble',
      buyPrice: 48000,
      rentPrice: 3199,
      dryCleaningCost: 1800,
      preservationCost: 1000,
    },
    party: {
      name: 'Cocktail & Party Dress',
      buyPrice: 38000,
      rentPrice: 2299,
      dryCleaningCost: 1500,
      preservationCost: 800,
    },
  };

  const selected = dataMap[occasion];
  const totalBuyingCost = selected.buyPrice + selected.dryCleaningCost + selected.preservationCost;
  const savings = totalBuyingCost - selected.rentPrice;
  const savingsPct = Math.round((savings / totalBuyingCost) * 100);

  return (
    <section className="py-16 sm:py-20 bg-[#FFFDF9] border-t border-[#E7E0D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-[#1C1917] via-[#292524] to-[#1C1917] rounded-3xl p-6 sm:p-10 lg:p-12 text-white border border-[#D4AF37]/30 shadow-2xl relative overflow-hidden">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Interactive Controls (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#38312E] border border-[#D4AF37]/40 text-[#E5C378] text-[11px] font-bold tracking-widest uppercase">
                <Calculator className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Rent vs. Buy Calculator</span>
              </div>

              <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-[#FAF7F2] uppercase leading-tight">
                LOOK ELEGANT. <br />
                <span className="text-gold-gradient">RENT SMART & SAVE 90%+</span>
              </h2>

              <p className="text-xs sm:text-sm text-[#D6D3D1] leading-relaxed">
                Most luxury wedding outfits are only worn once for 4–6 hours. See how much money, wardrobe space, and dry-cleaning stress you save by renting with Elegant Rental Dress in Jaipur.
              </p>

              {/* Occasion Switcher */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#A8A29E] mb-2.5">
                  Select Occasion to Calculate Savings:
                </label>
                <div className="flex flex-wrap gap-2">
                  {[
                    { id: 'bridal', label: 'Bridal Wedding' },
                    { id: 'engagement', label: 'Engagement' },
                    { id: 'reception', label: 'Reception Gown' },
                    { id: 'sangeet', label: 'Sangeet Night' },
                    { id: 'party', label: 'Cocktail / Party' },
                  ].map((btn) => (
                    <button
                      key={btn.id}
                      onClick={() => setOccasion(btn.id as any)}
                      className={`text-xs px-3.5 py-2 rounded-xl font-semibold uppercase tracking-wider transition-all border ${
                        occasion === btn.id
                          ? 'bg-[#D4AF37] text-[#1C1917] border-[#D4AF37] font-bold shadow-md'
                          : 'bg-[#292524] text-[#D6D3D1] border-[#44403C] hover:border-[#D4AF37]'
                      }`}
                    >
                      {btn.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Comparative Breakdown Card (6 cols) */}
            <div className="lg:col-span-6 bg-[#262220] rounded-2xl border border-[#D4AF37]/40 p-6 sm:p-8 space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-[#44403C]">
                <div>
                  <span className="text-xs text-[#A8A29E] uppercase tracking-wider font-semibold block">
                    Calculated for
                  </span>
                  <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#FAF7F2]">
                    {selected.name}
                  </h3>
                </div>
                <div className="bg-[#25D366]/20 border border-[#25D366]/50 text-[#25D366] text-xs font-bold px-3 py-1 rounded-full">
                  Save ~{savingsPct}%
                </div>
              </div>

              {/* Split Comparison Row */}
              <div className="grid grid-cols-2 gap-4">
                {/* Buying Option */}
                <div className="bg-[#1C1917]/70 p-4 rounded-xl border border-[#44403C]/60 space-y-2">
                  <span className="text-[11px] text-[#A8A29E] uppercase font-bold tracking-wider block">
                    Buying Retail
                  </span>
                  <div className="font-cinzel text-lg sm:text-xl font-bold text-[#E7E0D8]">
                    {formatINR(totalBuyingCost)}
                  </div>
                  <ul className="text-[11px] text-[#A8A29E] space-y-1 pt-1">
                    <li>• Outfit: {formatINR(selected.buyPrice)}</li>
                    <li>• Dry Clean: +{formatINR(selected.dryCleaningCost)}</li>
                    <li>• Closet Storage Hassle</li>
                  </ul>
                </div>

                {/* Renting with ERD */}
                <div className="bg-gradient-to-br from-[#854D0E]/30 to-[#D4AF37]/20 p-4 rounded-xl border border-[#D4AF37] space-y-2 relative">
                  <span className="text-[11px] text-[#E5C378] uppercase font-bold tracking-wider block">
                    Rent at ERD (3 Days)
                  </span>
                  <div className="font-cinzel text-xl sm:text-2xl font-bold text-[#E5C378]">
                    {formatINR(selected.rentPrice)}
                  </div>
                  <ul className="text-[11px] text-[#FAF7F2] space-y-1 pt-1">
                    <li>✓ Custom Fitting Included</li>
                    <li>✓ Free Sanitization & Dry Clean</li>
                    <li>✓ Wear Fresh Trends Every Event</li>
                  </ul>
                </div>
              </div>

              {/* Total Pocket Savings Banner */}
              <div className="bg-[#1C1917] p-4 rounded-xl border border-[#D4AF37]/40 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-[#A8A29E] uppercase tracking-wider block">
                    Your Direct Savings:
                  </span>
                  <span className="font-cinzel text-xl sm:text-2xl font-bold text-[#25D366]">
                    {formatINR(savings)}
                  </span>
                </div>

                <a
                  href={getWhatsAppUrl(`Hi Elegant Rental Dress! I calculated my savings for ${selected.name} and would like to explore options on rent.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1faa4f] text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white" />
                  <span>Book This Look</span>
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
