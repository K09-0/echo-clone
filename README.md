# ECHO // CLONE

**Voice Cloning & Text-to-Speech Interface** — Create AI voices from your own audio samples and synthesize speech for music, podcasts, videos, and more.

🔗 **Live Demo**: [https://echoclone.cloud](https://echoclone.cloud)

## ✨ Features

- 🎙️ **Voice Cloning** — Upload audio files or record your voice directly in browser
- 🗣️ **Text-to-Speech** — Generate natural speech from text using your cloned voice
- 🌐 **Bilingual** — Full support for English & Russian (toggle in-app)
- ☀️/🌙 **Dark & Light Themes** — Choose your preferred visual mode
- 📱 **Mobile-First** — Fully responsive, works on phones and desktops
- 📤 **Export Audio** — Download WAV/MP3 for use in Suno, Udio, and other AI music platforms
- 🎵 **AI Music Integration** — Generate vocals for AI music platforms

## 🛠 Tech Stack

- **Frontend**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui (Radix UI primitives)
- **Visualization**: Three.js / WebGL — Fluid waveform visualization
- **API**: Fish Audio API — Free voice cloning & TTS

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm
- Fish Audio API key (free) — [Get it here](https://fish.audio)

### Installation

```bash
# Clone the repository
git clone https://github.com/K09-0/echo-clone.git
cd echo-clone

# Install dependencies
npm install

# Start development server
npm run dev
```

### Configuration

1. Get a free API key at [fish.audio](https://fish.audio)
2. Open the app → Settings
3. Enter your API key (stored locally in your browser)
4. Create your first voice clone and start synthesizing!

## 🖥️ Deployment

### Build for Production

```bash
npm run build
```

Output goes to `dist/` directory. Deploy to any static hosting (Vercel, Netlify, GitHub Pages, or your own server).

### Deploy to VPS/Nginx

```bash
# Build
npm run build

# Copy dist contents to your server
scp -r dist/* user@your-server:/var/www/html/

# Configure nginx to serve the app
```

## 📁 Project Structure

```
echo-clone/
├── src/
│   ├── components/      # UI components (FluidAudioWaveform, VoiceCloneCard, etc.)
│   ├── hooks/           # Custom React hooks (useVoiceClones, useTTS, useI18n, etc.)
│   ├── screens/         # Page components (Dashboard, CloneCreate, TTSScreen, Settings)
│   ├── services/        # API integrations (fishAudio.ts)
│   ├── types/           # TypeScript type definitions
│   ├── lib/             # Utility functions
│   └── App.tsx          # Root component with routing
├── public/              # Static assets
└── dist/                # Production build output
```

## 🎯 Use Cases

- **AI Music Production** — Clone your voice and use it to generate vocals for Suno, Udio
- **Content Creation** — Create voiceovers for YouTube, TikTok, podcasts
- **Accessibility** — Convert text to speech with your own voice
- **Gaming & Animation** — Generate character voices from samples
- **Language Learning** — Practice pronunciation with your cloned voice

## 🐛 Troubleshooting

**Q: "API key not configured" error**
A: Go to Settings → enter your Fish Audio API key

**Q: Voice clone not working**
A: Ensure your audio sample is at least 10 seconds and in MP3/WAV/M4A format

**Q: Generated audio sounds unnatural**
A: Try adjusting Speed/Stability/Style sliders in TTS settings

## 📄 License

MIT License — free to use for personal and commercial projects.

---

Made with ❤️ using React, TypeScript, and [Fish Audio API](https://fish.audio)