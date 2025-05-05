'use client'
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
}: Props) {
  return (
    <div>
      {/* Animated Content */}
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className={
              'grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'
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
              />
            ))
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}






