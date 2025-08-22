import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Lo que no te dijeron de la reforma",
      description:
        "Descubre los aspectos menos conocidos de la reforma previsional y cómo podrían afectar tu jubilación en los próximos años.",
      image: "/images/blog/reforma-previsional.png",
      link: "/blog/reforma-previsional",
    },
    {
      id: 2,
      title: "¿Por qué Me Jubilo?",
      description:
        "Conoce la historia detrás de Me Jubilo y nuestra misión de hacer más transparente el sistema de pensiones en Chile.",
      image: "/images/blog/porque-me-jubilo.png",
      link: "/blog/porque-me-jubilo",
    },
    {
      id: 3,
      title: "NUEVOS PENSIONADOS ABRIL 2025",
      description:
        "Salieron los datos de los nuevos pensionados de Abril 2025. El monto promedio de pensión para hombres fue de $281.484 y para mujeres $113.691...",
      image: "/images/blog/nuevos-pensionados-abril.png",
      link: "/blog/nuevos-pensionados-abril-2025",
    },
    {
      id: 4,
      title: "Ranking Mejores Países Para Jubilar en Latinoamerica 2025",
      description:
        "Descubre los destinos más atractivos para tu jubilación en América Latina. Análisis completo de costos, seguridad, atención médica y calidad de vida.",
      image: "/images/blog/ranking-paises.png",
      link: "/ranking-paises",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div
        className="flex-1 bg-cover bg-center bg-no-repeat py-12"
        style={{
          backgroundImage: "url('/images/landscape-background.png')",
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-white/20"></div>

        <div className="relative z-10 container mx-auto px-4">
          <Link href="/" className="inline-flex items-center text-gray-700 hover:text-gray-900 mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver al inicio
          </Link>

          <Card className="w-full max-w-6xl mx-auto bg-white/95 backdrop-blur-sm mb-8">
            <CardHeader className="text-center">
              <CardTitle className="text-4xl font-bold text-gray-800 mb-4">Blog Me Jubilo</CardTitle>
              <p className="text-xl text-gray-600">
                Mantente informado sobre el sistema previsional chileno y cómo prepararte para una mejor jubilación
              </p>
            </CardHeader>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {blogPosts.map((post) => (
              <Card
                key={post.id}
                className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white/95 backdrop-blur-sm"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-bold text-gray-800">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="py-2">
                  <p className="text-gray-600">{post.description}</p>
                </CardContent>
                <CardFooter className="pt-2">
                  <Link href={post.link} className="w-full">
                    <Button
                      variant="outline"
                      className="w-full border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                    >
                      Leer más
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
