"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface StatsCounterProps {
  title: string
  value: number
  prefix?: string
  suffix?: string
  duration?: number
  formatter?: (value: number) => string
  className?: string
  valueClassName?: string
}

export default function StatsCounter({
  title,
  value,
  prefix = "",
  suffix = "",
  duration = 2000,
  formatter,
  className = "",
  valueClassName = "",
}: StatsCounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const end = value
    const incrementTime = duration / end
    let timer: NodeJS.Timeout

    const updateCount = () => {
      start += Math.ceil(end / (duration / 16))
      if (start > end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }

    timer = setInterval(updateCount, 16)

    return () => {
      clearInterval(timer)
    }
  }, [value, duration])

  const displayValue = formatter ? formatter(count) : count.toLocaleString()

  return (
    <Card className={className}>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg text-center text-gray-700">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className={`text-3xl font-bold text-center ${valueClassName}`}>
          {prefix}
          {displayValue}
          {suffix}
        </div>
      </CardContent>
    </Card>
  )
}
