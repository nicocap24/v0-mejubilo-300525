"use client"

import type React from "react"

import { useEffect, useState } from "react"

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000000

type ToastActionElement = React.ReactElement<any, string | React.JSXElementConstructor<any>>

export type Toast = {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
  variant?: "default" | "destructive"
}

let count = 0

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

type UseToastOptions = {
  duration?: number
}

export const useToast = ({ duration = 5000 }: UseToastOptions = {}) => {
  const [toasts, setToasts] = useState<Toast[]>([])

  useEffect(() => {
    if (toasts.length > TOAST_LIMIT) {
      setToasts((prevToasts) => prevToasts.slice(0, TOAST_LIMIT))
    }
  }, [toasts])

  function toast({ title, description, action, variant }: Omit<Toast, "id">) {
    const id = genId()

    const newToast = {
      id,
      title,
      description,
      action,
      variant,
    }

    setToasts((prevToasts) => [newToast, ...prevToasts])

    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id))
    }, duration)

    return id
  }

  function dismiss(toastId?: string) {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== toastId))
  }

  return {
    toast,
    dismiss,
    toasts,
  }
}

// Añadir la exportación nombrada 'toast' que falta
export const toast = ({ title, description, action, variant }: Omit<Toast, "id">) => {
  const id = genId()

  // Crear una función que simule el comportamiento básico de toast
  // para componentes que lo importen directamente
  return {
    id,
    title,
    description,
    action,
    variant,
  }
}

export type ToastContextType = ReturnType<typeof useToast>
