"use client"

import type React from "react"
import { useState } from "react"
import { Search, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export function DomainSearch() {
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
            placeholder="yourdomain.com"
            className="pl-8"
            value={domain}
            onChange={(e) => setDomain(e.target.value.toLowerCase().trim())}
          />
        </div>
        <Button type="submit">
          Search
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
                    Domain registration for "{domain}"
                  </p>
                  <p className="text-sm text-blue-700 mt-2">
                    We will verify availability and register this domain for you. If it's not available, we'll present alternative options.
                  </p>
                </div>
                
                <div className="p-3 bg-white border border-blue-200 rounded-md space-y-2">
                  <p className="text-sm font-medium text-gray-900">
                    💰 Domain cost: $40 USD/year (additional to any hosting plan)
                  </p>
                  <p className="text-sm text-gray-700">
                    📝 Please leave a note when purchasing your hosting plan or contact our team directly.
                  </p>
                </div>

                <div className="flex gap-2 pt-2">
                  <Link href="/pricing" className="flex-1">
                    <Button className="w-full">
                      View Hosting Plans
                    </Button>
                  </Link>
                  <Link href="/contact" className="flex-1">
                    <Button variant="outline" className="w-full">
                      Contact Team
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