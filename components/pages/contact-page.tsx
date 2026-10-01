import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import type { Locale } from "@/lib/i18n/config"
import type { Messages } from "@/lib/i18n/messages"
import { localizedHref } from "@/lib/i18n/routes"

interface ContactPageProps {
  locale: Locale
  t: Messages["contact"]
}

const whatsappUrl = "https://wa.me/13024153857"
const whatsappNumber = "+1 (302) 415-3857"
const businessHoursNumber = "+39 (351) 757-6248"

export function ContactPage({ locale, t }: ContactPageProps) {
  const { getInTouch, departments } = t
  const departmentCards = [
    { email: "contact@paideiahosting.net", ...departments.items.sales },
    { email: "support@paideiahosting.net", ...departments.items.support },
    { email: "contact@paideiahosting.net", ...departments.items.custom },
  ]

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">{t.hero.title}</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                {t.hero.subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter">{getInTouch.title}</h2>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  {getInTouch.subtitle}
                </p>
              </div>

              <div className="grid gap-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-bold">{getInTouch.email.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400">{getInTouch.email.general}</p>
                    <a href="mailto:contact@paideiahosting.net" className="text-primary hover:underline">
                      contact@paideiahosting.net
                    </a>
                    <p className="text-gray-500 dark:text-gray-400 mt-2">{getInTouch.email.support}</p>
                    <a href="mailto:support@paideiahosting.net" className="text-primary hover:underline">
                      support@paideiahosting.net
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-bold">{getInTouch.whatsapp.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400">{getInTouch.whatsapp.assistance}</p>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-primary hover:underline">
                      {whatsappNumber}
                    </a>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                      {`${getInTouch.whatsapp.businessHours} ${businessHoursNumber}`}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-bold">{getInTouch.office.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      2810 North Church Street
                      <br />
                      Wilmington, DE 19802
                      <br />
                      {getInTouch.office.country}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-bold">{getInTouch.hours.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      {getInTouch.hours.weekdays}
                      <br />
                      {getInTouch.hours.weekend}
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden border">
                <Image
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&h=300&fit=crop"
                  width={600}
                  height={300}
                  alt={getInTouch.mapAlt}
                  className="w-full h-[300px] object-cover"
                />
              </div>
            </div>

            <div>
              <div className="rounded-lg border bg-background p-8">
                <div className="mb-6 flex items-center space-x-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  <h2 className="text-2xl font-bold">{t.form.title}</h2>
                </div>
                <ContactForm texts={t.form} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">{departments.title}</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                {departments.subtitle}
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {departmentCards.map((department) => (
              <div key={department.title} className="rounded-lg border bg-background p-6">
                <h3 className="text-xl font-bold mb-2">{department.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  {department.description}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-primary" />
                    <a href={`mailto:${department.email}`} className="text-primary hover:underline">
                      {department.email}
                    </a>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Phone className="h-4 w-4 text-primary mt-0.5" />
                    <div>
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="block font-semibold text-primary hover:underline">
                        {whatsappNumber}
                      </a>
                      <span className="block text-xs text-gray-500 dark:text-gray-400">{departments.assistance}</span>
                      <span className="block text-xs text-gray-500 dark:text-gray-400 mt-1">{`${departments.businessHours} ${businessHoursNumber}`}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24">
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
                <p className="text-gray-500 dark:text-gray-400">
                  {item.answer}
                </p>
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
                href={localizedHref("services", locale)}
                className="inline-flex h-10 items-center justify-center rounded-md bg-white text-primary px-8 text-sm font-medium shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                {t.cta.services}
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
