import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Phone, Mail } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CharlasPrevisionales() {
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
              <CardTitle className="text-center text-3xl font-bold text-gray-800">Charlas Previsionales</CardTitle>
              <p className="text-center text-gray-600 mt-2">
                Educación financiera clara y práctica para tu empresa u organización
              </p>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Main description */}
              <section>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Capacita a tus colaboradores para que estén informados sobre lo que tienen que saber en cuanto a su
                  futura jubilación y el impacto de la reforma en la misma.
                </p>
              </section>

              {/* Beneficios */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Beneficios de contratar una charla con nosotros:
                </h2>
                <ul className="space-y-3 text-lg text-gray-700">
                  <li>• Reduce el estrés financiero en tus colaboradores</li>
                  <li>• Aumenta su bienestar y productividad en el trabajo</li>
                  <li>• Aumenta la retención de tus empleados</li>
                  <li>• Mejora el clima laboral</li>
                </ul>
              </section>

              {/* Modalidades */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Modalidades:</h2>
                <p className="text-lg text-gray-700">Puede ser presencial o virtual, a convenir.</p>
              </section>

              {/* Agenda */}
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">¡Agenda!</h2>
                <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="https://wa.me/56923935961"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                      <Phone className="w-5 h-5" />
                      WhatsApp: +56 9 2393 5961
                    </a>
                    <a
                      href="mailto:nico@pensionfi.com"
                      className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                      nico@pensionfi.com
                    </a>
                  </div>
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

      <Footer />
    </div>
  )
}
