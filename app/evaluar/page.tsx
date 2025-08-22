"use client"

import type React from "react"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { InfoTooltip } from "@/components/info-tooltip"
import { formatCurrencyInput, parseCurrency, formatDateInput, isValidDate, calculateAge } from "@/utils/format"
import { useFormSubmission } from "@/hooks/use-form-submission"

export default function EvaluarPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { isSubmitting, submitForm } = useFormSubmission()

  // Initialize form data from URL params or defaults
  const [formData, setFormData] = useState({
    saldo: searchParams.get("saldo") || "",
    fechaNacimiento: searchParams.get("fechaNacimiento") || "",
    genero: (searchParams.get("genero") as "hombre" | "mujer") || "hombre",
    email: searchParams.get("email") || "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleSaldoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCurrencyInput(e.target.value)
    setFormData((prev) => ({ ...prev, saldo: formatted }))
    if (errors.saldo) {
      setErrors((prev) => ({ ...prev, saldo: "" }))
    }
  }

  const handleFechaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatDateInput(e.target.value)
    setFormData((prev) => ({ ...prev, fechaNacimiento: formatted }))
    if (errors.fechaNacimiento) {
      setErrors((prev) => ({ ...prev, fechaNacimiento: "" }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    // Validate saldo
    const saldoNumerico = parseCurrency(formData.saldo)
    if (!formData.saldo || saldoNumerico <= 0) {
      newErrors.saldo = "El saldo es requerido y debe ser mayor a 0"
    } else if (saldoNumerico < 1000000) {
      newErrors.saldo = "El saldo mínimo es $1.000.000"
    }

    // Validate fecha nacimiento
    if (!formData.fechaNacimiento) {
      newErrors.fechaNacimiento = "La fecha de nacimiento es requerida"
    } else if (!isValidDate(formData.fechaNacimiento)) {
      newErrors.fechaNacimiento = "Formato de fecha inválido (DD/MM/AAAA)"
    } else {
      const age = calculateAge(formData.fechaNacimiento)
      if (age < 18) {
        newErrors.fechaNacimiento = "Debes ser mayor de 18 años"
      } else if (age > 100) {
        newErrors.fechaNacimiento = "Edad no válida"
      }
    }

    // Validate email if provided
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email inválido"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    const success = await submitForm(formData)

    if (success) {
      // Create URL with form data
      const params = new URLSearchParams({
        saldo: formData.saldo,
        fechaNacimiento: formData.fechaNacimiento,
        genero: formData.genero,
        ...(formData.email && { email: formData.email }),
      })

      router.push(`/resultados?${params.toString()}`)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-gray-800">Evalúa tu Pensión</CardTitle>
              <p className="text-gray-600 mt-2">Completa los datos para conocer tu pensión estimada con la reforma</p>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Saldo AFP */}
                <div className="space-y-2">
                  <Label htmlFor="saldo" className="flex items-center gap-2">
                    ¿Cuál es tu saldo actual en la AFP?
                    <InfoTooltip content="Ingresa el saldo total que tienes acumulado en tu cuenta de capitalización individual" />
                  </Label>
                  <Input
                    id="saldo"
                    type="text"
                    placeholder="Ej: 50.000.000"
                    value={formData.saldo}
                    onChange={handleSaldoChange}
                    className={errors.saldo ? "border-red-500" : ""}
                  />
                  {errors.saldo && <p className="text-red-500 text-sm">{errors.saldo}</p>}
                </div>

                {/* Fecha de Nacimiento */}
                <div className="space-y-2">
                  <Label htmlFor="fechaNacimiento" className="flex items-center gap-2">
                    ¿Cuál es tu fecha de nacimiento?
                    <InfoTooltip content="Necesitamos tu edad para calcular los años de cotización estimados" />
                  </Label>
                  <Input
                    id="fechaNacimiento"
                    type="text"
                    placeholder="DD/MM/AAAA"
                    value={formData.fechaNacimiento}
                    onChange={handleFechaChange}
                    maxLength={10}
                    className={errors.fechaNacimiento ? "border-red-500" : ""}
                  />
                  {errors.fechaNacimiento && <p className="text-red-500 text-sm">{errors.fechaNacimiento}</p>}
                </div>

                {/* Género */}
                <div className="space-y-2">
                  <Label className="flex items-center gap-2">
                    Género
                    <InfoTooltip content="El género afecta la edad de jubilación (hombres: 65 años, mujeres: 60 años)" />
                  </Label>
                  <Select
                    value={formData.genero}
                    onValueChange={(value: "hombre" | "mujer") => setFormData((prev) => ({ ...prev, genero: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hombre">Hombre</SelectItem>
                      <SelectItem value="mujer">Mujer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Email (opcional) */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    Email (opcional)
                    <InfoTooltip content="Si proporcionas tu email, te enviaremos un resumen detallado de tu simulación" />
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 text-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Calculando..." : "Calcular mi Pensión"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
