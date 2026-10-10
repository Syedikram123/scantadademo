import React, { useState } from 'react';
import { X, QrCode, Sparkles, User, RefreshCw, Check, ExternalLink } from 'lucide-react';

export const QRDemoDrawer = ({
  isOpen,
  onClose,
  recipientName,
  setRecipientName,
  bakery,
  onReset
}) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex justify-end bg-cocoa-950/40 backdrop-blur-xs transition-opacity duration-300 animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-md bg-white h-full shadow-2xl overflow-y-auto p-6 flex flex-col justify-between border-l border-cream-200 animate-slideLeft"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-cream-200">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gold-100 flex items-center justify-center text-gold-700">
                <QrCode className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif-luxury font-bold text-lg text-cocoa-900">
                  Scantada QR Simulator
                </h3>
                <p className="text-xs text-cocoa-500">
                  Dynamic Cake Topper Experience
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-cocoa-500 hover:text-cocoa-900 hover:bg-cream-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Explanation */}
          <div className="my-5 p-4 rounded-2xl bg-cream-50 border border-blush-200/60 text-xs text-cocoa-700 leading-relaxed space-y-2">
            <div className="flex items-center gap-1.5 font-semibold text-rose-800">
              <Sparkles className="w-3.5 h-3.5" />
              <span>How Scantada QR Works:</span>
            </div>
            <p>
              When a bakery customer scans the QR code on the cake topper, the experience immediately loads this personalized greeting.
            </p>
          </div>

          {/* Test Custom Name Field */}
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-cocoa-800 mb-1.5 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-rose-600" />
                <span>Personalized Recipient Name (Optional)</span>
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="e.g. Sarah, Dad, Emma..."
                  value={recipientName}
                  onChange={(e) => setRecipientName(e.target.value)}
                  className="flex-1 px-3.5 py-2 text-sm rounded-xl border border-cream-300 focus:outline-hidden focus:ring-2 focus:ring-rose-400 bg-white"
                />
                {recipientName && (
                  <button
                    onClick={() => setRecipientName('')}
                    className="px-3 py-2 text-xs rounded-xl bg-cream-100 text-cocoa-700 hover:bg-cream-200"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            {/* Quick Presets */}
            <div>
              <span className="text-[11px] font-medium text-cocoa-500 block mb-1.5">
                Quick Test Presets:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {['Emily 🌸', 'Alexander ⭐', 'Mom ❤️', 'Sophia ✨'].map((name) => (
                  <button
                    key={name}
                    onClick={() => setRecipientName(name.replace(/[^a-zA-Z]/g, ''))}
                    className="px-2.5 py-1 text-xs rounded-full bg-cream-100 hover:bg-rose-100 hover:text-rose-800 text-cocoa-700 transition-colors"
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>

            {/* Simulated QR Code Graphic */}
            <div className="mt-6 p-4 rounded-2xl bg-gradient-to-tr from-cream-100 via-white to-blush-50 border border-gold-300/40 text-center flex flex-col items-center">
              <span className="text-[11px] font-semibold tracking-wider text-cocoa-600 uppercase mb-2">
                Cake Topper QR Mockup
              </span>
              <div className="p-3 bg-white rounded-xl shadow-md border border-cream-200 inline-block">
                {/* SVG QR Code Illustration */}
                <svg viewBox="0 0 100 100" className="w-28 h-28">
                  {/* Outer corner markers */}
                  <rect x="5" y="5" width="30" height="30" rx="4" fill="#3D2B28" />
                  <rect x="10" y="10" width="20" height="20" rx="2" fill="#FFFFFF" />
                  <rect x="15" y="15" width="10" height="10" rx="1" fill="#3D2B28" />

                  <rect x="65" y="5" width="30" height="30" rx="4" fill="#3D2B28" />
                  <rect x="70" y="10" width="20" height="20" rx="2" fill="#FFFFFF" />
                  <rect x="75" y="15" width="10" height="10" rx="1" fill="#3D2B28" />

                  <rect x="5" y="65" width="30" height="30" rx="4" fill="#3D2B28" />
                  <rect x="10" y="70" width="20" height="20" rx="2" fill="#FFFFFF" />
                  <rect x="15" y="75" width="10" height="10" rx="1" fill="#3D2B28" />

                  {/* QR Pattern dots */}
                  <rect x="42" y="10" width="8" height="8" fill="#C87D87" />
                  <rect x="42" y="25" width="8" height="8" fill="#3D2B28" />
                  <rect x="52" y="18" width="8" height="8" fill="#3D2B28" />
                  
                  <rect x="10" y="45" width="8" height="8" fill="#3D2B28" />
                  <rect x="25" y="45" width="8" height="8" fill="#D4AF37" />
                  <rect x="45" y="45" width="10" height="10" rx="2" fill="#C87D87" />
                  <rect x="65" y="45" width="8" height="8" fill="#3D2B28" />
                  <rect x="80" y="45" width="8" height="8" fill="#3D2B28" />

                  <rect x="42" y="65" width="8" height="8" fill="#3D2B28" />
                  <rect x="55" y="75" width="8" height="8" fill="#D4AF37" />
                  <rect x="70" y="65" width="12" height="12" fill="#3D2B28" />
                  <rect x="85" y="80" width="8" height="8" fill="#C87D87" />
                </svg>
              </div>
              <span className="text-[10px] text-cocoa-500 mt-2">
                Scan with phone camera or topper
              </span>
            </div>
          </div>
        </div>

        {/* Drawer footer */}
        <div className="pt-4 border-t border-cream-200">
          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-xl text-xs font-semibold bg-cocoa-900 hover:bg-cocoa-950 text-white shadow-soft"
          >
            Apply & View Page
          </button>
        </div>
      </div>
    </div>
  );
};
