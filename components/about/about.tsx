
"use client"

import Link from "next/link"
import { ArrowRight} from "lucide-react"
import { Button } from "@/components/ui/button"


export default function About(){
    return(
        <section id="about" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="QED42 AI Labs team working on AI solutions"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About QED42 AI Labs</h2>
                <p className="text-qed-gray">
                  QED42 AI Labs is our dedicated research and development division focused on exploring the frontiers of
                  artificial intelligence and creating practical applications.
                </p>
                <p className="text-qed-gray">
                  Our team of AI researchers, engineers, and industry experts is committed to developing cutting-edge
                  solutions that solve real-world problems across various sectors.
                </p>
                <p className="text-qed-gray">
                  This demo portal allows you to experience our latest AI experiments firsthand. Create a free account
                  to test our applications with a limit of 50 requests per day.
                </p>
                <div className="pt-4">
                  <Button asChild className="bg-qed-red hover:bg-qed-red/90">
                    <Link href="#contact">
                      Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}