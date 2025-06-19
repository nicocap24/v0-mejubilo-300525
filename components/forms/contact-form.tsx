"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useFormSubmission } from "@/hooks/use-form-submission"

interface ContactFormProps {
  type: string
  onSuccess?: () => void
  fields?: Array<{
    name: string
    label: string
    type: "text" | "email" | "textarea"
    required?: boolean
    placeholder?: string
  }>
  submitText?: string
}

export function ContactForm({ type, onSuccess, fields = [], submitText = "Enviar" }: ContactFormProps) {
  const [formData, setFormData] = useState<Record<string, string>>({})

  const { submitForm, isSubmitting } = useFormSubmission({
    onSuccess: () => {
      setFormData({})
      onSuccess?.()
    },
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await submitForm({ ...formData, TIPO: type })
  }

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {fields.map((field) => (
        <div key={field.name} className="space-y-2">
          <Label htmlFor={field.name}>
            {field.label} {field.required && "*"}
          </Label>
          {field.type === "textarea" ? (
            <Textarea
              id={field.name}
              placeholder={field.placeholder}
              value={formData[field.name] || ""}
              onChange={(e) => handleChange(field.name, e.target.value)}
              required={field.required}
              className="min-h-[100px]"
            />
          ) : (
            <Input
              id={field.name}
              type={field.type}
              placeholder={field.placeholder}
              value={formData[field.name] || ""}
              onChange={(e) => handleChange(field.name, e.target.value)}
              required={field.required}
              className="h-12"
            />
          )}
        </div>
      ))}

      <div className="flex justify-center">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3"
        >
          {isSubmitting ? "Enviando..." : submitText}
        </Button>
      </div>
    </form>
  )
}
