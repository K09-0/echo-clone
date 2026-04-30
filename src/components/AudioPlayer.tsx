import { useI18n } from '@/hooks/useI18n';
import { useAudioPlayer } from '@/hooks/useAudioPlayer';
import { Play, Pause, Download, ExternalLink } from 'lucide-react';

interface AudioPlayerProps {
  audioUrl: string;
  title?: string;
  onExport?: () => void;
}

export default function AudioPlayer({ audioUrl, title, onExport }: AudioPlayerProps) {
  const { t } = useI18n();
  const { isPlaying, progress, currentTime, togglePlay, seekTo } = useAudioPlayer(audioUrl);

  const formatTime = (t: number) => {
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div
      className="w-full rounded-2xl p-4"
      style={{
        backgroundColor: 'var(--bg-card)',
        border: '1px solid var(--border-color)',
      }}
    >
      <div className="flex items-center gap-3 mb-3">
        <button
          onClick={togglePlay}
          className="w-12 h-12 rounded-full flex items-center justify-center active:opacity-50 transition-opacity flex-shrink-0"
          style={{
            transitionDuration: '0.1s',
            backgroundColor: 'var(--text-primary)',
            color: 'var(--bg-primary)',
          }}
        >
          {isPlaying ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
        </button>
        <div className="flex-1 min-w-0">
          {title && (
            <p
              className="text-[var(--text-primary)] truncate"
              style={{
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: '-0.2px',
              }}
            >
              {title}
            </p>
          )}
          <div className="flex items-center gap-2 mt-1">
            <input
              type="range"
              min={0}
              max={100}
              value={progress}
              onChange={(e) => seekTo(parseFloat(e.target.value))}
              className="flex-1 appearance-none outline-none"
              style={{
                height: 4,
                borderRadius: 2,
                backgroundImage: `linear-gradient(to right, var(--text-primary) ${progress}%, var(--border-color) ${progress}%)`,
              }}
            />
            <span
              className="text-[var(--text-secondary)] flex-shrink-0"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10,
                letterSpacing: '0.5px',
              }}
            >
              {formatTime(currentTime)}
            </span>
          </div>
        </div>
      </div>

      <div className="flex gap-2">
        <button
          onClick={onExport}
          className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg border active:opacity-50 transition-opacity"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10,
            fontWeight: 500,
            letterSpacing: '0.5px',
            textTransform: 'uppercase' as const,
            transitionDuration: '0.1s',
            borderColor: 'var(--border-color)',
            color: 'var(--text-secondary)',
          }}
        >
          <Download size={12} />
          {t('player.export')}
        </button>
        <button
          onClick={() => window.open('https://suno.com', '_blank')}
          className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg border active:opacity-50 transition-opacity"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10,
            fontWeight: 500,
            letterSpacing: '0.5px',
            textTransform: 'uppercase' as const,
            transitionDuration: '0.1s',
            borderColor: 'var(--border-color)',
            color: 'var(--text-secondary)',
          }}
        >
          <ExternalLink size={12} />
          {t('player.useInSuno')}
        </button>
      </div>
    </div>
  );
}
