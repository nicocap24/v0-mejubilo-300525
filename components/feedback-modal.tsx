"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { X, ThumbsUp, ThumbsDown } from "lucide-react"
import { toast } from "sonner"

interface FeedbackModalProps {
  isOpen: boolean
  onClose: () => void
  feedbackType: "UP" | "DOWN" | null
  userName: string
}

export function FeedbackModal({ isOpen, onClose, feedbackType, userName }: FeedbackModalProps) {
  const [comment, setComment] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Save feedback to Google Sheets
      const dataToSave = {
        FECHA: new Date().toISOString().split("T")[0], // Current date in YYYY-MM-DD format
        TIPO: "FEEDBACK", // Type of entry
        NOMBRE: userName,
        UP: feedbackType === "UP" ? "1" : "0",
        DOWN: feedbackType === "DOWN" ? "1" : "0",
        COMENTARIOS: comment || "Sin comentarios",
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSave),
      })

      if (!response.ok) {
        throw new Error("Failed to save feedback to Google Sheets")
      }

      toast.success("¡Gracias por tu feedback! Tu opinión es muy valiosa para nosotros.")
      setComment("")
      onClose()
    } catch (error) {
      console.error("Error saving feedback:", error)
      toast.error("Error al enviar el feedback. Por favor, intenta nuevamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen || !feedbackType) return null

  const isPositive = feedbackType === "UP"
  const title = isPositive ? "¡Nos alegra que te haya gustado!" : "Ayúdanos a mejorar"
  const subtitle = isPositive
    ? "¿Qué fue lo que más te gustó de la herramienta?"
    : "¿Qué podríamos mejorar para hacer la herramienta más útil?"

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-md mx-auto bg-white">
        <CardHeader className="relative pb-4">
          <Button variant="ghost" size="sm" className="absolute right-2 top-2 h-8 w-8 p-0" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
          <div className="flex items-center justify-center gap-2 mb-2">
            {isPositive ? (
              <ThumbsUp className="h-6 w-6 text-green-600" />
            ) : (
              <ThumbsDown className="h-6 w-6 text-red-600" />
            )}
            <CardTitle className="text-center text-xl font-bold text-gray-800">{title}</CardTitle>
          </div>
          <p className="text-center text-gray-600 text-sm">{subtitle}</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="comment" className="text-left block">
                Comentarios (opcional)
              </Label>
              <Textarea
                id="comment"
                placeholder={isPositive ? "Cuéntanos qué te gustó más..." : "Cuéntanos cómo podemos mejorar..."}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full min-h-[100px]"
                maxLength={500}
              />
              <p className="text-xs text-gray-500 text-right">{comment.length}/500 caracteres</p>
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="button" variant="outline" className="flex-1" onClick={onClose}>
                Cancelar
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className={`flex-1 text-white ${
                  isPositive ? "bg-green-500 hover:bg-green-600" : "bg-orange-500 hover:bg-orange-600"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full mr-2"></span>
                    Enviando...
                  </>
                ) : (
                  "Enviar feedback"
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
