import React from 'react';
import { Sparkles, Palette, ShieldCheck, Heart, ArrowRight } from 'lucide-react';
import { BENEFITS_DATA } from '../data/salonData';

interface WhyKbeeProps {
  onBookAppointment: () => void;
}

export const WhyKbee: React.FC<WhyKbeeProps> = ({ onBookAppointment }) => {
  const iconMap: Record<string, React.ReactNode> = {
    Sparkles: <Sparkles className="w-6 h-6 text-[#80ED99]" />,
    Palette: <Palette className="w-6 h-6 text-[#F05A24]" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#80ED99]" />,
    Heart: <Heart className="w-6 h-6 text-[#F05A24]" />
  };

  return (
    <section id="whykbee" className="py-20 lg:py-32 bg-[#1F4D2B] text-white relative overflow-hidden">
      {/* Background Graphic Accents */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#15361E] blur-2xl pointer-events-none -z-10" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#F05A24]/10 blur-3xl pointer-events-none -z-10" />

      {/* Subtle organic watermark typography in background */}
      <div className="hidden lg:block absolute -right-12 top-1/2 -translate-y-1/2 font-display font-black text-[12rem] text-white/[0.03] select-none pointer-events-none -z-10">
        CROWN
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F05A24]" />
              <span className="text-xs font-black tracking-[0.25em] uppercase text-[#80ED99]">
                THE KBEE STANDARD
              </span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight">
              WHY KBEE?
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-stone-200 text-base sm:text-lg max-w-md font-normal leading-relaxed">
            We don’t tame texture. We elevate it. Every visit is designed to leave you in awe of what your natural hair can do.
          </p>
        </div>

        {/* 4 Benefits with Oversized Numbers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {BENEFITS_DATA.map((benefit) => (
            <div
              key={benefit.number}
              className="group relative bg-[#183F23] hover:bg-[#15381F] p-8 rounded-3xl border border-white/10 hover:border-[#F05A24]/60 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Top: Oversized Editorial Number & Icon */}
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-display font-black text-5xl sm:text-6xl text-white/20 group-hover:text-[#F05A24] transition-colors">
                    {benefit.number}
                  </span>
                  {/* <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                    {iconMap[benefit.iconName] || <Sparkles className="w-6 h-6 text-[#80ED99]" />}
                  </div> */}
                </div>

                {/* Subtitle / Archetype */}
                <div className="text-xs font-extrabold tracking-widest uppercase text-[#80ED99] mb-1">
                  {benefit.subtitle}
                </div>

                {/* Title */}
                <h3 className="font-display font-black text-2xl text-white mb-3 group-hover:text-[#F05A24] transition-colors">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-stone-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-white/50 group-hover:text-white transition-colors">
                <span>Certified Naturalists</span>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Inside Green Section */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#183F23] to-[#15381F] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="font-display font-black text-2xl sm:text-3xl text-white mb-1">
              Ready to feel the difference in Lagos?
            </h4>
            <p className="text-sm sm:text-base text-stone-300">
              Personalized curl consultations included with every premier appointment.
            </p>
          </div>

          <button
            onClick={onBookAppointment}
            className="shrink-0 inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#F05A24] hover:bg-[#D94612] text-white font-extrabold text-sm sm:text-base tracking-wide shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer"
          >
            <span>Book Your Crown</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
