const API_BASE = 'https://api.fish.audio/v1';

function getApiKey(): string {
  return localStorage.getItem('fish_api_key') || '';
}

export function setApiKey(key: string) {
  localStorage.setItem('fish_api_key', key);
}

export function getApiKeyFromStorage(): string {
  return localStorage.getItem('fish_api_key') || '';
}

export async function uploadVoiceSample(file: File): Promise<{ modelId: string }> {
  const apiKey = getApiKey();
  if (!apiKey) throw new Error('API key not configured');

  const formData = new FormData();
  formData.append('file', file);

  const response = await fetch(`${API_BASE}/model`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
    },
    body: formData,
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to upload voice sample');
  }

  const data = await response.json();
  return { modelId: data.id };
}

export async function generateTTS(text: string, modelId: string, options?: { speed?: number }): Promise<Blob> {
  const apiKey = getApiKey();
  if (!apiKey) throw new Error('API key not configured');

  const response = await fetch(`${API_BASE}/tts`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      'model': 's2-pro',
    },
    body: JSON.stringify({
      text,
      reference_id: modelId,
      format: 'mp3',
      chunk_length: 200,
      normalize: true,
      latency: 'normal',
      ...(options?.speed ? { speed: options.speed } : {}),
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to generate speech');
  }

  return response.blob();
}

export async function generateTTSWithReferenceAudio(text: string, referenceAudio: File): Promise<Blob> {
  const apiKey = getApiKey();
  if (!apiKey) throw new Error('API key not configured');

  const formData = new FormData();
  formData.append('text', text);
  formData.append('reference_audio', referenceAudio);
  formData.append('format', 'mp3');

  const response = await fetch(`${API_BASE}/tts`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
    },
    body: formData,
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to generate speech');
  }

  return response.blob();
}

export function createAudioUrl(blob: Blob): string {
  return URL.createObjectURL(blob);
}

export function downloadAudio(blob: Blob, filename: string) {
  const url = createAudioUrl(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
