import Link from 'next/link'

import { ArrowUpRight } from 'lucide-react'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface ProjectCardProps {
  id: string
  title: string
  description: string
  tags: { id: string; name: string }[]
  youtubeUrl: string
  path: string
  view?: 'grid' | 'list'
}

export default function ProjectCard({
  id,
  title,
  description,
  tags,
  youtubeUrl,
  path,
  view = 'grid',
}: ProjectCardProps) {
  const truncateDescription = (text: string, maxLength: number) =>
    text.length > maxLength
      ? text.substring(0, maxLength).trim() + '...'
      : text

  return (
    <Card
      className={cn(
        'overflow-hidden transition-all hover:shadow-lg dark:hover:shadow-lg dark:border-gray-600 dark:bg-gray-800 bg-white',
        view === 'grid'
          ? 'flex flex-col justify-between h-full border-none'
          : 'flex md:flex-row flex-col items-start gap-4 p-4 min-h-[275px]' 
      )}
    >
      {/* Thumbnail */}
      <div
        className={cn(
          view === 'grid'
            ? 'aspect-video w-full overflow-hidden'
            : 'w-full md:w-1/2 h-60 overflow-hidden flex-shrink-0 rounded-lg'
        )}
      >
        <img
          src="/placeholder.svg"
          alt={title}
          className="h-full w-full object-cover transition-transform hover:scale-105"
        />
      </div>

      {/* Text Content */}
      <div
        className={cn(
          view === 'grid'
            ? 'flex flex-col flex-1'
            : 'flex flex-col justify-between w-full'
        )}
      >
        <CardHeader className={cn('pb-2', view === 'list' && 'p-0')}>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {title}
          </h3>
        </CardHeader>

        <CardContent className={cn('flex-1 flex flex-col justify-between', view === 'list' && 'p-0')}>
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-snug">
            {truncateDescription(description.replace(/<[^>]*>?/gm, ''), view === 'grid' ? 130 : 80)}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge
                key={tag.id}
                variant="secondary"
                className="bg-[#f1f5f9] text-gray-700 dark:bg-[#2b3c4c] dark:text-gray-300"
              >
                {tag.name}
              </Badge>
            ))}
          </div>
        </CardContent>

        <CardFooter className={cn('pt-4', view === 'list' && 'p-0 mt-6')}>
        <Button
          variant="outline"
          asChild
          className="border-qed-red text-qed-red hover:bg-qed-red/10 w-full"
        >
          <Link href={`/node/${id}`}>
            View Demo <ArrowUpRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        </CardFooter>
      </div>
    </Card>
  )
}
