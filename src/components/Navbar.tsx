import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { Menu, X, ArrowRight, Phone, Calendar, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Why KBee', href: '#whykbee' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-xs border-b border-[#1F4D2B]/10 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#hero');
            }}
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F05A24] rounded-lg"
            id="brand-logo-link"
          >
            <BrandLogo size="md" />
          </a>

          {/* Desktop Nav Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1.5 lg:gap-2 px-3 py-1.5 rounded-full bg-white/70 backdrop-blur-xs border border-[#1F4D2B]/10 shadow-xs"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="px-3.5 py-1.5 text-sm font-semibold text-[#161815] hover:text-[#F05A24] rounded-full transition-colors relative group"
                id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.label}
                <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-[#F05A24] scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
              </a>
            ))}
          </nav>

          {/* Right Action: Book Appointment */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenBooking()}
              id="navbar-book-btn"
              className="group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#F05A24] hover:bg-[#D94612] text-white font-bold text-sm tracking-wide shadow-sm hover:shadow-md transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <span>Book Appointment</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={() => onOpenBooking()}
              id="mobile-nav-book-icon-btn"
              className="p-2 rounded-full bg-[#F05A24] text-white shadow-xs focus:outline-none"
              aria-label="Book appointment"
            >
              <Calendar className="w-4 h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle"
              className="p-2.5 rounded-xl bg-white/90 border border-[#1F4D2B]/15 text-[#161815] focus:outline-none focus:ring-2 focus:ring-[#F05A24]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="sm:hidden fixed inset-x-0 top-full bg-[#FAF7F2] border-b border-[#1F4D2B]/15 shadow-xl px-5 py-6 animate-in slide-in-from-top duration-200"
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="px-4 py-3 text-base font-bold text-[#161815] hover:text-[#F05A24] hover:bg-white rounded-xl transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 text-[#1F4D2B]/40" />
              </a>
            ))}

            <div className="pt-4 mt-2 border-t border-[#1F4D2B]/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                id="mobile-drawer-book-btn"
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#F05A24] text-white font-bold text-base shadow-sm active:scale-98"
              >
                <Sparkles className="w-4 h-4" />
                <span>Book Your Crown</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="tel:+2348123456789"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white border border-[#1F4D2B]/20 text-[#1F4D2B] font-bold text-sm"
              >
                <Phone className="w-4 h-4 text-[#1F4D2B]" />
                <span>Call Salon: +234 812 345 6789</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
