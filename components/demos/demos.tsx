import { fetchDemos } from '@/hooks/FetchDemos'
import ProjectCard from '@/components/project-card'
import DecorativeBackground from '../decorative/DecorativeBackground'
import Link from 'next/link'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'

export type Demo = {
  id: string
  title: string
  description: { value: string }
  technologies: { id: string; name: string; path: string }[]
  path: string
  youtubeUrl: { url: string }
}

export default async function Demos() {
  const { nodes: demos } = await fetchDemos({ first: 6 })
  console.log('Demos:', demos)

  if (!demos || demos.length === 0) {
    return (
      <section className="demos-section mt-8 p-8 text-center">
        <p className="text-lg text-gray-500">
          No demos available at the moment.
        </p>
      </section>
    )
  }

  return (
    <section id="demos" className="relative overflow-hidden pt-16 md:pt-24">
      <DecorativeBackground variant="demos" />
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-start justify-start space-y-4 text-left">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              AI Demos & Experiments
            </h2>
            <p className="text-qed-gray max-w-[700px] md:text-xl">
              Test our innovative AI applications and see how they can transform
              your business processes. Sign in to access these demos with your
              free account.
            </p>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {demos.map((demo: Demo) => (
            <ProjectCard
              key={demo.id}
              id={demo.id}
              title={demo.title}
              description={demo.description.value}
              tags={demo.technologies}
              youtubeUrl={demo.youtubeUrl?.url || ''}
              path={demo.path}
            />
          ))}
        </div>
      </div>
      <div className="mt-16 text-center">
        <Button
          asChild
          className="bg-li_btn_color dark:bg-da_btn_color hover:bg-li_btn_hover_color dark:hover:bg-da_btn_hover_color border-none text-white transition-all duration-300 dark:text-white"
        >
          <Link href="/demos/1">
            View All Demos <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
