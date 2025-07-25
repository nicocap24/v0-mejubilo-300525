import { Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="text-3xl font-bold">Me Jubilo</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">Previsional 100% clara y transparente.</p>
            <div className="flex items-center space-x-4">
              <a
                href="https://x.com/mejubilo_com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://github.com/nicocap24/v0-mejubilo-300525"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-bold text-lg mb-6">Empresa</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#quienes-somos" className="hover:text-white transition-colors">
                  Quienes somos
                </a>
              </li>
              <li>
                <a href="#nuestra-historia" className="hover:text-white transition-colors">
                  Nuestra historia
                </a>
              </li>
              <li>
                <a href="#preguntas" className="hover:text-white transition-colors">
                  Preguntas frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-bold text-lg mb-6">Producto</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Planes
                </a>
              </li>
            </ul>
          </div>

          {/* Herramientas gratuitas */}
          <div>
            <h4 className="font-bold text-lg mb-6">Herramientas gratuitas</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#simulador" className="hover:text-white transition-colors">
                  Simulador reforma
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 mb-4 md:mb-0">&copy; 2024 Me Jubilo. Todos los derechos reservados.</p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Hecho con ❤️ en Chile</span>
              <span>•</span>
              <span>Datos protegidos con encriptación bancaria</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
