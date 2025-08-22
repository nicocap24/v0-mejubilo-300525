"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { formatCurrency, parseCurrency } from "@/utils/format"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function SimuladorSimplePage() {
  const [pensionDeseada, setPensionDeseada] = useState<number>(1000000)
  const [anos, setAnos] = useState<number[]>([5])
  const [capitalRequerido, setCapitalRequerido] = useState<number>(0)

  // Calcular capital requerido usando fórmula de anualidad
  useEffect(() => {
    const calcularCapital = () => {
      const pensionMensual = pensionDeseada
      const tasaAnual = 0.1 // 10% anual
      const tasaMensual = tasaAnual / 12 // 0.833% mensual
      const numeroPagos = anos[0] * 12 // años * 12 meses

      // Fórmula de valor presente de anualidad: PV = PMT × [(1 - (1 + r)^-n) / r]
      const factor = (1 - Math.pow(1 + tasaMensual, -numeroPagos)) / tasaMensual
      const capital = pensionMensual * factor

      setCapitalRequerido(capital)
    }

    if (pensionDeseada > 0 && anos[0] > 0) {
      calcularCapital()
    }
  }, [pensionDeseada, anos])

  const handlePensionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseCurrency(e.target.value)
    setPensionDeseada(value)
  }

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
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-gray-800">Simulador de Jubilación Simple</CardTitle>
              <p className="text-gray-600 mt-2">
                Calcula cuánto necesitas depositar para obtener la pensión que deseas
              </p>
            </CardHeader>

            <CardContent className="space-y-8">
              {/* Pensión Deseada */}
              <div className="text-center">
                <label className="block text-lg font-semibold text-gray-700 mb-4">
                  ¿Con cuánto te gustaría jubilar hoy?
                </label>
                <div className="relative max-w-md mx-auto">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg">$</span>
                  <Input
                    type="text"
                    value={formatCurrency(pensionDeseada)}
                    onChange={handlePensionChange}
                    className="pl-8 pr-16 text-center text-xl py-3 border-2 border-orange-200 focus:border-orange-500"
                    placeholder="1.000.000"
                  />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">/ mes</span>
                </div>
              </div>

              {/* Slider de Años */}
              <div className="text-center">
                <label className="block text-lg font-semibold text-gray-700 mb-4">
                  Elige por cuánto tiempo te quieres jubilar:
                </label>
                <div className="max-w-md mx-auto">
                  <Slider value={anos} onValueChange={setAnos} max={10} min={1} step={1} className="mb-4" />
                  <div className="flex justify-between text-sm text-gray-500 mb-2">
                    <span>1 año</span>
                    <span>10 años</span>
                  </div>
                  <div className="text-2xl font-bold text-orange-500">
                    {anos[0]} {anos[0] === 1 ? "año" : "años"}
                  </div>
                </div>
              </div>

              {/* Resultado */}
              <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Capital requerido:</h3>
                <div className="text-3xl font-bold text-orange-600 mb-4">${formatCurrency(capitalRequerido)}</div>
                <p className="text-lg text-gray-700">
                  <strong>Deposita ${formatCurrency(capitalRequerido)}</strong> y obtén esta pensión ahora.
                </p>
                <p className="text-sm text-gray-500 mt-2">*Cálculo basado en una rentabilidad anual del 10%</p>
              </div>

              {/* Detalles del Cálculo */}
              <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-600">
                <h4 className="font-semibold mb-2">¿Cómo calculamos esto?</h4>
                <ul className="space-y-1">
                  <li>• Pensión mensual deseada: ${formatCurrency(pensionDeseada)}</li>
                  <li>
                    • Período: {anos[0]} {anos[0] === 1 ? "año" : "años"} ({anos[0] * 12} pagos mensuales)
                  </li>
                  <li>• Rentabilidad anual: 10% (0.833% mensual)</li>
                  <li>• Fórmula: Valor presente de anualidad</li>
                </ul>
              </div>

              {/* Botones de Acción */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3">Contactar Asesor</Button>
                <Button
                  variant="outline"
                  className="flex-1 border-orange-500 text-orange-500 hover:bg-orange-50 py-3 bg-transparent"
                >
                  Simular Otros Escenarios
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
