'use client'

import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'
import { YoutubeEmbed } from '@/components/youtube-embed/youtube-embed'

export default function DemoDetail() {
  // Hardcoded demo content
  const demoTitle = 'AI-Powered Image Generation'
  const videoId = 'dQw4w9WgXcQ' // Example YouTube video ID
  const demoDescription = `This demo showcases our state-of-the-art AI image generation technology. By combining advanced neural networks with proprietary training methods, our system can generate photorealistic images from text descriptions.

    The technology uses a diffusion model architecture that progressively refines random noise into coherent images guided by text prompts. What sets our solution apart is the unprecedented level of detail and contextual understanding.
    
    Key features:
    • High-resolution output (up to 4096×4096)
    • Accurate adherence to text descriptions
    • Style control and consistency
    • Fast generation time (under 5 seconds)
    
    Our AI model was trained on a diverse dataset to ensure fairness and representation across various domains. Multiple safety mechanisms are in place to prevent misuse.`

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-12 md:py-16">
          <div className="container mx-auto max-w-4xl px-4 md:px-6">
            <h1 className="mb-8 text-3xl font-bold tracking-tight md:text-5xl">
              {demoTitle}
            </h1>

            <div className="mb-8 aspect-video w-full overflow-hidden rounded-lg bg-gray-100">
              <YoutubeEmbed videoId={videoId} />
            </div>

            <div className="prose max-w-none">
              <p className="whitespace-pre-line text-lg">{demoDescription}</p>
            </div>

            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <a
                href="/test"
                className="inline-flex items-center justify-center rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
              >
                Back to Demos
              </a>
              <a
                href="#"
                className="bg-qed-blue inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
              >
                Try this Demo
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
