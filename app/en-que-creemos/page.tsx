import Image from "next/image"
import EnQueCreemosClient from "./page-client"

export default function EnQueCreemos() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-orange-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <Image src="/images/background.png" alt="Background pattern" fill className="object-cover" priority />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">En qué creemos</h1>
            <p className="text-xl text-gray-700 mb-8">
              Nuestros principios y valores que guían todo lo que hacemos en MeJubilo
            </p>
          </div>
        </div>
      </section>

      {/* Client Components */}
      <EnQueCreemosClient />

      {/* Testimonial */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl italic text-gray-700 mb-8">
              "Creemos que cada persona merece tener control sobre su futuro financiero, con transparencia y libertad
              para tomar sus propias decisiones."
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                <Image
                  src="/professional-man.png"
                  alt="Fundador de MeJubilo"
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <p className="font-bold text-gray-900">Carlos Mendoza</p>
                <p className="text-gray-600">Fundador y CEO, MeJubilo</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
