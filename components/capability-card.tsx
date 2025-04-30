import type { ReactNode } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface CapabilityCardProps {
  title: string
  description: string
  icon: ReactNode
}

export default function CapabilityCard({ title, description, icon }: CapabilityCardProps) {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg border-none bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700">
    <CardHeader className="flex flex-row items-center gap-4 pb-2">
      <div>{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
    </CardHeader>
    <CardContent >
      <p className="text-gray-600 dark:text-gray-300 hidden lg:block">{description}</p>
    </CardContent>
  </Card>
  
  )
}

