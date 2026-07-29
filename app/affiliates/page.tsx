import Link from "next/link"
import Image from "next/image"
import {
  Mail,
  Tag,
  Percent,
  Users,
  Globe,
  CheckCircle2,
  Wallet,
  UserPlus,
  Banknote,
  Server,
  ShieldCheck,
  GraduationCap,
  LifeBuoy,
  ArrowRight,
} from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata = {
  title: "Affiliate Program - Paideia Hosting",
  description:
    "Recommend Paideia Hosting to your academic network. Your referrals get 5% off their first payment and you earn a 5% commission on the plan's list price.",
}

const MAILTO_SUBJECT = "Affiliate%20Program%20-%20Application"
const STUDIO_MAILTO = `mailto:contact@paideiastudio.net?subject=${MAILTO_SUBJECT}`
const HOSTING_MAILTO = `mailto:contact@paideiahosting.net?subject=${MAILTO_SUBJECT}`

const steps = [
  {
    icon: Mail,
    title: "Write to us",
    body: "Send an email to contact@paideiastudio.net or contact@paideiahosting.net telling us how you plan to recommend Paideia Hosting — your journal network, your institution, your colleagues.",
  },
  {
    icon: Tag,
    title: "Get your personal code",
    body: "We create a discount code that belongs to you and share it with you by email, along with anything you need to explain our services accurately.",
  },
  {
    icon: Percent,
    title: "Share it and earn",
    body: "Everyone who buys with your code gets 5% off their first payment, and you receive a 5% commission calculated on the plan's list price — the discount they get does not come out of what you earn.",
  },
]

const conditions = [
  {
    icon: Wallet,
    title: "Commission",
    body: "5% of the list price of the plan the referred customer signs up for, monthly or annual. It is calculated on the published price, not on the discounted amount charged, and it is a one-time commission — it does not repeat on renewals.",
  },
  {
    icon: Percent,
    title: "Discount for your referral",
    body: "5% off their first payment, applied automatically when they enter your code at checkout. It is deducted from their invoice, never from your commission.",
  },
  {
    icon: UserPlus,
    title: "Sign-up through our team",
    body: "You write to us, we register you as an affiliate in our system and issue your code. From then on, every purchase made with it is recorded against your account.",
  },
  {
    icon: Globe,
    title: "No website required",
    body: "You do not need a site of your own. A channel to share the code is enough — email, social media, a newsletter, or word of mouth among colleagues.",
  },
  {
    icon: CheckCircle2,
    title: "No minimum sales",
    body: "There is no sales threshold to join and no quota to keep. One referral is a valid referral.",
  },
  {
    icon: Banknote,
    title: "Paid in US dollars",
    body: "Commissions are settled in USD, so you need to be able to receive international payments through PayPal, Stripe, or an international bank transfer.",
  },
]

const advantages = [
  {
    icon: GraduationCap,
    title: "A name your network already trusts",
    body: "You are not recommending generic hosting. Paideia Hosting works exclusively with academic institutions, and that focus is what makes the recommendation land with an editorial committee or a library director.",
  },
  {
    icon: Server,
    title: "Infrastructure built for the platforms they use",
    body: "OJS, OMP, DSpace, AtoM, Dataverse and institutional VPS, tuned by people who run these systems every day. Your referral gets an environment that fits their workflow instead of one they have to fight.",
  },
  {
    icon: ShieldCheck,
    title: "Your reputation stays intact",
    body: "The people you refer are colleagues, not leads. We treat them as such: clear pricing, migrations handled by our team, and no surprises after the first invoice.",
  },
  {
    icon: LifeBuoy,
    title: "Support that speaks your field",
    body: "Editors and journal managers talk to specialists in scholarly publishing, in Spanish and English, without having to explain what a DOI or a peer-review workflow is.",
  },
]

