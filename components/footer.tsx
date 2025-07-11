export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <span className="text-2xl font-bold">
                <span className="text-white">Me </span>
                <span className="text-green-400" style={{ color: "#22c55e" }}>
                  Jubilo
                </span>
              </span>
            </div>
            <p className="text-gray-300 mb-4">Tu fuente de información previsional 100% clara y transparente</p>

            {/* Social Media */}
            <div className="flex items-center gap-4">
              <a
                href="https://x.com/mejubilo_com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-gray-700 hover:bg-gray-600 text-white rounded-full transition-colors"
                title="Síguenos en X"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Más información */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Más información</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/acerca-de"
                  className="text-gray-300 hover:text-green-400 transition-colors"
                  style={{ "--tw-text-opacity": 1 }}
                >
                  Acerca de
                </a>
              </li>
              <li>
                <a href="/nuestra-historia" className="text-gray-300 hover:text-green-400 transition-colors">
                  Nuestra Historia
                </a>
              </li>
              <li>
                <a href="/preguntas-frecuentes" className="text-gray-300 hover:text-green-400 transition-colors">
                  Preguntas frecuentes
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-300 hover:text-green-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/supuestos" className="text-gray-300 hover:text-green-400 transition-colors">
                  Supuestos
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/nicocap24/v0-mejubilo-300525"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Docs
                </a>
              </li>
              <li>
                <a href="/contacto" className="text-gray-300 hover:text-green-400 transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Productos y Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Productos</h3>
            <ul className="space-y-2">
              <li>
                <a href="/jubila-con-nico" className="text-gray-300 hover:text-green-400 transition-colors">
                  Jubila con Nico
                </a>
              </li>
              <li>
                <a href="/rentas-vitalicias" className="text-gray-300 hover:text-green-400 transition-colors">
                  Rentas Vitalicias
                </a>
              </li>
              <li>
                <a href="/charlas-previsionales" className="text-gray-300 hover:text-green-400 transition-colors">
                  Charlas previsionales
                </a>
              </li>
              <li>
                <a href="/manual-del-retiro" className="text-gray-300 hover:text-green-400 transition-colors">
                  Manual del Retiro
                </a>
              </li>
              <li>
                <a href="/publicita-con-nosotros" className="text-gray-300 hover:text-green-400 transition-colors">
                  Publicita con nosotros
                </a>
              </li>
            </ul>

            <h3 className="text-lg font-semibold mb-4 mt-6">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="/terminos-y-condiciones" className="text-gray-300 hover:text-green-400 transition-colors">
                  Términos y condiciones
                </a>
              </li>
              <li>
                <a href="/politica-de-privacidad" className="text-gray-300 hover:text-green-400 transition-colors">
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
