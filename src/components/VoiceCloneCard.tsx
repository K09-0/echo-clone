import { useState, useRef } from 'react';
import { Play, Pause, Trash2, Wand2, Download, Edit3 } from 'lucide-react';
import { useDemoAudio } from '@/hooks/useDemoAudio';
import { useI18n } from '@/hooks/useI18n';
import type { VoiceClone } from '@/types';

interface VoiceCloneCardProps {
  clone: VoiceClone;
  onDelete: (id: string) => void;
  onGenerate: (clone: VoiceClone) => void;
}

export default function VoiceCloneCard({ clone, onDelete, onGenerate }: VoiceCloneCardProps) {
  const [swiped, setSwiped] = useState(false);
  const { isPlaying, toggle } = useDemoAudio();
  const { t } = useI18n();
  const touchStartX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 60) {
      setSwiped(true);
    } else if (diff < -30) {
      setSwiped(false);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    touchStartX.current = e.clientX;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    const diff = touchStartX.current - e.clientX;
    if (diff > 60) {
      setSwiped(true);
    } else if (diff < -30) {
      setSwiped(false);
    }
  };

  const statusLabel = clone.status === 'active' ? t('card.active') : t('card.training');
  const statusBg = clone.status === 'active' ? 'var(--accent-green-bg)' : 'var(--accent-yellow-bg)';
  const statusText = clone.status === 'active' ? 'var(--accent-green)' : 'var(--accent-yellow)';

  return (
    <div
      className="relative overflow-hidden select-none"
      style={{ borderRadius: 16 }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {/* Delete layer */}
      <div
        className="absolute inset-0 flex items-center justify-end px-6"
        style={{ borderRadius: 16, zIndex: 1, backgroundColor: 'var(--accent-red)' }}
      >
        <button
          onClick={() => onDelete(clone.id)}
          className="flex items-center gap-2 text-white"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: '0.5px',
            textTransform: 'uppercase' as const,
          }}
        >
          <Trash2 size={18} />
          {t('card.delete')}
        </button>
      </div>

      {/* Card content */}
      <div
        className="relative p-5 transition-transform duration-200"
        style={{
          borderRadius: 16,
          zIndex: 2,
          transform: swiped ? 'translateX(-100px)' : 'translateX(0)',
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-color)',
        }}
      >
        {/* Top row */}
        <div className="flex items-center justify-between mb-3">
          <span
            className="text-[var(--text-secondary)]"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              letterSpacing: '0.5px',
              textTransform: 'uppercase' as const,
            }}
          >
            {clone.createdAt}
          </span>
          <span
            className="px-2 py-0.5 rounded-full"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: '0.5px',
              textTransform: 'uppercase' as const,
              backgroundColor: statusBg,
              color: statusText,
            }}
          >
            {statusLabel}
          </span>
        </div>

        {/* Middle row */}
        <div className="flex items-center gap-4 mb-4">
          <div
            className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0"
            style={{ border: '1px solid var(--border-color)' }}
          >
            <img
              src={clone.image}
              alt={clone.name}
              className="w-full h-full object-cover"
              draggable={false}
              loading="lazy"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3
              className="text-[var(--text-primary)] truncate"
              style={{
                fontSize: 18,
                fontWeight: 700,
                letterSpacing: '-0.5px',
                lineHeight: 1.2,
              }}
            >
              {clone.name}
            </h3>
            <span
              className="text-[var(--text-secondary)]"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                letterSpacing: '0.5px',
              }}
            >
              {clone.duration}
            </span>
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); toggle(); }}
            className="w-10 h-10 rounded-full border flex items-center justify-center text-[var(--text-primary)] active:opacity-50 transition-opacity"
            style={{
              borderColor: 'var(--border-color)',
              transitionDuration: '0.1s',
            }}
          >
            {isPlaying ? <Pause size={16} /> : <Play size={16} />}
          </button>
        </div>

        {/* Bottom row - actions */}
        <div className="flex gap-2">
          <button
            onClick={() => onGenerate(clone)}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-full active:opacity-50 transition-opacity"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.5px',
              textTransform: 'uppercase' as const,
              transitionDuration: '0.1s',
              backgroundColor: 'var(--text-primary)',
              color: 'var(--bg-primary)',
            }}
          >
            <Wand2 size={13} />
            {t('card.generate')}
          </button>
          <button
            className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border text-[var(--text-secondary)] active:opacity-50 transition-opacity"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: '0.5px',
              borderColor: 'var(--border-color)',
              transitionDuration: '0.1s',
            }}
          >
            <Edit3 size={13} />
          </button>
          <button
            className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border text-[var(--text-secondary)] active:opacity-50 transition-opacity"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: '0.5px',
              borderColor: 'var(--border-color)',
              transitionDuration: '0.1s',
            }}
          >
            <Download size={13} />
          </button>
        </div>
      </div>
    </div>
  );
}
