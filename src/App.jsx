import React, { useState, useEffect, useCallback } from 'react';
import { defaultBakeryConfig } from './config/bakeryConfig';
import { BirthdayGreetingZone } from './components/BirthdayGreetingZone';
import { CakeGalleryView } from './components/CakeGalleryView';
import { Footer } from './components/Footer';
import { playHappyBirthdayMelody, stopCelebrationAudio } from './utils/soundEffects';

export function App() {
  const [currentView, setCurrentView] = useState('main'); // 'main' | 'gallery'
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const bakeryConfig = defaultBakeryConfig;

  // Handle browser back button and hash routing
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#gallery') {
        setCurrentView('gallery');
        window.scrollTo(0, 0);
      } else {
        setCurrentView('main');
      }
    };

    if (window.location.hash === '#gallery') {
      setCurrentView('gallery');
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Start Audio directly from user gesture (cake tap) without restarting if already playing
  const handleStartAudio = useCallback(() => {
    if (!isPlayingAudio) {
      setIsPlayingAudio(true);
      try {
        playHappyBirthdayMelody(() => {
          setIsPlayingAudio(false);
        });
      } catch (err) {
        setIsPlayingAudio(false);
      }
    }
  }, [isPlayingAudio]);

  // Audio Toggle Handler for sound control (mute / replay)
  const handleToggleAudio = useCallback(() => {
    if (isPlayingAudio) {
      stopCelebrationAudio();
      setIsPlayingAudio(false);
    } else {
      setIsPlayingAudio(true);
      try {
        playHappyBirthdayMelody(() => {
          setIsPlayingAudio(false);
        });
      } catch (err) {
        setIsPlayingAudio(false);
      }
    }
  }, [isPlayingAudio]);

  // Navigate to dedicated Cake Gallery view
  const handleOpenGallery = () => {
    setCurrentView('gallery');
    window.location.hash = 'gallery';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Return from Cake Gallery back to New Year Celebration
  const handleBackToCelebration = () => {
    setCurrentView('main');
    window.history.pushState(null, '', window.location.pathname + window.location.search);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
<div className={`h-[100dvh] w-full bg-[#FAF8F5] text-navy-900 font-sans selection:bg-gold-200 selection:text-navy-950 flex flex-col ${currentView === 'main' ? 'overflow-hidden' : 'min-h-0 overflow-x-hidden'}`}>      
      {/* 1. DEDICATED BAKERY & CAKE DISCOVERY PAGE */}
      {currentView === 'gallery' ? (
        <main className="flex-1 w-full overflow-y-auto">
          <CakeGalleryView
            gallery={bakeryConfig.gallery}
            contact={bakeryConfig.contact}
            bakeryName={bakeryConfig.name}
            bakeryTagline={bakeryConfig.tagline}
            googleReviewUrl={bakeryConfig.googleReviewUrl}
            onBack={handleBackToCelebration}
          />
        </main>
      ) : (
        /* 2. DIRECT CELEBRATION-ONLY NEW YEAR PAGE (No Unlock Screen) */
        <main className="flex-1 min-h-0 w-full max-w-lg mx-auto flex flex-col justify-start p-1">
          
          {/* NEW YEAR CELEBRATION */}
<section
  aria-label="New Year Celebration"
  className="flex-1 min-h-0 w-full flex flex-col relative overflow-hidden"
> 

  <BirthdayGreetingZone
    isPlayingAudio={isPlayingAudio}
    onStartAudio={handleStartAudio}
    onToggleAudio={handleToggleAudio}
    onExploreCakes={handleOpenGallery}
    bakeryName={bakeryConfig.name}
  />
</section>

{/* SCANTADA FOOTER */}
<Footer scantadaConfig={bakeryConfig.scantada} />

        </main>
      )}

    </div>
  );
}

export default App;
