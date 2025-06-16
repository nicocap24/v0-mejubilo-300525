"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function InvestPage() {
  const [pensionAmount, setPensionAmount] = useState<string>("500000")
  const [years, setYears] = useState<number>(5)

  // Calcular el capital necesario con una rentabilidad anual del 8%
  const calculateCapital = () => {
    const monthlyPension = Number.parseFloat(pensionAmount.replace(/[$.]/g, "").replace(/,/g, "")) || 0
    const annualPension = monthlyPension * 12

    // Fórmula para calcular el capital necesario con una tasa de retorno del 8%
    // Capital = Anualidad * [(1 - (1 + r)^-n) / r]
    // Donde r es la tasa de interés y n es el número de años

    const r = 0.08 // 8% anual
    const n = years

    const factor = (1 - Math.pow(1 + r, -n)) / r
    const capital = annualPension * factor

    return Math.round(capital)
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
      minimumFractionDigits: 0,
    }).format(value)
  }

  const handlePensionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    // Si el usuario está borrando todo, resetear el campo
    if (value === "" || value === "$") {
      setPensionAmount("")
      return
    }

    // Eliminar caracteres no numéricos y formatear
    const numericValue = value.replace(/\D/g, "")
    if (numericValue) {
      const formattedValue = `$${Number(numericValue).toLocaleString("es-CL")}`
      setPensionAmount(formattedValue)
    } else {
      setPensionAmount("")
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div
        className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/landscape-background.png')",
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-white/10"></div>

        {/* Main Content Card */}
        <Card className="relative z-10 w-full max-w-4xl mx-auto shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
          <CardContent className="p-12 md:p-16">
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-8 leading-tight text-center">
              ¿Ya quieres <span className="text-orange-500">jubilar</span>?
            </h1>

            <div className="max-w-2xl mx-auto space-y-8">
              {/* Pension Amount Input */}
              <div className="space-y-4">
                <Label htmlFor="pensionAmount" className="text-xl font-medium">
                  ¿Con cuánto quieres jubilar mensualmente?
                </Label>
                <Input
                  id="pensionAmount"
                  type="text"
                  value={pensionAmount}
                  onChange={handlePensionChange}
                  className="h-14 text-xl text-center font-semibold"
                />
              </div>

              {/* Years Slider */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <Label htmlFor="years" className="text-xl font-medium">
                    ¿Por cuánto tiempo? ({years} {years === 1 ? "año" : "años"})
                  </Label>
                </div>
                <Slider
                  id="years"
                  min={1}
                  max={10}
                  step={1}
                  value={[years]}
                  onValueChange={(value) => setYears(value[0])}
                  className="py-4"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>1 año</span>
                  <span>10 años</span>
                </div>
              </div>

              {/* Result */}
              <div className="bg-orange-50 p-8 rounded-lg border border-orange-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Capital necesario</h2>
                <p className="text-4xl font-bold text-orange-600 text-center mb-4">
                  {formatCurrency(calculateCapital())}
                </p>
                <p className="text-gray-600 text-center mb-6">
                  Este es el capital que necesitarías para financiar una pensión mensual de {pensionAmount} durante{" "}
                  {years} {years === 1 ? "año" : "años"}, asumiendo una rentabilidad anual del 8%.
                </p>
                <div className="flex justify-center">
                  <Link href="/evaluar">
                    <Button
                      size="lg"
                      className="bg-red-500 hover:bg-red-600 text-white px-16 py-6 text-xl md:text-2xl rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                      Quiero jubilar ahora
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  )
}
