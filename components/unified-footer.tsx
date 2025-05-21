import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Logo } from "./logo"

interface UnifiedFooterProps {
  showCta?: boolean
  ctaTitle?: string
  ctaDescription?: string
  ctaButtonText?: string
  ctaButtonLink?: string
}

export default function UnifiedFooter({
  showCta = true,
  ctaTitle = "¿Listo para hacer crecer tus fondos?",
  ctaDescription = "Únete a miles de chilenos que ya están mejorando su futuro previsional con nuestra plataforma.",
  ctaButtonText = "Comenzar ahora",
  ctaButtonLink = "/register",
}: UnifiedFooterProps) {
  return (
    <section className="relative">
      <div className="absolute inset-0 z-0">
        <Image src="/images/background.png" alt="MeJubilo landscape" fill className="object-cover" />
      </div>

      {/* Contenido CTA */}
      {showCta && (
        <div className="relative z-10 pt-16 pb-8 text-center">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">{ctaTitle}</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">{ctaDescription}</p>
            <Button asChild size="lg" className="bg-orange-500 text-white hover:bg-orange-600">
              <Link href={ctaButtonLink}>{ctaButtonText}</Link>
            </Button>
          </div>
        </div>
      )}

      {/* Footer integrado en la misma sección */}
      <div className="relative z-10 border-t border-gray-200 bg-white bg-opacity-80">
        <div className="container px-4 md:px-6 mx-auto py-12">
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
                <li>
                  <Link href="/blog" className="text-gray-600 hover:text-orange-500">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/precios" className="text-gray-600 hover:text-orange-500">
                    Precios
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
      </div>
    </section>
  )
}
