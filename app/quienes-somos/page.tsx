import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Laptop, Users, Lightbulb, BookOpen, Twitter, Linkedin, Mail } from "lucide-react"
import UnifiedFooter from "@/components/unified-footer"

export const metadata = {
  title: "Quienes Somos | MeJubilo",
  description: "Conoce al equipo detrás de MeJubilo y nuestra misión de mejorar las pensiones en Chile",
}

export default function QuienesSomosPage() {
  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Quienes Somos</h1>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Somos un equipo apasionado por mejorar el futuro previsional de los chilenos a través de la tecnología y la
            educación financiera.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="bg-white overflow-hidden border-t-4 border-t-orange-500">
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <Laptop className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Innovación Tecnológica</h3>
                    <p className="text-gray-600">
                      Somos una empresa dedicada a diseñar, desarrollar y distribuir soluciones previsionales
                      innovadoras que facilitan la toma de decisiones financieras.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white overflow-hidden border-t-4 border-t-orange-500">
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <Users className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Equipo Comprometido</h3>
                    <p className="text-gray-600">
                      Somos un equipo pequeño, remoto, 100% comprometidos con entregar las mejores herramientas y
                      productos para hacer del sistema previsional chileno un sistema mejor.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white overflow-hidden border-t-4 border-t-orange-500">
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <Lightbulb className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Creatividad y Agilidad</h3>
                    <p className="text-gray-600">
                      Somos rápidos, somos creativos. Pensamos fuera de la caja para encontrar soluciones que realmente
                      impacten en la calidad de vida de los futuros jubilados.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white overflow-hidden border-t-4 border-t-orange-500">
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <BookOpen className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Expertise Previsional</h3>
                    <p className="text-gray-600">
                      Estudiamos a fondo, somos expertos en lo que hacemos. Y nos apasiona el tema previsional y su
                      impacto en la vida de millones de chilenos.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Nuestro Equipo</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4">
                  <Image src="/nicolas-arrieta.png" alt="Nicolás Arrieta" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Nicolás Arrieta</h3>
                <p className="text-gray-600 mb-2">CEO & Fundador</p>
                <div className="flex space-x-2">
                  <Link
                    href="https://x.com/nicocapital"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-orange-500"
                  >
                    <Twitter className="h-5 w-5" />
                  </Link>
                  <Link href="https://linkedin.com" className="text-gray-400 hover:text-orange-500">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4">
                  <Image src="/professional-woman-diverse.png" alt="Ana Martínez" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Ana Martínez</h3>
                <p className="text-gray-600 mb-2">CTO</p>
                <div className="flex space-x-2">
                  <Link href="https://twitter.com" className="text-gray-400 hover:text-orange-500">
                    <Twitter className="h-5 w-5" />
                  </Link>
                  <Link href="https://linkedin.com" className="text-gray-400 hover:text-orange-500">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4">
                  <Image src="/financial-expert.png" alt="Felipe Rojas" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Felipe Rojas</h3>
                <p className="text-gray-600 mb-2">Experto en Pensiones</p>
                <div className="flex space-x-2">
                  <Link href="https://twitter.com" className="text-gray-400 hover:text-orange-500">
                    <Twitter className="h-5 w-5" />
                  </Link>
                  <Link href="https://linkedin.com" className="text-gray-400 hover:text-orange-500">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Nuestra Misión</h2>
            <p className="text-2xl text-center font-light text-gray-700 mb-8">
              Mejorar la pensión de 1 millón de chilenos.
            </p>
            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
              Creemos que con las herramientas adecuadas, información clara y una comunidad de apoyo, podemos ayudar a
              cada persona a maximizar su pensión y asegurar un retiro digno.
            </p>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">¿Te gustaría trabajar con nosotros?</h2>
            <p className="text-gray-600 mb-6">
              Estamos siempre en búsqueda de talentos apasionados por mejorar el sistema previsional chileno.
            </p>
            <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white">
              <Link href="/contacto">
                <Mail className="mr-2 h-4 w-4" />
                Escríbenos
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <UnifiedFooter
        ctaTitle="¿Quieres conocer más sobre nosotros?"
        ctaDescription="Descubre cómo estamos transformando el futuro previsional de Chile."
        ctaButtonText="Contáctanos"
        ctaButtonLink="/contacto"
      />
    </>
  )
}
