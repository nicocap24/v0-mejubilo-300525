import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SupuestosPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Supuestos de Cálculo</h1>
              <p className="text-xl text-gray-600">Conoce los supuestos que utilizamos para calcular tu pensión</p>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Supuestos Generales</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-2">Años Cotizados</h3>
                    <p className="text-blue-700">
                      • No te pedimos años cotizados en esta simulación así que lo estimamos en base al saldo ingresado;
                      Si tienes más de $25,000,000 de saldo se asume que cotizaste al menos 20 años, si tienes más de
                      $50,000,000 se asume que has cotizado 25 años o más.
                    </p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-800 mb-2">Rentabilidad</h3>
                    <p className="text-green-700">
                      • Asumimos una rentabilidad real anual del 4% para proyecciones futuras
                    </p>
                  </div>

                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-yellow-800 mb-2">Expectativa de Vida</h3>
                    <p className="text-yellow-700">
                      • Utilizamos las tablas de mortalidad oficiales de la Superintendencia de Pensiones
                    </p>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-purple-800 mb-2">PGU (Pensión Garantizada Universal)</h3>
                    <p className="text-purple-700">
                      • Consideramos el monto actual de la PGU según los tramos de ingresos
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Metodología</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Nuestros cálculos se basan en la normativa vigente del sistema de pensiones chileno y utilizan los
                    parámetros oficiales establecidos por la Superintendencia de Pensiones.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Los resultados son estimaciones y pueden variar según cambios en la legislación, condiciones del
                    mercado y circunstancias individuales.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Contacto</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    Si tienes preguntas o sugerencias respecto de estos cálculos favor contáctanos acá:
                    <a
                      href="mailto:hinicocapital@gmail.com"
                      className="text-green-600 hover:text-green-700 font-medium ml-1"
                    >
                      hinicocapital@gmail.com
                    </a>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
