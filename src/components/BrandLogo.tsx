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
        <span style={{ color: "white" }}>KB</span>

      </div>

      {/* Typography */}
      <div className="flex flex-col">
        <span
          className={`font-display font-extrabold leading-none ${textSizes[size]} ${isLight ? 'text-white' : 'text-[#161815]'
            }`}
        >
          KBee
          <span className="text-[#F05A24] ml-0.5 font-bold">.</span>
        </span>
        <span
          className={`font-sans font-bold uppercase ${subtextSizes[size]} ${isLight ? 'text-[#80ED99]' : 'text-[#1F4D2B]'
            }`}
        >
          Naturals
        </span>
      </div>
    </div>
  );
};
