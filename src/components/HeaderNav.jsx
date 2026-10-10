import React, { useState, useEffect } from 'react';
import { Cake, Sparkles, Phone, QrCode, Share2, Check } from 'lucide-react';

export const HeaderNav = ({ bakeryName = "Paradise Bakery", onOpenDemoDrawer }) => {
  const [scrolled, setScrolled] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Happy New Year 2027! ✨ | ${bakeryName}`,
          text: `Wishing you a sweet and joyous New Year 2027. Handcrafted celebration experience by ${bakeryName}.`,
          url: window.location.href,
        });
        return;
      } catch (err) {
        // Fallback to clipboard
      }
    }
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-3 sm:top-5 inset-x-0 z-40 px-3 sm:px-6 pointer-events-none flex justify-center">
      <nav
        aria-label="Quick navigation"
        className={`pointer-events-auto max-w-2xl w-full flex items-center justify-between px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-300 ${
          scrolled
            ? 'glass-panel shadow-soft-lg border-blush-200/60 bg-white/90'
            : 'bg-white/70 backdrop-blur-sm border border-cream-200/60 shadow-2xs'
        }`}
      >
        {/* Brand identity pill */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 text-left group"
        >
          <div className="w-7 h-7 rounded-full bg-rose-100 flex items-center justify-center text-rose-700 shadow-2xs group-hover:rotate-12 transition-transform">
            <Cake className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif-luxury font-bold text-xs sm:text-sm text-cocoa-900 tracking-tight leading-none">
              {bakeryName}
            </span>
            <span className="text-[9px] sm:text-[10px] text-rose-600 font-medium tracking-wide">
              New Year Experience
            </span>
          </div>
        </button>

        {/* Action buttons */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Quick jump to Cakes */}
          <button
            onClick={() => scrollToSection('cake-gallery-section')}
            className="hidden xs:inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold text-cocoa-700 hover:text-rose-700 hover:bg-cream-100 transition-colors"
          >
            <span>Cakes</span>
          </button>

          {/* Quick jump to Contact */}
          <button
            onClick={() => scrollToSection('contact-section')}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold bg-rose-50 hover:bg-rose-100 text-rose-800 border border-rose-200/60 transition-colors"
          >
            <Phone className="w-3 h-3 text-rose-600" />
            <span className="hidden sm:inline">Contact</span>
          </button>

          {/* Share or QR preview button */}
          <button
            onClick={handleShare}
            aria-label="Share New Year greeting link"
            title="Share this celebration page"
            className="p-1.5 sm:p-2 rounded-full text-cocoa-600 hover:text-cocoa-900 hover:bg-cream-200/60 transition-colors"
          >
            {copied ? (
              <Check className="w-4 h-4 text-emerald-600" />
            ) : (
              <Share2 className="w-4 h-4" />
            )}
          </button>

          {/* Dynamic Demo QR Drawer Toggle button */}
          {onOpenDemoDrawer && (
            <button
              onClick={onOpenDemoDrawer}
              aria-label="Open QR Customizer Demo"
              title="Test QR customization & recipient names"
              className="p-1.5 sm:p-2 rounded-full text-gold-600 hover:text-gold-700 hover:bg-gold-50 transition-colors"
            >
              <QrCode className="w-4 h-4" />
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};
