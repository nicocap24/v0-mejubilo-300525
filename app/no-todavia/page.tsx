"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function NoTodaviaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Back Button */}
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver al inicio
          </Link>

          <Card className="bg-white/95 backdrop-blur-sm shadow-xl">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <Image
                  src="/images/working-forever-meme.png"
                  alt="Trabajando para siempre"
                  width={200}
                  height={200}
                  className="mx-auto rounded-full"
                />
              </div>

              <h1 className="text-3xl font-bold text-gray-800 mb-4">Buena suerte con eso 😅</h1>

              <p className="text-xl text-gray-600 mb-8">Te esperamos cuando estés listo</p>

              <div className="space-y-4">
                <Link href="/">
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3">
                    Cambié de opinión 🤔
                  </Button>
                </Link>

                <Link href="/evaluar">
                  <Button
                    variant="outline"
                    className="w-full border-orange-500 text-orange-500 hover:bg-orange-50 py-3 bg-transparent"
                  >
                    Ver simulador completo
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
