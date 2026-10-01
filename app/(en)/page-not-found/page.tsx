import Link from "next/link"
import { getMessages } from "@/lib/i18n/messages"

const { notFound } = getMessages("en")

// Next 15.1 cannot wrap its own 404 in a layout when there are several root layouts, so this page
// is rendered with the site layout and copied to out/404.html by the deploy workflow.
export const metadata = {
  title: notFound.meta.title,
  robots: { index: false, follow: true },
  alternates: { canonical: null },
}

export default function PageNotFound() {
  return (
    <main className="flex-1">
      <section className="w-full py-24 md:py-32 lg:py-40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <p className="text-sm font-medium tracking-widest text-gray-500 dark:text-gray-400">404</p>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{notFound.title}</h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">{notFound.text}</p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="/"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                {notFound.home}
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                {notFound.contact}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
