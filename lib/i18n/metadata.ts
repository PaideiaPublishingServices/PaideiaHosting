import type { Metadata } from "next"
import { absoluteUrl, htmlLang, type Locale } from "./config"
import { publishedLocales, routes, type RouteKey } from "./routes"

interface PageMeta {
  title: string
  description: string
}

// Title, description, self canonical and reciprocal hreflang (plus x-default → English) for a
// localized page. hreflang is only emitted when the page exists in more than one locale.
export function localizedMetadata(key: RouteKey, locale: Locale, meta: PageMeta): Metadata {
  const available = publishedLocales[key]
  const languages =
    available.length > 1
      ? {
          ...Object.fromEntries(available.map((l) => [htmlLang[l], absoluteUrl(routes[key][l])])),
          "x-default": absoluteUrl(routes[key].en),
        }
      : undefined

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: absoluteUrl(routes[key][locale]),
      languages,
    },
  }
}
