// components/demos/demos.tsx
import { useFetchDemos } from '@/hooks/useFetchDemos'
import ProjectCard from '@/components/project-card'

export default function Demos() {
  const { demos, loading, error } = useFetchDemos()

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <section id="demos" className="py-16 md:py-24">
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
          {demos.map((demo) => (
            <ProjectCard
              key={demo.id} 
              title={demo.title}
              description={demo.description}
              tags={demo.technologies}
              demoUrl={demo.demoUrl}
              path={demo.path}
            />
          ))}
        </div>
      </div>
    </section>
  )
}