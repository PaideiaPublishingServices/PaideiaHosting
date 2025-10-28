import Link from "next/link"
import Image from "next/image"
import { Check, Code, Settings, Lightbulb } from "lucide-react"

export const metadata = {
  title: "Custom Solutions - Paideia Hosting",
  description:
    "Tailored hosting solutions for specific academic needs. Custom development, integration, and specialized academic software hosting.",
}

export default function CustomSolutionsPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Custom Hosting Solutions
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Tailored hosting solutions for specific academic needs. Custom development, integration, and
                  specialized academic software hosting.
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
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=400&fit=crop"
                width={500}
                height={400}
                alt="Custom Solutions"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Custom Services</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Specialized solutions tailored to your academic institution's unique requirements
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-start space-y-2">
              <Code className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">Custom Development</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Bespoke software development for academic and research applications
              </p>
            </div>
            <div className="flex flex-col items-start space-y-2">
              <Settings className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">System Integration</h3>
              <p className="text-gray-500 dark:text-gray-400">Seamless integration of academic systems and databases</p>
            </div>
            <div className="flex flex-col items-start space-y-2">
              <Lightbulb className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">Specialized Software Hosting</h3>
              <p className="text-gray-500 dark:text-gray-400">Hosting for unique academic and research applications</p>
            </div>
            <div className="flex flex-col items-start space-y-2">
              <Check className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">Migration Services</h3>
              <p className="text-gray-500 dark:text-gray-400">Expert migration of existing academic systems</p>
            </div>
            <div className="flex flex-col items-start space-y-2">
              <Check className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">Consulting Services</h3>
              <p className="text-gray-500 dark:text-gray-400">Strategic guidance for academic IT infrastructure</p>
            </div>
            <div className="flex flex-col items-start space-y-2">
              <Check className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">Managed Solutions</h3>
              <p className="text-gray-500 dark:text-gray-400">Fully managed custom hosting environments</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Approach</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                How we develop custom solutions for your academic institution
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2">
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  1
                </div>
                <h3 className="text-xl font-bold">Discovery & Analysis</h3>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                We begin by understanding your specific needs, challenges, and goals through in-depth consultation.
              </p>
            </div>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  2
                </div>
                <h3 className="text-xl font-bold">Solution Design</h3>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                Our experts design a tailored solution that addresses your unique requirements and academic context.
              </p>
            </div>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  3
                </div>
                <h3 className="text-xl font-bold">Implementation</h3>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                We develop and deploy your custom solution with minimal disruption to your academic operations.
              </p>
            </div>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  4
                </div>
                <h3 className="text-xl font-bold">Ongoing Support</h3>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                We provide continuous support, maintenance, and optimization to ensure your solution evolves with your
                needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Success Stories</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                How our custom solutions have helped academic institutions
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2">
            <div className="flex flex-col space-y-3 rounded-lg border bg-background p-6 shadow-sm">
              <h3 className="text-xl font-bold">National Research University</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Developed a custom research data management platform that integrated with their existing systems,
                improving data accessibility and collaboration across departments.
              </p>
            </div>
            <div className="flex flex-col space-y-3 rounded-lg border bg-background p-6 shadow-sm">
              <h3 className="text-xl font-bold">Medical School Consortium</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Created a specialized hosting environment for sensitive medical research data with enhanced security
                protocols and compliance with healthcare regulations.
              </p>
            </div>
            <div className="flex flex-col space-y-3 rounded-lg border bg-background p-6 shadow-sm">
              <h3 className="text-xl font-bold">Liberal Arts College</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Implemented a custom digital humanities platform that allowed for innovative teaching methods and
                student research projects.
              </p>
            </div>
            <div className="flex flex-col space-y-3 rounded-lg border bg-background p-6 shadow-sm">
              <h3 className="text-xl font-bold">University Library System</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Developed an integrated digital repository solution that connected multiple campus libraries and
                archives into a unified search and access system.
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
                Common questions about our custom solutions
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">How long does it take to develop a custom solution?</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Timeline varies based on complexity, but typically ranges from 4-12 weeks. We provide detailed project
                timelines during the consultation phase.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">What is the typical investment for a custom solution?</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Pricing depends on your specific requirements. We offer flexible pricing models including one-time
                development costs and ongoing hosting/maintenance fees.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Can you integrate with our existing systems?</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Yes, we specialize in integrating with existing academic systems including LMS platforms, library
                systems, research databases, and administrative software.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Who owns the intellectual property of custom solutions?</h3>
              <p className="text-gray-500 dark:text-gray-400">
                In most cases, you retain full ownership of custom-developed solutions. We provide clear IP terms in all
                our agreements.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Do you provide training for our staff?</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Yes, we offer comprehensive training programs to ensure your team can effectively use and manage your
                custom solution.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">What ongoing support do you provide?</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We offer various support tiers including basic maintenance, 24/7 technical support, regular updates, and
                continuous improvement services.
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Ready to Discuss Your Custom Solution?
              </h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our team of academic hosting experts is ready to help you develop the perfect solution for your
                institution
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-center rounded-md bg-white text-primary px-8 text-sm font-medium shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Schedule a Consultation
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

