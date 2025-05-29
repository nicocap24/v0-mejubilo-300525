export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <span className="text-2xl font-bold">
                <span className="text-white">Me</span>
                <span className="text-orange-500">Jubilo</span>
              </span>
            </div>
            <p className="text-gray-300 mb-4">Tu fuente de información previsional 100% clara y transparente</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="/acerca-de" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Acerca de
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Cómo funciona
                </a>
              </li>
              <li>
                <a href="/preguntas-frecuentes" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Preguntas frecuentes
                </a>
              </li>
              <li>
                <a href="/contacto" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Contacto
                </a>
              </li>
              <li>
                <a href="/supuestos" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Supuestos
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="/terminos-y-condiciones" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Términos y condiciones
                </a>
              </li>
              <li>
                <a href="/politica-de-privacidad" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Política de privacidad
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2024 MeJubilo. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