const faqs = [
  {
    question: "What is the Paideia Hosting affiliate program?",
    answer:
      "It is a way for people who already know our work — editors, librarians, journal managers, researchers, consultants — to recommend our hosting and receive a commission for it. You get a personal discount code: whoever uses it saves 5% on their first payment, and you earn 5% of the plan's list price. Both percentages are calculated on the same published price, so the discount your referral receives never reduces your commission. It is deliberately simple: no tiers, no points, no complicated rules.",
  },
  {
    question: "How do I sign up?",
    answer:
      "By email. Write to contact@paideiastudio.net or contact@paideiahosting.net telling us who you are and how you plan to recommend Paideia Hosting. Our team reviews your message, registers you as an affiliate in our system, and sends you your personal discount code along with anything you need to present our services accurately.",
  },
  {
    question: "How much do I earn per sale?",
    answer:
      "5% of the list price of the plan your referral signs up for, for monthly and annual plans alike. The commission is calculated on the published price rather than on the discounted amount they actually pay, so applying your code costs you nothing. Since annual plans are paid up front, they produce a larger commission than monthly ones. It is a single payment per referred customer: we do not pay commission on subsequent renewals.",
  },
  {
    question: "Do I need a website?",
    answer:
      "No. You only need some way to pass your code along to the people you are recommending us to. That can be an email to a colleague, a post on your professional networks, a mention in an institutional newsletter, or a conversation at a conference.",
  },
  {
    question: "When and how do I get paid?",
    answer:
      "Once the referred customer's first payment is confirmed, we contact you to settle the commission. Payments are made in US dollars through PayPal, Stripe, or international bank transfer, so being able to receive international payments by one of those methods is a condition for joining the program. Any transfer fees charged by the chosen method are deducted from the amount received.",
  },
]

export default function AffiliatesPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border bg-background px-4 py-1.5 text-sm text-gray-500 shadow-sm dark:text-gray-400">
              <Users className="h-4 w-4 text-primary" />
              Affiliate Program
            </div>
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none max-w-[900px]">
                Earn by recommending hosting built for academic publishing
              </h1>
              <p className="mx-auto max-w-[750px] text-gray-500 md:text-xl dark:text-gray-400">
                If you already recommend Paideia Hosting to journals, publishers, libraries, or research groups, this
                program lets that recommendation work for both sides: your referral saves 5% on their first payment, and
                you earn a 5% commission on the plan's full list price.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <a
                href={STUDIO_MAILTO}
                className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                contact@paideiastudio.net
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href={HOSTING_MAILTO}
                className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring dark:hover:bg-gray-800"
              >
                contact@paideiahosting.net
              </a>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Write to either address to request your affiliate sign-up. No website and no minimum sales required.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">How It Works</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Three steps, all of them handled by email with our team
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="flex flex-col items-start space-y-3 rounded-lg border bg-background p-6 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {index + 1}
                  </span>
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="text-gray-500 dark:text-gray-400">{step.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-2 text-center">
            <p className="text-gray-500 dark:text-gray-400">
              Your code works the same way for a single journal or for an institution hosting several platforms.
            </p>
            <a href={STUDIO_MAILTO} className="text-primary hover:underline inline-flex items-center font-medium">
              Request your affiliate code
              <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Why Partner With Us Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_500px] lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Why Recommend Paideia Hosting</h2>
                <p className="text-gray-500 md:text-xl dark:text-gray-400">
                  A recommendation only pays off if the service holds up. Ours is built for the institutions you already
                  work with.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {advantages.map((advantage) => (
                  <div key={advantage.title} className="flex flex-col items-start space-y-2">
                    <advantage.icon className="h-8 w-8 text-primary" />
                    <h3 className="text-lg font-bold">{advantage.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{advantage.body}</p>
                  </div>
                ))}
              </div>

              <a href={STUDIO_MAILTO} className="text-primary hover:underline inline-flex items-center font-medium">
                Join the affiliate program
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>

            <div className="flex items-center justify-center">
              <Image
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1000&h=800&fit=crop"
                width={500}
                height={400}
                alt="A researcher working on a laptop"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Program Terms Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Program Terms</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Everything the program includes, and everything it does not — stated plainly
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {conditions.map((condition) => (
              <div
                key={condition.title}
                className="flex flex-col items-start space-y-2 rounded-lg border bg-background p-6 shadow-sm"
              >
                <condition.icon className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">{condition.title}</h3>
                <p className="text-gray-500 dark:text-gray-400">{condition.body}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Frequently Asked Questions</h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                What people usually ask us before joining
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-[800px]">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-base font-bold">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-500 dark:text-gray-400">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Request Your Affiliate Sign-Up</h2>
              <p className="mx-auto max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                These two addresses are the only channels to join the program. Write to either one — they both reach our
                team.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <a
                href={STUDIO_MAILTO}
                className="inline-flex h-11 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                <Mail className="mr-2 h-4 w-4" />
                contact@paideiastudio.net
              </a>
              <a
                href={HOSTING_MAILTO}
                className="inline-flex h-11 items-center justify-center rounded-md border border-white bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                <Mail className="mr-2 h-4 w-4" />
                contact@paideiahosting.net
              </a>
            </div>
            <p className="max-w-[700px] text-sm opacity-80">
              Not sure our hosting fits the institution you have in mind?{" "}
              <Link href="/services" className="underline underline-offset-4">
                Review our services
              </Link>{" "}
              or{" "}
              <Link href="/pricing" className="underline underline-offset-4">
                check the pricing
              </Link>{" "}
              before you recommend us.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
