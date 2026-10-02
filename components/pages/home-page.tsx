import Link from "next/link"
import Image from "next/image"
import { Check, Server, Database, BookOpen, Code, Shield, Palette } from "lucide-react"
import { DomainSearch } from "@/components/domain-search"
import { ServiceCard } from "@/components/service-card"
import { TestimonialCard } from "@/components/testimonial-card"
import type { Locale } from "@/lib/i18n/config"
import type { Messages } from "@/lib/i18n/messages"
import { localizedHref } from "@/lib/i18n/routes"

interface HomePageProps {
  locale: Locale
  t: Messages["home"]
}

export function HomePage({ locale, t }: HomePageProps) {
  const { items } = t.services
  const services = [
    { ...items.ojs, icon: BookOpen, link: localizedHref("ojsHosting", locale) },
    { ...items.omp, icon: BookOpen, link: localizedHref("ompHosting", locale) },
    { ...items.repository, icon: Database, link: localizedHref("repositoryHosting", locale) },
    { ...items.atom, icon: Server, link: localizedHref("atomHosting", locale) },
    { ...items.vps, icon: Server, link: localizedHref("vpsForInstitutions", locale) },
    { ...items.custom, icon: Code, link: localizedHref("customSolutions", locale) },
    { ...items.backup, icon: Shield, link: localizedHref("backupSolutions", locale) },
    { ...items.plugins, icon: Palette, link: "/plugins" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-blue-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    {t.hero.title}
                  </h1>
                  {t.hero.brandLine && (
                    <p className="text-lg font-medium text-gray-600 dark:text-gray-300">{t.hero.brandLine}</p>
                  )}
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    {t.hero.subtitle}
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#services"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    {t.hero.exploreServices}
                  </Link>
                  <Link
                    href={localizedHref("contact", locale)}
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    {t.hero.contactSales}
                  </Link>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="relative">
                  <Image
                    src="/banner-home.jpg?height=400&width=500"
                    width={500}
                    height={400}
                    alt={t.hero.imageAlt}
                    className="rounded-lg object-cover"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1 self-end">
                  {t.hero.photoCredit}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Domain Search Section */}
        <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t.domain.title}</h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                {t.domain.subtitle}
              </p>
              <DomainSearch
                texts={t.domainSearch}
                pricingHref={localizedHref("pricing", locale)}
                contactHref={localizedHref("contact", locale)}
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t.services.title}</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  {t.services.subtitle}
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              {services.map(({ title, description, icon: Icon, link }) => (
                <ServiceCard
                  key={link}
                  title={title}
                  description={description}
                  icon={<Icon className="h-10 w-10 text-primary" />}
                  link={link}
                  learnMoreLabel={t.services.learnMore}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  {t.features.title}
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                  {t.features.description}
                </p>
                <ul className="grid gap-4">
                  {t.features.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href={localizedHref("about", locale)}
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    {t.features.learnMore}
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=400&fit=crop"
                  width={500}
                  height={400}
                  alt={t.features.imageAlt}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t.testimonials.title}</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  {t.testimonials.subtitle}
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {t.testimonials.items.map((item) => (
                <TestimonialCard
                  key={item.author}
                  quote={item.quote}
                  author={item.author}
                  institution={item.institution}
                />
              ))}
            </div>
            {/* Nota de atribución y enlace a Trustpilot */}
          <div 
              className="trustpilot-widget" 
              data-locale="en-US" 
              data-template-id="5419b6a8b0d04a076446a9ad" 
              data-businessunit-id="636a9800c5c1c21fb560f7ee" 
              data-style-height="24px" 
              data-style-width="100%" 
              data-min-review-count="0" 
              data-style-alignment="center"
            >
              <a 
                href="https://www.trustpilot.com/review/paideiastudio.net" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                {t.testimonials.trustpilot}
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t.cta.title}</h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t.cta.subtitle}
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href={localizedHref("contact", locale)}
                  className="inline-flex h-10 items-center justify-center rounded-md bg-white text-primary px-8 text-sm font-medium shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  {t.cta.contact}
                </Link>
                <Link
                  href={localizedHref("pricing", locale)}
                  className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  {t.cta.pricing}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

