import Link from "next/link"
import Image from "next/image"
import { Check, BookOpen } from "lucide-react"
import { ServicePricing } from "@/components/service-pricing"

export const metadata = {
  title: "OMP Hosting - Paideia Hosting",
  description: "Specialized hosting for Open Monograph Press (OMP). Ideal for academic book publishing and management.",
}

export default function OMPHostingPage() {
  const ompPlans = [
    {
      name: "Basic",
      description: "For small publishers just getting started",
      monthlyPrice: 39,
      features: [
        "1 OMP Installation",
        "10GB Storage",
        "Daily Backups",
        "Email Support"
      ]
    },
    {
      name: "Professional",
      description: "For established academic publishers",
      monthlyPrice: 89,
      popular: true,
      features: [
        "3 OMP Installations",
        "30GB Storage",
        "Daily Backups",
        "Priority Support",
        "Custom Domain"
      ]
    },
    {
      name: "Enterprise",
      description: "For institutions with multiple publications",
      monthlyPrice: 219,
      features: [
        "10 OMP Installations",
        "150GB Storage",
        "Daily Backups",
        "24/7 Phone Support",
        "Custom Domain",
        "Dedicated Resources"
      ],
      buttonText: "Contact Sales"
    }
  ]

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  OMP Hosting Solutions
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Specialized hosting for Open Monograph Press. Ideal for academic book publishing and management.
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
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=400&fit=crop"
                width={500}
                height={400}
                alt="OMP Hosting"
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">OMP Hosting Features</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Everything you need for your academic book publishing
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-start space-y-2">
              <BookOpen className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">OMP Version Support</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Support for the latest OMP versions with seamless upgrades
              </p>
            </div>
            <div className="flex flex-col items-start space-y-2">
              <Check className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">Optimized Performance</h3>
              <p className="text-gray-500 dark:text-gray-400">Servers configured specifically for OMP requirements</p>
            </div>
            <div className="flex flex-col items-start space-y-2">
              <Check className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">Daily Backups</h3>
              <p className="text-gray-500 dark:text-gray-400">Automatic daily backups with 30-day retention</p>
            </div>
            <div className="flex flex-col items-start space-y-2">
              <Check className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">Security Updates</h3>
              <p className="text-gray-500 dark:text-gray-400">Regular security patches and updates</p>
            </div>
            <div className="flex flex-col items-start space-y-2">
              <Check className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">Technical Support</h3>
              <p className="text-gray-500 dark:text-gray-400">24/7 technical support from OMP experts</p>
            </div>
            <div className="flex flex-col items-start space-y-2">
              <Check className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">Custom Domain</h3>
              <p className="text-gray-500 dark:text-gray-400">Use your own domain or subdomain</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <ServicePricing
        title="Simple, Transparent Pricing"
        subtitle="Choose the plan that fits your publishing needs"
        plans={ompPlans}
      />

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Everything you need to know about our OMP hosting services
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">What versions of OMP do you support?</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We support the latest stable versions of OMP and can help you migrate from older versions.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Can I migrate my existing OMP installation?</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Yes, we offer migration services to help you move your existing OMP installation to our hosting
                platform.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Do you offer SSL certificates?</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Yes, all our hosting plans include free SSL certificates to ensure your publishing platform is secure.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">How often do you update OMP?</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We apply security updates as soon as they're available. Major version upgrades are scheduled with your
                approval.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Can I use my own domain name?</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Yes, you can use your own domain or subdomain with our Professional and Enterprise plans.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">What kind of support do you offer?</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We offer email support for all plans, with priority support for Professional and 24/7 phone support for
                Enterprise customers.
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
                Join the growing community of academic publishers using Paideia Hosting
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

