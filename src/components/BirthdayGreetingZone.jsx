import React, { useState, useRef } from 'react';
import { Sparkles, Volume2, VolumeX, Cake, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playPartyPopperSound } from '../utils/soundEffects';

/**
 * Lightweight SVG Balloon Component
 */
const Balloon = ({ color = '#D4AF37', stringColor = '#A9895F', size = 36, className = '' }) => (
  <svg
    viewBox="0 0 70 105"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`drop-shadow-2xs select-none pointer-events-none ${className}`}
    style={{ width: size, height: (size * 105) / 70 }}
  >
    <defs>
      <radialGradient id={`bg-${color.replace('#', '')}-${size}`} cx="35%" cy="30%" r="65%">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
        <stop offset="40%" stopColor={color} stopOpacity="0.95" />
        <stop offset="100%" stopColor={color} stopOpacity="1" />
      </radialGradient>
    </defs>
    {/* Body */}
    <ellipse cx="35" cy="42" rx="27" ry="34" fill={`url(#bg-${color.replace('#', '')}-${size})`} />
    {/* Highlight Sheen */}
    <ellipse cx="26" cy="28" rx="6" ry="10" fill="#FFFFFF" fillOpacity="0.45" transform="rotate(-20 26 28)" />
    {/* Knot */}
    <polygon points="32,77 38,77 36,81 34,81" fill={color} />
    {/* String */}
    <path
      d="M35 81 Q38 90 33 97 Q32 101 35 105"
      stroke={stringColor}
      strokeWidth="1"
      strokeDasharray="1.5 1"
      fill="none"
      opacity="0.45"
    />
  </svg>
);

/**
 * Star Sparkle
 */
