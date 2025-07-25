import { Button } from "@/components/ui/button"
import { Check, Star, Zap, Crown } from "lucide-react"

export function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-100 to-blue-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Star className="w-4 h-4" />
            <span>Precios</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Elige tu</span>
            <br />
            <span className="bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">
              plan perfecto
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comienza gratis y accede a información que puede ahorrarte cientos de miles de pesos
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Plan Gratuito */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-200 relative">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Gratuito</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-gray-900">$0</span>
                <span className="text-gray-600 text-lg">/mes</span>
              </div>
              <p className="text-gray-600">Perfecto para comenzar a explorar</p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-green-600" />
                </div>
                <span className="text-gray-700">Simuladores básicos</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-green-600" />
                </div>
                <span className="text-gray-700">Calculadora de jubilación</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-green-600" />
                </div>
                <span className="text-gray-700">Información general del mercado</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-green-600" />
                </div>
                <span className="text-gray-700">Acceso a la comunidad</span>
              </li>
            </ul>

            <Button className="w-full bg-gray-600 hover:bg-gray-700 text-white py-4 rounded-2xl text-lg font-semibold">
              Comenzar Gratis
            </Button>
          </div>

          {/* Plan PRO */}
          <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-3xl p-8 border-2 border-emerald-300 relative transform scale-105 shadow-2xl shadow-emerald-500/25">
            {/* Popular Badge */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-6 py-3 rounded-2xl text-sm font-bold flex items-center space-x-2 shadow-lg">
                <Star className="w-4 h-4" />
                <span>MÁS POPULAR</span>
              </div>
            </div>

            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Crown className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Me Jubilo PRO</h3>
              <div className="mb-6">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-5xl font-bold text-emerald-600">$10.000</span>
                  <span className="text-gray-600 text-lg">/mes</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-lg text-gray-500 line-through">$20.000</span>
                  <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-bold">50% OFF</span>
                </div>
                <p className="text-sm text-emerald-600 font-semibold mt-2">Primeros 100 usuarios</p>
              </div>
              <p className="text-gray-600">Todo lo que necesitas para optimizar</p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-emerald-600" />
                </div>
                <span className="text-gray-700">Todo lo del plan gratuito</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-emerald-600" />
                </div>
                <span className="text-gray-700">Dashboard completo personalizado</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-emerald-600" />
                </div>
                <span className="text-gray-700">Análisis histórico detallado</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-emerald-600" />
                </div>
                <span className="text-gray-700">Ranking y comparación social</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-emerald-600" />
                </div>
                <span className="text-gray-700">Alertas y recomendaciones</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-emerald-600" />
                </div>
                <span className="text-gray-700">Soporte prioritario</span>
              </li>
            </ul>

            <Button className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white py-4 rounded-2xl text-lg font-semibold shadow-lg">
              Comenzar PRO
            </Button>
          </div>

          {/* Plan Empresa */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-200 relative">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Crown className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Empresa</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-blue-600">Precio</span>
                <div className="text-gray-600 text-lg">a convenir</div>
              </div>
              <p className="text-gray-600">Solución completa para empresas</p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-blue-600" />
                </div>
                <span className="text-gray-700">Todo lo del plan PRO</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-blue-600" />
                </div>
                <span className="text-gray-700">Dashboard para múltiples empleados</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-blue-600" />
                </div>
                <span className="text-gray-700">Reportes corporativos avanzados</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-blue-600" />
                </div>
                <span className="text-gray-700">API personalizada</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-blue-600" />
                </div>
                <span className="text-gray-700">Soporte dedicado 24/7</span>
              </li>
            </ul>

            <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-4 rounded-2xl text-lg font-semibold">
              Contactar Ventas
            </Button>
          </div>
        </div>

        {/* Value Proposition */}
      </div>
    </section>
  )
}
