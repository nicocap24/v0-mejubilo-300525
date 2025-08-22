"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { formatCurrency } from "@/utils/format"

export default function SimuladorSimplePage() {
  const [pensionDeseada, setPensionDeseada] = useState<number>(1000000)
  const [anos, setAnos] = useState<number[]>([5])
  const [capitalRequerido, setCapitalRequerido] = useState<number>(0)

  // Calcular capital requerido usando fórmula de anualidad
  useEffect(() => {
    const tasaMensual = 0.1 / 12 // 10% anual / 12 meses
    const numeroPagos = anos[0] * 12

    // Fórmula: PV = PMT × [(1 - (1 + r)^-n) / r]
    const factor = (1 - Math.pow(1 + tasaMensual, -numeroPagos)) / tasaMensual
    const capital = pensionDeseada * factor

    setCapitalRequerido(capital)
  }, [pensionDeseada, anos])

  const handlePensionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^\d]/g, "")
    setPensionDeseada(Number(value))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-16">
        <Card className="max-w-2xl mx-auto p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Simulador Simple de Jubilación</h1>
            <p className="text-gray-600">Descubre cuánto necesitas depositar para obtener la pensión que deseas</p>
          </div>

          <div className="space-y-8">
            {/* Input Pensión Deseada */}
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-4">
                ¿Con cuánto te gustaría jubilar hoy?
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg">$</span>
                <input
                  type="text"
                  value={formatCurrency(pensionDeseada)}
                  onChange={handlePensionChange}
                  className="w-full pl-8 pr-16 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="1.000.000"
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">/ mes</span>
              </div>
            </div>

            {/* Slider Años */}
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-4">
                Elige por cuánto tiempo te quieres jubilar:
              </label>
              <div className="px-4">
                <Slider value={anos} onValueChange={setAnos} max={10} min={1} step={1} className="w-full" />
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>1 año</span>
                  <span className="font-semibold text-orange-600">
                    {anos[0]} {anos[0] === 1 ? "año" : "años"}
                  </span>
                  <span>10 años</span>
                </div>
              </div>
            </div>

            {/* Resultado */}
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Resultado:</h3>
              <p className="text-lg text-gray-700">
                Deposita <span className="font-bold text-orange-600 text-xl">${formatCurrency(capitalRequerido)}</span>{" "}
                y obtén esta pensión ahora.
              </p>
              <p className="text-sm text-gray-500 mt-2">*Cálculo basado en una rentabilidad anual del 10%</p>
            </div>

            {/* Botones de Acción */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white flex-1" size="lg">
                Quiero hacer esto realidad
              </Button>
              <Button
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 flex-1 bg-transparent"
                size="lg"
                onClick={() => window.history.back()}
              >
                Volver
              </Button>
            </div>
          </div>
        </Card>
      </main>

      <Footer />
    </div>
  )
}
