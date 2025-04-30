// app/page.tsx
import SignInCTA from '@/components/sign-in-cta'
import Hero from '@/components/hero/hero'
import Demos from '@/components/demos/demos'
import Capabilities from '@/components/capabilities/capabilities'
import About from '@/components/about/about'
import Contact from '@/components/contact/contact'
import ScrollReveal from '@/components/scroll-reveal/scroll-reveal'
import { REVALIDATE_TIME } from '@/constants'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <ScrollReveal >
          <Hero />
        </ScrollReveal>
        <ScrollReveal>
        <SignInCTA />
        </ScrollReveal>
        <ScrollReveal>
          <Demos />
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <Capabilities />
        </ScrollReveal>
        <ScrollReveal delay={0.4}>
          <About />
        </ScrollReveal>
        <ScrollReveal delay={0.5}>
          <Contact />
        </ScrollReveal>
      </main>
    </div>
  )
}

export const revalidate = REVALIDATE_TIME
