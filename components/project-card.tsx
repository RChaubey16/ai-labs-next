import Link from 'next/link'

import { ArrowUpRight } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface ProjectCardProps {
  id: string
  title: string
  description: string
  tags: { id: string; name: string }[]
  youtubeUrl: string
  path: string
}

export default function ProjectCard({
  id,
  title,
  description,
  tags,
  youtubeUrl,
  path,
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden border-none transition-all hover:shadow-lg">
      <div className="aspect-video overflow-hidden">
        <img
          src={'/placeholder.svg'}
          alt={title}
          className="h-full w-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader>
        <h3 className="text-xl font-bold">{title}</h3>
      </CardHeader>
      <CardContent>
        <div
          className="text-qed-gray"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge
              key={tag.id}
              variant="secondary"
              className="bg-qed-lightgray text-qed-gray hover:bg-qed-lightgray/80"
            >
              {tag.name}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
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
    </Card>
  )
}
