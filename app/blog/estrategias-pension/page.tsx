import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function EstrategiasPensionPage() {
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
                5 Estrategias para Mejorar tu Pensión
              </CardTitle>
              <p className="text-center text-gray-600 mt-2">Publicado el 10 de junio, 2025</p>
            </CardHeader>
            <CardContent className="space-y-6 prose prose-lg max-w-none">
              <p>
                La jubilación es una etapa que todos enfrentaremos eventualmente, pero muchos chilenos no están
                preparados financieramente para ella. Aquí te presentamos cinco estrategias efectivas para mejorar tu
                pensión futura.
              </p>

              <h2>1. Cotiza consistentemente</h2>
              <p>
                Cada mes sin cotizar impacta significativamente en tu pensión final. Si eres trabajador independiente o
                tienes períodos sin empleo formal, considera hacer cotizaciones voluntarias para mantener la continuidad
                de tus aportes.
              </p>
              <p>
                <strong>Impacto potencial:</strong> Cotizar regularmente durante toda tu vida laboral puede aumentar tu
                pensión hasta en un 30-40% comparado con tener lagunas previsionales significativas.
              </p>

              <h2>2. Aumenta tu porcentaje de cotización</h2>
              <p>
                El 10% obligatorio es insuficiente para lograr una buena tasa de reemplazo. Considera realizar Ahorro
                Previsional Voluntario (APV) para complementar tus cotizaciones obligatorias.
              </p>
              <p>
                <strong>Impacto potencial:</strong> Aumentar tu cotización al 15% durante 20 años puede incrementar tu
                pensión final entre un 40-50%.
              </p>

              <h2>3. Optimiza tu multifondo según tu edad</h2>
              <p>
                Los multifondos tienen diferentes niveles de riesgo y rentabilidad esperada. Es crucial ajustar tu
                estrategia según tu horizonte de inversión:
              </p>
              <ul>
                <li>
                  <strong>Menos de 35 años:</strong> Fondos más agresivos (A o B) para aprovechar el crecimiento a largo
                  plazo.
                </li>
                <li>
                  <strong>Entre 35-50 años:</strong> Fondos moderados (B o C) para balancear crecimiento y seguridad.
                </li>
                <li>
                  <strong>Más de 50 años:</strong> Fondos más conservadores (C o D) para proteger lo acumulado.
                </li>
              </ul>
              <p>
                <strong>Impacto potencial:</strong> Una estrategia adecuada de multifondos puede generar entre un 15-25%
                más de saldo final comparado con mantenerse en un fondo inadecuado para tu edad.
              </p>

              <h2>4. Posterga tu jubilación si es posible</h2>
              <p>
                Cada año adicional de trabajo tiene un doble efecto positivo: aumenta tu saldo acumulado y reduce los
                años que necesitarás financiar con tu pensión.
              </p>
              <p>
                <strong>Impacto potencial:</strong> Postergar la jubilación por 3 años puede aumentar tu pensión entre
                un 15-20%.
              </p>

              <h2>5. Conoce y aprovecha los beneficios estatales</h2>
              <p>
                El sistema previsional chileno ofrece varios beneficios que muchas personas desconocen o no aprovechan
                completamente:
              </p>
              <ul>
                <li>
                  <strong>PGU (Pensión Garantizada Universal):</strong> Beneficio para el 90% menos rico de la
                  población.
                </li>
                <li>
                  <strong>Seguro Social:</strong> Beneficio adicional para quienes han cotizado regularmente.
                </li>
                <li>
                  <strong>Bono por hijo:</strong> Para mujeres que han tenido hijos.
                </li>
              </ul>
              <p>
                <strong>Impacto potencial:</strong> Los beneficios estatales pueden representar entre un 30-60% de tu
                pensión total, dependiendo de tu situación particular.
              </p>

              <div className="bg-orange-50 p-6 rounded-lg border border-orange-200 mt-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">¿Quieres un análisis personalizado?</h3>
                <p className="mb-4">
                  En Me Jubilo te ofrecemos una evaluación gratuita de tu situación previsional y recomendaciones
                  específicas para mejorar tu pensión futura.
                </p>
                <Link href="/evaluar">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white">Evalúa tu pensión gratis</Button>
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
