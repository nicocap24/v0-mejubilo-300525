import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Calendar, User, Clock, ArrowLeft, Share2, Bookmark } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import UnifiedFooter from "@/components/unified-footer"
import { blogPosts } from "@/lib/blog-data"
import FeedbackThumbs from "@/components/feedback-thumbs"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export function generateMetadata({ params }: BlogPostPageProps) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    return {
      title: "Artículo no encontrado | MeJubilo",
      description: "El artículo que buscas no existe o ha sido movido.",
    }
  }

  return {
    title: `${post.title} | Blog de Pensiones | MeJubilo`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  // Obtener 3 posts relacionados (excluyendo el actual)
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== params.slug)
    .filter((p) => p.categories.some((cat) => post.categories.includes(cat)))
    .slice(0, 3)

  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Button asChild variant="ghost" className="mb-4 text-gray-600 hover:text-orange-500">
              <Link href="/blog" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" /> Volver al blog
              </Link>
            </Button>

            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">{post.title}</h1>

            <div className="flex flex-wrap items-center text-sm text-gray-500 mb-6">
              <div className="flex items-center mr-4">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center mr-4">
                <User className="h-4 w-4 mr-1" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>{post.readingTime} min de lectura</span>
              </div>
            </div>

            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden mb-8">
              <Image src={post.coverImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </div>

            <div className="flex justify-between items-center mb-8">
              <div className="flex space-x-2">
                {post.categories.map((category) => (
                  <span key={category} className="inline-block bg-sky-100 text-sky-800 text-xs px-3 py-1 rounded-full">
                    {category}
                  </span>
                ))}
              </div>

              <div className="flex space-x-2">
                <Button variant="ghost" size="icon" className="text-gray-500 hover:text-orange-500">
                  <Share2 className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-500 hover:text-orange-500">
                  <Bookmark className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="prose prose-lg max-w-none mb-12">
              {post.content.map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-700">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="flex justify-between items-center mb-8">
              <FeedbackThumbs sectionId={`blog-post-${post.slug}`} sectionName={`Artículo: ${post.title}`} />

              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="flex items-center">
                  <Share2 className="h-4 w-4 mr-2" /> Compartir
                </Button>
              </div>
            </div>

            <Separator className="my-12" />

            {/* Autor */}
            <div className="flex items-center mb-12">
              <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                <Image
                  src={post.authorImage || "/placeholder.svg?height=64&width=64&query=person"}
                  alt={post.author}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-gray-800">{post.author}</h3>
                <p className="text-gray-600 text-sm">Especialista en pensiones y finanzas personales</p>
              </div>
            </div>
          </div>

          {/* Artículos relacionados */}
          {relatedPosts.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Artículos relacionados</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Card key={relatedPost.slug} className="overflow-hidden bg-white hover:shadow-md transition-shadow">
                    <div className="relative h-40">
                      <Image
                        src={relatedPost.coverImage || "/placeholder.svg"}
                        alt={relatedPost.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold mb-2 line-clamp-2">
                        <Link href={`/blog/${relatedPost.slug}`} className="hover:text-orange-500 transition-colors">
                          {relatedPost.title}
                        </Link>
                      </h3>
                      <div className="flex items-center text-xs text-gray-500">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{relatedPost.date}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <UnifiedFooter
        ctaTitle="¿Te interesa aprender más sobre pensiones?"
        ctaDescription="Regístrate en MeJubilo y accede a herramientas que te ayudarán a mejorar tu jubilación."
        ctaButtonText="Registrarme ahora"
        ctaButtonLink="/register"
      />
    </>
  )
}