const SparkleDot = ({ size = 12, className = '' }) => (
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

/**
 * Artisanal Interactive Birthday Cake Illustration
 */
const InteractiveCakeSvg = () => (
  <svg
    viewBox="0 0 200 170"
    className="w-full h-full drop-shadow-md select-none pointer-events-none"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      {/* Stand Gold Gradient */}
      <linearGradient id="standGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#EED696" />
        <stop offset="45%" stopColor="#D4AF37" />
        <stop offset="100%" stopColor="#A9895F" />
      </linearGradient>

      {/* Bottom Tier Cream Gradient */}
      <linearGradient id="tierBottomGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFFDF7" />
        <stop offset="60%" stopColor="#F9F4EB" />
        <stop offset="100%" stopColor="#EFE5D3" />
      </linearGradient>

      {/* Top Tier Cream Gradient */}
      <linearGradient id="tierTopGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="70%" stopColor="#FAF5EC" />
        <stop offset="100%" stopColor="#ECE3D2" />
      </linearGradient>

      {/* Gold Glaze / Drips Gradient */}
      <linearGradient id="goldGlazeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FBF0D2" />
        <stop offset="40%" stopColor="#D4AF37" />
        <stop offset="100%" stopColor="#B38A3A" />
      </linearGradient>

      {/* Candle Flame Pulsing Glow */}
      <radialGradient id="flameGlowRadial" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#FFE79A" stopOpacity="0.85" />
        <stop offset="45%" stopColor="#F59E0B" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#D97706" stopOpacity="0" />
      </radialGradient>

      {/* Candle Flame Core */}
      <radialGradient id="flameCoreRadial" cx="40%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="35%" stopColor="#FFF2A8" />
        <stop offset="70%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#D97706" />
      </radialGradient>
    </defs>

    {/* 1. PEDESTAL / CAKE STAND */}
    {/* Stand Base */}
    <path d="M70 162 C70 156 130 156 130 162 L138 165 C138 167 62 167 62 165 Z" fill="url(#standGoldGrad)" />
    {/* Stand Stem */}
    <path d="M92 144 L108 144 L105 160 L95 160 Z" fill="url(#standGoldGrad)" opacity="0.9" />
    {/* Stand Plate Bevel & Rim */}
    <ellipse cx="100" cy="144" rx="82" ry="10" fill="#BFA063" />
    <ellipse cx="100" cy="142" rx="80" ry="9" fill="url(#standGoldGrad)" />
    <ellipse cx="100" cy="141" rx="76" ry="8" fill="#FFFBF2" opacity="0.75" />

    {/* 2. BOTTOM TIER */}
    {/* Bottom Tier Body */}
    <path d="M34 100 L34 132 C34 143 166 143 166 132 L166 100 Z" fill="url(#tierBottomGrad)" />
    {/* Bottom Tier Top Surface */}
    <ellipse cx="100" cy="100" rx="66" ry="12" fill="url(#tierBottomGrad)" />
    {/* Bottom Tier Gold Pearl Border */}
    <ellipse cx="100" cy="132" rx="65" ry="10" fill="none" stroke="#D4AF37" strokeWidth="2.5" strokeDasharray="1 5.5" strokeLinecap="round" opacity="0.85" />
    {/* Subtle Gold Swirl/Filigree on Bottom Tier */}
    <path d="M34 116 C60 126 140 126 166 116" stroke="url(#goldGlazeGrad)" strokeWidth="2" fill="none" opacity="0.75" />

    {/* 3. TOP TIER */}
    {/* Top Tier Body */}
    <path d="M54 58 L54 94 C54 104 146 104 146 94 L146 58 Z" fill="url(#tierTopGrad)" />
    {/* Top Tier Top Surface */}
    <ellipse cx="100" cy="58" rx="46" ry="9" fill="url(#tierTopGrad)" />
    {/* Top Tier Gold Pearl Trim */}
    <ellipse cx="100" cy="94" rx="45" ry="8" fill="none" stroke="#D4AF37" strokeWidth="2.5" strokeDasharray="1 5" strokeLinecap="round" opacity="0.85" />

    {/* Elegant Gold Drips from Top Tier Rim */}
    <path d="M54 58 Q60 72 65 62 Q72 78 78 61 Q86 70 92 60 Q100 76 108 61 Q116 73 122 62 Q130 75 136 60 Q142 70 146 58 Q146 56 54 56 Z" fill="url(#goldGlazeGrad)" opacity="0.9" />

    {/* Top Rim Pearl Frosting Dots */}
    <ellipse cx="100" cy="58" rx="44" ry="8.5" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeDasharray="1 6.5" strokeLinecap="round" opacity="0.95" />

    {/* 4. CANDLE & GLOWING FLAME */}
    {/* Candle Stick */}
    <rect x="97" y="24" width="6" height="34" rx="2" fill="#FAF5E8" stroke="#D4AF37" strokeWidth="0.75" />
    {/* Candle Gold Spiral Stripes */}
    <path d="M97 30 L103 27 M97 38 L103 35 M97 46 L103 43 M97 54 L103 51" stroke="#D4AF37" strokeWidth="1.2" strokeLinecap="round" />
    {/* Wick */}
    <line x1="100" y1="24" x2="100" y2="18" stroke="#4A3B2C" strokeWidth="1.5" strokeLinecap="round" />

    {/* Ambient Candle Light Halo (pulsing glow) */}
    <g className="animate-flame-glow">
      <circle cx="100" cy="12" r="15" fill="url(#flameGlowRadial)" />
    </g>

    {/* Candle Flame (flickering) */}
    <g className="animate-flame">
      <path
        d="M100 4 C96 10 94 13 95 16 C96 19 98 20 100 20 C102 20 104 19 105 16 C106 13 104 10 100 4 Z"
        fill="url(#flameCoreRadial)"
        filter="drop-shadow(0 0 3px #F59E0B)"
      />
      {/* Inner bright core */}
      <ellipse cx="100" cy="16" rx="2" ry="3.5" fill="#FFFFFF" opacity="0.95" />
    </g>

    {/* Delicate Decorative Sparkle Accents */}
    <g opacity="0.85">
      <path d="M45 40 L46.5 45 L51.5 46.5 L46.5 48 L45 53 L43.5 48 L38.5 46.5 L43.5 45 Z" fill="#D4AF37" />
      <path d="M155 35 L156 39 L160 40 L156 41 L155 45 L154 41 L150 40 L154 39 Z" fill="#D4AF37" />
      <path d="M162 105 L163 108 L166 109 L163 110 L162 113 L161 110 L158 109 L161 108 Z" fill="#D4AF37" />
      <path d="M36 110 L37 113 L40 114 L37 115 L36 118 L35 115 L32 114 L35 113 Z" fill="#D4AF37" />
    </g>
  </svg>
);

export const BirthdayGreetingZone = ({
  isPlayingAudio,
  onStartAudio,
  onToggleAudio,
  onExploreCakes,
  bakeryName = 'Paradise Bakery'
}) => {
  const [isPopping, setIsPopping] = useState(false);
  const cakeButtonRef = useRef(null);

  /**
   * Main Cake Tap Interaction
   * Performs BOTH actions from the single user gesture:
   * A. Starts the birthday music immediately (without restarting if already playing)
   * B. Launches upward celebration confetti burst & plays celebration popper sound
   */
  const handleCakeTap = (e) => {
    if (e) {
      e.preventDefault();
    }

    // A. Start the birthday tune directly within the user click gesture
    if (onStartAudio) {
      onStartAudio();
    }

    // B. Trigger visual cake pop animation
    setIsPopping(true);
    setTimeout(() => setIsPopping(false), 550);

    // C. Play crisp celebratory popper sound
    playPartyPopperSound();

    // D. Launch celebration confetti popper burst from the cake's actual screen location
    try {
      let origin = { x: 0.5, y: 0.52 };
      if (cakeButtonRef.current) {
        const rect = cakeButtonRef.current.getBoundingClientRect();
        origin = {
          x: (rect.left + rect.width / 2) / window.innerWidth,
          y: (rect.top + rect.height * 0.45) / window.innerHeight
        };
      }

      confetti({
        particleCount: 75,
        spread: 85,
        startVelocity: 35,
        origin: origin,
        colors: ['#D4AF37', '#1E3A8A', '#E26D5C', '#FAF8F5', '#9E2A2B', '#DFBA73', '#2563EB', '#F6E7BC'],
        ticks: 240,
        gravity: 0.85,
        scalar: 0.95,
        disableForReducedMotion: true
      });
    } catch (err) {
      // Graceful fallback if canvas-confetti is not supported
    }
  };

  const newYearWishes = [
    "May 2027 bring you beautiful beginnings.",
    "New year, new hopes, endless happiness.",
    "May your dreams bloom in 2027.",
    "Wishing you 365 days of joy and success.",
    "May this year bring more reasons to smile.",
    "May 2027 be filled with peace, love, and sweet moments.",
    "Here's to new adventures and brighter days ahead.",
    "May your 2027 be as bright and sweet as your hopes.",
    "Wishing you a year filled with laughter and light.",
    "May every day of 2027 bring a new reason to celebrate.",
    "Cheers to fresh starts, good health, and boundless joy in 2027.",
    "May this new chapter unfold with warmth and prosperity.",
    "Wishing you sweet memories and grand milestones in 2027.",
    "May the coming year bring peace to your heart and success to your journey.",
    "May 2027 be your sweetest and most wonderful year yet."
  ];

  const [celebrationWish] = useState(
    () => newYearWishes[
      Math.floor(Math.random() * newYearWishes.length)
    ]
  );
  return (
    <div className="birthday-zone relative w-full h-full flex-1 min-h-0 flex flex-col justify-between items-center px-3 py-1 select-none overflow-hidden">
      
      {/* FLOATING PERIMETER DECORATIONS & CELEBRATORY ATMOSPHERE — Subtle Golden Shimmer, Tasteful Balloons & Twinkling Sparkles */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden -z-0">
        
        {/* Subtle Ambient Golden Shimmer behind greeting */}
        <div className="absolute top-[6%] left-1/2 -translate-x-1/2 w-[340px] xs:w-[420px] h-[340px] xs:h-[420px] bg-gradient-to-b from-gold-300/20 via-peach-100/15 to-transparent rounded-full blur-3xl pointer-events-none animate-golden-shimmer" />

        {/* Top Left - Champagne Gold */}
        <div className="absolute top-[2%] left-[2%] xs:left-[4%] animate-balloon-1">
          <Balloon color="#D4AF37" size={36} />
        </div>

        {/* Top Right - Burgundy */}
        <div className="absolute top-[2%] right-[2%] xs:right-[4%] animate-balloon-3">
          <Balloon color="#9E2A2B" stringColor="#D4AF37" size={36} />
        </div>

        {/* Mid-Upper Left - Royal Blue */}
        <div className="absolute top-[22%] left-[1%] xs:left-[3%] animate-balloon-2">
          <Balloon color="#1E3A8A" stringColor="#C5A880" size={30} />
        </div>

        {/* Mid-Upper Right - Ivory / Cream */}
        <div className="absolute top-[24%] right-[1%] xs:right-[3%] animate-balloon-4">
          <Balloon color="#FFFDF9" stringColor="#A9895F" size={32} />
        </div>

        {/* Mid-Lower Left - Coral */}
        <div className="absolute top-[58%] left-[1%] xs:left-[3%] animate-balloon-3">
          <Balloon color="#E26D5C" size={32} />
        </div>

        {/* Mid-Lower Right - Muted Gold */}
        <div className="absolute top-[56%] right-[1%] xs:right-[3%] animate-balloon-1">
          <Balloon color="#C5A880" size={32} />
        </div>

        {/* Bottom Left - Pale Gold */}
        <div className="absolute bottom-[3%] left-[3%] xs:left-[5%] animate-balloon-2">
          <Balloon color="#DFBA73" size={28} />
        </div>

        {/* Bottom Right - Blue */}
        <div className="absolute bottom-[3%] right-[3%] xs:right-[5%] animate-balloon-5">
          <Balloon color="#2563EB" stringColor="#D4AF37" size={28} />
        </div>

        {/* Star Sparkles around periphery & subtle background accents */}
        <div className="absolute top-[9%] left-[20%] animate-star-twinkle">
          <SparkleDot size={12} />
        </div>
        <div className="absolute top-[11%] right-[20%] animate-star-twinkle" style={{ animationDelay: '1.2s' }}>
          <SparkleDot size={11} />
        </div>
        <div className="absolute top-[28%] left-[12%] animate-star-twinkle" style={{ animationDelay: '2.4s' }}>
          <SparkleDot size={9} />
        </div>
        <div className="absolute top-[30%] right-[13%] animate-star-twinkle" style={{ animationDelay: '1.8s' }}>
          <SparkleDot size={10} />
        </div>
        <div className="absolute top-[48%] left-[8%] animate-star-twinkle" style={{ animationDelay: '3.1s' }}>
          <SparkleDot size={9} />
        </div>
        <div className="absolute top-[46%] right-[9%] animate-star-twinkle" style={{ animationDelay: '0.5s' }}>
          <SparkleDot size={10} />
        </div>
        <div className="absolute top-[70%] left-[16%] animate-star-twinkle" style={{ animationDelay: '2s' }}>
          <SparkleDot size={11} />
        </div>
        <div className="absolute top-[68%] right-[16%] animate-star-twinkle" style={{ animationDelay: '0.8s' }}>
          <SparkleDot size={12} />
        </div>

        {/* Delicate Golden Shimmer Soft Micro-Points */}
        <div className="absolute top-[18%] left-[32%] w-1.5 h-1.5 rounded-full bg-gold-400/50 blur-[0.5px] animate-sparkle-soft" style={{ animationDelay: '0.6s' }} />
        <div className="absolute top-[20%] right-[30%] w-1.5 h-1.5 rounded-full bg-gold-300/60 blur-[0.5px] animate-sparkle-soft" style={{ animationDelay: '2.2s' }} />

      </div>

      {/* 1. TOP AREA: Celebration Badge, New Year Heading & Handcrafted Note */}
      <div className="relative z-10 pt-[2rem] flex flex-col items-center gap-1.5 xs:gap-2 shrink-0">
        
        {/* Main Heading: "Happy New Year 2027" */}
        <h1 className="font-serif-luxury text-[44px] xs:text-[44px] sm:text-[60px] font-bold tracking-tight text-navy-900 leading-tight drop-shadow-2xs text-center">
          Happy New Year
          <br />
          2027
        </h1>

        {/* Subtle Gold Line Divider */}
        <div className="w-14 xs:w-16 h-[1.5px] bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-80" />

        {/* Paper-Note New Year Message */}
        <div className="bg-[#FFFDF7] border border-[#E9DFC9] rounded-xl xs:rounded-2xl px-5 py-3 xs:px-6 xs:py-4 mx-auto max-w-[320px] xs:max-w-[350px] shadow-soft rotate-[-1deg] transition-transform hover:rotate-0 duration-300">
          <p className="font-serif-luxury text-base xs:text-lg sm:text-xl font-medium text-[#343B49] leading-relaxed italic tracking-normal text-center">
            “{celebrationWish}”
          </p>
        </div>

      </div>

      {/* 2. MIDDLE AREA: Tap Instruction & Interactive Birthday Cake Celebration Button */}
       <div className="relative z-10 flex flex-col items-center justify-center flex-1 min-h-0 pt-0 pb-0"> 
        

        {/* Main Interactive Cake Celebration Control */}
        <button
          ref={cakeButtonRef}
          onClick={handleCakeTap}
          type="button"
          aria-label="Tap the cake to celebrate!"
          className={`group relative flex flex-col items-center justify-center p-1.5 rounded-3xl transition-transform duration-200 focus:outline-hidden focus-visible:ring-4 focus-visible:ring-gold-400/60 active:scale-95 cursor-pointer select-none ${
            isPopping ? 'animate-cake-pop' : 'hover:scale-[1.03]'
          }`}
          style={{ touchAction: 'manipulation' }}
        >
          {/* Subtle warm glow halo behind cake */}
          <div className="w-32 h-32 xs:w-40 xs:h-40 sm:w-44 sm:h-44 max-h-[25vh] xs:max-h-[27vh] flex items-center justify-center relative">
            <div className="absolute inset-1 bg-gradient-to-t from-gold-300/35 via-peach-100/25 to-transparent rounded-full blur-xl -z-10 group-hover:scale-110 transition-transform duration-500 pointer-events-none" />
            <InteractiveCakeSvg />
          </div>
        </button>

{/* Clear instruction above the cake */}
<div className="inline-flex items-center gap-1.5 text-sm xs:text-base font-semibold text-navy-900/90 tracking-wide bg-white/90 px-3.5 py-1.5 xs:px-4 xs:py-2 rounded-full border border-gold-400/40 shadow-sm mb-2 xs:mb-2.5">
  <Sparkles className="w-4 h-4 xs:w-[18px] xs:h-[18px] text-gold-500 animate-pulse" />
  <span>Tap the cake to celebrate!</span>
  <Sparkles className="w-4 h-4 xs:w-[18px] xs:h-[18px] text-gold-500 animate-pulse" />
</div>
        {/* Optional Audio Music Control Toggle if active */}
        {isPlayingAudio && onToggleAudio && (
          <button
            onClick={onToggleAudio}
            type="button"
            aria-label="Stop Celebration Music"
            title="Mute / Stop Music"
            className="mt-1 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/90 hover:bg-white text-[11px] font-medium text-navy-900 border border-gold-300/60 shadow-2xs transition-all active:scale-95 animate-pulse cursor-pointer"
          >
            
            <span>Loved it? Take a selfie with the fork and tag us on insta @scantada 🤍</span>
          </button>
        )}

      </div>

      


{/* 3. FULL-WIDTH BAKERY CTA */}

<div className="relative z-10 w-full shrink-0 px-4 py-4 mb-3 rounded-2xl bg-gradient-to-br from-[#FFF8E9] via-[#F8E8C9] to-[#EED8AA] border border-[#D6B66F]/70 shadow-[0_8px_24px_rgba(169,137,95,0.18)]">


  {/* Bakery Logo + Name + Tagline */}
  <div className="flex items-center gap-4 mb-3">

    {/* Larger Logo */}
    <div className="w-14 h-14 rounded-2xl bg-[#F8EEDC] border border-[#E8D3A6] flex items-center justify-center shrink-0 shadow-sm">
      <Cake className="w-8 h-8 text-[#A9895F]" />
    </div>

    {/* Larger Bakery Name */}
    <div className="min-w-0 flex-1">
      <h2 className="font-serif-luxury text-xl xs:text-2xl font-bold text-navy-900 leading-tight">
        {bakeryName}
      </h2>

      <p className="text-xs xs:text-sm text-charcoal-600 font-light tracking-wide mt-1">
        Making Every Celebration Sweeter.
      </p>
    </div>

    <Sparkles className="w-5 h-5 text-gold-500 shrink-0" />
  </div>

  {/* Explore Cakes Button */}
  {onExploreCakes && (
    <button
      onClick={onExploreCakes}
      type="button"
      aria-label={`Explore cakes from ${bakeryName}`}
      className="group w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-navy-950 text-white text-sm font-semibold border border-gold-400/60 shadow-soft hover:border-gold-300 active:scale-[0.98] transition-all duration-200"
    >
      <span>Explore Our Cakes</span>
      <ArrowRight className="w-4 h-4 text-gold-300 group-hover:translate-x-1 transition-transform" />
    </button>
  )}

</div>




    </div>
  );
};
