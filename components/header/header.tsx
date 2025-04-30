'use client';

import { useState, useEffect } from "react"
import Link from "next/link"
import { LogIn, Menu, X, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from 'next-themes';

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['demos', 'capabilities', 'about', 'contact'];
      let current = "";

      for (const id of sections) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.getBoundingClientRect().top;
          if (top <= 80) {
            current = id;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinkClass = (id: string) =>
    `text-sm font-medium transition-colors ${
      activeSection === id ? "text-[#239dcf] dark:text-da_nav_color underline underline-offset-4" : "hover:text-[#239dcf]"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Logo */}
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
              <radialGradient id="paint0_radial_5570_2896" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(17.809 12.5569) scale(23.7044 23.7406)">
                <stop stopColor="#ED1C24" />
                <stop offset="1" stopColor="#8C003F" />
              </radialGradient>
              <linearGradient id="paint1_linear_5570_2896" x1="4.37562" y1="37.7656" x2="21.9314" y2="37.7656" gradientUnits="userSpaceOnUse">
                <stop stopColor="#6D6E71" />
                <stop offset="1" stopColor="#6D6E71" />
              </linearGradient>
            </defs>
          </svg>
          <Link href="/" className="text-xl font-bold hover:text-[#239dcf]">
            QED42 AI Labs
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#demos" className={`${navLinkClass("demos")} text-[16px]`}>Demos</Link>
          <Link href="#capabilities" className={`${navLinkClass("capabilities")} text-[16px]`}>Capabilities</Link>
          <Link href="#about" className={`${navLinkClass("about")} text-[16px]`}>About</Link>
          <Link href="#contact" className={`${navLinkClass("contact")} text-[16px]`}>Contact</Link>
        </nav>

        {/* Theme toggle + Sign In */}
        <div className="flex items-center gap-2">
          <Button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-md bg-transparent dark:bg-transparent hover:bg-gray-200 dark:hover:bg-gray-700 shadow-none focus:ring-0 transition-colors duration-200"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5 text-white" /> : <Moon className="h-5 w-5 text-black" />}
            <span className="sr-only">Toggle theme</span>
          </Button>

          <Button
            size="sm"
            asChild
            className="bg-li_btn_color dark:bg-da_btn_color hover:bg-btn_hover_color dark:hover:bg-btn_hover_color  text-white dark:text-white border-none transition-all duration-300"
          >
            <Link href="#sign-in" className="flex items-center">
              <LogIn className="mr-2 h-4 w-4" /> <span className="text-[16px]">Sign In</span>
            </Link>
          </Button>

        </div>

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
            {["demos", "capabilities", "about", "contact"].map((section) => (
              <Link
                key={section}
                href={`#${section}`}
                className={`text-sm font-medium py-2 ${
                  activeSection === section ? "text-[#239dcf] underline underline-offset-4" : "hover:text-qed-red"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ))}
            <Button asChild size="sm" className="w-full bg-qed-red hover:bg-qed-red/90 mt-2">
              <Link href="#sign-in" onClick={() => setMobileMenuOpen(false)}>
                <LogIn className="mr-2 h-4 w-4" /> Sign In
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
