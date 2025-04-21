"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="py-20 md:py-28">
      <div className="container px-4 md:px-6 flex items-center justify-around">
        <div className="flex flex-col items-start text-left space-y-12 max-w-4xl">
        <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-black dark:text-white">
          Welcome to QED42 AI Labs
        </h1>
        <p className="text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl text-gray-500 dark:text-gray-300">
          A powerhouse of AI demos
          <br /> & experiments
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild  variant="outline" size="lg" className="border-black-800 bg-transparent text-black dark:text-white">
          <Link href="#sign-in">
            Sign In to Test <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button
          variant="outline"
          size="lg"
          asChild
          className="
            border-black bg-black text-white hover:bg-gray-900 hover:text-white  hover:border-gray-700 
            dark:border-gray-300 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:border-gray-600
          "
        >
          <Link href="#demos">Explore Demos</Link>
        </Button>

      </div>
    </div>

        <img src="./hero.webp" alt="" className="h-1/3 w-1/3"/>
      </div>
    </section>
  )
}
