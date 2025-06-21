"use client"

import type React from "react"

import { useState, useCallback, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { PageLayout } from "@/components/layouts/page-layout"
import { PageCard } from "@/components/ui/page-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useFormSubmission } from "@/hooks/use-form-submission"
import { formatSaldo } from "@/utils/format"

export default function EvaluationPage() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [formData, setFormData] = useState({
    nombre: searchParams.get("nombre") || "",
    saldoAFP: searchParams.get("saldoAFP") || "",
    email: searchParams.get("email") || "",
    fechaNacimiento: searchParams.get("fechaNacimiento") || "",
  })

  const [isRecalculating, setIsRecalculating] = useState(false)

  useEffect(() => {
    if (searchParams.get("recalcular") === "true") {
      setIsRecalculating(true)
      // Limpiar el parámetro de la URL
      const newUrl = window.location.pathname
      window.history.replaceState({}, "", newUrl)
    }
  }, [searchParams])

  const { submitForm, isSubmitting } = useFormSubmission({
    onSuccess: () => {
      const params = new URLSearchParams(formData).toString()
      router.push(`/resultados?${params}`)
    },
  })

  const handleSaldoChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (value === "" || value === "$") {
      setFormData((prev) => ({ ...prev, saldoAFP: "" }))
      return
    }
    const formattedValue = formatSaldo(value)
    setFormData((prev) => ({ ...prev, saldoAFP: formattedValue }))
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await submitForm({
      ...formData,
      TIPO: "EVALUACION",
      SALDO: formData.saldoAFP,
      FECHANACIMIENTO: formData.fechaNacimiento,
      NOMBRE: formData.nombre,
      EMAIL: formData.email,
      SUSCRITO: "SI",
    })
  }

  const handleInputChange = useCallback((field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: field === "nombre" ? value.trim().split(/\s+/)[0] || "" : value,
    }))
  }, [])

  return (
    <PageLayout>
      <PageCard title={isRecalculating ? "Modifica tus datos y recalcula" : "Ingresa tus datos"} className="max-w-2xl">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2 flex flex-col items-center">
            <Label htmlFor="nombre" className="text-lg font-medium">
              Nombre *
            </Label>
            <Input
              id="nombre"
              type="text"
              placeholder="Ingresa tu nombre"
              value={formData.nombre}
              onChange={(e) => handleInputChange("nombre", e.target.value)}
              required
              className="h-12 text-lg text-center w-64 max-w-full"
              maxLength={20}
            />
          </div>

          <div className="space-y-2 flex flex-col items-center">
            <Label htmlFor="saldoAFP" className="text-lg font-medium">
              Saldo en AFP *
            </Label>
            <Input
              id="saldoAFP"
              type="text"
              placeholder="$0"
              value={formData.saldoAFP}
              onChange={handleSaldoChange}
              required
              className="h-12 text-lg text-center font-semibold w-64 max-w-full"
            />
          </div>

          <div className="space-y-2 flex flex-col items-center">
            <Label htmlFor="fechaNacimiento" className="text-lg font-medium">
              Fecha de nacimiento *
            </Label>
            <Input
              id="fechaNacimiento"
              type="text"
              placeholder="DD/MM/AAAA"
              value={formData.fechaNacimiento}
              onChange={(e) => {
                let value = e.target.value.replace(/\D/g, "")
                if (value.length >= 2) {
                  value = value.substring(0, 2) + "/" + value.substring(2)
                }
                if (value.length >= 5) {
                  value = value.substring(0, 5) + "/" + value.substring(5, 9)
                }
                handleInputChange("fechaNacimiento", value)
              }}
              required
              className="h-12 text-lg text-center w-64 max-w-full"
              maxLength={10}
            />
          </div>

          <div className="space-y-2 flex flex-col items-center">
            <Label htmlFor="email" className="text-lg font-medium">
              Email *
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="tu@correo.com"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              required
              className="h-12 text-lg text-center w-64 max-w-full"
            />
            <p className="text-sm text-gray-600 text-center max-w-md">
              Acepto recibir más información sobre mi jubilación de vez en cuando
            </p>
          </div>

          <div className="flex justify-center pt-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="h-12 text-lg bg-red-500 hover:bg-red-600 text-white px-8"
            >
              {isSubmitting ? "Simulando..." : "Simular"}
            </Button>
          </div>
        </form>
      </PageCard>
    </PageLayout>
  )
}
