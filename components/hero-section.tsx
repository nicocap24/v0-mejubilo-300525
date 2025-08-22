"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/new-landscape-background.png"
          alt="Paisaje de colinas verdes"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-2xl mx-auto px-4">
        <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0">
          <CardContent className="p-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Y si Me <span className="text-orange-500">Jubilo</span>?
            </h1>

            <p className="text-xl text-gray-600 mb-8">Ya te quieres jubilar ? 👇</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/simulador-simple" className="flex-1">
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white text-xl py-4 px-8 rounded-lg font-bold transition-colors">
                  Si 😎
                </Button>
              </Link>

              <Link href="/no-todavia" className="flex-1">
                <Button
                  variant="outline"
                  className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 text-xl py-4 px-8 rounded-lg font-bold transition-colors bg-transparent"
                >
                  No todavía 😒
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
