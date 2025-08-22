import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold">
                <span className="text-gray-300">Me</span>
                <span className="text-orange-500">Jubilo</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-4">Tu fuente de información previsional 100% clara y transparente</p>
            <div className="flex space-x-4">
              <a
                href="https://x.com/mejubilo_com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Productos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Productos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/evaluar" className="text-gray-400 hover:text-white transition-colors">
                  Simulador de Pensiones
                </Link>
              </li>
              <li>
                <Link href="/invest" className="text-gray-400 hover:text-white transition-colors">
                  Invest
                </Link>
              </li>
              <li>
                <Link href="/publicita-con-nosotros" className="text-gray-400 hover:text-white transition-colors">
                  Publicita con nosotros
                </Link>
              </li>
              <li>
                <Link href="/ranking-afps" className="text-gray-400 hover:text-white transition-colors">
                  Ranking AFPs
                </Link>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/acerca-de" className="text-gray-400 hover:text-white transition-colors">
                  Acerca de
                </Link>
              </li>
              <li>
                <Link href="/nuestra-historia" className="text-gray-400 hover:text-white transition-colors">
                  Nuestra Historia
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-400 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2025 Me Jubilo. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/politica-de-privacidad" className="text-gray-400 hover:text-white text-sm transition-colors">
              Política de Privacidad
            </Link>
            <Link href="/terminos-y-condiciones" className="text-gray-400 hover:text-white text-sm transition-colors">
              Términos y Condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
