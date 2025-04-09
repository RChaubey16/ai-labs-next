"use client"

import { useState } from "react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { Checkbox } from "@/components/ui/checkbox"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  company: z.string().optional(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
  requestIncreasedLimit: z.boolean().default(false),
})

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
      requestIncreasedLimit: false,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      console.log(values)
      setIsSubmitting(false)
      form.reset()
      toast("Message sent!",{
        description: "We'll get back to you as soon as possible.",
      })
    }, 1500)
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-white p-6 rounded-lg shadow-sm">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" {...field} className="border-qed-gray/30 focus-visible:ring-qed-red" />
                </FormControl>
                <FormMessage className="text-qed-red" />
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
                  <Input
                    placeholder="your.email@example.com"
                    {...field}
                    className="border-qed-gray/30 focus-visible:ring-qed-red"
                  />
                </FormControl>
                <FormMessage className="text-qed-red" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company (Optional)</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your company"
                    {...field}
                    className="border-qed-gray/30 focus-visible:ring-qed-red"
                  />
                </FormControl>
                <FormMessage className="text-qed-red" />
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
                    placeholder="Tell us about your project or inquiry..."
                    className="min-h-[120px] border-qed-gray/30 focus-visible:ring-qed-red"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-qed-red" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="requestIncreasedLimit"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>I would like to request increased API request limits</FormLabel>
                </div>
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full bg-qed-red hover:bg-qed-red/90" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </Form>
    </>
  )
}

