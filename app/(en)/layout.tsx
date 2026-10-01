import type React from "react"
import { SiteDocument } from "@/components/site-document"
import { SITE_URL } from "@/lib/i18n/config"
import { getMessages } from "@/lib/i18n/messages"

const { site } = getMessages("en")

export const metadata = {
  metadataBase: new URL(SITE_URL),
  // "./" resolves to each route's own pathname (no query string), so every page
  // emits an absolute https canonical unless it overrides `alternates`.
  alternates: {
    canonical: "./",
  },
  title: site.title,
  description: site.description,
  generator: "Paideia Studio",
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
    shortcut: '/favicon-16x16.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <SiteDocument locale="en">{children}</SiteDocument>
}
