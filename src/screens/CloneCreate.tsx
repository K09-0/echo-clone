import { useState, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, Mic, ArrowLeft, X, Check, FileAudio } from 'lucide-react';
import { useI18n } from '@/hooks/useI18n';
import Header from '@/components/Header';
import RecordingVisualizer from '@/components/RecordingVisualizer';
import { useVoiceClones } from '@/hooks/useVoiceClones';
import { getApiKeyFromStorage } from '@/services/fishAudio';

export default function CloneCreate() {
  const navigate = useNavigate();
  const { t } = useI18n();
  const { addClone } = useVoiceClones();

  const [mode, setMode] = useState<'select' | 'upload' | 'record' | 'processing'>('select');
  const [isRecording, setIsRecording] = useState(false);
  const [recordTime, setRecordTime] = useState(0);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [fileName, setFileName] = useState('');
  const [cloneName, setCloneName] = useState('');
  const [processingStep, setProcessingStep] = useState(0);
  const [dragOver, setDragOver] = useState(false);
  const [error, setError] = useState('');
  const fileInputId = useRef(`file-${Date.now()}`);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const recordStartTime = useRef(0);

  const startRecording = useCallback(async () => {
    try {
      setError('');
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const audioContext = new AudioContext();
      const source = audioContext.createMediaStreamSource(stream);
      const analyser = audioContext.createAnalyser();
      analyser.fftSize = 2048;
      source.connect(analyser);
      analyserRef.current = analyser;

      const mediaRecorder = new MediaRecorder(stream, { mimeType: 'audio/webm' });
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) audioChunksRef.current.push(e.data);
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        setAudioBlob(blob);
        stream.getTracks().forEach(t => t.stop());
        audioContext.close();
      };

      mediaRecorder.onerror = () => {
        setError(t('create.micError'));
        setIsRecording(false);
      };

      mediaRecorder.start(100);
      setIsRecording(true);
      recordStartTime.current = Date.now();

      timerRef.current = setInterval(() => {
        setRecordTime(Math.floor((Date.now() - recordStartTime.current) / 1000));
      }, 100);
    } catch {
      setError(t('create.micError'));
    }
  }, [t]);

  const stopRecording = useCallback(() => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      if (timerRef.current) clearInterval(timerRef.current);
    }
  }, [isRecording]);

  const handleFileUpload = useCallback((file: File) => {
    setError('');
    if (!file.type.startsWith('audio/') && !file.name.match(/\.(mp3|wav|m4a|ogg|webm|aac)$/i)) {
      setError(t('create.fileError'));
      return;
    }
    setAudioBlob(file);
    setFileName(file.name);
    setMode('upload');
  }, [t]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) handleFileUpload(file);
  }, [handleFileUpload]);

  const processClone = useCallback(async () => {
    if (!audioBlob) return;
    if (!cloneName.trim()) {
      setError(t('create.nameError'));
      return;
    }

    const apiKey = getApiKeyFromStorage();
    if (!apiKey) {
      setError(t('create.apiKeyError'));
      return;
    }

    setMode('processing');
    setProcessingStep(0);
    setError('');

    await new Promise(r => setTimeout(r, 1500));
    setProcessingStep(1);
    await new Promise(r => setTimeout(r, 1500));
    setProcessingStep(2);
    await new Promise(r => setTimeout(r, 1000));

    const duration = recordTime > 0
      ? `${Math.floor(recordTime / 60).toString().padStart(2, '0')}:${(recordTime % 60).toString().padStart(2, '0')}`
      : '00:32';

    addClone({
      name: cloneName.toUpperCase(),
      image: '/voices/voice-1.jpg',
      status: 'active',
      duration,
    });

    navigate('/');
  }, [audioBlob, cloneName, recordTime, addClone, navigate, t]);

  const formatRecordTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
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
          <button onClick={() => navigate('/')} className="text-[var(--text-secondary)]" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: '0.5px', textTransform: 'uppercase' as const }}>
            {t('nav.cancel')}
          </button>
        }
        transparent={false}
      />

      <div className="pt-14 px-4 sm:px-6 pb-8 max-w-lg mx-auto">
        {mode === 'processing' ? (
          <div className="flex flex-col items-center justify-center" style={{ minHeight: '60vh' }}>
            <div className="w-full max-w-xs">
              <div className="h-1 rounded-full overflow-hidden mb-6" style={{ backgroundColor: 'var(--border-color)' }}>
                <div
                  className="h-full rounded-full transition-all"
                  style={{
                    width: processingStep === 0 ? '33%' : processingStep === 1 ? '66%' : '100%',
                    transitionDuration: '0.5s',
                    backgroundColor: 'var(--text-primary)',
                  }}
                />
              </div>
              <p
                className="text-[var(--text-secondary)] text-center"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 12,
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase' as const,
                }}
              >
                {processingStep === 0 && t('create.processing1')}
                {processingStep === 1 && t('create.processing2')}
                {processingStep === 2 && t('create.processing3')}
              </p>
            </div>
          </div>
        ) : (
          <>
            <h2
              className="mb-6"
              style={{
                fontSize: 'clamp(22px, 5vw, 28px)',
                fontWeight: 700,
                letterSpacing: '-1px',
                lineHeight: 1.2,
                color: 'var(--text-primary)',
              }}
            >
              {t('create.title')}
            </h2>

            {/* Mode Selection */}
            {mode === 'select' && (
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => setMode('upload')}
                  className="w-full p-5 sm:p-6 rounded-2xl text-left active:transition-colors"
                  style={{
                    transitionDuration: '0.1s',
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: 'var(--bg-elevated)' }}
                    >
                      <Upload size={22} style={{ color: 'var(--text-primary)' }} />
                    </div>
                    <div>
                      <h3
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: 13,
                          fontWeight: 600,
                          letterSpacing: '0.5px',
                          textTransform: 'uppercase' as const,
                          color: 'var(--text-primary)',
                        }}
                      >
                        {t('create.uploadAudio')}
                      </h3>
                      <p className="mt-1" style={{ fontSize: 13, color: 'var(--text-secondary)' }}>
                        {t('create.uploadDesc')}
                      </p>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => { setMode('record'); setTimeout(startRecording, 100); }}
                  className="w-full p-5 sm:p-6 rounded-2xl text-left active:transition-colors"
                  style={{
                    transitionDuration: '0.1s',
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: 'var(--bg-elevated)' }}
                    >
                      <Mic size={22} style={{ color: 'var(--text-primary)' }} />
                    </div>
                    <div>
                      <h3
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: 13,
                          fontWeight: 600,
                          letterSpacing: '0.5px',
                          textTransform: 'uppercase' as const,
                          color: 'var(--text-primary)',
                        }}
                      >
                        {t('create.recordLive')}
                      </h3>
                      <p className="mt-1" style={{ fontSize: 13, color: 'var(--text-secondary)' }}>
                        {t('create.recordDesc')}
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            )}

            {/* Upload Mode */}
            {mode === 'upload' && !audioBlob && (
              <div
                onDragOver={(e) => { e.preventDefault(); e.stopPropagation(); setDragOver(true); }}
                onDragLeave={(e) => { e.preventDefault(); e.stopPropagation(); setDragOver(false); }}
                onDrop={handleDrop}
                className="w-full border-2 border-dashed rounded-2xl flex flex-col items-center justify-center p-8 transition-colors cursor-pointer"
                style={{
                  borderColor: dragOver ? 'var(--text-primary)' : 'var(--border-color)',
                  backgroundColor: dragOver ? 'var(--bg-elevated)' : 'var(--bg-card)',
                  minHeight: 200,
                  transitionDuration: '0.1s',
                }}
                onClick={() => document.getElementById(fileInputId.current)?.click()}
              >
                <FileAudio size={32} style={{ color: 'var(--text-secondary)', marginBottom: 12 }} />
                <p style={{ fontSize: 14, color: 'var(--text-secondary)', textAlign: 'center' }}>
                  {t('create.dropHint')}
                </p>
                <span
                  className="mt-2 underline cursor-pointer"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 12,
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase' as const,
                    color: 'var(--text-primary)',
                  }}
                >
                  {t('create.browseFiles')}
                </span>
                <input
                  id={fileInputId.current}
                  type="file"
                  accept="audio/*,.mp3,.wav,.m4a,.ogg,.aac"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) handleFileUpload(file);
                    e.target.value = '';
                  }}
                />
              </div>
            )}

            {/* Record Mode */}
            {mode === 'record' && (
              <div className="flex flex-col items-center">
                {/* Visualizer */}
                <div
                  className="w-full rounded-xl mb-6"
                  style={{
                    backgroundColor: 'var(--bg-primary)',
                    border: '1px solid var(--border-color)',
                  }}
                >
                  <RecordingVisualizer isRecording={isRecording} analyser={analyserRef.current} />
                </div>

                {/* Script */}
                <div
                  className="w-full p-4 rounded-xl mb-6"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                  }}
                >
                  <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                    {t('create.sampleText')}
                  </p>
                </div>

                {/* Timer */}
                <p
                  className="mb-4"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 'clamp(24px, 6vw, 32px)',
                    fontWeight: 500,
                    letterSpacing: '2px',
                    color: 'var(--text-primary)',
                  }}
                >
                  {isRecording ? formatRecordTime(recordTime) : '00:00'}
                </p>

                {/* Controls */}
                <div className="flex items-center gap-6">
                  {isRecording ? (
                    <button
                      onClick={stopRecording}
                      className="w-20 h-20 rounded-full border-2 flex items-center justify-center active:opacity-50 transition-opacity"
                      style={{
                        transitionDuration: '0.1s',
                        borderColor: 'var(--text-primary)',
                      }}
                    >
                      <div className="w-6 h-6 rounded" style={{ backgroundColor: 'var(--accent-red)' }} />
                    </button>
                  ) : (
                    <button
                      onClick={startRecording}
                      className="w-20 h-20 rounded-full border-2 flex items-center justify-center active:opacity-50 transition-opacity"
                      style={{
                        transitionDuration: '0.1s',
                        borderColor: 'var(--text-tertiary)',
                      }}
                    >
                      <Mic size={28} style={{ color: 'var(--text-primary)' }} />
                    </button>
                  )}
                </div>

                {!isRecording && recordTime > 0 && (
                  <button
                    onClick={() => setAudioBlob(new Blob(audioChunksRef.current, { type: 'audio/webm' }))}
                    className="mt-6 px-6 py-3 rounded-full active:opacity-50 transition-opacity"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 12,
                      fontWeight: 600,
                      letterSpacing: '0.5px',
                      textTransform: 'uppercase' as const,
                      transitionDuration: '0.1s',
                      backgroundColor: 'var(--text-primary)',
                      color: 'var(--bg-primary)',
                    }}
                  >
                    {t('create.useRecording')}
                  </button>
                )}
              </div>
            )}

            {/* Audio captured - name input */}
            {audioBlob && (
              <div className="mt-6">
                <div className="flex items-center gap-2 mb-4">
                  <Check size={16} style={{ color: 'var(--accent-green)' }} />
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 11,
                      letterSpacing: '0.5px',
                      textTransform: 'uppercase' as const,
                      color: 'var(--accent-green)',
                    }}
                  >
                    {t('create.audioCaptured')}
                    {fileName && ` - ${fileName}`}
                  </span>
                </div>

                <input
                  type="text"
                  value={cloneName}
                  onChange={(e) => setCloneName(e.target.value)}
                  placeholder={t('create.namePlaceholder')}
                  className="w-full rounded-xl px-4 py-3 outline-none transition-colors"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 14,
                    letterSpacing: '0.5px',
                    transitionDuration: '0.1s',
                    backgroundColor: 'var(--bg-card)',
                    border: `1px solid var(--border-color)`,
                    color: 'var(--text-primary)',
                  }}
                  onFocus={(e) => { e.target.style.borderColor = 'var(--text-secondary)'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'var(--border-color)'; }}
                />

                {error && (
                  <p className="mt-2" style={{ fontSize: 12, color: 'var(--accent-red)' }}>
                    {error}
                  </p>
                )}

                <button
                  onClick={processClone}
                  className="w-full h-14 rounded-full flex items-center justify-center gap-2 mt-6 active:opacity-50 transition-opacity"
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
                  <Check size={18} />
                  {t('create.createBtn')}
                </button>

                <button
                  onClick={() => { setAudioBlob(null); setFileName(''); setError(''); setMode('select'); }}
                  className="w-full h-14 rounded-full flex items-center justify-center gap-2 mt-3 active:opacity-50 transition-opacity"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 13,
                    fontWeight: 600,
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase' as const,
                    transitionDuration: '0.1s',
                    border: `1px solid var(--border-color)`,
                    color: 'var(--text-secondary)',
                  }}
                >
                  <X size={18} />
                  {t('create.startOver')}
                </button>
              </div>
            )}

            {error && !audioBlob && (
              <p className="mt-4 text-center" style={{ fontSize: 13, color: 'var(--accent-red)' }}>
                {error}
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
}
