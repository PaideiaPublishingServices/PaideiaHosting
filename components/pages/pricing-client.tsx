"use client"

import { useState } from "react"
import Link from "next/link"
import { Check } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PricingToggle } from "@/components/pricing-toggle"
import { HighlightedFeatureItem } from "@/components/service-pricing"
import type { Locale } from "@/lib/i18n/config"
import type { Messages } from "@/lib/i18n/messages"
import { localizedHref } from "@/lib/i18n/routes"

type PlanItem =
  | { kind: "check"; text: string }
  | { kind: "toggle"; included: string; extra: string }
  | { kind: "highlight"; text: string; variant?: "optional" }
  | { kind: "annualOnly"; text: string }

interface Plan {
  key: string
  name: string
  description: string
  price: number
  popular?: boolean
  items: PlanItem[]
  note?: string
  monthlyUrl: string
  annualUrl: string
}

interface PricingClientProps {
  locale: Locale
  t: Messages["pricing"]["tabs"]
  labels: Messages["common"]["pricing"]
}

const AWS_LOGO =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/330px-Amazon_Web_Services_Logo.svg.png"

export function PricingClient({ locale, t, labels }: PricingClientProps) {
  const [isAnnual, setIsAnnual] = useState(false)
  const [activeTab, setActiveTab] = useState("ojs")
  const [vpsService, setVpsService] = useState("lightsail")

  const calculatePrice = (monthlyPrice: number) => {
    return isAnnual ? Math.round(monthlyPrice * 0.9) : monthlyPrice
  }

  const showPricingToggle = activeTab !== "custom"

  // Crossref terms differ by product; tabs without Crossref items show no footnote.
  const crossrefFootnotes: Record<string, string> = {
    ojs: t.footnotes.journals,
    omp: t.footnotes.journals,
    dataverse: t.footnotes.allPlans,
    vps: t.footnotes.allPlans,
  }
  const crossrefFootnote = crossrefFootnotes[activeTab]

  const checks = (texts: string[]): PlanItem[] => texts.map((text) => ({ kind: "check", text }))
  const migration: PlanItem = { kind: "toggle", included: t.migration.included, extra: t.migration.extra }
  const installation: PlanItem = { kind: "toggle", included: t.installation.included, extra: t.installation.extra }
  const crossrefOnRequest: PlanItem = { kind: "highlight", text: t.crossref.onRequest, variant: "optional" }
  const crossrefAnnualPlan: PlanItem = { kind: "highlight", text: t.crossref.annualPlan }
  const crossrefIncluded: PlanItem = { kind: "highlight", text: t.crossref.included }
  const preprintsAnnualOnly: PlanItem = { kind: "annualOnly", text: t.preprints }
  const migrationAnnualOnly: PlanItem = { kind: "annualOnly", text: t.migration.included }

  const ojsPlans: Plan[] = [
    {
      key: "basic",
      ...t.ojs.plans.basic,
      price: 42,
      items: [...checks(t.ojs.plans.basic.features), migration],
      monthlyUrl: "https://shop.paideiahosting.net/shop/ojs-basic-m-ojs-hosting-basic-monthly-146",
      annualUrl: "https://shop.paideiahosting.net/shop/ojs-basic-m-ojs-hosting-basic-monthly-146?plan_id=2",
    },
    {
      key: "professional",
      ...t.ojs.plans.professional,
      price: 60,
      popular: true,
      items: [...checks(t.ojs.plans.professional.features), migration, crossrefOnRequest],
      monthlyUrl: "https://shop.paideiahosting.net/shop/ojs-pro-m-ojs-hosting-professional-monthly-147",
      annualUrl: "https://shop.paideiahosting.net/shop/ojs-pro-m-ojs-hosting-professional-monthly-147?plan_id=2",
    },
    {
      key: "enterprise",
      ...t.ojs.plans.enterprise,
      price: 99,
      items: [...checks(t.ojs.plans.enterprise.features), migration, crossrefAnnualPlan, preprintsAnnualOnly],
      monthlyUrl: "https://shop.paideiahosting.net/shop/ojs-ent-m-ojs-hosting-enterprise-monthly-148",
      annualUrl: "https://shop.paideiahosting.net/shop/ojs-ent-m-ojs-hosting-enterprise-monthly-148?plan_id=2",
    },
  ]

  const ompPlans: Plan[] = [
    {
      key: "basic",
      ...t.omp.plans.basic,
      price: 42,
      items: [...checks(t.omp.plans.basic.features), migration],
      monthlyUrl: "https://shop.paideiahosting.net/shop/omp-basic-m-omp-hosting-basic-monthly-152",
      annualUrl: "https://shop.paideiahosting.net/shop/omp-basic-m-omp-hosting-basic-monthly-152?plan_id=2",
    },
    {
      key: "professional",
      ...t.omp.plans.professional,
      price: 60,
      popular: true,
      items: [...checks(t.omp.plans.professional.features), migration, crossrefOnRequest],
      monthlyUrl: "https://shop.paideiahosting.net/shop/omp-pro-m-omp-hosting-professional-monthly-153",
      annualUrl: "https://shop.paideiahosting.net/shop/omp-pro-m-omp-hosting-professional-monthly-153?plan_id=2",
    },
    {
      key: "enterprise",
      ...t.omp.plans.enterprise,
      price: 99,
      items: [...checks(t.omp.plans.enterprise.features), migration, crossrefAnnualPlan, preprintsAnnualOnly],
      monthlyUrl: "https://shop.paideiahosting.net/shop/omp-ent-m-omp-hosting-enterprise-monthly-154",
      annualUrl: "https://shop.paideiahosting.net/shop/omp-ent-m-omp-hosting-enterprise-monthly-154?plan_id=2",
    },
  ]

  const repositoryPlans: Plan[] = [
    {
      key: "professional",
      ...t.repository.plans.professional,
      price: 170,
      popular: true,
      items: [crossrefIncluded, ...checks(t.repository.plans.professional.features), installation, migration],
      monthlyUrl: "https://shop.paideiahosting.net/shop/repo-pro-m-repository-hosting-professional-monthly-158",
      annualUrl: "https://shop.paideiahosting.net/shop/repo-pro-m-repository-hosting-professional-monthly-158?plan_id=2",
    },
    {
      key: "enterprise",
      ...t.repository.plans.enterprise,
      price: 280,
      items: [crossrefIncluded, ...checks(t.repository.plans.enterprise.features), migrationAnnualOnly],
      monthlyUrl: "https://shop.paideiahosting.net/shop/repo-ent-m-repository-hosting-enterprise-monthly-159",
      annualUrl: "https://shop.paideiahosting.net/shop/repo-ent-m-repository-hosting-enterprise-monthly-159?plan_id=2",
    },
  ]

  const atomPlans: Plan[] = [
    {
      key: "professional",
      ...t.atom.plans.professional,
      price: 170,
      popular: true,
      items: [...checks(t.atom.plans.professional.features), installation, migration],
      monthlyUrl: "https://shop.paideiahosting.net/shop/atom-pro-m-atom-hosting-professional-monthly-162",
      annualUrl: "https://shop.paideiahosting.net/shop/atom-pro-m-atom-hosting-professional-monthly-162?plan_id=2",
    },
    {
      key: "enterprise",
      ...t.atom.plans.enterprise,
      price: 280,
      items: [...checks(t.atom.plans.enterprise.features), migrationAnnualOnly],
      monthlyUrl: "https://shop.paideiahosting.net/shop/atom-ent-m-atom-hosting-enterprise-monthly-163",
      annualUrl: "https://shop.paideiahosting.net/shop/atom-ent-m-atom-hosting-enterprise-monthly-163?plan_id=2",
    },
  ]

  const lightsailPlans: Plan[] = [
    {
      key: "professional",
      ...t.vps.lightsail.plans.professional,
      price: 170,
      popular: true,
      items: [crossrefIncluded, ...checks(t.vps.lightsail.plans.professional.features)],
      note: t.vps.lightsail.note,
      monthlyUrl: "https://shop.paideiahosting.net/shop/vps-ls-pro-m-vps-lightsail-professional-monthly-166",
      annualUrl: "https://shop.paideiahosting.net/shop/vps-ls-pro-m-vps-lightsail-professional-monthly-166?plan_id=2",
    },
    {
      key: "enterprise",
      ...t.vps.lightsail.plans.enterprise,
      price: 280,
      items: [crossrefIncluded, ...checks(t.vps.lightsail.plans.enterprise.features)],
      note: t.vps.lightsail.note,
      monthlyUrl: "https://shop.paideiahosting.net/shop/vps-ls-ent-m-vps-lightsail-enterprise-monthly-167",
      annualUrl: "https://shop.paideiahosting.net/shop/vps-ls-ent-m-vps-lightsail-enterprise-monthly-167?plan_id=2",
    },
  ]

  const ec2Plans: Plan[] = [
    {
      key: "professional",
      ...t.vps.ec2.plans.professional,
      price: 190,
      popular: true,
      items: [crossrefIncluded, ...checks(t.vps.ec2.plans.professional.features)],
      note: t.vps.ec2.note,
      monthlyUrl: "https://shop.paideiahosting.net/shop/vps-ec2-pro-m-vps-ec2-professional-t3large-monthly-170",
      annualUrl: "https://shop.paideiahosting.net/shop/vps-ec2-pro-m-vps-ec2-professional-t3large-monthly-170?plan_id=2",
    },
    {
      key: "enterprise",
      ...t.vps.ec2.plans.enterprise,
      price: 299,
      items: [crossrefIncluded, ...checks(t.vps.ec2.plans.enterprise.features)],
      note: t.vps.ec2.note,
      monthlyUrl: "https://shop.paideiahosting.net/shop/vps-ec2-ent-m-vps-ec2-enterprise-t3xlarge-monthly-171",
      annualUrl: "https://shop.paideiahosting.net/shop/vps-ec2-ent-m-vps-ec2-enterprise-t3xlarge-monthly-171?plan_id=2",
    },
  ]

  const renderItem = (item: PlanItem, index: number) => {
    switch (item.kind) {
      case "check":
        return (
          <li key={index} className="flex items-center gap-2">
            <Check className="h-4 w-4 text-primary" />
            <span>{item.text}</span>
          </li>
        )
      case "toggle":
        return (
          <li key={index} className="flex items-center gap-2">
            <Check className={`h-4 w-4 ${isAnnual ? 'text-green-700' : 'text-primary'}`} />
            <span className={isAnnual ? 'text-green-700 font-medium' : ''}>{isAnnual ? item.included : item.extra}</span>
          </li>
        )
      case "highlight":
        return <HighlightedFeatureItem key={index} text={item.text} variant={item.variant} />
      case "annualOnly":
        return isAnnual ? (
          <li key={index} className="flex items-center gap-2">
            <Check className="h-4 w-4 text-primary" />
            <span className="text-green-700 font-medium">{item.text}</span>
          </li>
        ) : null
    }
  }

  const renderPlan = (plan: Plan) => (
    <div
      key={plan.key}
      className={
        plan.popular
          ? "flex flex-col rounded-lg border bg-background p-6 shadow-sm relative"
          : "flex flex-col rounded-lg border bg-background p-6 shadow-sm"
      }
    >
      {plan.popular && (
        <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
          {labels.popular}
        </div>
      )}
      <div className="space-y-2">
        <h3 className="text-2xl font-bold">{plan.name}</h3>
        <p className="text-gray-500 dark:text-gray-400">{plan.description}</p>
      </div>
      <div className="mt-4">
        <div className="flex items-baseline">
          <span className="text-3xl font-bold">${calculatePrice(plan.price)}</span>
          <span className="ml-1 text-gray-500 dark:text-gray-400">/{isAnnual ? labels.billedAnnually : labels.month}</span>
        </div>
        {isAnnual && (
          <div className="text-sm text-gray-400 mt-1">
            ${(calculatePrice(plan.price) * 12).toFixed(0)}{` ${t.perYear}`}
          </div>
        )}
      </div>
      <ul className="mt-4 space-y-2 flex-1">{plan.items.map(renderItem)}</ul>
      {plan.note && <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">{plan.note}</p>}
      <div className="mt-6">
        <Link
          href={isAnnual ? plan.annualUrl : plan.monthlyUrl}
          className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
          {labels.getStarted}
        </Link>
      </div>
    </div>
  )

  const annualNotice = !isAnnual && (
    <div className="max-w-md mx-auto bg-gradient-to-r from-slate-50 to-gray-50 border border-gray-200 rounded-lg p-2 mb-4 text-center">
      <div className="flex items-center justify-center gap-1">
        <svg className="h-4 w-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
        </svg>
        <p className="text-gray-700 text-sm">{t.annualNotice}</p>
      </div>
    </div>
  )

  const renderHeader = (title: string, subtitle: string) => (
    <div className="text-center mb-10">
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="text-gray-500 dark:text-gray-400 mt-2">{subtitle}</p>
    </div>
  )

  const renderHostedOn = (spacing: "mb-10" | "mb-6", label: string) => (
    <div className={`flex items-center justify-center ${spacing}`}>
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <span>{label}</span>
        <img src={AWS_LOGO} alt={t.awsAlt} className="h-6" />
      </div>
    </div>
  )

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <Tabs defaultValue="ojs" className="w-full max-w-5xl mx-auto" onValueChange={setActiveTab}>
          <div className="flex flex-col items-center space-y-6 mb-8">
            <TabsList className="grid grid-cols-3 md:grid-cols-6 w-full max-w-3xl">
              <TabsTrigger value="ojs">{t.triggers.ojs}</TabsTrigger>
              <TabsTrigger value="omp">{t.triggers.omp}</TabsTrigger>
              <TabsTrigger value="dataverse">{t.triggers.dataverse}</TabsTrigger>
              <TabsTrigger value="atom">{t.triggers.atom}</TabsTrigger>
              <TabsTrigger value="vps">{t.triggers.vps}</TabsTrigger>
              <TabsTrigger value="custom">{t.triggers.custom}</TabsTrigger>
            </TabsList>
            {showPricingToggle && (
              <PricingToggle onToggle={setIsAnnual} labels={labels} />
            )}
          </div>

          {/* OJS Pricing */}
          <TabsContent value="ojs" className="space-y-4">
            {annualNotice}
            {renderHeader(t.ojs.title, t.ojs.subtitle)}
            {renderHostedOn("mb-10", labels.hostedOn)}
            <div className="grid gap-6 md:grid-cols-3">{ojsPlans.map(renderPlan)}</div>
          </TabsContent>

          {/* OMP Pricing */}
          <TabsContent value="omp" className="space-y-4">
            {annualNotice}
            {renderHeader(t.omp.title, t.omp.subtitle)}
            {renderHostedOn("mb-10", labels.hostedOn)}
            <div className="grid gap-6 md:grid-cols-3">{ompPlans.map(renderPlan)}</div>
          </TabsContent>

          {/* Repository Pricing */}
          <TabsContent value="dataverse" className="space-y-4">
            {annualNotice}
            {renderHeader(t.repository.title, t.repository.subtitle)}
            {renderHostedOn("mb-6", labels.hostedOn)}
            <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">{repositoryPlans.map(renderPlan)}</div>
          </TabsContent>

          {/* AtoM Pricing */}
          <TabsContent value="atom" className="space-y-4">
            {annualNotice}
            {renderHeader(t.atom.title, t.atom.subtitle)}
            {renderHostedOn("mb-6", labels.hostedOn)}
            <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">{atomPlans.map(renderPlan)}</div>
          </TabsContent>

          {/* VPS Pricing */}
          <TabsContent value="vps" className="space-y-4">
            {renderHeader(t.vps.title, t.vps.subtitle)}
            {renderHostedOn("mb-6", labels.hostedOn)}

            <div className="flex justify-center mb-8">
              <div className="flex items-center gap-4 p-1 bg-gray-100 rounded-lg">
                <button
                  onClick={() => setVpsService("lightsail")}
                  className={`px-4 py-2 text-sm font-medium rounded-md ${
                    vpsService === "lightsail"
                      ? "bg-primary text-primary-foreground"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Lightsail
                </button>
                <button
                  onClick={() => setVpsService("ec2")}
                  className={`px-4 py-2 text-sm font-medium rounded-md ${
                    vpsService === "ec2"
                      ? "bg-primary text-primary-foreground"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  EC2
                </button>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
              {(vpsService === "lightsail" ? lightsailPlans : ec2Plans).map(renderPlan)}
            </div>
          </TabsContent>

          {/* Custom Solutions */}
          <TabsContent value="custom" className="space-y-4">
            {renderHeader(t.custom.title, t.custom.subtitle)}
            {renderHostedOn("mb-6", t.custom.poweredBy)}

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {t.custom.cards.map((card) => (
                <div key={card.title} className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-4 text-sm">{card.description}</p>
                  <ul className="space-y-2 flex-1">
                    {card.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <div className="max-w-2xl mx-auto">
                <h3 className="text-xl font-bold mb-4">{t.custom.pricing.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6">{t.custom.pricing.text}</p>
                <Link
                  href={localizedHref("contact", locale)}
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  {t.custom.pricing.cta}
                </Link>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        {crossrefFootnote && (
          <p className="mx-auto max-w-5xl mt-10 text-sm text-gray-500 dark:text-gray-400">
            {crossrefFootnote}
          </p>
        )}
      </div>
    </section>
  )
}
