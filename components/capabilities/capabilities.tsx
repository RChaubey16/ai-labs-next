"use client"

import { Brain, Code, Cpu, Layers, MessageSquare } from "lucide-react"
import CapabilityCard from "@/components/capability-card"


export default function Capabilities(){
    return(
        <section id="capabilities" className="py-16 md:py-24 bg-qed-lightgray">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start justify-start space-y-4 text-left">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our AI Capabilities</h2>
                <p className="max-w-[700px] text-qed-gray md:text-xl">
                  QED42 AI Labs is constantly experimenting with cutting-edge AI technologies to develop practical
                  applications.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              <CapabilityCard
                title="Natural Language Processing"
                description="Advanced text analysis, sentiment analysis, and language understanding capabilities powering our document and conversation demos."
                icon={<MessageSquare className="h-10 w-10 text-qed-red" />}
              />
              <CapabilityCard
                title="Computer Vision"
                description="Image recognition, object detection, and visual data analysis systems that drive our visual inspection applications."
                icon={<Cpu className="h-10 w-10 text-qed-red" />}
              />
              <CapabilityCard
                title="Machine Learning"
                description="Custom ML models for prediction, classification, and pattern recognition used in our predictive maintenance demos."
                icon={<Brain className="h-10 w-10 text-qed-red" />}
              />
              <CapabilityCard
                title="Deep Learning"
                description="Neural network architectures for complex problem-solving and data analysis that power our most advanced AI experiments."
                icon={<Layers className="h-10 w-10 text-qed-red" />}
              />
              <CapabilityCard
                title="AI Integration"
                description="Seamless integration of AI capabilities into existing systems and workflows, demonstrated in our practical business applications."
                icon={<Code className="h-10 w-10 text-qed-red" />}
              />
              <CapabilityCard
                title="Custom AI Solutions"
                description="Tailored AI applications designed to address specific business challenges, available for testing in our demo portal."
                icon={<Cpu className="h-10 w-10 text-qed-red" />}
              />
            </div>
          </div>
        </section>
    )
}