import { ArrowUpRight } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  demoUrl: string
}

export default function ProjectCard({ title, description, image, tags, demoUrl }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg border-none">
      <div className="aspect-video overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="h-full w-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader>
        <h3 className="text-xl font-bold">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-qed-gray">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="bg-qed-lightgray text-qed-gray hover:bg-qed-lightgray/80">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" asChild className="w-full border-qed-red text-qed-red hover:bg-qed-red/10">
          <a href={demoUrl} target="_blank" rel="noopener noreferrer">
            View Demo <ArrowUpRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}

