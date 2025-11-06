import Link from "next/link"
import Image from "next/image"
import { Check, Server, Cpu } from "lucide-react"
import { VPSPricing } from "./vps-pricing"

export const metadata = {
  title: "VPS for Institutions - Paideia Hosting",
  description:
    "Customizable virtual private servers for educational institutions. Reliable, secure, and optimized for academic needs.",
}

export default function VPSForInstitutionsPage() {

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  VPS Solutions for Institutions
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Customizable virtual private servers designed specifically for educational institutions. Reliable,
                  secure, and optimized for academic needs.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="#pricing"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  View Pricing
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
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=400&fit=crop"
                width={500}
                height={400}
                alt="VPS for Institutions"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">VPS Features for Institutions</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Powerful virtual servers tailored for academic and research needs
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-start space-y-2">
              <Server className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">High Performance</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Powerful servers with dedicated resources for optimal performance
              </p>
            </div>
            <div className="flex flex-col items-start space-y-2">
              <Cpu className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">Scalable Resources</h3>
              <p className="text-gray-500 dark:text-gray-400">Easily scale CPU, RAM, and storage as your needs grow</p>
            </div>
            <div className="flex flex-col items-start space-y-2">
              <Check className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">Secure Environment</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Enhanced security measures for academic data protection
              </p>
            </div>
            <div className="flex flex-col items-start space-y-2">
              <Check className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">Managed Services</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Optional management services for maintenance and updates
              </p>
            </div>
            <div className="flex flex-col items-start space-y-2">
              <Check className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">Expert Support</h3>
              <p className="text-gray-500 dark:text-gray-400">
                24/7 technical support from academic hosting specialists
              </p>
            </div>
            <div className="flex flex-col items-start space-y-2">
              <Check className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">Backup Solutions</h3>
              <p className="text-gray-500 dark:text-gray-400">Automated backup systems with easy restoration options</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <VPSPricing />

      {/* Use Cases Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Academic Use Cases</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                How educational institutions are using our VPS solutions
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2">
            <div className="flex flex-col space-y-3">
              <h3 className="text-xl font-bold">Research Computing</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Dedicated VPS environments for computational research, data analysis, and simulation workloads.
              </p>
            </div>
            <div className="flex flex-col space-y-3">
              <h3 className="text-xl font-bold">Web Applications</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Hosting for institutional websites, learning management systems, and custom academic applications.
              </p>
            </div>
            <div className="flex flex-col space-y-3">
              <h3 className="text-xl font-bold">Development Environments</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Secure environments for student programming projects, software development, and testing.
              </p>
            </div>
            <div className="flex flex-col space-y-3">
              <h3 className="text-xl font-bold">Database Hosting</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Optimized servers for research databases, institutional repositories, and data collections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Everything you need to know about our VPS solutions for institutions
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">What operating systems do you support?</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We support a wide range of Linux distributions (Ubuntu, CentOS, Debian) and Windows Server options to
                meet your specific requirements.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Can we get custom configurations?</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Yes, we offer custom VPS configurations tailored to your specific academic and research needs. Contact
                our sales team for details.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">How is data security handled?</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We implement multiple security layers including firewalls, intrusion detection, regular security
                patches, and encrypted storage options.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Do you offer managed services?</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Yes, we offer optional managed services including system updates, security monitoring, performance
                optimization, and technical support.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Can we upgrade our plan as we grow?</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Absolutely. Our VPS solutions are designed to scale with your needs. You can easily upgrade CPU, RAM,
                storage, and bandwidth as required.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Are there educational discounts available?</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Yes, we offer special pricing for educational institutions. Contact our sales team to learn about our
                academic discount program.
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Get Started?</h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join the growing community of educational institutions using Paideia Hosting VPS solutions
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
                href="/services"
                className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Explore Other Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

