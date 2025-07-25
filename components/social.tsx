import { Trophy, Medal, Award, Users, TrendingUp } from "lucide-react"

export function Social() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Users className="w-4 h-4" />
            <span>Comunidad</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Descubre las
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              mejores estrategias
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Compara tu rendimiento con otros usuarios de forma anónima y aprende de los mejores inversionistas
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 lg:p-12 border border-gray-100 shadow-2xl shadow-gray-200/50">
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center space-x-3 bg-gradient-to-r from-yellow-100 to-orange-100 px-6 py-3 rounded-2xl">
              <Trophy className="w-6 h-6 text-yellow-600" />
              <span className="text-xl font-bold text-gray-900">Ranking de Rentabilidad</span>
            </div>
          </div>

          <div className="space-y-6">
            {/* First Place */}
            <div className="flex items-center justify-between p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl border-2 border-yellow-200/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-200/20 to-orange-200/20 rounded-full blur-2xl"></div>
              <div className="flex items-center space-x-6 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-xl font-bold text-gray-900">Usuario Anónimo #1</p>
                  <p className="text-gray-600">AFP Modelo • Fondo A • 15 años cotizando</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-green-600 font-semibold">Mejor estrategia del año</span>
                  </div>
                </div>
              </div>
              <div className="text-right relative z-10">
                <p className="text-4xl font-bold text-green-600">+8.2%</p>
                <p className="text-gray-600">Rentabilidad anual</p>
                <p className="text-sm text-gray-500 mt-1">$2.1M ganados</p>
              </div>
            </div>

            {/* Second Place */}
            <div className="flex items-center justify-between p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl border border-gray-200/50">
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Medal className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-xl font-bold text-gray-900">Usuario Anónimo #2</p>
                  <p className="text-gray-600">AFP Cuprum • Fondo B • 12 años cotizando</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <TrendingUp className="w-4 h-4 text-blue-500" />
                    <span className="text-sm text-blue-600 font-semibold">Estrategia conservadora exitosa</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-4xl font-bold text-green-600">+7.8%</p>
                <p className="text-gray-600">Rentabilidad anual</p>
                <p className="text-sm text-gray-500 mt-1">$1.8M ganados</p>
              </div>
            </div>

            {/* Your Position */}
            <div className="flex items-center justify-between p-6 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl border-2 border-emerald-200/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-200/20 to-blue-200/20 rounded-full blur-2xl"></div>
              <div className="flex items-center space-x-6 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-xl font-bold text-emerald-600">¡Tú podrías estar aquí!</p>
                  <p className="text-gray-600">Únete y compara tu rendimiento real</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <span className="text-sm text-emerald-600 font-semibold bg-emerald-100 px-3 py-1 rounded-full">
                      Descubre tu posición
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-right relative z-10">
                <p className="text-4xl font-bold text-gray-400">??.?%</p>
                <p className="text-gray-600">Tu rentabilidad</p>
                <p className="text-sm text-gray-500 mt-1">¿Cuánto has ganado?</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-2xl border border-purple-200/50">
              <p className="text-gray-700 font-semibold mb-2">
                🔒 <strong>Privacidad garantizada:</strong> Todos los datos son anónimos y agregados
              </p>
              <p className="text-sm text-gray-600">
                Nunca compartimos información personal. Solo comparamos rendimientos para ayudarte a mejorar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
