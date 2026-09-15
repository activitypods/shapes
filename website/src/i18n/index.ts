import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import fr from './fr.json';
import en from './en.json';

export const SUPPORTED_LANGUAGES = ['fr', 'en'] as const;
export type Language = (typeof SUPPORTED_LANGUAGES)[number];

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: { fr: { translation: fr }, en: { translation: en } },
    supportedLngs: SUPPORTED_LANGUAGES,
    fallbackLng: 'en',
    load: 'languageOnly',
    detection: { order: ['querystring', 'localStorage', 'navigator'], lookupQuerystring: 'lang', caches: ['localStorage'] },
    interpolation: { escapeValue: false }
  });

export default i18n;
