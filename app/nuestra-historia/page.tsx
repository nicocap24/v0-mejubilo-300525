import Image from "next/image"
import Timeline, { type TimelineEvent } from "@/components/timeline"
import UnifiedFooter from "@/components/unified-footer"
import Link from "next/link"

export const metadata = {
  title: "Nuestra Historia | MeJubilo",
  description: "Conoce la historia de MeJubilo y cómo nació nuestra misión de mejorar las pensiones en Chile",
}

export default function NuestraHistoriaPage() {
  const timelineEvents: TimelineEvent[] = [
    {
      year: "2018",
      title: "El nacimiento de una idea",
      description:
        "Todo comenzó cuando nuestro fundador, Carlos Rodríguez, trabajaba como analista financiero y observaba cómo muchos chilenos llegaban a la jubilación sin una pensión digna. Durante las protestas por un mejor sistema de pensiones, Carlos comenzó a investigar a fondo el sistema previsional chileno y a buscar soluciones tecnológicas para este problema.",
    },
    {
      year: "2019",
      title: "Primeros pasos",
      description:
        "Carlos se unió con Ana Martínez, experta en desarrollo de software, y juntos comenzaron a diseñar las primeras versiones de lo que sería MeJubilo. Crearon prototipos de herramientas para ayudar a las personas a entender mejor su situación previsional y tomar decisiones más informadas.",
    },
    {
      year: "2020",
      title: "Fundación oficial",
      description:
        "En medio de la pandemia, MeJubilo se constituyó oficialmente como empresa. A pesar de las dificultades del momento, el equipo vio una oportunidad para digitalizar procesos que tradicionalmente requerían presencialidad. Lanzamos nuestra primera versión beta con herramientas básicas de cálculo previsional.",
    },
    {
      year: "2021",
      title: "Crecimiento del equipo",
      description:
        "Felipe Rojas, experto en pensiones con años de experiencia en el sector, se unió al equipo para aportar su conocimiento especializado. Con su incorporación, pudimos mejorar significativamente la precisión de nuestras herramientas y ofrecer recomendaciones más personalizadas a nuestros usuarios.",
    },
    {
      year: "2022",
      title: "Lanzamiento oficial",
      description:
        "Tras meses de desarrollo y pruebas con usuarios, lanzamos oficialmente la plataforma MeJubilo al público. La respuesta fue extraordinaria: en los primeros tres meses, más de 5,000 chilenos se registraron para utilizar nuestras herramientas y comenzar a mejorar su situación previsional.",
    },
    {
      year: "2023",
      title: "Innovación y reconocimiento",
      description:
        "Implementamos el sistema de leaderboard y comparativas entre usuarios, una característica única que motivó a muchos a mejorar activamente su situación previsional. Este enfoque innovador nos valió el reconocimiento como una de las startups fintech más prometedoras de Latinoamérica.",
    },
    {
      year: "2024",
      title: "Expansión y nuevos horizontes",
      description:
        "Hoy, MeJubilo continúa creciendo. Hemos ampliado nuestras oficinas, duplicado el equipo y estamos desarrollando nuevas funcionalidades que revolucionarán la forma en que los chilenos planifican su jubilación. Nuestro objetivo de mejorar la pensión de 1 millón de chilenos está cada día más cerca.",
    },
  ]

  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Nuestra Historia</h1>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            El camino que nos ha llevado a transformar el futuro previsional de Chile
          </p>

          <div className="relative h-64 md:h-96 mb-12 rounded-lg overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20Pantalla%202025-05-21%20a%20la%28s%29%2017.10.36-0lV2XO3zyktHUe7OZue6wrRWKjkdzO.png"
              alt="Representación histórica - MeJubilo"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
              <p className="text-white text-2xl md:text-3xl font-bold px-4 text-center shadow-sm">
                Una historia de pasión y compromiso
              </p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <p>
              La idea detrás de la creación de MeJubilo se remonta al año 2018, en medio de un período de intenso debate
              nacional sobre el sistema de pensiones en Chile.
            </p>

            <p>
              Carlos Rodríguez, nuestro fundador, trabajaba como analista financiero en una importante institución
              bancaria. Día tras día, veía cómo muchos chilenos llegaban a la edad de jubilación solo para descubrir que
              sus pensiones no les permitirían mantener una calidad de vida digna.
            </p>

            <p>
              Fue durante las masivas marchas del movimiento por mejores pensiones cuando Carlos comenzó a interesarse
              profundamente por el tema. Recuerda haber visto un cartel que decía: "Trabajé toda mi vida para jubilarme
              pobre". Esa frase lo impactó profundamente y despertó en él la inquietud por buscar soluciones.
            </p>

            <blockquote className="italic border-l-4 border-orange-500 pl-4 my-6">
              "Vi a mi propio padre jubilarse después de 40 años de trabajo y recibir una pensión que apenas cubría sus
              necesidades básicas. Me prometí que haría algo para cambiar esta realidad para millones de chilenos."
              <footer className="text-right">— Carlos Rodríguez, Fundador de MeJubilo</footer>
            </blockquote>

            <p>
              Carlos comenzó a investigar exhaustivamente el sistema previsional chileno, desde sus fundamentos hasta
              sus complejidades técnicas. Pronto se dio cuenta de que uno de los principales problemas era la falta de
              información clara y accesible para los cotizantes.
            </p>

            <p>
              Con esta visión, Carlos se asoció con Ana Martínez, una brillante desarrolladora de software que compartía
              su preocupación por el futuro previsional de Chile. Juntos, comenzaron a diseñar las primeras versiones de
              lo que sería MeJubilo: una plataforma que permitiría a cualquier chileno entender su situación previsional
              y tomar decisiones informadas para mejorarla.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Nuestra línea de tiempo</h2>
            <Timeline events={timelineEvents} />
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <h2>El futuro de MeJubilo</h2>
            <p>
              Hoy, MeJubilo se ha convertido en mucho más que una simple herramienta de cálculo. Somos una comunidad de
              chilenos comprometidos con mejorar el futuro previsional del país, un equipo de expertos dedicados a
              desarrollar soluciones innovadoras, y una plataforma que empodera a las personas para tomar el control de
              su jubilación.
            </p>

            <p>
              Nuestra misión de mejorar la pensión de 1 millón de chilenos sigue siendo el norte que guía cada decisión
              que tomamos. Con cada nueva funcionalidad, con cada nuevo usuario que se registra, estamos un paso más
              cerca de cumplir ese objetivo.
            </p>

            <p>
              El camino no ha sido fácil, pero la satisfacción de ver cómo nuestros usuarios mejoran su situación
              previsional gracias a MeJubilo hace que cada desafío haya valido la pena. Y esto es solo el comienzo.
            </p>

            <p>
              Gracias por ser parte de nuestra historia. Juntos, estamos construyendo un futuro donde la jubilación no
              sea una preocupación, sino una etapa de vida para disfrutar con tranquilidad y dignidad.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Cosas que hemos creado</h2>
            <div className="space-y-6">
              <div className="bg-orange-50 rounded-lg p-6 shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
                      1
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      Sistema de AFP decentralizado (Lens Hackathon 2024)
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Básicamente es una plataforma que permite a cualquier persona conectar su wallet y deployar su
                      AFP, como creador eres libre de elegir donde se invierten los fondos y la comisión que cobras.
                    </p>
                    <Link
                      href="https://lens-hedge-fund.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
                    >
                      Visitar proyecto
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 rounded-lg p-6 shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
                      2
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      Sistema decentralizado de rentas vitalicias (Base Hackaton Mayo 2025)
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Este producto te permite elegir la pensión que quieres obtener, la duración por la que la quieres
                      recibir y te permite depositar los fondos necesarios para financiar esa pensión. Nosotros nos
                      encargamos de administrar ese capital para asegurarte una pensión fija en USD.
                    </p>
                    <button
                      className="inline-flex items-center px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors cursor-not-allowed opacity-75"
                      disabled
                    >
                      Próximamente
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <UnifiedFooter
        ctaTitle="¿Quieres ser parte de nuestra historia?"
        ctaDescription="Únete a MeJubilo y comienza a escribir tu propio capítulo de éxito previsional."
        ctaButtonText="Comenzar ahora"
        ctaButtonLink="/register"
      />
    </>
  )
}
