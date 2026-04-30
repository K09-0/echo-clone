import { useState, useCallback } from 'react';
import { generateTTS, generateTTSWithReferenceAudio, createAudioUrl } from '@/services/fishAudio';
import type { TTSResult } from '@/types';

export function useTTS() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const synthesize = useCallback(async (
    text: string,
    voiceId: string,
    options?: { speed?: number }
  ): Promise<TTSResult | null> => {
    setIsGenerating(true);
    setError(null);
    try {
      const blob = await generateTTS(text, voiceId, options);
      const url = createAudioUrl(blob);
      return {
        id: `tts-${Date.now()}`,
        audioUrl: url,
        duration: 0,
        text,
        voiceName: voiceId,
        createdAt: new Date().toISOString(),
      };
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Generation failed');
      return null;
    } finally {
      setIsGenerating(false);
    }
  }, []);

  const synthesizeWithFile = useCallback(async (
    text: string,
    referenceAudio: File
  ): Promise<TTSResult | null> => {
    setIsGenerating(true);
    setError(null);
    try {
      const blob = await generateTTSWithReferenceAudio(text, referenceAudio);
      const url = createAudioUrl(blob);
      return {
        id: `tts-${Date.now()}`,
        audioUrl: url,
        duration: 0,
        text,
        voiceName: referenceAudio.name,
        createdAt: new Date().toISOString(),
      };
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Generation failed');
      return null;
    } finally {
      setIsGenerating(false);
    }
  }, []);

  return { synthesize, synthesizeWithFile, isGenerating, error };
}
