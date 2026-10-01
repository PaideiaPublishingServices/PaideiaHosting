import Link from "next/link"
import Image from "next/image"
import { Check, Archive } from "lucide-react"
import { ServicePricing } from "@/components/service-pricing"
import type { Locale } from "@/lib/i18n/config"
import type { Messages } from "@/lib/i18n/messages"
import { localizedHref } from "@/lib/i18n/routes"

interface AtomHostingPageProps {
  locale: Locale
  t: Messages["atomHosting"]
  common: Messages["common"]
}

export function AtomHostingPage({ locale, t, common }: AtomHostingPageProps) {
  const { plans } = t.pricing
  const atomPlans = [
    {
      name: plans.professional.name,
      description: plans.professional.description,
      monthlyPrice: 170,
      monthlyUrl: "https://shop.paideiahosting.net/shop/atom-pro-m-atom-hosting-professional-monthly-162",
      annualUrl: "https://shop.paideiahosting.net/shop/atom-pro-m-atom-hosting-professional-monthly-162?plan_id=2",
      popular: true,
      features: plans.professional.features,
      conditionalFeatures: [t.pricing.installation, t.pricing.migration]
    },
    {
      name: plans.enterprise.name,
      description: plans.enterprise.description,
      monthlyPrice: 280,
      monthlyUrl: "https://shop.paideiahosting.net/shop/atom-ent-m-atom-hosting-enterprise-monthly-163",
      annualUrl: "https://shop.paideiahosting.net/shop/atom-ent-m-atom-hosting-enterprise-monthly-163?plan_id=2",
      features: plans.enterprise.features,
      annualOnlyFeatures: plans.enterprise.annualOnly
    }
  ]

  const features = [
    { icon: Archive, ...t.features.versions },
    { icon: Check, ...t.features.performance },
    { icon: Check, ...t.features.storage },
    { icon: Check, ...t.features.tools },
    { icon: Check, ...t.features.support },
    { icon: Check, ...t.features.theming },
  ]

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  {t.hero.title}
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  {t.hero.subtitle}
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="#pricing"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  {t.hero.viewPricing}
                </Link>
                <Link
                  href={localizedHref("contact", locale)}
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  {t.hero.contactSales}
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500&h=400&fit=crop"
                width={500}
                height={400}
                alt={t.hero.imageAlt}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t.features.title}</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                {t.features.subtitle}
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex flex-col items-start space-y-2">
                <Icon className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-gray-500 dark:text-gray-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <ServicePricing
        title={t.pricing.title}
        subtitle={t.pricing.subtitle}
        plans={atomPlans}
        labels={common.pricing}
      />

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t.faq.title}</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                {t.faq.subtitle}
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
            {t.faq.items.map((item) => (
              <div key={item.q} className="space-y-2">
                <h3 className="text-xl font-bold">{item.q}</h3>
                <p className="text-gray-500 dark:text-gray-400">{item.a}</p>
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
                href={localizedHref("services", locale)}
                className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                {t.cta.services}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
