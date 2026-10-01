"use client"

import { useMemo, useState } from "react"
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

export interface ContactFormTexts {
  fields: {
    name: { label: string; placeholder: string }
    email: { label: string; placeholder: string }
    whatsapp: { label: string; placeholder: string }
    inquiryType: { label: string; placeholder: string }
    message: { label: string; placeholder: string }
  }
  inquiryTypes: {
    general: string
    sales: string
    support: string
    custom: string
    billing: string
  }
  validation: {
    name: string
    email: string
    inquiryType: string
    message: string
  }
  submit: string
  sending: string
  status: { label: string; submitting: string; ready: string }
  toast: {
    successTitle: string
    successDescription: string
    errorTitle: string
    errorDescription: string
  }
}

function createFormSchema(validation: ContactFormTexts["validation"]) {
  return z.object({
    name: z.string().min(2, {
      message: validation.name,
    }),
    email: z.string().email({
      message: validation.email,
    }),
    whatsapp: z.string().optional(),
    inquiryType: z.string().min(1, {
      message: validation.inquiryType,
    }),
    message: z.string().min(10, {
      message: validation.message,
    }),
  })
}

type FormValues = z.infer<ReturnType<typeof createFormSchema>>

interface ContactFormProps {
  texts: ContactFormTexts
}

export function ContactForm({ texts }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const formSchema = useMemo(() => createFormSchema(texts.validation), [texts.validation])

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
          title: texts.toast.successTitle,
          description: texts.toast.successDescription,
        })
      } else {
        throw new Error(result.message || 'Failed to send message')
      }

    } catch (error: any) {
      console.error('Error sending form:', error)
      toast({
        title: texts.toast.errorTitle,
        description: texts.toast.errorDescription,
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
              <FormLabel>{texts.fields.name.label}</FormLabel>
              <FormControl>
                <Input placeholder={texts.fields.name.placeholder} {...field} />
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
              <FormLabel>{texts.fields.email.label}</FormLabel>
              <FormControl>
                <Input placeholder={texts.fields.email.placeholder} {...field} />
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
              <FormLabel>{texts.fields.whatsapp.label}</FormLabel>
              <FormControl>
                <Input placeholder={texts.fields.whatsapp.placeholder} {...field} />
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
              <FormLabel>{texts.fields.inquiryType.label}</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={texts.fields.inquiryType.placeholder} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="general">{texts.inquiryTypes.general}</SelectItem>
                  <SelectItem value="sales">{texts.inquiryTypes.sales}</SelectItem>
                  <SelectItem value="support">{texts.inquiryTypes.support}</SelectItem>
                  <SelectItem value="custom">{texts.inquiryTypes.custom}</SelectItem>
                  <SelectItem value="billing">{texts.inquiryTypes.billing}</SelectItem>
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
              <FormLabel>{texts.fields.message.label}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={texts.fields.message.placeholder}
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
              {texts.sending}
            </>
          ) : (
            texts.submit
          )}
        </Button>
        
        {/* Debug info - remove in production */}
        <div className="text-xs text-muted-foreground text-center">
          {texts.status.label} {isSubmitting ? texts.status.submitting : texts.status.ready}
        </div>
      </form>
    </Form>
  )
}