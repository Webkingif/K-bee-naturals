import React from 'react';
import { ArrowUpRight, Sparkles, Clock, Check } from 'lucide-react';
import { SERVICES_DATA } from '../data/salonData';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (serviceId: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-20 lg:py-32 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#F05A24]" />
              <span className="text-xs font-black tracking-[0.25em] uppercase text-[#1F4D2B]">
                THE CROWN MENU
              </span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#161815] tracking-tight">
              WHAT&apos;S YOUR LOOK?
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-base sm:text-lg text-[#161815]/75 max-w-md font-normal">
            From simple and effortless to bold and unforgettable.
          </p>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Card 1: Natural Hair Styling (Span 7 cols) */}
          <div className="md:col-span-7">
            <ServiceCard
              service={SERVICES_DATA[0]}
              layout="horizontal"
              onSelect={() => onSelectService(SERVICES_DATA[0].id)}
            />
          </div>

          {/* Card 2: Protective Styles (Span 5 cols) */}
          <div className="md:col-span-5">
            <ServiceCard
              service={SERVICES_DATA[1]}
              layout="vertical"
              onSelect={() => onSelectService(SERVICES_DATA[1].id)}
            />
          </div>

          {/* Card 3: Hair Care & Steam Therapy (Span 5 cols) */}
          <div className="md:col-span-5">
            <ServiceCard
              service={SERVICES_DATA[2]}
              layout="vertical"
              onSelect={() => onSelectService(SERVICES_DATA[2].id)}
            />
          </div>

          {/* Card 4: Special Occasion & Bridal (Span 7 cols) */}
          <div className="md:col-span-7">
            <ServiceCard
              service={SERVICES_DATA[3]}
              layout="horizontal"
              accentColor="orange"
              onSelect={() => onSelectService(SERVICES_DATA[3].id)}
            />
          </div>

        </div>

      </div>
    </section>
  );
};

interface ServiceCardProps {
  service: ServiceItem;
  layout: 'horizontal' | 'vertical';
  accentColor?: 'green' | 'orange';
  onSelect: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  layout,
  accentColor = 'green',
  onSelect
}) => {
  const isHorizontal = layout === 'horizontal';

  return (
    <div
      onClick={onSelect}
      className={`group relative bg-white rounded-3xl overflow-hidden border border-[#1F4D2B]/10 hover:border-[#F05A24]/50 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col ${
        isHorizontal ? 'lg:flex-row' : ''
      } h-full`}
    >
      {/* Image Area */}
      <div
        className={`relative overflow-hidden ${
          isHorizontal
            ? 'w-full lg:w-1/2 min-h-[260px] sm:min-h-[300px]'
            : 'w-full min-h-[260px] sm:min-h-[280px]'
        }`}
      >
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700"
          referrerPolicy="no-referrer"
          loading="lazy"
        />

        {/* Badge */}
        {service.tag && (
          <div className="absolute top-4 left-4 z-10">
            <span
              className={`px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase shadow-sm ${
                accentColor === 'orange'
                  ? 'bg-[#F05A24] text-white'
                  : 'bg-[#1F4D2B] text-white'
              }`}
            >
              {service.tag}
            </span>
          </div>
        )}

        {/* Category Label Bottom Corner */}
        <div className="absolute bottom-3 left-3 px-3 py-1 rounded-md bg-black/50 backdrop-blur-xs text-white text-[11px] font-bold tracking-widest uppercase">
          {service.categoryLabel}
        </div>
      </div>

      {/* Content Area */}
      <div
        className={`p-6 sm:p-7 flex flex-col justify-between flex-grow ${
          isHorizontal ? 'w-full lg:w-1/2' : 'w-full'
        }`}
      >
        <div>
          {/* Header & Arrow */}
          <div className="flex items-start justify-between gap-2 mb-2.5">
            <h3 className="font-display font-black text-xl sm:text-2xl text-[#161815] group-hover:text-[#F05A24] transition-colors leading-tight">
              {service.title}
            </h3>
            <div className="w-9 h-9 rounded-full bg-[#FAF7F2] group-hover:bg-[#F05A24] text-[#161815] group-hover:text-white flex items-center justify-center shrink-0 transition-all duration-300">
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-[#161815]/75 leading-relaxed mb-4">
            {service.description}
          </p>

          {/* Key Feature Checkpoints */}
          <div className="space-y-1.5 mb-5">
            {service.features.slice(0, 2).map((feat, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs font-medium text-[#161815]/80">
                <span className="w-4 h-4 rounded-full bg-[#1F4D2B]/10 text-[#1F4D2B] flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5" />
                </span>
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer info: Duration & Price */}
        <div className="pt-4 border-t border-stone-100 flex items-center justify-between mt-auto">
          <div className="flex items-center gap-1.5 text-xs text-[#161815]/70 font-semibold">
            <Clock className="w-3.5 h-3.5 text-[#1F4D2B]" />
            <span>{service.duration}</span>
          </div>
          <div className="text-sm font-extrabold text-[#F05A24]">
            {service.priceNgn}
          </div>
        </div>
      </div>
    </div>
  );
};
