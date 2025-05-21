"use client"

import { useState } from "react"
import { ThumbsUp, ThumbsDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"

interface FeedbackThumbsProps {
  sectionId: string
  sectionName: string
}

export default function FeedbackThumbs({ sectionId, sectionName }: FeedbackThumbsProps) {
  const [feedback, setFeedback] = useState<"positive" | "negative" | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const submitFeedback = async (type: "positive" | "negative") => {
    if (isSubmitting) return

    setIsSubmitting(true)
    setFeedback(type)

    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sectionId,
          sectionName,
          feedbackType: type,
          timestamp: new Date().toISOString(),
        }),
      })

      if (response.ok) {
        toast({
          title: "¡Gracias por tu feedback!",
          description: "Tu opinión nos ayuda a mejorar.",
        })
      } else {
        throw new Error("Error al enviar feedback")
      }
    } catch (error) {
      console.error("Error al enviar feedback:", error)
      toast({
        title: "Error",
        description: "No pudimos registrar tu feedback. Inténtalo nuevamente.",
        variant: "destructive",
      })
      setFeedback(null)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm text-gray-500 mr-2">¿Te resultó útil?</span>
      <Button
        variant="outline"
        size="sm"
        className={`p-1 h-8 w-8 ${
          feedback === "positive" ? "bg-green-100 text-green-600 border-green-300" : "text-gray-400"
        }`}
        disabled={isSubmitting || feedback !== null}
        onClick={() => submitFeedback("positive")}
        aria-label="Me gusta"
      >
        <ThumbsUp className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="sm"
        className={`p-1 h-8 w-8 ${
          feedback === "negative" ? "bg-red-100 text-red-600 border-red-300" : "text-gray-400"
        }`}
        disabled={isSubmitting || feedback !== null}
        onClick={() => submitFeedback("negative")}
        aria-label="No me gusta"
      >
        <ThumbsDown className="h-4 w-4" />
      </Button>
    </div>
  )
}
