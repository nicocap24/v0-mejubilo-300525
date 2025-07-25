import { AlertTriangle, Eye, DollarSign } from "lucide-react"

export function Problem() {
  return (
    <section className="py-20 px-6 bg-white/90">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">¿Sabes realmente qué pasa con tu dinero?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La mayoría de los chilenos no tiene acceso fácil a información crucial sobre sus ahorros previsionales
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-red-50 rounded-2xl border border-red-100">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Eye className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Falta de Transparencia</h3>
            <p className="text-gray-600">
              No sabes exactamente cuánto has aportado vs. cuánto has rentado en tu historia laboral
            </p>
          </div>

          <div className="text-center p-8 bg-orange-50 rounded-2xl border border-orange-100">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <DollarSign className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Comisiones Ocultas</h3>
            <p className="text-gray-600">
              No tienes claridad sobre cuánto has pagado en comisiones a lo largo de los años
            </p>
          </div>

          <div className="text-center p-8 bg-blue-50 rounded-2xl border border-blue-100">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Decisiones a Ciegas</h3>
            <p className="text-gray-600">
              Eliges AFP y fondos sin poder comparar el rendimiento real con otros usuarios
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
