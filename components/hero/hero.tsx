"use client"

import Link from "next/link"
import { ArrowRight} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero(){
    return(
        <section className="py-20 md:py-28 bg-white">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-start text-left space-y-4 max-w-4xl">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                          Welcome to QED42 AI Labs{" "}
                          <span className="text-qed-gray">— a powerhouse of AI demos & experiments</span>
                        </h1>
                        <p className="max-w-[700px] text-qed-gray md:text-xl mt-6">
                          On this page you'll find examples of cutting-edge AI applications developed by our team. Sign in to
                          test these applications and experience the future of AI technology.
                        </p>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4 mt-8">
                        <Button asChild size="lg" className="bg-qed-red hover:bg-qed-red/90">
                          <Link href="#sign-in">
                            Sign In to Test <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                        <Button variant="outline" size="lg" asChild className="border-qed-red text-qed-red hover:bg-qed-red/10">
                          <Link href="#demos">Explore Demos</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}