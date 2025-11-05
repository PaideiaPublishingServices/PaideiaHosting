import Link from "next/link"
import { Check, HelpCircle } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PricingClient } from "./pricing-client"

export const metadata = {
  title: "Pricing - Paideia Hosting",
  description:
    "Transparent pricing plans for our academic hosting services. Choose the plan that fits your institution's needs.",
}

export default function PricingPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Simple, Transparent Pricing
              </h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Choose the plan that fits your academic institution's needs. No hidden fees, just straightforward
                pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tabs Section */}
      <PricingClient />

      {/* Plan Comparison */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Plan Comparison</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Compare our plans to find the right fit for your institution
              </p>
            </div>
          </div>

          <Tabs defaultValue="ojs-omp" className="w-full max-w-6xl mx-auto">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="ojs-omp">OJS & OMP</TabsTrigger>
                <TabsTrigger value="repository-atom">Repository & AtoM</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="ojs-omp" className="space-y-4">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="p-4 text-left font-medium">Feature</th>
                      <th className="p-4 text-center font-medium">Basic</th>
                      <th className="p-4 text-center font-medium">Professional</th>
                      <th className="p-4 text-center font-medium">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Price (Monthly)</td>
                      <td className="p-4 text-center">$42</td>
                      <td className="p-4 text-center">$79</td>
                      <td className="p-4 text-center">$99</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Storage</td>
                      <td className="p-4 text-center">10GB</td>
                      <td className="p-4 text-center">20GB</td>
                      <td className="p-4 text-center">30GB</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Installations</td>
                      <td className="p-4 text-center">Single Journal/Press</td>
                      <td className="p-4 text-center">Multi in 1 Installation</td>
                      <td className="p-4 text-center">Multi-installations</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Backups</td>
                      <td className="p-4 text-center">Daily | 5 days</td>
                      <td className="p-4 text-center">Daily | 7 days</td>
                      <td className="p-4 text-center">Daily | 15 days</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Email Support</td>
                      <td className="p-4 text-center">
                        <Check className="h-5 w-5 text-primary mx-auto" />
                      </td>
                      <td className="p-4 text-center">
                        <Check className="h-5 w-5 text-primary mx-auto" />
                      </td>
                      <td className="p-4 text-center">
                        <Check className="h-5 w-5 text-primary mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Priority Support</td>
                      <td className="p-4 text-center">-</td>
                      <td className="p-4 text-center">
                        <Check className="h-5 w-5 text-primary mx-auto" />
                      </td>
                      <td className="p-4 text-center">
                        <Check className="h-5 w-5 text-primary mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Phone Support</td>
                      <td className="p-4 text-center">-</td>
                      <td className="p-4 text-center">-</td>
                      <td className="p-4 text-center">
                        <Check className="h-5 w-5 text-primary mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">SSL Certificate</td>
                      <td className="p-4 text-center">
                        <Check className="h-5 w-5 text-primary mx-auto" />
                      </td>
                      <td className="p-4 text-center">
                        <Check className="h-5 w-5 text-primary mx-auto" />
                      </td>
                      <td className="p-4 text-center">
                        <Check className="h-5 w-5 text-primary mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Migration Services (Annual)</td>
                      <td className="p-4 text-center">
                        <Check className="h-5 w-5 text-green-600 mx-auto" />
                      </td>
                      <td className="p-4 text-center">
                        <Check className="h-5 w-5 text-green-600 mx-auto" />
                      </td>
                      <td className="p-4 text-center">
                        <Check className="h-5 w-5 text-green-600 mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Crossref Membership (Annual)</td>
                      <td className="p-4 text-center">-</td>
                      <td className="p-4 text-center">-</td>
                      <td className="p-4 text-center">
                        <Check className="h-5 w-5 text-green-600 mx-auto" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabsContent>

            <TabsContent value="repository-atom" className="space-y-4">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="p-4 text-left font-medium">Feature</th>
                      <th className="p-4 text-center font-medium">Professional</th>
                      <th className="p-4 text-center font-medium">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Price (Monthly)</td>
                      <td className="p-4 text-center">$170</td>
                      <td className="p-4 text-center">$280</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Storage</td>
                      <td className="p-4 text-center">50GB</td>
                      <td className="p-4 text-center">100GB</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Installation</td>
                      <td className="p-4 text-center">Repository/AtoM</td>
                      <td className="p-4 text-center">Repository/AtoM</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Backups</td>
                      <td className="p-4 text-center">Daily | 7 days</td>
                      <td className="p-4 text-center">Daily | 7 days</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Email Support</td>
                      <td className="p-4 text-center">
                        <Check className="h-5 w-5 text-primary mx-auto" />
                      </td>
                      <td className="p-4 text-center">
                        <Check className="h-5 w-5 text-primary mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Priority Support</td>
                      <td className="p-4 text-center">-</td>
                      <td className="p-4 text-center">
                        <Check className="h-5 w-5 text-primary mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">SSL Certificate</td>
                      <td className="p-4 text-center">
                        <Check className="h-5 w-5 text-primary mx-auto" />
                      </td>
                      <td className="p-4 text-center">
                        <Check className="h-5 w-5 text-primary mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Mail Box</td>
                      <td className="p-4 text-center">-</td>
                      <td className="p-4 text-center">
                        <Check className="h-5 w-5 text-primary mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">S3 Configuration</td>
                      <td className="p-4 text-center">-</td>
                      <td className="p-4 text-center">
                        <Check className="h-5 w-5 text-primary mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Installation (Annual)</td>
                      <td className="p-4 text-center">
                        <Check className="h-5 w-5 text-green-600 mx-auto" />
                      </td>
                      <td className="p-4 text-center">
                        <Check className="h-5 w-5 text-primary mx-auto" />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Migration Services (Annual)</td>
                      <td className="p-4 text-center">
                        <Check className="h-5 w-5 text-green-600 mx-auto" />
                      </td>
                      <td className="p-4 text-center">
                        <Check className="h-5 w-5 text-green-600 mx-auto" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Frequently Asked Questions</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Common questions about our pricing and plans
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Can I upgrade my plan later?</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Yes, you can upgrade your plan at any time. The price difference will be prorated for the remainder of
                your billing cycle.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">Do you offer discounts for educational institutions?</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Yes, we offer special pricing for educational institutions. Contact our sales team to learn about our
                academic discount program.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">What payment methods do you accept?</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We accept major credit cards, PayPal, and bank transfers. For educational institutions, we also offer
                purchase order and invoice payment options.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">Is there a setup fee?</h3>
              <p className="text-gray-500 dark:text-gray-400">
                No, there are no setup fees for our standard plans. Custom solutions may include a one-time setup fee
                depending on the complexity of the implementation.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">Can I cancel my subscription at any time?</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Yes, you can cancel your subscription at any time. We offer a 30-day money-back guarantee for all our
                plans.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">Do you offer a free trial?</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Yes, we offer a 14-day free trial for all our standard plans. Contact us to set up your trial
                environment.
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
                Join the growing community of academic institutions using Paideia Hosting
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
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}