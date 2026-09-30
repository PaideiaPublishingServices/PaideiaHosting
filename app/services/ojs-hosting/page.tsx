import Link from "next/link"
import Image from "next/image"
import { Check, BookOpen, ShieldCheck } from "lucide-react"
import { ServicePricing } from "@/components/service-pricing"

export const metadata = {
  title: "Managed OJS Hosting | Open Journal Systems on AWS | Paideia Hosting",
  description:
    "Managed hosting for Open Journal Systems (OJS 3.3–3.5 LTS) on AWS. Daily backups, WAF security, upgrades, and Crossref membership on Enterprise annual plans for Latin America and Spain.",
}

export default function OJSHostingPage() {
  const ojsPlans = [
    {
      name: "Basic",
      description: "For emerging journals",
      monthlyPrice: 42,
      monthlyUrl: "https://shop.paideiahosting.net/shop/ojs-basic-m-ojs-hosting-basic-monthly-146",
      annualUrl: "https://shop.paideiahosting.net/shop/ojs-basic-m-ojs-hosting-basic-monthly-146?plan_id=2",
      features: [
        "Single Journal",
        "10GB Storage",
        "Daily Backups | 5 days",
        "1 mail box",
        "SSL included",
        "Email support",
        "Free Installation"
      ],
      conditionalFeatures: [
        { monthly: "Migration services fee extra", annual: "Migration services included" }
      ]
    },
    {
      name: "Professional",
      description: "For established academic journals",
      monthlyPrice: 60,
      popular: true,
      monthlyUrl: "https://shop.paideiahosting.net/shop/ojs-pro-m-ojs-hosting-professional-monthly-147",
      annualUrl: "https://shop.paideiahosting.net/shop/ojs-pro-m-ojs-hosting-professional-monthly-147?plan_id=2",
      features: [
        "Multi-journal in 1 OJS Installations",
        "20GB Storage",
        "Daily Backups | 7 days",
        "5 mail box",
        "SSL included",
        "Priority email support",
        "Free Installation",
        "1 Upgrade per year"
      ],
      conditionalFeatures: [
        { monthly: "Migration services fee extra", annual: "Migration services included" }
      ],
      highlightedFeature: { text: "Crossref membership + Similarity Check available on request*", variant: "optional" as const }
    },
    {
      name: "Enterprise",
      description: "For institutions with multiple journals",
      monthlyPrice: 99,
      monthlyUrl: "https://shop.paideiahosting.net/shop/ojs-ent-m-ojs-hosting-enterprise-monthly-148",
      annualUrl: "https://shop.paideiahosting.net/shop/ojs-ent-m-ojs-hosting-enterprise-monthly-148?plan_id=2",
      features: [
        "Multi-journal in Multi-installations",
        "30GB Storage",
        "Daily Backups | 7 days",
        "Unlimited mailbox",
        "SSL included",
        "Priority email and phone support",
        "Free Installation",
        "1 Upgrade per year"
      ],
      conditionalFeatures: [
        { monthly: "Migration services fee extra", annual: "Migration services included" }
      ],
      annualOnlyFeatures: [
        "PrePrints server memberships (Annual only)"
      ],
      highlightedFeature: { text: "Crossref membership + Similarity Check included (annual plan)*" },
      buttonText: "Get Started"
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
                  OJS Hosting Solutions
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Specialized hosting for Open Journal Systems. Perfect for academic publishing and journal management.
                </p>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Trusted by 188+ academic institutions across Latin America and Spain
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
                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=500&h=400&fit=crop"
                width={500}
                height={400}
                alt="OJS Hosting"
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">OJS Hosting Features</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Everything you need for your academic journal publishing
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-start space-y-2">
              <BookOpen className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">OJS Version Support</h3>
              <p className="text-gray-500 dark:text-gray-400">Support for OJS 3.3, 3.4 and 3.5 LTS, with managed upgrades</p>
            </div>
            <div className="flex flex-col items-start space-y-2">
              <Check className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">Optimized Performance</h3>
              <p className="text-gray-500 dark:text-gray-400">Servers configured specifically for OJS requirements</p>
            </div>
            <div className="flex flex-col items-start space-y-2">
              <Check className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">Daily Backups</h3>
              <p className="text-gray-500 dark:text-gray-400">Automatic daily backups, with 5 to 7-day retention depending on plan</p>
            </div>
            <div className="flex flex-col items-start space-y-2">
              <Check className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">Security Updates</h3>
              <p className="text-gray-500 dark:text-gray-400">Regular security patches and updates</p>
            </div>
            <div className="flex flex-col items-start space-y-2">
              <Check className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">Technical Support</h3>
              <p className="text-gray-500 dark:text-gray-400">24/7 AI assistance via WhatsApp, plus OJS expert support during business hours</p>
            </div>
            <div className="flex flex-col items-start space-y-2">
              <Check className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">Custom Domain</h3>
              <p className="text-gray-500 dark:text-gray-400">Use your own domain or subdomain</p>
            </div>
            <div className="flex flex-col items-start space-y-2">
              <ShieldCheck className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">Web Application Firewall</h3>
              <p className="text-gray-500 dark:text-gray-400">
                ModSecurity with OWASP Core Rule Set and Cloudflare protection against malicious uploads, spam injection
                and bot attacks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <ServicePricing
        title="Simple, Transparent Pricing"
        subtitle="Choose the plan that fits your journal's needs"
        plans={ojsPlans}
        footnote="*For customers in Latin America and Spain. Included in Enterprise annual plans. Available on request for Professional plans, subject to availability; conditions are confirmed at the time of contracting. Does not cover DOI registration or content deposit fees. Customers in other regions receive Crossref metadata support and must hold their own Crossref membership."
      />

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Everything you need to know about our OJS hosting services
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">What versions of OJS do you support?</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We support OJS 3.3, 3.4 and 3.5 (LTS since June 2026). We can also help you migrate from earlier
                versions, including OJS 2.x.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Can I migrate my existing OJS installation?</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Yes, we offer migration services to help you move your existing OJS installation to our hosting
                platform.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Do you offer SSL certificates?</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Yes, all our hosting plans include free SSL certificates to ensure your journal is secure.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">How often do you update OJS?</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We apply security updates as soon as they're available. Major version upgrades are scheduled with your
                approval.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Can I use my own domain name?</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Yes, all plans let you use your own domain or subdomain.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">What kind of support do you offer?</h3>
              <p className="text-gray-500 dark:text-gray-400">
                All plans include 24/7 AI assistance via WhatsApp, plus OJS expert support during business hours: email
                support on Basic, priority email support on Professional, and priority email and phone support on
                Enterprise.
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
                Join the growing community of academic journals using Paideia Hosting
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

