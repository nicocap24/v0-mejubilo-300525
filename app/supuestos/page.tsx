import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function SupuestosPage() {
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
            <CardTitle className="text-center text-3xl font-bold text-gray-800">
              Supuestos detrás de esta estimación
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Genéricos */}
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">Genéricos:</h2>
              <ul className="space-y-2 text-gray-700">
                <li>• Eres hombre.</li>
                <li>
                  • Estás solicitando una pensión de vejez, no una pensión anticipada, ni de invalidez ni de
                  sobrevivencia.
                </li>
                <li>• Tienes 65 años de edad, es decir estás en edad legal de jubilar.</li>
                <li>• No tienes ninguna discapacidad, ni total ni parcial.</li>
                <li>
                  • Se usa el Valor UF según el SII al último día de actualización que es: $39.200 (al 04/06/2025)
                </li>
              </ul>
            </div>

            {/* Cálculo Renta Vitalicia */}
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">Cálculo Renta Vitalicia:</h2>
              <ul className="space-y-2 text-gray-700">
                <li>
                  • Tu grupo familiar es: Soltero, sin cónyuge/madre de hijos sin afiliación matrimonial y sin hijos.
                </li>
                <li>
                  • Quieres jubilar hoy con el saldo ingresado, es decir no hay supuestos de rentabilidad futura o si
                  cotizarás o no en el futuro. Estamos asumiendo que quieres jubilar hoy con lo que tienes ahora.
                </li>
                <li>
                  • Estás interesado en poder optar por una renta vitalicia (y no quedarte en la AFP en retiro
                  programado)
                </li>
                <li>
                  • Para poder optar por una renta vitalicia por ley debes poder obtener una renta vitalicia mayor a 2
                  UF según la reforma. Si no cumples este requisito se asume que no podrás jubilar y tu pensión es igual
                  a 0.
                </li>
                <li>
                  • La tasa ocupada para calcular la renta vitalicia es última tasa promedio de toda la industria para
                  pensión de vejez disponible por la Super de Pensiones en{" "}
                  <a
                    href="https://www.spensiones.cl/apps/tasas/tasasRentasVitalicias.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-orange-700 underline"
                  >
                    este link
                  </a>
                  . En este caso es: 3.27%
                </li>
              </ul>
            </div>

            {/* Cálculo Seguro Social */}
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">Cálculo Seguro Social:</h2>
              <ul className="space-y-2 text-gray-700">
                <li>• Para los hombres se pide un mínimo de 20 años cotizados y un máximo de 25.</li>
                <li>• El beneficio es de 0,1 UF por año cotizado</li>
                <li>
                  • No te pedimos años cotizados en esta simulación así que lo estimamos en base al saldo ingresado; Si
                  tienes más de $25,000,000 de saldo se asume que cotizaste al menos 20 años, si tienes más de
                  $50,000,000 se asume que has cotizado 25 años o más.
                </li>
              </ul>
            </div>

            {/* Cálculo PGU */}
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">Cálculo PGU:</h2>
              <ul className="space-y-2 text-gray-700">
                <li>• Se asume que estás dentro del 90% menos rico del país, según el Registro Social de Hogares.</li>
                <li>
                  • Eres chileno y resides en Chile por 20 años continuos o discontinuos desde que tienes 20 años y en 4
                  de los últimos 5 años.
                </li>
                <li>• Es decir que calificas para PGU.</li>
                <li>• Se asume que aumento de PGU estipulado en la reforma aún no llega a tu grupo etario.</li>
              </ul>
            </div>

            {/* Cálculo Total */}
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">Cálculo Total:</h2>
              <ul className="space-y-2 text-gray-700">
                <li>
                  • Tu pensión total es la sumatoria de renta vitalicia, seguro social y PGU. Se asume que no tienes
                  otros ingresos pasivos como propiedades etc.
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
              <p className="text-gray-700">
                Si tienes preguntas o sugerencias respecto de estos cálculos favor contáctanos acá:{" "}
                <a
                  href="mailto:hinicocapital@gmail.com"
                  className="text-orange-600 hover:text-orange-700 font-semibold"
                >
                  hinicocapital@gmail.com
                </a>
              </p>
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
