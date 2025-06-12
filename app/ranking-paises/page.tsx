"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, DollarSign, Shield, Heart, Thermometer, Users, Building, FileText } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AdSenseBanner } from "@/components/adsense-banner"

interface Country {
  id: string
  name: string
  flag: string
  overallScore: number
  costOfLiving: number
  safety: number
  healthcare: number
  climate: number
  expatCommunity: number
  infrastructure: number
  visaFriendliness: number
  highlights: string[]
  challenges: string[]
  bestFor: string
}

const countries: Country[] = [
  {
    id: "costa-rica",
    name: "Costa Rica",
    flag: "🇨🇷",
    overallScore: 88,
    costOfLiving: 75,
    safety: 85,
    healthcare: 95,
    climate: 90,
    expatCommunity: 90,
    infrastructure: 80,
    visaFriendliness: 85,
    highlights: ["Sistema de salud universal", "Estabilidad política", "Gran comunidad expat"],
    challenges: ["Costo de vida en aumento", "Trámites burocráticos"],
    bestFor: "Jubilados que priorizan atención médica de calidad",
  },
  {
    id: "panama",
    name: "Panamá",
    flag: "🇵🇦",
    overallScore: 85,
    costOfLiving: 70,
    safety: 75,
    healthcare: 85,
    climate: 85,
    expatCommunity: 85,
    infrastructure: 90,
    visaFriendliness: 95,
    highlights: ["Programa Pensionado", "Dólar estadounidense", "Excelente infraestructura"],
    challenges: ["Temporada de lluvias intensa", "Algunas áreas inseguras"],
    bestFor: "Jubilados estadounidenses que buscan facilidad de transición",
  },
  {
    id: "mexico",
    name: "México",
    flag: "🇲🇽",
    overallScore: 82,
    costOfLiving: 85,
    safety: 65,
    healthcare: 80,
    climate: 85,
    expatCommunity: 95,
    infrastructure: 75,
    visaFriendliness: 80,
    highlights: ["Excelente relación calidad-precio", "Rica cultura", "Proximidad a EE.UU."],
    challenges: ["Seguridad variable por región", "Barreras del idioma"],
    bestFor: "Jubilados con presupuesto limitado que buscan cultura vibrante",
  },
  {
    id: "uruguay",
    name: "Uruguay",
    flag: "🇺🇾",
    overallScore: 80,
    costOfLiving: 65,
    safety: 95,
    healthcare: 85,
    climate: 75,
    expatCommunity: 70,
    infrastructure: 85,
    visaFriendliness: 75,
    highlights: ["País más seguro de Latinoamérica", "Sociedad progresista", "Estabilidad política"],
    challenges: ["Costo de vida alto", "Clima frío en invierno"],
    bestFor: "Jubilados que priorizan seguridad y estabilidad",
  },
  {
    id: "chile",
    name: "Chile",
    flag: "🇨🇱",
    overallScore: 78,
    costOfLiving: 60,
    safety: 80,
    healthcare: 90,
    climate: 80,
    expatCommunity: 65,
    infrastructure: 95,
    visaFriendliness: 70,
    highlights: ["Infraestructura de primer mundo", "Excelente sistema de salud", "Diversidad geográfica"],
    challenges: ["Costo de vida alto", "Proceso de visa complejo"],
    bestFor: "Jubilados que buscan infraestructura moderna y atención médica de calidad",
  },
  {
    id: "ecuador",
    name: "Ecuador",
    flag: "🇪🇨",
    overallScore: 76,
    costOfLiving: 95,
    safety: 70,
    healthcare: 75,
    climate: 95,
    expatCommunity: 80,
    infrastructure: 65,
    visaFriendliness: 85,
    highlights: ["Costo de vida muy bajo", "Clima perfecto", "Dólar estadounidense"],
    challenges: ["Infraestructura limitada", "Inestabilidad política ocasional"],
    bestFor: "Jubilados con presupuesto muy limitado que buscan buen clima",
  },
  {
    id: "colombia",
    name: "Colombia",
    flag: "🇨🇴",
    overallScore: 74,
    costOfLiving: 90,
    safety: 60,
    healthcare: 75,
    climate: 90,
    expatCommunity: 75,
    infrastructure: 70,
    visaFriendliness: 80,
    highlights: ["Excelente relación calidad-precio", "Gente amigable", "Diversidad cultural"],
    challenges: ["Seguridad variable", "Infraestructura en desarrollo"],
    bestFor: "Jubilados aventureros que buscan cultura vibrante y bajo costo",
  },
  {
    id: "argentina",
    name: "Argentina",
    flag: "🇦🇷",
    overallScore: 70,
    costOfLiving: 80,
    safety: 65,
    healthcare: 80,
    climate: 70,
    expatCommunity: 75,
    infrastructure: 75,
    visaFriendliness: 65,
    highlights: ["Cultura europea", "Excelente gastronomía", "Atención médica de calidad"],
    challenges: ["Inestabilidad económica", "Inflación alta"],
    bestFor: "Jubilados que buscan sofisticación europea a precio latinoamericano",
  },
]

