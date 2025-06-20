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

      {/* Main Content Card - Increased size by 50%+ */}
      <Card className="relative z-10 w-full max-w-4xl mx-auto shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
        <CardContent className="p-12 md:p-16 text-center">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-8 leading-tight">
            Y si Me{" "}
            <span className="text-green-500" style={{ color: "#22c55e" }}>
              Jubilo
            </span>
            ?
          </h1>

          {/* Subtitle - Adjusted to move "si jubilarás hoy" to second line */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            Descubre cuánto $$ podrías obtener con la reforma
            <br />
            si jubilaras hoy 👇
          </p>

          {/* CTA Button - AHORA EN NARANJA VIBRANTE */}
          <Link href="/evaluar">
            <Button
              size="lg"
              className="text-white px-16 py-6 text-xl md:text-2xl rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cta-button"
              style={{
                backgroundColor: "#f97316", // Naranja vibrante
                boxShadow: "0 4px 15px rgba(249, 115, 22, 0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#ea580c" // Naranja más oscuro
                e.currentTarget.style.boxShadow = "0 6px 25px rgba(249, 115, 22, 0.6)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#f97316"
                e.currentTarget.style.boxShadow = "0 4px 15px rgba(249, 115, 22, 0.3)"
              }}
            >
              Quiero jubilar
            </Button>
          </Link>
        </CardContent>
      </Card>
    </section>
  )
}
