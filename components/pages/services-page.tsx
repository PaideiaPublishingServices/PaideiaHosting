import Link from "next/link"
import Image from "next/image"
import { BookOpen, Database, Archive, Server, Code, Shield, Palette } from "lucide-react"
import type { Locale } from "@/lib/i18n/config"
import type { Messages } from "@/lib/i18n/messages"
import { localizedHref } from "@/lib/i18n/routes"

interface ServicesPageProps {
  locale: Locale
  t: Messages["services"]
}

export function ServicesPage({ locale, t }: ServicesPageProps) {
  const { items } = t
  const services = [
    {
      ...items.ojs,
      icon: BookOpen,
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=200&fit=crop",
      href: localizedHref("ojsHosting", locale),
    },
    {
      ...items.omp,
      icon: BookOpen,
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=200&fit=crop",
      href: localizedHref("ompHosting", locale),
    },
    {
      ...items.repository,
      icon: Database,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop",
      href: localizedHref("repositoryHosting", locale),
    },
    {
      ...items.atom,
      icon: Archive,
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=200&fit=crop",
      href: localizedHref("atomHosting", locale),
    },
    {
      ...items.vps,
      icon: Server,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=200&fit=crop",
      href: localizedHref("vpsForInstitutions", locale),
    },
    {
      ...items.custom,
      icon: Code,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop",
      href: localizedHref("customSolutions", locale),
    },
    {
      ...items.backup,
      icon: Shield,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=200&fit=crop",
      href: localizedHref("backupSolutions", locale),
    },
    {
      ...items.plugins,
      icon: Palette,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop",
      href: "/plugins",
    },
  ]

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                {t.hero.title}
              </h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                {t.hero.subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Archive Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map(({ title, imageAlt, description, icon: Icon, image, href }) => (
              <div key={href} className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">{title}</h2>
                </div>
                <div className="mt-4">
                  <Image
                    src={image}
                    width={400}
                    height={200}
                    alt={imageAlt}
                    className="rounded-lg object-cover w-full h-48"
                  />
                </div>
                <div className="mt-4 flex-1">
                  <p className="text-gray-500 dark:text-gray-400">
                    {description}
                  </p>
                </div>
                <div className="mt-6">
                  <Link
                    href={href}
                    className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    {t.learnMore}
                  </Link>
                </div>
              </div>
            ))}
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
  )
}