type SortOption = "overall" | "cost" | "safety" | "healthcare"

export default function RankingPaisesPage() {
  const [sortBy, setSortBy] = useState<SortOption>("overall")
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null)

  const getSortedCountries = () => {
    const sorted = [...countries].sort((a, b) => {
      switch (sortBy) {
        case "cost":
          return b.costOfLiving - a.costOfLiving
        case "safety":
          return b.safety - a.safety
        case "healthcare":
          return b.healthcare - a.healthcare
        default:
          return b.overallScore - a.overallScore
      }
    })
    return sorted
  }

  const getScoreColor = (score: number) => {
    if (score >= 85) return "text-green-600"
    if (score >= 70) return "text-yellow-600"
    return "text-red-600"
  }

  const getScoreLabel = (score: number) => {
    if (score >= 85) return "Excelente"
    if (score >= 70) return "Bueno"
    return "Regular"
  }

  const sortedCountries = getSortedCountries()

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div
        className="flex-1 bg-cover bg-center bg-no-repeat py-12"
        style={{
          backgroundImage: "url('/images/landscape-background.png')",
        }}
      >
        <div className="absolute inset-0 bg-white/20"></div>

        <div className="relative z-10 container mx-auto px-4">
          <Link href="/" className="inline-flex items-center text-gray-700 hover:text-gray-900 mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver al inicio
          </Link>

          <Card className="w-full max-w-6xl mx-auto bg-white/95 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-4xl font-bold text-gray-800 mb-4">
                Ranking Mejores Países Para Jubilar en Latinoamerica 2025
              </CardTitle>
              <p className="text-xl text-gray-600">
                Descubre los destinos más atractivos para tu jubilación en América Latina
              </p>
            </CardHeader>

            <CardContent className="space-y-8">
              {/* Filter Buttons */}
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  variant={sortBy === "overall" ? "default" : "outline"}
                  onClick={() => setSortBy("overall")}
                  className={sortBy === "overall" ? "bg-orange-500 hover:bg-orange-600" : ""}
                >
                  Ranking General
                </Button>
                <Button
                  variant={sortBy === "cost" ? "default" : "outline"}
                  onClick={() => setSortBy("cost")}
                  className={sortBy === "cost" ? "bg-orange-500 hover:bg-orange-600" : ""}
                >
                  Más Económico
                </Button>
                <Button
                  variant={sortBy === "safety" ? "default" : "outline"}
                  onClick={() => setSortBy("safety")}
                  className={sortBy === "safety" ? "bg-orange-500 hover:bg-orange-600" : ""}
                >
                  Más Seguro
                </Button>
                <Button
                  variant={sortBy === "healthcare" ? "default" : "outline"}
                  onClick={() => setSortBy("healthcare")}
                  className={sortBy === "healthcare" ? "bg-orange-500 hover:bg-orange-600" : ""}
                >
                  Mejor Atención Médica
                </Button>
              </div>

              {/* AdSense Banner después de los filtros */}
              <div className="py-6">
                <AdSenseBanner
                  adSlot="3333333333"
                  className="w-full"
                  style={{ display: "block", textAlign: "center", minHeight: "250px" }}
                />
              </div>

              {/* Countries Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedCountries.map((country, index) => (
                  <div key={country.id}>
                    <Card
                      className="cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                      onClick={() => setSelectedCountry(selectedCountry === country.id ? null : country.id)}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <span className="text-3xl">{country.flag}</span>
                            <div>
                              <h3 className="text-xl font-bold text-gray-800">{country.name}</h3>
                              <p className="text-sm text-gray-600">
                                #{index + 1} en{" "}
                                {sortBy === "overall"
                                  ? "ranking general"
                                  : sortBy === "cost"
                                    ? "más económico"
                                    : sortBy === "safety"
                                      ? "más seguro"
                                      : "mejor atención médica"}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div
                              className={`text-2xl font-bold ${getScoreColor(
                                sortBy === "cost"
                                  ? country.costOfLiving
                                  : sortBy === "safety"
                                    ? country.safety
                                    : sortBy === "healthcare"
                                      ? country.healthcare
                                      : country.overallScore,
                              )}`}
                            >
                              {sortBy === "cost"
                                ? country.costOfLiving
                                : sortBy === "safety"
                                  ? country.safety
                                  : sortBy === "healthcare"
                                    ? country.healthcare
                                    : country.overallScore}
                              /100
                            </div>
                            <p
                              className={`text-sm ${getScoreColor(
                                sortBy === "cost"
                                  ? country.costOfLiving
                                  : sortBy === "safety"
                                    ? country.safety
                                    : sortBy === "healthcare"
                                      ? country.healthcare
                                      : country.overallScore,
                              )}`}
                            >
                              {getScoreLabel(
                                sortBy === "cost"
                                  ? country.costOfLiving
                                  : sortBy === "safety"
                                    ? country.safety
                                    : sortBy === "healthcare"
                                      ? country.healthcare
                                      : country.overallScore,
                              )}
                            </p>
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-2 text-sm">
                          <div className="text-center">
                            <DollarSign className="h-4 w-4 mx-auto mb-1 text-green-600" />
                            <p className="text-gray-600">Costo</p>
                            <p className="font-semibold">{country.costOfLiving}/100</p>
                          </div>
                          <div className="text-center">
                            <Shield className="h-4 w-4 mx-auto mb-1 text-blue-600" />
                            <p className="text-gray-600">Seguridad</p>
                            <p className="font-semibold">{country.safety}/100</p>
                          </div>
                          <div className="text-center">
                            <Heart className="h-4 w-4 mx-auto mb-1 text-red-600" />
                            <p className="text-gray-600">Salud</p>
                            <p className="font-semibold">{country.healthcare}/100</p>
                          </div>
                        </div>

                        <p className="text-sm text-gray-600 mt-4 italic">{country.bestFor}</p>
                      </CardContent>
                    </Card>

                    {/* Detailed View - Inline */}
                    {selectedCountry === country.id && (
                      <Card className="mt-4 border-2 border-orange-200 bg-orange-50">
                        <CardContent className="p-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Scores */}
                            <div>
                              <h4 className="text-lg font-bold text-gray-800 mb-4">Puntuaciones Detalladas</h4>
                              <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-2">
                                    <DollarSign className="h-4 w-4 text-green-600" />
                                    <span>Costo de Vida</span>
                                  </div>
                                  <span className="font-semibold">{country.costOfLiving}/100</span>
                                </div>
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-2">
                                    <Shield className="h-4 w-4 text-blue-600" />
                                    <span>Seguridad</span>
                                  </div>
                                  <span className="font-semibold">{country.safety}/100</span>
                                </div>
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-2">
                                    <Heart className="h-4 w-4 text-red-600" />
                                    <span>Atención Médica</span>
                                  </div>
                                  <span className="font-semibold">{country.healthcare}/100</span>
                                </div>
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-2">
                                    <Thermometer className="h-4 w-4 text-orange-600" />
                                    <span>Clima</span>
                                  </div>
                                  <span className="font-semibold">{country.climate}/100</span>
                                </div>
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-2">
                                    <Users className="h-4 w-4 text-purple-600" />
                                    <span>Comunidad Expat</span>
                                  </div>
                                  <span className="font-semibold">{country.expatCommunity}/100</span>
                                </div>
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-2">
                                    <Building className="h-4 w-4 text-gray-600" />
                                    <span>Infraestructura</span>
                                  </div>
                                  <span className="font-semibold">{country.infrastructure}/100</span>
                                </div>
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-2">
                                    <FileText className="h-4 w-4 text-indigo-600" />
                                    <span>Facilidad de Visa</span>
                                  </div>
                                  <span className="font-semibold">{country.visaFriendliness}/100</span>
                                </div>
                              </div>
                            </div>

                            {/* Highlights and Challenges */}
                            <div>
                              <div className="mb-4">
                                <h4 className="text-lg font-bold text-green-700 mb-2">✅ Ventajas</h4>
                                <ul className="space-y-1">
                                  {country.highlights.map((highlight, idx) => (
                                    <li key={idx} className="text-sm text-gray-700">
                                      • {highlight}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h4 className="text-lg font-bold text-red-700 mb-2">⚠️ Desafíos</h4>
                                <ul className="space-y-1">
                                  {country.challenges.map((challenge, idx) => (
                                    <li key={idx} className="text-sm text-gray-700">
                                      • {challenge}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                ))}
              </div>

              {/* AdSense Banner antes de la metodología */}
              <div className="py-6">
                <AdSenseBanner
                  adSlot="4444444444"
                  className="w-full"
                  style={{ display: "block", textAlign: "center", minHeight: "250px" }}
                />
              </div>

              {/* Methodology Section */}
              <Card className="mt-12 bg-gray-50">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-800">Metodología y Fuentes</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Cómo Calculamos las Puntuaciones</h3>
                    <p className="text-gray-700 mb-4">
                      Cada país es evaluado en 7 factores clave, con puntuaciones de 0-100 puntos:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <p>
                          <strong>Costo de Vida (25%):</strong> Vivienda, alimentación, transporte, servicios
                        </p>
                        <p>
                          <strong>Seguridad (20%):</strong> Índices de criminalidad, estabilidad política
                        </p>
                        <p>
                          <strong>Atención Médica (20%):</strong> Calidad, accesibilidad, costo de servicios
                        </p>
                        <p>
                          <strong>Clima (10%):</strong> Temperatura, humedad, estaciones
                        </p>
                      </div>
                      <div className="space-y-2">
                        <p>
                          <strong>Comunidad Expat (10%):</strong> Tamaño y apoyo de comunidad extranjera
                        </p>
                        <p>
                          <strong>Infraestructura (10%):</strong> Internet, transporte, servicios públicos
                        </p>
                        <p>
                          <strong>Facilidad de Visa (5%):</strong> Requisitos y procesos de residencia
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Fuentes de Información</h3>
                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                      <p className="text-sm text-yellow-800 mb-2">
                        <strong>Nota:</strong> Los datos mostrados son simulados para fines demostrativos.
                      </p>
                    </div>
                    <p className="text-gray-700 mb-3">Para datos reales, recomendamos consultar:</p>
                    <ul className="space-y-1 text-gray-700">
                      <li>
                        • <strong>Numbeo.com:</strong> Costo de vida y índices de criminalidad
                      </li>
                      <li>
                        • <strong>Expatistan.com:</strong> Comparaciones de costo de vida
                      </li>
                      <li>
                        • <strong>WHO Global Health Observatory:</strong> Datos de sistemas de salud
                      </li>
                      <li>
                        • <strong>Global Peace Index:</strong> Índices de seguridad y paz
                      </li>
                      <li>
                        • <strong>World Bank:</strong> Indicadores de infraestructura
                      </li>
                      <li>
                        • <strong>Henley Passport Index:</strong> Facilidad de visa y movilidad
                      </li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">¿Planificando tu jubilación?</h3>
                    <p className="text-gray-700 mb-4">
                      Antes de mudarte al extranjero, asegúrate de tener clara tu situación previsional en Chile.
                    </p>
                    <Link href="/evaluar">
                      <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                        Evalúa tu pensión chilena gratis
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
