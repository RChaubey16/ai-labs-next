"use client"


import SignInCTA from "@/components/sign-in-cta"
import Header from "@/components/header/header"
import Footer from "@/components/footer/footer"
import Hero from "@/components/hero/hero"
import Demos from "@/components/demos/demos"
import Capabilities from "@/components/capabilities/capabilities"
import About from "@/components/about/about"
import Contact from "@/components/contact/contact"

export default function Home() {


    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
                <Hero />
                <section id="sign-in" className="py-12 md:py-16 bg-qed-lightgray">
                    <div className="container px-4 md:px-6">
                        <SignInCTA />
                    </div>
                </section>
                <Demos />
                <Capabilities />
                <About />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}

