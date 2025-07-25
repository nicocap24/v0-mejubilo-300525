import { Upload, BarChart3, Users, ArrowRight } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: Upload,
      title: "Te suscribes",
      description: "Eliges el plan que más te convenga y te suscribes a nuestra plataforma en segundos.",
      gradient: "from-emerald-400 to-emerald-600",
    },
    {
      number: "02",
      icon: BarChart3,
      title: "Conectas tu AFP",
      description: "Conectas de forma segura tu AFP para que podamos acceder a tu información previsional.",
      gradient: "from-blue-400 to-blue-600",
    },
    {
      number: "03",
      icon: Users,
      title: "Voilá, te diremos exactamente cuánto has...",
      description: "Aportado, rentado y pagado en comisiones. Toda tu información clara y transparente.",
      gradient: "from-purple-400 to-purple-600",
    },
  ]

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-100 to-blue-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span>Proceso</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">¿CÓMO</span>
            <br />
            <span className="bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">
              FUNCIONA?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Es así de fácil</p>
        </div>

        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-emerald-200 via-blue-200 to-purple-200 transform -translate-y-1/2"></div>

          <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center group">
                  {/* Step Number */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl border-4 border-gray-100 mb-8 relative z-10 group-hover:border-gray-200 transition-colors">
                    <span className="text-2xl font-bold text-gray-400">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${step.gradient} rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-2xl shadow-gray-200/50`}
                  >
                    <step.icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">{step.description}</p>
                </div>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-8">
                    <ArrowRight className="w-6 h-6 text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
