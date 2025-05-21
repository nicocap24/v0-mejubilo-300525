"use client"

import { useEffect, useRef } from "react"
import { LineChart } from "lucide-react"

export default function PensionChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)

    // Chart configuration
    const width = rect.width
    const height = rect.height
    const padding = 40
    const chartWidth = width - padding * 2
    const chartHeight = height - padding * 2

    // Clear canvas
    ctx.clearRect(0, 0, width, height)

    // Draw axes
    ctx.beginPath()
    ctx.moveTo(padding, padding)
    ctx.lineTo(padding, height - padding)
    ctx.lineTo(width - padding, height - padding)
    ctx.strokeStyle = "#e2e8f0"
    ctx.lineWidth = 2
    ctx.stroke()

    // Draw grid lines
    ctx.beginPath()
    for (let i = 1; i <= 5; i++) {
      const y = padding + (chartHeight / 5) * i
      ctx.moveTo(padding, y)
      ctx.lineTo(width - padding, y)
    }
    for (let i = 1; i <= 10; i++) {
      const x = padding + (chartWidth / 10) * i
      ctx.moveTo(x, padding)
      ctx.lineTo(x, height - padding)
    }
    ctx.strokeStyle = "#f1f5f9"
    ctx.lineWidth = 1
    ctx.stroke()

    // Draw labels
    ctx.fillStyle = "#64748b"
    ctx.font = "12px sans-serif"
    ctx.textAlign = "right"
    ctx.textBaseline = "middle"

    for (let i = 0; i <= 5; i++) {
      const y = height - padding - (chartHeight / 5) * i
      const value = i * 5
      ctx.fillText(`$${value}M`, padding - 10, y)
    }

    for (let i = 0; i <= 10; i++) {
      const x = padding + (chartWidth / 10) * i
      const year = 2023 + i
      ctx.fillStyle = "#64748b"
      ctx.font = "12px sans-serif"
      ctx.textAlign = "center"
      ctx.textBaseline = "top"
      ctx.fillText(`${year}`, x, height - padding + 10)
    }

    // Draw data line
    const data = [
      { x: 0, y: 0.5 },
      { x: 1, y: 0.8 },
      { x: 2, y: 1.2 },
      { x: 3, y: 1.5 },
      { x: 4, y: 2.1 },
      { x: 5, y: 2.8 },
      { x: 6, y: 3.5 },
      { x: 7, y: 4.3 },
      { x: 8, y: 5.2 },
      { x: 9, y: 6.1 },
      { x: 10, y: 7.2 },
    ]

    ctx.beginPath()
    data.forEach((point, i) => {
      const x = padding + (chartWidth / 10) * point.x
      const y = height - padding - (chartHeight / 25) * point.y * 5

      if (i === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    })
    ctx.strokeStyle = "#f97316" // orange-500
    ctx.lineWidth = 3
    ctx.stroke()

    // Add gradient under the line
    const gradient = ctx.createLinearGradient(0, padding, 0, height - padding)
    gradient.addColorStop(0, "rgba(249, 115, 22, 0.2)") // orange-500 with opacity
    gradient.addColorStop(1, "rgba(249, 115, 22, 0)")

    ctx.beginPath()
    data.forEach((point, i) => {
      const x = padding + (chartWidth / 10) * point.x
      const y = height - padding - (chartHeight / 25) * point.y * 5

      if (i === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    })
    ctx.lineTo(padding + chartWidth, height - padding)
    ctx.lineTo(padding, height - padding)
    ctx.closePath()
    ctx.fillStyle = gradient
    ctx.fill()

    // Add data points
    data.forEach((point) => {
      const x = padding + (chartWidth / 10) * point.x
      const y = height - padding - (chartHeight / 25) * point.y * 5

      ctx.beginPath()
      ctx.arc(x, y, 5, 0, Math.PI * 2)
      ctx.fillStyle = "#f97316" // orange-500
      ctx.fill()
      ctx.strokeStyle = "#ffffff"
      ctx.lineWidth = 2
      ctx.stroke()
    })
  }, [])

  return (
    <div className="relative h-full w-full">
      {!canvasRef.current && (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <LineChart className="w-16 h-16 text-sky-500 opacity-20 mb-4" />
          <p className="text-gray-500">Conecta tu cuenta AFP para ver tu evolución</p>
        </div>
      )}
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  )
}
