import React, { useState } from 'react';
import { Sparkles, ChevronDown } from 'lucide-react';
import confetti from 'canvas-confetti';

/**
 * Assorted Neutral Party Balloons (Champagne Gold, Muted Blue, Coral, Cream, Burgundy)
 */
const FestiveBalloon = ({ 
  color = '#D4AF37', 
  stringColor = '#A9895F',
  size = 60, 
  className = '' 
}) => (
  <svg
    viewBox="0 0 70 105"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`drop-shadow-sm select-none pointer-events-none ${className}`}
    style={{ width: size, height: (size * 105) / 70 }}
  >
    <defs>
      <radialGradient id={`bg-grad-${color.replace('#', '')}`} cx="35%" cy="30%" r="65%">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.75" />
        <stop offset="40%" stopColor={color} stopOpacity="0.95" />
        <stop offset="100%" stopColor={color} stopOpacity="1" />
      </radialGradient>
      <filter id="soft-shadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#0F172A" floodOpacity="0.1" />
      </filter>
    </defs>
    {/* Balloon body */}
    <ellipse cx="35" cy="42" rx="27" ry="34" fill={`url(#bg-grad-${color.replace('#', '')})`} filter="url(#soft-shadow)" />
    {/* Soft Sheen */}
    <ellipse cx="26" cy="28" rx="7" ry="11" fill="#FFFFFF" fillOpacity="0.4" transform="rotate(-20 26 28)" />
    {/* Knot */}
    <polygon points="32,77 38,77 36,81 34,81" fill={color} />
    {/* Hanging String */}
    <path
      d="M35 81 Q38 91 33 99 Q32 103 35 107"
      stroke={stringColor}
      strokeWidth="1"
      strokeDasharray="1.5 1"
      fill="none"
      opacity="0.5"
    />
  </svg>
);

/**
 * Delicate Gold Sparkle Star
 */
const StarSparkle = ({ className = '', size = 16 }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`select-none pointer-events-none ${className}`}
    style={{ width: size, height: size }}
  >
    <path
      d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"
      fill="#D4AF37"
      opacity="0.85"
    />
  </svg>
);

