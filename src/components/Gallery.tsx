import React, { useState, useMemo } from 'react';
import { ArrowUpRight, Filter, Sparkles, Eye, Plus } from 'lucide-react';
import { GALLERY_DATA } from '../data/salonData';
import { GalleryItem } from '../types';

interface GalleryProps {
  onSelectLook: (item: GalleryItem) => void;
  onViewMore: () => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onSelectLook, onViewMore }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [displayCount, setDisplayCount] = useState<number>(6);

  const filterTabs = [
    { id: 'all', label: 'All' },
    { id: 'twists', label: 'Twists' },
    { id: 'braids', label: 'Braids' },
    { id: 'locs', label: 'Locs' },
    { id: 'natural', label: 'Natural Styles' },
    { id: 'special', label: 'Special Occasion' }
  ];

  const filteredItems = useMemo(() => {
    if (activeFilter === 'all') return GALLERY_DATA;
    return GALLERY_DATA.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  const visibleItems = filteredItems.slice(0, displayCount);

  return (
    <section id="gallery" className="py-20 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F05A24]" />
              <span className="text-xs font-black tracking-[0.25em] uppercase text-[#1F4D2B]">
                SIGNATURE STYLES
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-[#161815] tracking-tight">
              THE LOOKS SPEAK FOR THEMSELVES.
            </h2>
          </div>
          <p className="mt-3 md:mt-0 text-base sm:text-lg text-[#161815]/75 max-w-md">
            Get inspired by some of our favorite creations.
          </p>
        </div>

        {/* Filter Buttons Bar */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveFilter(tab.id);
                  setDisplayCount(6);
                }}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-extrabold tracking-wide uppercase transition-all duration-200 shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-[#1F4D2B] text-white shadow-sm ring-2 ring-[#F05A24]'
                    : 'bg-[#FAF7F2] text-[#161815]/80 hover:bg-[#FAF7F2]/80 hover:text-[#161815] border border-stone-200'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Masonry / Staggered Gallery Grid (2-column on mobile, 3-column on desktop) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
          {visibleItems.map((item, index) => {
            // Stagger height for dynamic editorial masonry rhythm
            const isTall = index % 3 === 1 || index === 4;

            return (
              <div
                key={item.id}
                onClick={() => onSelectLook(item)}
                className={`group relative rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer bg-stone-900 shadow-xs hover:shadow-2xl transition-all duration-300 ${
                  isTall ? 'row-span-1 md:row-span-2 aspect-[3/4.5]' : 'aspect-[3/3.8]'
                }`}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Permanent subtle top tag */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-extrabold tracking-wider uppercase bg-black/60 backdrop-blur-md text-white border border-white/20">
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Hover Reveal Overlay with Style Name, Stylist, and Arrow */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-6 text-white">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <h4 className="font-display font-black text-base sm:text-xl leading-snug">
                        {item.title}
                      </h4>
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#F05A24] text-white flex items-center justify-center shrink-0 shadow-md">
                        <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-stone-200 line-clamp-2 mb-3 hidden sm:block">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between text-[11px] sm:text-xs text-stone-300 pt-2 border-t border-white/20">
                      <span className="font-semibold">By {item.stylist}</span>
                      <span className="text-[#80ED99] font-bold">Tap to view look</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View More CTA Button */}
        <div className="mt-12 text-center">
          {displayCount < filteredItems.length ? (
            <button
              onClick={() => setDisplayCount((prev) => prev + 6)}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#FAF7F2] hover:bg-[#F05A24] text-[#161815] hover:text-white font-extrabold text-sm sm:text-base border-2 border-[#161815]/15 hover:border-[#F05A24] transition-all duration-200 cursor-pointer"
            >
              <span>View More Styles</span>
              <Plus className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={onViewMore}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#F05A24] hover:bg-[#D94612] text-white font-extrabold text-sm sm:text-base shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
            >
              <span>Book Your Custom Look →</span>
            </button>
          )}
        </div>

      </div>
    </section>
  );
};
