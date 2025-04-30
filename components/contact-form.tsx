"use client"

import { useState } from "react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "sonner"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
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
    setTimeout(() => {
      console.log(values)
      setIsSubmitting(false)
      form.reset()
      toast("Message sent!", {
        description: "We'll get back to you as soon as possible.",
      })
    }, 1500)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {["name", "email", "company", "message"].map((fieldName, index) => {
          const isTextarea = fieldName === "message"
          const placeholderMap = {
            name: "Your name",
            email: "your.email@example.com",
            company: "Your company (optional)",
            message: "Tell us about your project or inquiry...",
          }

          return (
            <FormField
              key={index}
              control={form.control}
              name={fieldName as any}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="dark:text-white">{fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}</FormLabel>
                  <FormControl>
                    {isTextarea ? (
                      <Textarea
                        {...field}
                        placeholder={placeholderMap[fieldName as keyof typeof placeholderMap]}
                        className="min-h-[120px] border-gray-300 focus-visible:ring-[#239dcf]"
                      />
                    ) : (
                      <Input
                        {...field}
                        placeholder={placeholderMap[fieldName as keyof typeof placeholderMap]}
                        className="border-gray-300 focus-visible:ring-[#239dcf]"
                      />
                    )}
                  </FormControl>
                  <FormMessage className="text-[#dc3054] dark:text-[#dc3054]" />
                </FormItem>
              )}
            />
          )
        })}

        <FormField
          control={form.control}
          name="requestIncreasedLimit"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="text-black dark:text-white">I would like to request increased API request limits</FormLabel>
              </div>
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full bg-li_btn_color dark:bg-da_btn_color hover:bg-btn_hover_color dark:hover:bg-btn_hover_color text-white dark:text-white border-none transition-all duration-300"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </Form>
  )
}
