"use client"

import type React from "react"
import { useState } from "react"
import { Search, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export interface DomainSearchTexts {
  placeholder: string
  search: string
  registrationBefore: string
  registrationAfter: string
  verify: string
  cost: string
  note: string
  viewPlans: string
  contactTeam: string
}

const defaultTexts: DomainSearchTexts = {
  placeholder: "yourdomain.com",
  search: "Search",
  registrationBefore: "Domain registration for \"",
  registrationAfter: "\"",
  verify:
    "We will verify availability and register this domain for you. If it's not available, we'll present alternative options.",
  cost: "💰 Domain cost: $40 USD/year (additional to any hosting plan)",
  note: "📝 Please leave a note when purchasing your hosting plan or contact our team directly.",
  viewPlans: "View Hosting Plans",
  contactTeam: "Contact Team",
}

interface DomainSearchProps {
  texts?: DomainSearchTexts
  pricingHref?: string
  contactHref?: string
}

export function DomainSearch({
  texts = defaultTexts,
  pricingHref = "/pricing",
  contactHref = "/contact",
}: DomainSearchProps = {}) {
  const [domain, setDomain] = useState("")
  const [showMessage, setShowMessage] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!domain) return
    
    setShowMessage(true)
  }

  return (
    <div className="w-full max-w-2xl mx-auto space-y-4">
      <form onSubmit={handleSearch} className="flex w-full items-center space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="text"
            placeholder={texts.placeholder}
            className="pl-8"
            value={domain}
            onChange={(e) => setDomain(e.target.value.toLowerCase().trim())}
          />
        </div>
        <Button type="submit">
          {texts.search}
        </Button>
      </form>

      {showMessage && domain && (
        <Card className="border-blue-200 bg-blue-50">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <Info className="h-6 w-6 text-blue-600 mt-0.5 flex-shrink-0" />
              <div className="space-y-3 flex-1">
                <div>
                  <p className="font-semibold text-blue-900">
                    {texts.registrationBefore}{domain}{texts.registrationAfter}
                  </p>
                  <p className="text-sm text-blue-700 mt-2">
                    {texts.verify}
                  </p>
                </div>
                
                <div className="p-3 bg-white border border-blue-200 rounded-md space-y-2">
                  <p className="text-sm font-medium text-gray-900">
                    {texts.cost}
                  </p>
                  <p className="text-sm text-gray-700">
                    {texts.note}
                  </p>
                </div>

                <div className="flex gap-2 pt-2">
                  <Link href={pricingHref} className="flex-1">
                    <Button className="w-full">
                      {texts.viewPlans}
                    </Button>
                  </Link>
                  <Link href={contactHref} className="flex-1">
                    <Button variant="outline" className="w-full">
                      {texts.contactTeam}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}