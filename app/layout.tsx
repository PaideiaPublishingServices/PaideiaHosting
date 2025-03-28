import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
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
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="flex min-h-screen flex-col">
            <Header />
            {children}
            <Footer />
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
