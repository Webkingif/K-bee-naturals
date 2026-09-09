import React, { useState } from 'react';
import { MapPin, Phone, Instagram, Clock, ArrowUpRight, MessageSquare, Check, Navigation } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const ContactLocation: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(SALON_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const openGoogleMaps = () => {
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      'Admiralty Way Lekki Phase 1 Lagos Nigeria'
    )}`;
    window.open(mapsUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F05A24]" />
            <span className="text-xs font-black tracking-[0.25em] uppercase text-[#1F4D2B]">
              STUDIO & DETAILS
            </span>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-6xl text-[#161815] tracking-tight">
            COME SEE US.
          </h2>
        </div>

        {/* 2-Column Layout: Details on Left, Stylized Lagos Map Visual on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Salon Details Cards */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-6">
            
            {/* Address Card */}
            <div className="bg-white p-7 rounded-3xl border border-[#1F4D2B]/10 shadow-xs hover:border-[#F05A24]/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#F05A24]/10 text-[#F05A24] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-black text-lg text-[#161815] mb-1">
                    Studio Address
                  </h3>
                  <p className="text-base text-[#161815]/85 font-semibold">
                    {SALON_INFO.address}
                  </p>
                  <p className="text-xs text-[#1F4D2B] font-bold mt-1">
                    {SALON_INFO.landmark}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <button
                      onClick={openGoogleMaps}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#1F4D2B] text-white font-extrabold text-xs tracking-wider uppercase hover:bg-[#15361E] transition-colors cursor-pointer"
                    >
                      <span>Get Directions</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={handleCopyAddress}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FAF7F2] text-[#161815] font-bold text-xs border border-stone-200 hover:bg-stone-200 transition-colors cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#1F4D2B]" />
                          <span>Address Copied!</span>
                        </>
                      ) : (
                        <span>Copy Address</span>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="bg-white p-7 rounded-3xl border border-[#1F4D2B]/10 shadow-xs hover:border-[#F05A24]/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#1F4D2B]/10 text-[#1F4D2B] flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-black text-lg text-[#161815] mb-1">
                    Direct Line & WhatsApp
                  </h3>
                  <div className="space-y-1 text-base text-[#161815] font-bold">
                    <div>
                      <a href={`tel:${SALON_INFO.phonePrimary}`} className="hover:text-[#F05A24] transition-colors">
                        {SALON_INFO.phonePrimary}
                      </a>
                    </div>
                    <div>
                      <a href={`tel:${SALON_INFO.phoneSecondary}`} className="hover:text-[#F05A24] transition-colors text-sm text-stone-600">
                        {SALON_INFO.phoneSecondary} (Customer Care)
                      </a>
                    </div>
                  </div>

                  <div className="mt-4">
                    <a
                      href={SALON_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#128C7E] font-bold text-xs tracking-wide transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Chat on WhatsApp directly</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Instagram & Social Card */}
            <div className="bg-white p-7 rounded-3xl border border-[#1F4D2B]/10 shadow-xs hover:border-[#F05A24]/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#F05A24]/10 text-[#F05A24] flex items-center justify-center shrink-0">
                  <Instagram className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-black text-lg text-[#161815] mb-1">
                    Instagram Community
                  </h3>
                  <p className="text-base font-extrabold text-[#F05A24]">
                    {SALON_INFO.instagramHandle}
                  </p>
                  <p className="text-xs text-[#161815]/70 mt-1">
                    Tag your new look with #KBeeCrowns for feature spotlights.
                  </p>
                </div>
              </div>
            </div>

            {/* Opening Hours Card */}
            <div className="bg-white p-7 rounded-3xl border border-[#1F4D2B]/10 shadow-xs">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#1F4D2B]/10 text-[#1F4D2B] flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-black text-lg text-[#161815] mb-3">
                    Opening Hours
                  </h3>
                  <div className="space-y-2">
                    {SALON_INFO.hours.map((h, i) => (
                      <div key={i} className="flex items-center justify-between text-xs sm:text-sm">
                        <span className="font-bold text-[#161815]">{h.days}</span>
                        <span className={`font-semibold ${h.time.includes('Closed') ? 'text-[#F05A24]' : 'text-stone-600'}`}>
                          {h.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Stylized Lagos Interactive Map Visual */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative w-full h-full min-h-[420px] rounded-3xl overflow-hidden bg-stone-900 border-2 border-[#1F4D2B]/15 shadow-xl flex flex-col justify-between p-6 sm:p-8 text-white">
              
              {/* Map Canvas Background Illustration (Stylized Lekki Peninsula / Lagos Lagoon) */}
              <div className="absolute inset-0 opacity-40">
                <svg className="w-full h-full object-cover" viewBox="0 0 500 500" fill="none">
                  {/* Lagos Lagoon Waterway in Deep Green */}
                  <path
                    d="M-50 150 C150 180, 280 90, 550 200 L550 0 L-50 0 Z"
                    fill="#1F4D2B"
                    opacity="0.6"
                  />
                  {/* Lekki Admiralty Arterial roads */}
                  <path
                    d="M50 450 L180 280 L350 240 L500 220"
                    stroke="#FAF7F2"
                    strokeWidth="8"
                    opacity="0.3"
                  />
                  <path
                    d="M180 280 L220 150 L380 130"
                    stroke="#FAF7F2"
                    strokeWidth="6"
                    opacity="0.3"
                  />
                  <path
                    d="M100 200 L450 380"
                    stroke="#F05A24"
                    strokeWidth="4"
                    opacity="0.5"
                  />
                  <circle cx="280" cy="235" r="40" fill="#F05A24" opacity="0.15" />
                  <circle cx="280" cy="235" r="20" fill="#F05A24" opacity="0.3" />
                </svg>
              </div>

              {/* Top Map Badges */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs font-black tracking-wider uppercase text-white">
                  LAGOS • LEKKI PHASE 1
                </div>
                <div className="px-3 py-1 rounded-full bg-[#1F4D2B] text-[#80ED99] text-xs font-bold">
                  Open Today
                </div>
              </div>

              {/* Center Map Pin Graphic */}
              <div className="relative z-10 my-auto text-center">
                <div className="inline-block relative">
                  {/* Pulsing Orange Pin */}
                  <div className="w-16 h-16 rounded-full bg-[#F05A24] border-4 border-white shadow-2xl flex items-center justify-center mx-auto mb-3 animate-bounce">
                    <MapPin className="w-8 h-8 text-white fill-white" />
                  </div>
                  <div className="bg-white/95 text-[#161815] px-4 py-2 rounded-xl shadow-xl font-display font-black text-sm">
                    KBee Naturals Salon
                    <div className="text-[11px] font-sans font-semibold text-[#F05A24]">
                      14B Admiralty Way, Lekki 1
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Interactive Bar */}
              <div className="relative z-10 bg-black/70 backdrop-blur-md p-4 rounded-2xl border border-white/15 flex items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-semibold text-stone-300">Fast Navigation</div>
                  <div className="text-sm font-bold text-white">Admiralty Way, Lagos</div>
                </div>
                <button
                  onClick={openGoogleMaps}
                  id="open-directions-btn"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#F05A24] hover:bg-[#D94612] text-white font-bold text-xs tracking-wider uppercase transition-colors cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open Directions</span>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
