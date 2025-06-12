"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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
    fechaNacimiento: "",
  })

  // Load previous data from URL params when component mounts
  useEffect(() => {
    const nombre = searchParams.get("nombre") || ""
    const saldoAFP = searchParams.get("saldoAFP") || ""
    const email = searchParams.get("email") || ""
    const fechaNacimiento = searchParams.get("fechaNacimiento") || ""

    // Only update if the values are different to prevent infinite loops
    setFormData((prevData) => {
      if (
        prevData.nombre !== nombre ||
        prevData.saldoAFP !== saldoAFP ||
        prevData.email !== email ||
        prevData.fechaNacimiento !== fechaNacimiento
      ) {
        return {
          nombre,
          saldoAFP,
          email,
          fechaNacimiento,
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

  const formatFechaNacimiento = useCallback((value: string) => {
    // Remove any non-digit characters
    const numericValue = value.replace(/\D/g, "")

    // If empty, return empty string
    if (!numericValue) {
      return ""
    }

    // Format as dd/mm/yyyy
    let formatted = ""
    if (numericValue.length >= 1) {
      formatted = numericValue.substring(0, 2)
    }
    if (numericValue.length >= 3) {
      formatted += "/" + numericValue.substring(2, 4)
    }
    if (numericValue.length >= 5) {
      formatted += "/" + numericValue.substring(4, 8)
    }

    return formatted
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

  const handleFechaNacimientoChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value

      // Format the value and update state
      const formattedValue = formatFechaNacimiento(value)
      setFormData((prev) => ({ ...prev, fechaNacimiento: formattedValue }))
    },
    [formatFechaNacimiento],
  )

  const validateFechaNacimiento = (fecha: string) => {
    // Check if format is correct (dd/mm/yyyy)
    const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/
    const match = fecha.match(regex)

    if (!match) {
      return false
    }

    const day = Number.parseInt(match[1], 10)
    const month = Number.parseInt(match[2], 10)
    const year = Number.parseInt(match[3], 10)

    // Basic validation
    if (month < 1 || month > 12) return false
    if (day < 1 || day > 31) return false
    if (year < 1900 || year > 2025) return false

    // More specific validation for days in month
    const daysInMonth = new Date(year, month, 0).getDate()
    if (day > daysInMonth) return false

    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate fecha de nacimiento
    if (!validateFechaNacimiento(formData.fechaNacimiento)) {
      toast.error("Por favor, ingresa una fecha de nacimiento válida (dd/mm/yyyy)")
      return
    }

    setIsSubmitting(true)

    try {
      // Save evaluation data to Google Sheets
      const evaluationData = {
        FECHA: new Date().toISOString(), // Full date and time in ISO format
        TIPO: "EVALUACION", // Type of entry
        AFP: "No especificado", // We don't collect AFP in this form
        FONDO: "No especificado", // We don't collect fund type in this form
        SALDO: formData.saldoAFP,
        FECHANACIMIENTO: formData.fechaNacimiento,
        NOMBRE: formData.nombre,
        EMAIL: formData.email,
        SUSCRITO: "SI", // Always set to SI since they accept receiving information
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

      // If successful, redirect to results page
      const params = new URLSearchParams({
        nombre: formData.nombre,
        saldoAFP: formData.saldoAFP,
        email: formData.email,
        fechaNacimiento: formData.fechaNacimiento,
      }).toString()

      router.push(`/resultados?${params}`)
    } catch (error) {
      console.error("Error saving data:", error)
      toast.error("Error al guardar los datos. Por favor, intenta nuevamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = useCallback((field: string, value: string) => {
    setFormData((prev) => {
      // Si es el campo nombre, validar que sea solo una palabra
      if (field === "nombre") {
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
                    Nombre *
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
                    Saldo en AFP *
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
                  <Label htmlFor="fechaNacimiento" className="text-lg font-medium self-center">
                    Fecha de nacimiento *
                  </Label>
                  <Input
                    id="fechaNacimiento"
                    type="text"
                    placeholder="dd/mm/yyyy"
                    value={formData.fechaNacimiento}
                    onChange={handleFechaNacimientoChange}
                    required
                    className="h-14 text-lg text-center w-64 max-w-full"
                    maxLength={10}
                  />
                </div>

                <div className="space-y-3 flex flex-col items-center">
                  <Label htmlFor="email" className="text-lg font-medium self-center">
                    Email *
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
                  <p className="text-sm text-gray-600 text-center max-w-md">
                    Acepto recibir más información sobre mi jubilación de vez en cuando
                  </p>
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
