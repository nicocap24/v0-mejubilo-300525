"use client"

import { useSearchParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { InfoTooltip } from "@/components/info-tooltip"
import { formatCurrency, parseCurrency, calculateAge } from "@/utils/format"
import { ThumbsUp, ThumbsDown, Share2, Calculator } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ResultadosPage() {
  const searchParams = useSearchParams()
  const [feedback, setFeedback] = useState<"positive" | "negative" | null>(null)

  // Get form data from URL params
  const saldoStr = searchParams.get("saldo") || "0"
  const fechaNacimiento = searchParams.get("fechaNacimiento") || ""
  const genero = (searchParams.get("genero") as "hombre" | "mujer") || "hombre"
  const email = searchParams.get("email") || ""

  const saldo = parseCurrency(saldoStr)
  const edad = calculateAge(fechaNacimiento)
  const edadJubilacion = genero === "mujer" ? 60 : 65

  // Cálculos de pensión
  const calcularRentaVitalicia = (saldo: number): number => {
    // 3.27% anual = 0.272% mensual aproximadamente
    return saldo * 0.00272
  }

  const calcularPGU = (rentaVitalicia: number): number => {
    const pguMaxima = 206173 // Valor 2024
    const umbralMinimo = 0
    const umbralMaximo = 1048517 // Valor 2024

    if (rentaVitalicia <= umbralMinimo) {
      return pguMaxima
    } else if (rentaVitalicia >= umbralMaximo) {
      return 0
    } else {
      // Reducción lineal
      const factor = (umbralMaximo - rentaVitalicia) / (umbralMaximo - umbralMinimo)
      return pguMaxima * factor
    }
  }

  const calcularSeguroSocial = (saldo: number): number => {
    if (saldo <= 25000000) return 0
    if (saldo <= 50000000) return 50000 // Estimación para 20+ años cotizados
    return 75000 // Estimación para 25+ años cotizados
  }

  const rentaVitalicia = calcularRentaVitalicia(saldo)
  const pgu = calcularPGU(rentaVitalicia)
  const seguroSocial = calcularSeguroSocial(saldo)
  const pensionTotal = rentaVitalicia + pgu + seguroSocial

  // Evaluación de la pensión
  const evaluarPension = (pension: number) => {
    if (pension >= 800000) return { nivel: "excelente", color: "bg-green-500", emoji: "🎉" }
    if (pension >= 600000) return { nivel: "buena", color: "bg-blue-500", emoji: "👍" }
    if (pension >= 400000) return { nivel: "regular", color: "bg-yellow-500", emoji: "⚠️" }
    return { nivel: "baja", color: "bg-red-500", emoji: "👎" }
  }

  const evaluacion = evaluarPension(pensionTotal)

  const handleFeedback = (type: "positive" | "negative") => {
    setFeedback(type)
    // Here you would send feedback to your analytics
    console.log(`Feedback: ${type}`)
  }

  const handleShare = () => {
    const text = `Mi pensión estimada con la reforma sería de ${formatCurrency(pensionTotal)} mensuales. ¡Calcula la tuya en MeJubilo.com!`

    if (navigator.share) {
      navigator.share({
        title: "Mi Simulación de Pensión",
        text: text,
        url: window.location.origin,
      })
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(text)
      alert("Texto copiado al portapapeles")
    }
  }

  const recalculateUrl = `/evaluar?saldo=${encodeURIComponent(saldoStr)}&fechaNacimiento=${encodeURIComponent(fechaNacimiento)}&genero=${genero}${email ? `&email=${encodeURIComponent(email)}` : ""}`

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Resultado Principal */}
          <Card>
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Badge className={`${evaluacion.color} text-white text-lg px-4 py-2`}>
                  {evaluacion.emoji} Pensión {evaluacion.nivel}
                </Badge>
              </div>
              <CardTitle className="text-4xl font-bold text-gray-800">{formatCurrency(pensionTotal)}</CardTitle>
              <p className="text-gray-600">Esta sería tu pensión mensual estimada con la reforma previsional</p>
            </CardHeader>
          </Card>

          {/* Desglose de la Pensión */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                Desglose de tu Pensión
                <InfoTooltip content="Tu pensión total se compone de tres partes: Renta Vitalicia (tu AFP), PGU (aporte del Estado) y Seguro Social (nuevo beneficio)" />
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Renta Vitalicia */}
              <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                <div>
                  <h3 className="font-semibold text-blue-800">Renta Vitalicia (AFP)</h3>
                  <p className="text-sm text-blue-600">Basada en tu saldo acumulado</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-blue-800">{formatCurrency(rentaVitalicia)}</p>
                  <p className="text-sm text-blue-600">3.27% anual</p>
                </div>
              </div>

              {/* PGU */}
              <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                <div>
                  <h3 className="font-semibold text-green-800">PGU (Pensión Garantizada Universal)</h3>
                  <p className="text-sm text-green-600">Aporte del Estado</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-green-800">{formatCurrency(pgu)}</p>
                  <p className="text-sm text-green-600">Según ingresos</p>
                </div>
              </div>

              {/* Seguro Social */}
              <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
                <div>
                  <h3 className="font-semibold text-purple-800">Seguro Social</h3>
                  <p className="text-sm text-purple-600">Nuevo beneficio de la reforma</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-purple-800">{formatCurrency(seguroSocial)}</p>
                  <p className="text-sm text-purple-600">Por años cotizados</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Información Personal */}
          <Card>
            <CardHeader>
              <CardTitle>Datos de tu Simulación</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Saldo AFP</p>
                <p className="text-lg font-semibold">{formatCurrency(saldo)}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Edad actual</p>
                <p className="text-lg font-semibold">{edad} años</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Edad de jubilación</p>
                <p className="text-lg font-semibold">{edadJubilacion} años</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Años para jubilar</p>
                <p className="text-lg font-semibold">{Math.max(0, edadJubilacion - edad)} años</p>
              </div>
            </CardContent>
          </Card>

          {/* Acciones */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href={recalculateUrl}>
              <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                <Calculator className="w-4 h-4" />
                Recalcular
              </Button>
            </Link>

            <Button onClick={handleShare} variant="outline" className="flex items-center gap-2 bg-transparent">
              <Share2 className="w-4 h-4" />
              Compartir
            </Button>

            <Link href="/jubila-con-nico">
              <Button className="bg-emerald-600 hover:bg-emerald-700">Agenda conmigo</Button>
            </Link>
          </div>

          {/* Feedback */}
          <Card>
            <CardContent className="text-center py-6">
              <p className="mb-4 text-gray-600">¿Te fue útil esta simulación?</p>
              <div className="flex justify-center gap-4">
                <Button
                  variant={feedback === "positive" ? "default" : "outline"}
                  onClick={() => handleFeedback("positive")}
                  className="flex items-center gap-2"
                >
                  <ThumbsUp className="w-4 h-4" />
                  Sí, muy útil
                </Button>
                <Button
                  variant={feedback === "negative" ? "destructive" : "outline"}
                  onClick={() => handleFeedback("negative")}
                  className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white"
                >
                  <ThumbsDown className="w-4 h-4" />
                  No me sirvió
                </Button>
              </div>
              {feedback && <p className="mt-2 text-sm text-gray-500">¡Gracias por tu feedback!</p>}
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
