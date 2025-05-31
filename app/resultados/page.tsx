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
import { SubscriptionModal } from "@/components/subscription-modal"
import { FeedbackModal } from "@/components/feedback-modal"

// Import the necessary icons at the top
import { MessageCircle, Mail } from "lucide-react"

export default function ResultsPage() {
  const searchParams = useSearchParams()
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false)
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false)
  const [feedbackType, setFeedbackType] = useState<"UP" | "DOWN" | null>(null)

  // Use useMemo to prevent re-renders and get form data once
  const formData = useMemo(() => {
    return {
      nombre: searchParams.get("nombre") || "",
      saldoAFP: searchParams.get("saldoAFP") || "",
      fechaNacimiento: searchParams.get("fechaNacimiento") || "",
    }
  }, [searchParams])

  // Calculate user's age
  const calculateAge = () => {
    if (!formData.fechaNacimiento) return 0

    const birthDate = new Date(formData.fechaNacimiento)
    const today = new Date()

    let age = today.getFullYear() - birthDate.getFullYear()
    const monthDiff = today.getMonth() - birthDate.getMonth()
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }

    return age
  }

  const userAge = calculateAge()

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
        age: userAge,
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

  // Determine button text and action based on age AND Renta Vitalicia
  const canScheduleWithNico = userAge >= 55 && results.rentaVitalicia > 0
  const buttonText = canScheduleWithNico ? "Agendar con Nico" : "Suscríbete"
  const handleMainButtonClick = () => {
    if (canScheduleWithNico) {
      setIsContactModalOpen(true)
    } else {
      setIsSubscriptionModalOpen(true)
    }
  }

  // Handle feedback button clicks
  const handleFeedbackClick = (type: "UP" | "DOWN") => {
    setFeedbackType(type)
    setIsFeedbackModalOpen(true)
  }

  // Show error message if no data is provided
  if (!formData.nombre || !formData.saldoAFP || !formData.fechaNacimiento) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />

        <div
          className="flex-1 bg-cover bg-center bg-no-repeat py-12"
          style={{
            backgroundImage: "url('/images/landscape-background.png')",
          }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-white/20"></div>

          <div className="relative z-10 container mx-auto px-4">
            <Link href="/" className="inline-flex items-center text-gray-700 hover:text-gray-900 mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al inicio
            </Link>

            <Card className="w-full max-w-md mx-auto bg-white/95 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
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

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div
        className="flex-1 bg-cover bg-center bg-no-repeat py-12"
        style={{
          backgroundImage: "url('/images/landscape-background.png')",
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-white/20"></div>

        <div className="relative z-10 container mx-auto px-4">
          <Link href="/evaluar" className="inline-flex items-center text-gray-700 hover:text-gray-900 mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver al formulario
          </Link>

          <Card className="w-full max-w-2xl mx-auto bg-white/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-center text-3xl font-bold text-gray-800">
                Resultados de tu Evaluación
              </CardTitle>
              <p className="text-center text-gray-600 text-lg">Hola {formData.nombre}, estos son tus resultados:</p>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Individual Pension Components */}
              <div className="grid gap-6">
                <div className="flex justify-between items-center p-6 bg-blue-50 rounded-lg border">
                  <div>
                    <h3 className="font-semibold text-gray-800 text-xl">Renta Vitalicia</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-blue-600">{formatCurrency(results.rentaVitalicia)}</p>
                    <p className="text-base text-gray-500">mensual</p>
                  </div>
                </div>

                <div className="flex justify-between items-center p-6 bg-green-50 rounded-lg border">
                  <div>
                    <h3 className="font-semibold text-gray-800 text-xl">PGU</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-green-600">{formatCurrency(results.pgu)}</p>
                    <p className="text-base text-gray-500">mensual</p>
                  </div>
                </div>

                <div className="flex justify-between items-center p-6 bg-purple-50 rounded-lg border">
                  <div>
                    <h3 className="font-semibold text-gray-800 text-xl">Seguro Social</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-purple-600">{formatCurrency(results.seguroSocial)}</p>
                    <p className="text-base text-gray-500">mensual</p>
                  </div>
                </div>
              </div>

              {/* Total */}
              <div className="border-t pt-6">
                <div className="flex justify-between items-center p-8 bg-orange-50 rounded-lg border-2 border-orange-200">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">Total Pensión Mensual</h2>
                    <p className="text-base text-gray-600">Suma de todos los beneficios</p>
                  </div>
                  <div className="text-right">
                    <p className="text-4xl font-bold text-orange-600">{formatCurrency(results.total)}</p>
                    <p className="text-base text-gray-500">mensual</p>
                  </div>
                </div>
              </div>

              {/* Main Action Button - Changes based on age */}
              <div className="flex flex-col items-center gap-6 pt-6">
                <Button
                  className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-4 text-xl rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  onClick={handleMainButtonClick}
                >
                  {buttonText}
                </Button>

                <Link href="/evaluar">
                  <Button variant="outline" className="px-8 py-2 text-base">
                    Recalcular
                  </Button>
                </Link>

                {/* Social Sharing Section */}
                <div className="flex flex-col items-center gap-4 pt-6 border-t border-gray-200 w-full">
                  <p className="text-gray-600 text-base font-medium">Comparte con tus amigos:</p>
                  <div className="flex items-center gap-4">
                    {/* WhatsApp Share */}
                    <a
                      href={`https://wa.me/?text=${encodeURIComponent("Yo ya descubrí mi pensión y tu ? 😱. https://mejubilo.com")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-full transition-colors transform hover:scale-110"
                      title="Compartir en WhatsApp"
                    >
                      <MessageCircle className="w-6 h-6" />
                    </a>

                    {/* X (Twitter) Share */}
                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent("Yo ya descubrí mi pensión y tu ? 😱. https://mejubilo.com")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 bg-black hover:bg-gray-800 text-white rounded-full transition-colors transform hover:scale-110"
                      title="Compartir en X"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>

                    {/* Gmail Share */}
                    <a
                      href={`mailto:?subject=${encodeURIComponent("Descubre tu pensión")}&body=${encodeURIComponent("Yo ya descubrí mi pensión y tu ? 😱.\n\nhttps://mejubilo.com")}`}
                      className="flex items-center justify-center w-12 h-12 bg-red-500 hover:bg-red-600 text-white rounded-full transition-colors transform hover:scale-110"
                      title="Compartir por email"
                    >
                      <Mail className="w-6 h-6" />
                    </a>
                  </div>
                </div>

                {/* Feedback Section */}
                <div className="flex flex-col items-center gap-4 pt-6 border-t border-gray-200 w-full">
                  <p className="text-gray-600 text-base font-medium">¿Qué te pareció esta herramienta?</p>
                  <div className="flex items-center gap-4">
                    {/* Thumbs Up */}
                    <button
                      onClick={() => handleFeedbackClick("UP")}
                      className="flex items-center justify-center w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-full transition-colors transform hover:scale-110"
                      title="Me gustó"
                    >
                      <ThumbsUp className="w-6 h-6" />
                    </button>

                    {/* Thumbs Down */}
                    <button
                      onClick={() => handleFeedbackClick("DOWN")}
                      className="flex items-center justify-center w-12 h-12 bg-red-500 hover:bg-red-600 text-white rounded-full transition-colors transform hover:scale-110"
                      title="No me gustó"
                    >
                      <ThumbsDown className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="text-sm text-gray-500 text-center p-6 bg-gray-50 rounded-lg">
                <p className="font-semibold mb-2">DISCLAIMER</p>
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

      {/* Subscription Modal for users under 55 */}
      <SubscriptionModal
        isOpen={isSubscriptionModalOpen}
        onClose={() => setIsSubscriptionModalOpen(false)}
        userName={formData.nombre}
      />

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
