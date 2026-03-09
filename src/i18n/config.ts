/**
 * 多语言配置
 * 支持：English, Deutsch, Français
 */

export const languages = {
  en: 'English',
  de: 'Deutsch', 
  fr: 'Français',
} as const;

export const defaultLocale = 'en';

export type Locale = keyof typeof languages;
