import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-blue-500 to-purple-600"></div>
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center text-white">
        <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
          Sin letra chica.
          <br />
          Sólo{" "}
          <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">NÚMEROS</span>{" "}
          <span className="tracking-widest">C L A R O S.</span>
          <br />
          <span className="text-4xl md:text-5xl">¿Listo para comenzar?</span>
        </h2>

        <div className="flex justify-center mb-12">
          <Button className="bg-white text-gray-900 hover:bg-gray-100 px-10 py-5 rounded-2xl text-xl font-bold flex items-center space-x-3 shadow-2xl transform hover:scale-105 transition-all duration-200">
            <span>Comenzar</span>
            <ArrowRight className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}
