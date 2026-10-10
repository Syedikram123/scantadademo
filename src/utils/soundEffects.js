/**
 * Lightweight Celebratory Web Audio Synthesizer
 * 
 * Provides:
 * 1. Realistic celebratory party popper pop sound effect
 * 2. Warm chime/music-box "Happy Birthday" melody
 * 
 * Works 100% locally with zero external network downloads or licensing issues.
 * Respects user controls and handles mute/stop gracefully.
 */

let activeAudioCtx = null;
let activeMelodyTimeouts = [];
let activeOscillators = [];

function getAudioContext() {
  if (!activeAudioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      activeAudioCtx = new AudioContext();
    }
  }
  if (activeAudioCtx && activeAudioCtx.state === 'suspended') {
    activeAudioCtx.resume();
  }
  return activeAudioCtx;
}

/**
 * Stop any currently playing synthesized melody or audio
 */
export function stopCelebrationAudio() {
  activeMelodyTimeouts.forEach(clearTimeout);
  activeMelodyTimeouts = [];

  activeOscillators.forEach((osc) => {
    try {
      osc.stop();
      osc.disconnect();
    } catch (e) {
      // already stopped
    }
  });
  activeOscillators = [];
}

/**
 * Play a crisp, cheerful party popper sound
 */
export function playPartyPopperSound() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;

    // 1. Popper sharp pop (bandpass noise burst + quick pitch drop)
    const popOsc = ctx.createOscillator();
    const popGain = ctx.createGain();

    popOsc.type = 'triangle';
    popOsc.frequency.setValueAtTime(280, now);
    popOsc.frequency.exponentialRampToValueAtTime(45, now + 0.12);

    popGain.gain.setValueAtTime(0.7, now);
    popGain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);

    popOsc.connect(popGain);
    popGain.connect(ctx.destination);

    popOsc.start(now);
    popOsc.stop(now + 0.15);

    // 2. Sparkle chime flourish
    const chimeFreqs = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
    chimeFreqs.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const noteTime = now + 0.05 + idx * 0.04;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, noteTime);

      gain.gain.setValueAtTime(0.2, noteTime);
      gain.gain.exponentialRampToValueAtTime(0.001, noteTime + 0.4);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(noteTime);
      osc.stop(noteTime + 0.45);
    });
  } catch (err) {
    console.warn("Audio playback not supported or blocked by browser:", err);
  }
}

/**
 * Play a melodic, pleasant Music-Box "Happy Birthday" tune
 */
export function playHappyBirthdayMelody(onFinished) {
  try {
    stopCelebrationAudio();
    const ctx = getAudioContext();
    if (!ctx) return { stop: stopCelebrationAudio };

    const now = ctx.currentTime + 0.2;

    // Frequencies (Hz) for Happy Birthday
    const G4 = 392.00;
    const A4 = 440.00;
    const B4 = 493.88;
    const C5 = 523.25;
    const D5 = 587.33;
    const E5 = 659.25;
    const F5 = 698.46;
    const G5 = 783.99;

    // Melody: [Note, duration in beats]
    const notes = [
      // "Happy Birthday to you"
      { f: G4, d: 0.75 }, { f: G4, d: 0.25 }, { f: A4, d: 1.0 }, { f: G4, d: 1.0 }, { f: C5, d: 1.0 }, { f: B4, d: 2.0 },
      // "Happy Birthday to you"
      { f: G4, d: 0.75 }, { f: G4, d: 0.25 }, { f: A4, d: 1.0 }, { f: G4, d: 1.0 }, { f: D5, d: 1.0 }, { f: C5, d: 2.0 },
      // "Happy Birthday dear celebration"
      { f: G4, d: 0.75 }, { f: G4, d: 0.25 }, { f: G5, d: 1.0 }, { f: E5, d: 1.0 }, { f: C5, d: 1.0 }, { f: B4, d: 1.0 }, { f: A4, d: 1.5 },
      // "Happy Birthday to you"
      { f: F5, d: 0.75 }, { f: F5, d: 0.25 }, { f: E5, d: 1.0 }, { f: C5, d: 1.0 }, { f: D5, d: 1.0 }, { f: C5, d: 2.5 }
    ];

    const beatDuration = 0.32; // Tempo ~ 95 BPM (gentle and cheerful)
    let currentBeat = 0;

    notes.forEach((note) => {
      const startTime = now + currentBeat * beatDuration;
      const duration = note.d * beatDuration;

      // Bell / Music Box harmonic synth
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gainNode = ctx.createGain();

      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(note.f, startTime);

      // Subtle warm 2nd harmonic
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(note.f * 2, startTime);

      // Soft envelope
      gainNode.gain.setValueAtTime(0.001, startTime);
      gainNode.gain.linearRampToValueAtTime(0.28, startTime + 0.02);
      gainNode.gain.exponentialRampToValueAtTime(0.001, startTime + duration * 0.95);

      osc1.connect(gainNode);
      osc2.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc1.start(startTime);
      osc2.start(startTime);

      osc1.stop(startTime + duration);
      osc2.stop(startTime + duration);

      activeOscillators.push(osc1, osc2);

      currentBeat += note.d;
    });

    const totalTimeMs = (currentBeat * beatDuration + 0.5) * 1000;
    const finishTimeout = setTimeout(() => {
      if (onFinished) onFinished();
    }, totalTimeMs);

    activeMelodyTimeouts.push(finishTimeout);

    return {
      stop: () => {
        stopCelebrationAudio();
        if (onFinished) onFinished();
      }
    };
  } catch (err) {
    console.warn("Melody playback failed:", err);
    if (onFinished) onFinished();
    return { stop: () => {} };
  }
}
