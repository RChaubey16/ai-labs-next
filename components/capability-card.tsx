import type { ReactNode } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface CapabilityCardProps {
  title: string
  description: string
  icon: ReactNode
}

export default function CapabilityCard({ title, description, icon }: CapabilityCardProps) {
  return (
    <Card className="transition-all hover:shadow-md border-none bg-white">
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <div>{icon}</div>
        <h3 className="text-xl font-bold">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-qed-gray">{description}</p>
      </CardContent>
    </Card>
  )
}

