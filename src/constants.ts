import { Pathnames } from 'next-intl/navigation';

export enum SupportedLocales {
  ru = 'ru',
  en = 'en',
}

export const supportedLocalesArray: string[] = Object.values(SupportedLocales);

// Default locale: used when no locale matches
export const defaultLocale = SupportedLocales.ru;

// Use the default: `always` (by default, pathnames always start with the locale (e.g. /en/about))
export const localePrefix = undefined;

export enum RealPathnames {
  Main = '/',
  Help = '/help',
}

// Соответствие отображаемых в адресной строке путей реальным
export const pathnames = {
  [RealPathnames.Main]: '/',
  [RealPathnames.Help]: {
    [SupportedLocales.ru]: '/help-ru',
    [SupportedLocales.en]: '/help-en',
  }
} satisfies Pathnames<typeof supportedLocalesArray>;
