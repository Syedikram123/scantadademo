import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Sparkles, MessageCircle, Heart, Share2 } from 'lucide-react';

export const LightboxModal = ({
  cake,
  isOpen,
  onClose,
  onNext,
  onPrev,
  hasMultiple = true,
  whatsappNumber = "15552345678"
}) => {
  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
    },
    [isOpen, onClose, onNext, onPrev]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown, isOpen]);

  if (!isOpen || !cake) return null;

  const whatsappInquiryUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Hi Paradise Bakery! I saw the "${cake.title}" in your cake gallery and would love to ask about availability and custom ordering for an upcoming celebration.`
  )}`;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-cocoa-950/80 backdrop-blur-md transition-all duration-300 animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-cake-title"
    >
      {/* Modal Container */}
      <div
        className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col border border-blush-200/50"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-cream-200 bg-cream-50/80">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-100 text-rose-800">
            <Sparkles className="w-3 h-3 text-gold-600" />
            {cake.category || cake.theme}
          </span>

          <button
            onClick={onClose}
            aria-label="Close image viewer"
            className="p-2 rounded-full text-cocoa-700 hover:text-cocoa-950 hover:bg-cream-200/60 transition-colors focus:outline-hidden focus:ring-2 focus:ring-rose-400"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Content Container */}
        <div className="relative flex-1 bg-cream-100 flex items-center justify-center overflow-hidden min-h-[260px] sm:min-h-[380px]">
          <img
            src={cake.imageUrl}
            alt={cake.alt || cake.title}
            className="w-full h-full max-h-[58vh] object-cover sm:object-contain select-none transition-all duration-300"
          />

          {/* Previous / Next Arrow Buttons */}
          {hasMultiple && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onPrev();
                }}
                aria-label="Previous cake"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-cocoa-900 shadow-md flex items-center justify-center transition-all hover:scale-105 active:scale-95 focus:outline-hidden"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onNext();
                }}
                aria-label="Next cake"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-cocoa-900 shadow-md flex items-center justify-center transition-all hover:scale-105 active:scale-95 focus:outline-hidden"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>

        {/* Modal Footer / Details */}
        <div className="p-5 sm:p-6 bg-white flex flex-col gap-3">
          <div>
            <h3 id="modal-cake-title" className="font-serif-luxury text-xl sm:text-2xl font-bold text-cocoa-900">
              {cake.title}
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-cocoa-600 leading-relaxed font-light">
              {cake.description}
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-cream-100">
            <span className="text-xs text-cocoa-500 font-medium">
              Illustrative catalogue design • Inquire for custom flavours & tiers
            </span>

            {/* Quick Inquiry CTA */}
            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-rose-700 hover:bg-rose-800 text-white shadow-soft transition-all duration-200 active:scale-98"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Inquire on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
