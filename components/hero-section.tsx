"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/landscape-background.png')",
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-white/10"></div>

      {/* Main Content Card */}
      <Card className="relative z-10 w-full max-w-lg mx-auto shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
        <CardContent className="p-8 text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            ¿Ya quieres <span className="text-orange-500">jubilar</span>?
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Descubre cuánto $$ podrías obtener con la reforma si jubilarás hoy👇:
          </p>

          {/* CTA Button */}
          <Link href="/evaluar">
            <Button
              size="lg"
              className="bg-red-500 hover:bg-red-600 text-white px-12 py-4 text-lg rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Descubre cómo
            </Button>
          </Link>
        </CardContent>
      </Card>
    </section>
  )
}
