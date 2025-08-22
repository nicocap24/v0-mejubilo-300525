import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function TerminosCondicionesPage() {
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
            <CardTitle className="text-center text-3xl font-bold text-gray-800">Términos y Condiciones</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Aceptación de los Términos */}
            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-4">Aceptación de los Términos</h2>
              <p className="text-gray-700">
                Al acceder y utilizar MeJubilo.com, usted acepta estar sujeto a estos términos y condiciones. Si no está
                de acuerdo con alguna parte de estos términos, no podrá acceder al sitio.
              </p>
            </section>

            {/* Uso del Servicio */}
            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-4">Uso del Servicio</h2>
              <p className="text-gray-700 mb-4">
                MeJubilo.com proporciona información y herramientas educativas sobre el sistema previsional chileno.
                Usted acepta:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Proporcionar información precisa y veraz</li>
                <li>No utilizar el servicio para fines ilegales</li>
                <li>No intentar acceder a áreas restringidas del sitio</li>
                <li>No interferir con el funcionamiento del sitio</li>
              </ul>
            </section>

            {/* Propiedad Intelectual */}
            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-4">Propiedad Intelectual</h2>
              <p className="text-gray-700">
                Todo el contenido de MeJubilo.com, incluyendo textos, gráficos, logos y software, está protegido por
                derechos de autor y otras leyes de propiedad intelectual.
              </p>
            </section>

            {/* Limitación de Responsabilidad */}
            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-4">Limitación de Responsabilidad</h2>
              <p className="text-gray-700 mb-4">
                La información proporcionada en MeJubilo.com es solo con fines educativos y no constituye asesoría
                financiera profesional. No nos hacemos responsables por:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Decisiones financieras basadas en la información del sitio</li>
                <li>Pérdidas o daños resultantes del uso del sitio</li>
                <li>Interrupciones en el servicio</li>
              </ul>
            </section>

            {/* Publicidad */}
            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-4">Publicidad</h2>
              <p className="text-gray-700">
                MeJubilo.com utiliza Google AdSense para mostrar anuncios. Los anuncios mostrados son responsabilidad de
                los anunciantes y no representan necesariamente nuestras opiniones o recomendaciones.
              </p>
            </section>

            {/* Modificaciones */}
            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-4">Modificaciones</h2>
              <p className="text-gray-700">
                Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones entrarán
                en vigor inmediatamente después de su publicación en el sitio.
              </p>
            </section>

            {/* Contacto */}
            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-4">Contacto</h2>
              <p className="text-gray-700 mb-4">
                Para cualquier consulta sobre estos términos y condiciones, puede contactarnos a través de:
              </p>
              <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                <p className="text-gray-700">
                  <strong>Email:</strong>{" "}
                  <a href="mailto:nico@pensionfi.com" className="text-orange-600 hover:text-orange-700 font-semibold">
                    nico@pensionfi.com
                  </a>
                </p>
              </div>
            </section>

            {/* Última actualización */}
            <section>
              <div className="bg-gray-50 p-4 rounded-lg border">
                <p className="text-gray-600 text-sm">
                  <strong>Última actualización:</strong> 29/5/2025
                </p>
              </div>
            </section>

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
