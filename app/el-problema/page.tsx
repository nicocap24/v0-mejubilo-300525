import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import UnifiedFooter from "@/components/unified-footer"

export default function ElProblemaPage() {
  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-2 text-gray-800">El Problema Previsional</h1>
          <div className="text-gray-600 mb-6">
            <p>Escrito por: Nicolás Arrieta</p>
            <p>Fecha: 21/05/25</p>
          </div>

          <div className="relative h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/portada-2-1024x360.jpg-2nTVumUaGJVedfb6CGdSBuRJnPxRXE.jpeg"
              alt="Protesta NO+AFP en Chile"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <p>
              El sistema de pensiones en Chile enfrenta desafíos significativos que afectan la calidad de vida de
              millones de chilenos durante su jubilación. A pesar de décadas de contribuciones, muchos jubilados reciben
              pensiones que no les permiten mantener un nivel de vida digno.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">Los principales problemas son:</h2>

            <ul className="space-y-4">
              <li>
                <strong>Bajas tasas de reemplazo:</strong> En promedio, los jubilados chilenos reciben pensiones que
                representan solo el 30-40% de su último salario, muy por debajo del 70% recomendado por organismos
                internacionales.
              </li>
              <li>
                <strong>Desigualdad de género:</strong> Las mujeres reciben pensiones significativamente menores debido
                a interrupciones en su vida laboral, menores salarios y una mayor expectativa de vida.
              </li>
              <li>
                <strong>Falta de competencia entre AFPs:</strong> El mercado concentrado de administradoras de fondos de
                pensiones ha resultado en altas comisiones y servicios que no siempre priorizan el beneficio del
                afiliado.
              </li>
              <li>
                <strong>Baja cobertura:</strong> Un gran porcentaje de trabajadores, especialmente independientes e
                informales, no contribuyen regularmente al sistema.
              </li>
              <li>
                <strong>Complejidad del sistema:</strong> Muchos chilenos no comprenden completamente cómo funciona el
                sistema de pensiones, lo que dificulta la toma de decisiones informadas sobre su futuro financiero.
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mb-6 text-gray-800">Nuestra Solución</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-gray-800">Transparencia y Educación</CardTitle>
                <CardDescription>Empoderamos a los chilenos con información clara</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  MeJubilo proporciona herramientas intuitivas que permiten a los usuarios entender su situación
                  previsional actual, compararse con otros en situaciones similares, y tomar decisiones informadas sobre
                  su futuro.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-gray-800">Análisis Personalizado</CardTitle>
                <CardDescription>Cada situación es única</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Nuestro sistema analiza la situación individual de cada usuario, considerando factores como edad,
                  historial laboral, y ahorros actuales para ofrecer recomendaciones personalizadas que maximicen su
                  pensión futura.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-gray-800">Comunidad y Comparación</CardTitle>
                <CardDescription>Aprendemos juntos</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  A través de nuestro sistema de ranking, los usuarios pueden ver cómo se comparan con otros chilenos en
                  situaciones similares, identificar áreas de mejora y aprender de las estrategias exitosas de otros.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-gray-800">Simulación de Escenarios</CardTitle>
                <CardDescription>Preparados para el futuro</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Nuestras herramientas de simulación permiten a los usuarios visualizar diferentes escenarios,
                  incluyendo cambios en la legislación, para estar mejor preparados ante cualquier reforma al sistema de
                  pensiones.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-green-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Nuestro Compromiso</h3>
            <p className="text-gray-700">
              En MeJubilo estamos comprometidos con mejorar el futuro previsional de todos los chilenos. Creemos que con
              las herramientas adecuadas, información clara y una comunidad de apoyo, podemos ayudar a cada persona a
              maximizar su pensión y asegurar un retiro digno.
            </p>
          </div>
        </div>
      </div>
      <UnifiedFooter
        ctaTitle="¿Listo para ser parte de la solución?"
        ctaDescription="Únete a MeJubilo y comienza a mejorar tu situación previsional hoy mismo."
        ctaButtonText="Registrarme ahora"
        ctaButtonLink="/register"
      />
    </>
  )
}
