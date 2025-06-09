import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ReformaPrevisionalPage() {
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
              <p>
                La reforma previsional ha sido uno de los temas más discutidos en Chile durante los últimos años. Sin
                embargo, hay varios aspectos importantes que no han recibido suficiente atención en el debate público.
              </p>

              <h2>1. El impacto real en las pensiones futuras</h2>
              <p>
                Mientras que la reforma promete aumentar las pensiones, los cálculos detallados muestran que el impacto
                será gradual y variará significativamente según la edad y el historial de cotizaciones de cada persona.
                Para muchos, el aumento podría ser menor al esperado.
              </p>

              <h2>2. Los desafíos de implementación</h2>
              <p>
                La transición hacia el nuevo sistema enfrentará desafíos logísticos y administrativos que podrían
                retrasar los beneficios prometidos. La creación de nuevas instituciones y la adaptación de las
                existentes requerirá tiempo y recursos significativos.
              </p>

              <h2>3. El financiamiento a largo plazo</h2>
              <p>
                Aunque se han discutido las fuentes de financiamiento iniciales, existe incertidumbre sobre la
                sostenibilidad fiscal del sistema a largo plazo, especialmente considerando el envejecimiento de la
                población chilena.
              </p>

              <h2>4. El impacto en el mercado laboral</h2>
              <p>
                Los cambios en las cotizaciones podrían tener efectos en el mercado laboral, potencialmente afectando la
                formalización del empleo y los incentivos para cotizar, especialmente entre trabajadores independientes
                y de menores ingresos.
              </p>

              <h2>5. La transición entre sistemas</h2>
              <p>
                Para quienes están cerca de jubilar, la reforma podría generar incertidumbre sobre cómo se calcularán
                sus beneficios y qué opciones tendrán disponibles. Es fundamental entender las reglas de transición para
                tomar decisiones informadas.
              </p>

              <div className="bg-orange-50 p-6 rounded-lg border border-orange-200 mt-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">¿Necesitas asesoría personalizada?</h3>
                <p className="mb-4">
                  En Me Jubilo te ayudamos a entender cómo la reforma afectará tu situación particular y qué estrategias
                  puedes implementar para maximizar tu pensión.
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
