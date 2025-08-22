import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, TrendingDown, TrendingUp, Users } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function NuevosPensionadosAbril2025Page() {
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
                NUEVOS PENSIONADOS ABRIL 2025
              </CardTitle>
              <p className="text-center text-gray-600 mt-2">Publicado el 9 de junio, 2025</p>
            </CardHeader>
            <CardContent className="space-y-8">
              <p className="text-xl text-gray-700 leading-relaxed">
                Salieron los datos de los nuevos pensionados de Abril 2025. ¿Cuáles fueron los resultados?
              </p>

              {/* Statistics Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="p-6 text-center">
                    <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-blue-800 mb-2">13.700+</h3>
                    <p className="text-blue-700">Total de nuevos pensionados en abril</p>
                  </CardContent>
                </Card>

                <Card className="bg-green-50 border-green-200">
                  <CardContent className="p-6 text-center">
                    <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-green-800 mb-2">$281.484</h3>
                    <p className="text-green-700">Pensión promedio hombres</p>
                  </CardContent>
                </Card>

                <Card className="bg-red-50 border-red-200">
                  <CardContent className="p-6 text-center">
                    <TrendingDown className="h-12 w-12 text-red-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-red-800 mb-2">$113.691</h3>
                    <p className="text-red-700">Pensión promedio mujeres</p>
                  </CardContent>
                </Card>
              </div>

              {/* Main Content */}
              <div className="prose prose-lg max-w-none space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  De un total de más de <strong>13.700 pensionados</strong> que hubieron en ese mes, los resultados
                  muestran una realidad preocupante sobre las pensiones en Chile.
                </p>

                <div className="bg-gray-50 p-6 rounded-lg border">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Resultados por género:</h3>
                  <ul className="space-y-3 text-lg">
                    <li>
                      <strong>Hombres:</strong> El monto promedio de pensión obtenida fue de{" "}
                      <span className="text-green-600 font-bold">$281.484</span>
                    </li>
                    <li>
                      <strong>Mujeres:</strong> El monto de pensión promedio fue de{" "}
                      <span className="text-red-600 font-bold">$113.691</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Promedio general</h3>
                  <p className="text-lg text-gray-700">
                    Lo que nos da un monto promedio total de pensión de:{" "}
                    <span className="text-orange-600 font-bold text-2xl">$192.099</span>
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-800 mt-8">¿Qué determina tu pensión?</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Recuerda que tu pensión depende de varias cosas importantes:
                </p>

                <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
                  <li>Cuántos meses cotizaste a lo largo de tu vida laboral</li>
                  <li>Tu salario promedio durante los años de cotización</li>
                  <li>La rentabilidad obtenida por tus fondos de pensión</li>
                  <li>El tipo de multifondo en el que estuviste invertido</li>
                  <li>Tu edad al momento de jubilar</li>
                  <li>Las comisiones cobradas por tu AFP</li>
                </ul>

                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">La brecha de género</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Los datos muestran una significativa brecha de género en las pensiones, donde las mujeres reciben en
                    promedio menos de la mitad de lo que reciben los hombres. Esto se debe principalmente a:
                  </p>
                  <ul className="list-disc pl-6 mt-3 space-y-1 text-gray-700">
                    <li>Menores salarios históricos</li>
                    <li>Interrupciones laborales por maternidad y cuidado familiar</li>
                    <li>Mayor expectativa de vida (lo que reduce el monto mensual)</li>
                    <li>Menor participación en el mercado laboral formal</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold text-gray-800 mt-8">¿Cómo saber cuál será tu pensión?</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  No esperes hasta el último momento para conocer cuánto recibirás al jubilar. En Me Jubilo puedes
                  simular tu pensión de manera gratuita y obtener una estimación realista basada en tu situación actual.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Nuestra herramienta considera todos los componentes de tu pensión futura: Renta Vitalicia, PGU
                  (Pensión Garantizada Universal) y Seguro Social, para darte una visión completa de tu jubilación.
                </p>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-lg border border-orange-200 text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">¿Y tú, ya simulaste tu pensión en Me Jubilo?</h3>
                <p className="text-lg text-gray-700 mb-6">
                  No te quedes con la incertidumbre. Descubre ahora mismo cuánto podrías recibir al jubilar y toma
                  decisiones informadas sobre tu futuro financiero.
                </p>
                <Link href="/evaluar">
                  <Button
                    size="lg"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-4 text-xl rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Simular mi pensión GRATIS
                  </Button>
                </Link>
                <p className="text-sm text-gray-600 mt-4">✓ 100% gratuito ✓ Resultados inmediatos ✓ Sin compromiso</p>
              </div>

              {/* Additional Info */}
              <div className="bg-gray-50 p-6 rounded-lg border">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Fuente de los datos</h3>
                <p className="text-gray-600">
                  Los datos presentados corresponden a información oficial de las AFP y la Superintendencia de Pensiones
                  sobre los nuevos pensionados durante el mes de abril de 2025.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
