import { useEffect, useRef, useState } from 'react';

interface RecordingVisualizerProps {
  isRecording: boolean;
  analyser?: AnalyserNode | null;
}

export default function RecordingVisualizer({ isRecording, analyser }: RecordingVisualizerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const [hasPermission, setHasPermission] = useState(false);

  useEffect(() => {
    if (!isRecording || !analyser) {
      // Draw flat line
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, rect.width, rect.height);

      // Check theme
      const isLight = document.documentElement.classList.contains('light-theme');
      ctx.strokeStyle = isLight ? '#cccccc' : '#444444';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, rect.height / 2);
      ctx.lineTo(rect.width, rect.height / 2);
      ctx.stroke();
      return;
    }

    setHasPermission(true);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dataArray = new Uint8Array(analyser.frequencyBinCount);

    const draw = () => {
      animRef.current = requestAnimationFrame(draw);
      analyser.getByteTimeDomainData(dataArray);

      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, rect.width, rect.height);

      ctx.strokeStyle = 'var(--text-primary)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();

      const sliceWidth = rect.width / dataArray.length;
      let x = 0;

      for (let i = 0; i < dataArray.length; i++) {
        const v = dataArray[i] / 128.0;
        const y = (v * rect.height) / 2;

        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
        x += sliceWidth;
      }

      ctx.lineTo(rect.width, rect.height / 2);
      ctx.stroke();
    };

    draw();

    return () => {
      cancelAnimationFrame(animRef.current);
    };
  }, [isRecording, analyser]);

  return (
    <div className="w-full relative" style={{ height: 100 }}>
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ display: 'block' }}
      />
      {!hasPermission && isRecording && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="animate-pulse"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              letterSpacing: '0.5px',
              textTransform: 'uppercase' as const,
              color: 'var(--text-secondary)',
            }}
          >
            REQUESTING MIC...
          </span>
        </div>
      )}
    </div>
  );
}
