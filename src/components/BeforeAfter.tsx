import React, { useState, useRef, useCallback } from 'react';
import { ArrowLeftRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { TRANSFORMATION_DATA } from '../data/salonData';

export const BeforeAfter: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  return (
    <section id="transformation" className="py-20 lg:py-32 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F05A24]" />
            <span className="text-xs font-black tracking-[0.25em] uppercase text-[#1F4D2B]">
              REAL RESULTS
            </span>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#161815] tracking-tight mb-4">
            WATCH THE TRANSFORMATION.
          </h2>
          <p className="text-base sm:text-lg text-[#161815]/75 font-normal">
            Drag the slider to see how botanical steam, tension-free care, and expert styling revive natural curls.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#1F4D2B]/15 text-xs font-bold text-[#1F4D2B]">
            <span>Before</span>
            <span className="text-[#F05A24]">→</span>
            <span>After</span>
          </div>
        </div>

        {/* Interactive Comparison Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Draggable Slider Container */}
          <div className="lg:col-span-8">
            <div
              ref={containerRef}
              onClick={handleClick}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onTouchMove={handleTouchMove}
              onTouchStart={() => setIsDragging(true)}
              onTouchEnd={() => setIsDragging(false)}
              className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-3xl overflow-hidden cursor-ew-resize select-none shadow-2xl border-4 border-white"
            >
              {/* "After" Image (Full Background) */}
              <img
                src={TRANSFORMATION_DATA.afterImage}
                alt="After natural hair transformation at KBee Naturals"
                className="absolute inset-0 w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />

              {/* "After" Badge (Right) */}
              <div className="absolute top-5 right-5 z-20 px-3.5 py-1.5 rounded-full bg-[#1F4D2B] text-white font-extrabold text-xs tracking-wider uppercase shadow-md pointer-events-none">
                AFTER: DEFINED & HYDRATED
              </div>

              {/* "Before" Image (Clipped Left Layer) */}
              <div
                className="absolute inset-y-0 left-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={TRANSFORMATION_DATA.beforeImage}
                  alt="Before natural hair treatment"
                  className="absolute inset-0 w-full h-full object-cover object-center max-w-none"
                  style={{
                    width: containerRef.current
                      ? `${containerRef.current.clientWidth}px`
                      : '100%'
                  }}
                  referrerPolicy="no-referrer"
                />

                {/* "Before" Badge (Left) */}
                <div className="absolute top-5 left-5 z-20 px-3.5 py-1.5 rounded-full bg-[#161815]/90 text-white font-extrabold text-xs tracking-wider uppercase shadow-md pointer-events-none">
                  BEFORE: DRY & TANGLED
                </div>
              </div>

              {/* Draggable Divider Line & Knob */}
              <div
                className="absolute top-0 bottom-0 z-30 flex items-center justify-center pointer-events-none"
                style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
              >
                {/* Vertical Line */}
                <div className="w-1 h-full bg-[#F05A24] shadow-[0_0_12px_rgba(240,90,36,0.6)]" />

                {/* Center Knob */}
                <div
                  onMouseDown={handleMouseDown}
                  className="absolute w-12 h-12 rounded-full bg-[#F05A24] border-4 border-white shadow-xl flex items-center justify-center text-white pointer-events-auto cursor-grab active:cursor-grabbing hover:scale-110 transition-transform"
                >
                  <ArrowLeftRight className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Bottom Drag Instruction */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-xs font-semibold">
                ◂ Drag slider to compare ▸
              </div>
            </div>
          </div>

          {/* Right Column: Transformation Narrative */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <div className="bg-white p-7 sm:p-8 rounded-3xl border border-[#1F4D2B]/10 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-black tracking-wider uppercase text-[#F05A24] mb-2">
                <Sparkles className="w-4 h-4" />
                <span>CASE STUDY</span>
              </div>

              <h3 className="font-display font-black text-2xl text-[#161815] mb-3 leading-snug">
                {TRANSFORMATION_DATA.title}
              </h3>

              <p className="text-sm text-[#161815]/75 leading-relaxed mb-6">
                {TRANSFORMATION_DATA.description}
              </p>

              {/* Details List */}
              <div className="space-y-3 pt-4 border-t border-stone-100 mb-6">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-stone-500 font-semibold">Treatment Used:</span>
                  <span className="font-bold text-[#1F4D2B]">{TRANSFORMATION_DATA.treatment}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-stone-500 font-semibold">Session Duration:</span>
                  <span className="font-bold text-[#161815]">{TRANSFORMATION_DATA.duration}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-stone-500 font-semibold">Edge Safety:</span>
                  <span className="font-bold text-[#F05A24]">100% Tension-Free</span>
                </div>
              </div>

              {/* Quick Jump Links to test presets */}
              <div className="flex items-center justify-between gap-2">
                <button
                  onClick={() => setSliderPosition(20)}
                  className="flex-1 py-2 rounded-xl text-xs font-bold border border-stone-200 hover:bg-[#FAF7F2] text-stone-700"
                >
                  Show After
                </button>
                <button
                  onClick={() => setSliderPosition(50)}
                  className="flex-1 py-2 rounded-xl text-xs font-bold bg-[#FAF7F2] text-[#1F4D2B]"
                >
                  50 / 50
                </button>
                <button
                  onClick={() => setSliderPosition(80)}
                  className="flex-1 py-2 rounded-xl text-xs font-bold border border-stone-200 hover:bg-[#FAF7F2] text-stone-700"
                >
                  Show Before
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
