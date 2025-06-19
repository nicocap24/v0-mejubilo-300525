"use client"
import { PageLayout } from "@/components/layouts/page-layout"
import { PageCard } from "@/components/ui/page-card"
import { ContactForm } from "@/components/forms/contact-form"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CharlasPrevisionales() {
  const charlaFields = [
    {
      name: "NOMBRE_EMPRESA",
      label: "Nombre de la empresa",
      type: "text" as const,
      required: true,
      placeholder: "Ingresa el nombre de tu empresa",
    },
    {
      name: "NOMBRE_ENCARGADO",
      label: "Nombre del encargado",
      type: "text" as const,
      required: true,
      placeholder: "Tu nombre completo",
    },
    {
      name: "EMAIL_ENCARGADO",
      label: "Email del encargado",
      type: "email" as const,
      required: true,
      placeholder: "tu@empresa.com",
    },
    {
      name: "MENSAJE",
      label: "Mensaje",
      type: "textarea" as const,
      placeholder: "Cuéntanos más sobre tu empresa y necesidades...",
    },
  ]

  return (
    <PageLayout>
      <div className="min-h-screen flex flex-col">
        <Header />

        <div
          className="flex-1 bg-cover bg-center bg-no-repeat py-12"
          style={{
            backgroundImage: "url('/images/landscape-background.png')",
          }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-white/20"></div>

          <div className="relative z-10 container mx-auto px-4">
            <Link href="/" className="inline-flex items-center text-gray-700 hover:text-gray-900 mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al inicio
            </Link>

            <PageCard title="Charlas Previsionales">
              <section>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Recientemente se acaba de aprobar la reforma de pensiones más grande de los últimos 40 años. ¿Cómo
                  impacta a tu empresa y a tus trabajadores?
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  En Me Jubilo, estamos ofreciendo charlas a empresas, con +100 empleados, para que puedan primero que
                  nada tener una noción básica de lo que tienen que saber sobre su jubilación y segundo, que puedan
                  entender sobre los últimos cambios con la reforma.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Beneficios de contratar una charla con nosotros:
                </h2>
                <ul className="space-y-3 text-lg text-gray-700">
                  <li>• Reduce el estrés financiero en tus colaboradores</li>
                  <li>• Aumenta su bienestar y productividad en el trabajo</li>
                  <li>• Aumenta la retención de tus empleados</li>
                  <li>• Mejora el clima laboral</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Modalidades:</h2>
                <p className="text-lg text-gray-700">Puede ser presencial o virtual, a convenir.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Cotiza tu charla con nosotros</h2>
                <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
                  <ContactForm type="CHARLA_EMPRESARIAL" fields={charlaFields} submitText="Solicitar cotización" />
                </div>
              </section>
            </PageCard>
          </div>
        </div>

        <Footer />
      </div>
    </PageLayout>
  )
}
