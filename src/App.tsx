import { Routes, Route } from 'react-router-dom';
import { I18nProvider } from '@/hooks/useI18n';
import { ThemeProvider } from '@/hooks/useTheme';
import Dashboard from '@/screens/Dashboard';
import CloneCreate from '@/screens/CloneCreate';
import TTSScreen from '@/screens/TTSScreen';
import SettingsScreen from '@/screens/SettingsScreen';

export default function App() {
  return (
    <I18nProvider>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/create" element={<CloneCreate />} />
          <Route path="/tts" element={<TTSScreen />} />
          <Route path="/settings" element={<SettingsScreen />} />
        </Routes>
      </ThemeProvider>
    </I18nProvider>
  );
}
