"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Slider } from "@/components/ui/slider"
import { formatCurrency, parseCurrency, formatCurrencyInput } from "@/utils/format"

export default function SimuladorSimple() {
  const [pensionDeseada, setPensionDeseada] = useState("")
  const [anos, setAnos] = useState([5])
  const [capitalRequerido, setCapitalRequerido] = useState(0)

  // Calcular capital requerido usando fórmula de anualidad
  useEffect(() => {
    const pension = parseCurrency(pensionDeseada)
    if (pension > 0) {
      const r = 0.1 / 12 // 10% anual / 12 meses = 0.833% mensual
      const n = anos[0] * 12 // número de pagos mensuales

      // Fórmula de anualidad: PV = PMT × [(1 - (1 + r)^-n) / r]
      const pv = pension * ((1 - Math.pow(1 + r, -n)) / r)
      setCapitalRequerido(pv)
    } else {
      setCapitalRequerido(0)
    }
  }, [pensionDeseada, anos])

  const handlePensionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCurrencyInput(e.target.value)
    setPensionDeseada(formatted)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center py-12"
        style={{
          backgroundImage: "url('/images/new-landscape-background.png')",
        }}
      >
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-lg mx-4 w-full">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Simulador de <span className="text-orange-500">Jubilación</span>
          </h1>

          <div className="space-y-8">
            {/* Input de pensión deseada */}
            <div className="text-center">
              <label className="block text-lg font-medium text-gray-700 mb-4">
                ¿Con cuánto te gustaría jubilar hoy?
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg">$</span>
                <input
                  type="text"
                  value={pensionDeseada}
                  onChange={handlePensionChange}
                  placeholder="0"
                  className="w-full pl-8 pr-16 py-3 text-xl text-center border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none"
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">/ mes</span>
              </div>
            </div>

            {/* Slider de años */}
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-4 text-center">
                Elige por cuánto tiempo te quieres jubilar:
              </label>
              <div className="px-4">
                <Slider value={anos} onValueChange={setAnos} max={10} min={1} step={1} className="w-full" />
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>1 año</span>
                  <span className="font-bold text-orange-500">
                    {anos[0]} año{anos[0] > 1 ? "s" : ""}
                  </span>
                  <span>10 años</span>
                </div>
              </div>
            </div>

            {/* Resultado */}
            {capitalRequerido > 0 && (
              <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6 text-center">
                <p className="text-lg text-gray-700 mb-2">Deposita</p>
                <p className="text-3xl font-bold text-orange-600 mb-2">{formatCurrency(capitalRequerido)}</p>
                <p className="text-lg text-gray-700">y obtén esta pensión ahora</p>
                <p className="text-sm text-gray-500 mt-2">Calculado con 10% de rentabilidad anual</p>
              </div>
            )}

            {/* Botones de acción */}
            <div className="space-y-3">
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg font-medium transition-colors">
                Quiero hacer este depósito
              </button>
              <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 py-3 px-6 rounded-lg font-medium transition-colors">
                Ver simulador completo
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
