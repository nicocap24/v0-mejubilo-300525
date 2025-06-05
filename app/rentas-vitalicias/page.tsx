import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, CheckCircle, Phone, Mail } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function RentasVitaliciasPage() {
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
          <Link href="/" className="inline-flex items-center text-gray-700 hover:text-gray-900 mb-6 text-lg">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Volver al inicio
          </Link>

          <Card className="w-full max-w-5xl mx-auto bg-white/95 backdrop-blur-sm">
            <CardHeader className="pb-8">
              <CardTitle className="text-center text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Rentas Vitalicias
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-10 px-8 md:px-12">
              {/* ¿Qué es una Renta Vitalicia? */}
              <section>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">¿Qué es una Renta Vitalicia?</h2>
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                  Cuando estás por jubilar tienes a grandes rasgos 2 opciones; o quedarte en la AFP, donde tu pensión
                  depende de la volatilidad de los fondos o bien contratar una renta vitalicia con una compañía de
                  seguros donde esta te garantiza una pensión fija en UF de por vida.
                </p>
              </section>

              {/* Ventajas */}
              <section>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Ventajas de las Rentas Vitalicias</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-8 w-8 text-green-600 mt-2 flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-800 mb-2">Es fija.</h3>
                      <p className="text-xl text-gray-600 leading-relaxed">
                        Tu pensión no varía con la volatilidad de los mercados financieros.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-8 w-8 text-green-600 mt-2 flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-800 mb-2">Te protege contra la inflación.</h3>
                      <p className="text-xl text-gray-600 leading-relaxed">
                        La pensión no se calcula en CLP, se hace en UF. Es decir mantienes tu poder adquisitivo mientras
                        estás jubilado.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-8 w-8 text-green-600 mt-2 flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-800 mb-2">Es de por vida.</h3>
                      <p className="text-xl text-gray-600 leading-relaxed">
                        No es "hasta que se te acabe la $$", es de por vida.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-8 w-8 text-green-600 mt-2 flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-800 mb-2">Es personalizable.</h3>
                      <p className="text-xl text-gray-600 leading-relaxed">
                        Puedes ajustar la renta vitalicia a tus necesidades, solicitando un aumento temporal o un
                        periodo garantizado, protegiendo a tu familia.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* ¿Cómo contratar? */}
              <section>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  ¿Cómo contratar una Renta Vitalicia?
                </h2>
                <div className="space-y-8">
                  <div className="flex items-start space-x-6">
                    <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-4">
                        Simula en{" "}
                        <a
                          href="https://mejubilo.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-orange-600 hover:text-orange-700 font-semibold underline"
                        >
                          Me Jubilo
                        </a>{" "}
                        más o menos cuánto será tu pensión integral (renta vitalicia, PGU y seguro social).
                      </p>
                      <Link href="/evaluar">
                        <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 text-lg">
                          Simular ahora
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6">
                    <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-4">
                        Agenda con Nico una reunión de evaluación primero para ver si 1) calificas a una renta
                        vitalicia. 2) Una renta vitalicia hace sentido para ti. Puede ser presencial (sólo algunas
                        regiones) o por videollamada dependiendo el caso.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <a
                          href="https://wa.me/56923935961"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-medium transition-colors"
                        >
                          <Phone className="w-5 h-5" />
                          WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6">
                    <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                        Firma en Notaria de un "Mandato de trámite de pensión". Con este documento puedo oficialmente
                        gestionar yo los distintos trámites que hay que hacer para poder procesar esta solicitud de
                        pensión.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6">
                    <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                        Emisión de "Certificado de Saldo" en la AFP para posterior emisión de un SCOMP (o Certificado de
                        Ofertas de Montos de Pensión) personalizado, donde podrá recibir y comprar ofertas de todas las
                        compañías del mercado.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6">
                    <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold flex-shrink-0">
                      5
                    </div>
                    <div>
                      <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                        Análisis de cada opción y cierre con la mejor alternativa 💪.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6">
                    <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold flex-shrink-0">
                      6
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-800 mb-2">Seguimiento.</h3>
                      <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                        No es que cerramos y nos vamos si no que te acompaño hasta que comiences a recibir tu primer
                        pago de pensión.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6">
                    <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold flex-shrink-0">
                      7
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-800 mb-2">¡Ahora a jubilar!</h3>
                      <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                        Al fin, el paso más anhelado. Empieza a recibir tu pensión fija en UF de por vida y olvídate de
                        todo lo demás. Es hora de relajarse y disfrutar!
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Requisitos */}
              <section>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  ¿Cuáles son los requisitos para poder contratar una Renta Vitalicia?
                </h2>
                <div className="bg-blue-50 p-8 rounded-lg border border-blue-200">
                  <ul className="space-y-4 text-xl md:text-2xl text-gray-700 leading-relaxed">
                    <li>• Cumplir con la edad legal de jubilación.</li>
                    <li>
                      • Tener un saldo mínimo en AFP que permita obtener una renta vitalicia de al menos 3 UF mensuales
                      (Este requisito bajará a 2 UF con la reforma)
                    </li>
                    <li>
                      • Calificar para pensión anticipada, de sobrevivencia o invalidez según corresponda el caso.
                    </li>
                  </ul>
                </div>
              </section>

              {/* Costo */}
              <section>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  ¿Contratar una Renta Vitalicia contigo, tiene algún costo?
                </h2>
                <div className="bg-orange-50 p-8 rounded-lg border border-orange-200">
                  <p className="text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed">
                    Claro que sí. Contratar una renta vitalicia no es fácil. Yo te oriento en todo el proceso para que
                    puedas tomar la mejor decisión de algo que se adapte a ti. Esto requiere tiempo y conocimientos.
                  </p>
                  <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                    El cobro está normado por la CMF, es decir aplica para todos los agentes previsionales y es del 1,5%
                    de los fondos con un tope de 60 UF. Esto traducido en pensión mensual son cerca de $6.000 para un
                    saldo de 2000 UF.
                  </p>
                </div>
              </section>

              {/* Contacto */}
              <section>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">¿Listo para asegurar tu futuro?</h2>
                <div className="bg-orange-50 p-8 rounded-lg border border-orange-200">
                  <div className="flex flex-col gap-6">
                    <a
                      href="https://wa.me/56923935961"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-6 rounded-lg text-xl font-medium transition-colors"
                    >
                      <Phone className="w-7 h-7" />
                      WhatsApp: +56 9 2393 5961
                    </a>
                    <a
                      href="mailto:nico@pensionfi.com"
                      className="inline-flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 rounded-lg text-xl font-medium transition-colors"
                    >
                      <Mail className="w-7 h-7" />
                      nico@pensionfi.com
                    </a>
                  </div>
                </div>
              </section>

              {/* Back Button */}
              <div className="flex justify-center pt-8">
                <Link href="/">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-6 text-xl">
                    Volver al inicio
                  </Button>
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
