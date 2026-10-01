"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { X } from "lucide-react"
import { htmlLang, locales, type Locale } from "@/lib/i18n/config"
import { alternatePath, routes } from "@/lib/i18n/routes"

const STORAGE_KEY = "paideia-locale"

export interface LanguageNoticeText {
  page: string
  site: string
  action: string
  dismiss: string
}

// Stores the visitor's explicit choice; once set, the notice is never shown again.
export function rememberLocale(locale: Locale) {
  try {
    localStorage.setItem(STORAGE_KEY, locale)
  } catch {
    // Storage blocked (private mode, disabled cookies): the notice may reappear, nothing else breaks.
  }
}

function storedLocale(): string | null {
  try {
    return localStorage.getItem(STORAGE_KEY)
  } catch {
    return null
  }
}

function browserLocale(): Locale | null {
  for (const tag of navigator.languages ?? [navigator.language]) {
    const base = tag.toLowerCase().split("-")[0]
    const match = locales.find((l) => l === base)
    if (match) return match
  }
  return null
}

interface LanguageNoticeProps {
  locale: Locale
  // Notice text in each locale: it is written in the language being suggested.
  texts: Record<Locale, LanguageNoticeText>
}

// Suggests the browser's language when it differs from the page's. No automatic redirects.
export function LanguageNotice({ locale, texts }: LanguageNoticeProps) {
  const pathname = usePathname()
  const [suggestion, setSuggestion] = useState<{ locale: Locale; href: string; samePage: boolean } | null>(null)

  useEffect(() => {
    if (storedLocale()) return
    const preferred = browserLocale()
    if (!preferred || preferred === locale) return
    const href = alternatePath(pathname, preferred)
    if (!href) return
    // A link to the other locale's home is only "this page" when we are already on a home.
    const onHome = locales.some((l) => routes.home[l] === pathname)
    setSuggestion({ locale: preferred, href, samePage: onHome || href !== routes.home[preferred] })
  }, [locale, pathname])

  if (!suggestion) return null

  const text = texts[suggestion.locale]
  const dismiss = () => {
    rememberLocale(locale)
    setSuggestion(null)
  }

  return (
    <div role="region" aria-label={text.action} lang={htmlLang[suggestion.locale]} className="border-b bg-muted">
      <div className="container flex items-center gap-4 px-4 py-2 text-sm md:px-6">
        <p className="flex-1 text-muted-foreground">{suggestion.samePage ? text.page : text.site}</p>
        <a
          href={suggestion.href}
          hrefLang={htmlLang[suggestion.locale]}
          onClick={() => rememberLocale(suggestion.locale)}
          className="font-medium text-primary underline-offset-4 hover:underline"
        >
          {text.action}
        </a>
        <button
          type="button"
          onClick={dismiss}
          aria-label={text.dismiss}
          className="rounded-md p-1 text-muted-foreground transition-colors hover:text-primary"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
