"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"

interface PensionResultsProps {
  isOpen: boolean
  onClose: () => void
  onBack: () => void
  formData: {
    nombre: string
    saldoAFP: string
    fechaNacimiento: string
  }
}

export function PensionResults({ isOpen, onClose, onBack, formData }: PensionResultsProps) {
  if (!isOpen) return null

  // Simple calculation logic (you can replace with real calculations)
  const calculatePensions = () => {
    const saldo = Number.parseFloat(formData.saldoAFP.replace(/[$.]/g, "").replace(/,/g, "")) || 0
    const birthDate = new Date(formData.fechaNacimiento)
    const today = new Date()
    const age = today.getFullYear() - birthDate.getFullYear()

    // Simplified calculations (replace with real formulas)
    const rentaVitalicia = Math.round(saldo * 0.045) // 4.5% of AFP balance
    const pgu = age >= 65 ? 206173 : 0 // Fixed PGU amount for 2024
    const seguroSocial = Math.round(saldo * 0.02) // 2% of AFP balance

    return {
      rentaVitalicia,
      pgu,
      seguroSocial,
      total: rentaVitalicia + pgu + seguroSocial,
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

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader className="relative">
          <Button variant="ghost" size="sm" className="absolute left-2 top-2 h-8 w-8 p-0" onClick={onBack}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <CardTitle className="text-center text-2xl font-bold text-gray-800">Resultados de tu Evaluación</CardTitle>
          <p className="text-center text-gray-600">Hola {formData.nombre}, estos son tus resultados:</p>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Individual Pension Components */}
          <div className="grid gap-4">
            <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg border">
              <div>
                <h3 className="font-semibold text-gray-800">Renta Vitalicia</h3>
                <p className="text-sm text-gray-600">Basada en tu saldo AFP</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-blue-600">{formatCurrency(results.rentaVitalicia)}</p>
                <p className="text-sm text-gray-500">mensual</p>
              </div>
            </div>

            <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg border">
              <div>
                <h3 className="font-semibold text-gray-800">PGU</h3>
                <p className="text-sm text-gray-600">Pensión Garantizada Universal</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-green-600">{formatCurrency(results.pgu)}</p>
                <p className="text-sm text-gray-500">mensual</p>
              </div>
            </div>

            <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg border">
              <div>
                <h3 className="font-semibold text-gray-800">Seguro Social</h3>
                <p className="text-sm text-gray-600">Beneficio adicional</p>
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

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button variant="outline" className="flex-1" onClick={onBack}>
              Recalcular
            </Button>
            <Button
              className="flex-1 bg-orange-500 hover:bg-orange-600 text-white"
              onClick={() => window.open("https://calendly.com/nico-me-jubilo/30min", "_blank")}
            >
              Agendar videollamada
            </Button>
          </div>

          {/* Disclaimer */}
          <div className="text-xs text-gray-500 text-center p-4 bg-gray-50 rounded-lg">
            <p>
              * Estos cálculos son estimaciones basadas en la información proporcionada. Los montos reales pueden variar
              según las condiciones del mercado y regulaciones vigentes.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
