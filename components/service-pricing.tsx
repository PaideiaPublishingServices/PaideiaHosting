"use client"

import { useState } from "react"
import Link from "next/link"
import { Check } from "lucide-react"
import { PricingToggle } from "@/components/pricing-toggle"

interface PricingPlan {
  name: string
  description: string
  monthlyPrice: number
  features: string[]
  popular?: boolean
  buttonText?: string
}

interface ServicePricingProps {
  title: string
  subtitle: string
  plans: PricingPlan[]
}

export function ServicePricing({ title, subtitle, plans }: ServicePricingProps) {
  const [isAnnual, setIsAnnual] = useState(false)

  const calculatePrice = (monthlyPrice: number) => {
    return isAnnual ? Math.round(monthlyPrice * 0.9) : monthlyPrice
  }

  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{title}</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {subtitle}
            </p>
          </div>
          <PricingToggle onToggle={setIsAnnual} className="mt-6" />
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div key={index} className={`flex flex-col rounded-lg border bg-background p-6 shadow-sm ${plan.popular ? 'relative' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Popular
                </div>
              )}
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="text-gray-500 dark:text-gray-400">{plan.description}</p>
              </div>
              <div className="mt-4 flex items-baseline">
                <span className="text-3xl font-bold">${calculatePrice(plan.monthlyPrice)}</span>
                <span className="ml-1 text-gray-500 dark:text-gray-400">/{isAnnual ? 'billed annually' : 'month'}</span>
              </div>
              <ul className="mt-4 space-y-2 flex-1">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  {plan.buttonText || 'Get Started'}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}