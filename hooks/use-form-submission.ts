"use client"

import { useState } from "react"

interface FormSubmissionState {
  isSubmitting: boolean
  error: string | null
  success: boolean
}

export function useFormSubmission() {
  const [state, setState] = useState<FormSubmissionState>({
    isSubmitting: false,
    error: null,
    success: false,
  })

  const submitForm = async (formData: any) => {
    setState({ isSubmitting: true, error: null, success: false })

    try {
      // Simular envío de formulario
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setState({ isSubmitting: false, error: null, success: true })
      return { success: true }
    } catch (error) {
      setState({
        isSubmitting: false,
        error: error instanceof Error ? error.message : "Error desconocido",
        success: false,
      })
      return { success: false, error }
    }
  }

  const resetState = () => {
    setState({ isSubmitting: false, error: null, success: false })
  }

  return {
    ...state,
    submitForm,
    resetState,
  }
}
