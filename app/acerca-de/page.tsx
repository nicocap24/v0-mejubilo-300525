"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Users, Target, Heart, Award } from "lucide-react"

export default function AcercaDePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Acerca de</h1>
            <p className="text-xl text-gray-600">Esta es la página 'Acerca de'.</p>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-emerald-600 mr-3" />
                <h2 className="text-2xl font-bold">Nuestra Misión</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Empoderar a los chilenos con información clara y herramientas simples para que puedan tomar decisiones
                informadas sobre su futuro previsional y lograr una jubilación digna.
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                <Heart className="w-8 h-8 text-emerald-600 mr-3" />
                <h2 className="text-2xl font-bold">Nuestra Visión</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Ser la plataforma de referencia en Chile para la planificación previsional, donde cada persona pueda
                acceder fácilmente a información confiable y herramientas útiles para su jubilación.
              </p>
            </Card>
          </div>

          {/* Values */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">Nuestros Valores</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center p-6">
                <Users className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Transparencia</h3>
                <p className="text-gray-600">Información clara, sin letra chica ni comisiones ocultas.</p>
              </Card>

              <Card className="text-center p-6">
                <Award className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Confiabilidad</h3>
                <p className="text-gray-600">Datos actualizados y cálculos basados en información oficial.</p>
              </Card>

              <Card className="text-center p-6">
                <Heart className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Accesibilidad</h3>
                <p className="text-gray-600">Herramientas simples y gratuitas para todos los chilenos.</p>
              </Card>
            </div>
          </div>

          {/* Team */}
          <Card className="p-8">
            <h2 className="text-3xl font-bold text-center mb-6">Nuestro Equipo</h2>
            <div className="text-center">
              <p className="text-lg text-gray-700 mb-4">
                Somos un equipo multidisciplinario de profesionales apasionados por mejorar el sistema previsional
                chileno.
              </p>
              <p className="text-gray-600">
                Contamos con expertos en finanzas, tecnología y comunicación, todos comprometidos con hacer la
                información previsional más accesible para todos.
              </p>
            </div>
          </Card>

          {/* CTA */}
          <div className="text-center mt-12 bg-emerald-600 text-white p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">¿Listo para planificar tu jubilación?</h2>
            <p className="text-xl mb-6">Comienza ahora con nuestra simulación gratuita</p>
            <button
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors"
              onClick={() => (window.location.href = "/evaluar")}
            >
              Evaluar mi Pensión
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
