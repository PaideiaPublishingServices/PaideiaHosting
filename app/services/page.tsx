import Link from "next/link"
import Image from "next/image"
import { BookOpen, Database, Archive, Server, Code } from "lucide-react"

export const metadata = {
  title: "Academic Hosting Services - Paideia Hosting",
  description:
    "Explore our specialized hosting services for academic institutions. From OJS and OMP to Dataverse, AtoM, VPS, and custom solutions.",
}

export default function ServicesPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Our Academic Hosting Services
              </h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Specialized hosting solutions designed for research and educational institutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Archive Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* OJS Hosting */}
            <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">OJS Hosting</h2>
              </div>
              <div className="mt-4">
                <Image
                  src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=200&fit=crop"
                  width={400}
                  height={200}
                  alt="OJS Hosting"
                  className="rounded-lg object-cover w-full h-48"
                />
              </div>
              <div className="mt-4 flex-1">
                <p className="text-gray-500 dark:text-gray-400">
                  Specialized hosting for Open Journal Systems (OJS). Perfect for academic publishing and journal
                  management.
                </p>
              </div>
              <div className="mt-6">
                <Link
                  href="/services/ojs-hosting"
                  className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* OMP Hosting */}
            <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">OMP Hosting</h2>
              </div>
              <div className="mt-4">
                <Image
                  src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=200&fit=crop"
                  width={400}
                  height={200}
                  alt="OMP Hosting"
                  className="rounded-lg object-cover w-full h-48"
                />
              </div>
              <div className="mt-4 flex-1">
                <p className="text-gray-500 dark:text-gray-400">
                  Specialized hosting for Open Monograph Press (OMP). Ideal for academic book publishing and management.
                </p>
              </div>
              <div className="mt-6">
                <Link
                  href="/services/omp-hosting"
                  className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Repository Hosting */}
            <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Repository Hosting</h2>
              </div>
              <div className="mt-4">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop"
                  width={400}
                  height={200}
                  alt="Repository Hosting"
                  className="rounded-lg object-cover w-full h-48"
                />
              </div>
              <div className="mt-4 flex-1">
                <p className="text-gray-500 dark:text-gray-400">
                  Secure and reliable hosting for research data repositories (Dataverse & DSpace) on AWS infrastructure.
                </p>
              </div>
              <div className="mt-6">
                <Link
                  href="/services/repository-hosting"
                  className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* AtoM Hosting */}
            <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Archive className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">AtoM Hosting</h2>
              </div>
              <div className="mt-4">
                <Image
                  src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=200&fit=crop"
                  width={400}
                  height={200}
                  alt="AtoM Hosting"
                  className="rounded-lg object-cover w-full h-48"
                />
              </div>
              <div className="mt-4 flex-1">
                <p className="text-gray-500 dark:text-gray-400">
                  Professional hosting for Access to Memory (AtoM) archival software on AWS infrastructure.
                </p>
              </div>
              <div className="mt-6">
                <Link
                  href="/services/atom-hosting"
                  className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* VPS for Institutions */}
            <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">VPS for Institutions</h2>
              </div>
              <div className="mt-4">
                <Image
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=200&fit=crop"
                  width={400}
                  height={200}
                  alt="VPS for Institutions"
                  className="rounded-lg object-cover w-full h-48"
                />
              </div>
              <div className="mt-4 flex-1">
                <p className="text-gray-500 dark:text-gray-400">
                  Customizable virtual private servers for educational institutions. Reliable, secure, and optimized for
                  academic needs.
                </p>
              </div>
              <div className="mt-6">
                <Link
                  href="/services/vps-for-institutions"
                  className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Custom Solutions */}
            <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Custom Solutions</h2>
              </div>
              <div className="mt-4">
                <Image
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop"
                  width={400}
                  height={200}
                  alt="Custom Solutions"
                  className="rounded-lg object-cover w-full h-48"
                />
              </div>
              <div className="mt-4 flex-1">
                <p className="text-gray-500 dark:text-gray-400">
                  Tailored hosting solutions for specific academic needs. Custom development, integration, and
                  specialized academic software hosting.
                </p>
              </div>
              <div className="mt-6">
                <Link
                  href="/services/custom-solutions"
                  className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Need a Custom Solution?</h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our team of experts can help you find the perfect hosting solution for your academic institution
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-center rounded-md bg-white text-primary px-8 text-sm font-medium shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Contact Us
              </Link>
              <Link
                href="/pricing"
                className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

