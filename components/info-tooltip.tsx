"use client"

import type React from "react"

import { useState } from "react"
import { Info } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface InfoTooltipProps {
  title: string
  content: string | React.ReactNode
  className?: string
}

export function InfoTooltip({ title, content, className = "" }: InfoTooltipProps) {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div className="relative inline-block">
      <button
        className={`inline-flex items-center justify-center w-5 h-5 bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 rounded-full transition-colors ${className}`}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onClick={() => setIsVisible(!isVisible)}
        type="button"
      >
        <Info className="w-3 h-3" />
      </button>

      {isVisible && (
        <div className="absolute z-50 w-80 -top-2 left-8 transform">
          <Card className="bg-white shadow-lg border border-gray-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-semibold text-gray-800">{title}</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="text-xs text-gray-600 leading-relaxed">{content}</div>
            </CardContent>
          </Card>
          {/* Arrow pointing to the icon */}
          <div className="absolute top-4 -left-2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-t-transparent border-b-transparent border-r-gray-200"></div>
        </div>
      )}
    </div>
  )
}
