import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Key, Trash2, AlertTriangle, Sun, Moon, Globe } from 'lucide-react';
import { useI18n } from '@/hooks/useI18n';
import { useTheme } from '@/hooks/useTheme';
import Header from '@/components/Header';
import { getApiKeyFromStorage, setApiKey } from '@/services/fishAudio';

export default function SettingsScreen() {
  const navigate = useNavigate();
  const { t, lang, setLang } = useI18n();
  const { theme, setTheme } = useTheme();

  const [apiKey, setApiKeyState] = useState(getApiKeyFromStorage());
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const handleSaveKey = (key: string) => {
    setApiKeyState(key);
    setApiKey(key);
  };

  const handleDeleteAll = () => {
    localStorage.removeItem('echo_voice_clones');
    setShowDeleteConfirm(false);
    navigate('/');
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      <Header
        left={
          <button onClick={() => navigate('/')} className="flex items-center gap-1 text-[var(--text-secondary)] active:text-[var(--text-primary)] transition-colors">
            <ArrowLeft size={14} />
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: '0.5px', textTransform: 'uppercase' as const }}>{t('nav.back')}</span>
          </button>
        }
        right={
          <span className="text-[var(--text-secondary)]" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: '0.5px', textTransform: 'uppercase' as const }}>
            {t('nav.settings')}
          </span>
        }
        transparent={false}
      />

      <div className="pt-14 px-4 sm:px-6 pb-8 max-w-lg mx-auto">
        <h2
          className="mb-8"
          style={{
            fontSize: 'clamp(24px, 5vw, 32px)',
            fontWeight: 700,
            letterSpacing: '-1px',
            lineHeight: 1.2,
            color: 'var(--text-primary)',
          }}
        >
          {t('settings.title')}
        </h2>

        {/* Language Selection */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <Globe size={16} style={{ color: 'var(--text-secondary)' }} />
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: '1px',
                textTransform: 'uppercase' as const,
                color: 'var(--text-secondary)',
              }}
            >
              {t('settings.language')}
            </span>
          </div>
          <div className="flex gap-2">
            {(['en', 'ru'] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className="flex-1 h-12 rounded-xl flex items-center justify-center gap-2 active:opacity-50 transition-opacity"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: '0.5px',
                  transitionDuration: '0.1s',
                  backgroundColor: lang === l ? 'var(--text-primary)' : 'var(--bg-card)',
                  color: lang === l ? 'var(--bg-primary)' : 'var(--text-secondary)',
                  border: lang === l ? 'none' : '1px solid var(--border-color)',
                }}
              >
                {l === 'en' ? 'English' : 'Русский'}
              </button>
            ))}
          </div>
        </div>

        {/* Theme Selection */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            {theme === 'dark' ? <Moon size={16} style={{ color: 'var(--text-secondary)' }} /> : <Sun size={16} style={{ color: 'var(--text-secondary)' }} />}
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: '1px',
                textTransform: 'uppercase' as const,
                color: 'var(--text-secondary)',
              }}
            >
              {t('settings.theme')}
            </span>
          </div>
          <div className="flex gap-2">
            {([
              { key: 'dark', label: t('settings.dark'), icon: Moon },
              { key: 'light', label: t('settings.light'), icon: Sun },
            ] as const).map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setTheme(key)}
                className="flex-1 h-12 rounded-xl flex items-center justify-center gap-2 active:opacity-50 transition-opacity"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: '0.5px',
                  transitionDuration: '0.1s',
                  backgroundColor: theme === key ? 'var(--text-primary)' : 'var(--bg-card)',
                  color: theme === key ? 'var(--bg-primary)' : 'var(--text-secondary)',
                  border: theme === key ? 'none' : '1px solid var(--border-color)',
                }}
              >
                <Icon size={14} />
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px mb-8" style={{ backgroundColor: 'var(--border-color)' }} />

        {/* API Key Section */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <Key size={16} style={{ color: 'var(--text-secondary)' }} />
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: '1px',
                textTransform: 'uppercase' as const,
                color: 'var(--text-secondary)',
              }}
            >
              {t('settings.apiKey')}
            </span>
          </div>

          <p className="mb-3" style={{ fontSize: 13, lineHeight: 1.5, color: 'var(--text-secondary)' }}>
            {t('settings.apiKeyDesc')}{' '}
            <a
              href="https://fish.audio"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
              style={{ color: 'var(--text-primary)' }}
            >
              fish.audio
            </a>
          </p>

          <input
            type="password"
            value={apiKey}
            onChange={(e) => handleSaveKey(e.target.value)}
            placeholder="sk-..."
            className="w-full rounded-xl px-4 py-3 outline-none transition-colors"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 13,
              letterSpacing: '0.5px',
              transitionDuration: '0.1s',
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-primary)',
            }}
            onFocus={(e) => { e.target.style.borderColor = 'var(--text-secondary)'; }}
            onBlur={(e) => { e.target.style.borderColor = 'var(--border-color)'; }}
          />

          {apiKey && (
            <p
              className="mt-2"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10,
                letterSpacing: '0.5px',
                textTransform: 'uppercase' as const,
                color: 'var(--accent-green)',
              }}
            >
              {t('settings.apiKeySaved')}
            </p>
          )}
        </div>

        {/* Divider */}
        <div className="h-px mb-8" style={{ backgroundColor: 'var(--border-color)' }} />

        {/* Data Management */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Trash2 size={16} style={{ color: 'var(--text-secondary)' }} />
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: '1px',
                textTransform: 'uppercase' as const,
                color: 'var(--text-secondary)',
              }}
            >
              {t('settings.dataManagement')}
            </span>
          </div>

          {!showDeleteConfirm ? (
            <button
              onClick={() => setShowDeleteConfirm(true)}
              className="w-full p-4 rounded-xl text-left active:opacity-50 transition-opacity"
              style={{
                transitionDuration: '0.1s',
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
              }}
            >
              <p style={{ fontSize: 14, fontWeight: 500, color: 'var(--accent-red)' }}>
                {t('settings.deleteAll')}
              </p>
              <p className="mt-1" style={{ fontSize: 12, color: 'var(--text-secondary)' }}>
                {t('settings.deleteDesc')}
              </p>
            </button>
          ) : (
            <div className="p-4 rounded-xl" style={{ backgroundColor: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.2)' }}>
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle size={16} style={{ color: 'var(--accent-red)' }} />
                <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--accent-red)' }}>
                  {t('settings.deleteConfirm')}
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={handleDeleteAll}
                  className="flex-1 h-10 rounded-lg text-white active:opacity-50 transition-opacity"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase' as const,
                    transitionDuration: '0.1s',
                    backgroundColor: 'var(--accent-red)',
                  }}
                >
                  {t('settings.deleteAllBtn')}
                </button>
                <button
                  onClick={() => setShowDeleteConfirm(false)}
                  className="flex-1 h-10 rounded-lg active:opacity-50 transition-opacity"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase' as const,
                    transitionDuration: '0.1s',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-secondary)',
                    backgroundColor: 'var(--bg-card)',
                  }}
                >
                  {t('nav.cancel')}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* App Info */}
        <div className="mt-12 text-center">
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10,
              letterSpacing: '1px',
              textTransform: 'uppercase' as const,
              color: 'var(--text-tertiary)',
            }}
          >
            {t('settings.version')}
          </p>
          <p className="mt-1" style={{ fontSize: 11, color: 'var(--text-tertiary)' }}>
            {t('settings.poweredBy')}
          </p>
        </div>
      </div>
    </div>
  );
}
