"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface PricingToggleProps {
  onToggle: (isAnnual: boolean) => void
  className?: string
  labels?: { monthly: string; annual: string; save: string }
}

export function PricingToggle({
  onToggle,
  className = "",
  labels = { monthly: "Monthly", annual: "Annual", save: "Save 10%" },
}: PricingToggleProps) {
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
        {labels.monthly}
      </Button>
      <Button
        variant={isAnnual ? "default" : "outline"}
        size="sm"
        onClick={() => handleToggle(true)}
        className="px-4 py-2"
      >
        {labels.annual}
        <span className="ml-1 text-xs bg-green-100 text-green-800 px-1.5 py-0.5 rounded-full">
          {labels.save}
        </span>
      </Button>
    </div>
  )
}