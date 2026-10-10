import React, { useState } from 'react';
import { DEMO_WHATSAPP_NUMBER } from '../config/bakeryConfig';

import {
  ArrowLeft,
  Phone,
  MapPin,
  X,
  ChevronLeft,
  ChevronRight,
  Star,
  ArrowRight,
  Sparkles,
  Cake,
} from 'lucide-react';

import { FaWhatsapp } from 'react-icons/fa';
import { SiInstagram } from 'react-icons/si';


/**
 * Official Brand SVG Icons
 */
const OfficialWhatsAppIcon = ({ className = "w-5 h-5 text-[#25D366]" }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.477 2 12C2 13.82 2.488 15.526 3.34 17L2.05 21.75L6.94 20.48C8.38 21.44 10.12 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM12 3.65C16.612 3.65 20.35 7.388 20.35 12C20.35 16.612 16.612 20.35 12 20.35C10.378 20.35 8.857 19.882 7.574 19.076L7.25 18.872L4.35 19.632L5.126 16.79L4.912 16.45C4.053 15.087 3.65 13.585 3.65 12C3.65 7.388 7.388 3.65 12 3.65ZM8.96 6.94C8.75 6.94 8.41 7.02 8.13 7.33C7.85 7.63 7.05 8.39 7.05 9.93C7.05 11.47 8.17 12.95 8.33 13.16C8.48 13.38 10.5 16.49 13.59 17.83C14.33 18.15 14.9 18.34 15.36 18.49C16.1 18.72 16.77 18.69 17.3 18.61C17.89 18.52 19.12 17.86 19.38 17.12C19.64 16.38 19.64 15.75 19.56 15.61C19.48 15.48 19.27 15.4 18.95 15.24C18.63 15.08 17.06 14.31 16.77 14.2C16.48 14.09 16.27 14.04 16.05 14.36C15.84 14.68 15.24 15.39 15.06 15.59C14.88 15.8 14.7 15.83 14.38 15.67C14.06 15.51 13.03 15.17 11.8 14.08C10.84 13.23 10.2 12.18 10.01 11.86C9.82 11.54 9.99 11.37 10.15 11.21C10.3 11.06 10.48 10.83 10.64 10.65C10.8 10.46 10.86 10.33 10.97 10.11C11.08 9.9 11.02 9.71 10.94 9.55C10.86 9.39 10.25 7.88 10 7.27C9.76 6.67 9.5 6.75 9.32 6.74C9.14 6.73 8.94 6.73 8.73 6.73L8.96 6.94Z"
      fill="#25D366"
    />
  </svg>
);

const OfficialInstagramIcon = ({ className = "w-5 h-5 text-[#E4405F]" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const GoogleIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
    />
  </svg>
);

/**
 * Artisanal Bakery Crest Logo
 */
const BakeryLogoCrest = () => (
  <div className="w-14 h-14 xs:w-16 xs:h-16 rounded-2xl bg-gradient-to-tr from-cream-100 via-white to-gold-100 border border-gold-400/50 shadow-soft flex items-center justify-center shrink-0 p-1">
    <div className="w-full h-full rounded-xl border border-dashed border-gold-500/40 flex flex-col items-center justify-center text-center bg-white/90">
      <span className="text-lg xs:text-xl leading-none">🍰</span>
      <span className="font-serif-luxury font-bold text-[9px] xs:text-[10px] text-navy-900 tracking-wider mt-0.5">
        PB
      </span>
    </div>
  </div>
);

/**
 * Interactive 5-Star Rating Modal for Google Reviews
 */
const FiveStarRatingModal = ({ isOpen, onClose, targetUrl, bakeryName }) => {
  const [selectedRating, setSelectedRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);

  if (!isOpen) return null;

  const handleContinue = () => {
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/75 backdrop-blur-xs transition-opacity animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-sm bg-white rounded-3xl p-6 shadow-2xl border border-gold-300/60 text-center flex flex-col items-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 p-1 rounded-full text-charcoal-500 hover:text-navy-900 hover:bg-cream-100"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-12 h-12 rounded-2xl bg-gold-100/70 border border-gold-300 flex items-center justify-center text-gold-600">
          <Star className="w-6 h-6 fill-gold-400 text-gold-500" />
        </div>

        <div>
          <h3 className="font-serif-luxury font-bold text-xl text-navy-900">
            How was your experience?
          </h3>
          <p className="text-xs text-charcoal-600 mt-1">
            Your review helps {bakeryName} create sweeter memories.
          </p>
        </div>

        {/* 5 Interactive Stars */}
        <div className="flex items-center justify-center gap-2 my-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              onClick={() => setSelectedRating(star)}
              className="p-1 focus:outline-hidden transform hover:scale-125 transition-transform"
              aria-label={`Select ${star} stars`}
            >
              <Star
                className={`w-7 h-7 transition-colors ${
                  (hoverRating || selectedRating) >= star
                    ? 'fill-gold-400 text-gold-500'
                    : 'text-cream-300 fill-cream-100'
                }`}
              />
            </button>
          ))}
        </div>

        <button
          onClick={handleContinue}
          type="button"
          className="w-full py-3.5 px-4 rounded-full bg-navy-900 hover:bg-charcoal-800 text-white font-semibold text-sm shadow-soft transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>Continue to Google Reviews</span>
          <ArrowRight className="w-4 h-4 text-gold-400" />
        </button>
      </div>
    </div>
  );
};

