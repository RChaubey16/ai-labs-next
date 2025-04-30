'use client'

import { useState } from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { toast } from 'sonner'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { InfoIcon } from 'lucide-react'
import DecorativeBackground from './decorative/DecorativeBackground'

const signInSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters.',
  }),
})

const signUpSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters.',
  }),
})

export default function SignInCTA() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const signInForm = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const signUpForm = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  })

  function onSignIn(values: z.infer<typeof signInSchema>) {
    setIsSubmitting(true)

    // Simulate sign in
    setTimeout(() => {
      console.log(values)
      setIsSubmitting(false)
      signInForm.reset()
      toast('Signed in successfully!', {
        description: 'You now have access to all AI demos.',
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
      toast('Account created successfully!', {
        description:
          'You now have access to all AI demos with 50 requests per day.',
      })
    }, 1500)
  }

  return (
    <section id="sign-in" className="relative overflow-hidden py-12 md:py-16">
      <DecorativeBackground variant="signin" />
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="flex-1 space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Why Sign In?
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              The AI applications on this site are connected to APIs that are
              costly to run. To ensure fair usage and maintain service quality,
              we require users to create an account.
            </p>
            <div className="flex items-start gap-3 rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-600 dark:bg-gray-800 dark:text-white">
              <InfoIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600 dark:text-red-400" />
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Free Account Benefits:
                </h3>
                <ul className="mt-2 list-inside list-disc space-y-1 text-gray-700 dark:text-gray-300">
                  <li>Access to all AI demos and experiments</li>
                  <li>50 requests per day (resets daily)</li>
                  <li>Contact us to request increased limits</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full flex-1 md:max-w-md">
          <Card className="border bg-white dark:border-gray-600 dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white">
                Account Access
              </CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-300">
                Sign in to your account or create a new one to access our AI
                demos.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="signin" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger
                    value="signin"
                    className="text-gray-900 hover:text-gray-600 dark:text-white dark:hover:text-gray-400"
                  >
                    Sign In
                  </TabsTrigger>
                  <TabsTrigger
                    value="signup"
                    className="text-gray-900 hover:text-gray-600 dark:text-white dark:hover:text-gray-400"
                  >
                    Create Account
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="signin">
                  <Form {...signInForm}>
                    <form
                      onSubmit={signInForm.handleSubmit(onSignIn)}
                      className="mt-4 space-y-4"
                    >
                      <FormField
                        control={signInForm.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-900 dark:text-white">
                              Email
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="your.email@example.com"
                                {...field}
                                className="border-gray-300 focus-visible:ring-red-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                              />
                            </FormControl>
                            <FormMessage className="text-red-600 dark:text-red-400" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={signInForm.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-900 dark:text-white">
                              Password
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="password"
                                {...field}
                                className="border-gray-300 focus-visible:ring-red-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                              />
                            </FormControl>
                            <FormMessage className="text-red-600 dark:text-red-400" />
                          </FormItem>
                        )}
                      />
                      <Button
                        type="submit"
                        className="w-full border-none bg-li_btn_color text-white transition-all duration-300 hover:bg-btn_hover_color dark:bg-da_btn_color dark:text-white dark:hover:bg-btn_hover_color"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Signing in...' : 'Sign In'}
                      </Button>
                    </form>
                  </Form>
                </TabsContent>

                <TabsContent value="signup">
                  <Form {...signUpForm}>
                    <form
                      onSubmit={signUpForm.handleSubmit(onSignUp)}
                      className="mt-4 space-y-4"
                    >
                      <FormField
                        control={signUpForm.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-900 dark:text-white">
                              Name
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your name"
                                {...field}
                                className="border-gray-300 focus-visible:ring-red-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                              />
                            </FormControl>
                            <FormMessage className="text-red-600 dark:text-red-400" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={signUpForm.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-900 dark:text-white">
                              Email
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="your.email@example.com"
                                {...field}
                                className="border-gray-300 focus-visible:ring-red-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                              />
                            </FormControl>
                            <FormMessage className="text-red-600 dark:text-red-400" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={signUpForm.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-900 dark:text-white">
                              Password
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="password"
                                {...field}
                                className="border-gray-300 focus-visible:ring-red-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                              />
                            </FormControl>
                            <FormMessage className="text-red-600 dark:text-red-400" />
                          </FormItem>
                        )}
                      />
                      <Button
                        type="submit"
                        className="w-full border-none bg-li_btn_color text-white transition-all duration-300 hover:bg-btn_hover_color dark:bg-da_btn_color dark:text-white dark:hover:bg-btn_hover_color"
                        disabled={isSubmitting}
                      >
                        {isSubmitting
                          ? 'Creating account...'
                          : 'Create Free Account'}
                      </Button>
                    </form>
                  </Form>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
        </div>
      </div>

    </section>
  )
}
