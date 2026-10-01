import Link from "next/link"
import { Check } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PricingClient } from "@/components/pages/pricing-client"
import type { Locale } from "@/lib/i18n/config"
import type { Messages } from "@/lib/i18n/messages"
import { localizedHref } from "@/lib/i18n/routes"

interface PricingPageProps {
  locale: Locale
  t: Messages["pricing"]
  common: Messages["common"]
}

export function PricingPage({ locale, t, common }: PricingPageProps) {
  const { headers, rows, values } = t.comparison

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

      {/* Pricing Tabs Section */}
      <PricingClient locale={locale} t={t.tabs} labels={common.pricing} />

      {/* Plan Comparison */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">{t.comparison.title}</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                {t.comparison.subtitle}
              </p>
            </div>
          </div>

          <Tabs defaultValue="ojs-omp" className="w-full max-w-6xl mx-auto">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="ojs-omp">{t.comparison.tabs.ojsOmp}</TabsTrigger>
                <TabsTrigger value="repository-atom">{t.comparison.tabs.repositoryAtom}</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="ojs-omp" className="space-y-4">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="p-4 text-left font-medium">{headers.feature}</th>
                      <th className="p-4 text-center font-medium">{headers.basic}</th>
                      <th className="p-4 text-center font-medium">{headers.professional}</th>
                      <th className="p-4 text-center font-medium">{headers.enterprise}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4 font-medium">{rows.priceMonthly}</td>
                      <td className="p-4 text-center">$42</td>
                      <td className="p-4 text-center">$60</td>
                      <td className="p-4 text-center">$99</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">{rows.storage}</td>
                      <td className="p-4 text-center">10GB</td>
                      <td className="p-4 text-center">20GB</td>
                      <td className="p-4 text-center">30GB</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">{rows.installations}</td>
                      <td className="p-4 text-center">{values.singleJournalPress}</td>
                      <td className="p-4 text-center">{values.multiIn1}</td>
                      <td className="p-4 text-center">{values.multiInstallations}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">{rows.backups}</td>
                      <td className="p-4 text-center">{values.backups5}</td>
                      <td className="p-4 text-center">{values.backups7}</td>
                      <td className="p-4 text-center">{values.backups7}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">{rows.emailSupport}</td>
                      <td className="p-4 text-center">
                        <Check className="h-5 w-5 text-primary mx-auto" />
                      </td>
                      <td className="p-4 text-center">
                        <Check className="h-5 w-5 text-primary mx-auto" />
                      </td>
                      <td className="p-4 text-center">
                        <Check className="h-5 w-5 text-primary mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">{rows.prioritySupport}</td>
                      <td className="p-4 text-center">-</td>
                      <td className="p-4 text-center">
                        <Check className="h-5 w-5 text-primary mx-auto" />
                      </td>
                      <td className="p-4 text-center">
                        <Check className="h-5 w-5 text-primary mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">{rows.phoneSupport}</td>
                      <td className="p-4 text-center">-</td>
                      <td className="p-4 text-center">-</td>
                      <td className="p-4 text-center">
                        <Check className="h-5 w-5 text-primary mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">{rows.ssl}</td>
                      <td className="p-4 text-center">
                        <Check className="h-5 w-5 text-primary mx-auto" />
                      </td>
                      <td className="p-4 text-center">
                        <Check className="h-5 w-5 text-primary mx-auto" />
                      </td>
                      <td className="p-4 text-center">
                        <Check className="h-5 w-5 text-primary mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">{rows.migrationAnnual}</td>
                      <td className="p-4 text-center">
                        <Check className="h-5 w-5 text-green-600 mx-auto" />
                      </td>
                      <td className="p-4 text-center">
                        <Check className="h-5 w-5 text-green-600 mx-auto" />
                      </td>
                      <td className="p-4 text-center">
                        <Check className="h-5 w-5 text-green-600 mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">{rows.crossref}</td>
                      <td className="p-4 text-center">-</td>
                      <td className="p-4 text-center text-sm text-muted-foreground">{values.onRequest}</td>
                      <td className="p-4 text-center">
                        <Check className="h-5 w-5 text-primary mx-auto" />
                        <span className="block text-xs text-muted-foreground">{values.annualPlan}</span>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">{rows.similarityCheck}</td>
                      <td className="p-4 text-center">-</td>
                      <td className="p-4 text-center text-sm text-muted-foreground">{values.onRequest}</td>
                      <td className="p-4 text-center">
                        <Check className="h-5 w-5 text-primary mx-auto" />
                        <span className="block text-xs text-muted-foreground">{values.annualPlan}</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                  {t.comparison.footnote}
                </p>
              </div>
            </TabsContent>

            <TabsContent value="repository-atom" className="space-y-4">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="p-4 text-left font-medium">{headers.feature}</th>
                      <th className="p-4 text-center font-medium">{headers.professional}</th>
                      <th className="p-4 text-center font-medium">{headers.enterprise}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4 font-medium">{rows.priceMonthly}</td>
                      <td className="p-4 text-center">$170</td>
                      <td className="p-4 text-center">$280</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">{rows.storage}</td>
                      <td className="p-4 text-center">50GB</td>
                      <td className="p-4 text-center">100GB</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">{rows.installation}</td>
                      <td className="p-4 text-center">{values.repositoryAtom}</td>
                      <td className="p-4 text-center">{values.repositoryAtom}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">{rows.backups}</td>
                      <td className="p-4 text-center">{values.backups7}</td>
                      <td className="p-4 text-center">{values.backups7}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">{rows.emailSupport}</td>
                      <td className="p-4 text-center">
                        <Check className="h-5 w-5 text-primary mx-auto" />
                      </td>
                      <td className="p-4 text-center">
                        <Check className="h-5 w-5 text-primary mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">{rows.prioritySupport}</td>
                      <td className="p-4 text-center">-</td>
                      <td className="p-4 text-center">
                        <Check className="h-5 w-5 text-primary mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">{rows.ssl}</td>
                      <td className="p-4 text-center">
                        <Check className="h-5 w-5 text-primary mx-auto" />
                      </td>
                      <td className="p-4 text-center">
                        <Check className="h-5 w-5 text-primary mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">{rows.mailBox}</td>
                      <td className="p-4 text-center">-</td>
                      <td className="p-4 text-center">
                        <Check className="h-5 w-5 text-primary mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">{rows.s3}</td>
                      <td className="p-4 text-center">-</td>
                      <td className="p-4 text-center">
                        <Check className="h-5 w-5 text-primary mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">{rows.installationAnnual}</td>
                      <td className="p-4 text-center">
                        <Check className="h-5 w-5 text-green-600 mx-auto" />
                      </td>
                      <td className="p-4 text-center">
                        <Check className="h-5 w-5 text-primary mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">{rows.migrationAnnual}</td>
                      <td className="p-4 text-center">
                        <Check className="h-5 w-5 text-green-600 mx-auto" />
                      </td>
                      <td className="p-4 text-center">
                        <Check className="h-5 w-5 text-green-600 mx-auto" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">{t.faq.title}</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                {t.faq.subtitle}
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2">
            {t.faq.items.map((item) => (
              <div key={item.question} className="space-y-2">
                <h3 className="text-xl font-bold">{item.question}</h3>
                <p className="text-gray-500 dark:text-gray-400">{item.answer}</p>
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