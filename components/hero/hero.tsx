'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import DecorativeBackground from '../decorative/DecorativeBackground'

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <DecorativeBackground variant="hero" />
      <div className="container flex items-center justify-around px-4 md:px-6">
        <div className="flex max-w-4xl flex-col items-start space-y-12 text-left">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter text-black dark:text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Welcome to QED42
              <span className="animate-circular-gradient whitespace-nowrap">
                {' '}
                AI Labs
              </span>
            </h1>

            <p className="text-xl font-semibold text-gray-500 dark:text-gray-300 sm:text-2xl md:text-3xl lg:text-4xl">
              A powerhouse of AI demos
              <br /> & experiments
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              asChild
              size="sm"
              className="border border-black bg-transparent text-black hover:bg-black hover:text-white dark:border-white dark:bg-transparent dark:text-white dark:hover:text-black"
            >
              <Link href="#sign-in">
                Sign In to Test <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button
              size="sm"
              asChild
              className="block rounded-[8px] bg-gradient-to-r from-[#4a90e2] via-[#6ac3f4] to-[#4a90e2] bg-[length:200%_auto] px-[45px] py-[15px] text-lg text-white transition-all duration-500 hover:bg-[position:right_center] hover:text-white dark:from-[#326b94] dark:via-[#5bb6e7] dark:to-[#326b94] dark:text-white"
            >
              <Link
                href="/demos/1"
                className="flex w-full items-center justify-center gap-2"
              >
                Explore Demos
              </Link>
            </Button>
          </div>
        </div>

        <div className="hidden select-none md:block">
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
