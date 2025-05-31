"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { toast } from "sonner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function EvaluationPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    nombre: "",
    saldoAFP: "",
    fechaNacimiento: "",
  })

  // Format saldo with $ and dots when it changes
  useEffect(() => {
    if (formData.saldoAFP && !formData.saldoAFP.startsWith("$")) {
      formatSaldo(formData.saldoAFP)
    }
  }, [formData.saldoAFP])

  const formatSaldo = (value: string) => {
    // Remove any non-digit characters
    const numericValue = value.replace(/\D/g, "")

    // If empty, return empty string
    if (!numericValue) {
      setFormData((prev) => ({ ...prev, saldoAFP: "" }))
      return
    }

    // Format with dots for thousands
    const formattedValue = Number(numericValue).toLocaleString("es-CL")

    // Add $ prefix
    setFormData((prev) => ({ ...prev, saldoAFP: `$${formattedValue}` }))
  }

  const handleSaldoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    // If user is deleting the $ sign, reset the field
    if (value === "") {
      setFormData((prev) => ({ ...prev, saldoAFP: "" }))
      return
    }

    // If user is typing, update the raw value and let useEffect handle formatting
    setFormData((prev) => ({ ...prev, saldoAFP: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // First, save data to Google Sheets
      const dataToSave = {
        FECHA: new Date().toISOString().split("T")[0], // Current date in YYYY-MM-DD format
        AFP: "No especificado", // We don't collect AFP in this form
        FONDO: "No especificado", // We don't collect fund type in this form
        SALDO: formData.saldoAFP,
        FECHANACIMIENTO: formData.fechaNacimiento,
        NOMBRE: formData.nombre,
        EMAIL: "No especificado", // We don't collect email in this form
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSave),
      })

      if (!response.ok) {
        throw new Error("Failed to save data to Google Sheets")
      }

      // If successful, redirect to results page
      const params = new URLSearchParams({
        nombre: formData.nombre,
        saldoAFP: formData.saldoAFP,
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

  const handleInputChange = (field: string, value: string) => {
    // Si es el campo nombre, validar que sea solo una palabra
    if (field === "nombre") {
      // Remover espacios extra y limitar a una palabra
      const singleWord = value.trim().split(/\s+/)[0] || ""
      setFormData((prev) => ({
        ...prev,
        [field]: singleWord,
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        [field]: value,
      }))
    }
  }

  // Calculate min and max dates for the date input
  const minDate = "1900-01-01"
  const maxDate = "2025-12-31"

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
                    placeholder="Ingresa tu nombre (una palabra)"
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
                  <Label htmlFor="fechaNacimiento" className="text-lg font-medium self-center">
                    Fecha de nacimiento
                  </Label>
                  <Input
                    id="fechaNacimiento"
                    type="date"
                    min={minDate}
                    max={maxDate}
                    value={formData.fechaNacimiento}
                    onChange={(e) => handleInputChange("fechaNacimiento", e.target.value)}
                    required
                    className="h-14 text-lg text-center w-64 max-w-full"
                  />
                </div>

                <div className="flex gap-4 pt-6 justify-center">
                  <Link href="/">
                    <Button type="button" variant="outline" className="h-12 text-lg px-8">
                      Cancelar
                    </Button>
                  </Link>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="h-12 text-lg bg-red-500 hover:bg-red-600 text-white px-8"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full mr-2"></span>
                        Calculando...
                      </>
                    ) : (
                      "Calcular"
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
