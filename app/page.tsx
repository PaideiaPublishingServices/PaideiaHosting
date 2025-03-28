import Link from "next/link"
import Image from "next/image"
import { Check, Server, Database, BookOpen, Code } from "lucide-react"
import { DomainSearch } from "@/components/domain-search"
import { ServiceCard } from "@/components/service-card"
import { TestimonialCard } from "@/components/testimonial-card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-blue-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Cloud for Science, Solutions for Knowledge
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Specialized hosting for academic applications. Reliable, secure, and optimized for research and
                    educational institutions.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#services"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    Explore Services
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    Contact Sales
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/banner-home.jpg?height=400&width=500"
                  width={500}
                  height={400}
                  alt="Paideia Hosting"
                  className="rounded-lg object-cover"
                />
                 <p className="text-xs text-gray-500 mt-1 italic">Photo by NASA on Unsplash</p>
              </div>
            </div>
          </div>
        </section>

        {/* Domain Search Section */}
        <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Find Your Perfect Domain</h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Start your academic project with the right domain name
              </p>
              <DomainSearch />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Specialized Academic Hosting</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Tailored solutions for research and educational institutions
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <ServiceCard
                title="OJS Hosting"
                description="Optimized hosting for Open Journal Systems. Perfect for academic publishing."
                icon={<BookOpen className="h-10 w-10 text-primary" />}
                link="/services/ojs-hosting"
              />
              <ServiceCard
                title="OMP Hosting"
                description="Specialized hosting for Open Monograph Press. Ideal for book publishing."
                icon={<BookOpen className="h-10 w-10 text-primary" />}
                link="/services/omp-hosting"
              />
              <ServiceCard
                title="Dataverse Hosting"
                description="Secure and reliable hosting for research data repositories."
                icon={<Database className="h-10 w-10 text-primary" />}
                link="/services/dataverse-hosting"
              />
              <ServiceCard
                title="AtoM Hosting"
                description="Professional hosting for Access to Memory archival software."
                icon={<Server className="h-10 w-10 text-primary" />}
                link="/services/atom-hosting"
              />
              <ServiceCard
                title="VPS for Institutions"
                description="Customizable virtual private servers for educational institutions."
                icon={<Server className="h-10 w-10 text-primary" />}
                link="/services/vps-for-institutions"
              />
              <ServiceCard
                title="Custom Solutions"
                description="Tailored hosting solutions for specific academic needs."
                icon={<Code className="h-10 w-10 text-primary" />}
                link="/services/custom-solutions"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Why Choose Paideia Hosting?
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  We understand the unique needs of academic institutions and provide specialized solutions to meet
                  them.
                </p>
                <ul className="grid gap-4">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Specialized in academic applications</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>24/7 technical support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Regular backups and security updates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Optimized for academic workflows</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Scalable solutions for growing institutions</span>
                  </li>
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="/about"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  width={500}
                  height={400}
                  alt="Paideia Hosting Features"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Trusted by Academic Institutions</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  See what our clients say about our services
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <TestimonialCard
                quote="Paideia Hosting has transformed how we manage our academic journals. Their OJS hosting is reliable and their support team is exceptional."
                author="Dr. Sarah Johnson"
                institution="University Research Department"
              />
              <TestimonialCard
                quote="The specialized Dataverse hosting has made our research data management so much easier. Highly recommended for any research institution."
                author="Prof. Michael Chen"
                institution="Institute of Data Science"
              />
              <TestimonialCard
                quote="We've been using their VPS solutions for our institution for over 2 years now. The performance and reliability are outstanding."
                author="Dr. Emily Rodriguez"
                institution="National Research Center"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Get Started?</h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join the growing community of academic institutions trusting Paideia Hosting
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
    </div>
  )
}

