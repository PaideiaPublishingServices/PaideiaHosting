import Link from "next/link"
import Image from "next/image"
import { Check, Shield, Clock, Database, Archive } from "lucide-react"
import { BackupPricingCalculator } from "@/components/backup-pricing-calculator"

export const metadata = {
  title: "AWS Backup Solutions - Paideia Hosting",
  description:
    "Professional backup and digital preservation solutions for academic institutions. Powered by AWS infrastructure with flexible retention policies.",
}

export default function BackupSolutionsPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  AWS Backup & Preservation Solutions
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Enterprise-grade backup and digital preservation for academic institutions. Secure, scalable, and compliant with institutional requirements.
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
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=400&fit=crop"
                width={500}
                height={400}
                alt="AWS Backup Solutions"
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Powered by AWS Infrastructure</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Enterprise-grade backup solutions built on Amazon Web Services
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center mb-6 mt-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>Hosted on</span>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/330px-Amazon_Web_Services_Logo.svg.png" alt="AWS" className="h-6" />
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-start space-y-2">
              <Shield className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">Enterprise Security</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Multi-layer security with encryption at rest and in transit
              </p>
            </div>
            <div className="flex flex-col items-start space-y-2">
              <Database className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">Intelligent Storage</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Automatic lifecycle management reduces costs over time
              </p>
            </div>
            <div className="flex flex-col items-start space-y-2">
              <Archive className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">Long-term Preservation</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Designed for archival storage from 1 to 10+ years
              </p>
            </div>
            <div className="flex flex-col items-start space-y-2">
              <Clock className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">Flexible Recovery</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Recovery times from minutes to hours based on your needs
              </p>
            </div>
            <div className="flex flex-col items-start space-y-2">
              <Check className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">Compliance Ready</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Immutability options for regulatory compliance
              </p>
            </div>
            <div className="flex flex-col items-start space-y-2">
              <Check className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-bold">Monitoring Included</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Automated monitoring with monthly reports
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Overview Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Two Plans for Different Needs</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Choose the solution that fits your institutional requirements
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            {/* Preservation Plus */}
            <div className="flex flex-col rounded-lg border-2 border-primary bg-background p-8 shadow-lg">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Preservation Plus</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Long-term digital preservation and archival storage
                </p>
              </div>
              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Archival Storage</p>
                    <p className="text-sm text-gray-500">AWS Deep Archive for maximum cost efficiency</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Flexible Capture Schedule</p>
                    <p className="text-sm text-gray-500">Monthly, quarterly, semi-annual, or annual backups</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Long-term Retention</p>
                    <p className="text-sm text-gray-500">1 to 10+ years retention policies</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Recovery Time</p>
                    <p className="text-sm text-gray-500">72 business hours standard recovery</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Ideal For</p>
                    <p className="text-sm text-gray-500">Doctoral theses, historical archives, institutional records</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t">
                <p className="text-sm text-gray-600">
                  <strong>Starting at $10/GB/year</strong> · Setup fee applies for volumes under 300 GB
                </p>
              </div>
            </div>

            {/* Active Guard */}
            <div className="flex flex-col rounded-lg border-2 border-blue-300 bg-background p-8 shadow-lg">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Active Guard</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Operational backup with rapid recovery
                </p>
              </div>
              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Intelligent Tiering</p>
                    <p className="text-sm text-gray-500">S3 Standard → Glacier IR → Deep Archive lifecycle</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Frequent Backups</p>
                    <p className="text-sm text-gray-500">Daily, twice-weekly, or weekly capture schedules</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Operational Retention</p>
                    <p className="text-sm text-gray-500">6 months to 2 years retention</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Fast Recovery</p>
                    <p className="text-sm text-gray-500">30 minutes to 2 hours for recent data</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Ideal For</p>
                    <p className="text-sm text-gray-500">OJS servers, DSpace repositories, production databases</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t">
                <p className="text-sm text-gray-600">
                  <strong>Starting at $0.46/GB/month</strong> · Setup fee applies for volumes under 300 GB
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Pricing Section */}
      <BackupPricingCalculator />

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Everything you need to know about our AWS backup solutions
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">What types of data can I backup?</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Any type of institutional data: research databases, OJS journals, DSpace repositories, Dataverse datasets, AtoM archives, and general server backups.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">How is data security handled?</h3>
              <p className="text-gray-500 dark:text-gray-400">
                All data is encrypted both in transit and at rest using AWS encryption standards. Optional Object Lock provides immutability for compliance requirements.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Can I change my retention period later?</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Yes, you can adjust retention policies at contract renewal. However, existing backups will follow their original retention schedule.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">What happens if I exceed my contracted storage?</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We'll notify you at 80% and 95% of your quota. You can upgrade your plan anytime, or we'll discuss options when you reach the limit.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">How do I restore my data?</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Simply contact our support team with your restoration request. We'll initiate the recovery process and provide a secure download link once ready.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Is there a setup fee?</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Setup fees apply only for volumes under 300 GB ($600 for Preservation Plus, $800 for Active Guard). Volumes of 300 GB or more include free setup.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Can I combine both plans?</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Yes! Many institutions use Active Guard for operational servers and Preservation Plus for long-term archival storage. Contact us for bundled pricing.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">What payment terms are available?</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We offer annual payment terms only. Multi-year contracts (2-10 years) receive discounted rates for Preservation Plus.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Do you offer geographic replication?</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Yes, as an add-on service. Your data can be replicated across multiple AWS regions for enhanced disaster recovery (+50% on base price).
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">What monitoring and reporting is included?</h3>
              <p className="text-gray-500 dark:text-gray-400">
                All plans include automated monitoring with monthly email reports showing storage usage, backup status, and quota utilization. Premium reporting available as an add-on.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Can you help us migrate existing backups?</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Yes, we offer migration services to transfer your existing backups to our AWS infrastructure. Contact our sales team for migration assistance and pricing.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">What SLAs do you provide?</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Preservation Plus: 72 business hours recovery. Active Guard: 30 minutes to 2 hours for recent data, 24-48 hours for archived data. SLA 99.9% uptime available as add-on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Optional Add-ons</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Enhance your backup solution with additional features
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">Object Lock (Immutability)</h3>
              <p className="text-2xl font-bold text-primary mb-2">+$300-360/year</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                WORM protection prevents deletion or modification for compliance requirements
              </p>
              <ul className="space-y-1 text-sm">
                <li>• Ransomware protection</li>
                <li>• Regulatory compliance</li>
                <li>• Audit-ready archives</li>
              </ul>
            </div>

            <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">Geographic Replication</h3>
              <p className="text-2xl font-bold text-primary mb-2">+50% on base</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Replicate your backups to a second AWS region for disaster recovery
              </p>
              <ul className="space-y-1 text-sm">
                <li>• Multi-region redundancy</li>
                <li>• Enhanced disaster recovery</li>
                <li>• Compliance requirements</li>
              </ul>
            </div>

            <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">Versioning</h3>
              <p className="text-2xl font-bold text-primary mb-2">+30% on base</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Keep multiple versions of each backup for point-in-time recovery
              </p>
              <ul className="space-y-1 text-sm">
                <li>• Multiple restore points</li>
                <li>• Accidental change protection</li>
                <li>• Granular recovery options</li>
              </ul>
            </div>

            <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">Premium Reporting</h3>
              <p className="text-2xl font-bold text-primary mb-2">+$300-500/year</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Detailed analytics, trend analysis, and executive reports
              </p>
              <ul className="space-y-1 text-sm">
                <li>• Weekly detailed reports</li>
                <li>• Trend analysis</li>
                <li>• Custom dashboards</li>
              </ul>
            </div>

            <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">24/7 Monitoring</h3>
              <p className="text-2xl font-bold text-primary mb-2">+$400-3,600/year</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Round-the-clock monitoring with proactive issue detection
              </p>
              <ul className="space-y-1 text-sm">
                <li>• Continuous monitoring</li>
                <li>• Immediate alerts</li>
                <li>• Priority support</li>
              </ul>
            </div>

            <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">Annual Audit</h3>
              <p className="text-2xl font-bold text-primary mb-2">+$600/year</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Comprehensive annual review with formal documentation
              </p>
              <ul className="space-y-1 text-sm">
                <li>• Full architecture review</li>
                <li>• Compliance verification</li>
                <li>• Executive report</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Secure Your Data?</h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join academic institutions worldwide trusting their data to our AWS-powered backup solutions
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-center rounded-md bg-white text-primary px-8 text-sm font-medium shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Request a Quote
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