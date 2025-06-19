import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type React from "react"

interface PageCardProps {
  title: string
  subtitle?: string
  children: React.ReactNode
  className?: string
}

export function PageCard({ title, subtitle, children, className = "" }: PageCardProps) {
  return (
    <Card className={`w-full max-w-4xl mx-auto bg-white/95 backdrop-blur-sm ${className}`}>
      <CardHeader>
        <CardTitle className="text-center text-3xl font-bold text-gray-800">{title}</CardTitle>
        {subtitle && <p className="text-center text-gray-600 mt-2">{subtitle}</p>}
      </CardHeader>
      <CardContent className="space-y-8">{children}</CardContent>
    </Card>
  )
}
