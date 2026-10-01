import type React from "react"
import { SiteDocument } from "@/components/site-document"
import { SITE_URL, noindexLocales } from "@/lib/i18n/config"
import { getMessages } from "@/lib/i18n/messages"

const { site } = getMessages("pt")

export const metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "./",
  },
  title: site.title,
  description: site.description,
  generator: "Paideia Studio",
  // Draft translations stay out of search results until the copy is reviewed (see noindexLocales).
  robots: noindexLocales.includes("pt") ? { index: false, follow: true } : undefined,
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
    shortcut: '/favicon-16x16.png'
  }
}

export default function PortugueseRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <SiteDocument locale="pt">{children}</SiteDocument>
}
