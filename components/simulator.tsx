"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calculator, TrendingUp } from "lucide-react"

export function Simulator() {
  const [edad, setEdad] = useState("")
  const [saldo, setSaldo] = useState("")
  const [sueldo, setSueldo] = useState("")
  const [resultado, setResultado] = useState<any>(null)

  const calcular = () => {
    const edadNum = Number.parseInt(edad)
    const saldoNum = Number.parseInt(saldo)
    const sueldoNum = Number.parseInt(sueldo)

    // Simulación básica de cálculo
    const pensionActual = saldoNum * 0.04 // 4% del saldo
    const pensionReforma = pensionActual * 1.2 // 20% más con reforma
    const diferencia = pensionReforma - pensionActual

    setResultado({
      pensionActual: Math.round(pensionActual),
      pensionReforma: Math.round(pensionReforma),
      diferencia: Math.round(diferencia),
      porcentajeMejora: 20,
    })
  }

  return (
    <section id="simulador" className="py-24 px-6 bg-gradient-to-br from-emerald-50 to-blue-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Calculator className="w-4 h-4" />
            <span>Herramienta Gratuita</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Simulador</span>
            <br />
            <span className="bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">
              Reforma Previsional
            </span>
          </h2>
          <p className="text-xl text-gray-600">Descubre cuánto podría mejorar tu pensión con la nueva reforma</p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-2xl shadow-gray-200/50 border border-gray-100">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Formulario */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Tu edad actual</label>
                <input
                  type="number"
                  value={edad}
                  onChange={(e) => setEdad(e.target.value)}
                  placeholder="Ej: 35"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Saldo actual en tu AFP</label>
                <input
                  type="number"
                  value={saldo}
                  onChange={(e) => setSaldo(e.target.value)}
                  placeholder="Ej: 15000000"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Tu sueldo actual</label>
                <input
                  type="number"
                  value={sueldo}
                  onChange={(e) => setSueldo(e.target.value)}
                  placeholder="Ej: 800000"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors"
                />
              </div>

              <Button
                onClick={calcular}
                disabled={!edad || !saldo || !sueldo}
                className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white py-4 rounded-xl text-lg font-semibold disabled:opacity-50"
              >
                <Calculator className="w-5 h-5 mr-2" />
                Calcular mi pensión
              </Button>
            </div>

            {/* Resultados */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100">
              {resultado ? (
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Tus resultados</h3>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-red-50 p-4 rounded-xl border border-red-100">
                      <p className="text-sm text-red-600 font-semibold mb-1">Pensión actual</p>
                      <p className="text-2xl font-bold text-red-700">${resultado.pensionActual.toLocaleString()}</p>
                    </div>

                    <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                      <p className="text-sm text-emerald-600 font-semibold mb-1">Con la reforma</p>
                      <p className="text-2xl font-bold text-emerald-700">
                        ${resultado.pensionReforma.toLocaleString()}
                      </p>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-blue-600 font-semibold mb-1">Diferencia mensual</p>
                          <p className="text-xl font-bold text-blue-700">+${resultado.diferencia.toLocaleString()}</p>
                        </div>
                        <div className="flex items-center space-x-1 text-emerald-600">
                          <TrendingUp className="w-5 h-5" />
                          <span className="font-bold">+{resultado.porcentajeMejora}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <Calculator className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">Completa los datos para ver tu simulación</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
