"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, CheckCircle, BookOpen, Download, Users, Star } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { toast } from "sonner"

export default function ManualDelRetiroPage() {
  const [email, setEmail] = useState("")
  const [nombre, setNombre] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Save email to Google Sheets in the "Ebook" sheet
      const dataToSave = {
        FECHA: new Date().toISOString(),
        TIPO: "EBOOK_INTERES",
        NOMBRE: nombre,
        EMAIL: email,
        PRODUCTO: "Manual del Retiro",
        ESTADO: "INTERESADO",
        HOJA: "Ebook", // Specify which sheet to use
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSave),
      })

      if (!response.ok) {
        throw new Error("Failed to save interest to Google Sheets")
      }

      toast.success("¡Gracias por tu interés! Te notificaremos cuando esté disponible.")
      setIsSubscribed(true)
      setEmail("")
      setNombre("")
    } catch (error) {
      console.error("Error saving interest:", error)
      toast.error("Error al registrar tu interés. Por favor, intenta nuevamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div
        className="flex-1 bg-cover bg-center bg-no-repeat py-12"
        style={{
          backgroundImage: "url('/images/landscape-background.png')",
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-white/20"></div>

        <div className="relative z-10 container mx-auto px-4">
          <Link href="/" className="inline-flex items-center text-gray-700 hover:text-gray-900 mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver al inicio
          </Link>

          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <Card className="mb-8 bg-white/95 backdrop-blur-sm">
              <CardContent className="p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <BookOpen className="h-8 w-8 text-orange-500" />
                      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">
                        PRÓXIMAMENTE
                      </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Manual del Retiro</h1>
                    <p className="text-xl text-gray-600 mb-6">
                      La guía completa para planificar y ejecutar tu jubilación de manera exitosa en Chile
                    </p>
                    <div className="flex items-center gap-4 text-gray-600">
                      <div className="flex items-center gap-2">
                        <Download className="h-5 w-5" />
                        <span>E-book digital</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-5 w-5" />
                        <span>Para todos los niveles</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="relative">
                      <div className="w-64 h-80 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                        <div className="absolute inset-4 bg-white rounded-lg flex flex-col justify-between p-4">
                          <div>
                            <h3 className="text-lg font-bold text-gray-800 mb-2">Manual del Retiro</h3>
                            <p className="text-sm text-gray-600">Tu guía completa para una jubilación exitosa</p>
                          </div>
                          <div className="text-center">
                            <BookOpen className="h-12 w-12 text-orange-500 mx-auto mb-2" />
                            <p className="text-xs text-gray-500">Por Me Jubilo</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What's Included */}
            <Card className="mb-8 bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-gray-800 text-center">¿Qué incluye el manual?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-800">Planificación financiera para el retiro</h3>
                        <p className="text-gray-600">Estrategias para maximizar tu ahorro previsional</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-800">Guía completa de rentas vitalicias</h3>
                        <p className="text-gray-600">Cómo elegir y contratar la mejor opción para ti</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-800">Optimización de beneficios estatales</h3>
                        <p className="text-gray-600">PGU, Seguro Social y otros beneficios disponibles</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-800">Casos prácticos y ejemplos reales</h3>
                        <p className="text-gray-600">Situaciones reales con soluciones paso a paso</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-800">Impacto de la reforma previsional</h3>
                        <p className="text-gray-600">Cómo te afectan los cambios y qué hacer al respecto</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-800">Herramientas de cálculo</h3>
                        <p className="text-gray-600">Plantillas y calculadoras para planificar tu retiro</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-800">Estrategias de inversión</h3>
                        <p className="text-gray-600">Cómo optimizar tus fondos de pensión</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-800">Checklist de jubilación</h3>
                        <p className="text-gray-600">Lista completa de tareas antes de jubilar</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pre-order Form */}
            <Card className="bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-gray-800 text-center">
                  {isSubscribed ? "¡Gracias por tu interés!" : "Regístrate para ser notificado"}
                </CardTitle>
                <p className="text-center text-gray-600 mt-2">
                  {isSubscribed
                    ? "Te contactaremos cuando el Manual del Retiro esté disponible."
                    : "Sé el primero en conocer cuando esté disponible el Manual del Retiro"}
                </p>
              </CardHeader>
              <CardContent>
                {!isSubscribed ? (
                  <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="nombre">Nombre</Label>
                      <Input
                        id="nombre"
                        type="text"
                        placeholder="Tu nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                        className="h-12 text-lg"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Correo electrónico</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="tu@correo.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="h-12 text-lg"
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-12 text-lg bg-orange-500 hover:bg-orange-600 text-white"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full mr-2"></span>
                          Registrando...
                        </>
                      ) : (
                        "Notificarme cuando esté disponible"
                      )}
                    </Button>
                    <p className="text-sm text-gray-500 text-center">
                      Te enviaremos un correo cuando el manual esté listo. No spam, lo prometemos.
                    </p>
                  </form>
                ) : (
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle className="h-8 w-8 text-green-500" />
                    </div>
                    <p className="text-lg text-gray-700">
                      ¡Perfecto! Te notificaremos por correo cuando el Manual del Retiro esté disponible.
                    </p>
                    <div className="flex justify-center gap-4">
                      <Link href="/evaluar">
                        <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                          Mientras tanto, evalúa tu pensión
                        </Button>
                      </Link>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Testimonials Preview */}
            <Card className="mt-8 bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800 text-center">
                  Lo que dicen nuestros usuarios
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="flex justify-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 italic mb-2">
                      "Me Jubilo me ayudó a entender finalmente cómo funciona mi pensión. Información clara y útil."
                    </p>
                    <p className="text-sm text-gray-500">- María, 58 años</p>
                  </div>
                  <div className="text-center">
                    <div className="flex justify-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 italic mb-2">
                      "Excelente herramienta para planificar la jubilación. Muy recomendable para todos."
                    </p>
                    <p className="text-sm text-gray-500">- Carlos, 62 años</p>
                  </div>
                  <div className="text-center">
                    <div className="flex justify-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 italic mb-2">
                      "Información transparente y fácil de entender. Exactamente lo que necesitaba."
                    </p>
                    <p className="text-sm text-gray-500">- Ana, 55 años</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
