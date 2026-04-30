import { useState, useRef, useCallback } from 'react';

let audioContext: AudioContext | null = null;

function getAudioContext(): AudioContext {
  if (!audioContext) {
    audioContext = new AudioContext();
  }
  return audioContext;
}

// Generate a short demo melody using Web Audio API
function generateDemoTone(freq: number, duration: number, startTime: number, gainNode: GainNode) {
  const ctx = getAudioContext();
  const osc = ctx.createOscillator();
  const oscGain = ctx.createGain();

  osc.type = 'sine';
  osc.frequency.setValueAtTime(freq, startTime);

  oscGain.gain.setValueAtTime(0, startTime);
  oscGain.gain.linearRampToValueAtTime(0.15, startTime + 0.05);
  oscGain.gain.setValueAtTime(0.15, startTime + duration - 0.05);
  oscGain.gain.linearRampToValueAtTime(0, startTime + duration);

  osc.connect(oscGain);
  oscGain.connect(gainNode);

  osc.start(startTime);
  osc.stop(startTime + duration);
}

export function useDemoAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const sourcesRef = useRef<OscillatorNode[]>([]);
  const gainRef = useRef<GainNode | null>(null);

  const play = useCallback(() => {
    try {
      const ctx = getAudioContext();
      ctx.resume();

      if (gainRef.current) {
        gainRef.current.disconnect();
      }

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.3, ctx.currentTime);
      masterGain.connect(ctx.destination);
      gainRef.current = masterGain;

      sourcesRef.current = [];

      // Play a short sci-fi melody
      const notes = [261.63, 329.63, 392.0, 523.25, 392.0, 329.63, 261.63, 440.0, 523.25, 659.25];
      const durations = [0.2, 0.2, 0.2, 0.3, 0.2, 0.2, 0.2, 0.3, 0.3, 0.5];
      let t = ctx.currentTime + 0.01;

      notes.forEach((freq, i) => {
        generateDemoTone(freq, durations[i], t, masterGain);
        t += durations[i];
      });

      setIsPlaying(true);

      const totalDuration = durations.reduce((a, b) => a + b, 0) * 1000;
      setTimeout(() => {
        setIsPlaying(false);
      }, totalDuration);
    } catch {
      setIsPlaying(false);
    }
  }, []);

  const stop = useCallback(() => {
    if (gainRef.current) {
      try {
        gainRef.current.disconnect();
      } catch { /* ignore */ }
      gainRef.current = null;
    }
    sourcesRef.current = [];
    setIsPlaying(false);
  }, []);

  const toggle = useCallback(() => {
    if (isPlaying) {
      stop();
    } else {
      play();
    }
  }, [isPlaying, play, stop]);

  return { isPlaying, play, stop, toggle };
}
