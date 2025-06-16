import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: "Lo que no te dijeron de la reforma",
      description:
        "Descubre los aspectos menos conocidos de la reforma previsional y cómo podrían afectar tu jubilación en los próximos años.",
      image: "/placeholder.svg?height=200&width=400",
      link: "/blog/reforma-previsional",
    },
    {
      id: 2,
      title: "¿Por qué Me Jubilo?",
      description:
        "Conoce la historia detrás de Me Jubilo y nuestra misión de hacer más transparente el sistema de pensiones en Chile.",
      image: "/placeholder.svg?height=200&width=400",
      link: "/blog/porque-me-jubilo",
    },
    {
      id: 3,
      title: "NUEVOS PENSIONADOS ABRIL 2025",
      description:
        "Salieron los datos de los nuevos pensionados de Abril 2025. El monto promedio de pensión para hombres fue de $281.484 y para mujeres $113.691...",
      image: "/placeholder.svg?height=200&width=400",
      link: "/blog/nuevos-pensionados-abril-2025",
    },
  ]

  return (
    <section className="py-4 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-2">Artículos destacados</h2>
        <p className="text-xl text-gray-600 text-center mb-6 max-w-3xl mx-auto">
          Mantente informado sobre el sistema previsional chileno y cómo prepararte para una mejor jubilación
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 w-full">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
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
    </section>
  )
}
