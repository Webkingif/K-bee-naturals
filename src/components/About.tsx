import React from 'react';
import { ArrowRight, CheckCircle2, Sparkles, Shield, Heart } from 'lucide-react';
import { ABOUT_IMAGE } from '../data/salonData';

interface AboutProps {
  onDiscoverClick: () => void;
}

export const About: React.FC<AboutProps> = ({ onDiscoverClick }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FAF7F2] relative overflow-hidden">
      {/* Subtle organic background accent */}
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-[#80ED99]/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with layered African-inspired decorative shapes */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-[460px] lg:max-w-none">
              
              {/* Green Organic Arch Background */}
              <div className="absolute -inset-4 bg-[#1F4D2B] rounded-3xl -rotate-2 -z-10" />

              {/* Orange Geometric Offset Accent */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#F05A24] rounded-2xl -z-10" />
              
              {/* Image Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/5] bg-stone-900">
                <img
                  src={ABOUT_IMAGE}
                  alt="Stylist celebrating natural hair crown at KBee Naturals"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Overlay Accent Pill */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#1F4D2B]/15 shadow-sm flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#1F4D2B]" />
                  <span className="text-xs font-black tracking-wider uppercase text-[#1F4D2B]">
                    Lagos Natural Hair Sanctuary
                  </span>
                </div>
              </div>

              {/* Floating Stat Card with Orange & Green Accent */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white p-4 sm:p-5 rounded-2xl shadow-xl border-l-4 border-[#F05A24] max-w-[240px]">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#1F4D2B]/10 text-[#1F4D2B]">
                    <Sparkles className="w-5 h-5 text-[#1F4D2B]" />
                  </div>
                  <div>
                    <div className="font-display font-black text-2xl text-[#161815]">5,000+</div>
                    <div className="text-xs font-semibold text-[#161815]/70">Crowns Nurtured</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Editorial Text & Values */}
          <div className="lg:col-span-6 flex flex-col justify-center order-1 lg:order-2">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-[#F05A24]" />
              <span className="text-xs font-extrabold tracking-[0.25em] uppercase text-[#F05A24]">
                OUR PHILOSOPHY
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-tight text-[#161815] mb-6">
              MORE THAN A HAIRSTYLE.
              <br />
              <span className="text-[#1F4D2B]">IT&apos;S YOUR CROWN.</span>
            </h2>

            {/* Text */}
            <p className="text-base sm:text-lg text-[#161815]/80 font-normal leading-relaxed mb-8">
              At KBee Naturals, we celebrate the beauty, versatility and personality of natural hair.
              From everyday looks to statement styles, every appointment is an opportunity to help you love your crown.
            </p>

            {/* 3 Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#1F4D2B]/10 shadow-2xs">
                <div className="p-2 rounded-lg bg-[#1F4D2B]/10 text-[#1F4D2B] shrink-0 mt-0.5">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-[#161815]">Tension-Free Promise</h4>
                  <p className="text-xs text-[#161815]/70 mt-0.5">Zero aggressive pulling or edge damage.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#1F4D2B]/10 shadow-2xs">
                <div className="p-2 rounded-lg bg-[#F05A24]/10 text-[#F05A24] shrink-0 mt-0.5">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-[#161815]">Porosity-First Care</h4>
                  <p className="text-xs text-[#161815]/70 mt-0.5">Custom moisture tailored to your curls.</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div>
              <button
                onClick={onDiscoverClick}
                id="about-discover-cta"
                className="group inline-flex items-center gap-3 text-base font-extrabold text-[#1F4D2B] hover:text-[#F05A24] transition-colors py-2 border-b-2 border-[#1F4D2B] hover:border-[#F05A24] cursor-pointer"
              >
                <span>Discover KBee</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