/**
 * Cake Lightbox Detail Modal
 */
const CakeDetailModal = ({
  cake,
  isOpen,
  onClose,
  onNext,
  onPrev,
  hasMultiple = true,
  whatsappNumber = DEMO_WHATSAPP_NUMBER,
  bakeryName = "Paradise Bakery"
}) => {
  if (!isOpen || !cake) return null;

  const prefilledText = encodeURIComponent(
    `Hi ${bakeryName}! I saw the "${cake.title}" in your cake gallery and would love to enquire about ordering.`
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${prefilledText}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-navy-950/80 backdrop-blur-xs transition-opacity"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col border border-cream-200 animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-cream-200 bg-cream-50/80">
          <span className="font-serif-luxury font-bold text-base text-navy-900 truncate">
            {cake.title}
          </span>
          <button
            onClick={onClose}
            aria-label="Close image viewer"
            className="p-1.5 rounded-full text-charcoal-700 hover:text-navy-900 hover:bg-cream-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Large Image with Next/Prev navigation */}
        <div className="relative bg-cream-100 flex items-center justify-center min-h-[260px] sm:min-h-[340px]">
          <img
            src={cake.imageUrl}
            alt={cake.alt || cake.title}
            className="w-full max-h-[55vh] object-cover sm:object-contain select-none"
          />

          {hasMultiple && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onPrev();
                }}
                aria-label="Previous cake"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-navy-900 shadow-md flex items-center justify-center cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onNext();
                }}
                aria-label="Next cake"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-navy-900 shadow-md flex items-center justify-center cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
        </div>

        {/* Action Button */}
        <div className="p-4 sm:p-5 bg-white flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-cream-100">
          <span className="text-xs text-charcoal-600 font-medium">
            Handcrafted for sweet celebrations
          </span>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-soft transition-all duration-200"
          >
            <OfficialWhatsAppIcon className="w-4 h-4 fill-white text-white" />
            <span>Order on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export const CakeGalleryView = ({
  gallery,
  contact,
  bakeryName = "Paradise Bakery",
  bakeryTagline = "Making Every Celebration Sweeter.",
  googleReviewUrl = "https://www.google.com/maps/place/Paradise+Baker's/@17.9122305,77.527941,19z/data=!4m8!3m7!1s0x3bcec7ae23b8ff23:0x5bfc0e58aea07802!8m2!3d17.9122397!4d77.5281425!9m1!1b1!16s%2Fg%2F11qpws_x1c?entry=ttu&g_ep=EgoyMDI2MTAwNy4wIKXMDSoASAFQAw%3D%3D",
  onBack
}) => {
  const [selectedCakeIndex, setSelectedCakeIndex] = useState(null);
  const [isRatingModalOpen, setIsRatingModalOpen] = useState(false);

  const handleSelectCake = (cake) => {
    const idx = gallery.findIndex((c) => c.id === cake.id);
    setSelectedCakeIndex(idx !== -1 ? idx : 0);
  };

  const handleNext = () => {
    if (selectedCakeIndex !== null) {
      setSelectedCakeIndex((prev) => (prev + 1) % gallery.length);
    }
  };

  const handlePrev = () => {
    if (selectedCakeIndex !== null) {
      setSelectedCakeIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
    }
  };

  const activeCake = selectedCakeIndex !== null ? gallery[selectedCakeIndex] : null;
  const whatsappNumber = contact?.whatsapp?.number || DEMO_WHATSAPP_NUMBER;
  const prefilledGalleryMsg = encodeURIComponent(
    `Hi ${bakeryName}! I am browsing your cake catalogue and would like to order/enquire about an upcoming celebration cake.`
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${prefilledGalleryMsg}`;
  const mapsUrl = contact?.directions?.url;
  const phoneTel = contact?.phone?.tel;
  const instagramUrl = contact?.instagram?.url;

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-navy-900 py-6 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto flex flex-col justify-between">
      
      <div>
        {/* 1. TOP NAVIGATION: Return to New Year Celebration */}
        <div className="w-full flex items-center justify-between mb-5">
          <button
            onClick={onBack}
            type="button"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold bg-white text-navy-900 hover:text-navy-950 border border-gold-400/40 shadow-soft hover:shadow-md transition-all cursor-pointer active:scale-98"
          >
            <ArrowLeft className="w-4 h-4 text-gold-600" />
            <span>Back to Celebration</span>
          </button>
        </div>

        {/* 2. DEDICATED BAKERY BRANDING & CONTACT CARD */}
        <div className="w-full bg-white rounded-3xl p-4 sm:p-6 border border-cream-200/90 shadow-soft-lg mb-8 flex flex-col gap-4">
          
          {/* Bakery Header Info */}
          
          <div className="flex items-center gap-3.5 pb-3 border-b border-cream-100">
          <div className="w-14 h-14 rounded-2xl bg-[#F8EEDC] border border-[#E8D3A6] flex items-center justify-center shrink-0 shadow-sm">
      <Cake className="w-8 h-8 text-[#A9895F]" />
    </div>
            <div className="flex-1 min-w-0 text-left">
             
              <h2 className="font-serif-luxury font-bold text-xl sm:text-3xl text-navy-900 tracking-tight leading-tight truncate">
                {bakeryName}
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-600 font-medium truncate mt-0.5">
                {bakeryTagline}
              </p>
            </div>
          </div>

          {/* 4 Quick Contact Buttons in One Row */}
<div className="grid grid-cols-4 gap-2 sm:gap-3">
  {/* Location */}
  {mapsUrl && (
    <a
      href={mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${bakeryName} location in Google Maps`}
      title="Directions"
      className="flex flex-col items-center justify-center py-2.5 sm:py-3 rounded-2xl bg-amber-50/60 hover:bg-white text-amber-900 border border-amber-200/70 shadow-2xs hover:shadow-soft transition-all active:scale-95 group"
    >
      <MapPin className="w-5 h-5 text-[#C49A45] group-hover:scale-110 transition-transform mb-1" />
      <span className="text-[11px] font-semibold text-charcoal-700">Location</span>
    </a>
  )}

  {/* WhatsApp */}
  {whatsappNumber && (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with ${bakeryName} on WhatsApp`}
      title="WhatsApp Us"
      className="flex flex-col items-center justify-center py-2.5 sm:py-3 rounded-2xl bg-emerald-50 hover:bg-white text-emerald-900 border border-emerald-200/70 shadow-2xs hover:shadow-soft transition-all active:scale-95 group"
    >
      <FaWhatsapp className="w-5 h-5 text-[#25D366] group-hover:scale-110 transition-transform mb-1" />
      <span className="text-[11px] font-semibold text-emerald-800">WhatsApp</span>
    </a>
  )}

  {/* Instagram */}
  {instagramUrl && (
    <a
      href={instagramUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${bakeryName} on Instagram`}
      title="Instagram"
      className="flex flex-col items-center justify-center py-2.5 sm:py-3 rounded-2xl bg-rose-50/60 hover:bg-white text-rose-900 border border-rose-200/70 shadow-2xs hover:shadow-soft transition-all active:scale-95 group"
    >
      <SiInstagram className="w-5 h-5 text-[#E1306C] group-hover:scale-110 transition-transform mb-1" />
      <span className="text-[11px] font-semibold text-charcoal-700">Instagram</span>
    </a>
  )}

  {/* Call */}
  {phoneTel && (
    <a
      href={`tel:${phoneTel}`}
      aria-label={`Call ${bakeryName}`}
      title="Call Us"
      className="flex flex-col items-center justify-center py-2.5 sm:py-3 rounded-2xl bg-cream-50 hover:bg-white text-navy-900 border border-cream-200/90 shadow-2xs hover:shadow-soft transition-all active:scale-95 group"
    >
      <Phone className="w-5 h-5 text-navy-900 group-hover:scale-110 transition-transform mb-1" />
      <span className="text-[11px] font-semibold text-charcoal-700">Call</span>
    </a>
  )}
