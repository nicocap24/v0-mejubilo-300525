"use client"

import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, ThumbsUp, ThumbsDown } from "lucide-react"
import Link from "next/link"
import { useMemo, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactModal } from "@/components/contact-modal"
import { FeedbackModal } from "@/components/feedback-modal"
import { InfoTooltip } from "@/components/info-tooltip"

// Import the necessary icons at the top
import { MessageCircle, Mail } from "lucide-react"

export default function ResultsPage() {
  const searchParams = useSearchParams()
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false)
  const [feedbackType, setFeedbackType] = useState<"UP" | "DOWN" | null>(null)

  // Use useMemo to prevent re-renders and get form data once
  const formData = useMemo(() => {
    return {
      nombre: searchParams.get("nombre") || "",
      saldoAFP: searchParams.get("saldoAFP") || "",
      email: searchParams.get("email") || "",
    }
  }, [searchParams])

  // Updated calculation logic with the correct formulas
  const calculatePensions = () => {
    // Parse the AFP balance, removing currency symbols and separators
    const saldoString = formData.saldoAFP || ""

    // Remove $ and dots, then parse as number
    const cleanedSaldo = saldoString.replace(/\$/g, "").replace(/\./g, "").replace(/,/g, "")
    const saldo = Number.parseInt(cleanedSaldo, 10) || 15000000 // Default to 15M if parsing fails

    // Constants
    const UF_VALUE = 39200 // Current UF value in Chilean pesos
    const MIN_UF_THRESHOLD = 3 // Minimum UF threshold for Renta Vitalicia

    // Renta Vitalicia calculation: (Saldo*3.27%*2)/12
    let rentaVitaliciaCalc = (saldo * 0.0327 * 2) / 12

    // Check if result is less than 3 UF
    if (rentaVitaliciaCalc < MIN_UF_THRESHOLD * UF_VALUE) {
      rentaVitaliciaCalc = 0
    }

    // Round to nearest integer
    const rentaVitalicia = Math.round(rentaVitaliciaCalc)

    // PGU calculation based on Renta Vitalicia amount
    const PGU_FULL = 214296 // Full PGU amount
    const PGU_MIN_THRESHOLD = 729764 // Minimum threshold for full PGU
    const PGU_MAX_THRESHOLD = 1158355 // Maximum threshold for any PGU

    let pgu = 0

    // PGU calculation based solely on Renta Vitalicia amount
    if (rentaVitalicia < PGU_MIN_THRESHOLD) {
      // Full PGU
      pgu = PGU_FULL
    } else if (rentaVitalicia > PGU_MAX_THRESHOLD) {
      // No PGU
      pgu = 0
    } else {
      // Partial PGU - linear reduction
      pgu = Math.round((PGU_FULL * (PGU_MAX_THRESHOLD - rentaVitalicia)) / (PGU_MAX_THRESHOLD - PGU_MIN_THRESHOLD))
    }

    // Seguro Social calculation based on AFP balance
    const SEGURO_SOCIAL_HIGH_THRESHOLD = 50000000 // $50,000,000
    const SEGURO_SOCIAL_LOW_THRESHOLD = 25000000 // $25,000,000

    let seguroSocial = 0

    if (saldo >= SEGURO_SOCIAL_HIGH_THRESHOLD) {
      // 2.5 UF
      seguroSocial = Math.round(2.5 * UF_VALUE)
    } else if (saldo >= SEGURO_SOCIAL_LOW_THRESHOLD) {
      // 2 UF
      seguroSocial = Math.round(2 * UF_VALUE)
    } else {
      // No Seguro Social
      seguroSocial = 0
    }

    // Total is the sum of all three components
    const total = rentaVitalicia + pgu + seguroSocial

    return {
      rentaVitalicia,
      pgu,
      seguroSocial,
      total,
      // Debug info
      debug: {
        saldoOriginal: formData.saldoAFP,
        saldoParsed: saldo,
        rentaVitaliciaCalc: rentaVitaliciaCalc,
      },
    }
  }

  const results = calculatePensions()

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
      minimumFractionDigits: 0,
    }).format(amount)
  }

  // Always show "Contrata una renta vitalicia con Nico" regardless of age or Renta Vitalicia
  const buttonText = "Quiero jubilar ahora"
  const handleMainButtonClick = () => {
    setIsContactModalOpen(true)
  }

  // Handle feedback button clicks
  const handleFeedbackClick = (type: "UP" | "DOWN") => {
    setFeedbackType(type)
    setIsFeedbackModalOpen(true)
  }

  // Create recalculate URL with current data
  const recalculateUrl = `/evaluar?${new URLSearchParams({
    nombre: formData.nombre,
    saldoAFP: formData.saldoAFP,
    email: formData.email,
  }).toString()}`

  // Show error message if no data is provided
  if (!formData.nombre || !formData.saldoAFP) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />

        <div
          className="flex-1 bg-cover bg-center bg-no-repeat py-6"
          style={{
            backgroundImage: "url('/images/landscape-background.png')",
          }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-white/20"></div>

          <div className="relative z-10 container mx-auto px-4">
            <Link href="/" className="inline-flex items-center text-gray-700 hover:text-gray-900 mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al inicio
            </Link>

            <Card className="w-full max-w-md mx-auto bg-white/95 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <h2 className="text-xl font-bold text-gray-800 mb-4">No hay datos para mostrar</h2>
                <p className="text-gray-600 mb-6">
                  Parece que no tienes datos de evaluación. Por favor, completa el formulario primero.
                </p>
                <Link href="/evaluar">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white">Ir al formulario</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>

        <Footer />
      </div>
    )
  }

  // Content for each pension type tooltip
  const rentaVitaliciaInfo = (
    <div className="space-y-2">
      <p>
        <strong>Requisitos:</strong>
      </p>
      <ul className="list-disc pl-4 space-y-1">
        <li>Edad legal de jubilación (65 años hombres)</li>
        <li>Mínimo 3 UF mensuales (bajará a 2 UF con la reforma)</li>
        <li>Grupo familiar: Soltero sin hijos</li>
      </ul>
      <p>
        <strong>Tasa utilizada:</strong> 3.27% (promedio industria)
      </p>
      <p>
        <strong>Características:</strong> Pensión fija en UF de por vida, protegida contra inflación.
      </p>
    </div>
  )

  const pguInfo = (
    <div className="space-y-2">
      <p>
        <strong>Monto base:</strong> $214,296 (2024)
      </p>
      <p>
        <strong>Requisitos:</strong>
      </p>
      <ul className="list-disc pl-4 space-y-1">
        <li>Estar en el 90% menos rico del país</li>
        <li>Ser chileno y residir en Chile por 20 años</li>
        <li>Residir 4 de los últimos 5 años en Chile</li>
      </ul>
      <p>
        <strong>Cálculo:</strong>
      </p>
      <ul className="list-disc pl-4 space-y-1">
        <li>Si Renta Vitalicia {"<"} $729,764: PGU completa</li>
        <li>Si Renta Vitalicia {">"} $1,158,355: Sin PGU</li>
        <li>Entre ambos montos: PGU proporcional</li>
      </ul>
    </div>
  )

  const seguroSocialInfo = (
    <div className="space-y-2">
      <p>
        <strong>Requisitos:</strong>
      </p>
      <ul className="list-disc pl-4 space-y-1">
        <li>Mínimo 20 años cotizados (hombres)</li>
        <li>Máximo 25 años cotizados</li>
      </ul>
      <p>
        <strong>Beneficio:</strong> 0.1 UF por año cotizado
      </p>
      <p>
        <strong>Estimación por saldo:</strong>
      </p>
      <ul className="list-disc pl-4 space-y-1">
        <li>Saldo ≥ $50M: 25 años cotizados (2.5 UF = $98,000)</li>
        <li>Saldo ≥ $25M: 20 años cotizados (2.0 UF = $78,400)</li>
        <li>Saldo {"<"} $25M: No califica</li>
      </ul>
    </div>
  )

  const totalInfo = (
    <div className="space-y-2">
      <p>
        <strong>Pensión Total:</strong> Suma de los tres componentes del sistema previsional chileno.
      </p>
      <p>
        <strong>Componentes:</strong>
      </p>
      <ul className="list-disc pl-4 space-y-1">
        <li>Renta Vitalicia (pilar contributivo)</li>
        <li>PGU - Pensión Garantizada Universal (pilar solidario)</li>
        <li>Seguro Social (beneficio adicional)</li>
      </ul>
      <p>
        <strong>Importante:</strong> Esta es una estimación basada en supuestos. Los montos reales pueden variar según
        condiciones del mercado y regulaciones vigentes.
      </p>
      <p>
        <strong>UF utilizada:</strong> $39,200 (04/06/2025)
      </p>
    </div>
  )

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div
        className="flex-1 bg-cover bg-center bg-no-repeat py-6"
        style={{
          backgroundImage: "url('/images/landscape-background.png')",
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-white/20"></div>

        <div className="relative z-10 container mx-auto px-4">
          <Link href={recalculateUrl} className="inline-flex items-center text-gray-700 hover:text-gray-900 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver al formulario
          </Link>

          <Card className="w-full max-w-2xl mx-auto bg-white/95 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <CardTitle className="text-center text-2xl font-bold text-gray-800">
                {formData.nombre}, esta es tu pensión estimada si te jubilaras hoy 👀👇
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Individual Pension Components */}
              <div className="grid gap-4">
                <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg border">
                  <div className="flex items-center gap-3">
                    <div>
                      <h3 className="font-semibold text-gray-800 text-lg">Renta Vitalicia</h3>
                    </div>
                    <InfoTooltip title="Renta Vitalicia" content={rentaVitaliciaInfo} />
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-blue-600">{formatCurrency(results.rentaVitalicia)}</p>
                    <p className="text-sm text-gray-500">mensual</p>
                  </div>
                </div>

                <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg border">
                  <div className="flex items-center gap-3">
                    <div>
                      <h3 className="font-semibold text-gray-800 text-lg">PGU</h3>
                    </div>
                    <InfoTooltip title="Pensión Garantizada Universal (PGU)" content={pguInfo} />
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-green-600">{formatCurrency(results.pgu)}</p>
                    <p className="text-sm text-gray-500">mensual</p>
                  </div>
                </div>

                <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg border">
                  <div className="flex items-center gap-3">
                    <div>
                      <h3 className="font-semibold text-gray-800 text-lg">Seguro Social</h3>
                    </div>
                    <InfoTooltip title="Seguro Social" content={seguroSocialInfo} />
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-purple-600">{formatCurrency(results.seguroSocial)}</p>
                    <p className="text-sm text-gray-500">mensual</p>
                  </div>
                </div>
              </div>

              {/* Total */}
              <div className="border-t pt-4">
                <div className="flex justify-between items-center p-6 bg-orange-50 rounded-lg border-2 border-orange-200">
                  <div className="flex items-center gap-3">
                    <div>
                      <h2 className="text-xl font-bold text-gray-800">Total Pensión Mensual</h2>
                      <p className="text-sm text-gray-600">Suma de todos los beneficios</p>
                    </div>
                    <InfoTooltip title="Pensión Total" content={totalInfo} />
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-orange-600">{formatCurrency(results.total)}</p>
                    <p className="text-sm text-gray-500">mensual</p>
                  </div>
                </div>
              </div>

              {/* Main Action Button - Changes based on age */}
              <div className="flex flex-col items-center gap-4 pt-4">
                {/* Added text above the button */}
                <p className="text-lg text-gray-800 font-medium text-center">¿Ya quieres jubilar? 👇</p>

                <Button
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  onClick={handleMainButtonClick}
                >
                  {buttonText}
                </Button>

                <Link href={recalculateUrl}>
                  <Button variant="outline" className="px-6 py-2 text-sm">
                    Recalcular
                  </Button>
                </Link>

                {/* Social Sharing Section */}
                <div className="flex flex-col items-center gap-3 pt-4 border-t border-gray-200 w-full">
                  <p className="text-gray-600 text-sm font-medium">Comparte con tus amigos:</p>
                  <div className="flex items-center gap-4">
                    {/* WhatsApp Share */}
                    <a
                      href={`https://wa.me/?text=${encodeURIComponent("Yo ya descubrí mi pensión y tu ? 😱. https://mejubilo.com")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 bg-green-500 hover:bg-green-600 text-white rounded-full transition-colors transform hover:scale-110"
                      title="Compartir en WhatsApp"
                    >
                      <MessageCircle className="w-5 h-5" />
                    </a>

                    {/* X (Twitter) Share */}
                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent("Yo ya descubrí mi pensión y tu ? 😱. https://mejubilo.com")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 bg-black hover:bg-gray-800 text-white rounded-full transition-colors transform hover:scale-110"
                      title="Compartir en X"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>

                    {/* Gmail Share */}
                    <a
                      href={`mailto:?subject=${encodeURIComponent("Descubre tu pensión")}&body=${encodeURIComponent("Yo ya descubrí mi pensión y tu ? 😱.\n\nhttps://mejubilo.com")}`}
                      className="flex items-center justify-center w-10 h-10 bg-red-500 hover:bg-red-600 text-white rounded-full transition-colors transform hover:scale-110"
                      title="Compartir por email"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Feedback Section */}
                <div className="flex flex-col items-center gap-3 pt-4 border-t border-gray-200 w-full">
                  <p className="text-gray-600 text-sm font-medium">¿Qué te pareció esta herramienta?</p>
                  <div className="flex items-center gap-4">
                    {/* Thumbs Up */}
                    <button
                      onClick={() => handleFeedbackClick("UP")}
                      className="flex items-center justify-center w-10 h-10 bg-green-500 hover:bg-green-600 text-white rounded-full transition-colors transform hover:scale-110"
                      title="Me gustó"
                    >
                      <ThumbsUp className="w-5 h-5" />
                    </button>

                    {/* Thumbs Down */}
                    <button
                      onClick={() => handleFeedbackClick("DOWN")}
                      className="flex items-center justify-center w-10 h-10 bg-red-500 hover:bg-red-600 text-white rounded-full transition-colors transform hover:scale-110"
                      title="No me gustó"
                    >
                      <ThumbsDown className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="text-xs text-gray-500 text-center p-4 bg-gray-50 rounded-lg">
                <p className="font-semibold mb-1">DISCLAIMER</p>
                <p>
                  Estos cálculos son estimaciones basadas en la información entregada, pueden variar notoriamente. No
                  son datos oficiales.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Contact Modal for users 55+ */}
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />

      {/* Feedback Modal */}
      <FeedbackModal
        isOpen={isFeedbackModalOpen}
        onClose={() => setIsFeedbackModalOpen(false)}
        feedbackType={feedbackType}
        userName={formData.nombre}
      />

      <Footer />
    </div>
  )
}
