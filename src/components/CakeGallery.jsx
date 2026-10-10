import React, { useState, useMemo } from 'react';
import { Sparkles, ArrowRight, Eye, Filter, Heart } from 'lucide-react';
import { LightboxModal } from './LightboxModal';

// Individual Cake Card Component with smooth loading state and image aspect container to prevent layout shift
const CakeCard = ({ cake, onSelect }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div
      onClick={() => onSelect(cake)}
      className="group relative cursor-pointer flex flex-col bg-white rounded-2xl overflow-hidden border border-cream-200/80 shadow-2xs hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 focus-within:ring-2 focus-within:ring-rose-400"
      tabIndex={0}
      role="button"
      aria-label={`View ${cake.title}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(cake);
        }
      }}
    >
      {/* Aspect Ratio Box to prevent CLS */}
      <div className="relative aspect-[4/5] w-full bg-cream-100 overflow-hidden">
        {/* Placeholder skeleton */}
        {!isLoaded && !hasError && (
          <div className="absolute inset-0 bg-gradient-to-r from-cream-100 via-blush-100/50 to-cream-100 animate-pulse" />
        )}

        {/* Fallback if image fails to load */}
        {hasError ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-cream-100 text-cocoa-600">
            <span className="text-3xl mb-1">🎂</span>
            <span className="text-xs font-medium">{cake.title}</span>
          </div>
        ) : (
          <img
            src={cake.imageUrl}
            alt={cake.alt}
            loading="lazy"
            decoding="async"
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            className={`w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Hover overlay with Quick View icon */}
        <div className="absolute inset-0 bg-cocoa-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 text-cocoa-900 text-xs font-semibold shadow-md transform scale-95 group-hover:scale-100 transition-transform duration-300">
            <Eye className="w-3.5 h-3.5 text-rose-600" />
            <span>View Cake</span>
          </span>
        </div>

        {/* Category Pill Tag */}
        <div className="absolute top-2.5 left-2.5">
          <span className="inline-block px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-medium tracking-wide bg-white/90 backdrop-blur-xs text-cocoa-800 border border-white/40 shadow-xs">
            {cake.category || cake.theme}
          </span>
        </div>
      </div>

      {/* Card Info Details */}
      <div className="p-3 sm:p-4 flex flex-col flex-1 justify-between bg-white">
        <div>
          <h4 className="font-serif-luxury text-sm sm:text-base font-semibold text-cocoa-900 line-clamp-1 group-hover:text-rose-700 transition-colors">
            {cake.title}
          </h4>
          <p className="mt-1 text-[11px] sm:text-xs text-cocoa-600 line-clamp-2 leading-relaxed font-light">
            {cake.description}
          </p>
        </div>

        <div className="mt-2.5 pt-2 border-t border-cream-100 flex items-center justify-between text-[11px] text-rose-600 font-medium">
          <span className="tracking-wide">Custom orderable</span>
          <span className="text-cocoa-400 group-hover:translate-x-1 group-hover:text-rose-600 transition-all">→</span>
        </div>
      </div>
    </div>
  );
};

export const CakeGallery = ({ gallery, whatsappNumber }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeCakeIndex, setActiveCakeIndex] = useState(null);

  // Extract distinct categories
  const categories = useMemo(() => {
    const list = ["All"];
    gallery.forEach((item) => {
      const cat = item.category || item.theme;
      if (cat && !list.includes(cat)) {
        list.push(cat);
      }
    });
    return list;
  }, [gallery]);

  // Filtered gallery items
  const filteredCakes = useMemo(() => {
    if (selectedCategory === "All") return gallery;
    return gallery.filter((item) => (item.category || item.theme) === selectedCategory);
  }, [gallery, selectedCategory]);

  const handleSelectCake = (cake) => {
    const idx = gallery.findIndex((c) => c.id === cake.id);
    setActiveCakeIndex(idx !== -1 ? idx : 0);
  };

  const handleNextCake = () => {
    if (activeCakeIndex !== null) {
      setActiveCakeIndex((prev) => (prev + 1) % gallery.length);
    }
  };

  const handlePrevCake = () => {
    if (activeCakeIndex !== null) {
      setActiveCakeIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
    }
  };

  const activeCake = activeCakeIndex !== null ? gallery[activeCakeIndex] : null;

  return (
    <section 
      id="cake-gallery-section" 
      aria-label="Cake Gallery Section"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Main Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold text-rose-700 mb-4 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-gold-500" />
          <span>Artisanal Cake Collection</span>
        </div>

        <h3 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-cocoa-900 tracking-tight">
          Explore Our Signature Cakes
        </h3>

        <p className="mt-3 text-sm sm:text-base text-cocoa-700 font-light leading-relaxed">
          From enchanting floral celebration tiers to bespoke vintage Lambeth creations, every cake is crafted to make your milestone unforgettable.
        </p>
      </div>

      {/* Category Filter Pills (Horizontal scrollable on mobile) */}
      <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar scroll-smooth">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            type="button"
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
              selectedCategory === cat
                ? 'bg-cocoa-900 text-white shadow-soft scale-102'
                : 'bg-white text-cocoa-700 hover:bg-cream-100 hover:text-cocoa-900 border border-cream-200/80'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Responsive Gallery Grid: 4 cols desktop, 2-3 cols tablet, 2 cols mobile */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
        {filteredCakes.map((cake) => (
          <CakeCard
            key={cake.id}
            cake={cake}
            onSelect={handleSelectCake}
          />
        ))}
      </div>

      {/* Note about bespoke orders */}
      <div className="mt-12 text-center">
        <p className="text-xs text-cocoa-500 italic">
          * Displayed designs represent our signature bespoke styles. Custom flavours, sizes, and dietary requests are welcomed.
        </p>
      </div>

      {/* Lightbox Modal Viewer */}
      <LightboxModal
        cake={activeCake}
        isOpen={activeCakeIndex !== null}
        onClose={() => setActiveCakeIndex(null)}
        onNext={handleNextCake}
        onPrev={handlePrevCake}
        whatsappNumber={whatsappNumber}
      />
    </section>
  );
};
