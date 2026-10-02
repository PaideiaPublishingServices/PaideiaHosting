import Link from "next/link"
import Image from "next/image"
import { Check, Shield, Clock, Database, Archive } from "lucide-react"
import { BackupPricingCalculator } from "@/components/backup-pricing-calculator"
import type { Locale } from "@/lib/i18n/config"
import type { Messages } from "@/lib/i18n/messages"
import { localizedHref } from "@/lib/i18n/routes"

interface BackupSolutionsPageProps {
  locale: Locale
  t: Messages["backupSolutions"]
  currency: string
}

export function BackupSolutionsPage({ locale, t, currency }: BackupSolutionsPageProps) {
  const contactHref = localizedHref("contact", locale)
  const features = [
    { icon: Shield, ...t.features.security },
    { icon: Database, ...t.features.storage },
    { icon: Archive, ...t.features.preservation },
    { icon: Clock, ...t.features.recovery },
    { icon: Check, ...t.features.compliance },
    { icon: Check, ...t.features.monitoring },
  ]
  const plans = [
    { ...t.plans.preservation, border: "border-primary" },
    { ...t.plans.active, border: "border-blue-300" },
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
                  href={contactHref}
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  {t.hero.contactSales}
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=400&fit=crop"
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

          <div className="flex items-center justify-center mb-6 mt-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>{t.features.hostedOn}</span>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/330px-Amazon_Web_Services_Logo.svg.png" alt={t.features.logoAlt} className="h-6" />
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex flex-col items-start space-y-2">
                <Icon className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Overview Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t.plans.title}</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                {t.plans.subtitle}
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            {plans.map((plan) => (
              <div key={plan.name} className={`flex flex-col rounded-lg border-2 ${plan.border} bg-background p-8 shadow-lg`}>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    {plan.description}
                  </p>
                </div>
                <div className="mt-6 space-y-3">
                  {plan.items.map((item) => (
                    <div key={item.title} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium">{item.title}</p>
                        <p className="text-sm text-gray-500">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t">
                  <p className="text-sm text-gray-600">
                    <strong>{plan.price}</strong> {plan.priceNote}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Pricing Section */}
      <BackupPricingCalculator t={t.calculator} contactHref={contactHref} currency={currency} />

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
              <div key={item.question} className="space-y-2">
                <h3 className="text-xl font-bold">{item.question}</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t.addons.title}</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                {t.addons.subtitle}
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {t.addons.items.map((addon) => (
              <div key={addon.title} className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
                <h3 className="text-lg font-bold mb-2">{addon.title}</h3>
                <p className="text-2xl font-bold text-primary mb-2">{addon.price}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  {addon.description}
                </p>
                <ul className="space-y-1 text-sm">
                  {addon.bullets.map((bullet) => (
                    <li key={bullet}>• {bullet}</li>
                  ))}
                </ul>
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
                href={contactHref}
                className="inline-flex h-10 items-center justify-center rounded-md bg-white text-primary px-8 text-sm font-medium shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                {t.cta.primary}
              </Link>
              <Link
                href={localizedHref("services", locale)}
                className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                {t.cta.secondary}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}