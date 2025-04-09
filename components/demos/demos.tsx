"use client"

import ProjectCard from "@/components/project-card"
import demodata from "@/data/demo-data"


export default function Demos(){

    return(
        <section id="demos" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start justify-start space-y-4 text-left">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">AI Demos & Experiments</h2>
                <p className="max-w-[700px] text-qed-gray md:text-xl">
                  Test our innovative AI applications and see how they can transform your business processes. Sign in to
                  access these demos with your free account.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {demodata.map((demo) => (
                <ProjectCard
                title={demo.title}
                description={demo.description}
                image={demo.image}
                tags={demo.tags}
                demoUrl={demo.demoUrl}
              />
              ))}
            </div>
          </div>
        </section>
    )
}