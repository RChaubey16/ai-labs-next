import { useState } from "react"

import Link from "next/link"
import { LogIn, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header()  {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <svg width="26" height="47" viewBox="0 0 26 47" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.8993 0.847656V4.39517H11.3572V0.847656H14.8993ZM21.9097 18.4374V14.8899H18.3676V18.4374H14.8255V21.911H11.2834V18.3635H14.8255V14.816H18.3676V4.39517H14.8255V7.86877H11.2834V11.4163H7.7413V14.9638H4.34679V18.5113H0.804688V25.5324H4.34679V29.0799H21.9097V25.5324H25.4518V18.5113L21.9097 18.4374Z"
                fill="url(#paint0_radial_5570_2896)"
              />
              <path
                d="M4.34766 29.0059V32.4795H7.88976V36.027H11.4319V46.5217H14.9002V36.027H18.4423V32.4795H21.9106V29.0059H4.34766Z"
                fill="url(#paint1_linear_5570_2896)"
              />
              <path d="M21.9106 28.4883H4.34766V29.0056H21.9106V28.4883Z" fill="#ED1C24" />
              <defs>
                <radialGradient
                  id="paint0_radial_5570_2896"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(17.809 12.5569) scale(23.7044 23.7406)"
                >
                  <stop stopColor="#ED1C24" />
                  <stop offset="1" stopColor="#8C003F" />
                </radialGradient>
                <linearGradient
                  id="paint1_linear_5570_2896"
                  x1="4.37562"
                  y1="37.7656"
                  x2="21.9314"
                  y2="37.7656"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#6D6E71" />
                  <stop offset="0.09" stopColor="#727376" />
                  <stop offset="0.2" stopColor="#818285" />
                  <stop offset="0.31" stopColor="#9A9B9D" />
                  <stop offset="0.44" stopColor="#BCBEBF" />
                  <stop offset="0.51" stopColor="#D1D3D4" />
                  <stop offset="0.54" stopColor="#C0C2C4" />
                  <stop offset="0.62" stopColor="#A2A4A6" />
                  <stop offset="0.7" stopColor="#8B8C8F" />
                  <stop offset="0.79" stopColor="#7A7B7E" />
                  <stop offset="0.88" stopColor="#707174" />
                  <stop offset="1" stopColor="#6D6E71" />
                </linearGradient>
              </defs>
            </svg>
            <span className="text-xl font-bold">QED42 AI Labs</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#demos" className="text-sm font-medium hover:text-qed-red">
              Demos
            </Link>
            <Link href="#capabilities" className="text-sm font-medium hover:text-qed-red">
              Capabilities
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-qed-red">
              About
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-qed-red">
              Contact
            </Link>
          </nav>

          {/* Desktop Sign In Button */}
          <Button asChild size="sm" className="hidden md:flex bg-qed-red hover:bg-qed-red/90">
            <Link href="#sign-in">
              <LogIn className="mr-2 h-4 w-4" /> Sign In
            </Link>
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-qed-gray hover:text-qed-red focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b shadow-lg z-50 animate-in slide-in-from-top duration-300">
            <div className="container py-4 px-4 flex flex-col space-y-4">
              <Link
                href="#demos"
                className="text-sm font-medium py-2 hover:text-qed-red"
                onClick={() => setMobileMenuOpen(false)}
              >
                Demos
              </Link>
              <Link
                href="#capabilities"
                className="text-sm font-medium py-2 hover:text-qed-red"
                onClick={() => setMobileMenuOpen(false)}
              >
                Capabilities
              </Link>
              <Link
                href="#about"
                className="text-sm font-medium py-2 hover:text-qed-red"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium py-2 hover:text-qed-red"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Button asChild size="sm" className="w-full bg-qed-red hover:bg-qed-red/90 mt-2">
                <Link href="#sign-in" onClick={() => setMobileMenuOpen(false)}>
                  <LogIn className="mr-2 h-4 w-4" /> Sign In
                </Link>
              </Button>
            </div>
          </div>
        )}
      </header>
    )
}