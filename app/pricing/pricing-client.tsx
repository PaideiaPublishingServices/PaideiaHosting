"use client"

import { useState } from "react"
import Link from "next/link"
import { Check, HelpCircle } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PricingToggle } from "@/components/pricing-toggle"

export function PricingClient() {
  const [isAnnual, setIsAnnual] = useState(false)
  const [activeTab, setActiveTab] = useState("ojs")

  const calculatePrice = (monthlyPrice: number) => {
    return isAnnual ? Math.round(monthlyPrice * 0.9) : monthlyPrice
  }

  const showPricingToggle = activeTab !== "custom"

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <Tabs defaultValue="ojs" className="w-full max-w-5xl mx-auto" onValueChange={setActiveTab}>
          <div className="flex flex-col items-center space-y-6 mb-8">
            <TabsList className="grid grid-cols-3 md:grid-cols-6 w-full max-w-3xl">
              <TabsTrigger value="ojs">OJS</TabsTrigger>
              <TabsTrigger value="omp">OMP</TabsTrigger>
              <TabsTrigger value="dataverse">Repository</TabsTrigger>
              <TabsTrigger value="atom">AtoM</TabsTrigger>
              <TabsTrigger value="vps">VPS</TabsTrigger>
              <TabsTrigger value="custom">Custom</TabsTrigger>
            </TabsList>
            {showPricingToggle && <PricingToggle onToggle={setIsAnnual} />}
          </div>

          {/* OJS Pricing */}
          <TabsContent value="ojs" className="space-y-4">
            {!isAnnual && (
              <div className="max-w-md mx-auto bg-gradient-to-r from-slate-50 to-gray-50 border border-gray-200 rounded-lg p-2 mb-4 text-center">
                <div className="flex items-center justify-center gap-1">
                  <svg className="h-4 w-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-700 text-sm">Switch to Annual billing for exclusive benefits and save 10%</p>
                </div>
              </div>
            )}
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold">OJS Hosting Plans</h2>
              <p className="text-gray-500 dark:text-gray-400 mt-2">Specialized hosting for Open Journal Systems</p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {/* Basic Plan */}
              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Basic</h3>
                  <p className="text-gray-500 dark:text-gray-400">For emerging journals</p>
                </div>
                <div className="mt-4">
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold">${calculatePrice(42)}</span>
                    <span className="ml-1 text-gray-500 dark:text-gray-400">/{isAnnual ? 'billed annually' : 'month'}</span>
                  </div>
                  {isAnnual && (
                    <div className="text-sm text-gray-400 mt-1">
                      ${(calculatePrice(42) * 12).toFixed(0)} per year
                    </div>
                  )}
                </div>
                <ul className="mt-4 space-y-2 flex-1">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Single Journal</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>10GB Storage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Daily Backups | 5 days</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>1 mail box</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>SSL included</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Email Support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Free Installation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className={`h-4 w-4 ${isAnnual ? 'text-green-700' : 'text-primary'}`} />
                    <span className={isAnnual ? 'text-green-700 font-medium' : ''}>{isAnnual ? 'Migration services included' : 'Migration services fee extra'}</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    Get Started
                  </Link>
                </div>
              </div>

              {/* Professional Plan */}
              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm relative">
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Popular
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Professional</h3>
                  <p className="text-gray-500 dark:text-gray-400">For established academic journals</p>
                </div>
                <div className="mt-4">
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold">${calculatePrice(79)}</span>
                    <span className="ml-1 text-gray-500 dark:text-gray-400">/{isAnnual ? 'billed annually' : 'month'}</span>
                  </div>
                  {isAnnual && (
                    <div className="text-sm text-gray-400 mt-1">
                      ${(calculatePrice(79) * 12).toFixed(0)} per year
                    </div>
                  )}
                </div>
                <ul className="mt-4 space-y-2 flex-1">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Multi-journal in 1 OJS Installations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>20GB Storage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Daily Backups | 7 days</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>5 mail box</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>SSL included</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Priority Email Support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Free Installation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>1 Upgrade per year</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className={`h-4 w-4 ${isAnnual ? 'text-green-700' : 'text-primary'}`} />
                    <span className={isAnnual ? 'text-green-700 font-medium' : ''}>{isAnnual ? 'Migration services included' : 'Migration services fee extra'}</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    Get Started
                  </Link>
                </div>
              </div>

              {/* Enterprise Plan */}
              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Enterprise</h3>
                  <p className="text-gray-500 dark:text-gray-400">For institutions with multiple journals</p>
                </div>
                <div className="mt-4">
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold">${calculatePrice(99)}</span>
                    <span className="ml-1 text-gray-500 dark:text-gray-400">/{isAnnual ? 'billed annually' : 'month'}</span>
                  </div>
                  {isAnnual && (
                    <div className="text-sm text-gray-400 mt-1">
                      ${(calculatePrice(99) * 12).toFixed(0)} per year
                    </div>
                  )}
                </div>
                <ul className="mt-4 space-y-2 flex-1">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Multi-journal in Multi-installations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>30GB Storage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Daily Backups | 15 days</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Unlimited mailbox</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>SSL included</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Priority Email Support | Phone Support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Free Installation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>1 Upgrade per year</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className={`h-4 w-4 ${isAnnual ? 'text-green-700' : 'text-primary'}`} />
                    <span className={isAnnual ? 'text-green-700 font-medium' : ''}>{isAnnual ? 'Migration services included' : 'Migration services fee extra'}</span>
                  </li>
                  {isAnnual && (
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-green-700 font-medium">Crossref memberships (Annual only)</span>
                    </li>
                  )}
                  {isAnnual && (
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-green-700 font-medium">PrePrints server memberships (Annual only)</span>
                    </li>
                  )}
                </ul>
                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    Contact Sales
                  </Link>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* OMP Pricing */}
          <TabsContent value="omp" className="space-y-4">
            {!isAnnual && (
              <div className="max-w-md mx-auto bg-gradient-to-r from-slate-50 to-gray-50 border border-gray-200 rounded-lg p-2 mb-4 text-center">
                <div className="flex items-center justify-center gap-1">
                  <svg className="h-4 w-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-700 text-sm">Switch to Annual billing for exclusive benefits and save 10%</p>
                </div>
              </div>
            )}
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold">OMP Hosting Plans</h2>
              <p className="text-gray-500 dark:text-gray-400 mt-2">Specialized hosting for Open Monograph Press</p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {/* Basic Plan */}
              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Basic</h3>
                  <p className="text-gray-500 dark:text-gray-400">For emerging publishers</p>
                </div>
                <div className="mt-4">
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold">${calculatePrice(42)}</span>
                    <span className="ml-1 text-gray-500 dark:text-gray-400">/{isAnnual ? 'billed annually' : 'month'}</span>
                  </div>
                  {isAnnual && (
                    <div className="text-sm text-gray-400 mt-1">
                      ${(calculatePrice(42) * 12).toFixed(0)} per year
                    </div>
                  )}
                </div>
                <ul className="mt-4 space-y-2 flex-1">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Single Press</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>10GB Storage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Daily Backups | 5 days</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>1 mail box</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>SSL included</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Email Support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Free Installation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className={`h-4 w-4 ${isAnnual ? 'text-green-700' : 'text-primary'}`} />
                    <span className={isAnnual ? 'text-green-700 font-medium' : ''}>{isAnnual ? 'Migration services included' : 'Migration services fee extra'}</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    Get Started
                  </Link>
                </div>
              </div>

              {/* Professional Plan */}
              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm relative">
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Popular
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Professional</h3>
                  <p className="text-gray-500 dark:text-gray-400">For established academic publishers</p>
                </div>
                <div className="mt-4">
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold">${calculatePrice(79)}</span>
                    <span className="ml-1 text-gray-500 dark:text-gray-400">/{isAnnual ? 'billed annually' : 'month'}</span>
                  </div>
                  {isAnnual && (
                    <div className="text-sm text-gray-400 mt-1">
                      ${(calculatePrice(79) * 12).toFixed(0)} per year
                    </div>
                  )}
                </div>
                <ul className="mt-4 space-y-2 flex-1">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Multi-press in 1 OMP Installation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>20GB Storage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Daily Backups | 7 days</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>5 mail box</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>SSL included</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Priority Email Support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Free Installation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>1 Upgrade per year</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className={`h-4 w-4 ${isAnnual ? 'text-green-700' : 'text-primary'}`} />
                    <span className={isAnnual ? 'text-green-700 font-medium' : ''}>{isAnnual ? 'Migration services included' : 'Migration services fee extra'}</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    Get Started
                  </Link>
                </div>
              </div>

              {/* Enterprise Plan */}
              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Enterprise</h3>
                  <p className="text-gray-500 dark:text-gray-400">For institutions with multiple publications</p>
                </div>
                <div className="mt-4">
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold">${calculatePrice(99)}</span>
                    <span className="ml-1 text-gray-500 dark:text-gray-400">/{isAnnual ? 'billed annually' : 'month'}</span>
                  </div>
                  {isAnnual && (
                    <div className="text-sm text-gray-400 mt-1">
                      ${(calculatePrice(99) * 12).toFixed(0)} per year
                    </div>
                  )}
                </div>
                <ul className="mt-4 space-y-2 flex-1">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Multi-press in Multi-installations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>30GB Storage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Daily Backups | 15 days</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Unlimited mailbox</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>SSL included</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Priority Email Support | Phone Support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Free Installation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>1 Upgrade per year</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className={`h-4 w-4 ${isAnnual ? 'text-green-700' : 'text-primary'}`} />
                    <span className={isAnnual ? 'text-green-700 font-medium' : ''}>{isAnnual ? 'Migration services included' : 'Migration services fee extra'}</span>
                  </li>
                  {isAnnual && (
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-green-700 font-medium">Crossref memberships (Annual only)</span>
                    </li>
                  )}
                  {isAnnual && (
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-green-700 font-medium">PrePrints server memberships (Annual only)</span>
                    </li>
                  )}
                </ul>
                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    Contact Sales
                  </Link>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Repository Pricing */}
          <TabsContent value="dataverse" className="space-y-4">
            {!isAnnual && (
              <div className="max-w-md mx-auto bg-gradient-to-r from-slate-50 to-gray-50 border border-gray-200 rounded-lg p-2 mb-4 text-center">
                <div className="flex items-center justify-center gap-1">
                  <svg className="h-4 w-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-700 text-sm">Switch to Annual billing for exclusive benefits and save 10%</p>
                </div>
              </div>
            )}
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold">Repository Hosting Plans</h2>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Secure and reliable hosting for research data repositories (Dataverse & DSpace) on AWS infrastructure
              </p>
            </div>

            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>Hosted on</span>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/330px-Amazon_Web_Services_Logo.svg.png" alt="AWS" className="h-6" />
              </div>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
              {/* Professional Plan */}
              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm relative">
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Popular
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Professional</h3>
                  <p className="text-gray-500 dark:text-gray-400">For research departments</p>
                </div>
                <div className="mt-4">
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold">${calculatePrice(170)}</span>
                    <span className="ml-1 text-gray-500 dark:text-gray-400">/{isAnnual ? 'billed annually' : 'month'}</span>
                  </div>
                  {isAnnual && (
                    <div className="text-sm text-gray-400 mt-1">
                      ${(calculatePrice(170) * 12).toFixed(0)} per year
                    </div>
                  )}
                </div>
                <ul className="mt-4 space-y-2 flex-1">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Repository (Dataverse or DSpace)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>50GB Storage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>SSL included</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Daily Backups | 7 days</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Email Support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Additional storage available</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className={`h-4 w-4 ${isAnnual ? 'text-green-700' : 'text-primary'}`} />
                    <span className={isAnnual ? 'text-green-700 font-medium' : ''}>{isAnnual ? 'Installation included' : 'Installation fee extra'}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className={`h-4 w-4 ${isAnnual ? 'text-green-700' : 'text-primary'}`} />
                    <span className={isAnnual ? 'text-green-700 font-medium' : ''}>{isAnnual ? 'Migration services included' : 'Migration services fee extra'}</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    Get Started
                  </Link>
                </div>
              </div>

              {/* Enterprise Plan */}
              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Enterprise</h3>
                  <p className="text-gray-500 dark:text-gray-400">For institutions and large research centers</p>
                </div>
                <div className="mt-4">
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold">${calculatePrice(280)}</span>
                    <span className="ml-1 text-gray-500 dark:text-gray-400">/{isAnnual ? 'billed annually' : 'month'}</span>
                  </div>
                  {isAnnual && (
                    <div className="text-sm text-gray-400 mt-1">
                      ${(calculatePrice(280) * 12).toFixed(0)} per year
                    </div>
                  )}
                </div>
                <ul className="mt-4 space-y-2 flex-1">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Repository (Dataverse or DSpace)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Installation included</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>100GB Storage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>SSL included</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Mail box included</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>S3 configuration included (Not included additional fee S3)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Daily Backups | 7 days</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Priority Email Support</span>
                  </li>
                   <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Additional storage available</span>
                  </li>
                  {isAnnual && (
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-green-700 font-medium">Migration services included</span>
                    </li>
                  )}
                  {isAnnual && (
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-green-700 font-medium">Crossref membership (Annual only)</span>
                    </li>
                  )}
                </ul>
                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    Contact Sales
                  </Link>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* AtoM Pricing */}
          <TabsContent value="atom" className="space-y-4">
            {!isAnnual && (
              <div className="max-w-md mx-auto bg-gradient-to-r from-slate-50 to-gray-50 border border-gray-200 rounded-lg p-2 mb-4 text-center">
                <div className="flex items-center justify-center gap-1">
                  <svg className="h-4 w-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-700 text-sm">Switch to Annual billing for exclusive benefits and save 10%</p>
                </div>
              </div>
            )}
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold">AtoM Hosting Plans</h2>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Professional hosting for Access to Memory archival software
              </p>
            </div>

            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>Hosted on</span>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/330px-Amazon_Web_Services_Logo.svg.png" alt="AWS" className="h-6" />
              </div>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
              {/* Professional Plan */}
              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm relative">
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Popular
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Professional</h3>
                  <p className="text-gray-500 dark:text-gray-400">For archives and cultural institutions</p>
                </div>
                <div className="mt-4">
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold">${calculatePrice(170)}</span>
                    <span className="ml-1 text-gray-500 dark:text-gray-400">/{isAnnual ? 'billed annually' : 'month'}</span>
                  </div>
                  {isAnnual && (
                    <div className="text-sm text-gray-400 mt-1">
                      ${(calculatePrice(170) * 12).toFixed(0)} per year
                    </div>
                  )}
                </div>
                <ul className="mt-4 space-y-2 flex-1">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>AtoM Installation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>50GB Storage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>SSL included</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Daily Backups | 7 days</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Email Support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Additional storage available</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className={`h-4 w-4 ${isAnnual ? 'text-green-700' : 'text-primary'}`} />
                    <span className={isAnnual ? 'text-green-700 font-medium' : ''}>{isAnnual ? 'Installation included' : 'Installation fee extra'}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className={`h-4 w-4 ${isAnnual ? 'text-green-700' : 'text-primary'}`} />
                    <span className={isAnnual ? 'text-green-700 font-medium' : ''}>{isAnnual ? 'Migration services included' : 'Migration services fee extra'}</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    Get Started
                  </Link>
                </div>
              </div>

              {/* Enterprise Plan */}
              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Enterprise</h3>
                  <p className="text-gray-500 dark:text-gray-400">For large institutions and national archives</p>
                </div>
                <div className="mt-4">
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold">${calculatePrice(280)}</span>
                    <span className="ml-1 text-gray-500 dark:text-gray-400">/{isAnnual ? 'billed annually' : 'month'}</span>
                  </div>
                  {isAnnual && (
                    <div className="text-sm text-gray-400 mt-1">
                      ${(calculatePrice(280) * 12).toFixed(0)} per year
                    </div>
                  )}
                </div>
                <ul className="mt-4 space-y-2 flex-1">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>AtoM Installation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Installation included</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>100GB Storage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>SSL included</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Mail box included</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>S3 configuration included (Not included additional fee S3)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Daily Backups | 7 days</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Priority Email Support</span>
                  </li>
                   <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Additional storage available</span>
                  </li>
                  {isAnnual && (
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-green-700 font-medium">Migration services included</span>
                    </li>
                  )}
                </ul>
                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    Contact Sales
                  </Link>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* VPS Pricing */}
          <TabsContent value="vps" className="space-y-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold">VPS for Institutions</h2>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Customizable virtual private servers for educational institutions
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {/* Standard Plan */}
              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Standard</h3>
                  <p className="text-gray-500 dark:text-gray-400">For small departments and projects</p>
                </div>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-bold">${calculatePrice(79)}</span>
                  <span className="ml-1 text-gray-500 dark:text-gray-400">/{isAnnual ? 'billed annually' : 'month'}</span>
                </div>
                <ul className="mt-4 space-y-2 flex-1">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>2 vCPUs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>4GB RAM</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>80GB SSD Storage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>2TB Bandwidth</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Email Support</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    Get Started
                  </Link>
                </div>
              </div>

              {/* Advanced Plan */}
              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm relative">
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Popular
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Advanced</h3>
                  <p className="text-gray-500 dark:text-gray-400">For academic departments and research groups</p>
                </div>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-bold">${calculatePrice(149)}</span>
                  <span className="ml-1 text-gray-500 dark:text-gray-400">/{isAnnual ? 'billed annually' : 'month'}</span>
                </div>
                <ul className="mt-4 space-y-2 flex-1">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>4 vCPUs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>8GB RAM</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>160GB SSD Storage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>4TB Bandwidth</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Priority Support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Daily Backups</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    Get Started
                  </Link>
                </div>
              </div>

              {/* Enterprise Plan */}
              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Enterprise</h3>
                  <p className="text-gray-500 dark:text-gray-400">For large institutions and research centers</p>
                </div>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-bold">${calculatePrice(299)}</span>
                  <span className="ml-1 text-gray-500 dark:text-gray-400">/{isAnnual ? 'billed annually' : 'month'}</span>
                </div>
                <ul className="mt-4 space-y-2 flex-1">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>8 vCPUs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>16GB RAM</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>320GB SSD Storage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>8TB Bandwidth</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>24/7 Phone Support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Managed Services Included</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    Contact Sales
                  </Link>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Custom Solutions */}
          <TabsContent value="custom" className="space-y-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold">Custom Solutions</h2>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Tailored hosting solutions for specific academic needs
              </p>
            </div>

            <div className="max-w-3xl mx-auto text-center">
              <div className="rounded-lg border bg-background p-8">
                <h3 className="text-2xl font-bold mb-4">Custom Pricing</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6">
                  Our custom solutions are tailored to your specific academic needs and requirements. Pricing depends
                  on the complexity, scale, and specific features of your project.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Bespoke software development</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>System integration services</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Specialized academic software hosting</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Migration and consulting services</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>Fully managed custom environments</span>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}