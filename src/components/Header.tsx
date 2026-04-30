import { useI18n } from '@/hooks/useI18n';

interface HeaderProps {
  left?: React.ReactNode;
  right?: React.ReactNode;
  transparent?: boolean;
}

export default function Header({ left, right, transparent = true }: HeaderProps) {
  const { t } = useI18n();

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6"
      style={{
        height: 48,
        backgroundColor: transparent ? 'transparent' : 'var(--bg-primary)',
        backdropFilter: transparent ? 'none' : 'blur(12px)',
        WebkitBackdropFilter: transparent ? 'none' : 'blur(12px)',
        transition: 'background-color 0.2s ease',
      }}
    >
      <div className="flex items-center">
        {left || (
          <span
            className="text-[var(--text-primary)] tracking-widest"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: '2px',
              textTransform: 'uppercase' as const,
            }}
          >
            {t('app.title')}
          </span>
        )}
      </div>
      <div className="flex items-center gap-4">
        {right || (
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
            [ {t('nav.cloneStudio')} ]
          </span>
        )}
      </div>
    </header>
  );
}