</div>

          {/* Google Reviews CTA Button */}
          <button
            onClick={() => window.open(googleReviewUrl, '_blank', 'noopener,noreferrer')}
            type="button"
            className="w-full flex items-center justify-between px-4 py-2.5 rounded-2xl bg-gradient-to-r from-amber-50/90 via-white to-amber-50/90 hover:from-amber-100/90 hover:to-amber-100/80 text-navy-900 border border-gold-400/60 shadow-2xs hover:shadow-soft transition-all active:scale-98 cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-white shadow-3xs flex items-center justify-center shrink-0">
                <GoogleIcon className="w-3.5 h-3.5" />
              </div>
              <span className="font-semibold text-xs sm:text-sm text-navy-900 tracking-tight">
                Rate Us on Google
              </span>
            </div>

            <div className="flex items-center gap-0.5 text-gold-500 text-xs sm:text-sm">
              <span>★★★★★</span>
            </div>
          </button>

        </div>

        {/* 3. CAKE CATALOGUE HEADER */}
        <div className="flex flex-col items-center text-center mb-6">
          <h1 className="font-serif-luxury text-2xl sm:text-4xl md:text-5xl font-bold text-navy-900 tracking-tight">
            Our Handcrafted Cakes
          </h1>
          
        </div>

        {/* 4. CAKE GRID: 2 columns on mobile, 3 on tablet, 4 on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
          {gallery.map((cake) => (
            <div
              key={cake.id}
              onClick={() => handleSelectCake(cake)}
              className="group cursor-pointer flex flex-col bg-white rounded-2xl overflow-hidden border border-cream-200/90 shadow-2xs hover:shadow-soft transition-all duration-300 hover:-translate-y-0.5"
              tabIndex={0}
              role="button"
              aria-label={`View ${cake.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleSelectCake(cake);
                }
              }}
            >
              {/* Aspect-ratio container for cake photo */}
              <div className="relative aspect-square w-full bg-cream-100 overflow-hidden">
                <img
                  src={cake.imageUrl}
                  alt={cake.alt || cake.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              {/* Card content: Cake Name */}
              <div className="p-2.5 sm:p-3 text-center bg-white flex items-center justify-center min-h-[44px]">
                <h3 className="font-serif-luxury text-xs sm:text-sm font-semibold text-navy-900 line-clamp-1 group-hover:text-gold-600 transition-colors">
                  {cake.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. BOTTOM ACTION & FOOTER */}
      <div className="mt-10 pt-6 border-t border-cream-200 text-center flex flex-col items-center gap-3">
        
        {/* Direct WhatsApp Ordering */}
        {contact?.whatsapp?.enabled && (
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-soft transition-all duration-200 active:scale-98"
          >
            <OfficialWhatsAppIcon className="w-4 h-4 fill-white text-white" />
            <span>Order Custom Cake on WhatsApp</span>
          </a>
        )}

        <p className="text-xs text-charcoal-600 font-light">
          Custom flavors, eggless options, and bespoke designs available on request.
        </p>


        {/* Scantada Footer */}
        <div className="pt-1 px-3 pb-2 text-center shrink-0">
<p className="text-xs xs:text-sm text-charcoal-600 font-light tracking-wide pb-20">
            Made with love by{' '}
            <a
              href="https://scantada.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-charcoal-700 hover:text-navy-900 underline underline-offset-2 decoration-gold-400 hover:decoration-navy-900 transition-colors"
            >
              Scantada.com
            </a>
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      <CakeDetailModal
        cake={activeCake}
        isOpen={selectedCakeIndex !== null}
        onClose={() => setSelectedCakeIndex(null)}
        onNext={handleNext}
        onPrev={handlePrev}
        whatsappNumber={whatsappNumber}
        bakeryName={bakeryName}
      />

      

    </div>
  );
};
