"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { X } from "lucide-react"
import { toast } from "sonner"

interface CollaboratorModalProps {
  isOpen: boolean
  onClose: () => void
}

export function CollaboratorModal({ isOpen, onClose }: CollaboratorModalProps) {
  const [formData, setFormData] = useState({
    nombre: "",
    cargo: "",
    mensaje: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const cargos = ["AI Master 1", "AI Master 2", "AI Master 3", "Financial Risk Management", "Cargo Abierto"]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Save collaboration request to Google Sheets
      const dataToSave = {
        FECHA: new Date().toISOString(),
        TIPO: "COLABORACION",
        NOMBRE: formData.nombre,
        CARGO_POSTULACION: formData.cargo,
        MENSAJE: formData.mensaje,
        ESTADO: "NUEVO",
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSave),
      })

      if (!response.ok) {
        throw new Error("Failed to save collaboration request")
      }

      toast.success("¡Solicitud enviada exitosamente! Te contactaremos pronto.")
      setFormData({ nombre: "", cargo: "", mensaje: "" })
      onClose()
    } catch (error) {
      console.error("Error saving collaboration request:", error)
      toast.error("Error al enviar la solicitud. Por favor, intenta nuevamente.")
    } finally {
      setIsSubmitting(false)
    }
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
      <Card className="w-full max-w-md mx-auto bg-white">
        <CardHeader className="relative pb-4">
          <Button variant="ghost" size="sm" className="absolute right-2 top-2 h-8 w-8 p-0" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
          <CardTitle className="text-center text-xl font-bold text-gray-800">Colaborar con Me Jubilo</CardTitle>
          <p className="text-center text-gray-600 text-sm">
            Cuéntanos sobre ti y cómo te gustaría contribuir a nuestro equipo
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="nombre">Nombre *</Label>
              <Input
                id="nombre"
                type="text"
                placeholder="Tu nombre"
                value={formData.nombre}
                onChange={(e) => handleInputChange("nombre", e.target.value)}
                required
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="cargo">Cargo al que estás postulando *</Label>
              <Select value={formData.cargo} onValueChange={(value) => handleInputChange("cargo", value)} required>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona un cargo" />
                </SelectTrigger>
                <SelectContent>
                  {cargos.map((cargo) => (
                    <SelectItem key={cargo} value={cargo}>
                      {cargo}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="mensaje">Mensaje *</Label>
              <Textarea
                id="mensaje"
                placeholder="¿Por qué quieres colaborar con nosotros? ¿Por qué crees que serías buen match?"
                value={formData.mensaje}
                onChange={(e) => handleInputChange("mensaje", e.target.value)}
                required
                className="w-full min-h-[120px]"
                maxLength={1000}
              />
              <p className="text-xs text-gray-500 text-right">{formData.mensaje.length}/1000 caracteres</p>
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="button" variant="outline" className="flex-1" onClick={onClose}>
                Cancelar
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-orange-500 hover:bg-orange-600 text-white"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full mr-2"></span>
                    Enviando...
                  </>
                ) : (
                  "Enviar solicitud"
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
