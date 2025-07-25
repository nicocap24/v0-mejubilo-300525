export function Dashboard() {
  return (
    <section id="demo" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Beneficios de suscribirte
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">
              con nosotros hoy:
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center p-8 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-3xl border border-emerald-200/50">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl">💰</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ahorra hasta $400.000 anuales en comisión</h3>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl border border-blue-200/50">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl">📈</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Renta % más</h3>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl border border-purple-200/50">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl">🎯</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Aumenta tu pensión en más de 20%</h3>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-2xl font-bold text-gray-900">Es así de sencillo.</p>
        </div>
      </div>
    </section>
  )
}
