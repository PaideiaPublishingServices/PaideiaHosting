import type { MetadataRoute } from "next"
import { absoluteUrl, htmlLang, noindexLocales, type Locale } from "@/lib/i18n/config"
import { publishedLocales, routes, type RouteKey } from "@/lib/i18n/routes"
import { getAllPosts } from "@/lib/posts"

export const dynamic = "force-static"

type Entry = MetadataRoute.Sitemap[number]
type Seo = Pick<Entry, "lastModified" | "changeFrequency" | "priority">

const translatable: Record<RouteKey, Seo> = {
  home: { lastModified: "2026-09-30", changeFrequency: "monthly", priority: 1.0 },
  about: { changeFrequency: "monthly", priority: 0.8 },
  contact: { lastModified: "2026-09-30", changeFrequency: "monthly", priority: 0.7 },
  pricing: { lastModified: "2026-09-30", changeFrequency: "monthly", priority: 0.9 },
  services: { changeFrequency: "monthly", priority: 0.9 },
  ojsHosting: { lastModified: "2026-09-30", changeFrequency: "monthly", priority: 0.8 },
  ompHosting: { lastModified: "2026-09-30", changeFrequency: "monthly", priority: 0.8 },
  repositoryHosting: { lastModified: "2026-09-30", changeFrequency: "monthly", priority: 0.8 },
  atomHosting: { lastModified: "2026-09-30", changeFrequency: "monthly", priority: 0.8 },
  vpsForInstitutions: { lastModified: "2026-09-30", changeFrequency: "monthly", priority: 0.8 },
  customSolutions: { lastModified: "2026-09-30", changeFrequency: "monthly", priority: 0.7 },
  backupSolutions: { changeFrequency: "monthly", priority: 0.7 },
  blog: { changeFrequency: "weekly", priority: 0.8 },
}

// English-only pages (no translations planned in this stage).
const englishOnly: (Seo & { path: string })[] = [
  { path: "/affiliates", lastModified: "2026-07-29", changeFrequency: "monthly", priority: 0.6 },
  { path: "/plugins", changeFrequency: "monthly", priority: 0.7 },
  { path: "/plugins/academic-theme-omp", lastModified: "2026-09-30", changeFrequency: "monthly", priority: 0.7 },
]

function indexableLocales(key: RouteKey): Locale[] {
  return publishedLocales[key].filter((l) => !noindexLocales.includes(l))
}

// One entry per indexable locale of each page, each listing all its language versions.
function localizedEntries(key: RouteKey): Entry[] {
  const available = indexableLocales(key)
  const languages =
    available.length > 1
      ? {
          ...Object.fromEntries(available.map((l) => [htmlLang[l], absoluteUrl(routes[key][l])])),
          "x-default": absoluteUrl(routes[key].en),
        }
      : undefined
  return available.map((locale) => ({
    url: absoluteUrl(routes[key][locale]),
    ...translatable[key],
    ...(languages && { alternates: { languages } }),
  }))
}

export default function sitemap(): MetadataRoute.Sitemap {
  const posts: Entry[] = getAllPosts().map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: post.date || undefined,
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  return [
    ...(Object.keys(translatable) as RouteKey[]).flatMap(localizedEntries),
    ...englishOnly.map(({ path, ...seo }) => ({ url: absoluteUrl(path), ...seo })),
    ...posts,
  ]
}
