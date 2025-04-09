"use client"

import { useState } from "react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { InfoIcon } from "lucide-react"

const signInSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
})

const signUpSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
})

export default function SignInCTA() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const signInForm = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const signUpForm = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  })

  function onSignIn(values: z.infer<typeof signInSchema>) {
    setIsSubmitting(true)

    // Simulate sign in
    setTimeout(() => {
      console.log(values)
      setIsSubmitting(false)
      signInForm.reset()
      toast("Signed in successfully!",{
        description: "You now have access to all AI demos.",
      })
    }, 1500)
  }

  function onSignUp(values: z.infer<typeof signUpSchema>) {
    setIsSubmitting(true)

    // Simulate sign up
    setTimeout(() => {
      console.log(values)
      setIsSubmitting(false)
      signUpForm.reset()
      toast("Account created successfully!",{
        description: "You now have access to all AI demos with 50 requests per day.",
      })
    }, 1500)
  }

  return (
    <div className="flex flex-col md:flex-row gap-8 items-start">
      <div className="flex-1 space-y-4">
        <h2 className="text-2xl font-bold">Why Sign In?</h2>
        <p className="text-qed-gray">
          The AI applications on this site are connected to APIs that are costly to run. To ensure fair usage and
          maintain service quality, we require users to create an account.
        </p>
        <div className="bg-white p-4 rounded-lg border border-qed-gray/20 flex items-start gap-3">
          <InfoIcon className="h-5 w-5 text-qed-red mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="font-medium">Free Account Benefits:</h3>
            <ul className="list-disc list-inside text-qed-gray mt-2 space-y-1">
              <li>Access to all AI demos and experiments</li>
              <li>50 requests per day (resets daily)</li>
              <li>Contact us to request increased limits</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex-1 w-full md:max-w-md">
        <Card>
          <CardHeader>
            <CardTitle>Account Access</CardTitle>
            <CardDescription>Sign in to your account or create a new one to access our AI demos.</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="signin" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="signin">Sign In</TabsTrigger>
                <TabsTrigger value="signup">Create Account</TabsTrigger>
              </TabsList>

              <TabsContent value="signin">
                <Form {...signInForm}>
                  <form onSubmit={signInForm.handleSubmit(onSignIn)} className="space-y-4 mt-4">
                    <FormField
                      control={signInForm.control}
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
                      control={signInForm.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input
                              type="password"
                              {...field}
                              className="border-qed-gray/30 focus-visible:ring-qed-red"
                            />
                          </FormControl>
                          <FormMessage className="text-qed-red" />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full bg-qed-red hover:bg-qed-red/90" disabled={isSubmitting}>
                      {isSubmitting ? "Signing in..." : "Sign In"}
                    </Button>
                  </form>
                </Form>
              </TabsContent>

              <TabsContent value="signup">
                <Form {...signUpForm}>
                  <form onSubmit={signUpForm.handleSubmit(onSignUp)} className="space-y-4 mt-4">
                    <FormField
                      control={signUpForm.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your name"
                              {...field}
                              className="border-qed-gray/30 focus-visible:ring-qed-red"
                            />
                          </FormControl>
                          <FormMessage className="text-qed-red" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={signUpForm.control}
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
                      control={signUpForm.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input
                              type="password"
                              {...field}
                              className="border-qed-gray/30 focus-visible:ring-qed-red"
                            />
                          </FormControl>
                          <FormMessage className="text-qed-red" />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full bg-qed-red hover:bg-qed-red/90" disabled={isSubmitting}>
                      {isSubmitting ? "Creating account..." : "Create Free Account"}
                    </Button>
                  </form>
                </Form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

