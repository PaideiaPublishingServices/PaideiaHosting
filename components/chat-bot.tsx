"use client"

import { useState } from "react"
import { Send, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function ChatBot() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [response, setResponse] = useState("")

  const query = async (question: string) => {
    const response = await fetch(
      "https://flowise.paideiastudio.net/api/v1/prediction/24fd6735-221f-4219-bd96-f231b28ea31d",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ question })
      }
    )
    const result = await response.json()
    return result
  }

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return

    setIsLoading(true)
    const question = input
    setInput("")

    try {
      const result = await query(question)
      setResponse(result.text || result.answer || "I'm sorry, I couldn't process your request.")
    } catch (error) {
      setResponse("Sorry, I'm having trouble connecting. Please try again later.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  if (isCollapsed) {
    return (
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        <Button
          onClick={() => setIsCollapsed(false)}
          variant="outline"
          size="sm"
          className="bg-white shadow-lg"
        >
          Ask about our services
          <ChevronDown className="h-4 w-4 ml-2" />
        </Button>
      </div>
    )
  }

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md px-4">
      <div className="gradient-border shadow-lg">
        <div className="gradient-border-content">
          {response && (
            <div className="p-3 border-b bg-gray-50 rounded-t-md">
              <div className="flex items-start justify-between">
                <p className="text-sm text-gray-700 flex-1">{response}</p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setResponse("")}
                  className="ml-2 h-6 w-6 p-0"
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            </div>
          )}
          <div className="p-3">
            <div className="flex items-center space-x-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about our services..."
                disabled={isLoading}
                className="flex-1 bg-black text-white border-gray-600 placeholder:text-gray-400"
              />
              <Button
                onClick={sendMessage}
                disabled={!input.trim() || isLoading}
                size="sm"
                className="bg-black text-white hover:bg-gray-800"
              >
                {isLoading ? "..." : <Send className="h-4 w-4" />}
              </Button>
              <Button
                onClick={() => setIsCollapsed(true)}
                variant="ghost"
                size="sm"
                className="hover:bg-gray-100"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}