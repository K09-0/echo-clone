export interface VoiceClone {
  id: string;
  name: string;
  image: string;
  status: 'active' | 'training';
  duration: string;
  createdAt: string;
  modelId?: string;
}

export interface TTSRequest {
  text: string;
  voiceId: string;
  speed?: number;
  stability?: number;
  style?: number;
}

export interface TTSResult {
  id: string;
  audioUrl: string;
  duration: number;
  text: string;
  voiceName: string;
  createdAt: string;
}

export interface FishAudioAPIKey {
  key: string;
  label: string;
}
