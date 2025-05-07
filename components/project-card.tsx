import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn, truncateDescription } from '@/lib/utils'
import Image from "next/image"
interface ProjectCardProps {
  id: string
  title: string
  description: string
  tags: { id: string; name: string }[]
  youtubeUrl: string
  path: string
}

const getYouTubeThumbnail = (url: string) => {
  const regExp =
    /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|embed)\/|.*[?&]v=)|youtu\.be\/)([^"&?/ ]{11})/;
  const match = url.match(regExp);
  return match ? `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg` : '/placeholder.svg';
};

export default function ProjectCard({
  // id,
  title,
  description,
  tags,
  youtubeUrl,
  path,
}: ProjectCardProps) {
  return (
    <Card
      className={cn(
        'overflow-hidden bg-gray-100 transition-all dark:border-gray-600 dark:bg-gray-900/80',
        'flex h-full flex-col justify-between border-none hover:shadow-lg'
      )}
    >
      {/* Thumbnail */}
      <div className={cn('overflow-hidden', 'aspect-video max-h-48 w-full')}>
        <div className={cn('overflow-hidden', 'aspect-video max-h-48 w-full')}>
          <Image
            src={getYouTubeThumbnail(youtubeUrl)}
            alt={title}
            width={1280}
            height={720}
            className="h-full w-full object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
      {/* Text Content */}
      <div className={cn('flex flex-col', 'flex-1')}>
        <CardHeader className={cn('pb-2', 'pt-4')}>
          <h3
            className={cn('font-bold text-gray-900 dark:text-white', 'text-lg')}
          >
            {title}
          </h3>
        </CardHeader>
        <CardContent className={cn('flex flex-1 flex-col justify-between')}>
          <p className="text-sm leading-snug text-gray-700 dark:text-gray-300">
            {truncateDescription(description.replace(/<[^>]*>?/gm, ''), 100)}
          </p>
          <div className={cn('flex flex-wrap gap-2', 'mt-3')}>
            {tags?.slice(0, 3).map((tag) => (
              <Badge
                key={tag.id}
                variant="secondary"
                className="bg-gray-200 text-xs text-gray-700 dark:bg-gray-700 dark:text-gray-300"
              >
                {tag.name}
              </Badge>
            ))}
            {tags!=null && tags.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{tags.length - 3}
              </Badge>
            )}
          </div>
        </CardContent>
        <CardFooter className={cn('pt-2', 'pb-4')}>
          <Button
            asChild
            size="sm"
            className={cn(
              ' bg-transparent transition-colors bg-gray-700 text-white dark:bg-gray-600 dark:text-white dark:hover:bg-white dark:hover:text-black',
              'w-full py-1 text-xs'
            )}
          >
            <Link
              href={`${path}`}
              className="flex items-center justify-center"
            >
              View Demo <ArrowUpRight className="ml-1 h-3 w-3" />
            </Link>
          </Button>
        </CardFooter>
      </div>
    </Card>
  )
}
