import { useState, useCallback, useEffect } from 'react';
import type { VoiceClone } from '@/types';

const STORAGE_KEY = 'echo_voice_clones';

const DEFAULT_CLONES: VoiceClone[] = [
  {
    id: 'demo-1',
    name: 'NEON_CYAN',
    image: '/voices/voice-1.jpg',
    status: 'active',
    duration: '00:32',
    createdAt: 'APR 24 / 14:02',
  },
  {
    id: 'demo-2',
    name: 'VIOLET_PULSE',
    image: '/voices/voice-2.jpg',
    status: 'active',
    duration: '00:45',
    createdAt: 'APR 23 / 09:15',
  },
  {
    id: 'demo-3',
    name: 'EMERALD_WAVE',
    image: '/voices/voice-3.jpg',
    status: 'active',
    duration: '00:28',
    createdAt: 'APR 22 / 18:40',
  },
];

function loadClones(): VoiceClone[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_CLONES));
    return DEFAULT_CLONES;
  } catch {
    return DEFAULT_CLONES;
  }
}

function saveClones(clones: VoiceClone[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(clones));
}

export function useVoiceClones() {
  const [clones, setClones] = useState<VoiceClone[]>(loadClones);

  useEffect(() => {
    saveClones(clones);
  }, [clones]);

  const addClone = useCallback((clone: Omit<VoiceClone, 'id' | 'createdAt'>) => {
    const newClone: VoiceClone = {
      ...clone,
      id: `clone-${Date.now()}`,
      createdAt: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
      }).toUpperCase() + ' / ' + new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }),
    };
    setClones(prev => [newClone, ...prev]);
    return newClone;
  }, []);

  const removeClone = useCallback((id: string) => {
    setClones(prev => prev.filter(c => c.id !== id));
  }, []);

  const updateClone = useCallback((id: string, updates: Partial<VoiceClone>) => {
    setClones(prev => prev.map(c => c.id === id ? { ...c, ...updates } : c));
  }, []);

  return { clones, addClone, removeClone, updateClone };
}
