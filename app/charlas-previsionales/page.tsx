import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Users, Clock, CheckCircle, Phone, Mail } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CharlasPrevisionales() {
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
              <CardTitle className="text-center text-3xl font-bold text-gray-800">Charlas Previsionales</CardTitle>
              <p className="text-center text-gray-600 mt-2">
                Educación financiera clara y práctica para tu empresa u organización
              </p>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* ¿Qué ofrecemos? */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">¿Qué ofrecemos?</h2>
                <p className="text-gray-700 mb-6">
                  Realizamos charlas educativas sobre el sistema previsional chileno, diseñadas para que tus
                  colaboradores entiendan de manera simple y clara cómo funciona su jubilación y qué pueden hacer para
                  mejorarla.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 text-center">
                    <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">Para empresas</h3>
                    <p className="text-gray-600">Charlas grupales para equipos de trabajo</p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg border border-green-200 text-center">
                    <Clock className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">Flexibles</h3>
                    <p className="text-gray-600">Adaptamos horarios y contenido a tus necesidades</p>
                  </div>
                  <div className="bg-orange-50 p-6 rounded-lg border border-orange-200 text-center">
                    <CheckCircle className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">Prácticas</h3>
                    <p className="text-gray-600">Contenido aplicable y fácil de entender</p>
                  </div>
                </div>
              </section>

              {/* Temas que cubrimos */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Temas que cubrimos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-800">Sistema de pensiones en Chile</h3>
                        <p className="text-gray-600">Cómo funciona el sistema AFP, PGU y Seguro Social</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-800">Opciones de jubilación</h3>
                        <p className="text-gray-600">Renta Vitalicia vs Retiro Programado</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-800">Estrategias de ahorro</h3>
                        <p className="text-gray-600">APV, depósitos convenidos y otras alternativas</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-800">Planificación financiera</h3>
                        <p className="text-gray-600">Cómo calcular cuánto necesitas para jubilar</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-800">Reforma previsional</h3>
                        <p className="text-gray-600">Cambios actuales y futuros del sistema</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-800">Casos prácticos</h3>
                        <p className="text-gray-600">Ejemplos reales y simulaciones personalizadas</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Modalidades */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Modalidades disponibles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Presencial</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• En las instalaciones de tu empresa</li>
                      <li>• Duración: 1-2 horas</li>
                      <li>• Incluye material educativo</li>
                      <li>• Sesión de preguntas y respuestas</li>
                      <li>• Cobertura: Región Metropolitana</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Virtual</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Vía Zoom, Teams o plataforma preferida</li>
                      <li>• Duración: 1-1.5 horas</li>
                      <li>• Material digital incluido</li>
                      <li>• Grabación disponible</li>
                      <li>• Cobertura: Todo Chile</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Beneficios para tu empresa */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Beneficios para tu empresa</h2>
                <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Para los colaboradores:</h3>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Mayor tranquilidad sobre su futuro</li>
                        <li>• Mejor toma de decisiones financieras</li>
                        <li>• Reducción del estrés por desconocimiento</li>
                        <li>• Herramientas prácticas para mejorar su pensión</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Para la empresa:</h3>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Beneficio valorado por los empleados</li>
                        <li>• Mejora del clima laboral</li>
                        <li>• Diferenciación como empleador</li>
                        <li>• Responsabilidad social empresarial</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Nuestro equipo */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Nuestro equipo</h2>
                <div className="bg-gray-50 p-6 rounded-lg border">
                  <p className="text-gray-700 mb-4">
                    Nuestras charlas son dictadas por profesionales con más de 10 años de experiencia en el sistema
                    previsional chileno, incluyendo:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Agentes de Rentas Vitalicias certificados por la CMF</li>
                    <li>• Especialistas en planificación financiera</li>
                    <li>• Expertos en legislación previsional</li>
                    <li>• Comunicadores especializados en educación financiera</li>
                  </ul>
                </div>
              </section>

              {/* Contacto */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Solicita tu charla</h2>
                <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                  <p className="text-gray-700 mb-4">
                    ¿Quieres que tu equipo entienda mejor su jubilación? Contáctanos para coordinar una charla
                    personalizada para tu empresa. Sin costo y sin compromiso.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="https://wa.me/56923935961"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                      <Phone className="w-5 h-5" />
                      WhatsApp: +56 9 2393 5961
                    </a>
                    <a
                      href="mailto:nico@pensionfi.com"
                      className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                      nico@pensionfi.com
                    </a>
                  </div>
                </div>
              </section>

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

      <Footer />
    </div>
  )
}
