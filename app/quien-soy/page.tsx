"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"

export default function QuienSoyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Quien soy</h1>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                Mi nombre es <strong>Nicolás Arrieta</strong> y soy el fundador de Me Jubilo.
              </p>

              <p className="text-lg text-gray-700 mb-8">
                Me Jubilo es una plataforma 100% digital que se dedica a crear y comercializar productos previsionales.
              </p>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Misión</h2>
                <p className="text-lg text-gray-700">
                  Ser el #1 en la industria previsional en Chile y en Latinoamérica.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Principios</h2>
                <ul className="space-y-2 text-gray-700">
                  <li>• Pensamos en grande pero partimos en chico.</li>
                  <li>• Somos unos eruditos del sistema previsional</li>
                  <li>• No nos molesta ser controversiales</li>
                  <li>• Somos 100% independientes,</li>
                  <li>• Vivimos en la búsqueda eterna por la verdad,</li>
                  <li>• Usamos la última tecnología,</li>
                  <li>• No nos podrán callar,</li>
                  <li>• No nos rendiremos jamás,</li>
                  <li>• Desde el sur a todo el mundo.</li>
                  <li>• Lo viste aquí primero.</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Mentores</h2>
                <p className="text-gray-700 mb-4">
                  Para construir cosas grandes hay que pararse sobre los hombros de gigantes, aquí algunas de las
                  personas que más nos han inspirado en nuestra creación empresarial:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-700">
                  <div>Peter Thiel</div>
                  <div>Marc Andreesen</div>
                  <div>Brian Armstrong</div>
                  <div>Balajis</div>
                  <div>Scott Cook</div>
                  <div>Bill Gates</div>
                  <div>Naval</div>
                  <div>Stani</div>
                  <div>Bryan Johnson</div>
                  <div>Jason Fried</div>
                  <div>Charles Koch</div>
                  <div>John D Rockefeller</div>
                  <div>Charlie Munger</div>
                  <div>JP Morgan</div>
                  <div>John Kellog</div>
                  <div>Henry Heinz</div>
                  <div>Asa Candler</div>
                  <div>Robert Merton</div>
                  <div>Jose Piñera</div>
                  <div>Carlos Alberto Delano</div>
                  <div>Andrés Navarro</div>
                  <div>Diego Valero</div>
                  <div>Andrónico Luksic</div>
                  <div>Kobe Bryant</div>
                  <div>Manu Ginobili</div>
                  <div>Cristobal Colón</div>
                  <div>Hernando de Magallanes</div>
                  <div>Pedro de Valdivia</div>
                  <div>Vasco Núñez de Balboa</div>
                  <div>Hernán Cortes</div>
                </div>
                <p className="text-gray-600 mt-4 italic">Entre tantos otros que falta mencionar…</p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Empresas que nos han inspirado</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-700">
                  <div>Intuit</div>
                  <div>Basecamp</div>
                  <div>Ping An Insurance</div>
                  <div>Credit Karma</div>
                  <div>AFP Habitat</div>
                  <div>Banco de Chile</div>
                  <div>Penta Vida</div>
                  <div>Athene</div>
                  <div>Berkshire Hathaway</div>
                  <div>Geico</div>
                  <div>Tiny Capital</div>
                  <div>Coinbase</div>
                  <div>Clanker</div>
                  <div>Aave</div>
                  <div>Uniswap</div>
                </div>
                <p className="text-gray-600 mt-4 italic">Entre tantas otras que falta mencionar…</p>
              </div>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
