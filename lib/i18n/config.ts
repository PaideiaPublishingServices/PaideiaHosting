export const SITE_URL = "https://paideiahosting.net"

export const locales = ["en", "es", "pt"] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = "en"

// Value for <html lang> and for hreflang attributes.
export const htmlLang: Record<Locale, string> = {
  en: "en",
  es: "es",
  pt: "pt-BR",
}

// Short label shown in the language switcher.
export const localeLabel: Record<Locale, string> = {
  en: "EN",
  es: "ES",
  pt: "PT",
}

// Absolute URL without trailing slash, matching the canonicals Next emits ("/" → SITE_URL).
export function absoluteUrl(path: string): string {
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`
}

// Locales whose pages are still draft translations: they get <meta robots="noindex"> and are left out
// of the sitemap. Remove a locale from here once its copy has been reviewed.
export const noindexLocales: readonly Locale[] = ["es"]
