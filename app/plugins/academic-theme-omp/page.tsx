"use client"

import Link from "next/link"
import Image from "next/image"
import { Check, Palette, Layout, Sliders, Type, Lock, Smartphone } from "lucide-react"
import { useState } from "react"

export default function AcademicThemeOMPPage() {
  const [isLifetime, setIsLifetime] = useState(false)

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-green-600">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-block bg-green-500/20 text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20 mb-4">
              New Release 2025
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
              Academic Theme OMP
            </h1>
            <p className="max-w-[700px] text-gray-200 md:text-xl">
              The most complete and professional theme for your university press on Open Monograph Press
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row mt-8">
              <Link
                href="#pricing"
                className="inline-flex h-10 items-center justify-center rounded-md bg-green-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                View Plans & Pricing
              </Link>
              <Link
                href="#features"
                className="inline-flex h-10 items-center justify-center rounded-md border border-white/30 bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Explore Features
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Why Choose Academic Theme OMP?
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Specifically designed for university presses with the features you really need
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-green-600 text-white">
                <Layout className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold">Professional Design</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Wide header with gradient, centered navigation and responsive design optimized for all devices.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-2">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-green-600 text-white">
                <Palette className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold">Premium Hero Banner</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Main banner with background image, title, description and fully customizable CTA buttons.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-2">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-green-600 text-white">
                <Sliders className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold">Advanced Slider</h3>
              <p className="text-gray-500 dark:text-gray-400">
                System of 3 slides with image, title, text and buttons. Automatic navigation and intuitive controls.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-2">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-green-600 text-white">
                <Smartphone className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold">Total Customization</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Fully adapt the theme to your institution's visual identity with custom colors and typography.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-2">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-green-600 text-white">
                <Type className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold">Premium Typography</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Inter, Source Serif Pro and Crimson Text. Professional fonts optimized for academic content.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-2">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-green-600 text-white">
                <Lock className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold">Licensing System</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Professional license management with simple activation, included technical support and automatic updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Theme Preview</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Explore Academic Theme OMP in action and discover how it can transform your press
              </p>
            </div>
          </div>
          <div className="mt-12">
            <a
              href="https://demo.paideiastudio.com.ar/index.php/omp"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Image
                src="/placeholder.svg?height=600&width=1200"
                width={1200}
                height={600}
                alt="Academic Theme OMP Preview"
                className="rounded-lg object-cover w-full border shadow-lg hover:shadow-xl transition-shadow"
              />
            </a>
            <div className="text-center mt-6">
              <a
                href="https://demo.paideiastudio.com.ar/index.php/omp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                View Live Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Academic Theme OMP Plans & Pricing
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Choose the plan that best fits your university press needs
              </p>
            </div>
          </div>

          {/* Toggle Annual/Lifetime */}
          <div className="flex justify-center items-center gap-4 my-12">
            <span className="text-sm font-medium text-gray-700">Billing:</span>
            <button
              onClick={() => setIsLifetime(!isLifetime)}
              className="relative inline-flex h-11 w-44 items-center rounded-full bg-gray-200 transition-colors"
            >
              <span
                className={`inline-block h-9 w-20 transform rounded-full bg-white shadow-md transition-transform ${
                  isLifetime ? "translate-x-[86px]" : "translate-x-1"
                }`}
              />
              <div className="absolute inset-0 flex items-center justify-around px-3 text-xs font-medium">
                <span className={isLifetime ? "text-gray-500" : "text-green-600"}>Anual</span>
                <span className={isLifetime ? "text-green-600" : "text-gray-500"}>Lifetime</span>
              </div>
            </button>
          </div>

          {/* Annual Plans */}
          {!isLifetime && (
            <div className="mx-auto grid max-w-6xl items-start gap-6 py-12 md:grid-cols-3">
              {/* Individual Plan */}
              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-lg hover:border-green-600">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Individual</h3>
                  <p className="text-gray-500 dark:text-gray-400">Perfect for one press</p>
                </div>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold text-green-600">$99</span>
                  <span className="ml-2 text-gray-500 dark:text-gray-400">/year</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Annual renewal</p>
                <ul className="space-y-3 mb-6 flex-1">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Customizable hero banner</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Slider with 3 configurable slides</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">3-column editable footer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Premium typography (3 options)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">1 website / domain</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Updates included</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Priority technical support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Complete documentation</span>
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex h-10 w-full items-center justify-center rounded-md bg-green-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Purchase Annual Plan
                </Link>
              </div>

              {/* Professional Plan - Featured */}
              <div className="flex flex-col rounded-lg border-2 border-green-600 bg-background p-6 shadow-lg relative">
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-green-600 px-3 py-1 text-xs font-medium text-white">
                  Most Popular
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Professional</h3>
                  <p className="text-gray-500 dark:text-gray-400">For multiple projects</p>
                </div>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold text-green-600">$299</span>
                  <span className="ml-2 text-gray-500 dark:text-gray-400">/year</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Save with multiple sites</p>
                <ul className="space-y-3 mb-6 flex-1">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Everything from Individual plan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Up to 5 websites / domains</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Priority updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Premium technical support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Assisted installation included</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Basic code customization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Extended documentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Discounts on future plugins</span>
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex h-10 w-full items-center justify-center rounded-md bg-green-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Purchase Annual Plan
                </Link>
              </div>

              {/* Institutional Plan */}
              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-lg hover:border-green-600">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Institutional</h3>
                  <p className="text-gray-500 dark:text-gray-400">For large institutions</p>
                </div>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold text-green-600">$699</span>
                  <span className="ml-2 text-gray-500 dark:text-gray-400">/year</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Unlimited sites</p>
                <ul className="space-y-3 mb-6 flex-1">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Everything from Professional plan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Unlimited websites</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">24/7 priority support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Complete installation included</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Advanced customization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Online training for staff</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Immediate updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Transferable institutional license</span>
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex h-10 w-full items-center justify-center rounded-md bg-green-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Purchase Annual Plan
                </Link>
              </div>
            </div>
          )}

          {/* Lifetime Plan */}
          {isLifetime && (
            <div className="mx-auto max-w-2xl py-12">
              <div className="flex flex-col rounded-lg border-2 border-green-600 bg-background p-8 shadow-lg relative">
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-green-600 px-3 py-1 text-xs font-medium text-white">
                  One-Time Payment
                </div>
                <div className="space-y-2 text-center">
                  <h3 className="text-3xl font-bold">Lifetime</h3>
                  <p className="text-gray-500 dark:text-gray-400">Lifetime access, no renewals</p>
                </div>
                <div className="mt-6 flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-green-600">$1,599</span>
                </div>
                <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-8">One-time payment, forever</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">All premium features</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Unlimited websites</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">No annual renewal ever</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Lifetime updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Permanent technical support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">New features free</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Access to beta versions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Advanced customization included</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Complete training</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Maximum long-term savings</span>
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex h-12 w-full items-center justify-center rounded-md bg-green-600 px-8 text-base font-medium text-white shadow transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Purchase Lifetime
                </Link>
              </div>
            </div>
          )}

          {/* Comparison Table */}
          <div className="mt-16 rounded-lg border bg-background p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-center mb-8">Detailed Feature Comparison</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-4 px-4">Feature</th>
                    <th className="text-center py-4 px-4">Individual</th>
                    <th className="text-center py-4 px-4">Professional</th>
                    <th className="text-center py-4 px-4">Institutional</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b">
                    <td className="py-3 px-4">Modern responsive design</td>
                    <td className="text-center py-3 px-4">
                      <Check className="h-5 w-5 text-green-600 inline" />
                    </td>
                    <td className="text-center py-3 px-4">
                      <Check className="h-5 w-5 text-green-600 inline" />
                    </td>
                    <td className="text-center py-3 px-4">
                      <Check className="h-5 w-5 text-green-600 inline" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Customizable colors</td>
                    <td className="text-center py-3 px-4">
                      <Check className="h-5 w-5 text-green-600 inline" />
                    </td>
                    <td className="text-center py-3 px-4">
                      <Check className="h-5 w-5 text-green-600 inline" />
                    </td>
                    <td className="text-center py-3 px-4">
                      <Check className="h-5 w-5 text-green-600 inline" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Premium hero banner</td>
                    <td className="text-center py-3 px-4">
                      <Check className="h-5 w-5 text-green-600 inline" />
                    </td>
                    <td className="text-center py-3 px-4">
                      <Check className="h-5 w-5 text-green-600 inline" />
                    </td>
                    <td className="text-center py-3 px-4">
                      <Check className="h-5 w-5 text-green-600 inline" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Slider with 3 slides</td>
                    <td className="text-center py-3 px-4">
                      <Check className="h-5 w-5 text-green-600 inline" />
                    </td>
                    <td className="text-center py-3 px-4">
                      <Check className="h-5 w-5 text-green-600 inline" />
                    </td>
                    <td className="text-center py-3 px-4">
                      <Check className="h-5 w-5 text-green-600 inline" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">3-column footer</td>
                    <td className="text-center py-3 px-4">
                      <Check className="h-5 w-5 text-green-600 inline" />
                    </td>
                    <td className="text-center py-3 px-4">
                      <Check className="h-5 w-5 text-green-600 inline" />
                    </td>
                    <td className="text-center py-3 px-4">
                      <Check className="h-5 w-5 text-green-600 inline" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Premium typography</td>
                    <td className="text-center py-3 px-4">
                      <Check className="h-5 w-5 text-green-600 inline" />
                    </td>
                    <td className="text-center py-3 px-4">
                      <Check className="h-5 w-5 text-green-600 inline" />
                    </td>
                    <td className="text-center py-3 px-4">
                      <Check className="h-5 w-5 text-green-600 inline" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Number of sites</td>
                    <td className="text-center py-3 px-4 text-gray-600">1</td>
                    <td className="text-center py-3 px-4 text-gray-600">5</td>
                    <td className="text-center py-3 px-4 text-gray-600">Unlimited</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Technical support</td>
                    <td className="text-center py-3 px-4 text-gray-600">Priority</td>
                    <td className="text-center py-3 px-4 text-gray-600">Premium</td>
                    <td className="text-center py-3 px-4 text-gray-600">24/7</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Assisted installation</td>
                    <td className="text-center py-3 px-4">
                      <span className="text-gray-300">✗</span>
                    </td>
                    <td className="text-center py-3 px-4">
                      <Check className="h-5 w-5 text-green-600 inline" />
                    </td>
                    <td className="text-center py-3 px-4">
                      <Check className="h-5 w-5 text-green-600 inline" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Advanced customization</td>
                    <td className="text-center py-3 px-4">
                      <span className="text-gray-300">✗</span>
                    </td>
                    <td className="text-center py-3 px-4 text-gray-600">Basic</td>
                    <td className="text-center py-3 px-4">
                      <Check className="h-5 w-5 text-green-600 inline" />
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Training included</td>
                    <td className="text-center py-3 px-4">
                      <span className="text-gray-300">✗</span>
                    </td>
                    <td className="text-center py-3 px-4">
                      <span className="text-gray-300">✗</span>
                    </td>
                    <td className="text-center py-3 px-4">
                      <Check className="h-5 w-5 text-green-600 inline" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-slate-900 to-green-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Ready to Transform Your Press?
              </h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed opacity-90">
                Join the academic institutions that already trust Academic Theme OMP
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="#pricing"
                className="inline-flex h-10 items-center justify-center rounded-md bg-green-600 text-white px-8 text-sm font-medium shadow transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Purchase License Now
              </Link>
              <a
                href="https://docs.paideiastudio.net/AcademicTheme/AcademicTheme.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-md border border-white/30 bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                View Documentation
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
