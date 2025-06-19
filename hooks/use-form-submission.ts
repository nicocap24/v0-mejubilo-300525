"use client"

import { useState } from "react"
import { toast } from "sonner"

interface UseFormSubmissionOptions {
  onSuccess?: (data: any) => void
  successMessage?: string
  errorMessage?: string
}

export function useFormSubmission(options: UseFormSubmissionOptions = {}) {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const submitForm = async (data: any) => {
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          FECHA: new Date().toISOString(),
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to submit form")
      }

      toast.success(options.successMessage || "¡Enviado exitosamente!")
      options.onSuccess?.(data)

      return true
    } catch (error) {
      console.error("Error submitting form:", error)
      toast.error(options.errorMessage || "Error al enviar. Por favor, intenta nuevamente.")
      return false
    } finally {
      setIsSubmitting(false)
    }
  }

  return { submitForm, isSubmitting }
}
