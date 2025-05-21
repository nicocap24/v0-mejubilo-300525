import Image from "next/image"
import Link from "next/link"
import { BarChart3, LineChart, PieChart, TrendingUp, Database, Shield, Users, Building, ArrowRight } from "lucide-react"

export default function PensionAnalyticsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Pension Analytics</h1>
              <p className="text-xl md:text-2xl mb-6">
                Análisis de datos avanzado para instituciones del sistema previsional
              </p>
              <p className="mb-8 text-orange-100">
                Transforme sus datos en decisiones estratégicas con nuestra plataforma de análisis especializada para el
                sector previsional.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#contacto"
                  className="bg-white text-orange-600 hover:bg-orange-50 px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Solicitar demo
                </Link>
                <Link
                  href="#caracteristicas"
                  className="bg-orange-600 text-white border border-white hover:bg-orange-700 px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Conocer más
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <Image
                  src="/pension-analytics-dashboard.png"
                  alt="Pension Analytics Dashboard"
                  width={600}
                  height={400}
                  className="rounded"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Para quién es */}
      <section className="py-16 bg-gray-50" id="para-quien">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">¿Para quién está diseñado?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-orange-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Building className="text-orange-600 h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AFPs y Aseguradoras</h3>
              <p className="text-gray-600">
                Optimice sus estrategias de inversión y mejore la retención de clientes con análisis predictivos
                avanzados.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-orange-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Shield className="text-orange-600 h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Entidades Reguladoras</h3>
              <p className="text-gray-600">
                Monitoree el mercado previsional con datos en tiempo real y detecte anomalías antes de que se conviertan
                en problemas.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-orange-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Users className="text-orange-600 h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Consultoras Previsionales</h3>
              <p className="text-gray-600">
                Ofrezca asesoramiento de mayor valor a sus clientes con insights basados en datos y tendencias del
                mercado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Características */}
      <section className="py-16" id="caracteristicas">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Características principales</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Nuestra plataforma ofrece herramientas avanzadas de análisis diseñadas específicamente para el sector
            previsional.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <div className="bg-orange-100 p-3 rounded-full mr-4">
                <BarChart3 className="text-orange-600 h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Análisis de Comportamiento</h3>
                <p className="text-gray-600">
                  Comprenda los patrones de comportamiento de los afiliados, incluyendo cambios de fondo, retiros y
                  aportes voluntarios.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-orange-100 p-3 rounded-full mr-4">
                <LineChart className="text-orange-600 h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Proyecciones de Mercado</h3>
                <p className="text-gray-600">
                  Modelos predictivos que anticipan tendencias del mercado previsional basados en variables
                  macroeconómicas y demográficas.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-orange-100 p-3 rounded-full mr-4">
                <PieChart className="text-orange-600 h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Segmentación Avanzada</h3>
                <p className="text-gray-600">
                  Identifique segmentos específicos de afiliados para desarrollar estrategias personalizadas y mejorar
                  la comunicación.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-orange-100 p-3 rounded-full mr-4">
                <TrendingUp className="text-orange-600 h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Análisis Competitivo</h3>
                <p className="text-gray-600">
                  Compare su desempeño con el de otras entidades del mercado y descubra oportunidades de mejora.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-orange-100 p-3 rounded-full mr-4">
                <Database className="text-orange-600 h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Integración de Datos</h3>
                <p className="text-gray-600">
                  Conecte fácilmente sus fuentes de datos existentes para obtener una visión unificada del negocio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Casos de uso */}
      <section className="py-16 bg-gray-50" id="casos-uso">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Casos de uso</h2>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Optimización de estrategias de inversión</h3>
              <p className="text-gray-600 mb-4">
                Una AFP importante utilizó nuestro análisis predictivo para ajustar su estrategia de inversión,
                resultando en un aumento del 2.3% en el rendimiento anual de sus fondos.
              </p>
              <div className="flex justify-end">
                <Link href="#contacto" className="text-orange-600 hover:text-orange-700 font-medium flex items-center">
                  Ver caso completo <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Detección de anomalías en el mercado</h3>
              <p className="text-gray-600 mb-4">
                Una entidad reguladora implementó nuestro sistema de monitoreo en tiempo real, identificando patrones
                inusuales que permitieron intervenir antes de que afectaran a los afiliados.
              </p>
              <div className="flex justify-end">
                <Link href="#contacto" className="text-orange-600 hover:text-orange-700 font-medium flex items-center">
                  Ver caso completo <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Mejora en la retención de afiliados</h3>
              <p className="text-gray-600 mb-4">
                Una aseguradora redujo su tasa de abandono en un 18% al implementar estrategias basadas en nuestros
                modelos de segmentación y predicción de comportamiento.
              </p>
              <div className="flex justify-end">
                <Link href="#contacto" className="text-orange-600 hover:text-orange-700 font-medium flex items-center">
                  Ver caso completo <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="py-16 bg-white" id="contacto">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">¿Listo para transformar sus datos en decisiones?</h2>
            <div className="bg-orange-50 p-8 rounded-lg shadow-md">
              <p className="text-center mb-6">
                Solicite una demostración personalizada y descubra cómo Pension Analytics puede ayudar a su
                organización.
              </p>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="empresa" className="block text-sm font-medium text-gray-700 mb-1">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="empresa"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Cuéntenos sobre sus necesidades específicas..."
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-orange-600 text-white hover:bg-orange-700 px-8 py-3 rounded-lg font-medium transition-colors"
                  >
                    Solicitar demostración
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
