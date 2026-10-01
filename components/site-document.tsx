import type React from "react"
import "@/styles/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
// import { ChatBot } from "@/components/chat-bot" // Flowise chat widget disabled
import { WhatsAppButton } from "@/components/whatsapp-button"
import { LanguageNotice } from "@/components/language-notice"
import { Toaster } from "@/components/ui/toaster"
import Script from "next/script" // Importa el componente Script
import { htmlLang, locales, type Locale } from "@/lib/i18n/config"
import { getMessages } from "@/lib/i18n/messages"

const inter = Inter({ subsets: ["latin"] })

// Shared <html> document for every locale's root layout, so <html lang> is set at build time.
export function SiteDocument({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const common = getMessages(locale).common
  const noticeTexts = Object.fromEntries(locales.map((l) => [l, getMessages(l).common.languageNotice])) as Record<
    Locale,
    typeof common.languageNotice
  >

  return (
    <html lang={htmlLang[locale]} suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-54FL27PQ');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-54FL27PQ"
            height="0"
            width="0"
            style={{display: 'none', visibility: 'hidden'}}
          />
        </noscript>

        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="flex min-h-screen flex-col">
            <LanguageNotice locale={locale} texts={noticeTexts} />
            <Header locale={locale} languageLabel={common.languageSwitcher.label} />
            {children}
            <Footer />
            {/* <ChatBot /> */}  {/* Flowise chat widget disabled */}
            <WhatsAppButton />
          </div>
          <Toaster />
        </ThemeProvider>

        {/* Script de Trustpilot */}
        <Script
          id="trustpilot-widget"
          src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
