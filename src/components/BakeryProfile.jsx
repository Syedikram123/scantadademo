import React, { useState } from 'react';
import { Award, Heart, Sparkles, MapPin, Star } from 'lucide-react';

/**
 * Bakery Crest Logo Component
 * A luxurious, artisanal emblem featuring wheat stalks, a cake tier, and custom monogram.
 */
const BakeryLogoCrest = ({ name = "Paradise Bakery", established = "Est. 2018" }) => (
  <div className="flex flex-col items-center justify-center">
    <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-rose-100 via-white to-blush-100 border border-gold-400/40 p-1 shadow-soft flex items-center justify-center group">
      {/* Outer golden ring with dashed border */}
      <div className="absolute inset-1 rounded-full border border-dashed border-gold-500/50" />
      
      {/* Inner emblem */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <span className="text-xl sm:text-2xl">🍰</span>
        <span className="font-serif-luxury font-bold text-xs sm:text-sm tracking-widest text-cocoa-900 uppercase mt-0.5">
          PB
        </span>
      </div>

      {/* Decorative mini star top badge */}
      <div className="absolute -top-1 bg-white px-1.5 py-0.5 rounded-full border border-gold-300 shadow-2xs">
        <Star className="w-2.5 h-2.5 text-gold-500 fill-gold-400" />
      </div>
    </div>
  </div>
);

export const BakeryProfile = ({ bakery, onExploreClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section 
      id="bakery-section" 
      aria-label="Bakery Introduction"
      className="relative py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-transparent via-white/50 to-transparent"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        
        {/* Bakery Logo / Monogram Crest */}
        <BakeryLogoCrest name={bakery.name} established={bakery.established} />

        {/* Bakery Name: Paradise Bakery */}
        <h2 className="mt-5 font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-cocoa-900 tracking-tight">
          {bakery.name}
        </h2>

        {/* Tagline: "Making every celebration sweeter." */}
        <p className="mt-2 text-sm sm:text-base font-medium text-rose-600 tracking-widest uppercase">
          {bakery.tagline}
        </p>

        {/* Delicate separator line */}
        <div className="w-16 h-[1.5px] bg-gold-400/50 my-5 rounded-full" />

        {/* Short Description: "Beautiful cakes, delicious flavours, and sweet memories for every special moment." */}
        <p className="text-base sm:text-lg text-cocoa-700 max-w-xl leading-relaxed font-light">
          {bakery.description}
        </p>

        {/* Supporting Visual: 1 Beautiful Cake / Bakery Photograph */}
        <div className="mt-10 w-full max-w-2xl relative rounded-3xl overflow-hidden p-2 bg-white shadow-soft-lg border border-blush-200/60">
          <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-cream-100">
            {/* Shimmer skeleton before image loads */}
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gradient-to-r from-cream-100 via-blush-100 to-cream-100 animate-pulse" />
            )}
            
            <img
              src={bakery.heroPhoto.url}
              alt={bakery.heroPhoto.alt}
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
              className={`w-full h-full object-cover object-center transition-all duration-700 hover:scale-105 ${
                imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-102'
              }`}
            />

            {/* Subtle Gradient overlay with small badge */}
            <div className="absolute inset-0 bg-gradient-to-t from-cocoa-950/60 via-transparent to-transparent pointer-events-none" />

            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs sm:text-sm">
              <div className="flex items-center gap-1.5 backdrop-blur-md bg-cocoa-950/40 px-3 py-1.5 rounded-full border border-white/20">
                <Sparkles className="w-3.5 h-3.5 text-gold-300" />
                <span className="font-medium">Handcrafted Fresh Daily</span>
              </div>
              <span className="text-[11px] text-blush-100 opacity-90 hidden sm:inline-block">
                Paradise Bakery Artisanal Collection
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
