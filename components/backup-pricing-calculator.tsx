"use client"

import { useState } from "react"
import { Check } from "lucide-react"

export function BackupPricingCalculator() {
  const [plan, setPlan] = useState<"preservation" | "active">("preservation")
  
  // Preservation Plus state
  const [preservationGB, setPreservationGB] = useState(500)
  const [preservationRetention, setPreservationRetention] = useState(5)
  const [preservationFrequency, setPreservationFrequency] = useState<"monthly" | "quarterly" | "semiannual" | "annual">("monthly")
  
  // Active Guard state
  const [activeGB, setActiveGB] = useState(500)
  const [activeRetention, setActiveRetention] = useState<6 | 12 | 24>(12)
  const [activeCaptureFreq, setActiveCaptureFreq] = useState<"daily" | "twice-weekly" | "weekly">("daily")

  // Preservation Plus pricing logic
  const getPreservationBasePrice = () => {
    if (preservationRetention <= 2) return 12
    if (preservationRetention <= 5) return 10
    if (preservationRetention <= 10) return 8
    return 7
  }

  const getPreservationFrequencyMultiplier = () => {
    switch (preservationFrequency) {
      case "monthly": return 1.0
      case "quarterly": return 0.85
      case "semiannual": return 0.70
      case "annual": return 0.60
      default: return 1.0
    }
  }

  const calculatePreservationPrice = () => {
    const basePrice = getPreservationBasePrice()
    const multiplier = getPreservationFrequencyMultiplier()
    const annualPrice = preservationGB * basePrice * multiplier
    const setupFee = preservationGB < 300 ? 600 : 0
    
    return {
      annual: annualPrice,
      setupFee,
      totalFirstYear: annualPrice + setupFee,
      pricePerGB: basePrice * multiplier,
      capturesPerYear: preservationFrequency === "monthly" ? 12 : 
                       preservationFrequency === "quarterly" ? 4 :
                       preservationFrequency === "semiannual" ? 2 : 1
    }
  }

  // Active Guard pricing logic
  const getActiveMonthlyRate = () => {
    if (activeCaptureFreq === "daily") {
      if (activeRetention === 6) return 0.50
      if (activeRetention === 12) return 0.46
      return 0.42
    }
    if (activeCaptureFreq === "twice-weekly") {
      if (activeRetention === 6) return 0.42
      if (activeRetention === 12) return 0.38
      return 0.35
    }
    // weekly
    if (activeRetention === 6) return 0.36
    if (activeRetention === 12) return 0.32
    return 0.28
  }

  const calculateActivePrice = () => {
    const monthlyRate = getActiveMonthlyRate()
    const monthlyPrice = activeGB * monthlyRate
    const annualPrice = monthlyPrice * 12
    const setupFee = activeGB < 300 ? 800 : 0
    
    return {
      monthly: monthlyPrice,
      annual: annualPrice,
      setupFee,
      totalFirstYear: annualPrice + setupFee,
      pricePerGBMonth: monthlyRate,
      capturesPerYear: activeCaptureFreq === "daily" ? 365 : 
                       activeCaptureFreq === "twice-weekly" ? 104 : 52
    }
  }

  const preservationPricing = calculatePreservationPrice()
  const activePricing = calculateActivePrice()

  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Calculate Your Price</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Adjust the parameters to see pricing for your specific needs
            </p>
          </div>
        </div>

        {/* Plan Selector */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-4 p-1 bg-gray-100 rounded-lg">
            <button 
              onClick={() => setPlan("preservation")}
              className={`px-6 py-3 text-sm font-medium rounded-md transition-colors ${
                plan === "preservation" 
                  ? "bg-primary text-primary-foreground shadow-sm" 
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Preservation Plus
            </button>
            <button 
              onClick={() => setPlan("active")}
              className={`px-6 py-3 text-sm font-medium rounded-md transition-colors ${
                plan === "active" 
                  ? "bg-primary text-primary-foreground shadow-sm" 
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Active Guard
            </button>
          </div>
        </div>

        {/* Preservation Plus Calculator */}
        {plan === "preservation" && (
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-2">
              {/* Controls */}
              <div className="space-y-6">
                <div className="rounded-lg border bg-background p-6 shadow-sm">
                  <h3 className="text-lg font-bold mb-6">Configure Your Plan</h3>
                  
                  {/* Storage Slider */}
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                      <label className="text-sm font-medium">Storage Volume</label>
                      <span className="text-lg font-bold text-primary">{preservationGB} GB</span>
                    </div>
                    <input
                      type="range"
                      min="100"
                      max="5000"
                      step="50"
                      value={preservationGB}
                      onChange={(e) => setPreservationGB(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>100 GB</span>
                      <span>5,000 GB</span>
                    </div>
                  </div>

                  {/* Retention Slider */}
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                      <label className="text-sm font-medium">Retention Period</label>
                      <span className="text-lg font-bold text-primary">{preservationRetention} years</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      step="1"
                      value={preservationRetention}
                      onChange={(e) => setPreservationRetention(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>1 year</span>
                      <span>10+ years</span>
                    </div>
                  </div>

                  {/* Capture Frequency */}
                  <div className="space-y-3">
                    <label className="text-sm font-medium">Capture Frequency</label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setPreservationFrequency("monthly")}
                        className={`px-3 py-2 text-sm rounded-md border ${
                          preservationFrequency === "monthly"
                            ? "border-primary bg-primary/10 text-primary font-medium"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        Monthly (12/year)
                      </button>
                      <button
                        onClick={() => setPreservationFrequency("quarterly")}
                        className={`px-3 py-2 text-sm rounded-md border ${
                          preservationFrequency === "quarterly"
                            ? "border-primary bg-primary/10 text-primary font-medium"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        Quarterly (4/year)
                      </button>
                      <button
                        onClick={() => setPreservationFrequency("semiannual")}
                        className={`px-3 py-2 text-sm rounded-md border ${
                          preservationFrequency === "semiannual"
                            ? "border-primary bg-primary/10 text-primary font-medium"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        Semi-annual (2/year)
                      </button>
                      <button
                        onClick={() => setPreservationFrequency("annual")}
                        className={`px-3 py-2 text-sm rounded-md border ${
                          preservationFrequency === "annual"
                            ? "border-primary bg-primary/10 text-primary font-medium"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        Annual (1/year)
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pricing Display */}
              <div className="space-y-4">
                <div className="rounded-lg border-2 border-primary bg-background p-6 shadow-lg">
                  <h3 className="text-lg font-bold mb-4">Your Pricing</h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-baseline pb-3 border-b">
                      <span className="text-gray-600">Annual Cost</span>
                      <span className="text-3xl font-bold text-primary">
                        ${preservationPricing.annual.toLocaleString()}
                      </span>
                    </div>

                    {preservationPricing.setupFee > 0 && (
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">Setup Fee (one-time)</span>
                        <span className="font-semibold">+${preservationPricing.setupFee}</span>
                      </div>
                    )}

                    <div className="flex justify-between items-center pt-3 border-t">
                      <span className="font-medium">Total First Year</span>
                      <span className="text-2xl font-bold">
                        ${preservationPricing.totalFirstYear.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Price per GB/year:</span>
                      <span className="font-medium">${preservationPricing.pricePerGB.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Captures per year:</span>
                      <span className="font-medium">{preservationPricing.capturesPerYear}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total retention:</span>
                      <span className="font-medium">{preservationRetention} years</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <a
                      href="/contact"
                      className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    >
                      Request Quote
                    </a>
                  </div>
                </div>

                <div className="rounded-lg border bg-gray-50 p-4">
                  <p className="text-xs text-gray-600 mb-2 font-medium">Includes:</p>
                  <ul className="space-y-1 text-xs text-gray-600">
                    <li className="flex items-center gap-2">
                      <Check className="h-3 w-3 text-primary" />
                      <span>AWS Deep Archive storage</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-3 w-3 text-primary" />
                      <span>Automated capture schedule</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-3 w-3 text-primary" />
                      <span>Monthly monitoring reports</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-3 w-3 text-primary" />
                      <span>1 free recovery every 2 years</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-3 w-3 text-primary" />
                      <span>72-hour recovery SLA</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Active Guard Calculator */}
        {plan === "active" && (
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-2">
              {/* Controls */}
              <div className="space-y-6">
                <div className="rounded-lg border bg-background p-6 shadow-sm">
                  <h3 className="text-lg font-bold mb-6">Configure Your Plan</h3>
                  
                  {/* Storage Slider */}
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                      <label className="text-sm font-medium">Storage Volume</label>
                      <span className="text-lg font-bold text-primary">{activeGB} GB</span>
                    </div>
                    <input
                      type="range"
                      min="100"
                      max="5000"
                      step="50"
                      value={activeGB}
                      onChange={(e) => setActiveGB(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>100 GB</span>
                      <span>5,000 GB</span>
                    </div>
                  </div>

                  {/* Retention Period */}
                  <div className="space-y-3 mb-6">
                    <label className="text-sm font-medium">Retention Period</label>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        onClick={() => setActiveRetention(6)}
                        className={`px-3 py-2 text-sm rounded-md border ${
                          activeRetention === 6
                            ? "border-primary bg-primary/10 text-primary font-medium"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        6 months
                      </button>
                      <button
                        onClick={() => setActiveRetention(12)}
                        className={`px-3 py-2 text-sm rounded-md border ${
                          activeRetention === 12
                            ? "border-primary bg-primary/10 text-primary font-medium"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        1 year
                      </button>
                      <button
                        onClick={() => setActiveRetention(24)}
                        className={`px-3 py-2 text-sm rounded-md border ${
                          activeRetention === 24
                            ? "border-primary bg-primary/10 text-primary font-medium"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        2 years
                      </button>
                    </div>
                  </div>

                  {/* Capture Frequency */}
                  <div className="space-y-3">
                    <label className="text-sm font-medium">Capture Frequency</label>
                    <div className="space-y-2">
                      <button
                        onClick={() => setActiveCaptureFreq("daily")}
                        className={`w-full px-3 py-2 text-sm rounded-md border text-left ${
                          activeCaptureFreq === "daily"
                            ? "border-primary bg-primary/10 text-primary font-medium"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        Daily (365/year)
                      </button>
                      <button
                        onClick={() => setActiveCaptureFreq("twice-weekly")}
                        className={`w-full px-3 py-2 text-sm rounded-md border text-left ${
                          activeCaptureFreq === "twice-weekly"
                            ? "border-primary bg-primary/10 text-primary font-medium"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        Twice Weekly (104/year)
                      </button>
                      <button
                        onClick={() => setActiveCaptureFreq("weekly")}
                        className={`w-full px-3 py-2 text-sm rounded-md border text-left ${
                          activeCaptureFreq === "weekly"
                            ? "border-primary bg-primary/10 text-primary font-medium"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        Weekly (52/year)
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pricing Display */}
              <div className="space-y-4">
                <div className="rounded-lg border-2 border-blue-300 bg-background p-6 shadow-lg">
                  <h3 className="text-lg font-bold mb-4">Your Pricing</h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-baseline pb-3 border-b">
                      <span className="text-gray-600">Monthly Cost</span>
                      <span className="text-3xl font-bold text-primary">
                        ${activePricing.monthly.toLocaleString()}
                      </span>
                    </div>

                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">Annual Cost</span>
                      <span className="font-semibold">${activePricing.annual.toLocaleString()}</span>
                    </div>

                    {activePricing.setupFee > 0 && (
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">Setup Fee (one-time)</span>
                        <span className="font-semibold">+${activePricing.setupFee}</span>
                      </div>
                    )}

                    <div className="flex justify-between items-center pt-3 border-t">
                      <span className="font-medium">Total First Year</span>
                      <span className="text-2xl font-bold">
                        ${activePricing.totalFirstYear.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Price per GB/month:</span>
                      <span className="font-medium">${activePricing.pricePerGBMonth.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Captures per year:</span>
                      <span className="font-medium">{activePricing.capturesPerYear}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total retention:</span>
                      <span className="font-medium">{activeRetention} months</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <a
                      href="/contact"
                      className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    >
                      Request Quote
                    </a>
                  </div>
                </div>

                <div className="rounded-lg border bg-gray-50 p-4">
                  <p className="text-xs text-gray-600 mb-2 font-medium">Includes:</p>
                  <ul className="space-y-1 text-xs text-gray-600">
                    <li className="flex items-center gap-2">
                      <Check className="h-3 w-3 text-primary" />
                      <span>Intelligent storage tiering</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-3 w-3 text-primary" />
                      <span>Automated capture schedule</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-3 w-3 text-primary" />
                      <span>Monthly monitoring reports</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-3 w-3 text-primary" />
                      <span>Unlimited recent data recovery</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-3 w-3 text-primary" />
                      <span>30min-2h recovery for recent data</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Comparison Note */}
        <div className="mx-auto max-w-4xl mt-12">
          <div className="rounded-lg bg-blue-50 border border-blue-200 p-6 text-center">
            <p className="text-sm text-gray-700">
              <strong>Note:</strong> These are standard pricing estimates. Setup fees apply only for volumes under 300 GB. 
              Multi-year contracts receive additional discounts. Contact us for custom configurations and bundle pricing.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}