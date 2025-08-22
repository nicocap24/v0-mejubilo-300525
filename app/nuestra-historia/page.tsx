import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function NuestraHistoriaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Nuestra Historia</h1>
              <p className="text-xl text-gray-600">
                La verdad es que llevamos bastante tiempo haciendo cosas para la industria previsional. Sentimos que
                hace falta innovación en esta industria !
              </p>
            </div>

            <div className="space-y-8">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-green-600 mb-4">2016</h2>
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

              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-green-600 mb-4">2018</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>AFPfeliz.cl</strong> - No sé que fue.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Retirateantes.com</strong> fue un cotizador de AFP, donde "Nico" un asistente virtual te
                    recomendaba una AFP en base al saldo que tenías y lo que estabas pagando en comisión.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-green-600 mb-4">2019</h2>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Estallido Social.</strong> Nico, se encontraba desempeñándose como analista de inversiones
                    en una family office que administraba US$300m en pleno Sanhattan cuando parte el estallido social.
                    Le afectó profundamente ya que el Viernes 19 de Octubre el estaba justamente en Plaza Italia
                    administrando un cowork que tenía en la zona. Decide crearse una cuenta en Twitter que se terminó
                    llamando "El Chico AFP", amasando miles de visualizaciones y seguidores, con su tono claro y
                    directo, derribando mitos acerca del sistema de libre mercado y particularmente, el sistema AFP.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-green-600 mb-4">2020</h2>
                  <p className="text-gray-700 leading-relaxed">
                    El 18 de Septiembre de 2020 lanzamos un newsletter privado, donde por $2.000 mensuales enviabamos
                    todos los viernes información a nuestros suscriptores sobre cómo han andado los fondos y distintos
                    acontecimientos en el mercado y también en lo regulatorio. Se suscribieron cerca de 200 personas.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-green-600 mb-4">2021</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Junto con Mauricio Pastorini, con quien después hemos podido colaborar en diferentes proyectos,
                    desarrollamos nuestro primer simulador de pensiones. La verdad es que nos enorgullece mucho esta
                    herramienta, ya que nos permitió plasmar algo que sentíamos no se podía transmitir con las
                    herramientas disponibles y tiene que con el concepto de la "brecha previsional", es decir la
                    diferencia entre la pensión deseada y la esperada. Sin este concepto es difícil determinar si voy
                    bien o mal, y establecer un plan de ahorro para cerrar esa brecha.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    Para esto también fueron muy relevantes los inputs de Tomás Fernandez.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-green-600 mb-4">2024</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    En un trabajo colaborativo en alianza con la Asociación de AFP, lanzamos DecideTu.cl, una
                    herramienta que permitía a los usuarios comparar cuánto sería el beneficio previsional obtenido por
                    la reforma. Luego de un arduo trabajo, lamentablemente se decide que el proyecto habrá que darlo de
                    baja.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Por otro lado, a finales de año creamos un proyecto para la Hackaton de Lens Protocol. Básicamente
                    es una plataforma que permite a cualquier persona conectar su wallet y deployar su AFP, como creador
                    eres libre de elegir donde se invierten los fondos y la comisión que cobras.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    También participamos de las Hackatones de Base Batches LATAM, con un producto 100% onchain de
                    deposito, administración y pago de pensiones.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-green-600 mb-4">2025</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    En Marzo Nico da un gran paso en su carrera previsional acreditandose cómo agente de rentas
                    vitalicias. Esto le permite, orientar formalmente a una persona en condiciones de jubilación.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    En Mayo, nace finalmente MeJubilo.com, una plataforma 100% digital e independiente, que le muestra a
                    los afiliados al sistema, cuanto podrían obtener de pensión de manera integral, es decir
                    considerando: Renta vitalicia (pensión AFP), PGU y el nuevo beneficio del Seguro Social. Estas 3
                    pensiones te dan finalmente tu pensión total.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    Está herramienta es inédita en la industria, ya que a pesar de los +15 años de debate que demoró la
                    reforma y los millones de dolares que se gastaron en ella, no existe ninguna parte donde los
                    afiliados puedan ver cuanto van a obtener de manera clara y completa.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-green-600 mb-4">Resumen</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    La verdad es que ha sido una larga trayectoria. Toda una carrera probablemente. Sin embargo, vamos
                    por más. Sentimos que no hemos tocado ni la punta del iceberg, y que lo mejor está hacia adelante.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Agradecemos a todos los clientes que han confíado en nosotros.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-blue-600 mb-4">ROADMAP</h2>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Nuestra visión a futuro.</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Los problema que vimos en la industria años atrás siguen más vigentes que nunca. El descontento
                    hacia el sistema no se ha ido y diversas encuestas demuestran que la mayoría de la población no con
                    confía del sistema de pensiones tradicional.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Ahí es donde creemos que la creación de distintas alternativas se va haciendo cada vez más
                    necesario.
                  </p>
                  <a
                    href="https://docs.google.com/document/d/1Cnka9n4m1GVLdoU-o0vNgCZ5xn4OQLcID9mQZvVh3Wk/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                  >
                    Ver Roadmap Completo
                  </a>
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
