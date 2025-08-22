"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { X } from "lucide-react"
import { toast } from "sonner"

interface SubscriptionModalProps {
  isOpen: boolean
  onClose: () => void
  userName: string
}

export function SubscriptionModal({ isOpen, onClose, userName }: SubscriptionModalProps) {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Save email to Google Sheets
      const dataToSave = {
        FECHA: new Date().toISOString(), // Full date and time in ISO format
        TIPO: "SUSCRIPCION", // Type of entry
        NOMBRE: userName,
        EMAIL: email,
        ESTADO: "ACTIVO", // Subscription status
        SUSCRITO: "SI", // New column for newsletter subscription
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSave),
      })

      if (!response.ok) {
        throw new Error("Failed to save subscription to Google Sheets")
      }

      toast.success("¡Suscripción exitosa! Recibirás información todos los viernes.")
      setEmail("")
      onClose()
    } catch (error) {
      console.error("Error saving subscription:", error)
      toast.error("Error al procesar la suscripción. Por favor, intenta nuevamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-md mx-auto bg-white">
        <CardHeader className="relative pb-4">
          <Button variant="ghost" size="sm" className="absolute right-2 top-2 h-8 w-8 p-0" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
          <CardTitle className="text-center text-xl font-bold text-gray-800">Suscríbete a MeJubilo</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <p className="text-gray-700 mb-6">
              Obtén información en tu correo de tu jubilación y cómo mejorarla. Máximo 1 correo por semana, todos los
              viernes.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-left block">
                  Correo electrónico
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@correo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full"
                />
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
                      Suscribiendo...
                    </>
                  ) : (
                    "Suscribirse"
                  )}
                </Button>
              </div>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
