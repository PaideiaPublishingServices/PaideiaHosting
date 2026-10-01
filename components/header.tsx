import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from "@/components/ui/sheet"
import { LanguageSwitcher } from "@/components/language-switcher"
import type { Locale } from "@/lib/i18n/config"
import type { Messages } from "@/lib/i18n/messages"
import { localizedHref } from "@/lib/i18n/routes"

interface HeaderProps {
  locale: Locale
  t: Messages["layout"]["header"]
  languageLabel: string
}

export function Header({ locale, t, languageLabel }: HeaderProps) {
  const navItems = [
    { href: localizedHref("home", locale), label: t.nav.home },
    { href: localizedHref("services", locale), label: t.nav.services },
    { href: "/plugins", label: t.nav.plugins },
    { href: localizedHref("pricing", locale), label: t.nav.pricing },
    { href: localizedHref("about", locale), label: t.nav.about },
    { href: localizedHref("contact", locale), label: t.nav.contact },
  ]
  const contactHref = localizedHref("contact", locale)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
      <Link href={localizedHref("home", locale)} className="flex items-center ml-4">
          <div className="relative h-10 w-auto">
            <img
              src="/logo.png"
              alt={t.logoAlt}
              className="h-10 w-auto"
            />
            <span className="hidden text-xl font-bold">Paideia Hosting</span>
          </div>
        </Link>
        <nav className="ml-auto hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="text-sm font-medium transition-colors hover:text-primary">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto md:ml-4 flex items-center gap-4">
          <LanguageSwitcher locale={locale} label={languageLabel} />
          <Link href="https://shop.paideiahosting.net/my" className="text-sm font-medium transition-colors hover:text-primary hidden md:block">
            {t.logIn}
          </Link>
          <Link href={contactHref}>
            <Button variant="default" size="sm" className="hidden md:inline-flex">
              {t.getStarted}
            </Button>
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden mr-4">
                <Menu className="h-5 w-5" />
                <span className="sr-only">{t.toggleMenu}</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetTitle>{t.menu}</SheetTitle>
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <SheetClose key={item.label} asChild>
                    <Link href={item.href} className="text-sm font-medium transition-colors hover:text-primary">
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Link href="https://shop.paideiahosting.net/my" className="text-sm font-medium transition-colors hover:text-primary">
                    {t.logIn}
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href={contactHref}>
                    <Button variant="default" size="sm" className="mt-4">
                      {t.getStarted}
                    </Button>
                  </Link>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
