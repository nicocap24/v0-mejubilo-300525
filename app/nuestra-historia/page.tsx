import { PageLayout } from "@/components/layouts/page-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function NuestraHistoriaPage() {
  return (
    <PageLayout>
      <div className="w-full max-w-6xl mx-auto bg-white/95 backdrop-blur-sm rounded-lg shadow-lg">
        {/* Header */}
        <div className="text-center py-12 px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nuestra <span className="text-gray-800">Historia</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            La verdad es que llevamos bastante tiempo haciendo cosas para la industria previsional. Sentimos que hace
            falta innovación en esta industria !
          </p>
          <p className="text-lg text-gray-600 mt-4">Aquí una breve lista de los principales hitos:</p>
        </div>

        <div className="px-8 pb-8 space-y-16">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-green-200"></div>

            {/* 2016 */}
            <div className="relative flex items-start mb-16">
              <div className="absolute left-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                16
              </div>
              <div className="ml-20">
                <Card className="bg-green-50 border-green-200">
                  <CardHeader>
                    <CardTitle className="text-2xl text-green-700">2016 - El Despertar</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">
                      Año crucial en nuestra historia, nuestro creador Nicolás, aún terminando de estudiar Ingeniería
                      Comercial en la Universidad de Chile, se topa un día saliendo de clases en Plaza Italia con una
                      marcha masiva "No+AFP". Tenía un profesor que dictaba el ramo "Mercado de Capitales" donde
                      básicamente decía lo bueno que era el sistema y lo positivo que había sido para el desarrollo del
                      país. Este contraste entre lo que se decía en la calle y lo que decía el profesor le llamó
                      poderosamente la atención.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* 2018 */}
            <div className="relative flex items-start mb-16">
              <div className="absolute left-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                18
              </div>
              <div className="ml-20">
                <Card className="bg-blue-50 border-blue-200">
                  <CardHeader>
                    <CardTitle className="text-2xl text-blue-700">2018 - Primeros Proyectos</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">AFPfeliz.cl</h4>
                      <p className="text-gray-700">No sé que fue.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Retirateantes.com</h4>
                      <p className="text-gray-700 mb-4">
                        Fue un cotizador de AFP, donde "Nico" un asistente virtual te recomendaba una AFP en base al
                        saldo que tenías y lo que estabas pagando en comisión.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20Pantalla%202025-06-19%20a%20la%28s%29%2013.13.57-FKE6G8pMpFA200sPokMue1ehiU0HSk.png"
                          alt="Retírate Antes - Página principal"
                          width={400}
                          height={300}
                          className="rounded-lg border shadow-sm"
                        />
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20Pantalla%202025-06-19%20a%20la%28s%29%2013.14.10-jA3iZVaU16Wm8iz3oMsXXoy5RBES9t.png"
                          alt="Retírate Antes - App móvil"
                          width={400}
                          height={300}
                          className="rounded-lg border shadow-sm"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* 2019 */}
            <div className="relative flex items-start mb-16">
              <div className="absolute left-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                19
              </div>
              <div className="ml-20">
                <Card className="bg-red-50 border-red-200">
                  <CardHeader>
                    <CardTitle className="text-2xl text-red-700">2019 - Estallido Social y El Chico AFP</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      Estallido Social. Nico, se encontraba desempeñándose como analista de inversiones en una family
                      office que administraba US$300m en pleno Sanhattan cuando parte el estallido social. Le afectó
                      profundamente ya que el Viernes 19 de Octubre el estaba justamente en Plaza Italia administrando
                      un cowork que tenía en la zona.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Decide crearse una cuenta en Twitter que se terminó llamando "El Chico AFP", amasando miles de
                      visualizaciones y seguidores, con su tono claro y directo, derribando mitos acerca del sistema de
                      libre mercado y particularmente, el sistema AFP.
                    </p>
                    <div className="flex justify-center">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20Pantalla%202025-06-19%20a%20la%28s%29%2012.47.13-i6a52RVkJPiU9GGhYHOmgjYCa9pHYr.png"
                        alt="El Chico AFP - Logo"
                        width={300}
                        height={100}
                        className="rounded-lg border shadow-sm"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* 2020 */}
            <div className="relative flex items-start mb-16">
              <div className="absolute left-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                20
              </div>
              <div className="ml-20">
                <Card className="bg-purple-50 border-purple-200">
                  <CardHeader>
                    <CardTitle className="text-2xl text-purple-700">2020 - Newsletter Privado</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">
                      El 18 de Septiembre de 2020 lanzamos un newsletter privado, donde por $2.000 mensuales enviabamos
                      todos los viernes información a nuestros suscriptores sobre cómo han andado los fondos y distintos
                      acontecimientos en el mercado y también en lo regulatorio. Se suscribieron cerca de 200 personas.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* 2021 */}
            <div className="relative flex items-start mb-16">
              <div className="absolute left-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                21
              </div>
              <div className="ml-20">
                <Card className="bg-orange-50 border-orange-200">
                  <CardHeader>
                    <CardTitle className="text-2xl text-orange-700">2021 - Primer Simulador de Pensiones</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      Junto con Mauricio Pastorini, con quien después hemos podido colaborar en diferentes proyectos,
                      desarrollamos nuestro primer simulador de pensiones. La verdad es que nos enorgullece mucho esta
                      herramienta, ya que nos permitió plasmar algo que sentíamos no se podía transmitir con las
                      herramientas disponibles y tiene que con el concepto de la "brecha previsional", es decir la
                      diferencia entre la pensión deseada y la esperada.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Sin este concepto es difícil determinar si voy bien o mal, y establecer un plan de ahorro para
                      cerrar esa brecha.
                    </p>
                    <p className="text-gray-700">
                      Para esto también fueron muy relevantes los inputs de <strong>Tomás Fernandez</strong>.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* 2024 */}
            <div className="relative flex items-start mb-16">
              <div className="absolute left-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                24
              </div>
              <div className="ml-20">
                <Card className="bg-indigo-50 border-indigo-200">
                  <CardHeader>
                    <CardTitle className="text-2xl text-indigo-700">2024 - Innovación y Blockchain</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">DecideTu.cl</h4>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        En un trabajo colaborativo en alianza con la Asociación de AFP, lanzamos DecideTu.cl, una
                        herramienta que permitía a los usuarios comparar cuánto sería el beneficio previsional obtenido
                        por la reforma. Luego de un arduo trabajo, lamentablemente se decide que el proyecto habrá que
                        darlo de baja.
                      </p>
                      <div className="flex justify-center">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20Pantalla%202025-06-19%20a%20la%28s%29%2012.59.22-vEIHCDmrHjOkcnJjDQr09dcDVYSjwG.png"
                          alt="DecideTu.cl - Simulador de reforma"
                          width={500}
                          height={400}
                          className="rounded-lg border shadow-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Proyectos Blockchain</h4>
                      <p className="text-gray-700 leading-relaxed">
                        Por otro lado, a finales de año creamos un proyecto para la Hackaton de Lens Protocol.
                        Básicamente es una plataforma que permite a cualquier persona conectar su wallet y deployar su
                        AFP, como creador eres libre de elegir donde se invierten los fondos y la comisión que cobras.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        También participamos de las Hackatones de Base Batches LATAM, con un producto 100% onchain de
                        deposito, administración y pago de pensiones.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* 2025 */}
            <div className="relative flex items-start mb-16">
              <div className="absolute left-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                25
              </div>
              <div className="ml-20">
                <Card className="bg-green-50 border-green-200">
                  <CardHeader>
                    <CardTitle className="text-2xl text-green-700">2025 - Acreditación y Me Jubilo</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Marzo - Acreditación como Agente</h4>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        En Marzo Nico da un gran paso en su carrera previsional acreditandose cómo agente de rentas
                        vitalicias. Esto le permite, orientar formalmente a una persona en condiciones de jubilación.
                      </p>
                      <div className="flex justify-center">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20Pantalla%202025-06-19%20a%20la%28s%29%2013.04.30-qIO7mixjQYxAmzMcsQGFgQeyItwPaY.png"
                          alt="Certificado de Agente de Rentas Vitalicias"
                          width={400}
                          height={300}
                          className="rounded-lg border shadow-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Mayo - Nace Me Jubilo</h4>
                      <p className="text-gray-700 leading-relaxed">
                        En Mayo, nace finalmente MeJubilo.com, una plataforma 100% digital e independiente, que le
                        muestra a los afiliados al sistema, cuanto podrían obtener de pensión de manera integral, es
                        decir considerando: Renta vitalicia (pensión AFP), PGU y el nuevo beneficio del Seguro Social.
                        Estas 3 pensiones te dan finalmente tu pensión total.
                      </p>
                      <p className="text-gray-700 leading-relaxed font-semibold">
                        Está herramienta es inédita en la industria, ya que a pesar de los +15 años de debate que demoró
                        la reforma y los millones de dolares que se gastaron en ella, no existe ninguna parte donde los
                        afiliados puedan ver cuanto van a obtener de manera clara y completa.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Resumen */}
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-3xl text-center text-gray-800">Resumen</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-xl text-gray-700 leading-relaxed">
                La verdad es que ha sido una larga trayectoria. Toda una carrera probablemente. Sin embargo, vamos por
                más. Sentimos que no hemos tocado ni la punta del iceberg, y que lo mejor está hacia adelante.
              </p>
              <p className="text-lg text-gray-600">Agradecemos a todos los clientes que han confíado en nosotros.</p>
            </CardContent>
          </Card>

          {/* Roadmap */}
          <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
            <CardHeader>
              <CardTitle className="text-3xl text-center text-gray-800">ROADMAP</CardTitle>
              <p className="text-center text-xl text-gray-600">Nuestra visión a futuro</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Los problema que vimos en la industria años atrás siguen más vigentes que nunca. El descontento hacia el
                sistema no se ha ido y diversas encuestas demuestran que la mayoría de la población no con confía del
                sistema de pensiones tradicional.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ahí es donde creemos que la creación de distintas alternativas se va haciendo cada vez más necesario.
              </p>

              {/* Evolution Diagram */}
              <div className="flex justify-center my-8">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20Pantalla%202025-06-19%20a%20la%28s%29%2013.24.41-6yyTStVXYOjcVQB9loAKWyBBHd4FjQ.png"
                  alt="Evolución de las eras - Era 1.0, 2.0 y 3.0"
                  width={600}
                  height={300}
                  className="rounded-lg border shadow-sm"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <Card className="bg-white border-gray-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-gray-800">Era 1.0</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">Herramientas informáticas previsionales</p>
                  </CardContent>
                </Card>

                <Card className="bg-white border-gray-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-gray-800">Era 2.0</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Pension Fi - Productos financieros previsionales personalizados, transparentes y abiertos.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white border-gray-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-gray-800">Era 3.0</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      BioPension - Productos previsionales biológicos, que se basen en la expectativa de vida real e
                      individual de cada usuario.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center bg-orange-50 p-8 rounded-lg border border-orange-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">¿Quieres ser parte de esta historia?</h3>
            <p className="text-gray-700 mb-6">
              Únete a nosotros y descubre cómo podemos revolucionar juntos el sistema de pensiones
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/evaluar">
                <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3">Evalúa tu pensión</Button>
              </Link>
              <Link href="/acerca-de">
                <Button variant="outline" className="px-8 py-3">
                  Únete al equipo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
