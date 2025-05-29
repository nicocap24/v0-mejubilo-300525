"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function EvaluationPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    nombre: "",
    saldoAFP: "",
    fechaNacimiento: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Encode the form data to pass as URL parameters
    const params = new URLSearchParams({
      nombre: formData.nombre,
      saldoAFP: formData.saldoAFP,
      fechaNacimiento: formData.fechaNacimiento,
    }).toString()

    router.push(`/resultados?${params}`)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50 py-12">
      <div className="container mx-auto px-4">
        <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Volver al inicio
        </Link>

        <Card className="w-full max-w-md mx-auto">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold text-gray-800">Evaluación Gratuita</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="nombre">Nombre completo</Label>
                <Input
                  id="nombre"
                  type="text"
                  placeholder="Ingresa tu nombre completo"
                  value={formData.nombre}
                  onChange={(e) => handleInputChange("nombre", e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="saldoAFP">Saldo en AFP</Label>
                <Input
                  id="saldoAFP"
                  type="text"
                  placeholder="Ej: $15.000.000"
                  value={formData.saldoAFP}
                  onChange={(e) => handleInputChange("saldoAFP", e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="fechaNacimiento">Fecha de nacimiento</Label>
                <Input
                  id="fechaNacimiento"
                  type="date"
                  value={formData.fechaNacimiento}
                  onChange={(e) => handleInputChange("fechaNacimiento", e.target.value)}
                  required
                />
              </div>

              <div className="flex gap-3 pt-4">
                <Link href="/" className="flex-1">
                  <Button type="button" variant="outline" className="w-full">
                    Cancelar
                  </Button>
                </Link>
                <Button type="submit" className="flex-1 bg-red-500 hover:bg-red-600 text-white">
                  Calcular
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
