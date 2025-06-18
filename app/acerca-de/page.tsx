import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function AcercaDePage() {
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
            <CardTitle className="text-center text-3xl font-bold text-gray-800">Acerca de MeJubilo</CardTitle>
          </CardHeader>
          <CardContent className="space-y-12">
            {/* Quienes somos */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Quienes somos</h2>
              <p className="text-gray-700 mb-6">
                Nada de esto sería posible si no fuera por nuestra red de colaboradores remotos apasionados por las
                pensiones y la tecnología.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Team Member 1 */}
                <div className="bg-gray-50 p-6 rounded-lg border">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Nicolás Arrieta</h3>
                  <div className="flex space-x-3 mb-4">
                    <a
                      href="https://x.com/nicocapital"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Twitter
                    </a>
                    <a
                      href="https://www.instagram.com/nicocapital24/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800"
                    >
                      Instagram
                    </a>
                  </div>
                </div>

                {/* Team Member 2 */}
                <div className="bg-gray-50 p-6 rounded-lg border">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Mauricio Pastorini</h3>
                  <div className="flex space-x-3 mb-4">
                    <a
                      href="https://x.com/mauricio1964"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Twitter
                    </a>
                    <a
                      href="https://gestion-online.cl"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-800"
                    >
                      Website
                    </a>
                  </div>
                </div>

                {/* Team Member 3 */}
                <div className="bg-gray-50 p-6 rounded-lg border">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Javier Marquéz</h3>
                  <div className="flex space-x-3 mb-4">
                    <a
                      href="https://javier-marquez.web.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-800"
                    >
                      Website
                    </a>
                  </div>
                </div>

                {/* Team Member 4 */}
                <div className="bg-gray-50 p-6 rounded-lg border">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Cristián Valdivia</h3>
                  <div className="flex space-x-3 mb-4">
                    <a
                      href="https://www.cristianvaldivia.cl/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-800"
                    >
                      Website
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-orange-50 p-6 rounded-lg border border-orange-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">¿Te gustaría colaborar con nosotros?</h3>
                <p className="text-gray-700 mb-4">
                  Estamos siempre buscando personas apasionadas por mejorar el sistema de pensiones en Chile.
                </p>
                <a
                  href="mailto:nico@pensionfi.com"
                  className="inline-flex items-center justify-center px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors"
                >
                  Escríbenos a: nico@pensionfi.com
                </a>
              </div>
            </section>

            {/* Que queremos */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Que queremos</h2>
              <p className="text-gray-700">
                Queremos democratizar el acceso a información previsional clara y transparente para todos los chilenos.
                Creemos que cada persona merece entender cómo funcionará su jubilación y tomar decisiones informadas
                sobre su futuro financiero.
              </p>
            </section>

            {/* Tiempo atrás nos dimos cuenta */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Tiempo atrás nos dimos cuenta</h2>
              <p className="text-gray-700">
                Tiempo atrás nos dimos cuenta que existe una gran brecha de información en el sistema previsional
                chileno. La mayoría de las personas no entienden cómo funciona su pensión, cuánto recibirán al jubilar,
                ni qué pueden hacer para mejorarla. Esta falta de transparencia y educación financiera nos motivó a
                crear MeJubilo.
              </p>
            </section>

            {/* En que creemos */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">En que creemos</h2>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Creemos en la transparencia y la educación como pilares fundamentales para mejorar el sistema de
                  pensiones en Chile. Nuestros valores incluyen:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>
                    <strong>Transparencia:</strong> Información clara y accesible sobre cómo funcionan las pensiones.
                  </li>
                  <li>
                    <strong>Educación:</strong> Empoderar a las personas con conocimiento para tomar mejores decisiones.
                  </li>
                  <li>
                    <strong>Innovación:</strong> Usar la tecnología para simplificar conceptos complejos.
                  </li>
                  <li>
                    <strong>Independencia:</strong> Ofrecer información objetiva sin conflictos de interés.
                  </li>
                </ul>
              </div>
            </section>

            {/* Cómo operamos */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Cómo operamos</h2>
              <p className="text-gray-700 mb-4">
                Operamos como una red distribuida de colaboradores apasionados por mejorar el sistema previsional.
                Nuestro enfoque se basa en:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg border">
                  <h3 className="font-semibold text-gray-800 mb-2">Investigación continua</h3>
                  <p className="text-gray-700">
                    Nos mantenemos actualizados sobre cambios en la legislación y mejores prácticas internacionales.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border">
                  <h3 className="font-semibold text-gray-800 mb-2">Desarrollo tecnológico</h3>
                  <p className="text-gray-700">
                    Creamos herramientas digitales que simplifican el acceso a información previsional.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border">
                  <h3 className="font-semibold text-gray-800 mb-2">Educación financiera</h3>
                  <p className="text-gray-700">
                    Generamos contenido educativo para ayudar a las personas a entender mejor sus opciones.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border">
                  <h3 className="font-semibold text-gray-800 mb-2">Colaboración abierta</h3>
                  <p className="text-gray-700">
                    Trabajamos con expertos, instituciones y usuarios para mejorar constantemente nuestras herramientas.
                  </p>
                </div>
              </div>
            </section>

            {/* Invest Button */}
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">¿Ya quieres jubilar?</h3>
              <p className="text-gray-700 mb-4">
                Descubre cuánto capital necesitarías para financiar tu jubilación ideal
              </p>
              <Link href="/invest">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3">Invest</Button>
              </Link>
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
