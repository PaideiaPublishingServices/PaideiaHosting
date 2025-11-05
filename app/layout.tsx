import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChatBot } from "@/components/chat-bot"
import Script from "next/script" // Importa el componente Script

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Paideia Hosting - Cloud for Science, Solutions for Knowledge",
  description:
    "Specialized hosting for academic applications. Reliable, secure, and optimized for research and educational institutions.",
  generator: "Paideia Studio",
  icons: {
    icon: 'https://www.paideiahosting.net/favicon.ico',
    apple: '/apple-icon.png',
    shortcut: '/favicon-16x16.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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
            <Header />
            {children}
            <Footer />
            <ChatBot />
          </div>
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
