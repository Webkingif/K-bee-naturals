import React from 'react';

interface BrandLogoProps {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'dark',
  size = 'md',
  className = ''
}) => {
  const isLight = variant === 'light';

  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-13 h-13'
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl'
  };

  const subtextSizes = {
    sm: 'text-[9px] tracking-[0.25em]',
    md: 'text-[11px] tracking-[0.3em]',
    lg: 'text-[13px] tracking-[0.35em]'
  };

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {/* Brand Icon Mark: Stylized Crown + Natural Botanical Curl in Orange & Green */}
      <div
        className={`relative ${iconSizes[size]} rounded-xl flex items-center justify-center shadow-xs transition-transform hover:scale-105`}
        style={{
          background: 'linear-gradient(135deg, #1F4D2B 0%, #15361E 100%)',
          border: '1.5px solid rgba(240, 90, 36, 0.4)'
        }}
      >
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-3/4 h-3/4"
        >
          {/* Crown Peaks in Bold Brand Orange */}
          <path
            d="M8 26L12 14L20 21L28 14L32 26H8Z"
            fill="#F05A24"
          />
          {/* Botanical Curl / Honeycomb center leaf in fresh bright natural green */}
          <path
            d="M20 9C20 9 24 13 24 16C24 18.2 22.2 20 20 20C17.8 20 16 18.2 16 16C16 13 20 9 20 9Z"
            fill="#80ED99"
          />
          {/* Base Crown band with 3 jewels */}
          <rect x="8" y="27" width="24" height="4" rx="2" fill="#FAF7F2" />
          <circle cx="13" cy="29" r="1.2" fill="#F05A24" />
          <circle cx="20" cy="29" r="1.2" fill="#1F4D2B" />
          <circle cx="27" cy="29" r="1.2" fill="#F05A24" />
        </svg>

        {/* Small floating orange accent sparkle */}
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#F05A24] ring-2 ring-white" />
      </div>

      {/* Typography */}
      <div className="flex flex-col">
        <span
          className={`font-display font-extrabold leading-none ${textSizes[size]} ${
            isLight ? 'text-white' : 'text-[#161815]'
          }`}
        >
          KBee
          <span className="text-[#F05A24] ml-0.5 font-bold">.</span>
        </span>
        <span
          className={`font-sans font-bold uppercase ${subtextSizes[size]} ${
            isLight ? 'text-[#80ED99]' : 'text-[#1F4D2B]'
          }`}
        >
          Naturals
        </span>
      </div>
    </div>
  );
};
