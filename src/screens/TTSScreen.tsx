import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, Wand2, ClipboardPaste, AlertCircle } from 'lucide-react';
import { useI18n } from '@/hooks/useI18n';
import Header from '@/components/Header';
import AudioPlayer from '@/components/AudioPlayer';
import { useTTS } from '@/hooks/useTTS';
import { getApiKeyFromStorage } from '@/services/fishAudio';

interface LocationState {
  voiceId?: string;
  voiceName?: string;
  modelId?: string;
}

export default function TTSScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationState | null;
  const { t } = useI18n();

  const [text, setText] = useState('');
  const [speed, setSpeed] = useState(1.0);
  const [stability, setStability] = useState(0.5);
  const [style, setStyle] = useState(0.5);
  const [generatedAudio, setGeneratedAudio] = useState<string | null>(null);
  const [showSettings, setShowSettings] = useState(false);

  const { synthesize, isGenerating, error } = useTTS();
  const apiKey = getApiKeyFromStorage();

  const handleGenerate = async () => {
    if (!text.trim()) return;
    if (!apiKey) {
      return; // API key warning is already shown in UI
    }

    // Call real Fish Audio API
    try {
      const result = await synthesize(text, state?.voiceId || 'default', { speed });
      if (result?.audioUrl) {
        setGeneratedAudio(result.audioUrl);
      }
    } catch (err) {
      // Error is handled in useTTS hook
    }
  };

  const handlePaste = async () => {
    try {
      const clip = await navigator.clipboard.readText();
      setText(clip);
    } catch {
      // ignore
    }
  };

  const handleExport = () => {
    if (generatedAudio) {
      const a = document.createElement('a');
      a.href = generatedAudio;
      a.download = `echo-tts-${Date.now()}.wav`;
      a.click();
    }
  };

  const charCount = text.length;
  const maxChars = 500;

  const settingsLabel = showSettings ? t('tts.hideSettings') : t('tts.showSettings');

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}
    >
      <Header
        left={
          <button onClick={() => navigate('/')} className="flex items-center gap-1 text-[var(--text-secondary)] active:text-[var(--text-primary)] transition-colors">
            <ArrowLeft size={14} />
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: '0.5px', textTransform: 'uppercase' as const }}>{t('nav.back')}</span>
          </button>
        }
        right={
          <span className="text-[var(--text-secondary)]" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: '0.5px', textTransform: 'uppercase' as const }}>
            {state?.voiceName ? `VOICE: ${state.voiceName}` : t('tts.title')}
          </span>
        }
        transparent={false}
      />

      <div className="flex-1 flex flex-col px-4 sm:px-6 pt-14 pb-6 max-w-lg mx-auto w-full">
        {/* Paste button */}
        <div className="flex justify-end mb-2">
          <button
            onClick={handlePaste}
            className="flex items-center gap-1 text-[var(--text-secondary)] active:text-[var(--text-primary)] transition-colors"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10,
              letterSpacing: '0.5px',
              textTransform: 'uppercase' as const,
              transitionDuration: '0.1s',
            }}
          >
            <ClipboardPaste size={12} />
            {t('tts.paste')}
          </button>
        </div>

        {/* Text Input */}
        <div className="flex-1 relative min-h-[200px]">
          <textarea
            value={text}
            onChange={(e) => {
              if (e.target.value.length <= maxChars) {
                setText(e.target.value);
              }
            }}
            placeholder={t('tts.placeholder')}
            className="w-full h-full bg-transparent outline-none resize-none"
            style={{
              fontSize: 'clamp(20px, 4vw, 30px)',
              fontWeight: 500,
              letterSpacing: '-0.5px',
              lineHeight: 1.4,
              color: 'var(--text-primary)',
              minHeight: 200,
            }}
          />
          <div className="absolute bottom-0 right-0">
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                letterSpacing: '0.5px',
                color: 'var(--text-secondary)',
              }}
            >
              {charCount}/{maxChars}
            </span>
          </div>
        </div>

        {/* API Key Warning */}
        {!apiKey && (
          <div
            className="flex items-center gap-2 px-4 py-3 rounded-xl mb-4"
            style={{ backgroundColor: 'rgba(250,204,21,0.1)', border: '1px solid rgba(250,204,21,0.3)' }}
          >
            <AlertCircle size={16} className="text-yellow-400 flex-shrink-0" />
            <p style={{ fontSize: 12, color: '#facc15' }}>
              {t('tts.apiKeyWarning')}
            </p>
          </div>
        )}

        {/* Voice Settings Toggle */}
        <button
          onClick={() => setShowSettings(!showSettings)}
          className="w-full py-3 text-left active:text-[var(--text-primary)] transition-colors mb-3"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            letterSpacing: '0.5px',
            textTransform: 'uppercase' as const,
            transitionDuration: '0.1s',
            color: 'var(--text-secondary)',
          }}
        >
          {settingsLabel}
        </button>

        {/* Settings Panel */}
        {showSettings && (
          <div className="space-y-4 mb-4 p-4 rounded-xl" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)' }}>
            <Slider label={t('tts.speed')} value={speed} min={0.5} max={2.0} step={0.1} onChange={setSpeed} suffix="x" />
            <Slider label={t('tts.stability')} value={stability} min={0} max={1} step={0.01} onChange={setStability} suffix="%" scale={100} />
            <Slider label={t('tts.style')} value={style} min={0} max={1} step={0.01} onChange={setStyle} suffix="%" scale={100} />
          </div>
        )}

        {/* Error */}
        {error && (
          <p className="mb-3" style={{ fontSize: 12, color: 'var(--accent-red)' }}>
            {error}
          </p>
        )}

        {/* Generated Audio Player */}
        {generatedAudio && (
          <div className="mb-4">
            <AudioPlayer
              audioUrl={generatedAudio}
              title={t('player.generated')}
              onExport={handleExport}
            />
          </div>
        )}

        {/* Generate Button */}
        <button
          onClick={handleGenerate}
          disabled={!text.trim() || isGenerating}
          className="w-full h-14 rounded-full flex items-center justify-center gap-2 disabled:opacity-30 active:opacity-50 transition-opacity"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: '0.5px',
            textTransform: 'uppercase' as const,
            transitionDuration: '0.1s',
            backgroundColor: 'var(--text-primary)',
            color: 'var(--bg-primary)',
          }}
        >
          {isGenerating ? (
            <>
              <div className="w-4 h-4 border-2 rounded-full animate-spin" style={{ borderColor: 'var(--bg-primary)', borderTopColor: 'transparent' }} />
              {t('tts.generating')}
            </>
          ) : (
            <>
              <Wand2 size={18} />
              {t('tts.generate')}
            </>
          )}
        </button>
      </div>
    </div>
  );
}

// Reusable slider component
function Slider({ label, value, min, max, step, onChange, suffix, scale = 1 }: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  suffix: string;
  scale?: number;
}) {
  const displayValue = Math.round(value * scale);
  const percent = ((value - min) / (max - min)) * 100;

  return (
    <div>
      <div className="flex justify-between mb-1">
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: '0.5px', textTransform: 'uppercase' as const, color: 'var(--text-secondary)' }}>
          {label}
        </span>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: 'var(--text-primary)' }}>
          {scale === 1 ? value.toFixed(step < 0.1 ? 1 : 0) : displayValue}{suffix}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full appearance-none outline-none"
        style={{
          height: 4,
          borderRadius: 2,
          backgroundImage: `linear-gradient(to right, var(--text-primary) ${percent}%, var(--border-color) ${percent}%)`,
        }}
      />
    </div>
  );
}
