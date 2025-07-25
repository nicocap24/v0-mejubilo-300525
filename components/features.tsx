import { Eye, BarChart3, Users, Shield, Zap, Target } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: Eye,
      title: "Transparencia Total",
      description:
        "Ve exactamente cuánto has aportado, rentado y pagado en comisiones a lo largo de tu historia laboral.",
      gradient: "from-emerald-400 to-emerald-600",
    },
    {
      icon: BarChart3,
      title: "Dashboard Personalizado",
      description:
        "Gráficos interactivos que muestran la evolución de tus ahorros previsionales de forma clara y visual.",
      gradient: "from-blue-400 to-blue-600",
    },
    {
      icon: Users,
      title: "Comparación Social",
      description: "Compara tu rendimiento con otros usuarios de forma anónima y descubre las mejores estrategias.",
      gradient: "from-purple-400 to-purple-600",
    },
    {
      icon: Shield,
      title: "100% Seguro",
      description: "Tus datos están protegidos con encriptación de nivel bancario. Privacidad y seguridad garantizada.",
      gradient: "from-orange-400 to-orange-600",
    },
    {
      icon: Zap,
      title: "Análisis Instantáneo",
      description: "Procesamos tu información previsional en segundos y te entregamos insights accionables.",
      gradient: "from-pink-400 to-pink-600",
    },
    {
      icon: Target,
      title: "Recomendaciones Personalizadas",
      description: "Recibe alertas y sugerencias para optimizar tu estrategia previsional y maximizar tu jubilación.",
      gradient: "from-indigo-400 to-indigo-600",
    },
  ]

  return (
    <section id="features" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              ¿CUÁL ES EL PROBLEMA
            </span>
            <br />
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              CON LAS PENSIONES?
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="group p-8 bg-gradient-to-br from-white to-gray-50 rounded-3xl border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-2xl hover:shadow-gray-200/50 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-2xl font-bold">3M+</span>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              <strong>+3.000.000 de afiliados</strong> al sistema AFP eligen voluntariamente estar en las 3 AFPs más
              caras.
            </p>
          </div>

          <div className="group p-8 bg-gradient-to-br from-white to-gray-50 rounded-3xl border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-2xl hover:shadow-gray-200/50 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-2xl font-bold">3M+</span>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              <strong>+3.000.000 no están</strong> en el fondo correcto según su edad.
            </p>
          </div>

          <div className="group p-8 bg-gradient-to-br from-white to-gray-50 rounded-3xl border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-2xl hover:shadow-gray-200/50 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-xl font-bold">$200K</span>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              Las <strong>pensiones promedio</strong> son de entorno a $200.000.
            </p>
          </div>

          <div className="group p-8 bg-gradient-to-br from-white to-gray-50 rounded-3xl border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-2xl hover:shadow-gray-200/50 hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-2xl">📚</span>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              <strong>No hay educación financiera</strong> y ni los políticos ni las AFP tienen incentivo a mejorarla.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
