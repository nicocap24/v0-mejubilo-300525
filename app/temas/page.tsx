"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemedHeader } from "@/components/themed-header"
import { ThemedHeroSection } from "@/components/themed-hero-section"
import { ThemedFooter } from "@/components/themed-footer"
import { ArrowLeft, Palette, Eye, Leaf } from "lucide-react"
import Link from "next/link"
import "./themes.css"

const themes = [
  {
    id: "cordillera-mint",
    name: "Cordillera Mint",
    description: "Verde menta suave y profesional. Transmite frescura y crecimiento sostenible.",
    class: "theme-cordillera-mint",
    colors: {
      primary: "#10B981",
      secondary: "#1F2937",
      accent: "#34D399",
      neutral: "#6B7280",
    },
    pros: ["Suave y profesional", "Asociado con crecimiento", "Fácil para los ojos"],
    cons: ["Puede ser muy sutil", "Menos impactante"],
    inspiration: "Inspirado en la naturaleza chilena y el crecimiento financiero sostenible",
  },
  {
    id: "cordillera-aqua",
    name: "Cordillera Aqua",
    description: "Verde turquesa vibrante como en tu imagen. Moderno, fresco y llamativo.",
    class: "theme-cordillera-aqua",
    colors: {
      primary: "#00D4AA",
      secondary: "#2D3748",
      accent: "#4FD1C7",
      neutral: "#718096",
    },
    pros: ["Muy moderno y vibrante", "Llama la atención", "Asociado con innovación"],
    cons: ["Puede ser muy intenso", "Difícil de combinar"],
    inspiration: "Basado en el verde de tu imagen - vibrante y tecnológico",
  },
  {
    id: "cordillera-fresh",
    name: "Cordillera Fresh",
    description: "Verde lima fresco y energético. Transmite vitalidad y optimismo financiero.",
    class: "theme-cordillera-fresh",
    colors: {
      primary: "#22C55E",
      secondary: "#374151",
      accent: "#84CC16",
      neutral: "#6B7280",
    },
    pros: ["Energético y positivo", "Asociado con éxito", "Muy visible"],
    cons: ["Puede ser agresivo", "Menos formal"],
    inspiration: "Verde lima que transmite energía y éxito financiero",
  },
  {
    id: "forest-gold",
    name: "Bosque Dorado",
    description: "Verde bosque profundo con toques de amarillo dorado. Elegante y confiable.",
    class: "theme-forest-gold",
    colors: {
      primary: "#16A34A",
      secondary: "#1F2937",
      accent: "#FBBF24",
      neutral: "#6B7280",
    },
    pros: ["Muy elegante", "Transmite confianza", "Combinación clásica"],
    cons: ["Puede ser conservador", "Menos moderno"],
    inspiration: "Inspirado en bosques chilenos con toques dorados de prosperidad",
  },
  {
    id: "emerald-lemon",
    name: "Esmeralda Limón",
    description: "Verde esmeralda vibrante con amarillo limón. Fresco y dinámico.",
    class: "theme-emerald-lemon",
    colors: {
      primary: "#059669",
      secondary: "#374151",
      accent: "#EAB308",
      neutral: "#6B7280",
    },
    pros: ["Muy dinámico", "Llamativo", "Transmite energía"],
    cons: ["Puede ser muy intenso", "Difícil de leer"],
    inspiration: "Combinación vibrante que evoca crecimiento y prosperidad",
  },
  {
    id: "olive-mustard",
    name: "Oliva Mostaza",
    description: "Verde oliva terroso con amarillo mostaza. Natural y cálido.",
    class: "theme-olive-mustard",
    colors: {
      primary: "#65A30D",
      secondary: "#1F2937",
      accent: "#D97706",
      neutral: "#6B7280",
    },
    pros: ["Natural y orgánico", "Cálido", "Fácil para los ojos"],
    cons: ["Puede ser opaco", "Menos moderno"],
    inspiration: "Colores terrosos que transmiten estabilidad y crecimiento natural",
  },
]

