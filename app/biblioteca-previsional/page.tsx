import Image from "next/image"
import BibliotecaClientPage from "./page-client"

export const metadata = {
  title: "Biblioteca Previsional | MeJubilo",
  description: "Accede a nuestra colección de documentos, guías y recursos sobre el sistema previsional chileno.",
}

export default function BibliotecaPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-600 to-orange-400 py-16 text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image src="/library-documents.png" alt="Fondo Biblioteca" fill className="object-cover" />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Biblioteca Previsional</h1>
          <p className="mx-auto max-w-3xl text-lg font-medium">Educación previsional gratuita y de calidad</p>
        </div>
      </div>

      {/* Texto introductorio */}
      <div className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-8 text-lg text-gray-700 leading-relaxed">
            A continuación queremos poner a disposición de la comunidad una serie de documentos, archivos, artículos,
            libros, documentales, que creemos son útiles para el entendimiento de la tematica previsional. Es 100%
            gratuito y esta lista será actualizada constantemente con nueva información. Sientete libre de investigarla
            y compartirla con tus más cercanos.
          </p>
        </div>
      </div>

      {/* Contenido principal */}
      <BibliotecaClientPage />
    </main>
  )
}
