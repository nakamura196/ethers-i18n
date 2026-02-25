import { ErrorCode, SupportedLocale, I18nConfig, LocaleMessages } from "./types";
import { en } from "./locales/en";
import { ja } from "./locales/ja";
import { ko } from "./locales/ko";
import { zh } from "./locales/zh";

export { ErrorCode, SupportedLocale, I18nConfig, LocaleMessages } from "./types";

const locales: Record<SupportedLocale, LocaleMessages> = { en, ja, ko, zh };

let currentConfig: I18nConfig = {
  locale: "en",
  fallback: "en",
};

export function setLocale(locale: SupportedLocale): void {
  currentConfig.locale = locale;
}

export function getLocale(): SupportedLocale {
  return currentConfig.locale;
}

export function configure(config: Partial<I18nConfig>): void {
  currentConfig = { ...currentConfig, ...config };
}

export function t(code: ErrorCode): string {
  const messages = locales[currentConfig.locale];
  if (messages && messages[code]) {
    return messages[code];
  }
  const fallback = locales[currentConfig.fallback];
  return fallback[code] || code;
}

export function getMessages(locale?: SupportedLocale): LocaleMessages {
  return locales[locale || currentConfig.locale] || locales[currentConfig.fallback];
}

export function getSupportedLocales(): SupportedLocale[] {
  return Object.keys(locales) as SupportedLocale[];
}
