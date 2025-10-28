import Link from "next/link"
import Image from "next/image"
import { Check, Database } from "lucide-react"
import { ServicePricing } from "@/components/service-pricing"

export const metadata = {
  title: "Repository Hosting - Paideia Hosting",
  description:
    "Secure and reliable hosting for research data repositories including Dataverse and DSpace. Perfect for academic institutions and research centers.",
}

export default function RepositoryHostingPage() {
  const repositoryPlans = [
    {
      name: "Basic",
      description: "For small research groups",
      monthlyPrice: 49,
      features: [
        "1 Repository Installation (Dataverse or DSpace)",
        "50GB Storage",
        "Daily Backups",
        "Email Support"
      ]
    },
    {
      name: "Professional",
      description: "For research departments",
      monthlyPrice: 129,
      popular: true,
      features: [
        "1 Repository Installation (Dataverse or DSpace)",
        "500GB Storage",
        "Daily Backups",
        "Priority Support",
        "Custom Domain"
      ]
    },
    {
      name: "Enterprise",
      description: "For institutions and large research centers",
      monthlyPrice: 299,
      features: [
        "Multiple Repository Installations",
        "2TB+ Storage",
        "Daily Backups",
        "24/7 Phone Support",
        "Custom Domain & Branding",
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
                  Repository Hosting Solutions
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Secure and reliable hosting for research data repositories including Dataverse and DSpace. Perfect for academic institutions and research centers.
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
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=400&fit=crop"
                width={500}
                height={400}
                alt="Dataverse Hosting"
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Repository Hosting Features</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Everything you need for your research data repository
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-start space-y-2">
              <Database className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">Dataverse & DSpace Support</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Support for the latest Dataverse and DSpace versions with seamless upgrades
              </p>
            </div>
            <div className="flex flex-col items-start space-y-2">
              <Check className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">High Performance</h3>
              <p className="text-gray-500 dark:text-gray-400">Optimized servers for handling large datasets</p>
            </div>
            <div className="flex flex-col items-start space-y-2">
              <Check className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">Secure Storage</h3>
              <p className="text-gray-500 dark:text-gray-400">Encrypted storage with regular backups</p>
            </div>
            <div className="flex flex-col items-start space-y-2">
              <Check className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">DOI Integration</h3>
              <p className="text-gray-500 dark:text-gray-400">Built-in support for DOI assignment</p>
            </div>
            <div className="flex flex-col items-start space-y-2">
              <Check className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">Expert Support</h3>
              <p className="text-gray-500 dark:text-gray-400">24/7 technical support from repository specialists</p>
            </div>
            <div className="flex flex-col items-start space-y-2">
              <Check className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">Custom Branding</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Customize the interface with your institution's branding
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <ServicePricing
        title="Simple, Transparent Pricing"
        subtitle="Choose the plan that fits your repository needs"
        plans={repositoryPlans}
      />

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Everything you need to know about our repository hosting services
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">What repository platforms do you support?</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We support the latest stable versions of Dataverse and DSpace, and can help you migrate from older versions or other platforms.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Can I migrate my existing repository?</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Yes, we offer migration services to help you move your existing Dataverse, DSpace, or other repository to our hosting platform.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">How is data security handled?</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We implement multiple layers of security including encrypted storage, regular security audits, and
                compliance with academic data protection standards.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Do you support DOI integration?</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Yes, we provide full support for DOI integration with services like DataCite to ensure your datasets are
                properly cited.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Can I customize the repository interface?</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Yes, our Professional and Enterprise plans allow for custom branding and interface modifications to match your institution's identity for both Dataverse and DSpace.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">What happens if I exceed my storage limit?</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We'll notify you when you approach your storage limit, and you can easily upgrade your plan or add
                additional storage as needed.
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
                Join the growing community of research institutions using Paideia Hosting for their data repositories
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

