"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Mail, Phone, MapPin, Send } from "lucide-react"
import Link from "next/link"
import { toast } from "sonner"

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    afp: "",
    fondo: "",
    saldo: "",
    fechaNacimiento: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const dataToSend = {
        FECHA: new Date().toISOString().split("T")[0], // Current date in YYYY-MM-DD format
        AFP: formData.afp,
        FONDO: formData.fondo,
        SALDO: formData.saldo,
        FECHANACIMIENTO: formData.fechaNacimiento,
        NOMBRE: formData.nombre,
        EMAIL: formData.email,
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      })

      if (!response.ok) {
        throw new Error("Failed to submit form")
      }

      // Reset form
      setFormData({
        nombre: "",
        email: "",
        afp: "",
        fondo: "",
        saldo: "",
        fechaNacimiento: "",
      })

      toast.success("Datos enviados correctamente. Te contactaremos pronto.")
    } catch (error) {
      console.error("Error submitting form:", error)
      toast.error("Error al enviar los datos. Por favor, intenta nuevamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat py-12"
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <Card className="bg-white/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-800">Información de Contacto</CardTitle>
              <p className="text-gray-600">¿Tienes preguntas sobre tu jubilación? Estamos aquí para ayudarte.</p>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">
                    <a
                      href="mailto:nico@pensionfi.com"
                      className="text-orange-600 hover:text-orange-700 transition-colors"
                    >
                      nico@pensionfi.com
                    </a>
                  </p>
                  <p className="text-sm text-gray-500">Responderemos en 24-48 horas</p>
                </div>
              </div>

              {/* Response Time */}
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Tiempo de Respuesta</h3>
                  <p className="text-gray-600">24-48 horas</p>
                  <p className="text-sm text-gray-500">Lunes a Viernes, 9:00 - 18:00</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Ubicación</h3>
                  <p className="text-gray-600">Chile</p>
                  <p className="text-sm text-gray-500">Servicio 100% online</p>
                </div>
              </div>

              {/* FAQ Link */}
              <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                <h3 className="font-semibold text-gray-800 mb-2">¿Tienes una pregunta rápida?</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Revisa nuestras preguntas frecuentes, tal vez ya tenemos la respuesta.
                </p>
                <Link href="/preguntas-frecuentes">
                  <Button variant="outline" size="sm" className="text-orange-600 border-orange-600 hover:bg-orange-50">
                    Ver Preguntas Frecuentes
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="bg-white/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-800">Datos para Evaluación</CardTitle>
              <p className="text-gray-600">Completa tus datos para recibir una evaluación personalizada.</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nombre">Nombre completo *</Label>
                    <Input
                      id="nombre"
                      type="text"
                      placeholder="Tu nombre completo"
                      value={formData.nombre}
                      onChange={(e) => handleInputChange("nombre", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="afp">AFP *</Label>
                    <select
                      id="afp"
                      value={formData.afp}
                      onChange={(e) => handleInputChange("afp", e.target.value)}
                      required
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Selecciona tu AFP</option>
                      <option value="Capital">Capital</option>
                      <option value="Cuprum">Cuprum</option>
                      <option value="Habitat">Habitat</option>
                      <option value="PlanVital">PlanVital</option>
                      <option value="ProVida">ProVida</option>
                      <option value="Modelo">Modelo</option>
                      <option value="Uno">Uno</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="fondo">Tipo de Fondo *</Label>
                    <select
                      id="fondo"
                      value={formData.fondo}
                      onChange={(e) => handleInputChange("fondo", e.target.value)}
                      required
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Selecciona el fondo</option>
                      <option value="A">Fondo A (Más riesgoso)</option>
                      <option value="B">Fondo B (Riesgoso)</option>
                      <option value="C">Fondo C (Intermedio)</option>
                      <option value="D">Fondo D (Conservador)</option>
                      <option value="E">Fondo E (Más conservador)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="saldo">Saldo en AFP *</Label>
                    <Input
                      id="saldo"
                      type="text"
                      placeholder="Ej: $15.000.000"
                      value={formData.saldo}
                      onChange={(e) => handleInputChange("saldo", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="fechaNacimiento">Fecha de nacimiento *</Label>
                    <Input
                      id="fechaNacimiento"
                      type="date"
                      value={formData.fechaNacimiento}
                      onChange={(e) => handleInputChange("fechaNacimiento", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Link href="/" className="flex-1">
                    <Button type="button" variant="outline" className="w-full">
                      Cancelar
                    </Button>
                  </Link>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-orange-500 hover:bg-orange-600 text-white"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full mr-2"></span>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Enviar Datos
                      </>
                    )}
                  </Button>
                </div>
              </form>

              {/* Disclaimer */}
              <div className="mt-6 text-xs text-gray-500 text-center p-4 bg-gray-50 rounded-lg">
                <p>
                  * Al enviar este formulario, aceptas que podamos contactarte para responder a tu consulta. No
                  compartiremos tu información con terceros.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
