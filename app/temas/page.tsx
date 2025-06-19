"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemedHeader } from "@/components/themed-header"
import { ThemedHeroSection } from "@/components/themed-hero-section"
import { ThemedFooter } from "@/components/themed-footer"
import { ArrowLeft, Palette, Eye } from "lucide-react"
import Link from "next/link"
import "./themes.css"

const themes = [
  {
    id: "cordillera",
    name: "Cordillera Trust",
    description: "Verde-azul inspirado en los Andes. Transmite crecimiento y estabilidad financiera.",
    class: "theme-cordillera",
    colors: {
      primary: "#0F766E",
      secondary: "#1F2937",
      accent: "#10B981",
      neutral: "#6B7280",
    },
    pros: ["Moderno y profesional", "Asociado con crecimiento", "Usado por fintech exitosas"],
    cons: ["Puede parecer muy 'bancario'", "Menos cálido que el actual"],
  },
  {
    id: "chilean",
    name: "Chilean Sky",
    description: "Azul-rojo patriótico inspirado en la bandera chilena. Transmite confianza nacional.",
    class: "theme-chilean",
    colors: {
      primary: "#1E3A8A",
      secondary: "#DC2626",
      accent: "#F8FAFC",
      neutral: "#475569",
    },
    pros: ["Conecta emocionalmente con chilenos", "Transmite confianza", "Patriótico sin ser político"],
    cons: ["Puede ser muy 'institucional'", "Rojo puede ser agresivo"],
  },
  {
    id: "sunset",
    name: "Sunset Confidence",
    description: "Evolución del naranja actual. Mantiene la familiaridad pero añade sofisticación.",
    class: "theme-sunset",
    colors: {
      primary: "#E67E22",
      secondary: "#2C3E50",
      accent: "#F39C12",
      neutral: "#34495E",
    },
    pros: ["Mantiene brand recognition", "Más sofisticado", "Combina cálido con profesional"],
    cons: ["Menos diferenciación", "Puede seguir siendo muy 'energético'"],
  },
]

export default function TemasPage() {
  const [selectedTheme, setSelectedTheme] = useState("cordillera")
  const [viewMode, setViewMode] = useState<"selector" | "comparison">("selector")

  const currentTheme = themes.find((t) => t.id === selectedTheme) || themes[0]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="inline-flex items-center text-gray-700 hover:text-gray-900">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al sitio principal
            </Link>

            <div className="flex items-center gap-4">
              <Button
                variant={viewMode === "selector" ? "default" : "outline"}
                onClick={() => setViewMode("selector")}
                className="flex items-center gap-2"
              >
                <Eye className="h-4 w-4" />
                Vista Individual
              </Button>
              <Button
                variant={viewMode === "comparison" ? "default" : "outline"}
                onClick={() => setViewMode("comparison")}
                className="flex items-center gap-2"
              >
                <Palette className="h-4 w-4" />
                Comparar Todas
              </Button>
            </div>
          </div>
        </div>
      </header>

      {viewMode === "selector" ? (
        /* Vista Individual con Selector */
        <div className="container mx-auto px-4 py-8">
          {/* Theme Selector */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-center text-2xl font-bold">🎨 Explorador de Paletas para Me Jubilo</CardTitle>
              <p className="text-center text-gray-600">Selecciona una paleta para ver cómo se vería el sitio</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {themes.map((theme) => (
                  <div
                    key={theme.id}
                    className={`cursor-pointer p-6 rounded-lg border-2 transition-all ${
                      selectedTheme === theme.id
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => setSelectedTheme(theme.id)}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex gap-1">
                        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: theme.colors.primary }}></div>
                        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: theme.colors.secondary }}></div>
                        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: theme.colors.accent }}></div>
                      </div>
                      <h3 className="font-bold text-lg">{theme.name}</h3>
                    </div>

                    <p className="text-gray-600 mb-4 text-sm">{theme.description}</p>

                    <div className="space-y-2">
                      <div className="text-xs">
                        <span className="font-semibold text-green-600">✓ Pros:</span>
                        <ul className="text-gray-600 ml-2">
                          {theme.pros.slice(0, 2).map((pro, i) => (
                            <li key={i}>• {pro}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="text-xs">
                        <span className="font-semibold text-red-600">⚠ Contras:</span>
                        <ul className="text-gray-600 ml-2">
                          {theme.cons.slice(0, 1).map((con, i) => (
                            <li key={i}>• {con}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Theme Preview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5" />
                Vista Previa: {currentTheme.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className={`themed-container ${currentTheme.class}`}>
                <ThemedHeader theme={selectedTheme} />
                <ThemedHeroSection theme={selectedTheme} />
                <ThemedFooter theme={selectedTheme} />
              </div>
            </CardContent>
          </Card>
        </div>
      ) : (
        /* Vista de Comparación */
        <div className="container mx-auto px-4 py-8">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-center text-2xl font-bold">🔍 Comparación de Paletas</CardTitle>
              <p className="text-center text-gray-600">Ve las 3 paletas lado a lado para compararlas</p>
            </CardHeader>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {themes.map((theme) => (
              <Card key={theme.id} className="overflow-hidden">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: theme.colors.primary }}></div>
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: theme.colors.secondary }}></div>
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: theme.colors.accent }}></div>
                    </div>
                    {theme.name}
                  </CardTitle>
                  <p className="text-sm text-gray-600">{theme.description}</p>
                </CardHeader>
                <CardContent className="p-0">
                  <div
                    className={`themed-container ${theme.class} scale-50 origin-top-left`}
                    style={{ width: "200%", height: "400px", overflow: "hidden" }}
                  >
                    <ThemedHeader theme={theme.id} />
                    <div className="relative" style={{ height: "300px" }}>
                      <ThemedHeroSection theme={theme.id} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Feedback Section */}
      <div className="bg-white border-t py-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl font-bold mb-4">¿Cuál te gusta más?</h3>
          <p className="text-gray-600 mb-6">Tu opinión es importante para decidir el futuro visual de Me Jubilo</p>
          <div className="flex justify-center gap-4">
            <a
              href="mailto:nico@pensionfi.com?subject=Feedback%20Paletas%20Me%20Jubilo&body=Mi%20paleta%20favorita%20es:%20"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Enviar Feedback por Email
            </a>
            <a
              href="https://wa.me/56923935961?text=Hola,%20vi%20las%20nuevas%20paletas%20de%20Me%20Jubilo%20y%20mi%20favorita%20es:"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
