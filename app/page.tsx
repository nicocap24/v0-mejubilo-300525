"use client"
import { Badge } from "@/components/ui/badge"
import { Clock } from "lucide-react"

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Logo/Brand */}
        <div className="flex justify-center">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-6 rounded-2xl">
            <h2 className="text-2xl font-bold text-white">Me Jubilo</h2>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
            <Clock className="h-4 w-4 mr-2" />
            Próximamente
          </Badge>

          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Se viene algo increible
          </h1>

          <p className="text-xl text-gray-600 max-w-lg mx-auto leading-relaxed">
            Abriremos el sistema AFP para las masas, atentos.
          </p>
        </div>

        {/* Footer */}
        <div className="pt-8 text-sm text-gray-500">
          <p>© 2024 Me Jubilo. Todos los derechos reservados.</p>
        </div>
      </div>
    </div>
  )
}
