"use client"
import { PageLayout } from "@/components/layouts/page-layout"
import { PageCard } from "@/components/ui/page-card"
import { ContactForm } from "@/components/forms/contact-form"

export default function ContactoPage() {
  const contactFields = [
    { name: "NOMBRE", label: "Nombre", type: "text" as const, required: true, placeholder: "Tu nombre" },
    { name: "EMAIL", label: "Email", type: "email" as const, required: true, placeholder: "tu@correo.com" },
    {
      name: "MENSAJE",
      label: "Mensaje",
      type: "textarea" as const,
      required: true,
      placeholder: "Escribe tu mensaje aquí...",
    },
  ]

  return (
    <PageLayout>
      <div className="max-w-2xl mx-auto">
        <PageCard title="Contacto">
          <ContactForm type="CONTACTO_GENERAL" fields={contactFields} submitText="Enviar mensaje" />
        </PageCard>
      </div>
    </PageLayout>
  )
}
