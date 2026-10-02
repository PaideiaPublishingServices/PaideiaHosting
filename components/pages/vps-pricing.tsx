"use client"

import { useState } from "react"
import Link from "next/link"
import { Check } from "lucide-react"
import { PricingToggle } from "@/components/pricing-toggle"
import { HighlightedFeatureItem, type PricingLabels } from "@/components/service-pricing"
import type { Messages } from "@/lib/i18n/messages"

interface VPSPricingProps {
  t: Messages["vpsForInstitutions"]["pricing"]
  labels: PricingLabels
}

export function VPSPricing({ t, labels }: VPSPricingProps) {
  const [vpsService, setVpsService] = useState("lightsail")
  const [isAnnual, setIsAnnual] = useState(false)

  const calculatePrice = (monthlyPrice: number) => {
    return isAnnual ? Math.round(monthlyPrice * 0.9) : monthlyPrice
  }

  const lightsailPlans = [
    {
      ...t.lightsail.professional,
      monthlyPrice: 170,
        monthlyUrl: "https://shop.paideiahosting.net/shop/vps-ls-pro-m-vps-lightsail-professional-monthly-166",
        annualUrl: "https://shop.paideiahosting.net/shop/vps-ls-pro-m-vps-lightsail-professional-monthly-166?plan_id=2",
      popular: true,
    },
    {
      ...t.lightsail.enterprise,
      monthlyPrice: 280,
        monthlyUrl: "https://shop.paideiahosting.net/shop/vps-ls-ent-m-vps-lightsail-enterprise-monthly-167",
        annualUrl: "https://shop.paideiahosting.net/shop/vps-ls-ent-m-vps-lightsail-enterprise-monthly-167?plan_id=2",
      popular: false,
    }
  ]

  const ec2Plans = [
    {
      ...t.ec2.professional,
      monthlyPrice: 190,
        monthlyUrl: "https://shop.paideiahosting.net/shop/vps-ec2-pro-m-vps-ec2-professional-t3large-monthly-170",
        annualUrl: "https://shop.paideiahosting.net/shop/vps-ec2-pro-m-vps-ec2-professional-t3large-monthly-170?plan_id=2",
      popular: true,
    },
    {
      ...t.ec2.enterprise,
      monthlyPrice: 299,
        monthlyUrl: "https://shop.paideiahosting.net/shop/vps-ec2-ent-m-vps-ec2-enterprise-t3xlarge-monthly-171",
        annualUrl: "https://shop.paideiahosting.net/shop/vps-ec2-ent-m-vps-ec2-enterprise-t3xlarge-monthly-171?plan_id=2",
      popular: false,
    }
  ]

  const currentPlans = vpsService === "lightsail" ? lightsailPlans : ec2Plans

  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t.title}</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {t.subtitle}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>{labels.hostedOn}</span>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/330px-Amazon_Web_Services_Logo.svg.png" alt={t.logoAlt} className="h-6" />
          </div>
        </div>

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

        <PricingToggle onToggle={setIsAnnual} labels={labels} />

        <div className="mx-auto grid max-w-4xl items-start gap-6 py-12 md:grid-cols-2">
          {currentPlans.map((plan, index) => (
            <div key={index} className={`flex flex-col rounded-lg border bg-background p-6 shadow-sm ${plan.popular ? 'relative' : ''}`}>
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
                  <span className="text-3xl font-bold">{labels.currency}{calculatePrice(plan.monthlyPrice)}</span>
                  <span className="ml-1 text-gray-500 dark:text-gray-400">/{isAnnual ? labels.billedAnnually : labels.month}</span>
                </div>
                {isAnnual && (
                  <div className="text-sm text-gray-400 mt-1">
                    {labels.currency}{(calculatePrice(plan.monthlyPrice) * 12).toFixed(0)} {t.perYear}
                  </div>
                )}
              </div>
              <ul className="mt-4 space-y-2 flex-1">
                <HighlightedFeatureItem text={t.crossref} />
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
                {vpsService === "ec2" ? t.ec2TransferIncluded : ""}{t.transferNote}
              </p>
              <div className="mt-6">
                <Link
                  href={isAnnual ? plan.annualUrl : plan.monthlyUrl}
                  className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  {labels.getStarted}
                </Link>
              </div>
            </div>
          ))}
        </div>
        <p className="mx-auto max-w-4xl text-sm text-gray-500 dark:text-gray-400">
          {t.footnote}
        </p>
      </div>
    </section>
  )
}