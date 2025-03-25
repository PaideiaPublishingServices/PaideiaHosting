"use client"

import type React from "react"

import { useState } from "react"
import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function DomainSearch() {
  const [domain, setDomain] = useState("")
  const [isSearching, setIsSearching] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!domain) return

    setIsSearching(true)

    // This is a placeholder for the Namecheap API integration
    setTimeout(() => {
      setIsSearching(false)
      // Here you would handle the actual domain search results
      alert(`Domain search for ${domain} will be integrated with Namecheap API`)
    }, 1000)
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSearch} className="flex w-full max-w-sm items-center space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
          <Input
            type="text"
            placeholder="yourdomain.com"
            className="pl-8"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
          />
        </div>
        <Button type="submit" disabled={isSearching}>
          {isSearching ? "Searching..." : "Search"}
        </Button>
      </form>
    </div>
  )
}

