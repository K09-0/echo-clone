import { useNavigate } from 'react-router-dom';
import { Settings, Library, Plus, Languages, Sun, Moon } from 'lucide-react';
import { useI18n } from '@/hooks/useI18n';
import { useTheme } from '@/hooks/useTheme';
import FluidAudioWaveform from '@/components/FluidAudioWaveform';
import Header from '@/components/Header';
import VoiceCloneCard from '@/components/VoiceCloneCard';
import { useVoiceClones } from '@/hooks/useVoiceClones';

export default function Dashboard() {
  const navigate = useNavigate();
  const { clones, removeClone } = useVoiceClones();
  const { t, lang, setLang } = useI18n();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <Header
        right={
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLang(lang === 'en' ? 'ru' : 'en')}
              className="flex items-center gap-1 text-[var(--text-secondary)] active:text-[var(--text-primary)] transition-colors"
              style={{ transitionDuration: '0.1s' }}
              title="Switch language"
            >
              <Languages size={14} />
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: '0.5px' }}>
                {lang.toUpperCase()}
              </span>
            </button>
            <button
              onClick={toggleTheme}
              className="text-[var(--text-secondary)] active:text-[var(--text-primary)] transition-colors"
              style={{ transitionDuration: '0.1s' }}
              title="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
            </button>
          </div>
        }
      />

      {/* Hero Section with Fluid Waveform */}
      <section
        className="relative w-full overflow-hidden"
        style={{ height: '38vh', minHeight: 260 }}
      >
        <FluidAudioWaveform />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none">
          <h1
            className="text-white text-center"
            style={{
              fontSize: 'clamp(28px, 7vw, 56px)',
              fontWeight: 700,
              letterSpacing: '-1.5px',
              lineHeight: 1.1,
              textTransform: 'uppercase' as const,
              textShadow: '0 0 40px rgba(0,0,0,0.8)',
            }}
          >
            {t('hero.title1')}
          </h1>
          <h1
            className="text-white text-center mt-1"
            style={{
              fontSize: 'clamp(28px, 7vw, 56px)',
              fontWeight: 700,
              letterSpacing: '-1.5px',
              lineHeight: 1.1,
              textTransform: 'uppercase' as const,
              textShadow: '0 0 40px rgba(0,0,0,0.8)',
            }}
          >
            {t('hero.title2')}
          </h1>
        </div>
        {/* Gradient fade at bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none"
          style={{
            height: 80,
            background: 'linear-gradient(to bottom, transparent, var(--bg-primary))',
          }}
        />
      </section>

      {/* Voice Clone List */}
      <section className="px-4 sm:px-6 pb-36 max-w-lg mx-auto">
        <div className="flex items-center justify-between mb-4">
          <span
            className="text-[var(--text-secondary)]"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: '1px',
              textTransform: 'uppercase' as const,
            }}
          >
            {clones.length} {t('dashboard.clonesAvailable')}
          </span>
        </div>

        {clones.length === 0 ? (
          <div
            className="flex flex-col items-center justify-center py-16 rounded-2xl"
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
            }}
          >
            <p className="text-[var(--text-secondary)] text-center px-8" style={{ fontSize: 14 }}>
              {t('dashboard.noClones')}
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {clones.map((clone) => (
              <VoiceCloneCard
                key={clone.id}
                clone={clone}
                onDelete={removeClone}
                onGenerate={(c) => navigate('/tts', { state: { voiceId: c.id, voiceName: c.name, modelId: c.modelId } })}
              />
            ))}
          </div>
        )}
      </section>

      {/* Bottom Action Bar */}
      <div
        className="fixed bottom-0 left-0 right-0 z-40 px-4 sm:px-6"
        style={{
          paddingBottom: 'max(20px, env(safe-area-inset-bottom))',
          paddingTop: 16,
          background: `linear-gradient(to top, var(--bg-primary) 60%, transparent)`,
        }}
      >
        <div className="max-w-lg mx-auto">
          <button
            onClick={() => navigate('/create')}
            className="w-full h-14 rounded-full flex items-center justify-center gap-2 active:opacity-50 transition-opacity"
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
            <Plus size={18} />
            {t('dashboard.createNew')}
          </button>

          <div className="flex justify-center gap-8 mt-4">
            <button
              onClick={() => navigate('/settings')}
              className="flex flex-col items-center gap-1 text-[var(--text-secondary)] active:text-[var(--text-primary)] transition-colors"
              style={{ transitionDuration: '0.1s' }}
            >
              <Settings size={20} />
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 9,
                  letterSpacing: '0.5px',
                }}
              >
                {t('nav.settings')}
              </span>
            </button>
            <button
              className="flex flex-col items-center gap-1 text-[var(--text-secondary)] active:text-[var(--text-primary)] transition-colors"
              style={{ transitionDuration: '0.1s' }}
            >
              <Library size={20} />
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 9,
                  letterSpacing: '0.5px',
                }}
              >
                {t('nav.library')}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
