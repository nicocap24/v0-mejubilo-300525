import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Users, TrendingUp, Target, Mail, Phone, Eye, MousePointer } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PublicitaConNosotrosPage() {
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
              <CardTitle className="text-center text-3xl font-bold text-gray-800">Publicita con Nosotros</CardTitle>
              <p className="text-center text-gray-600 mt-2">
                Llega a miles de chilenos interesados en su jubilación y planificación financiera
              </p>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Nuestra Audiencia */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Nuestra Audiencia</h2>
                <p className="text-gray-700 mb-6">
                  Me Jubilo atrae a miles de chilenos que buscan información clara y confiable sobre su jubilación.
                  Nuestra audiencia está compuesta principalmente por:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 text-center">
                    <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">Profesionales 45-65 años</h3>
                    <p className="text-gray-600">Personas próximas a jubilar con poder adquisitivo</p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg border border-green-200 text-center">
                    <Target className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">Interesados en finanzas</h3>
                    <p className="text-gray-600">Usuarios activos en planificación financiera</p>
                  </div>
                  <div className="bg-orange-50 p-6 rounded-lg border border-orange-200 text-center">
                    <TrendingUp className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">Alto engagement</h3>
                    <p className="text-gray-600">Usuarios comprometidos con su futuro financiero</p>
                  </div>
                </div>
              </section>

              {/* Estadísticas */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Estadísticas del Sitio</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg border">
                    <div className="flex items-center gap-3 mb-2">
                      <Eye className="h-6 w-6 text-orange-600" />
                      <h3 className="text-xl font-semibold text-gray-800">Visitas Mensuales</h3>
                    </div>
                    <p className="text-3xl font-bold text-orange-600 mb-2">15,000+</p>
                    <p className="text-gray-600">Usuarios únicos mensuales en crecimiento</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg border">
                    <div className="flex items-center gap-3 mb-2">
                      <MousePointer className="h-6 w-6 text-orange-600" />
                      <h3 className="text-xl font-semibold text-gray-800">Tiempo en Sitio</h3>
                    </div>
                    <p className="text-3xl font-bold text-orange-600 mb-2">3:45 min</p>
                    <p className="text-gray-600">Promedio de tiempo de permanencia</p>
                  </div>
                </div>
              </section>

              {/* Formatos Publicitarios */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Formatos Publicitarios Disponibles</h2>
                <div className="space-y-6">
                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Banner Display</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Ubicaciones premium en página principal y resultados</li>
                      <li>• Formatos: 728x90, 300x250, 320x50 (móvil)</li>
                      <li>• Segmentación por edad y ubicación geográfica</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Contenido Patrocinado</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Artículos educativos con mención de marca</li>
                      <li>• Integración natural con nuestro contenido</li>
                      <li>• Posicionamiento como experto en el sector</li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Newsletter Sponsorship</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Mención en newsletter semanal</li>
                      <li>• Audiencia altamente comprometida</li>
                      <li>• Formato exclusivo por edición</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Sectores Ideales */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Sectores Ideales para Publicitar</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">Servicios Financieros:</h3>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Compañías de seguros</li>
                      <li>• Bancos y instituciones financieras</li>
                      <li>• Asesores financieros</li>
                      <li>• Plataformas de inversión</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">Otros Sectores:</h3>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Salud y bienestar</li>
                      <li>• Inmobiliarias</li>
                      <li>• Turismo y viajes</li>
                      <li>• Tecnología para adultos mayores</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Por qué elegir Me Jubilo */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">¿Por qué elegir Me Jubilo?</h2>
                <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                  <ul className="space-y-3 text-gray-700">
                    <li>
                      • <strong>Audiencia específica:</strong> Usuarios interesados en planificación financiera
                    </li>
                    <li>
                      • <strong>Confianza:</strong> Somos una fuente confiable de información previsional
                    </li>
                    <li>
                      • <strong>Crecimiento:</strong> Sitio web en constante crecimiento
                    </li>
                    <li>
                      • <strong>Engagement:</strong> Alta interacción y tiempo de permanencia
                    </li>
                    <li>
                      • <strong>Flexibilidad:</strong> Formatos publicitarios adaptables a tus necesidades
                    </li>
                  </ul>
                </div>
              </section>

              {/* Contacto */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Solicita tu Propuesta Comercial</h2>
                <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                  <p className="text-gray-700 mb-4">
                    ¿Quieres llegar a nuestra audiencia? Contáctanos para recibir una propuesta comercial personalizada
                    con tarifas, formatos disponibles y opciones de segmentación.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="mailto:nico@pensionfi.com?subject=Consulta%20Publicitaria%20-%20Me%20Jubilo"
                      className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                      nico@pensionfi.com
                    </a>
                    <a
                      href="https://wa.me/56923935961?text=Hola,%20me%20interesa%20publicitar%20en%20Me%20Jubilo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                      <Phone className="w-5 h-5" />
                      WhatsApp: +56 9 2393 5961
                    </a>
                  </div>
                </div>
              </section>

              {/* Información adicional */}
              <section>
                <div className="bg-gray-50 p-6 rounded-lg border">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Información Adicional</h3>
                  <p className="text-gray-700 text-sm">
                    Todas las campañas publicitarias son revisadas para asegurar que sean relevantes y valiosas para
                    nuestra audiencia. Nos reservamos el derecho de rechazar contenido que no se alinee con nuestros
                    valores de transparencia y educación financiera.
                  </p>
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
