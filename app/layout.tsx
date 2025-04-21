import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "QED42 AI Labs - AI Demos & Experiments",
  description:
    "Explore cutting-edge AI applications and experiments developed by QED42 AI Labs. Sign in to test our demos.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Toaster />
        {children}
        </body>
    </html>
  )
}
