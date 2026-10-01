import Link from "next/link"
import Image from "next/image"
import { BookOpen, Server, Database, Code, Users, Award, Globe, BookMarked, Linkedin } from "lucide-react"
import type { Locale } from "@/lib/i18n/config"
import type { Messages } from "@/lib/i18n/messages"
import { localizedHref } from "@/lib/i18n/routes"

interface AboutPageProps {
  locale: Locale
  t: Messages["about"]
}

const clientLogos = [
  {
    src: "https://d1ng31t6m9h8vv.cloudfront.net/wp-content/uploads/2024/05/31144021/logo-unt-300x152.png",
    alt: "Universidad Nacional de Tucumán",
  },
  {
    src: "https://d1ng31t6m9h8vv.cloudfront.net/wp-content/uploads/2023/05/07114006/logo-udep-footer.svg",
    alt: "Universidad de Piura",
  },
  {
    src: "https://d1ng31t6m9h8vv.cloudfront.net/wp-content/uploads/2023/11/06161950/800px-Conicet_Logo_con_letras-300x172.png",
    alt: "CONICET",
  },
  {
    src: "https://d1ng31t6m9h8vv.cloudfront.net/wp-content/uploads/2023/06/06162108/logoUAAAN-300x76.jpg",
    alt: "Universidad Autónoma Agraria Antonio Narro",
  },
  {
    src: "https://d1ng31t6m9h8vv.cloudfront.net/wp-content/uploads/2023/06/06162109/pageHeaderLogoImage_es_ES-300x129.png",
    alt: "Asociación Europea de Profesores de Español",
  },
  {
    src: "https://d1ng31t6m9h8vv.cloudfront.net/wp-content/uploads/2024/05/31143735/hospital-300x118.png",
    alt: "Hospital Italiano",
  },
  {
    src: "https://d1ng31t6m9h8vv.cloudfront.net/wp-content/uploads/2025/05/07094914/Universidad_Catolica_Argentina-300x300.png",
    alt: "Universidad Católica Argentina",
  },
  {
    src: "https://d1ng31t6m9h8vv.cloudfront.net/wp-content/uploads/2025/05/05180136/universidad_def-300x106.png",
    alt: "Universidad Técnica de Cotopaxi",
  },
  {
    src: "https://d1ng31t6m9h8vv.cloudfront.net/wp-content/uploads/2025/05/07095030/logo-web-144.png",
    alt: "Asociación Española de Personalismo",
  },
  {
    src: "https://d1ng31t6m9h8vv.cloudfront.net/wp-content/uploads/2025/05/05180017/logo-unas.png",
    alt: "Universidad Nacional Agraria de la Selva",
  },
  {
    src: "https://d1ng31t6m9h8vv.cloudfront.net/wp-content/uploads/2025/05/05180237/editorialclie-1-300x68.png",
    alt: "Editorial CLIE",
  },
  {
    src: "https://d1ng31t6m9h8vv.cloudfront.net/wp-content/uploads/2025/05/05180324/UXLogo-200px.png",
    alt: "Universidad de Xalapa",
  },
]

export function AboutPage({ locale, t }: AboutPageProps) {
  const values = t.values.items
  const valueCards = [
    { icon: Award, ...values.academicExcellence },
    { icon: Users, ...values.accessibility },
    { icon: Globe, ...values.openKnowledge },
    { icon: Server, ...values.technicalExcellence },
    { icon: BookMarked, ...values.academicFocus },
    { icon: Code, ...values.innovation },
  ]

  const ecosystem = t.ecosystem.items
  const ecosystemCards = [
    { icon: BookOpen, title: "Paideia Publishing Services", href: "https://paideiastudio.net", ...ecosystem.publishingServices },
    { icon: Code, title: "Paideia Studio", href: "https://paideiastudio.net", ...ecosystem.studio },
    { icon: BookMarked, title: "Paideia Editorial", href: "https://paideiaeditorial.net", ...ecosystem.editorial },
    { icon: Database, title: "LATarxiv Preprints", href: "https://preprints.latarxiv.org", ...ecosystem.latarxiv },
  ]

  const members = t.team.members
  const team = [
    { name: "Guillermo Suruguay", ...members.suruguay },
    { name: "Geraldine Trujillo", ...members.trujillo },
    { name: "Gonzalo Ortellado", ...members.ortellado },
    { name: "Ezequiel Esposito", ...members.esposito },
    { name: "Ailin Austrich", ...members.austrich },
  ]

  // The first logos are repeated at the end so the scrolling strip loops seamlessly.
  const logoStrip = [...clientLogos, ...clientLogos.slice(0, 3)]

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
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=400&fit=crop"
                width={500}
                height={400}
                alt={t.hero.imageAlt}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">{t.story.title}</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                {t.story.subtitle}
              </p>
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-4">
              {t.story.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-gray-500 dark:text-gray-400">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&h=400&fit=crop"
                width={500}
                height={400}
                alt={t.story.imageAlt}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">{t.values.title}</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                {t.values.subtitle}
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {valueCards.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex flex-col items-start space-y-2 rounded-lg border bg-background p-6 shadow-sm">
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

      {/* The Paideia Ecosystem Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">{t.ecosystem.title}</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                {t.ecosystem.subtitle}
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {ecosystemCards.map(({ icon: Icon, title, href, description, link }) => (
              <div key={title} className="rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-bold">{title}</h3>
                </div>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  {description}
                </p>
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline flex items-center"
                >
                  {link}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">{t.team.title}</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                {t.team.subtitle}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center space-y-8">
            {/* Patricio Pantaleo - Featured */}
            <div className="flex flex-col items-center text-center max-w-md">
              <div className="mb-4">
                <Image
                  src="https://d1ng31t6m9h8vv.cloudfront.net/wp-content/uploads/2023/02/06162158/perfil-scaled.jpg"
                  width={200}
                  height={200}
                  alt="Patricio Pantaleo"
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">Patricio Pantaleo</h3>
              <p className="text-primary">{members.pantaleo.role}</p>
              <div className="flex justify-center mt-2 mb-2">
                <Link
                  href="https://www.linkedin.com/in/patricio-pantaleo-55402318a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                {members.pantaleo.bio}
              </p>
            </div>

            {/* Rest of the team - Text only */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full mt-16">
              {team.map((member) => (
                <div key={member.name} className="text-center">
                  <h3 className="text-lg font-bold">{member.name}</h3>
                  <p className="text-primary text-sm">{member.role}</p>
                  <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clients & Partners Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">{t.clients.title}</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                {t.clients.subtitle}
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <div className="flex animate-scroll space-x-8 items-center">
              {logoStrip.map((logo, index) => (
                <div key={index} className="flex-shrink-0 grayscale hover:grayscale-0 transition-all">
                  <Image
                    src={logo.src}
                    width={120}
                    height={60}
                    alt={logo.alt}
                    className="object-contain h-12 w-auto"
                  />
                </div>
              ))}
            </div>
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
