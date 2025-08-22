"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function BetsPage() {
  const [selectedCandidate, setSelectedCandidate] = useState("")
  const [betAmount, setBetAmount] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const candidates = [
    { name: "Gonzalo Winter", odds: 3.2 },
    { name: "José Antonio Kast", odds: 2.8 },
    { name: "Johannes Kaiser", odds: 4.5 },
    { name: "Jeannette Jara", odds: 5.1 },
    { name: "Carolina Tohá", odds: 3.8 },
    { name: "Evelyn Matthei", odds: 2.5 },
    { name: "Gabriel Boric", odds: 6.2 },
    { name: "Otros", odds: 8.0 },
  ]

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const calculateWinnings = () => {
    if (!betAmount || !selectedCandidate) return 0
    const candidate = candidates.find((c) => c.name === selectedCandidate)
    if (!candidate) return 0
    return Number.parseInt(betAmount) * candidate.odds
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("¡Apuesta registrada! Te contactaremos pronto para confirmar los detalles.")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Apuestas Presidenciales Chile 2025</h1>
              <p className="text-xl text-gray-600 mb-2">¿Quién crees que será el próximo presidente de Chile?</p>
              <p className="text-lg text-green-600 font-semibold">Apuesta acá: Desde $10.000</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Candidatos */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Candidatos</h2>
                <div className="space-y-3">
                  {candidates.map((candidate) => (
                    <Card
                      key={candidate.name}
                      className={`cursor-pointer transition-all ${
                        selectedCandidate === candidate.name ? "ring-2 ring-green-500 bg-green-50" : "hover:bg-gray-50"
                      }`}
                      onClick={() => setSelectedCandidate(candidate.name)}
                    >
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-3">
                            <input
                              type="radio"
                              name="candidate"
                              value={candidate.name}
                              checked={selectedCandidate === candidate.name}
                              onChange={() => setSelectedCandidate(candidate.name)}
                              className="text-green-600"
                            />
                            <span className="font-medium text-gray-900">{candidate.name}</span>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-green-600">{candidate.odds}x</div>
                            <div className="text-sm text-gray-500">Cuota</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Formulario de Apuesta */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Realizar Apuesta</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Label htmlFor="name">Nombre completo</Label>
                        <Input
                          id="name"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="amount">Monto a apostar (mínimo $10.000)</Label>
                        <Input
                          id="amount"
                          type="number"
                          min="10000"
                          step="1000"
                          value={betAmount}
                          onChange={(e) => setBetAmount(e.target.value)}
                          placeholder="10000"
                          required
                          className="mt-1"
                        />
                      </div>

                      {selectedCandidate && betAmount && Number.parseInt(betAmount) >= 10000 && (
                        <div className="bg-green-50 p-4 rounded-lg">
                          <h3 className="font-semibold text-green-800 mb-2">Resumen de tu apuesta</h3>
                          <div className="space-y-1 text-green-700">
                            <p>
                              <strong>Candidato:</strong> {selectedCandidate}
                            </p>
                            <p>
                              <strong>Monto apostado:</strong> {formatCurrency(Number.parseInt(betAmount))}
                            </p>
                            <p>
                              <strong>Ganancia potencial:</strong> {formatCurrency(calculateWinnings())}
                            </p>
                            <p>
                              <strong>Cuota:</strong> {candidates.find((c) => c.name === selectedCandidate)?.odds}x
                            </p>
                          </div>
                        </div>
                      )}

                      <Button
                        type="submit"
                        className="w-full bg-green-500 hover:bg-green-600"
                        disabled={
                          !selectedCandidate || !betAmount || Number.parseInt(betAmount) < 10000 || !name || !email
                        }
                      >
                        Confirmar Apuesta
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle className="text-lg">Términos y Condiciones</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-gray-600 space-y-2">
                    <p>• Apuesta mínima: $10.000 CLP</p>
                    <p>• Las cuotas pueden cambiar hasta el cierre de apuestas</p>
                    <p>• Cierre de apuestas: 1 semana antes de las elecciones</p>
                    <p>• Pago de ganancias: Dentro de 48 horas del resultado oficial</p>
                    <p>• Solo mayores de 18 años</p>
                    <p>• Juega responsablemente</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
