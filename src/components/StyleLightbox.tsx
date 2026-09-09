import React from 'react';
import { X, Clock, User, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { GalleryItem } from '../types';

interface StyleLightboxProps {
  item: GalleryItem | null;
  onClose: () => void;
  onBookThisLook: (item: GalleryItem) => void;
}

export const StyleLightbox: React.FC<StyleLightboxProps> = ({
  item,
  onClose,
  onBookThisLook
}) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-[#FAF7F2] rounded-3xl shadow-2xl overflow-hidden my-6 border-2 border-white/20"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close image details"
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-[#F05A24] text-white flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* Image */}
          <div className="md:col-span-7 bg-stone-950 relative min-h-[340px] md:min-h-[460px]">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full text-white text-xs font-bold uppercase tracking-wider">
              {item.categoryLabel}
            </div>
          </div>

          {/* Details */}
          <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1F4D2B]/10 text-[#1F4D2B] text-xs font-extrabold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>KBee Signature Creation</span>
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl text-[#161815] mb-3 leading-tight">
                {item.title}
              </h3>

              <p className="text-sm text-stone-600 leading-relaxed mb-6">
                {item.description}
              </p>

              <div className="space-y-3 pt-4 border-t border-stone-200 text-xs sm:text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-stone-500 font-medium flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#F05A24]" />
                    Estimated Duration:
                  </span>
                  <span className="font-bold text-[#161815]">{item.duration}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-stone-500 font-medium flex items-center gap-1.5">
                    <User className="w-4 h-4 text-[#1F4D2B]" />
                    Lead Stylist:
                  </span>
                  <span className="font-bold text-[#1F4D2B]">{item.stylist}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-stone-500 font-medium flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#80ED99]" />
                    Edge Health:
                  </span>
                  <span className="font-bold text-[#161815]">Tension-Free Parting</span>
                </div>
              </div>
            </div>

            {/* Book CTA */}
            <div className="pt-6 mt-6 border-t border-stone-200">
              <button
                onClick={() => {
                  onClose();
                  onBookThisLook(item);
                }}
                className="w-full py-4 rounded-full bg-[#F05A24] hover:bg-[#D94612] text-white font-extrabold text-sm tracking-wide shadow-md flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <span>Book This Exact Look</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
