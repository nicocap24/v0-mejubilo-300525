"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function HeroSection() {
  const [showNoOption, setShowNoOption] = useState(false)

  return (
    <section
      className="min-h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: "url('/images/new-landscape-background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-4 text-center">
        {!showNoOption ? (
          <Card className="max-w-2xl mx-auto p-8 bg-white/95 backdrop-blur-sm shadow-xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Ya te quieres jubilar ? 👇</h1>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/simulador-simple">
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-xl font-semibold rounded-lg transition-colors w-full sm:w-auto"
                >
                  Si 😎
                </Button>
              </Link>

              <Button
                size="lg"
                variant="outline"
                className="border-gray-400 text-gray-700 hover:bg-gray-100 px-8 py-4 text-xl font-semibold rounded-lg transition-colors w-full sm:w-auto bg-transparent"
                onClick={() => setShowNoOption(true)}
              >
                No todavía 😒
              </Button>
            </div>
          </Card>
        ) : (
          <Card className="max-w-2xl mx-auto p-8 bg-white/95 backdrop-blur-sm shadow-xl">
            <div className="text-center">
              <img
                src="/images/working-forever-meme.png"
                alt="Trabajando para siempre"
                className="w-48 h-48 mx-auto mb-6 rounded-full object-cover"
              />
              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                Buena suerte con eso. Te esperamos cuando estés listo
              </h2>
              <Button
                onClick={() => setShowNoOption(false)}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
              >
                Volver
              </Button>
            </div>
          </Card>
        )}
      </div>
    </section>
  )
}
