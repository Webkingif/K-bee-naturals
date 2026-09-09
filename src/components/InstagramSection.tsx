import React from 'react';
import { Instagram, Heart, MessageCircle, ArrowUpRight } from 'lucide-react';
import { INSTAGRAM_POSTS, SALON_INFO } from '../data/salonData';

export const InstagramSection: React.FC = () => {
  return (
    <section id="instagram" className="py-20 lg:py-28 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <Instagram className="w-4 h-4 text-[#F05A24]" />
            <span className="text-xs font-black tracking-[0.25em] uppercase text-[#1F4D2B]">
              ON THE FEED
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-[#161815] tracking-tight mb-3">
            MORE FROM THE CROWN.
          </h2>
          <p className="text-base sm:text-lg text-[#161815]/75">
            Follow us for more styles, inspiration and natural hair goodness.
          </p>
        </div>

        {/* 6-Image Instagram Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-12">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-2xl overflow-hidden bg-stone-900 shadow-xs hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <img
                src={post.image}
                alt="KBee Naturals Instagram look"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
                loading="lazy"
              />

              {/* Hover Overlay with Likes, Comments & Caption */}
              <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center p-3 text-white text-center">
                <div className="flex items-center gap-3 mb-2 text-xs font-bold">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 fill-[#F05A24] text-[#F05A24]" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3.5 h-3.5" />
                    {post.comments}
                  </span>
                </div>
                <p className="text-[11px] text-stone-200 line-clamp-2 leading-tight">
                  {post.caption}
                </p>
                <span className="mt-2 text-[10px] font-extrabold text-[#80ED99] uppercase tracking-wider">
                  {post.tag}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Instagram Follow CTA */}
        <div className="text-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            id="instagram-follow-cta"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white hover:bg-[#1F4D2B] text-[#1F4D2B] hover:text-white border-2 border-[#1F4D2B] font-extrabold text-sm sm:text-base tracking-wide shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer"
          >
            <Instagram className="w-5 h-5 text-[#F05A24]" />
            <span>Follow {SALON_INFO.instagramHandle}</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
