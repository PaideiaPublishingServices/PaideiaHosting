"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface PricingToggleProps {
  onToggle: (isAnnual: boolean) => void
  className?: string
}

export function PricingToggle({ onToggle, className = "" }: PricingToggleProps) {
  const [isAnnual, setIsAnnual] = useState(false)

  const handleToggle = (annual: boolean) => {
    setIsAnnual(annual)
    onToggle(annual)
  }

  return (
    <div className={`flex items-center justify-center space-x-1 ${className}`}>
      <Button
        variant={!isAnnual ? "default" : "outline"}
        size="sm"
        onClick={() => handleToggle(false)}
        className="px-4 py-2"
      >
        Monthly
      </Button>
      <Button
        variant={isAnnual ? "default" : "outline"}
        size="sm"
        onClick={() => handleToggle(true)}
        className="px-4 py-2"
      >
        Annual
        <span className="ml-1 text-xs bg-green-100 text-green-800 px-1.5 py-0.5 rounded-full">
          Save 10%
        </span>
      </Button>
    </div>
  )
}