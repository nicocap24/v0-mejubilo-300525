"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface AnimatedButtonProps {
  href: string
  className?: string
  children: React.ReactNode
}

export default function AnimatedButton({ href, className, children }: AnimatedButtonProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const interval = setInterval(() => {
      // Crear un movimiento suave usando funciones seno y coseno
      const time = Date.now() / 1000
      const x = Math.sin(time) * 5
      const y = Math.cos(time * 1.5) * 3

      setPosition({ x, y })
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <Button
      asChild
      size="lg"
      className={`transform transition-transform hover:scale-105 ${className}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      <Link href={href}>{children}</Link>
    </Button>
  )
}
