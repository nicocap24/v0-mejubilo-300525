import { Lightbulb, Target, TrendingUp } from "lucide-react"

export function Solution() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              ¿CUÁL ES NUESTRA SOLUCIÓN
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">
              Y EN QUE CONSISTE?
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center p-8 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-3xl border border-emerald-200/50">
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-emerald-200/50">
              <Lightbulb className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Transparencia Total</h3>
            <p className="text-gray-700 leading-relaxed">
              Te mostramos exactamente cuánto has aportado, rentado y pagado en comisiones a lo largo de tu historia
              laboral.
            </p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl border border-blue-200/50">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-blue-200/50">
              <Target className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Información Independiente</h3>
            <p className="text-gray-700 leading-relaxed">
              Análisis 100% independiente sin conflictos de interés. Solo nos importa tu bienestar financiero.
            </p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl border border-purple-200/50">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-purple-200/50">
              <TrendingUp className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Optimización Personalizada</h3>
            <p className="text-gray-700 leading-relaxed">
              Recomendaciones específicas para maximizar tu pensión y minimizar las comisiones que pagas.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
