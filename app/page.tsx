"use client"
import { Countdown } from "../components/countdown"

export default function ComingSoonPage() {
  // Set launch date to August 18, 2025 at 18:00 Santiago time
  const launchDate = new Date("2025-08-18T18:00:00")
  // Adjust for Santiago timezone (UTC-3)
  launchDate.setHours(launchDate.getHours() + 3)

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20Pantalla%202025-05-09%20a%20la%28s%29%2013.05.36-SDUh5FuzDx2al6gPGsLX0XMC0uzvq9.png')",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-2xl w-full">
        <div className="bg-gray-100 rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-gray-800">
          {/* Logo - Centered */}
          <div className="flex justify-center mb-8">
            <div className="bg-white border-2 border-gray-800 rounded-lg px-6 py-3 shadow-lg">
              <h2 className="text-2xl font-bold">
                <span className="text-gray-700">Me </span>
                <span className="text-orange-500">Jubilo</span>
              </h2>
            </div>
          </div>

          {/* Main Text - Centered */}
          <div className="space-y-6 mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold">
              <span className="text-orange-500">Se viene algo </span>
              <span className="text-gray-800">increíble...</span>
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed">Abriremos el sistema AFP para las masas, atentos.</p>
          </div>

          {/* Countdown */}
          <div className="mb-8">
            <Countdown targetDate={launchDate} />
          </div>

          {/* Footer - Centered */}
          <div className="text-center">
            <p className="text-sm text-gray-500">© 2024 Me Jubilo. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