export const BirthdayHero = ({ onScrollToBakery }) => {
  const [celebrated, setCelebrated] = useState(false);

  // Micro-interaction: Elegant celebratory confetti & sparkle burst
  const handleCelebrate = () => {
    setCelebrated(true);
    try {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.45 },
        colors: ['#D4AF37', '#4A6B82', '#E26D5C', '#FAF8F5', '#9E2A2B', '#EED696'],
        ticks: 220,
        gravity: 0.85,
        scalar: 0.95,
        disableForReducedMotion: true
      });
    } catch (e) {
      // safe fallback
    }
    setTimeout(() => setCelebrated(false), 3000);
  };

  return (
    <section 
      aria-label="Birthday Greeting"
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between items-center text-center px-4 sm:px-6 pt-16 pb-8 overflow-hidden select-none"
    >
      {/* Soft ambient background aura */}
      <div 
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-gradient-to-b from-gold-200/30 via-peach-200/20 to-transparent rounded-full blur-3xl -z-10"
      />

      {/* FLOATING DECORATIONS — Assorted neutral party colors around edges */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 max-w-5xl mx-auto overflow-hidden -z-0">
        
        {/* Top Left: Champagne Gold Balloon */}
        <div className="absolute top-[8%] left-[4%] sm:left-[8%] animate-balloon-drift-1">
          <FestiveBalloon color="#D4AF37" size={54} />
        </div>

        {/* Top Right: Muted Blue Balloon */}
        <div className="absolute top-[10%] right-[5%] sm:right-[9%] animate-balloon-drift-2">
          <FestiveBalloon color="#4A6B82" size={58} />
        </div>

        {/* Mid Left: Coral Balloon */}
        <div className="absolute top-[46%] left-[3%] sm:left-[6%] animate-balloon-drift-3">
          <FestiveBalloon color="#E26D5C" size={48} />
        </div>

        {/* Mid Right: Cream / Pale Gold Balloon */}
        <div className="absolute top-[42%] right-[3%] sm:right-[7%] animate-balloon-drift-1">
          <FestiveBalloon color="#F4EFEA" stringColor="#D4AF37" size={52} />
        </div>

        {/* Bottom Left: Rich Burgundy Balloon */}
        <div className="absolute bottom-[16%] left-[7%] sm:left-[12%] animate-balloon-drift-2">
          <FestiveBalloon color="#9E2A2B" size={46} />
        </div>

        {/* Star Sparkles */}
        <div className="absolute top-[22%] left-[18%] animate-star-twinkle">
          <StarSparkle size={18} />
        </div>
        <div className="absolute top-[28%] right-[16%] animate-star-twinkle" style={{ animationDelay: '1.5s' }}>
          <StarSparkle size={14} />
        </div>
        <div className="absolute top-[60%] right-[14%] animate-star-twinkle" style={{ animationDelay: '2.5s' }}>
          <StarSparkle size={16} />
        </div>
        <div className="absolute top-[65%] left-[15%] animate-star-twinkle" style={{ animationDelay: '0.8s' }}>
          <StarSparkle size={12} />
        </div>

      </div>

      {/* Top spacer */}
      <div className="w-full h-2" />

      {/* SCREEN ONE CORE CONTENT */}
      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center my-auto">
        
        {/* Subtle decorative celebration badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-gold-400/30 text-xs font-semibold text-charcoal-800 shadow-2xs mb-6">
          <Sparkles className="w-3.5 h-3.5 text-gold-500" />
          <span className="tracking-wide">A Special Celebration</span>
        </div>

        {/* Main Heading: "Happy New Year 2027" */}
        <h1 className="font-serif-luxury text-5xl xs:text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight text-navy-900 leading-[1.08] sm:leading-[1.05]">
          Happy New Year 2027
        </h1>

        {/* Subtle golden divider */}
        <div className="w-16 sm:w-20 h-[1.5px] bg-gradient-to-r from-transparent via-gold-400 to-transparent my-6 opacity-70" />

        {/* New Year Message: "May 2027 bring you beautiful beginnings." */}
        <p className="font-serif-luxury text-lg sm:text-2xl font-normal text-charcoal-700 max-w-md sm:max-w-lg leading-relaxed italic px-2">
          “May 2027 bring you beautiful beginnings.”
        </p>

        {/* SINGLE Primary Action: Celebrate! ✨ */}
        <div className="mt-8 sm:mt-10">
          <button
            onClick={handleCelebrate}
            type="button"
            aria-label="Celebrate New Year with sparkles"
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm sm:text-base font-semibold bg-navy-900 hover:bg-charcoal-800 text-white border border-gold-400/40 shadow-soft hover:shadow-gold-glow transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-gold-400 group-hover:rotate-12 transition-transform duration-300" />
            <span>{celebrated ? "🎉 Celebrating You!" : "Celebrate! ✨"}</span>
          </button>
        </div>

      </div>

      {/* Screen One Transition Cue: "There's something sweet ahead" */}
      <div className="relative z-10 pb-4 flex flex-col items-center">
        <button
          onClick={onScrollToBakery}
          className="group flex flex-col items-center text-charcoal-700 hover:text-navy-900 transition-colors focus:outline-hidden"
          aria-label="Scroll to bakery introduction"
        >
          <span className="text-xs sm:text-sm font-medium tracking-wide mb-1 text-charcoal-600 group-hover:text-navy-900 transition-colors">
            There's something sweet ahead
          </span>
          <div className="w-7 h-7 rounded-full bg-white/80 border border-cream-200 flex items-center justify-center text-gold-600 shadow-2xs group-hover:translate-y-1 transition-transform">
            <ChevronDown className="w-4 h-4" />
          </div>
        </button>
      </div>

    </section>
  );
};
