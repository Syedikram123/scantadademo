import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Instagram, Youtube, Sparkles, ArrowRight } from 'lucide-react';

/**
 * Clean & Refined Bakery Logo Crest
 */
const BakeryLogo = () => (
  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white border border-gold-400/40 shadow-soft flex items-center justify-center mb-4">
    <div className="w-13 h-13 sm:w-16 sm:h-16 rounded-full border border-dashed border-gold-500/40 flex flex-col items-center justify-center text-center">
      <span className="text-lg sm:text-xl">🍰</span>
      <span className="font-serif-luxury font-bold text-[11px] sm:text-xs text-navy-900 tracking-wider">
        PB
      </span>
    </div>
  </div>
);

export const BakeryScreen = ({ bakery, onExploreCakes }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const contact = bakery.contact || {};

  // Build configured action buttons
  const contactButtons = [];

  if (contact?.whatsapp?.enabled && contact.whatsapp.number) {
    const encodedMsg = encodeURIComponent(
      contact.whatsapp.prefilledMessage || `Hi ${bakery.name}! I would like to inquire about a celebration cake.`
    );
    contactButtons.push({
      id: 'whatsapp',
      label: contact.whatsapp.label || 'WhatsApp',
      icon: MessageCircle,
      href: `https://wa.me/${contact.whatsapp.number}?text=${encodedMsg}`,
      isExternal: true,
      ariaLabel: `Open WhatsApp chat with ${bakery.name}`
    });
  }

  if (contact?.phone?.enabled && contact.phone.tel) {
    contactButtons.push({
      id: 'phone',
      label: contact.phone.label || 'Call',
      icon: Phone,
      href: `tel:${contact.phone.tel}`,
      isExternal: false,
      ariaLabel: `Call ${bakery.name}`
    });
  }

  if (contact?.directions?.enabled && contact.directions.url) {
    contactButtons.push({
      id: 'directions',
      label: contact.directions.label || 'Directions',
      icon: MapPin,
      href: contact.directions.url,
      isExternal: true,
      ariaLabel: `Get directions to ${bakery.name}`
    });
  }

  if (contact?.instagram?.enabled && contact.instagram.url) {
    contactButtons.push({
      id: 'instagram',
      label: contact.instagram.label || 'Instagram',
      icon: Instagram,
      href: contact.instagram.url,
      isExternal: true,
      ariaLabel: `Visit ${bakery.name} on Instagram`
    });
  }

  if (contact?.youtube?.enabled && contact.youtube.url) {
    contactButtons.push({
      id: 'youtube',
      label: contact.youtube.label || 'YouTube',
      icon: Youtube,
      href: contact.youtube.url,
      isExternal: true,
      ariaLabel: `Visit ${bakery.name} on YouTube`
    });
  }

  return (
    <section 
      id="bakery-screen" 
      aria-label="Paradise Bakery Introduction"
      className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-transparent via-white/70 to-cream-50"
    >
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
        
        {/* Bakery Logo */}
        <BakeryLogo />

        {/* Bakery Name: Paradise Bakery */}
        <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-navy-900 tracking-tight">
          {bakery.name}
        </h2>

        {/* Tagline: “Making Every Celebration Sweeter.” */}
        <p className="mt-2 text-xs sm:text-sm font-semibold text-gold-600 tracking-widest uppercase">
          {bakery.tagline}
        </p>

        {/* Short Description: “Beautiful cakes for your sweetest moments.” */}
        <p className="mt-3 text-base sm:text-lg text-charcoal-700 max-w-lg leading-relaxed font-light">
          {bakery.description}
        </p>

        {/* Supporting Visual: 1 High-Quality Demo Cake Photo */}
        {bakery.heroPhoto?.url && (
          <div className="mt-8 w-full max-w-lg rounded-2xl overflow-hidden shadow-soft border border-cream-200 bg-white p-2">
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-cream-100">
              {!imageLoaded && (
                <div className="absolute inset-0 bg-cream-100 animate-pulse" />
              )}
              <img
                src={bakery.heroPhoto.url}
                alt={bakery.heroPhoto.alt}
                loading="lazy"
                onLoad={() => setImageLoaded(true)}
                className={`w-full h-full object-cover object-center transition-opacity duration-500 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </div>
          </div>
        )}

        {/* PRIMARY ACTION: Explore Our Cakes (Most prominent CTA) */}
        <div className="mt-8 w-full max-w-md">
          <button
            onClick={onExploreCakes}
            type="button"
            className="group w-full py-4 px-6 rounded-full text-base sm:text-lg font-semibold bg-navy-900 hover:bg-charcoal-800 text-white shadow-soft-lg hover:shadow-gold-glow transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-3 cursor-pointer"
          >
            <span>Explore Our Cakes</span>
            <ArrowRight className="w-5 h-5 text-gold-400 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* SECONDARY ACTIONS: Compact Contact & Social Buttons */}
        {contactButtons.length > 0 && (
          <div className="mt-6 w-full max-w-md">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {contactButtons.map((btn) => {
                const Icon = btn.icon;
                return (
                  <a
                    key={btn.id}
                    href={btn.href}
                    target={btn.isExternal ? "_blank" : undefined}
                    rel={btn.isExternal ? "noopener noreferrer" : undefined}
                    aria-label={btn.ariaLabel}
                    className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-white hover:bg-cream-100 text-charcoal-800 border border-cream-200 shadow-2xs hover:shadow-soft transition-all duration-200 text-xs sm:text-sm font-medium active:scale-98 min-h-[44px]"
                  >
                    <Icon className="w-4 h-4 text-gold-600 shrink-0" />
                    <span className="truncate">{btn.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
