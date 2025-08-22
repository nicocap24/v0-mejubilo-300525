import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function PoliticaPrivacidadPage() {
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
            <CardTitle className="text-center text-3xl font-bold text-gray-800">Política de Privacidad</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Información que Recopilamos */}
            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-4">Información que Recopilamos</h2>
              <p className="text-gray-700 mb-4">
                En MeJubilo.com, recopilamos información que usted nos proporciona directamente, incluyendo:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Información de contacto (correo electrónico)</li>
                <li>Información de su cuenta de AFP</li>
                <li>Datos demográficos básicos</li>
              </ul>
            </section>

            {/* Uso de Cookies */}
            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-4">Uso de Cookies</h2>
              <p className="text-gray-700 mb-4">Utilizamos cookies y tecnologías similares para:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Mejorar su experiencia de navegación</li>
                <li>Analizar el uso del sitio</li>
                <li>Personalizar el contenido y anuncios</li>
              </ul>
            </section>

            {/* Google AdSense */}
            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-4">Google AdSense</h2>
              <p className="text-gray-700">
                Utilizamos Google AdSense para mostrar anuncios. Google AdSense utiliza cookies para mostrar anuncios
                basados en sus visitas anteriores a este y otros sitios web. Puede optar por no recibir anuncios
                personalizados visitando la página de Configuración de anuncios de Google.
              </p>
            </section>

            {/* Protección de Datos */}
            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-4">Protección de Datos</h2>
              <p className="text-gray-700">
                Implementamos medidas de seguridad técnicas y organizativas para proteger sus datos personales contra el
                acceso no autorizado, la pérdida o la alteración.
              </p>
            </section>

            {/* Sus Derechos */}
            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-4">Sus Derechos</h2>
              <p className="text-gray-700 mb-4">Usted tiene derecho a:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Acceder a sus datos personales</li>
                <li>Rectificar información inexacta</li>
                <li>Solicitar la eliminación de sus datos</li>
                <li>Oponerse al procesamiento de sus datos</li>
              </ul>
            </section>

            {/* Contacto */}
            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-4">Contacto</h2>
              <p className="text-gray-700 mb-4">
                Para cualquier consulta sobre nuestra política de privacidad, puede contactarnos a través de:
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
