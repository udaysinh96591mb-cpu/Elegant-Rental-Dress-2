import React from 'react';
import { Sparkles, MapPin, Check, Heart, Shield, Award } from 'lucide-react';
import { STORE_ADDRESS } from '../utils/helpers';
import aboutShowroomImg from '../assets/images/regenerated_image_1786940137548.png';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-[#FAF7F2] border-t border-[#E7E0D8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left: Editorial Fashion Image with Gold Border & Badge (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#D4AF37]/50 bg-[#1C1917]">
              <img
                src={aboutShowroomImg}
                alt="Elegant Rental Dress Jagatpura Jaipur showroom designer bridal collection"
                className="w-full h-full object-cover min-h-[460px]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Floating Bottom Card */}
              <div className="absolute bottom-4 inset-x-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-[#E7E0D8] shadow-lg text-[#1C1917]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FCE7EC] border border-[#D4AF37] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#854D0E]" />
                  </div>
                  <div>
                    <h4 className="font-cinzel text-xs font-bold uppercase tracking-wider">
                      Jagatpura Boutique
                    </h4>
                    <p className="text-[11px] text-[#78716C]">
                      Khatushyam Plaza, Near Turtle School, Jaipur
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Decorative Frame */}
            <div className="hidden sm:block absolute -bottom-4 -right-4 w-full h-full rounded-3xl border border-[#D4AF37]/40 -z-10" />
          </div>

          {/* Right: Editorial Narrative Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FCE7EC] text-[#854D0E] text-[11px] font-semibold tracking-widest uppercase">
              <Sparkles className="w-3 h-3 text-[#D4AF37]" />
              <span>Our Story & Mission</span>
            </div>

            <h2 className="font-cinzel text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1C1917] uppercase leading-tight">
              THE ELEGANT EXPERIENCE
            </h2>

            <p className="font-cormorant text-xl sm:text-2xl text-[#854D0E] italic font-medium">
              “Rent your dream wedding look without the burden of expensive one-time purchases.”
            </p>

            <div className="space-y-4 text-xs sm:text-sm text-[#57534E] leading-relaxed">
              <p>
                <strong>Elegant Rental Dress</strong> makes designer fashion accessible for your most special moments. Founded in the cultural heart of Rajasthan at Jagatpura, Jaipur, our boutique curates high-couture Indian bridal lehengas, glamorous evening gowns, and versatile party wear.
              </p>
              <p>
                We believe you shouldn’t have to spend tens of thousands of rupees on an outfit you will only wear once. With our carefully sanitized pieces, free in-house custom alterations, and transparent rental policies, we offer a lavish boutique experience tailored to every woman.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {[
                { label: 'Style', desc: 'Curated Couture' },
                { label: 'Quality', desc: '100% Sanitized' },
                { label: 'Affordability', desc: 'Save up to 90%' },
                { label: 'Convenience', desc: 'Jaipur Trials' },
              ].map((pillar, i) => (
                <div
                  key={i}
                  className="bg-[#FFFDF9] p-3.5 rounded-xl border border-[#E7E0D8] text-center"
                >
                  <span className="font-cinzel text-xs font-bold text-[#854D0E] uppercase block mb-0.5">
                    {pillar.label}
                  </span>
                  <span className="text-[10px] text-[#78716C]">{pillar.desc}</span>
                </div>
              ))}
            </div>

            {/* Highlights List */}
            <div className="pt-2 space-y-2 text-xs text-[#292524] font-medium">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#25D366]" />
                <span>Personalized styling assistance & bridal fittings at our studio.</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#25D366]" />
                <span>Flexible 3 to 7 days rental periods for outstation & local events.</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
