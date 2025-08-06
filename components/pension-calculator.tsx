"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Calculator, DollarSign, Calendar, TrendingUp } from 'lucide-react'

interface PensionCalculatorProps {
  language: 'es' | 'en'
}

export default function PensionCalculator({ language }: PensionCalculatorProps) {
  const [desiredPension, setDesiredPension] = useState<string>("1000")
  const [years, setYears] = useState<number[]>([5])
  const [requiredCapital, setRequiredCapital] = useState<number>(0)

  const translations = {
    es: {
      title: "Calculadora de Pensiones",
      subtitle: "Calcula el capital necesario para tu jubilación",
      desiredPension: "Pensión mensual deseada ($)",
      retirementYears: "Años de jubilación",
      year: "año",
      years: "años",
      requiredCapital: "Capital necesario",
      assumptions: "Asumiendo 10% de rentabilidad anual",
      monthlyPayment: "Pago mensual requerido",
      startInvesting: "¡Comienza a invertir hoy!"
    },
    en: {
      title: "Pension Calculator",
      subtitle: "Calculate the capital needed for your retirement",
      desiredPension: "Desired monthly pension ($)",
      retirementYears: "Retirement years",
      year: "year",
      years: "years",
      requiredCapital: "Required capital",
      assumptions: "Assuming 10% annual return",
      monthlyPayment: "Required monthly payment",
      startInvesting: "Start investing today!"
    }
  }

  const t = translations[language]

  // Calculate required capital using present value of annuity formula
  useEffect(() => {
    const monthlyPension = parseFloat(desiredPension) || 0
    const totalYears = years[0]
    const monthlyRate = 0.10 / 12 // 10% annual rate / 12 months
    const totalMonths = totalYears * 12

    if (monthlyPension > 0 && totalYears > 0) {
      // Present Value of Annuity formula: PMT * [(1 - (1 + r)^-n) / r]
      const presentValue = monthlyPension * ((1 - Math.pow(1 + monthlyRate, -totalMonths)) / monthlyRate)
      setRequiredCapital(presentValue)
    } else {
      setRequiredCapital(0)
    }
  }, [desiredPension, years])

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className="flex-1 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">{t.title}</h1>
          <p className="text-lg text-gray-600">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Input Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calculator className="h-5 w-5" />
                <span>Parámetros</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Desired Pension */}
              <div className="space-y-2">
                <Label htmlFor="pension">{t.desiredPension}</Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="pension"
                    type="number"
                    value={desiredPension}
                    onChange={(e) => setDesiredPension(e.target.value)}
                    className="pl-10"
                    placeholder="1000"
                  />
                </div>
              </div>

              {/* Years Slider */}
              <div className="space-y-4">
                <Label>{t.retirementYears}</Label>
                <div className="px-2">
                  <Slider
                    value={years}
                    onValueChange={setYears}
                    max={10}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>1 {t.year}</span>
                  <span className="font-medium text-lg text-gray-800">
                    {years[0]} {years[0] === 1 ? t.year : t.years}
                  </span>
                  <span>10 {t.years}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5" />
                <span>Resultados</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Required Capital */}
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="text-sm text-gray-600 mb-2">{t.requiredCapital}</div>
                <div className="text-4xl font-bold text-blue-600">
                  {formatCurrency(requiredCapital)}
                </div>
                <div className="text-xs text-gray-500 mt-2">{t.assumptions}</div>
              </div>

              {/* Breakdown */}
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">Pensión mensual</span>
                  </div>
                  <span className="font-semibold">{formatCurrency(parseFloat(desiredPension) || 0)}</span>
                </div>

                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">Total de meses</span>
                  </div>
                  <span className="font-semibold">{years[0] * 12} meses</span>
                </div>

                <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-gray-600">Total a recibir</span>
                  </div>
                  <span className="font-semibold text-green-600">
                    {formatCurrency((parseFloat(desiredPension) || 0) * years[0] * 12)}
                  </span>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg">
                <p className="font-semibold">{t.startInvesting}</p>
                <p className="text-sm opacity-90">Compra $CAPITAL para comenzar</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
