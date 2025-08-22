import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function RankingAFPsPage() {
  const afps = [
    { name: "AFP Uno", comision: 0.49, ranking: 1, color: "bg-yellow-500" },
    { name: "AFP Modelo", comision: 0.89, ranking: 2, color: "bg-gray-400" },
    { name: "AFP Planvital", comision: 1.14, ranking: 3, color: "bg-amber-600" },
    { name: "AFP Habitat", comision: 1.27, ranking: 4, color: "bg-blue-500" },
    { name: "AFP Capital", comision: 1.44, ranking: 5, color: "bg-red-500" },
    { name: "AFP Cuprum", comision: 1.44, ranking: 6, color: "bg-purple-500" },
    { name: "AFP Provida", comision: 1.45, ranking: 7, color: "bg-green-600" },
  ]

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Ranking AFPs Chile 2025</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comparación de comisiones de las 7 AFPs en Chile. Ordenadas de menor a mayor costo para el afiliado.
              </p>
            </div>

            <div className="grid gap-6 mb-12">
              {afps.map((afp, index) => (
                <Card key={afp.name} className="relative overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-12 h-12 rounded-full ${afp.color} flex items-center justify-center text-white font-bold text-lg`}
                        >
                          {afp.ranking}
                        </div>
                        <div>
                          <CardTitle className="text-2xl">{afp.name}</CardTitle>
                          <p className="text-gray-600">Comisión anual sobre saldo</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-gray-900">{afp.comision}%</div>
                        {index === 0 && <Badge className="bg-green-100 text-green-800 mt-2">Más económica</Badge>}
                        {index === afps.length - 1 && <Badge className="bg-red-100 text-red-800 mt-2">Más cara</Badge>}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-gray-600">Costo por $1.000.000</p>
                        <p className="font-semibold text-lg">{formatCurrency(afp.comision * 10000)}</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-gray-600">Costo por $10.000.000</p>
                        <p className="font-semibold text-lg">{formatCurrency(afp.comision * 100000)}</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-gray-600">Costo por $50.000.000</p>
                        <p className="font-semibold text-lg">{formatCurrency(afp.comision * 500000)}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Metodología</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Este ranking se basa únicamente en las comisiones anuales sobre saldo que cobra cada AFP. Las
                  comisiones son el principal factor de costo para los afiliados.
                </p>
                <p className="text-gray-700">
                  <strong>Importante:</strong> Al elegir AFP también considera otros factores como:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Rentabilidad histórica de los fondos</li>
                  <li>Calidad del servicio al cliente</li>
                  <li>Facilidad de trámites online</li>
                  <li>Cobertura de sucursales</li>
                </ul>
                <p className="text-sm text-gray-600">
                  Datos actualizados a enero 2025. Fuente: Superintendencia de Pensiones.
                </p>
              </CardContent>
            </Card>

            <div className="text-center">
              <Link
                href="/evaluar"
                className="inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Evalúa tu pensión ahora
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
