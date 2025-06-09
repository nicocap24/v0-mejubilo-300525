import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PorqueMeJubiloPage() {
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
              <CardTitle className="text-center text-3xl font-bold text-gray-800">¿Por qué Me Jubilo?</CardTitle>
              <p className="text-center text-gray-600 mt-2">Publicado el 5 de junio, 2025</p>
            </CardHeader>
            <CardContent className="space-y-6 prose prose-lg max-w-none">
              <p>
                Me Jubilo nació de una simple pero poderosa observación: la mayoría de los chilenos no entienden cómo
                funciona su sistema de pensiones, ni tienen claridad sobre cuánto recibirán al jubilar.
              </p>

              <h2>El problema que identificamos</h2>
              <p>
                Durante años, hemos visto cómo la información sobre pensiones se presenta de manera compleja y poco
                accesible. Las personas se sienten abrumadas por términos técnicos, cálculos complicados y un sistema
                que parece diseñado para confundir en lugar de clarificar.
              </p>

              <p>
                Esta falta de transparencia y educación financiera tiene consecuencias reales: decisiones mal
                informadas, ansiedad sobre el futuro financiero y, en muchos casos, pensiones menores a las que podrían
                haberse obtenido con mejor información.
              </p>

              <h2>Nuestra misión</h2>
              <p>
                En Me Jubilo, nos propusimos democratizar el acceso a información previsional clara y transparente.
                Creemos firmemente que cada chileno merece entender cómo funcionará su jubilación y tomar decisiones
                informadas sobre su futuro financiero.
              </p>

              <p>
                No somos una AFP ni vendemos productos financieros. Somos un equipo de profesionales apasionados por
                hacer más transparente el sistema de pensiones, utilizando tecnología y comunicación clara para
                simplificar lo complejo.
              </p>

              <h2>Nuestro enfoque</h2>
              <p>A diferencia de otras plataformas, Me Jubilo se enfoca en tres pilares fundamentales:</p>

              <ul>
                <li>
                  <strong>Transparencia total:</strong> Explicamos claramente cómo funcionan nuestros cálculos y qué
                  supuestos utilizamos.
                </li>
                <li>
                  <strong>Lenguaje simple:</strong> Traducimos la jerga técnica a un lenguaje que todos puedan entender.
                </li>
                <li>
                  <strong>Visión integral:</strong> Consideramos todos los componentes de tu pensión futura, no solo el
                  saldo AFP.
                </li>
              </ul>

              <h2>El futuro de Me Jubilo</h2>
              <p>
                Estamos constantemente mejorando nuestra plataforma y ampliando nuestros servicios para ayudar a más
                chilenos a tomar el control de su futuro previsional. Creemos que la información clara y accesible es el
                primer paso hacia un sistema de pensiones más justo y efectivo para todos.
              </p>

              <div className="bg-orange-50 p-6 rounded-lg border border-orange-200 mt-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Únete a nuestra comunidad</h3>
                <p className="mb-4">
                  Sé parte del movimiento por la transparencia previsional. Evalúa tu pensión gratuitamente y recibe
                  información personalizada para mejorar tu futuro financiero.
                </p>
                <Link href="/evaluar">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white">Evalúa tu pensión ahora</Button>
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
