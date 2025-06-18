"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { toast } from "sonner"

export default function ReformaPrevisionalPage() {
  const [commentData, setCommentData] = useState({
    nombre: "",
    email: "",
    comentario: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setCommentData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Save comment data to Google Sheets and send email
      const dataToSave = {
        FECHA: new Date().toISOString(),
        TIPO: "COMENTARIO_REFORMA",
        NOMBRE: commentData.nombre || "Anónimo",
        EMAIL: commentData.email || "No proporcionado",
        COMENTARIO: commentData.comentario,
        ARTICULO: "Lo que no te dijeron de la reforma",
        ENVIAR_EMAIL: "SI",
        EMAIL_DESTINO: "hinicocapital@gmail.com",
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSave),
      })

      if (!response.ok) {
        throw new Error("Failed to save comment data to Google Sheets")
      }

      toast.success("¡Comentario enviado exitosamente! Gracias por tu opinión.")

      // Reset form
      setCommentData({
        nombre: "",
        email: "",
        comentario: "",
      })
    } catch (error) {
      console.error("Error saving comment data:", error)
      toast.error("Error al enviar el comentario. Por favor, intenta nuevamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
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

          <Card className="w-full max-w-4xl mx-auto bg-white/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-center text-3xl font-bold text-gray-800">
                Lo que no te dijeron de la reforma
              </CardTitle>
              <p className="text-center text-gray-600 mt-2">Publicado el 9 de junio, 2025</p>
            </CardHeader>
            <CardContent className="space-y-6 prose prose-lg max-w-none">
              <p className="text-gray-600 text-sm mb-4">
                <strong>Publicado por:</strong> Nicolás Arrieta
                <br />
                <strong>Última actualización:</strong> 17/06/2025
              </p>

              <p className="text-lg leading-relaxed">
                Se acaba de aprobar en Chile la mayor reforma que se le ha hecho al sistema de pensiones los últimos 40
                años. Ningún sistema aguanta 40 años sin mayores modificaciones. Sin embargo, en estos +15 años de
                debate, se dejaron varias cositas afuera, que creo podrían haber sido de alto valor. Aquí mencionaré
                algunas de ellas.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
                1. La deuda pendiente de la educación previsional
              </h2>
              <p className="text-lg leading-relaxed">
                El sistema de pensiones ya era sumamente complejo antes de la reforma. Ahora se elige por añadir otra
                capa de complejidad más, con nuevos componentes, nuevas instituciones. ¿Y los afiliados, qué? ¿No era el
                desconocimiento y la ignorancia sobre el sistema una de las mayores preocupaciones? ¿No era ese uno de
                los aspectos a atacar con esta reforma?
              </p>
              <p className="text-lg leading-relaxed">
                Da lástima, que los incentivos del sistema no están bien puestos en explicar el sistema.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">2. ¿Cuánto voy a obtener yo de pensión?</h2>
              <p className="text-lg leading-relaxed">
                Cuando hablamos de previsión, hablamos de pre-ver hacia el futuro. Por lo tanto las herramientas, como
                simuladores, que te ayudan a ver hacia adelante son claves. ¿Dónde está la herramienta donde puedo ver
                cuánto voy a obtener de pensión?
              </p>
              <p className="text-lg leading-relaxed">
                Entre todas las instituciones que involucra el sistema previsional no hay ninguna sola que disponga de
                tal herramienta, 100% gratuita de uso para los afiliados.
              </p>
              <p className="text-lg leading-relaxed">
                En MeJubilo.com tomamos cartas sobre el asunto y decidimos nosotros crear esta herramienta. Con tan sólo
                tu saldo, en segundos te podemos indicar más o menos cuánto sacarías de pensión. Todo si te jubilaras
                hoy.
              </p>
              <p className="text-lg leading-relaxed">
                No quisimos hacer supuestos de rentabilidad futura o cotización futura, ya que estos datos son inciertos
                y dificultan al usuario interactuar con la herramienta. Quisimos hacerla lo más sencillo posible, y
                generar esa especie de terapia de shock: Con lo que tienes ahora esto es lo que obtendrás de pensión.
              </p>

              <div className="bg-orange-50 p-8 rounded-lg border border-orange-200 my-8 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">¿No la has probado? Te invito a hacerlo</h3>
                <Link href="/evaluar">
                  <Button
                    size="lg"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-4 text-xl rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Probar Me Jubilo
                  </Button>
                </Link>
                <p className="text-gray-600 mt-4">Tu feedback también me interesa.</p>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">3. Inversiones</h2>
              <p className="text-lg leading-relaxed">
                Las AFP administran +US$200b más todo lo que administran las compañías de seguro, y nos farreamos la
                oportunidad de invertir parte de este capital en proyectos que generen no sólo retornos superiores para
                los afiliados sino que también un retorno superior al país, en términos de empleo, crecimiento y
                desarrollo.
              </p>
              <p className="text-lg leading-relaxed">
                ¿Por qué en un contexto de estancamiento generacional no hemos sido capaces de ver esto como la mayor
                oportunidad que tiene el país de avanzar hacia el desarrollo? Cuesta entender realmente la falta de
                visión de los tomadores de decisión y los lobbistas.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">4. Sostenibilidad</h2>
              <p className="text-lg leading-relaxed">
                Pan para hoy hambre para mañana. ¿Qué tan sostenibles son estos "beneficios estatales" de la PGU y el
                Seguro Social? ¿Cuánto más tendrán que cobrarnos en impuestos a todos para poder financiar tal
                generosidad?
              </p>
              <p className="text-lg leading-relaxed">
                No olvidemos que esta reforma la pagarán las futuras generaciones, quienes además no recibirán el seguro
                social.
              </p>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">5. Conflictos de interés serios</h2>
              <p className="text-lg leading-relaxed">
                Todo lo anterior no se habla en los medios ya que no hay incentivo para hacerlo. Aquí ganaron las AFP y
                el Estado, se repartieron la torta entre ambos, llegaron a un acuerdo a puertas cerradas, del cual no
                participaste, y ahora más encima no hay nadie que se atreva a decirlo.
              </p>
              <p className="text-lg leading-relaxed">
                Las encuestas son utilizadas como propaganda por los equipos de marketing, y los "economistas expertos"
                son financiados por las mismas AFP para sacar los mismos estudios que concluyen que "hay que mantener a
                las AFP".
              </p>
              <p className="text-lg leading-relaxed">
                Un sistema, gobernado y regulado por políticos, incompetentes, sin calificaciones financieras jamás
                llegará a buen puerto, jamás llegará a las soluciones idóneas.
              </p>
              <p className="text-lg leading-relaxed">
                Esta reforma no deja conforme a nadie, mientras que el descontento generalizado por las pensiones según
                la última encuesta que salió de la CEP en Septiembre 2024 era de un 87% de la población.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mt-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Reflexión final</h3>
                <p className="text-lg leading-relaxed">
                  En fin, no quiero sonar pesimista respecto a la reforma. El pesimismo no es lo mío. Mientras más
                  estropean el que algún día fue un lindo sistema de pensiones, más oportunidades hay para crear uno
                  nuevo en paralelo.
                </p>
                <p className="text-lg leading-relaxed mt-4">
                  Dejamos que la gente elija en qué sistema quiere participar. La solución a los problemas sociales como
                  este es y será la apertura del libre mercado para la resolución del conflicto. El empresario con la
                  mejor solución debiera tender a quedarse con una mayor proporción del mercado.
                </p>
                <p className="text-lg leading-relaxed mt-4">
                  Pero si tenemos un mercado, regulado por incompetentes, con conflictos de interés, que no tienen
                  mayores ideas de cómo invertir la $$, de mostrarle la información correcta a la gente y de hacerlo
                  sostenible, entonces no podemos esperar "júbilo" real en este país.
                </p>
              </div>

              {/* Comments Section */}
              <div className="bg-orange-50 p-6 rounded-lg border border-orange-200 mt-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Y a ti, ¿qué te pareció esta reforma?</h3>
                <p className="mb-6 text-gray-700">Déjanos tu opinión sobre la reforma previsional:</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nombre">Nombre (opcional)</Label>
                      <Input
                        id="nombre"
                        type="text"
                        placeholder="Tu nombre"
                        value={commentData.nombre}
                        onChange={(e) => handleInputChange("nombre", e.target.value)}
                        className="h-10"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email (opcional)</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="tu@correo.com"
                        value={commentData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="h-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="comentario">Tu opinión sobre la reforma *</Label>
                    <Textarea
                      id="comentario"
                      placeholder="¿Qué te pareció la reforma previsional? ¿Estás de acuerdo con los puntos mencionados?"
                      value={commentData.comentario}
                      onChange={(e) => handleInputChange("comentario", e.target.value)}
                      required
                      className="min-h-[100px]"
                    />
                  </div>

                  <div className="flex justify-center">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full mr-2"></span>
                          Enviando...
                        </>
                      ) : (
                        "Enviar comentario"
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
