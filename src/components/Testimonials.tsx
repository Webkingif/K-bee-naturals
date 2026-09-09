import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Heart } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/salonData';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="reviews" className="py-20 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F05A24]" />
              <span className="text-xs font-black tracking-[0.25em] uppercase text-[#1F4D2B]">
                COMMUNITY LOVE
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-[#161815] tracking-tight">
              THE CROWN CLUB LOVES US.
            </h2>
          </div>

          {/* Desktop & Tablet Carousel Arrows */}
          <div className="mt-4 md:mt-0 flex items-center gap-3">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="w-12 h-12 rounded-full border-2 border-[#1F4D2B]/15 hover:border-[#F05A24] text-[#161815] hover:text-[#F05A24] flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="w-12 h-12 rounded-full border-2 border-[#1F4D2B]/15 hover:border-[#F05A24] text-[#161815] hover:text-[#F05A24] flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonials Grid (3 cards desktop, carousel on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS_DATA.map((item, idx) => {
            const isFeatured = idx === 1;

            return (
              <div
                key={item.id}
                className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isFeatured
                    ? 'bg-[#FAF7F2] border-2 border-[#F05A24] shadow-lg md:-translate-y-2'
                    : 'bg-[#FAF7F2]/60 border border-[#1F4D2B]/10 hover:shadow-md'
                }`}
              >
                <div>
                  {/* Top: 5 Stars + Quote Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#F05A24] text-[#F05A24]" />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-[#1F4D2B]/20" />
                  </div>

                  {/* Testimonial Quote */}
                  <p className="text-base sm:text-lg text-[#161815]/85 font-medium leading-relaxed mb-6 italic">
                    &ldquo;{item.text}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-6 border-t border-stone-200/80 flex items-center gap-4">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-[#F05A24]/30"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-display font-black text-base text-[#161815]">
                      — {item.name}
                    </h4>
                    <div className="text-xs text-[#1F4D2B] font-bold">
                      {item.location}
                    </div>
                    <div className="text-[11px] text-stone-500 font-semibold">
                      Style: {item.style}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Pagination Dots */}
        <div className="flex md:hidden justify-center items-center gap-2 mt-8">
          {TESTIMONIALS_DATA.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                currentIndex === idx ? 'w-6 bg-[#F05A24]' : 'bg-stone-300'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
