import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

type Lang = 'ru' | 'en';

const translations: Record<Lang, Record<string, string>> = {
  en: {
    // App
    'app.title': 'ECHO // CLONE',
    'app.tagline': 'Voice Cloning & Text to Speech',
    'hero.title1': 'YOUR VOICE',
    'hero.title2': 'SYNTHESIZED',

    // Navigation
    'nav.back': 'BACK',
    'nav.cancel': 'CANCEL',
    'nav.cloneStudio': 'CLONE STUDIO',
    'nav.settings': 'SETTINGS',
    'nav.library': 'LIBRARY',

    // Dashboard
    'dashboard.clonesAvailable': 'CLONES AVAILABLE',
    'dashboard.createNew': 'CREATE NEW CLONE',
    'dashboard.noClones': 'No voice clones yet. Create your first!',

    // Clone Card
    'card.active': 'ACTIVE',
    'card.training': 'TRAINING',
    'card.generate': 'GENERATE',
    'card.edit': 'EDIT',
    'card.export': 'EXPORT',
    'card.delete': 'DELETE',

    // Create Clone
    'create.title': 'Create Voice Clone',
    'create.uploadAudio': 'UPLOAD AUDIO FILE',
    'create.uploadDesc': 'MP3, WAV, M4A (Min. 10s)',
    'create.recordLive': 'RECORD LIVE',
    'create.recordDesc': 'Read the script to capture your voice',
    'create.dropHint': 'Drop audio file here or',
    'create.browseFiles': 'BROWSE FILES',
    'create.recording': 'RECORDING...',
    'create.stopRecord': 'STOP RECORDING',
    'create.useRecording': 'USE THIS RECORDING',
    'create.startRecord': 'START RECORDING',
    'create.audioCaptured': 'AUDIO CAPTURED',
    'create.namePlaceholder': 'Name your voice clone...',
    'create.createBtn': 'CREATE CLONE',
    'create.startOver': 'START OVER',
    'create.processing1': 'ANALYZING AUDIO SPECTRUM...',
    'create.processing2': 'EXTRACTING VOICE FEATURES...',
    'create.processing3': 'BUILDING VOICE MODEL...',
    'create.sampleText': 'The quick brown fox jumps over the lazy dog. Voice cloning technology captures the unique characteristics of your speech patterns, tone, and timbre. Read this passage clearly and at a natural pace to create the most accurate voice model possible.',
    'create.micError': 'Microphone access denied. Please allow microphone access and try again.',
    'create.fileError': 'Please upload an audio file (MP3, WAV, M4A)',
    'create.nameError': 'Please enter a name for your voice clone',
    'create.apiKeyError': 'Please configure your Fish Audio API key in Settings first',

    // TTS
    'tts.title': 'TEXT TO SPEECH',
    'tts.paste': 'PASTE',
    'tts.placeholder': 'Type or paste your script here...',
    'tts.charCount': 'chars',
    'tts.voiceSettings': 'VOICE SETTINGS',
    'tts.hideSettings': 'HIDE SETTINGS',
    'tts.showSettings': 'SHOW SETTINGS',
    'tts.speed': 'SPEED',
    'tts.stability': 'STABILITY',
    'tts.style': 'STYLE',
    'tts.generate': 'GENERATE SPEECH',
    'tts.generating': 'GENERATING...',
    'tts.apiKeyWarning': 'Add your Fish Audio API key in Settings to generate speech',

    // Audio Player
    'player.export': 'EXPORT',
    'player.useInSuno': 'USE IN SUNO',
    'player.generated': 'Generated Speech',

    // Settings
    'settings.title': 'Settings',
    'settings.apiKey': 'FISH AUDIO API KEY',
    'settings.apiKeyDesc': 'Your API key is stored locally in your browser. Get a free key at',
    'settings.apiKeySaved': 'API KEY SAVED',
    'settings.dataManagement': 'DATA MANAGEMENT',
    'settings.deleteAll': 'Delete All Voice Clones',
    'settings.deleteDesc': 'This will remove all cloned voices from local storage',
    'settings.deleteConfirm': 'Are you sure?',
    'settings.deleteAllBtn': 'DELETE ALL',
    'settings.language': 'LANGUAGE',
    'settings.theme': 'THEME',
    'settings.dark': 'Dark',
    'settings.light': 'Light',
    'settings.system': 'System',
    'settings.version': 'ECHO // CLONE v1.0',
    'settings.poweredBy': 'Powered by Fish Audio API',

    // Common
    'common.close': 'CLOSE',
    'common.save': 'SAVE',
  },
  ru: {
    // App
    'app.title': 'ECHO // CLONE',
    'app.tagline': 'Клонирование голоса и озвучка',
    'hero.title1': 'ТВОЙ ГОЛОС',
    'hero.title2': 'СИНТЕЗИРОВАН',

    // Navigation
    'nav.back': 'НАЗАД',
    'nav.cancel': 'ОТМЕНА',
    'nav.cloneStudio': 'СТУДИЯ КЛОНОВ',
    'nav.settings': 'НАСТРОЙКИ',
    'nav.library': 'БИБЛИОТЕКА',

    // Dashboard
    'dashboard.clonesAvailable': 'ДОСТУПНО КЛОНОВ',
    'dashboard.createNew': 'СОЗДАТЬ НОВЫЙ КЛОН',
    'dashboard.noClones': 'Пока нет клонов голоса. Создай первый!',

    // Clone Card
    'card.active': 'АКТИВЕН',
    'card.training': 'ОБУЧЕНИЕ',
    'card.generate': 'СИНТЕЗ',
    'card.edit': 'ИЗМ',
    'card.export': 'ЭКСПОРТ',
    'card.delete': 'УДАЛИТЬ',

    // Create Clone
    'create.title': 'Создание клона голоса',
    'create.uploadAudio': 'ЗАГРУЗИТЬ АУДИОФАЙЛ',
    'create.uploadDesc': 'MP3, WAV, M4A (мин. 10с)',
    'create.recordLive': 'ЗАПИСАТЬ ГОЛОС',
    'create.recordDesc': 'Прочитай текст для записи голоса',
    'create.dropHint': 'Перетащи аудиофайл или',
    'create.browseFiles': 'ВЫБРАТЬ ФАЙЛ',
    'create.recording': 'ИДЁТ ЗАПИСЬ...',
    'create.stopRecord': 'ОСТАНОВИТЬ ЗАПИСЬ',
    'create.useRecording': 'ИСПОЛЬЗОВАТЬ ЗАПИСЬ',
    'create.startRecord': 'НАЧАТЬ ЗАПИСЬ',
    'create.audioCaptured': 'АУДИО ЗАПИСАНО',
    'create.namePlaceholder': 'Назови клон голоса...',
    'create.createBtn': 'СОЗДАТЬ КЛОН',
    'create.startOver': 'НАЧАТЬ ЗАНОВО',
    'create.processing1': 'АНАЛИЗ АУДИО СПЕКТРА...',
    'create.processing2': 'ИЗВЛЕЧЕНИЕ ПРИЗНАКОВ ГОЛОСА...',
    'create.processing3': 'СОЗДАНИЕ МОДЕЛИ ГОЛОСА...',
    'create.sampleText': 'Быстрая коричневая лисица прыгает через ленивого пса. Технология клонирования голоса улавливает уникальные характеристики ваших речевых паттернов, тембра и интонаций. Прочитайте этот отрывок чётко и в естественном темпе, чтобы создать максимально точную модель голоса.',
    'create.micError': 'Доступ к микрофону запрещён. Разрешите доступ и попробуйте снова.',
    'create.fileError': 'Загрузите аудиофайл (MP3, WAV, M4A)',
    'create.nameError': 'Введите название для клона голоса',
    'create.apiKeyError': 'Сначала добавьте API-ключ Fish Audio в Настройках',

    // TTS
    'tts.title': 'ТЕКСТ В РЕЧЬ',
    'tts.paste': 'ВСТАВИТЬ',
    'tts.placeholder': 'Введи или вставь текст...',
    'tts.charCount': 'симв',
    'tts.voiceSettings': 'НАСТРОЙКИ ГОЛОСА',
    'tts.hideSettings': 'СКРЫТЬ НАСТРОЙКИ',
    'tts.showSettings': 'ПОКАЗАТЬ НАСТРОЙКИ',
    'tts.speed': 'СКОРОСТЬ',
    'tts.stability': 'СТАБИЛЬНОСТЬ',
    'tts.style': 'СТИЛЬ',
    'tts.generate': 'СИНТЕЗИРОВАТЬ РЕЧЬ',
    'tts.generating': 'СИНТЕЗ...',
    'tts.apiKeyWarning': 'Добавьте API-ключ Fish Audio в Настройках для генерации речи',

    // Audio Player
    'player.export': 'ЭКСПОРТ',
    'player.useInSuno': 'ИСП. В SUNO',
    'player.generated': 'Сгенерированная речь',

    // Settings
    'settings.title': 'Настройки',
    'settings.apiKey': 'API-КЛЮЧ FISH AUDIO',
    'settings.apiKeyDesc': 'Ваш ключ хранится локально в браузере. Получите бесплатный ключ на',
    'settings.apiKeySaved': 'КЛЮЧ СОХРАНЁН',
    'settings.dataManagement': 'УПРАВЛЕНИЕ ДАННЫМИ',
    'settings.deleteAll': 'Удалить все клоны голоса',
    'settings.deleteDesc': 'Это удалит все клонированные голоса из локального хранилища',
    'settings.deleteConfirm': 'Вы уверены?',
    'settings.deleteAllBtn': 'УДАЛИТЬ ВСЕ',
    'settings.language': 'ЯЗЫК',
    'settings.theme': 'ТЕМА',
    'settings.dark': 'Тёмная',
    'settings.light': 'Светлая',
    'settings.system': 'Системная',
    'settings.version': 'ECHO // CLONE v1.0',
    'settings.poweredBy': 'На базе Fish Audio API',

    // Common
    'common.close': 'ЗАКРЫТЬ',
    'common.save': 'СОХРАНИТЬ',
  },
};

interface I18nContextType {
  lang: Lang;
  t: (key: string) => string;
  setLang: (lang: Lang) => void;
}

const I18nContext = createContext<I18nContextType>({
  lang: 'en',
  t: (key: string) => key,
  setLang: () => {},
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const stored = localStorage.getItem('echo_lang') as Lang;
    return stored || (navigator.language.startsWith('ru') ? 'ru' : 'en');
  });

  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem('echo_lang', newLang);
  }, []);

  const t = useCallback(
    (key: string): string => {
      return translations[lang][key] || key;
    },
    [lang]
  );

  return (
    <I18nContext.Provider value={{ lang, t, setLang }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
