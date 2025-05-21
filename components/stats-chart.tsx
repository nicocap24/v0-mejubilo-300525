"use client"

import { useEffect, useRef } from "react"

interface StatsChartProps {
  type: "bar" | "line" | "pie"
}

export default function StatsChart({ type }: StatsChartProps) {
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

    // Clear canvas
    ctx.clearRect(0, 0, width, height)

    if (type === "bar") {
      drawBarChart(ctx, width, height, padding)
    } else if (type === "line") {
      drawLineChart(ctx, width, height, padding)
    } else if (type === "pie") {
      drawPieChart(ctx, width, height)
    }
  }, [type])

  const drawBarChart = (ctx: CanvasRenderingContext2D, width: number, height: number, padding: number) => {
    const chartWidth = width - padding * 2
    const chartHeight = height - padding * 2

    // Sample data
    const data = [
      { label: "Ene", value: 65 },
      { label: "Feb", value: 78 },
      { label: "Mar", value: 90 },
      { label: "Abr", value: 81 },
      { label: "May", value: 95 },
      { label: "Jun", value: 105 },
      { label: "Jul", value: 120 },
      { label: "Ago", value: 129 },
      { label: "Sep", value: 142 },
      { label: "Oct", value: 158 },
      { label: "Nov", value: 175 },
      { label: "Dic", value: 190 },
    ]

    const maxValue = Math.max(...data.map((item) => item.value))
    const barWidth = chartWidth / data.length - 10

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
      const value = Math.round((maxValue / 5) * i)
      ctx.fillText(`${value}`, padding - 10, y)
    }

    // Draw bars
    data.forEach((item, i) => {
      const x = padding + i * (chartWidth / data.length) + 5
      const barHeight = (item.value / maxValue) * chartHeight
      const y = height - padding - barHeight

      // Draw bar
      ctx.beginPath()
      ctx.rect(x, y, barWidth, barHeight)

      const gradient = ctx.createLinearGradient(0, y, 0, height - padding)
      gradient.addColorStop(0, "#0ea5e9") // sky-500
      gradient.addColorStop(1, "#7dd3fc") // sky-300
      ctx.fillStyle = gradient
      ctx.fill()

      // Draw label
      ctx.fillStyle = "#64748b"
      ctx.font = "12px sans-serif"
      ctx.textAlign = "center"
      ctx.textBaseline = "top"
      ctx.fillText(item.label, x + barWidth / 2, height - padding + 10)
    })
  }

  const drawLineChart = (ctx: CanvasRenderingContext2D, width: number, height: number, padding: number) => {
    const chartWidth = width - padding * 2
    const chartHeight = height - padding * 2

    // Sample data
    const data = [
      { label: "Ene", value: 25 },
      { label: "Feb", value: 38 },
      { label: "Mar", value: 42 },
      { label: "Abr", value: 35 },
      { label: "May", value: 50 },
      { label: "Jun", value: 65 },
      { label: "Jul", value: 72 },
      { label: "Ago", value: 78 },
      { label: "Sep", value: 90 },
      { label: "Oct", value: 95 },
      { label: "Nov", value: 110 },
      { label: "Dic", value: 125 },
    ]

    const maxValue = Math.max(...data.map((item) => item.value))

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
      const value = Math.round((maxValue / 5) * i)
      ctx.fillText(`${value}`, padding - 10, y)
    }

    for (let i = 0; i < data.length; i++) {
      const x = padding + i * (chartWidth / (data.length - 1))
      ctx.fillStyle = "#64748b"
      ctx.font = "12px sans-serif"
      ctx.textAlign = "center"
      ctx.textBaseline = "top"
      ctx.fillText(data[i].label, x, height - padding + 10)
    }

    // Draw line
    ctx.beginPath()
    data.forEach((point, i) => {
      const x = padding + i * (chartWidth / (data.length - 1))
      const y = height - padding - (point.value / maxValue) * chartHeight

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
      const x = padding + i * (chartWidth / (data.length - 1))
      const y = height - padding - (point.value / maxValue) * chartHeight

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
    data.forEach((point, i) => {
      const x = padding + i * (chartWidth / (data.length - 1))
      const y = height - padding - (point.value / maxValue) * chartHeight

      ctx.beginPath()
      ctx.arc(x, y, 5, 0, Math.PI * 2)
      ctx.fillStyle = "#f97316" // orange-500
      ctx.fill()
      ctx.strokeStyle = "#ffffff"
      ctx.lineWidth = 2
      ctx.stroke()
    })
  }

  const drawPieChart = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    const centerX = width / 2
    const centerY = height / 2
    const radius = Math.min(width, height) / 2 - 40

    // Sample data
    const data = [
      { label: "Habitat", value: 35, color: "#0ea5e9" }, // sky-500
      { label: "ProVida", value: 25, color: "#38bdf8" }, // sky-400
      { label: "Capital", value: 20, color: "#7dd3fc" }, // sky-300
      { label: "Cuprum", value: 10, color: "#bae6fd" }, // sky-200
      { label: "Otros", value: 10, color: "#e0f2fe" }, // sky-100
    ]

    const total = data.reduce((sum, item) => sum + item.value, 0)

    let startAngle = 0

    // Draw pie slices
    data.forEach((item) => {
      const sliceAngle = (item.value / total) * 2 * Math.PI

      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle)
      ctx.closePath()

      ctx.fillStyle = item.color
      ctx.fill()

      // Draw slice border
      ctx.strokeStyle = "#ffffff"
      ctx.lineWidth = 2
      ctx.stroke()

      // Calculate label position
      const middleAngle = startAngle + sliceAngle / 2
      const labelRadius = radius * 0.7
      const labelX = centerX + Math.cos(middleAngle) * labelRadius
      const labelY = centerY + Math.sin(middleAngle) * labelRadius

      // Draw percentage label
      ctx.fillStyle = "#ffffff"
      ctx.font = "bold 14px sans-serif"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText(`${Math.round(item.value)}%`, labelX, labelY)

      startAngle += sliceAngle
    })

    // Draw legend
    const legendX = width - 120
    const legendY = height / 2 - (data.length * 25) / 2

    data.forEach((item, i) => {
      const y = legendY + i * 25

      // Draw color box
      ctx.fillStyle = item.color
      ctx.fillRect(legendX, y, 15, 15)

      // Draw label
      ctx.fillStyle = "#64748b"
      ctx.font = "14px sans-serif"
      ctx.textAlign = "left"
      ctx.textBaseline = "middle"
      ctx.fillText(item.label, legendX + 25, y + 7.5)
    })
  }

  return <canvas ref={canvasRef} className="w-full h-full" />
}
