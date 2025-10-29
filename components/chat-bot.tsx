"use client"

import { useState, useEffect } from "react"
import { Send, X, ChevronDown, ChevronUp, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

let messageCounter = 0

export function ChatBot() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [showHistory, setShowHistory] = useState(false)
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const query = async (question: string) => {
    const response = await fetch(
      "https://flowise.paideiastudio.net/api/v1/prediction/8a28827a-5d5f-47bf-9332-4d51a9cafb2e",
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

    const userMessage: Message = {
      id: `msg-${++messageCounter}`,
      text: input,
      isUser: true,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setIsLoading(true)
    const question = input
    setInput("")

    // Add typing indicator
    const typingMessage: Message = {
      id: "typing-indicator",
      text: "typing",
      isUser: false,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, typingMessage])

    try {
      const result = await query(question)
      const botMessage: Message = {
        id: `msg-${++messageCounter}`,
        text: result.text || result.answer || "I'm sorry, I couldn't process your request.",
        isUser: false,
        timestamp: new Date()
      }
      setMessages(prev => prev.filter(m => !m.text.includes("typing")).concat(botMessage))
    } catch (error) {
      const errorMessage: Message = {
        id: `msg-${++messageCounter}`,
        text: "Sorry, I'm having trouble connecting. Please try again later.",
        isUser: false,
        timestamp: new Date()
      }
      setMessages(prev => prev.filter(m => !m.text.includes("typing")).concat(errorMessage))
    } finally {
      setIsLoading(false)
    }
  }

  const lastUserMessage = messages.filter(m => m.isUser).slice(-1)[0]
  const lastBotMessage = messages.filter(m => !m.isUser).slice(-1)[0]

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
          {showHistory && messages.length > 0 && (
            <div className="max-h-60 overflow-y-auto p-3 border-b bg-gray-50 rounded-t-md space-y-2">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[80%] p-2 rounded-lg text-[15px] ${
                    message.isUser
                      ? "bg-black text-white"
                      : "bg-white text-gray-700 border"
                  }`}>
                    {message.text === "typing" ? (
                      <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
                      </div>
                    ) : message.text}
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {!showHistory && (lastUserMessage || lastBotMessage) && (
            <div className="p-3 border-b bg-gray-50 rounded-t-md space-y-2">
              {lastUserMessage && (
                <div className="flex justify-end">
                  <div className="max-w-[80%] p-2 rounded-lg text-[15px] bg-black text-white">
                    You: {lastUserMessage.text}
                  </div>
                </div>
              )}
              {lastBotMessage && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] p-2 rounded-lg text-[15px] bg-white text-gray-700 border">
                    {lastBotMessage.text === "typing" ? (
                      <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
                      </div>
                    ) : lastBotMessage.text}
                  </div>
                </div>
              )}
            </div>
          )}
          
          <div className="p-3">
            <div className="flex items-center space-x-2">
              {messages.length > 0 && (
                <Button
                  onClick={() => setShowHistory(!showHistory)}
                  variant="ghost"
                  size="sm"
                  className="hover:bg-gray-100"
                >
                  {showHistory ? <ChevronDown className="h-4 w-4" /> : <MessageSquare className="h-4 w-4" />}
                </Button>
              )}
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