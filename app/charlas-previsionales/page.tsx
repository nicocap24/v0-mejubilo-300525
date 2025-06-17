"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { toast } from "sonner"

export default function CharlasPrevisionales() {
  const [formData, setFormData] = useState({
    nombreEmpresa: "",
    nombreEncargado: "",
    emailEncargado: "",
    mensaje: "Hola, me gustaría cotizar y agendar una charla con ustedes...",
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
      // Save form data to Google Sheets
      const dataToSave = {
        FECHA: new Date().toISOString(),
        TIPO: "CHARLA_EMPRESARIAL",
        NOMBRE_EMPRESA: formData.nombreEmpresa,
        NOMBRE_ENCARGADO: formData.nombreEncargado,
        EMAIL_ENCARGADO: formData.emailEncargado,
        MENSAJE: formData.mensaje,
        ENVIAR_EMAIL: "SI", // Flag to trigger email notification
        EMAIL_DESTINO: "hinicocapital@gmail.com", // Destination email
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSave),
      })

      if (!response.ok) {
        throw new Error("Failed to save form data to Google Sheets")
      }

      toast.success("¡Solicitud enviada exitosamente! Te contactaremos pronto para coordinar la charla.")

      // Reset form
      setFormData({
        nombreEmpresa: "",
        nombreEncargado: "",
        emailEncargado: "",
        mensaje: "Hola, me gustaría cotizar y agendar una charla con ustedes...",
      })
    } catch (error) {
      console.error("Error saving form data:", error)
      toast.error("Error al enviar la solicitud. Por favor, intenta nuevamente.")
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

          <Card className="w-full max-w-4xl mx-auto bg-white/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-center text-3xl font-bold text-gray-800">Charlas Previsionales</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Main description */}
              <section>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Recientemente se acaba de aprobar la reforma de pensiones más grande de los últimos 40 años. ¿Cómo
                  impacta a tu empresa y a tus trabajadores?
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  En Me Jubilo, estamos ofreciendo charlas a empresas, con +100 empleados, para que puedan primero que
                  nada tener una noción básica de lo que tienen que saber sobre su jubilación y segundo, que puedan
                  entender sobre los últimos cambios con la reforma.
                </p>
              </section>

              {/* Beneficios */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Beneficios de contratar una charla con nosotros:
                </h2>
                <ul className="space-y-3 text-lg text-gray-700">
                  <li>• Reduce el estrés financiero en tus colaboradores</li>
                  <li>• Aumenta su bienestar y productividad en el trabajo</li>
                  <li>• Aumenta la retención de tus empleados</li>
                  <li>• Mejora el clima laboral</li>
                </ul>
              </section>

              {/* Modalidades */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Modalidades:</h2>
                <p className="text-lg text-gray-700">Puede ser presencial o virtual, a convenir.</p>
              </section>

              {/* Cotización Form */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Cotiza tu charla con nosotros</h2>
                <Card className="bg-orange-50 border border-orange-200">
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="nombreEmpresa">Nombre de la empresa *</Label>
                          <Input
                            id="nombreEmpresa"
                            type="text"
                            placeholder="Ingresa el nombre de tu empresa"
                            value={formData.nombreEmpresa}
                            onChange={(e) => handleInputChange("nombreEmpresa", e.target.value)}
                            required
                            className="h-12"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="nombreEncargado">Nombre del encargado *</Label>
                          <Input
                            id="nombreEncargado"
                            type="text"
                            placeholder="Tu nombre completo"
                            value={formData.nombreEncargado}
                            onChange={(e) => handleInputChange("nombreEncargado", e.target.value)}
                            required
                            className="h-12"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="emailEncargado">Email del encargado *</Label>
                        <Input
                          id="emailEncargado"
                          type="email"
                          placeholder="tu@empresa.com"
                          value={formData.emailEncargado}
                          onChange={(e) => handleInputChange("emailEncargado", e.target.value)}
                          required
                          className="h-12"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="mensaje">Mensaje</Label>
                        <Textarea
                          id="mensaje"
                          placeholder="Cuéntanos más sobre tu empresa y necesidades..."
                          value={formData.mensaje}
                          onChange={(e) => handleInputChange("mensaje", e.target.value)}
                          className="min-h-[120px]"
                        />
                      </div>

                      <div className="flex justify-center">
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg"
                        >
                          {isSubmitting ? (
                            <>
                              <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full mr-2"></span>
                              Enviando...
                            </>
                          ) : (
                            "Solicitar cotización"
                          )}
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </section>

              {/* Back Button */}
              <div className="flex justify-center pt-6">
                <Link href="/">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">Volver al inicio</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