export default function TemasPage() {
  const [selectedTheme, setSelectedTheme] = useState("cordillera-aqua") // Empezamos con el que tiene el verde de la imagen
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
              <CardTitle className="text-center text-2xl font-bold flex items-center justify-center gap-2">
                <Leaf className="h-6 w-6 text-green-500" />🌿 Variaciones Cordillera - Verdes y Amarillos
              </CardTitle>
              <p className="text-center text-gray-600">
                6 variaciones incluyendo combinaciones verde-amarillo y el verde de tu imagen
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {themes.map((theme) => (
                  <div
                    key={theme.id}
                    className={`cursor-pointer p-6 rounded-lg border-2 transition-all ${
                      selectedTheme === theme.id
                        ? "border-green-500 bg-green-50 shadow-lg"
                        : "border-gray-200 hover:border-gray-300 hover:shadow-md"
                    }`}
                    onClick={() => setSelectedTheme(theme.id)}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex gap-1">
                        <div
                          className="w-5 h-5 rounded-full border-2 border-white shadow-sm"
                          style={{ backgroundColor: theme.colors.primary }}
                        ></div>
                        <div
                          className="w-5 h-5 rounded-full border-2 border-white shadow-sm"
                          style={{ backgroundColor: theme.colors.secondary }}
                        ></div>
                        <div
                          className="w-5 h-5 rounded-full border-2 border-white shadow-sm"
                          style={{ backgroundColor: theme.colors.accent }}
                        ></div>
                      </div>
                      <h3 className="font-bold text-lg">{theme.name}</h3>
                      {theme.id === "cordillera-aqua" && (
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">🎯 Tu Verde</span>
                      )}
                      {(theme.id === "forest-gold" || theme.id === "emerald-lemon" || theme.id === "olive-mustard") && (
                        <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">🆕 Nuevo</span>
                      )}
                    </div>

                    <p className="text-gray-600 mb-4 text-sm">{theme.description}</p>

                    <div className="space-y-3">
                      <div className="text-xs">
                        <span className="font-semibold text-green-600">✓ Pros:</span>
                        <ul className="text-gray-600 ml-2 mt-1">
                          {theme.pros.map((pro, i) => (
                            <li key={i} className="flex items-start gap-1">
                              <span className="text-green-500 mt-0.5">•</span>
                              <span>{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="text-xs">
                        <span className="font-semibold text-red-600">⚠ Contras:</span>
                        <ul className="text-gray-600 ml-2 mt-1">
                          {theme.cons.map((con, i) => (
                            <li key={i} className="flex items-start gap-1">
                              <span className="text-red-500 mt-0.5">•</span>
                              <span>{con}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="text-xs bg-gray-50 p-2 rounded">
                        <span className="font-semibold text-gray-700">💡 Inspiración:</span>
                        <p className="text-gray-600 mt-1">{theme.inspiration}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Color Palette Details */}
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Palette className="h-5 w-5" />
                  Paleta de Colores: {currentTheme.name}
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div
                      className="w-16 h-16 rounded-lg mx-auto mb-2 border-2 border-white shadow-md"
                      style={{ backgroundColor: currentTheme.colors.primary }}
                    ></div>
                    <p className="text-sm font-semibold">Primario</p>
                    <p className="text-xs text-gray-600">{currentTheme.colors.primary}</p>
                  </div>
                  <div className="text-center">
                    <div
                      className="w-16 h-16 rounded-lg mx-auto mb-2 border-2 border-white shadow-md"
                      style={{ backgroundColor: currentTheme.colors.secondary }}
                    ></div>
                    <p className="text-sm font-semibold">Secundario</p>
                    <p className="text-xs text-gray-600">{currentTheme.colors.secondary}</p>
                  </div>
                  <div className="text-center">
                    <div
                      className="w-16 h-16 rounded-lg mx-auto mb-2 border-2 border-white shadow-md"
                      style={{ backgroundColor: currentTheme.colors.accent }}
                    ></div>
                    <p className="text-sm font-semibold">Acento</p>
                    <p className="text-xs text-gray-600">{currentTheme.colors.accent}</p>
                  </div>
                  <div className="text-center">
                    <div
                      className="w-16 h-16 rounded-lg mx-auto mb-2 border-2 border-white shadow-md"
                      style={{ backgroundColor: currentTheme.colors.neutral }}
                    ></div>
                    <p className="text-sm font-semibold">Neutral</p>
                    <p className="text-xs text-gray-600">{currentTheme.colors.neutral}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Theme Preview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5" />
                Vista Previa: {currentTheme.name}
                {selectedTheme === "cordillera-aqua" && (
                  <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                    🎯 Con tu verde favorito
                  </span>
                )}
                {(selectedTheme === "forest-gold" ||
                  selectedTheme === "emerald-lemon" ||
                  selectedTheme === "olive-mustard") && (
                  <span className="bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded-full">
                    🆕 Verde + Amarillo
                  </span>
                )}
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
              <CardTitle className="text-center text-2xl font-bold flex items-center justify-center gap-2">
                <Leaf className="h-6 w-6 text-green-500" />🔍 Comparación de Temas Cordillera
              </CardTitle>
              <p className="text-center text-gray-600">
                Ve las 6 variaciones lado a lado - verdes puros y combinaciones verde-amarillo
              </p>
            </CardHeader>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {themes.map((theme) => (
              <Card key={theme.id} className="overflow-hidden">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <div className="flex gap-1">
                      <div
                        className="w-4 h-4 rounded-full border border-white"
                        style={{ backgroundColor: theme.colors.primary }}
                      ></div>
                      <div
                        className="w-4 h-4 rounded-full border border-white"
                        style={{ backgroundColor: theme.colors.secondary }}
                      ></div>
                      <div
                        className="w-4 h-4 rounded-full border border-white"
                        style={{ backgroundColor: theme.colors.accent }}
                      ></div>
                    </div>
                    {theme.name}
                    {theme.id === "cordillera-aqua" && (
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">🎯</span>
                    )}
                    {(theme.id === "forest-gold" || theme.id === "emerald-lemon" || theme.id === "olive-mustard") && (
                      <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">🆕</span>
                    )}
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
          <h3 className="text-xl font-bold mb-4">¿Cuál de estos temas te gusta más? 🌿</h3>
          <p className="text-gray-600 mb-6">
            Ahora con <strong>3 nuevas combinaciones verde-amarillo</strong> además del verde de tu imagen
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="mailto:hinicocapital@gmail.com?subject=Feedback%20Temas%20Cordillera%20-%20Me%20Jubilo&body=Mi%20tema%20favorito%20es:%20"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-colors flex items-center gap-2"
            >
              <Leaf className="h-4 w-4" />
              Enviar Feedback por Email
            </a>
            <a
              href="https://wa.me/56923935961?text=Hola,%20vi%20los%20temas%20para%20Me%20Jubilo%20y%20mi%20favorito%20es:"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors flex items-center gap-2"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
