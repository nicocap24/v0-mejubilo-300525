"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { X } from "lucide-react"

interface EvaluationFormProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (data: { nombre: string; saldoAFP: string; fechaNacimiento: string }) => void
}

export function EvaluationForm({ isOpen, onClose, onSubmit }: EvaluationFormProps) {
  const [formData, setFormData] = useState({
    nombre: "",
    saldoAFP: "",
    fechaNacimiento: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader className="relative">
          <CardTitle className="text-center text-2xl font-bold text-gray-800">Evaluación Gratuita</CardTitle>
          <Button variant="ghost" size="sm" className="absolute right-2 top-2 h-8 w-8 p-0" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
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
              <Button type="button" variant="outline" className="flex-1" onClick={onClose}>
                Cancelar
              </Button>
              <Button type="submit" className="flex-1 bg-red-500 hover:bg-red-600 text-white">
                Calcular
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
