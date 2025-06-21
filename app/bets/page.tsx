"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, TrendingUp, Users, DollarSign } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { toast } from "sonner"

const candidates = [
  { name: "Gonzalo Winter", party: "Frente Amplio", odds: "3.2", color: "bg-purple-500" },
  { name: "José Antonio Kast", party: "Republicano", odds: "2.8", color: "bg-blue-500" },
  { name: "Johannes Kaiser", party: "Independiente", odds: "8.5", color: "bg-gray-500" },
  { name: "Jeannette Jara", party: "Partido Comunista", odds: "4.1", color: "bg-red-500" },
  { name: "Carolina Tohá", party: "PPD", odds: "3.7", color: "bg-green-500" },
  { name: "Evelyn Matthei", party: "UDI", odds: "2.5", color: "bg-orange-500" },
  { name: "Gabriel Boric", party: "Convergencia Social", odds: "5.2", color: "bg-teal-500" },
  { name: "Otro candidato", party: "Por definir", odds: "12.0", color: "bg-yellow-500" },
]

export default function BetsPage() {
  const [selectedCandidate, setSelectedCandidate] = useState("")
  const [betAmount, setBetAmount] = useState("")
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleBetSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const selectedCandidateData = candidates.find((c) => c.name === selectedCandidate)
      const potentialWin = (
        Number.parseFloat(betAmount.replace(/[$.]/g, "").replace(/,/g, "")) *
        Number.parseFloat(selectedCandidateData?.odds || "1")
      ).toLocaleString("es-CL")

      const dataToSave = {
        FECHA: new Date().toISOString(),
        TIPO: "APUESTA_PRESIDENCIAL",
        NOMBRE: userInfo.name,
        EMAIL: userInfo.email,
        TELEFONO: userInfo.phone,
        CANDIDATO: selectedCandidate,
        MONTO_APUESTA: betAmount,
        CUOTA: selectedCandidateData?.odds || "0",
        GANANCIA_POTENCIAL: `$${potentialWin}`,
        ESTADO: "PENDIENTE",
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSave),
      })

      if (!response.ok) {
        throw new Error("Failed to save bet")
      }

      toast.success("¡Apuesta registrada exitosamente! Te contactaremos para confirmar el pago.")

      // Reset form
      setSelectedCandidate("")
      setBetAmount("")
      setUserInfo({ name: "", email: "", phone: "" })
    } catch (error) {
      console.error("Error saving bet:", error)
      toast.error("Error al registrar la apuesta. Por favor, intenta nuevamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const formatAmount = (value: string) => {
    const numericValue = value.replace(/\D/g, "")
    if (!numericValue) return ""
    const formattedValue = Number(numericValue).toLocaleString("es-CL")
    return `$${formattedValue}`
  }

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (value === "" || value === "$") {
      setBetAmount("")
      return
    }
    setBetAmount(formatAmount(value))
  }

  const selectedCandidateData = candidates.find((c) => c.name === selectedCandidate)
  const betAmountNumber = Number.parseFloat(betAmount.replace(/[$.]/g, "").replace(/,/g, "")) || 0
  const potentialWin = selectedCandidateData ? betAmountNumber * Number.parseFloat(selectedCandidateData.odds) : 0

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

          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <Card className="mb-8 bg-white/95 backdrop-blur-sm">
              <CardHeader className="text-center">
                <CardTitle className="text-4xl font-bold text-gray-800 mb-4">
                  🗳️ Apuestas Presidenciales Chile 2025
                </CardTitle>
                <p className="text-xl text-gray-600">
                  ¿Quién crees que será el próximo presidente de Chile? Apuesta acá desde $10.000
                </p>
                <div className="flex justify-center items-center gap-6 mt-4 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>MVP - Versión Beta</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4" />
                    <span>Mínimo $10.000</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4" />
                    <span>Cuotas actualizadas</span>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Candidates Grid */}
            <Card className="mb-8 bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800">Candidatos Disponibles</CardTitle>
                <p className="text-gray-600">Selecciona tu candidato favorito y ve las cuotas actuales</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {candidates.map((candidate) => (
                    <div
                      key={candidate.name}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        selectedCandidate === candidate.name
                          ? "border-orange-500 bg-orange-50 shadow-lg"
                          : "border-gray-200 hover:border-gray-300 hover:shadow-md"
                      }`}
                      onClick={() => setSelectedCandidate(candidate.name)}
                    >
                      <div
                        className={`w-12 h-12 ${candidate.color} rounded-full mb-3 flex items-center justify-center text-white font-bold text-lg`}
                      >
                        {candidate.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <h3 className="font-bold text-gray-800 mb-1">{candidate.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{candidate.party}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">Cuota:</span>
                        <span className="text-lg font-bold text-green-600">{candidate.odds}x</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Betting Form */}
            <Card className="bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800">Realizar Apuesta</CardTitle>
                <p className="text-gray-600">Completa tus datos y el monto de tu apuesta</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleBetSubmit} className="space-y-6">
                  {/* User Info */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre *</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Tu nombre"
                        value={userInfo.name}
                        onChange={(e) => setUserInfo((prev) => ({ ...prev, name: e.target.value }))}
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="tu@correo.com"
                        value={userInfo.email}
                        onChange={(e) => setUserInfo((prev) => ({ ...prev, email: e.target.value }))}
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+56 9 1234 5678"
                        value={userInfo.phone}
                        onChange={(e) => setUserInfo((prev) => ({ ...prev, phone: e.target.value }))}
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  {/* Bet Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="candidate">Candidato Seleccionado *</Label>
                      <div className="h-12 px-3 py-2 border border-gray-300 rounded-md bg-gray-50 flex items-center">
                        {selectedCandidate || "Selecciona un candidato arriba"}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="amount">Monto de Apuesta *</Label>
                      <Input
                        id="amount"
                        type="text"
                        placeholder="$10.000"
                        value={betAmount}
                        onChange={handleAmountChange}
                        required
                        className="h-12 text-lg font-semibold"
                      />
                      <p className="text-sm text-gray-500">Mínimo: $10.000</p>
                    </div>
                  </div>

                  {/* Potential Win Display */}
                  {selectedCandidate && betAmount && betAmountNumber >= 10000 && (
                    <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Resumen de tu Apuesta</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                        <div>
                          <p className="text-sm text-gray-600">Candidato</p>
                          <p className="font-bold text-gray-800">{selectedCandidate}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Tu Apuesta</p>
                          <p className="font-bold text-gray-800">{betAmount}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Ganancia Potencial</p>
                          <p className="font-bold text-green-600 text-xl">${potentialWin.toLocaleString("es-CL")}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="flex justify-center">
                    <Button
                      type="submit"
                      disabled={isSubmitting || !selectedCandidate || !betAmount || betAmountNumber < 10000}
                      className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-3 text-lg"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full mr-2"></span>
                          Procesando...
                        </>
                      ) : (
                        "Confirmar Apuesta"
                      )}
                    </Button>
                  </div>

                  {/* Disclaimer */}
                  <div className="text-xs text-gray-500 text-center p-4 bg-gray-50 rounded-lg">
                    <p className="font-semibold mb-1">IMPORTANTE</p>
                    <p>
                      Este es un MVP (Producto Mínimo Viable) para pruebas. Las apuestas son registradas pero el pago se
                      coordina manualmente. Te contactaremos para confirmar los detalles. Solo para mayores de 18 años.
                      Juega responsablemente.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
