import { useTranslation } from 'react-i18next';
import type { LangString } from '../api';

/** Picks the value for a language, falling back to English, then to whatever is available. */
export const pickLang = (value: LangString | undefined, lang: string): string =>
  value?.[lang] ?? value?.en ?? Object.values(value ?? {})[0] ?? '';

export function useLang() {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  return { lang, l: (value: LangString | undefined) => pickLang(value, lang) };
}
