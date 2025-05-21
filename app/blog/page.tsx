import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Calendar, User, ArrowRight } from "lucide-react"
import UnifiedFooter from "@/components/unified-footer"
import { blogPosts } from "@/lib/blog-data"

export const metadata = {
  title: "Blog de Pensiones | MeJubilo",
  description: "Artículos, noticias y consejos sobre el sistema de pensiones en Chile y cómo mejorar tu jubilación",
}

export default function BlogPage() {
  // Obtener los posts destacados (los 3 primeros)
  const featuredPosts = blogPosts.slice(0, 3)
  // Obtener el resto de los posts
  const regularPosts = blogPosts.slice(3)

  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-2 text-gray-800">Blog de Pensiones</h1>
          <p className="text-gray-600 mb-8">
            Artículos, noticias y consejos sobre el sistema de pensiones en Chile y cómo mejorar tu jubilación
          </p>

          {/* Buscador */}
          <div className="relative mb-12">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="search"
              placeholder="Buscar artículos..."
              className="pl-10 bg-white border-gray-300 focus:border-orange-500 focus:ring-orange-500"
            />
          </div>

          {/* Posts destacados */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Artículos destacados</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredPosts.map((post) => (
                <Card key={post.slug} className="overflow-hidden bg-white hover:shadow-md transition-shadow">
                  <div className="relative h-48">
                    <Image src={post.coverImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <User className="h-4 w-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <CardTitle className="text-xl">
                      <Link href={`/blog/${post.slug}`} className="hover:text-orange-500 transition-colors">
                        {post.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="ghost" className="p-0 h-auto text-orange-500 hover:text-orange-600">
                      <Link href={`/blog/${post.slug}`} className="flex items-center">
                        Leer más <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          {/* Todos los posts */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Todos los artículos</h2>
            <div className="space-y-8">
              {regularPosts.map((post) => (
                <Card key={post.slug} className="overflow-hidden bg-white hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row">
                    <div className="relative h-48 md:h-auto md:w-1/3">
                      <Image
                        src={post.coverImage || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col p-6 md:w-2/3">
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <User className="h-4 w-4 mr-1" />
                        <span>{post.author}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">
                        <Link href={`/blog/${post.slug}`} className="hover:text-orange-500 transition-colors">
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                      <div className="mt-auto">
                        <Button asChild variant="ghost" className="p-0 h-auto text-orange-500 hover:text-orange-600">
                          <Link href={`/blog/${post.slug}`} className="flex items-center">
                            Leer más <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Paginación */}
            <div className="flex justify-center mt-12">
              <div className="flex space-x-2">
                <Button variant="outline" className="border-gray-300 text-gray-600" disabled>
                  Anterior
                </Button>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">1</Button>
                <Button variant="outline" className="border-gray-300 text-gray-600">
                  2
                </Button>
                <Button variant="outline" className="border-gray-300 text-gray-600">
                  3
                </Button>
                <Button variant="outline" className="border-gray-300 text-gray-600">
                  Siguiente
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <UnifiedFooter
        ctaTitle="¿Quieres recibir nuestros artículos?"
        ctaDescription="Suscríbete a nuestro newsletter y recibe contenido exclusivo sobre pensiones y finanzas personales."
        ctaButtonText="Suscribirme"
        ctaButtonLink="/newsletter"
      />
    </>
  )
}
