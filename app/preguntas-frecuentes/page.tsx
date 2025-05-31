"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ArrowLeft, ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "¿Tiene algún costo operar con Me Jubilo?",
    answer: "No. De momento es 100% Gratuito.",
  },
  {
    question: "¿Opera sólo en Chile?",
    answer: "Sí. Sólo para el mercado chileno, por ahora.",
  },
  {
    question: "¿Hacen recomendaciones de fondos y/o AFP?",
    answer: "No.",
  },
]

export default function PreguntasFrecuentesPage() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat py-12"
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

        <Card className="w-full max-w-4xl mx-auto bg-white/95 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-center text-3xl font-bold text-gray-800">Preguntas Frecuentes</CardTitle>
            <p className="text-center text-gray-600 mt-2">
              Encuentra respuestas a las preguntas más comunes sobre MeJubilo
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            {faqData.map((faq, index) => (
              <Collapsible key={index} open={openItems.includes(index)} onOpenChange={() => toggleItem(index)}>
                <CollapsibleTrigger className="w-full">
                  <div className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-lg border transition-colors">
                    <h3 className="text-left font-semibold text-gray-800">{faq.question}</h3>
                    {openItems.includes(index) ? (
                      <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0 ml-2" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0 ml-2" />
                    )}
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="p-4 bg-white border border-t-0 rounded-b-lg">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))}

            {/* Contact Section */}
            <div className="mt-8 bg-orange-50 p-6 rounded-lg border border-orange-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">¿No encontraste tu respuesta?</h3>
              <p className="text-gray-700 mb-4">
                Si tienes alguna pregunta específica que no está cubierta aquí, no dudes en contactarnos.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:nico@pensionfi.com"
                  className="inline-flex items-center justify-center px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors"
                >
                  Enviar consulta por email: nico@pensionfi.com
                </a>
                <Link href="/supuestos">
                  <Button variant="outline" className="w-full sm:w-auto">
                    Ver supuestos del cálculo
                  </Button>
                </Link>
              </div>
            </div>

            {/* Back Button */}
            <div className="flex justify-center pt-6">
              <Link href="/">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">Volver al inicio</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
