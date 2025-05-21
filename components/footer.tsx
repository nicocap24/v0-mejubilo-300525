import Link from "next/link"
import { Logo } from "./logo"

export default function Footer() {
  return (
    <footer className="text-gray-600 py-12 relative z-10">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Logo />
            <p className="mt-4 text-gray-600">
              Ayudamos a los chilenos a optimizar sus pensiones y prepararse mejor para el futuro.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-gray-800">Enlaces rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-orange-500">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/el-problema" className="text-gray-600 hover:text-orange-500">
                  El Problema
                </Link>
              </li>
              <li>
                <Link href="/herramientas" className="text-gray-600 hover:text-orange-500">
                  Herramientas
                </Link>
              </li>
              <li>
                <Link href="/leaderboard" className="text-gray-600 hover:text-orange-500">
                  Leaderboard
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-gray-800">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-orange-500">
                  Términos de uso
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-orange-500">
                  Política de privacidad
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-gray-600 hover:text-orange-500">
                  Seguridad
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-gray-800">Contacto</h4>
            <ul className="space-y-2">
              <li className="text-gray-600">contacto@mejubilo.cl</li>
              <li className="text-gray-600">+56 2 2123 4567</li>
              <li className="text-gray-600">Santiago, Chile</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <p>© {new Date().getFullYear()} MeJubilo. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
