'use client'

import { useEffect, useState } from 'react'
import { Grid, List } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectCard from '@/components/project-card'
import { Demo } from '@/components/demos/demos'

type Props = {
  demos: Demo[]
  page: number
  totalPages: number
  hasPreviousPage: boolean
  hasNextPage: boolean
}

export default function DemoGallery({
  demos,
  page,
  totalPages,
  hasPreviousPage,
  hasNextPage,
}: Props) {
  const [view, setView] = useState<'grid' | 'list'>(() => {
    // Initial value loaded from localStorage
    if (typeof window !== 'undefined') {
      const savedView = localStorage.getItem('viewMode')
      return savedView === 'list' || savedView === 'grid' ? savedView : 'grid'
    }
    return 'grid'
  })

  useEffect(() => {
    localStorage.setItem('viewMode', view)
  }, [view])

  return (
    <div>
      {/* View Toggle Buttons */}
      <div className="mb-6 flex justify-end gap-2">
        <button
          onClick={() => setView('grid')}
          className={`flex items-center gap-1 rounded-md border px-4 py-2 transition-colors ${
            view === 'grid'
              ? 'border-gray-900 bg-gray-200 text-gray-900'
              : 'border-gray-300 text-gray-700 hover:bg-gray-100 dark:text-white'
          }`}
        >
          <Grid className="h-4 w-4" />
          Grid
        </button>

        <button
          onClick={() => setView('list')}
          className={`flex items-center gap-1 rounded-md border px-4 py-2 transition-colors ${
            view === 'list'
              ? 'border-gray-900 bg-gray-200 text-gray-900'
              : 'border-gray-300 text-gray-700 hover:bg-gray-100 dark:text-white'
          }`}
        >
          <List className="h-4 w-4" />
          List
        </button>
      </div>

      {/* Animated Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={view}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className={
            view === 'grid'
              ? 'grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'
              : 'flex flex-col gap-4'
          }
        >
          {demos.length === 0 ? (
            <div className="flex h-64 items-center justify-center">
              <p>No demos available.</p>
            </div>
          ) : (
            demos.map((demo) => (
              <ProjectCard
                key={demo.id}
                id={demo.id}
                title={demo.title}
                description={demo.description.value}
                tags={demo.technologies}
                youtubeUrl={demo.youtubeUrl?.url || ''}
                path={demo.path}
                view={view} // <-- Pass view if needed for styling
              />
            ))
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
