import React from 'react';
import { Phone, MessageCircle, MapPin, Instagram, Youtube, Sparkles, Send } from 'lucide-react';

export const ContactSection = ({ contact, bakeryName }) => {
  // Dynamically compile active, configured contact buttons
  const buttons = [];

  if (contact?.phone?.enabled && contact.phone.tel) {
    buttons.push({
      id: 'phone',
      label: contact.phone.label || 'Call Us',
      subtitle: contact.phone.subtitle || 'Order or enquire directly',
      icon: Phone,
      href: `tel:${contact.phone.tel}`,
      variant: 'primary',
      ariaLabel: `Call ${bakeryName} at ${contact.phone.display || contact.phone.tel}`
    });
  }

  if (contact?.whatsapp?.enabled && contact.whatsapp.number) {
    const encodedMsg = encodeURIComponent(contact.whatsapp.prefilledMessage || `Hi ${bakeryName}! I would like to inquire about a celebration cake.`);
    buttons.push({
      id: 'whatsapp',
      label: contact.whatsapp.label || 'WhatsApp',
      subtitle: contact.whatsapp.subtitle || 'Chat & custom orders',
      icon: MessageCircle,
      href: `https://wa.me/${contact.whatsapp.number}?text=${encodedMsg}`,
      variant: 'whatsapp',
      isExternal: true,
      ariaLabel: `Open WhatsApp chat with ${bakeryName}`
    });
  }

  if (contact?.directions?.enabled && contact.directions.url) {
    buttons.push({
      id: 'directions',
      label: contact.directions.label || 'Get Directions',
      subtitle: contact.directions.subtitle || 'Visit our bakery kitchen',
      icon: MapPin,
      href: contact.directions.url,
      variant: 'secondary',
      isExternal: true,
      ariaLabel: `Get directions to ${bakeryName} in Google Maps`
    });
  }

  if (contact?.instagram?.enabled && contact.instagram.url) {
    buttons.push({
      id: 'instagram',
      label: contact.instagram.label || 'Instagram',
      subtitle: contact.instagram.subtitle || 'Follow our latest creations',
      icon: Instagram,
      href: contact.instagram.url,
      variant: 'instagram',
      isExternal: true,
      ariaLabel: `Visit ${bakeryName} on Instagram`
    });
  }

  if (contact?.youtube?.enabled && contact.youtube.url) {
    buttons.push({
      id: 'youtube',
      label: contact.youtube.label || 'YouTube',
      subtitle: contact.youtube.subtitle || 'Decorating masterclasses',
      icon: Youtube,
      href: contact.youtube.url,
      variant: 'youtube',
      isExternal: true,
      ariaLabel: `Visit ${bakeryName} on YouTube`
    });
  }

  if (buttons.length === 0) return null;

  return (
    <section 
      id="contact-section" 
      aria-label="Contact and Social Links"
      className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-transparent via-blush-50/60 to-cream-50"
    >
      <div className="max-w-3xl mx-auto text-center">
        
        {/* Section Heading & Subtitle */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-100 text-rose-800 mb-3.5">
          <Sparkles className="w-3 h-3 text-gold-600" />
          <span>Connect With Us</span>
        </div>

        <h3 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-cocoa-900 tracking-tight">
          Let's Make Something Sweet
        </h3>

        <p className="mt-3 text-base sm:text-lg text-cocoa-700 font-light max-w-md mx-auto leading-relaxed">
          “Have a celebration coming up? We'd love to help.”
        </p>

        {/* Contact Buttons Grid (Balanced 2-column on mobile & tablet) */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 max-w-2xl mx-auto">
          {buttons.map((btn) => {
            const Icon = btn.icon;
            
            // Custom styling based on button variant
            let cardClasses = "bg-white hover:bg-cream-50 text-cocoa-800 border border-cream-200/90 shadow-2xs hover:shadow-soft hover:border-blush-300";
            let iconBoxClasses = "bg-cream-100 text-cocoa-800";

            if (btn.variant === 'primary') {
              cardClasses = "bg-cocoa-900 hover:bg-cocoa-950 text-white border-transparent shadow-soft hover:shadow-soft-lg";
              iconBoxClasses = "bg-white/15 text-gold-300";
            } else if (btn.variant === 'whatsapp') {
              cardClasses = "bg-emerald-800 hover:bg-emerald-900 text-white border-transparent shadow-soft hover:shadow-soft-lg";
              iconBoxClasses = "bg-white/15 text-emerald-200";
            } else if (btn.variant === 'instagram') {
              cardClasses = "bg-white hover:bg-blush-50/50 text-cocoa-800 border border-blush-200/80 shadow-2xs hover:shadow-soft";
              iconBoxClasses = "bg-gradient-to-tr from-amber-400 via-rose-500 to-purple-600 text-white";
            } else if (btn.variant === 'youtube') {
              cardClasses = "bg-white hover:bg-rose-50/40 text-cocoa-800 border border-cream-200/90 shadow-2xs hover:shadow-soft";
              iconBoxClasses = "bg-red-600 text-white";
            }

            return (
              <a
                key={btn.id}
                href={btn.href}
                target={btn.isExternal ? "_blank" : undefined}
                rel={btn.isExternal ? "noopener noreferrer" : undefined}
                aria-label={btn.ariaLabel}
                className={`group flex items-center p-3.5 sm:p-4 rounded-2xl transition-all duration-300 active:scale-98 min-h-[64px] ${cardClasses}`}
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-108 ${iconBoxClasses}`}>
                  <Icon className="w-5 h-5" />
                </div>

                <div className="ml-3.5 text-left flex-1 min-w-0">
                  <div className="font-serif-luxury font-bold text-sm sm:text-base leading-tight truncate">
                    {btn.label}
                  </div>
                  <div className={`text-[11px] sm:text-xs truncate font-light mt-0.5 opacity-80 ${btn.variant === 'primary' || btn.variant === 'whatsapp' ? 'text-cream-100' : 'text-cocoa-600'}`}>
                    {btn.subtitle}
                  </div>
                </div>

                <div className="ml-2 shrink-0 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-sm">
                  →
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
};
