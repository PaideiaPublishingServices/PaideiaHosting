import { locales, type Locale } from "./config"

// Localized path of every translatable page. English lives at the root with its original URLs.
export const routes = {
  home: { en: "/", es: "/es", pt: "/pt" },
  services: { en: "/services", es: "/es/servicios", pt: "/pt/servicos" },
  ojsHosting: { en: "/services/ojs-hosting", es: "/es/servicios/hosting-ojs", pt: "/pt/servicos/hospedagem-ojs" },
  ompHosting: { en: "/services/omp-hosting", es: "/es/servicios/hosting-omp", pt: "/pt/servicos/hospedagem-omp" },
  repositoryHosting: {
    en: "/services/repository-hosting",
    es: "/es/servicios/hosting-repositorios",
    pt: "/pt/servicos/hospedagem-repositorios",
  },
  atomHosting: { en: "/services/atom-hosting", es: "/es/servicios/hosting-atom", pt: "/pt/servicos/hospedagem-atom" },
  vpsForInstitutions: {
    en: "/services/vps-for-institutions",
    es: "/es/servicios/vps-institucional",
    pt: "/pt/servicos/vps-institucional",
  },
  backupSolutions: { en: "/services/backup-solutions", es: "/es/servicios/backups", pt: "/pt/servicos/backups" },
  customSolutions: {
    en: "/services/custom-solutions",
    es: "/es/servicios/soluciones-a-medida",
    pt: "/pt/servicos/solucoes-sob-medida",
  },
  pricing: { en: "/pricing", es: "/es/precios", pt: "/pt/precos" },
  about: { en: "/about", es: "/es/nosotros", pt: "/pt/sobre" },
  contact: { en: "/contact", es: "/es/contacto", pt: "/pt/contato" },
} as const satisfies Record<string, Record<Locale, string>>

export type RouteKey = keyof typeof routes

// Locales that are actually built for each route. This single list drives hreflang, the sitemap,
// the language switcher and the language notice, so a locale must be added here only once its page exists.
export const publishedLocales: Record<RouteKey, readonly Locale[]> = {
  home: ["en", "es", "pt"],
  services: ["en", "es", "pt"],
  ojsHosting: ["en", "es", "pt"],
  ompHosting: ["en", "es", "pt"],
  repositoryHosting: ["en", "es", "pt"],
  atomHosting: ["en", "es", "pt"],
  vpsForInstitutions: ["en", "es", "pt"],
  backupSolutions: ["en", "es", "pt"],
  customSolutions: ["en", "es", "pt"],
  pricing: ["en", "es", "pt"],
  about: ["en", "es", "pt"],
  contact: ["en", "es", "pt"],
}

export function isPublished(key: RouteKey, locale: Locale): boolean {
  return publishedLocales[key].includes(locale)
}

// Path for a link inside a localized page: the localized route if it exists, otherwise English.
export function localizedHref(key: RouteKey, locale: Locale): string {
  return isPublished(key, locale) ? routes[key][locale] : routes[key].en
}

function findRouteKey(pathname: string): RouteKey | undefined {
  const normalized = pathname !== "/" ? pathname.replace(/\/+$/, "") : pathname
  return (Object.keys(routes) as RouteKey[]).find((key) =>
    locales.some((locale) => routes[key][locale] === normalized),
  )
}

// Equivalent page in another locale: the translated page, else that locale's home, else null.
export function alternatePath(pathname: string, target: Locale): string | null {
  const key = findRouteKey(pathname)
  if (key && isPublished(key, target)) return routes[key][target]
  if (isPublished("home", target)) return routes.home[target]
  return null
}
