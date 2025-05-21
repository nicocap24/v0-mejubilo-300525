import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  LineChart,
  Users,
  HelpCircle,
  CreditCard,
  Check,
  X,
  FileText,
  TrendingUp,
  PiggyBank,
  DollarSign,
  Award,
  Smile,
} from "lucide-react"
import StatsCounter from "@/components/stats-counter"
import FaqAccordion from "@/components/faq-accordion"
import { Logo } from "@/components/logo"
import { Badge } from "@/components/ui/badge"

// Importamos el componente AnimatedButton como cliente
import dynamic from "next/dynamic"
const AnimatedButton = dynamic(() => import("@/components/animated-button"), { ssr: false })

export default function Home() {
  // Datos para las FAQs
  const faqItems = [
    {
      question: "¿Qué es Me Jubilo?",
      answer: `Me Jubilo es una solución simple y elegante al problema previsional.

      EL PROBLEMA DEL SISTEMA ES QUE ESTÁ CERRADO.

      No se entrega la información correcta, por lo que la gente no tiene cómo saber, verificar o comprobar si está haciendo lo correcto o no.

      Me Jubilo es una plataforma digital independiente, que busca entregar la información previsional que los afiliados necesitan.

      Es un approach de educación previsional dinámico e interactivo, que incentiva el aprendizaje a través de la sana competencia.

      TODOS LOS PARTICIPANTES DE ME JUBILO BUSCAN UN MISMO OBJETIVO: hacer crecer sus fondos previsionales para jubilar lo mejor posible.

      Buscamos ser la plataforma de información previsional #1 en Chile y en Latinoamérica.

      Y AYUDAR A MILLONES DE PERSONAS A MEJORAR SU PENSIÓN de manera clara y medible en el proceso.`,
    },
    {
      question: "¿Qué es MeJubilo y cómo funciona?",
      answer:
        "MeJubilo es una plataforma que te permite conectar tu cuenta AFP de forma segura, analizar tu situación previsional actual y recibir recomendaciones personalizadas para mejorar tu futura pensión. Procesamos automáticamente tus documentos, comparamos tu situación con otros usuarios similares y te ofrecemos herramientas para tomar mejores decisiones sobre tu jubilación.",
    },
    {
      question: "¿Es seguro conectar mi cuenta AFP a MeJubilo?",
      answer:
        "Sí, la seguridad es nuestra prioridad. Utilizamos encriptación de nivel bancario y no almacenamos tus contraseñas. Toda la información se transmite de forma segura y cumplimos con las normativas de protección de datos personales. Además, solo accedemos a la información necesaria para brindarte nuestros servicios y nunca compartimos tus datos con terceros sin tu consentimiento.",
    },
    {
      question: "¿Cómo me ayuda MeJubilo a mejorar mi pensión?",
      answer:
        "MeJubilo te ayuda de varias formas: 1) Analizamos tu situación actual y te mostramos proyecciones realistas de tu pensión futura, 2) Te comparamos con otros usuarios en situaciones similares para identificar oportunidades de mejora, 3) Te ofrecemos recomendaciones personalizadas sobre ahorro voluntario, cambios de fondo o AFP, y otras estrategias para optimizar tu pensión, 4) Te mantenemos informado sobre cambios en la legislación y cómo podrían afectarte.",
    },
    {
      question: "¿Cuánto cuesta usar MeJubilo?",
      answer:
        "Ofrecemos un plan básico gratuito que te permite conectar tu cuenta AFP y acceder a funcionalidades esenciales. También contamos con planes premium que incluyen características avanzadas como asesoría personalizada, simulaciones detalladas y herramientas adicionales. Puedes consultar todos nuestros planes y precios en la sección de membresías.",
    },
    {
      question: "¿Qué información necesito para registrarme?",
      answer:
        "Para registrarte solo necesitas proporcionar tu correo electrónico y crear una contraseña. Para aprovechar al máximo la plataforma, te recomendamos conectar tu cuenta AFP, para lo cual necesitarás tu RUT y la contraseña que utilizas para acceder al sitio web de tu AFP. Toda esta información se maneja con los más altos estándares de seguridad.",
    },
    {
      question: "¿Puedo cambiar de AFP a través de MeJubilo?",
      answer:
        "Actualmente no gestionamos directamente el cambio de AFP, pero te proporcionamos toda la información necesaria para tomar esta decisión y te guiamos paso a paso en el proceso. Comparamos comisiones, rentabilidades y servicios de las distintas AFPs para que puedas elegir la mejor opción según tu perfil y necesidades.",
    },
    {
      question: "¿Cómo se compara mi situación con la de otros usuarios?",
      answer:
        "Utilizamos datos anónimos y agregados para comparar tu situación con la de usuarios de características similares (edad, nivel de ingresos, años cotizando, etc.). Esto te permite ver cómo te encuentras respecto a tus pares y qué estrategias están utilizando aquellos con mejores resultados. Toda esta información se presenta de forma clara en nuestro leaderboard y en tu perfil personal.",
    },
  ]

  // Características de los planes
  const planFeatures = [
    {
      name: "Acceso a tu perfil previsional básico",
      gratis: true,
      pro: true,
      plus: true,
    },
    {
      name: "Conexión con tu cuenta AFP",
      gratis: true,
      pro: true,
      plus: true,
    },
    {
      name: "Visualización de saldo y movimientos",
      gratis: true,
      pro: true,
      plus: true,
    },
    {
      name: "Acceso al leaderboard general",
      gratis: true,
      pro: true,
      plus: true,
    },
    {
      name: "Perfil previsional detallado",
      gratis: false,
      pro: true,
      plus: true,
    },
    {
      name: "Acceso al leaderboard por categorías",
      gratis: false,
      pro: true,
      plus: true,
    },
    {
      name: "Alertas personalizadas",
      gratis: false,
      pro: false,
      plus: true,
    },
    {
      name: "Asesoría previsional trimestral",
      gratis: false,
      pro: false,
      plus: true,
    },
  ]

  // Ventajas de unirse a MeJubilo
  const advantages = [
    {
      icon: <FileText className="w-10 h-10 text-orange-500" />,
      title: "Obtén tu información real",
      description: "Accede a todos tus datos previsionales de forma clara y transparente.",
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-orange-500" />,
      title: "Descubre estrategias eficaces",
      description: "Conoce las mejores estrategias de cambio de fondos basadas en datos reales.",
    },
    {
      icon: <PiggyBank className="w-10 h-10 text-orange-500" />,
      title: "Haz crecer tus ahorros",
      description: "Maximiza el rendimiento de tus fondos con decisiones informadas.",
    },
    {
      icon: <DollarSign className="w-10 h-10 text-orange-500" />,
      title: "Paga menos comisión",
      description: "Identifica las AFPs con menores comisiones según tu perfil.",
    },
    {
      icon: <Award className="w-10 h-10 text-orange-500" />,
      title: "Mejora tu pensión",
      description: "Aumenta el monto de tu pensión futura con nuestras recomendaciones.",
    },
    {
      icon: <Smile className="w-10 h-10 text-orange-500" />,
      title: "Jubila feliz",
      description: "Prepárate para una jubilación tranquila y sin preocupaciones financieras.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/pension-performance-bg.png"
            alt="Rendimiento de fondos de pensiones"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 relative">
              Toma control de tus ahorros
              <span className="absolute bottom-0 left-0 w-full h-1 bg-white"></span>
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <div className="w-full sm:w-auto">
                <Button asChild size="lg" className="w-full bg-orange-500 text-white hover:bg-orange-600">
                  <Link href="/register">DESCUBRE CÓMO</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Cómo funciona</h2>
          <p className="text-center text-gray-600 mb-12">3 simples pasos</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-sky-50 rounded-lg">
              <div className="w-12 h-12 bg-sky-500 text-white rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Conecta tu AFP</h3>
              <p className="text-gray-600">Con esto podemos obtener tu información real.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-sky-50 rounded-lg">
              <div className="w-12 h-12 bg-sky-500 text-white rounded-full flex items-center justify-center mb-4">
                <CreditCard className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Suscribete a un plan</h3>
              <p className="text-gray-600">Tenemos planes individuales o grupales.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-sky-50 rounded-lg">
              <div className="w-12 h-12 bg-sky-500 text-white rounded-full flex items-center justify-center mb-4">
                <LineChart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Jubila feliz</h3>
              <p className="text-gray-600">Descubre tu situación previsional y comparala con otros.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-orange-50">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">¿Por qué unirte a MeJubilo?</h2>
          <p className="text-center text-gray-600 mb-12">Descubre todas las ventajas que tenemos para ti</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center"
              >
                <div className="mb-4">{advantage.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-orange-500 text-white hover:bg-orange-600">
              <Link href="/register">Comenzar ahora</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Nuestros Planes</h2>
          <p className="text-center text-gray-600 mb-12">Elige el plan que mejor se adapte a tus necesidades</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Plan Gratis */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 flex flex-col">
              <div className="p-6 bg-gray-50 border-b border-gray-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Gratis</h3>
                <p className="text-gray-600 mb-4">Funcionalidades básicas para comenzar</p>
                <div className="text-3xl font-bold text-gray-800">
                  $0 <span className="text-base font-normal text-gray-600">/ mes</span>
                </div>
              </div>
              <div className="p-6 flex-grow">
                <ul className="space-y-3">
                  {planFeatures.slice(0, 5).map((feature, index) => (
                    <li key={index} className="flex items-start">
                      {feature.gratis ? (
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      ) : (
                        <X className="h-5 w-5 text-gray-300 mr-2 shrink-0 mt-0.5" />
                      )}
                      <span className={feature.gratis ? "text-gray-700" : "text-gray-400"}>{feature.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 border-t border-gray-200">
                <Button asChild className="w-full bg-gray-500 hover:bg-gray-600 text-white">
                  <Link href="/register">Registrarse</Link>
                </Button>
              </div>
            </div>

            {/* Plan Pro */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden border-2 border-orange-500 flex flex-col relative">
              <div className="absolute top-0 right-0 mt-4 mr-4">
                <Badge className="bg-orange-500 text-white">Popular</Badge>
              </div>
              <div className="p-6 bg-orange-50 border-b border-orange-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Pro</h3>
                <p className="text-gray-600 mb-4">Funcionalidades avanzadas para optimizar</p>
                <div className="flex items-center">
                  <div className="text-3xl font-bold text-gray-800">
                    $5.000 <span className="text-base font-normal text-gray-600">/ mes</span>
                  </div>
                  <div className="ml-2 text-sm bg-green-100 text-green-800 px-2 py-1 rounded">50% descuento</div>
                </div>
                <p className="text-xs text-gray-500 mt-2">*Precio especial para los primeros 100 usuarios</p>
                <p className="text-xs text-gray-500">Precio regular: $10.000/mes</p>
              </div>
              <div className="p-6 flex-grow">
                <ul className="space-y-3">
                  {planFeatures.slice(0, 6).map((feature, index) => (
                    <li key={index} className="flex items-start">
                      {feature.pro ? (
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      ) : (
                        <X className="h-5 w-5 text-gray-300 mr-2 shrink-0 mt-0.5" />
                      )}
                      <span className={feature.pro ? "text-gray-700" : "text-gray-400"}>{feature.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 border-t border-orange-200">
                <Button asChild className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                  <Link href="/register?plan=pro">Elegir Plan Pro</Link>
                </Button>
              </div>
            </div>

            {/* Plan Plus */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 flex flex-col">
              <div className="p-6 bg-sky-50 border-b border-sky-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Plus</h3>
                <p className="text-gray-600 mb-4">Experiencia premium con asesoría</p>
                <div className="text-3xl font-bold text-gray-800">
                  $15.000 <span className="text-base font-normal text-gray-600">/ mes</span>
                </div>
              </div>
              <div className="p-6 flex-grow">
                <ul className="space-y-3">
                  {planFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      {feature.plus ? (
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                      ) : (
                        <X className="h-5 w-5 text-gray-300 mr-2 shrink-0 mt-0.5" />
                      )}
                      <span className={feature.plus ? "text-gray-700" : "text-gray-400"}>{feature.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 border-t border-gray-200">
                <Button asChild className="w-full bg-sky-500 hover:bg-sky-600 text-white">
                  <Link href="/register?plan=plus">Elegir Plan Plus</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button asChild variant="outline" className="text-orange-500 border-orange-500 hover:bg-orange-50">
              <Link href="/precios">Ver todos los detalles de precios</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-green-50">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Nuestro impacto</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatsCounter
              title="Fondos administrados"
              value={125000000000}
              prefix="$"
              suffix=" CLP"
              formatter={(value) => `${(value / 1000000000).toFixed(0)} mil millones`}
              className="bg-white"
              valueClassName="text-orange-500"
            />
            <StatsCounter
              title="Comisiones ahorradas"
              value={750000000}
              prefix="$"
              suffix=" CLP"
              formatter={(value) => `${(value / 1000000).toFixed(1)} millones`}
              className="bg-white"
              valueClassName="text-orange-500"
            />
            <StatsCounter
              title="Mejora promedio en pensiones"
              value={15.7}
              suffix="%"
              className="bg-white"
              valueClassName="text-orange-500"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Lo que dicen nuestros usuarios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-sky-50 p-6 rounded-lg shadow-sm">
              <p className="italic mb-4 text-gray-600">
                "Gracias a esta plataforma pude entender mi situación previsional y tomar mejores decisiones para mi
                futuro."
              </p>
              <p className="font-bold text-gray-800">María González, 42 años</p>
            </div>
            <div className="bg-sky-50 p-6 rounded-lg shadow-sm">
              <p className="italic mb-4 text-gray-600">
                "Nunca había entendido bien cómo funcionaba mi AFP. Ahora tengo claridad y he mejorado mi ahorro
                previsional."
              </p>
              <p className="font-bold text-gray-800">Carlos Rodríguez, 35 años</p>
            </div>
            <div className="bg-sky-50 p-6 rounded-lg shadow-sm">
              <p className="italic mb-4 text-gray-600">
                "El comparador con otros usuarios me motivó a mejorar mi situación. He aumentado mi ahorro voluntario un
                20%."
              </p>
              <p className="font-bold text-gray-800">Ana Martínez, 29 años</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center mb-12">
            <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mb-4">
              <HelpCircle className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-center text-gray-800">Preguntas Frecuentes</h2>
            <p className="text-center text-gray-600 mt-4 max-w-2xl">
              Resolvemos tus dudas sobre cómo MeJubilo puede ayudarte a mejorar tu situación previsional
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <FaqAccordion items={faqItems} />
          </div>

          <div className="text-center mt-10">
            <p className="text-gray-600 mb-4">¿No encuentras respuesta a tu pregunta?</p>
            <Button asChild variant="outline" className="text-orange-500 border-orange-500 hover:bg-orange-50">
              <Link href="/contacto">Contáctanos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sección CTA y Footer unificados */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/pension-performance-bg.png"
            alt="Rendimiento de fondos de pensiones"
            fill
            className="object-cover"
          />
        </div>

        {/* Contenido CTA */}
        <div className="relative z-10 pt-16 pb-8 text-center">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">¿Listo para hacer crecer tus fondos?</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Únete a miles de chilenos que ya están mejorando su futuro previsional con nuestra plataforma.
            </p>
            <Button asChild size="lg" className="bg-orange-500 text-white hover:bg-orange-600">
              <Link href="/register">Comenzar ahora</Link>
            </Button>
          </div>
        </div>

        {/* Footer integrado en la misma sección */}
        <div className="relative z-10 border-t border-gray-200 bg-white bg-opacity-80">
          <div className="container px-4 md:px-6 mx-auto py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <Logo />
                <p className="mt-4 text-gray-600">
                  Ayudamos a los chilenos a optimizar sus pensiones y prepararse mejor para el futuro.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-gray-800">Enlaces rápidos</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/" className="text-gray-600 hover:text-orange-500">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/el-problema" className="text-gray-600 hover:text-orange-500">
                      El Problema
                    </Link>
                  </li>
                  <li>
                    <Link href="/herramientas" className="text-gray-600 hover:text-orange-500">
                      Herramientas
                    </Link>
                  </li>
                  <li>
                    <Link href="/leaderboard" className="text-gray-600 hover:text-orange-500">
                      Leaderboard
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-gray-800">Legal</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/terms" className="text-gray-600 hover:text-orange-500">
                      Términos de uso
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" className="text-gray-600 hover:text-orange-500">
                      Política de privacidad
                    </Link>
                  </li>
                  <li>
                    <Link href="/security" className="text-gray-600 hover:text-orange-500">
                      Seguridad
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-gray-800">Contacto</h4>
                <ul className="space-y-2">
                  <li className="text-gray-600">contacto@mejubilo.cl</li>
                  <li className="text-gray-600">+56 2 2123 4567</li>
                  <li className="text-gray-600">Santiago, Chile</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
              <p>© {new Date().getFullYear()} MeJubilo. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
