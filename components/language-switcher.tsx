"use client"

import { usePathname } from "next/navigation"
import { htmlLang, localeLabel, locales, type Locale } from "@/lib/i18n/config"
import { alternatePath } from "@/lib/i18n/routes"
import { rememberLocale } from "@/components/language-notice"

interface LanguageSwitcherProps {
  locale: Locale
  label: string
  className?: string
}

// Links to the same page in the other locales (or to their home when the page is not translated).
// Locales with neither are hidden. Plain <a> because each locale has its own root layout.
export function LanguageSwitcher({ locale, label, className = "" }: LanguageSwitcherProps) {
  const pathname = usePathname()
  const options = locales
    .map((l) => ({ locale: l, href: l === locale ? null : alternatePath(pathname, l) }))
    .filter((option) => option.locale === locale || option.href)

  if (options.length < 2) return null

  return (
    <nav aria-label={label} className={`flex items-center gap-2 text-sm ${className}`}>
      {options.map((option, index) => (
        <span key={option.locale} className="flex items-center gap-2">
          {index > 0 && <span className="text-muted-foreground">·</span>}
          {option.href ? (
            <a
              href={option.href}
              hrefLang={htmlLang[option.locale]}
              lang={htmlLang[option.locale]}
              onClick={() => rememberLocale(option.locale)}
              className="font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {localeLabel[option.locale]}
            </a>
          ) : (
            <span aria-current="true" className="font-semibold text-primary">
              {localeLabel[option.locale]}
            </span>
          )}
        </span>
      ))}
    </nav>
  )
}
