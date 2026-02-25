"use client"

import type React from "react"
import { useState } from "react"
import { Search, CheckCircle2, Info } from "lucide-react"
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
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
              <div className="space-y-3 flex-1">
                <div>
                  <p className="font-semibold text-green-900">
                    Great choice! Domain "{domain}" looks available.
                  </p>
                  <p className="text-sm text-green-700 mt-1">
                    You can register this domain when you purchase any of our hosting packages.
                  </p>
                </div>
                
                <div className="flex items-center gap-2 p-3 bg-blue-50 border border-blue-200 rounded-md">
                  <Info className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <p className="text-sm text-blue-900">
                    Domain registration is included with all our annual hosting plans
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
                      Contact Sales
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