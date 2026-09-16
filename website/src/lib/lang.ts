import { useTranslation } from 'react-i18next';
import type { LangString } from '../api';
import type { Language } from '../i18n';

/** Picks the value for a language, falling back to English, then to whatever is available. */
export const pickLang = (value: LangString | undefined, lang: string): string =>
  value?.[lang] ?? value?.en ?? Object.values(value ?? {})[0] ?? '';

/**
 * The language the UI is displayed in: `fr` or `en`, never a regional code such as `fr-FR`
 * (which is what i18next keeps as `language` when it comes from the browser).
 */
export function useLang() {
  const { i18n } = useTranslation();
  const lang = (i18n.resolvedLanguage ?? 'en') as Language;
  return { lang, l: (value: LangString | undefined) => pickLang(value, lang) };
}
