"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import DecorativeBackground from "../decorative/DecorativeBackground"

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <DecorativeBackground variant="hero"/>
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
      <Button
        asChild
        size="sm"
        className="border border-black bg-transparent dark:bg-transparent dark:border-white text-black hover:bg-black hover:text-white dark:text-white dark:hover:text-black"
      >
        <Link href="#sign-in">
          Sign In to Test <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>

        <Button
        size="sm"
        asChild
        className="text-white dark:text-white uppercase px-[45px] py-[15px] 
             transition-all duration-500 bg-[length:200%_auto] 
             shadow-[0_0_20px_#eee] rounded-[8px] block
             bg-gradient-to-r from-[#4a90e2] via-[#6ac3f4] to-[#4a90e2]  
             hover:bg-[position:right_center] hover:text-white 
             dark:from-[#326b94] dark:via-[#5bb6e7] dark:to-[#326b94]"
      >
        <Link href="#demos" className="flex items-center justify-center w-full gap-2">Explore Demos</Link>
      </Button>



      </div>
    </div>

       <div className='hidden md:block select-none'>
          <Image
            src="/hero.webp"
            alt="Hero Image"
            priority
            quality={100}
            className="select-none"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  )
}
