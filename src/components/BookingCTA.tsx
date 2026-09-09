import React from 'react';
import { ArrowRight, Sparkles, Crown } from 'lucide-react';

interface BookingCTAProps {
  onBookAppointment: () => void;
  onExploreStyles: () => void;
}

export const BookingCTA: React.FC<BookingCTAProps> = ({
  onBookAppointment,
  onExploreStyles
}) => {
  return (
    <section className="py-20 lg:py-32 bg-[#F05A24] text-white relative overflow-hidden">
      {/* Decorative Organic Elements in natural green & warm cream */}
      <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-[#D94612] blur-xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-[#1F4D2B]/30 blur-2xl pointer-events-none" />

      {/* Subtle graphic concentric circles */}
      <div className="hidden md:block absolute top-1/2 left-12 -translate-y-1/2 w-64 h-64 rounded-full border-2 border-white/20 pointer-events-none animate-[spin_40s_linear_infinite]" />
      <div className="hidden md:block absolute top-1/2 right-12 -translate-y-1/2 w-72 h-72 rounded-full border-2 border-dashed border-white/20 pointer-events-none animate-[spin_60s_linear_infinite]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Crown Accent Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/20 backdrop-blur-md border border-white/25 text-xs font-black tracking-[0.25em] uppercase text-white mb-8">
          <Crown className="w-3.5 h-3.5 text-[#80ED99]" />
          <span>JOIN THE CROWN CLUB</span>
          <Sparkles className="w-3.5 h-3.5 text-[#80ED99]" />
        </div>

        {/* Big Bold Headline */}
        <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-[0.95] text-white mb-6">
          READY FOR YOUR
          <br />
          <span className="text-[#161815] bg-[#FAF7F2] px-3 sm:px-6 py-1 inline-block rounded-2xl transform -rotate-1 shadow-lg mt-2">
            NEXT LOOK?
          </span>
        </h2>

        {/* Supporting Text */}
        <p className="text-xl sm:text-2xl text-white/95 font-medium max-w-xl mx-auto mb-10">
          Your crown is waiting.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <button
            onClick={onBookAppointment}
            id="final-cta-book-btn"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-[#161815] hover:bg-[#1F4D2B] text-white font-black text-base sm:text-lg tracking-wide shadow-2xl hover:shadow-3xl transition-all duration-200 transform hover:-translate-y-1 active:translate-y-0 cursor-pointer"
          >
            <span>BOOK YOUR APPOINTMENT</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1.5" />
          </button>

          <button
            onClick={onExploreStyles}
            id="final-cta-explore-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-5 rounded-full bg-white/15 hover:bg-white/25 text-white border-2 border-white font-bold text-base tracking-wide backdrop-blur-xs transition-colors cursor-pointer"
          >
            <span>Explore Our Styles</span>
            <span>↓</span>
          </button>
        </div>

        {/* Small Trust Microcopy */}
        <p className="mt-8 text-xs sm:text-sm text-white/80 font-semibold">
          Convenient Lekki Phase 1 studio • VIP appointments available • Seamless WhatsApp booking
        </p>

      </div>
    </section>
  );
};
