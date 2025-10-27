import Link from "next/link"
import Image from "next/image"
import { Palette, Code } from "lucide-react"

export const metadata = {
  title: "Plugins & Themes - Paideia Hosting",
  description:
    "Premium plugins and themes for OJS and OMP. Enhance your academic publishing platform with our professional solutions.",
}

export default function PluginsPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Premium Plugins & Themes
              </h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Professional solutions to enhance your OJS and OMP academic publishing platform
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Plugins Archive Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Products</h2>
              <p className="max-w-[700px] text-gray-500 md:text-lg dark:text-gray-400">
                Themes and plugins specifically designed for academic publishers
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Academic Theme OMP */}
            <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Palette className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Academic Theme OMP</h2>
              </div>
              <div className="mt-4">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  width={400}
                  height={200}
                  alt="Academic Theme OMP"
                  className="rounded-lg object-cover w-full h-48"
                />
              </div>
              <div className="mt-4 flex-1">
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  The most complete and professional theme for your university press on Open Monograph Press.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">✓</span>
                    <span>Customizable hero banner</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">✓</span>
                    <span>Advanced slider with 3 slides</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">✓</span>
                    <span>Premium typography</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">✓</span>
                    <span>Professional licensing system</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 flex flex-col gap-2">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Starting at <span className="text-2xl font-bold text-primary">$99</span>/year
                </div>
                <Link
                  href="/plugins/academic-theme-omp"
                  className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  View Details & Pricing
                </Link>
              </div>
            </div>

            {/* Placeholder for future plugins */}
            <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm opacity-60">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                  <Code className="h-6 w-6 text-gray-400" />
                </div>
                <h2 className="text-2xl font-bold text-gray-400">Coming Soon</h2>
              </div>
              <div className="mt-4">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  width={400}
                  height={200}
                  alt="Coming Soon"
                  className="rounded-lg object-cover w-full h-48 opacity-50"
                />
              </div>
              <div className="mt-4 flex-1">
                <p className="text-gray-400">
                  We are developing more plugins and themes to enhance your OJS and OMP experience.
                </p>
              </div>
              <div className="mt-6">
                <button
                  disabled
                  className="inline-flex h-10 w-full items-center justify-center rounded-md bg-gray-200 px-8 text-sm font-medium text-gray-400 shadow cursor-not-allowed"
                >
                  Coming Soon
                </button>
              </div>
            </div>

            {/* Another placeholder */}
            <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm opacity-60">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                  <Code className="h-6 w-6 text-gray-400" />
                </div>
                <h2 className="text-2xl font-bold text-gray-400">Coming Soon</h2>
              </div>
              <div className="mt-4">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  width={400}
                  height={200}
                  alt="Coming Soon"
                  className="rounded-lg object-cover w-full h-48 opacity-50"
                />
              </div>
              <div className="mt-4 flex-1">
                <p className="text-gray-400">
                  We are developing more plugins and themes to enhance your OJS and OMP experience.
                </p>
              </div>
              <div className="mt-6">
                <button
                  disabled
                  className="inline-flex h-10 w-full items-center justify-center rounded-md bg-gray-200 px-8 text-sm font-medium text-gray-400 shadow cursor-not-allowed"
                >
                  Coming Soon
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Plugins Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Why Choose Our Plugins?
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-lg dark:text-gray-400">
                Developed by experts in academic publishing
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <svg
                  className="h-6 w-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Professional Quality</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Clean, optimized code following development best practices
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <svg
                  className="h-6 w-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Dedicated Support</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Expert technical assistance to resolve any issue
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <svg
                  className="h-6 w-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Regular Updates</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Continuous improvements and compatibility with latest OJS/OMP versions
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <svg
                  className="h-6 w-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Complete Documentation</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Detailed step-by-step guides for installation and configuration
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <svg
                  className="h-6 w-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Customization</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Adapt each plugin to your institution's visual identity
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <svg
                  className="h-6 w-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold">High Performance</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Optimized for fast loading and smooth user experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Need Help?</h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our team is ready to help you choose and implement the best solution for your press
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-center rounded-md bg-white text-primary px-8 text-sm font-medium shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Contact Support
              </Link>
              <Link
                href="/services"
                className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                View Hosting Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
