// app/demo-list/page.tsx
'use client'

import { useFetchDemos } from '@/hooks/useFetchDemos'
import ProjectCard from '@/components/project-card'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

const ITEMS_PER_PAGE = 6

export default function DemoListPage() {
  const [demos, setDemos] = useState<any[]>([])
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    const fetchData = async () => {
      const data = await useFetchDemos()
      setDemos(data)
    }
    fetchData()
  }, [])

  const totalPages = Math.ceil(demos.length / ITEMS_PER_PAGE)

  const paginatedDemos = demos.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1))
  }

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">All AI Demos</h1>
          <p className="text-gray-600">Explore our collection of AI experiments</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {paginatedDemos.map((demo) => (
            <ProjectCard
                          key={demo.id}
                          title={demo.title}
                          description={demo.description.value}
                          tags={demo.technologies}
                          demoUrl={demo.demoUrl}
                          path={demo.path}
                        />
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="mt-10 flex justify-center items-center space-x-4">
          <Button
            variant="outline"
            onClick={handlePrev}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <span className="text-sm text-gray-700">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            variant="outline"
            onClick={handleNext}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      </div>
    </section>
  )
}
