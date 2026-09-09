import React from 'react';
import { ArrowRight, ArrowDown, Sparkles, Star, MapPin, Heart } from 'lucide-react';
import { HERO_IMAGE } from '../data/salonData';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreStyles: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreStyles }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden flex items-center bg-[#FAF7F2]"
    >
      {/* Background Graphic Accents & Organic Shapes */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none -z-10 overflow-hidden">
        {/* Organic Green Blob Shape */}
        <div
          className="absolute -top-16 right-[-5%] w-[420px] sm:w-[540px] lg:w-[680px] h-[420px] sm:h-[540px] lg:h-[680px] rounded-full bg-[#1F4D2B]/8 blur-3xl -z-10"
        />
        {/* Radiant Warm Orange Glow */}
        <div
          className="absolute top-1/3 right-1/4 w-[320px] lg:w-[480px] h-[320px] lg:h-[480px] rounded-full bg-[#F05A24]/12 blur-3xl -z-10"
        />
        {/* Decorative Circle Line in Brand Green */}
        <div className="hidden lg:block absolute top-20 right-16 w-80 h-80 rounded-full border border-[#1F4D2B]/15 -z-10 animate-[spin_60s_linear_infinite]" />
        {/* Subtle geometric dot pattern in brand orange */}
        <div className="hidden md:block absolute bottom-12 left-8 opacity-25">
          <div className="grid grid-cols-6 gap-3">
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#F05A24]" />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Bold Expressive Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left z-10">


            {/* Main Headline */}
            <h1 className="font-display font-extrabold text-5xl sm:text-7xl lg:text-[5.4rem] xl:text-[6rem] leading-[0.93] tracking-[-0.03em] text-[#161815] mb-6">
              NATURAL HAIR.
              <br />
              <span className="relative inline-block text-[#1F4D2B]">
                BOLD LOOKS.
                {/* Handcrafted brush-style highlight underline in brand orange */}
                <svg
                  className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-3 sm:h-4 text-[#F05A24]"
                  viewBox="0 0 300 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M3 9C60 3 180 2 297 8"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl lg:text-2xl text-[#161815]/80 max-w-xl font-normal leading-relaxed mb-8 sm:mb-10">
              From everyday styles to statement looks, we&apos;ve got your crown covered.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              {/* Primary CTA */}
              <button
                onClick={onOpenBooking}
                id="hero-book-cta"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#F05A24] hover:bg-[#D94612] text-white font-extrabold text-base tracking-wide shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Book an Appointment</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1.5" />
              </button>

              {/* Secondary CTA */}
              <button
                onClick={onExploreStyles}
                id="hero-explore-cta"
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-white hover:bg-[#FAF7F2] border-2 border-[#1F4D2B] text-[#1F4D2B] font-extrabold text-base tracking-wide transition-all duration-200 hover:border-[#F05A24] hover:text-[#F05A24] active:scale-98 cursor-pointer"
              >
                <span>Explore Our Styles</span>
                <span className="text-[#F05A24] group-hover:rotate-45 transition-transform duration-200"><ArrowDown /></span>
              </button>
            </div>

            {/* Quick Trust / Location Badges */}
            <div className="pt-6 border-t border-[#1F4D2B]/10 flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm font-semibold text-[#161815]/75">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F05A24] text-[#F05A24]" />
                  ))}
                </div>
                <span className="font-bold text-[#161815]">5.0 Rating</span>
                <span className="text-[#1F4D2B] font-bold">(500+ Lagos Crowns)</span>
              </div>

              <span className="hidden sm:inline text-[#1F4D2B]/30">•</span>

              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#F05A24]" />
                <span>Iwaya Yaba, Lagos</span>
              </div>

              <span className="hidden sm:inline text-[#1F4D2B]/30">•</span>

              <div className="flex items-center gap-1.5 text-[#1F4D2B] font-bold">
                <Sparkles className="w-4 h-4 text-[#80ED99]" />
                <span>100% Tension-Free</span>
              </div>
            </div>

          </div>

          {/* Right Column: Fashion Campaign Visual Composition */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0 flex justify-center">

            {/* The Main Visual Container with layered organic backdrop */}
            <div className="relative w-full max-w-[420px] sm:max-w-[460px] lg:max-w-none">

              {/* Organic Green Backdrop Shape */}
              <div
                className="absolute -inset-3 sm:-inset-4 bg-[#1F4D2B] rounded-[36px] sm:rounded-[44px] rotate-2 -z-10 shadow-lg"
              />

              {/* Vibrant Orange Offset Border Frame */}
              <div
                className="absolute -inset-2 sm:-inset-3 rounded-[32px] sm:rounded-[40px] border-2 border-[#F05A24] -rotate-2 -z-10 opacity-70"
              />

              {/* Main Image Frame (Editorial Fashion Portrait) */}
              <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden bg-stone-900 shadow-2xl aspect-[3.7/4.6]">
                <img
                  src={HERO_IMAGE}
                  alt="Black woman with stunning natural hair crown at KBee Naturals Lagos"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="eager"
                  fetchPriority="high"
                />

                {/* Subtle bottom gradient overlay */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

                {/* Corner Stamp */}
                <div className="absolute bottom-4 left-4 text-white/90 text-xs font-mono tracking-widest uppercase bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                  LAGOS • CROWN EDITORIAL
                </div>
              </div>

              {/* Floating Badge 1: Top Right "LOVE YOUR CROWN ♡" */}
              <div
                className="absolute -top-4 -right-3 sm:-top-6 sm:-right-6 z-20 bg-white border-2 border-[#F05A24] text-[#161815] py-2.5 px-4 sm:py-3 sm:px-5 rounded-full shadow-lg transform rotate-6 hover:rotate-0 transition-transform duration-200 cursor-default"
                id="hero-floating-badge"
              >
                <div className="flex items-center gap-2">
                  <span className="font-display font-extrabold text-xs sm:text-sm tracking-wider uppercase text-[#F05A24]">
                    LOVE YOUR CROWN
                  </span>
                  <Heart className="w-4 h-4 fill-[#F05A24] text-[#F05A24] animate-pulse" />
                </div>
              </div>

              {/* Floating Badge 2: Bottom Right "NATURAL BEAUTY" circular seal */}
              <div
                className="absolute -bottom-5 -left-4 sm:-bottom-7 sm:-left-6 z-20 bg-[#1F4D2B] text-white p-3.5 sm:p-4 rounded-2xl shadow-xl border-2 border-white transform -rotate-3 hover:rotate-0 transition-transform duration-200"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#F05A24] flex items-center justify-center font-display font-black text-white text-base">
                    KB
                  </div>
                  <div className="flex flex-col">

                    <span className="text-xs sm:text-sm font-black font-display tracking-tight text-white">
                      NATURAL BEAUTY
                    </span>
                  </div>
                </div>
              </div>

              {/* Small decorative curved accent */}
              <div className="absolute top-1/2 -right-8 w-16 h-16 rounded-full border-4 border-dashed border-[#F05A24]/40 -z-10 hidden sm:block animate-[spin_20s_linear_infinite]" />

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
