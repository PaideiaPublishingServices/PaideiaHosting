import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

export const metadata = {
  title: "Contact Us - Paideia Hosting",
  description:
    "Get in touch with our team for inquiries about our academic hosting services, support, or custom solutions.",
}

export default function ContactPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Contact Us</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Have questions about our services? Our team is here to help you find the perfect hosting solution for
                your academic institution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter">Get in Touch</h2>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  We're here to answer any questions you have about our academic hosting services.
                </p>
              </div>

              <div className="grid gap-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-bold">Email Us</h3>
                    <p className="text-gray-500 dark:text-gray-400">For general inquiries:</p>
                    <a href="mailto:info@paideiahosting.net" className="text-primary hover:underline">
                      info@paideiahosting.net
                    </a>
                    <p className="text-gray-500 dark:text-gray-400 mt-2">For technical support:</p>
                    <a href="mailto:support@paideiahosting.net" className="text-primary hover:underline">
                      support@paideiahosting.net
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-bold">Call Us</h3>
                    <p className="text-gray-500 dark:text-gray-400">Monday to Friday, 9am to 6pm EST</p>
                    <a href="tel:+15551234567" className="text-primary hover:underline">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-bold">Visit Us</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      123 Academic Street
                      <br />
                      Research City, RC 10101
                      <br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-bold">Business Hours</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Monday - Friday: 9:00 AM - 6:00 PM EST
                      <br />
                      Saturday: 10:00 AM - 2:00 PM EST
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden border">
                <Image
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&h=300&fit=crop"
                  width={600}
                  height={300}
                  alt="Office Location Map"
                  className="w-full h-[300px] object-cover"
                />
              </div>
            </div>

            <div>
              <div className="rounded-lg border bg-background p-8">
                <div className="mb-6 flex items-center space-x-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  <h2 className="text-2xl font-bold">Send Us a Message</h2>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Department Contacts</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Connect with the right team for your specific needs
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border bg-background p-6">
              <h3 className="text-xl font-bold mb-2">Sales & New Accounts</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                For inquiries about our services, pricing, and setting up new accounts.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <a href="mailto:sales@paideiahosting.net" className="text-primary hover:underline">
                    sales@paideiahosting.net
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <a href="tel:+15551234568" className="text-primary hover:underline">
                    +1 (555) 123-4568
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-background p-6">
              <h3 className="text-xl font-bold mb-2">Technical Support</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                For assistance with existing services, technical issues, or account management.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <a href="mailto:support@paideiahosting.net" className="text-primary hover:underline">
                    support@paideiahosting.net
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <a href="tel:+15551234569" className="text-primary hover:underline">
                    +1 (555) 123-4569
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-background p-6">
              <h3 className="text-xl font-bold mb-2">Custom Solutions</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                For discussing tailored hosting solutions for your specific academic needs.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <a href="mailto:solutions@paideiahosting.net" className="text-primary hover:underline">
                    solutions@paideiahosting.net
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <a href="tel:+15551234570" className="text-primary hover:underline">
                    +1 (555) 123-4570
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Frequently Asked Questions</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Quick answers to common questions about contacting us
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">What is your typical response time?</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We aim to respond to all inquiries within 24 hours during business days. For urgent technical support,
                our response time is typically under 4 hours.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">Do you offer emergency support?</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Yes, we offer 24/7 emergency support for critical issues for our Professional and Enterprise plan
                customers.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">Can I schedule a consultation call?</h3>
              <p className="text-gray-500 dark:text-gray-400">
                You can request a consultation call through our contact form or by emailing sales@paideiahosting.net
                with your preferred date and time.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">How do I report a technical issue?</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Existing customers can report technical issues through our customer portal, by emailing
                support@paideiahosting.net, or by calling our technical support line.
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
                href="/services"
                className="inline-flex h-10 items-center justify-center rounded-md bg-white text-primary px-8 text-sm font-medium shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Explore Services
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

