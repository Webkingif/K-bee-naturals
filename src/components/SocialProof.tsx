import React from 'react';
import { Crown, Sparkles, Heart, Sun } from 'lucide-react';

export const SocialProof: React.FC = () => {
  const marqueeItems = [
    { text: 'NATURAL HAIR', icon: Crown },
    { text: 'BEAUTIFUL STYLES', icon: Sparkles },
    { text: 'HEALTHY HAIR', icon: Heart },
    { text: 'BOLD LOOKS', icon: Sun },
    { text: 'NATURAL BEAUTY', icon: Crown },
    { text: 'Iwaya Yaba', icon: Sparkles },
    { text: 'LOVE YOUR CROWN', icon: Heart },
    { text: 'ORGANIC BOTANICALS', icon: Sun }
  ];

  return (
    <div className="relative w-full overflow-hidden bg-[#1F4D2B] py-3.5 border-y-2 border-[#F05A24] shadow-sm select-none">
      {/* Background subtle diagonal stripe texture */}
      <div className="flex w-max animate-marquee">
        {/* First set of marquee items */}
        <div className="flex items-center gap-8 sm:gap-12 shrink-0">
          {marqueeItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={`m1-${idx}`} className="flex items-center gap-3">
                <span className="font-display font-extrabold text-sm sm:text-base tracking-[0.2em] text-white uppercase whitespace-nowrap">
                  {item.text}
                </span>
                <span className="p-1 rounded-md bg-[#F05A24] text-white">
                  <Icon className="w-3.5 h-3.5" />
                </span>
                <span className="text-[#80ED99] font-bold text-xs sm:text-sm tracking-widest">•</span>
              </div>
            );
          })}
        </div>

        {/* Duplicate set for seamless continuous loop */}
        <div className="flex items-center gap-8 sm:gap-12 shrink-0 ml-8 sm:ml-12" aria-hidden="true">
          {marqueeItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={`m2-${idx}`} className="flex items-center gap-3">
                <span className="font-display font-extrabold text-sm sm:text-base tracking-[0.2em] text-white uppercase whitespace-nowrap">
                  {item.text}
                </span>
                <span className="p-1 rounded-md bg-[#F05A24] text-white">
                  <Icon className="w-3.5 h-3.5" />
                </span>
                <span className="text-[#80ED99] font-bold text-xs sm:text-sm tracking-widest">•</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
