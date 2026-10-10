
import React from 'react';

export const Footer = ({ scantadaConfig }) => {
  const scantadaUrl = scantadaConfig?.url || "https://scantada.com";

  return (
    <footer
      aria-label="Footer"
      className="pt-1 px-3 pb-2 text-center shrink-0"
    >
      <p className="text-xs xs:text-sm text-charcoal-600 font-light tracking-wide">
        Made with love by{' '}
        <a
          href={scantadaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-charcoal-700 hover:text-navy-900 underline underline-offset-2 decoration-gold-400 hover:decoration-navy-900 transition-colors"
        >
          Scantada.com
        </a>
      </p>
    </footer>
  );
};
