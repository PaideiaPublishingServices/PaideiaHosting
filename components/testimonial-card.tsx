import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Quote } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  institution: string
}

export function TestimonialCard({ quote, author, institution }: TestimonialCardProps) {
  return (
    <Card className="flex flex-col h-full">
      <CardContent className="pt-6">
        <Quote className="h-8 w-8 text-primary/20 mb-2" />
        <p className="text-gray-700 dark:text-gray-300">{quote}</p>
      </CardContent>
      <CardFooter className="flex flex-col items-start mt-auto">
        <p className="font-semibold">{author}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">{institution}</p>
      </CardFooter>
    </Card>
  )
}

