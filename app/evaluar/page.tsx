"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { useRouter, useSearchParams } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { toast } from "sonner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function EvaluationPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    nombre: "",
    saldoAFP: "",
    email: "",
    acceptNewsletter: false,
  })

  // Load previous data from URL params when component mounts
  useEffect(() => {
    const nombre = searchParams.get("nombre") || ""
    const saldoAFP = searchParams.get("saldoAFP") || ""
    const email = searchParams.get("email") || ""

    // Only update if the values are different to prevent infinite loops
    setFormData((prevData) => {
      if (prevData.nombre !== nombre || prevData.saldoAFP !== saldoAFP || prevData.email !== email) {
        return {
          nombre,
          saldoAFP,
          email,
          acceptNewsletter: false, // Reset newsletter preference
        }
      }
      return prevData
    })
  }, []) // Remove searchParams from dependency array to prevent infinite loops

  const formatSaldo = useCallback((value: string) => {
    // Remove any non-digit characters
    const numericValue = value.replace(/\D/g, "")

    // If empty, return empty string
    if (!numericValue) {
      return ""
    }

    // Format with dots for thousands
    const formattedValue = Number(numericValue).toLocaleString("es-CL")

    // Add $ prefix
    return `$${formattedValue}`
  }, [])

  const handleSaldoChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value

      // If user is deleting everything, reset the field
      if (value === "" || value === "$") {
        setFormData((prev) => ({ ...prev, saldoAFP: "" }))
        return
      }

      // Format the value and update state
      const formattedValue = formatSaldo(value)
      setFormData((prev) => ({ ...prev, saldoAFP: formattedValue }))
    },
    [formatSaldo],
  )

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // First, save evaluation data to Google Sheets
      const evaluationData = {
        FECHA: new Date().toISOString(), // Full date and time in ISO format
        TIPO: "EVALUACION", // Type of entry
        AFP: "No especificado", // We don't collect AFP in this form
        FONDO: "No especificado", // We don't collect fund type in this form
        SALDO: formData.saldoAFP,
        FECHANACIMIENTO: "No especificado", // No longer collecting birth date
        NOMBRE: formData.nombre,
        EMAIL: formData.email,
        SUSCRITO: formData.acceptNewsletter ? "SI" : "NO", // New column for newsletter subscription
      }

      const evaluationResponse = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(evaluationData),
      })

      if (!evaluationResponse.ok) {
        throw new Error("Failed to save evaluation data to Google Sheets")
      }

      // If user accepted newsletter, save subscription data separately
      if (formData.acceptNewsletter && formData.email) {
        const subscriptionData = {
          FECHA: new Date().toISOString(), // Full date and time in ISO format
          TIPO: "SUSCRIPCION",
          NOMBRE: formData.nombre,
          EMAIL: formData.email,
          ESTADO: "ACTIVO",
          SUSCRITO: "SI",
        }

        const subscriptionResponse = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(subscriptionData),
        })

        if (!subscriptionResponse.ok) {
          console.warn("Failed to save subscription data, but continuing with evaluation")
        }
      }

      // If successful, redirect to results page
      const params = new URLSearchParams({
        nombre: formData.nombre,
        saldoAFP: formData.saldoAFP,
        email: formData.email,
      }).toString()

      router.push(`/resultados?${params}`)
    } catch (error) {
      console.error("Error saving data:", error)
      toast.error("Error al guardar los datos. Por favor, intenta nuevamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = useCallback((field: string, value: string | boolean) => {
    setFormData((prev) => {
      // Si es el campo nombre, validar que sea solo una palabra
      if (field === "nombre" && typeof value === "string") {
        // Remover espacios extra y limitar a una palabra
        const singleWord = value.trim().split(/\s+/)[0] || ""
        return {
          ...prev,
          [field]: singleWord,
        }
      } else {
        return {
          ...prev,
          [field]: value,
        }
      }
    })
  }, [])

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

          {/* Increased card size by 50%+ */}
          <Card className="w-full max-w-2xl mx-auto bg-white/95 backdrop-blur-sm">
            <CardHeader className="pb-6">
              <CardTitle className="text-center text-3xl font-bold text-gray-800">Ingresa tus datos</CardTitle>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-3 flex flex-col items-center">
                  <Label htmlFor="nombre" className="text-lg font-medium self-center">
                    Nombre
                  </Label>
                  <Input
                    id="nombre"
                    type="text"
                    placeholder="Ingresa tu nombre"
                    value={formData.nombre}
                    onChange={(e) => handleInputChange("nombre", e.target.value)}
                    required
                    className="h-14 text-lg text-center w-64 max-w-full"
                    maxLength={20}
                  />
                </div>

                <div className="space-y-3 flex flex-col items-center">
                  <Label htmlFor="saldoAFP" className="text-lg font-medium self-center">
                    Saldo en AFP
                  </Label>
                  <Input
                    id="saldoAFP"
                    type="text"
                    placeholder="$0"
                    value={formData.saldoAFP}
                    onChange={handleSaldoChange}
                    required
                    className="h-14 text-lg text-center font-semibold w-64 max-w-full"
                  />
                </div>

                <div className="space-y-3 flex flex-col items-center">
                  <Label htmlFor="email" className="text-lg font-medium self-center">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@correo.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    className="h-14 text-lg text-center w-64 max-w-full"
                  />
                </div>

                {/* Newsletter subscription checkbox */}
                <div className="flex flex-col items-center space-y-3 pt-2">
                  <div className="flex items-center space-x-3 max-w-md">
                    <Checkbox
                      id="newsletter"
                      checked={formData.acceptNewsletter}
                      onCheckedChange={(checked) => handleInputChange("acceptNewsletter", checked as boolean)}
                      className="h-5 w-5"
                    />
                    <Label htmlFor="newsletter" className="text-sm text-gray-700 leading-relaxed cursor-pointer">
                      Deseo recibir más información sobre mi jubilación. Mandamos máximo 1 correo semanal. Generalmente
                      los Viernes.
                    </Label>
                  </div>
                </div>

                <div className="flex justify-center pt-6">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="h-12 text-lg bg-red-500 hover:bg-red-600 text-white px-8"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full mr-2"></span>
                        Simulando...
                      </>
                    ) : (
                      "Simular"
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
