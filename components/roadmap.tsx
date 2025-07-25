import { Target, TrendingUp, Zap } from "lucide-react"

export function Roadmap() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">ROADMAP</span>
          </h2>
          <p className="text-2xl font-semibold text-gray-800 mb-6">Nuestra visión a futuro</p>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Los problemas que vimos en la industria años atrás siguen más vigentes que nunca. El descontento hacia el
            sistema no se ha ido y diversas encuestas demuestran que la mayoría de la población no confía del sistema de
            pensiones tradicional.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-white rounded-3xl border border-purple-200/50 shadow-lg">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-purple-200/50">
              <Target className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Alternativas Innovadoras</h3>
            <p className="text-gray-700 leading-relaxed">
              Creación de distintas alternativas que se van haciendo cada vez más necesarias para un sistema que
              necesita renovación.
            </p>
          </div>

          <div className="text-center p-8 bg-white rounded-3xl border border-pink-200/50 shadow-lg">
            <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-pink-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-pink-200/50">
              <TrendingUp className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Expansión de Servicios</h3>
            <p className="text-gray-700 leading-relaxed">
              Desarrollo de nuevas herramientas y servicios que respondan a las necesidades reales de los afiliados al
              sistema.
            </p>
          </div>

          <div className="text-center p-8 bg-white rounded-3xl border border-indigo-200/50 shadow-lg">
            <div className="w-20 h-20 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-indigo-200/50">
              <Zap className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Tecnología de Vanguardia</h3>
            <p className="text-gray-700 leading-relaxed">
              Implementación de tecnologías emergentes como blockchain para crear soluciones más transparentes y
              eficientes.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-8 rounded-3xl border border-purple-200/50">
            <p className="text-xl text-gray-800 font-semibold">
              Ahí es donde creemos que la creación de distintas alternativas se va haciendo cada vez más necesario.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
