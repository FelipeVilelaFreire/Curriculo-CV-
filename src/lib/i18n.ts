export type Locale = "en" | "pt" | "de" | "es";

export const defaultLocale: Locale = "en";

export const locales: Locale[] = ["en", "pt", "de", "es"];

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  pt: "PT",
  de: "DE",
  es: "ES",
};

export async function getMessages(locale: Locale) {
  return (await import(`../../messages/${locale}.json`)).default;
}
