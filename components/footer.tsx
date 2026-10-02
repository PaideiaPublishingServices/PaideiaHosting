import Link from "next/link"
import { Youtube, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Github } from "lucide-react"
import type { Locale } from "@/lib/i18n/config"
import type { Messages } from "@/lib/i18n/messages"
import { localizedHref, type RouteKey } from "@/lib/i18n/routes"

const serviceLinks: Extract<RouteKey, keyof Messages["layout"]["footer"]["services"]>[] = [
  "ojsHosting",
  "ompHosting",
  "repositoryHosting",
  "atomHosting",
  "vpsForInstitutions",
]

export function Footer({ locale, t }: { locale: Locale; t: Messages["layout"]["footer"] }) {
  const companyLinks = [
    { href: localizedHref("about", locale), label: t.company.about },
    { href: localizedHref("pricing", locale), label: t.company.pricing },
    { href: localizedHref("blog", locale), label: t.company.blog },
    { href: "/affiliates", label: t.company.affiliates },
    { href: "#", label: t.company.careers },
    { href: localizedHref("contact", locale), label: t.company.contact },
  ]

  return (
    <footer className="w-full border-t bg-background">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Paideia Hosting</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{t.tagline}</p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/paideiastudio" className="text-gray-500 hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://www.youtube.com/channel/UC5N-U5k1_2o3r8f_jwJdM3g" className="text-gray-500 hover:text-primary">
                 <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link href="https://www.linkedin.com/company/paideia-studio" className="text-gray-500 hover:text-primary">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://github.com/PaideiaPublishingServices" className="text-gray-500 hover:text-primary">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">{t.servicesTitle}</h3>
            <ul className="space-y-2">
              {serviceLinks.map((key) => (
                <li key={key}>
                  <Link
                    href={localizedHref(key, locale)}
                    className="text-sm text-gray-500 hover:text-primary dark:text-gray-400"
                  >
                    {t.services[key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">{t.companyTitle}</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-gray-500 hover:text-primary dark:text-gray-400">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">{t.contactTitle}</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-gray-500 dark:text-gray-400" />
                  <div>
                    <p className="text-sm font-medium">{t.latamOffice}</p>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Italia 147, Córdoba, 6132, Argentina</span>
                  </div>
                </li>
                <li className="flex items-start space-x-2">
                  <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-gray-500 dark:text-gray-400" />
                  <div>
                    <p className="text-sm font-medium">{t.usOffice}</p>
                    <span className="text-sm text-gray-500 dark:text-gray-400">2810 North Church Street, Wilmington, DE 19802, US</span>
                  </div>
                </li>
                <li className="flex items-start space-x-2">
                  <Phone className="h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400 mt-0.5" />
                  <div>
                    <a
                      href="https://wa.me/13024153857"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm font-semibold text-gray-700 hover:text-primary dark:text-gray-300"
                    >
                      +1 (302) 415-3857
                    </a>
                    <span className="block text-xs text-gray-500 dark:text-gray-400">{t.aiAssistance}</span>
                    <span className="block text-xs text-gray-500 dark:text-gray-400 mt-1">{t.businessHours} +39 (351) 757-6248</span>
                  </div>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400" />
                  <span className="text-sm text-gray-500 dark:text-gray-400">contact@paideiahosting.net</span>
                </li>
              </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            &copy; 2026 Paideia Hosting. {t.rights}
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="https://paideiahosting.net/legal" className="text-xs text-gray-500 hover:text-primary dark:text-gray-400">
              {t.terms}
            </Link>
            <Link href="https://paideiahosting.net/legal" className="text-xs text-gray-500 hover:text-primary dark:text-gray-400">
              {t.privacy}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

