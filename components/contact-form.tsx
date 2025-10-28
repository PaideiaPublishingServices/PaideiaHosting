"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().optional(),
  inquiryType: z.string().min(1, {
    message: "Please select an inquiry type.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

type FormValues = z.infer<typeof formSchema>

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      inquiryType: "",
      message: "",
    },
  })

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true)

    try {
      // Web3Forms integration
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          // Your Web3Forms access key
          access_key: '194037d0-d506-44a0-8c7f-64dd6b72273c',

          // Form data
          name: values.name,
          email: values.email,
          phone: values.phone || 'Not provided',
          inquiry_type: values.inquiryType,
          message: values.message,

          // Email configuration
          subject: `New ${values.inquiryType} inquiry from ${values.name} - Paideia Hosting`,
          from_name: 'Paideia Hosting - Contact Form',

          // Optional fields
          _template: 'table',
          _captcha: false,

          // Auto-response configuration
          _autoresponse: true,
          _autoresponse_subject: 'We received your inquiry - Paideia Hosting',
          _autoresponse_message: `Hello ${values.name},\n\nThank you for contacting Paideia Hosting. We have received your inquiry regarding ${values.inquiryType} and will get back to you within 24 hours.\n\nBest regards,\nPaideia Hosting Team\ninfo@paideiahosting.net`,

          // Metadata
          source: 'Website Contact Form',
          timestamp: new Date().toISOString(),
          page_url: typeof window !== 'undefined' ? window.location.href : '',
        }),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setIsSubmitting(false)
        form.reset()

        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you as soon as possible. Check your email for confirmation.",
        })
      } else {
        throw new Error(result.message || 'Failed to send message')
      }

    } catch (error: any) {
      console.error('Error sending form:', error)
      setIsSubmitting(false)

      toast({
        title: "Error sending message",
        description: error.message?.includes('access_key')
          ? "Service configuration error. Please try again later or contact us directly."
          : "Failed to send message. Please try again or contact us at info@paideiahosting.net",
        variant: "destructive",
      })
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="john.doe@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone (Optional)</FormLabel>
              <FormControl>
                <Input placeholder="+1 (555) 123-4567" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="inquiryType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Inquiry Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an inquiry type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="general">General Inquiry</SelectItem>
                  <SelectItem value="sales">Sales</SelectItem>
                  <SelectItem value="support">Technical Support</SelectItem>
                  <SelectItem value="custom">Custom Solutions</SelectItem>
                  <SelectItem value="billing">Billing</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Please describe your inquiry in detail..."
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>
    </Form>
  )
}

