"use client"

import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useMemo, useState } from "react"
import { toast } from "sonner"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ResultsPage() {
  const searchParams = useSearchParams()
  const [dataSaved, setDataSaved] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  // Use useMemo to prevent re-renders and get form data once
  const formData = useMemo(() => {
    return {
      nombre: searchParams.get("nombre") || "",
      saldoAFP: searchParams.get("saldoAFP") || "",
      fechaNacimiento: searchParams.get("fechaNacimiento") || "",
    }
  }, [searchParams])

  // Updated calculation logic with the correct formulas
  const calculatePensions = () => {
    // Parse the AFP balance, removing currency symbols and separators
    const saldo = Number.parseFloat(formData.saldoAFP.replace(/[$.]/g, "").replace(/,/g, "")) || 0
    const birthDate = new Date(formData.fechaNacimiento)
    const today = new Date()
    const age = today.getFullYear() - birthDate.getFullYear()

    // Constants
    const UF_VALUE = 39200 // Current UF value in Chilean pesos
    const MIN_UF_THRESHOLD = 3 // Minimum UF threshold for Renta Vitalicia

    // Renta Vitalicia calculation: (Saldo*3.27%*2)/12
    let rentaVitaliciaCalc = (saldo * 0.0327 * 2) / 12

    // Check if result is less than 3 UF
    if (rentaVitaliciaCalc < MIN_UF_THRESHOLD * UF_VALUE) {
      rentaVitaliciaCalc = 0
    }

    // Round to nearest integer
    const rentaVitalicia = Math.round(rentaVitaliciaCalc)

    // PGU calculation based on Renta Vitalicia amount
    const PGU_FULL = 214296 // Full PGU amount
    const PGU_MIN_THRESHOLD = 729764 // Minimum threshold for full PGU
    const PGU_MAX_THRESHOLD = 1158355 // Maximum threshold for any PGU

    let pgu = 0

    // Only calculate PGU if person is 65 or older
    if (age >= 65) {
      if (rentaVitalicia < PGU_MIN_THRESHOLD) {
        // Full PGU
        pgu = PGU_FULL
      } else if (rentaVitalicia <= PGU_MAX_THRESHOLD) {
        // Partial PGU - linear reduction
        pgu = Math.round((PGU_FULL * (PGU_MAX_THRESHOLD - rentaVitalicia)) / (PGU_MAX_THRESHOLD - PGU_MIN_THRESHOLD))
      } else {
        // No PGU
        pgu = 0
      }
    }

    // Seguro Social calculation based on AFP balance
    const SEGURO_SOCIAL_HIGH_THRESHOLD = 50000000 // $50,000,000
    const SEGURO_SOCIAL_LOW_THRESHOLD = 25000000 // $25,000,000

    let seguroSocial = 0

    if (saldo >= SEGURO_SOCIAL_HIGH_THRESHOLD) {
      // 2.5 UF
      seguroSocial = Math.round(2.5 * UF_VALUE)
    } else if (saldo >= SEGURO_SOCIAL_LOW_THRESHOLD) {
      // 2 UF
      seguroSocial = Math.round(2 * UF_VALUE)
    } else {
      // No Seguro Social
      seguroSocial = 0
    }

    // Total is the sum of all three components
    const total = rentaVitalicia + pgu + seguroSocial

    return {
      rentaVitalicia,
      pgu,
      seguroSocial,
      total,
    }
  }

  const results = calculatePensions()

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
      minimumFractionDigits: 0,
    }).format(amount)
  }

  const handleSaveToSheets = async () => {
    setIsSaving(true)
    try {
      const dataToSave = {
        FECHA: new Date().toISOString().split("T")[0], // Current date in YYYY-MM-DD format
        AFP: "No especificado", // We don't have AFP data in results page
        FONDO: "No especificado", // We don't have fund data in results page
        SALDO: formData.saldoAFP,
        FECHANACIMIENTO: formData.fechaNacimiento,
        NOMBRE: formData.nombre,
        EMAIL: "No especificado", // We don't have email in results page
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSave),
      })

      if (!response.ok) {
        throw new Error("Failed to save data")
      }

      setDataSaved(true)
      toast.success("Datos guardados correctamente")
    } catch (error) {
      console.error("Error saving data:", error)
      toast.error("Error al guardar los datos")
    } finally {
      setIsSaving(false)
    }
  }

  // Show error message if no data is provided
  if (!formData.nombre || !formData.saldoAFP || !formData.fechaNacimiento) {
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

            <Card className="w-full max-w-md mx-auto bg-white/95 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <h2 className="text-xl font-bold text-gray-800 mb-4">No hay datos para mostrar</h2>
                <p className="text-gray-600 mb-6">
                  Parece que no tienes datos de evaluación. Por favor, completa el formulario primero.
                </p>
                <Link href="/evaluar">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white">Ir al formulario</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>

        <Footer />
      </div>
    )
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
          <Link href="/evaluar" className="inline-flex items-center text-gray-700 hover:text-gray-900 mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver al formulario
          </Link>

          <Card className="w-full max-w-2xl mx-auto bg-white/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-center text-2xl font-bold text-gray-800">
                Resultados de tu Evaluación
              </CardTitle>
              <p className="text-center text-gray-600">Hola {formData.nombre}, estos son tus resultados:</p>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Individual Pension Components */}
              <div className="grid gap-4">
                <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg border">
                  <div>
                    <h3 className="font-semibold text-gray-800">Renta Vitalicia</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-blue-600">{formatCurrency(results.rentaVitalicia)}</p>
                    <p className="text-sm text-gray-500">mensual</p>
                  </div>
                </div>

                <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg border">
                  <div>
                    <h3 className="font-semibold text-gray-800">PGU</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-green-600">{formatCurrency(results.pgu)}</p>
                    <p className="text-sm text-gray-500">mensual</p>
                  </div>
                </div>

                <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg border">
                  <div>
                    <h3 className="font-semibold text-gray-800">Seguro Social</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-purple-600">{formatCurrency(results.seguroSocial)}</p>
                    <p className="text-sm text-gray-500">mensual</p>
                  </div>
                </div>
              </div>

              {/* Total */}
              <div className="border-t pt-4">
                <div className="flex justify-between items-center p-6 bg-orange-50 rounded-lg border-2 border-orange-200">
                  <div>
                    <h2 className="text-xl font-bold text-gray-800">Total Pensión Mensual</h2>
                    <p className="text-sm text-gray-600">Suma de todos los beneficios</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-orange-600">{formatCurrency(results.total)}</p>
                    <p className="text-sm text-gray-500">mensual</p>
                  </div>
                </div>
              </div>

              {/* Main Action Button */}
              <div className="flex flex-col items-center gap-4 pt-4">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-4 text-xl rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Agendar con Nico
                </Button>

                <Link href="/evaluar">
                  <Button variant="outline" className="px-8 py-2">
                    Recalcular
                  </Button>
                </Link>
              </div>

              {/* Disclaimer */}
              <div className="text-xs text-gray-500 text-center p-4 bg-gray-50 rounded-lg">
                <p className="font-semibold mb-2">DISCLAIMER</p>
                <p>
                  * Estos cálculos son estimaciones basadas en la información proporcionada. Los montos reales pueden
                  variar según las condiciones del mercado y regulaciones vigentes.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
