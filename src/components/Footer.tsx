import React from 'react';
import { BrandLogo } from './BrandLogo';
import { Instagram, MessageCircle, ArrowUp, Heart } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-[#161815] text-white pt-16 pb-12 border-t-2 border-[#1F4D2B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Tier */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-stone-800">

          {/* Brand Info */}
          <div>
            <BrandLogo variant="light" size="lg" className="mb-3" />
            <p className="font-display font-bold text-lg sm:text-xl text-[#80ED99] tracking-wide">
              {SALON_INFO.tagline}
            </p>
            <p className="text-xs text-stone-400 mt-1 max-w-sm">
              Lagos, Nigeria • Celebrating texture, confidence & royalty in every strand.
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-stone-900 hover:bg-[#F05A24] text-stone-200 hover:text-white text-xs font-bold transition-colors border border-stone-800"
            >
              <Instagram className="w-4 h-4 text-[#F05A24] group-hover:text-white" />
              <span>Instagram</span>
            </a>

            <a
              href={SALON_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-stone-900 hover:bg-[#25D366] text-stone-200 hover:text-white text-xs font-bold transition-colors border border-stone-800"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="w-10 h-10 rounded-full bg-stone-800 hover:bg-[#F05A24] text-stone-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Middle Tier: Navigation Links */}
        <div className="py-8 flex flex-wrap items-center justify-between gap-4">
          <nav className="flex flex-wrap items-center gap-6 sm:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-stone-400 hover:text-[#F05A24] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="text-xs text-stone-400 flex items-center gap-1.5">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 fill-[#F05A24] text-[#F05A24]" />
            <span>for natural hair in Lagos</span>
          </div>
        </div>

        {/* Bottom Tier: Copyright */}
        <div className="pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © 2026 KBee Naturals. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>42 Iwaya Road, Onike Yaba, Lagos</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
