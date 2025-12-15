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
  whatsapp: z.string().optional(),
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
      whatsapp: "",
      inquiryType: "",
      message: "",
    },
  })

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true)

    try {
      const formData = new FormData()
      formData.append('access_key', '194037d0-d506-44a0-8c7f-64dd6b72273c')
      formData.append('name', values.name)
      formData.append('email', values.email)
      formData.append('whatsapp', values.whatsapp || 'Not provided')
      formData.append('inquiry_type', values.inquiryType)
      formData.append('message', values.message)
      formData.append('subject', `New ${values.inquiryType} inquiry from ${values.name} - Paideia Hosting`)
      formData.append('from_name', 'Paideia Hosting - Contact Form')
      formData.append('_template', 'table')
      formData.append('_captcha', 'false')
      
      // Auto-response to client
      formData.append('_autoresponse', 'true')
      formData.append('_autoresponse_subject', 'We received your inquiry - Paideia Hosting')
      formData.append('_autoresponse_message', `Hello ${values.name},\n\nThank you for contacting Paideia Hosting. We have received your inquiry regarding ${values.inquiryType} and will get back to you within 24 hours.\n\nBest regards,\nPaideia Hosting Team\ncontact@paideiahosting.net`)

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      })

      const result = await response.json()

      if (response.ok && result.success) {
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
      toast({
        title: "Error sending message",
        description: "Failed to send message. Please try again or contact us at contact@paideiahosting.net",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
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
          name="whatsapp"
          render={({ field }) => (
            <FormItem>
              <FormLabel>WhatsApp (Optional)</FormLabel>
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
        
        {/* Debug info - remove in production */}
        <div className="text-xs text-muted-foreground text-center">
          Form status: {isSubmitting ? 'Submitting...' : 'Ready'}
        </div>
      </form>
    </Form>
  )
}