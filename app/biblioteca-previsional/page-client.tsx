"use client"

import { useState, useEffect } from "react"
import { documentos, categorias } from "@/lib/biblioteca-data"
import { FiltroBiblioteca } from "@/components/filtro-biblioteca"
import { CategoriaBiblioteca } from "@/components/categoria-biblioteca"
import { Book, Search } from "lucide-react"

export default function BibliotecaClientPage() {
  const [categoriaActiva, setCategoriaActiva] = useState("todos")
  const [busqueda, setBusqueda] = useState("")
  const [documentosPorCategoria, setDocumentosPorCategoria] = useState<Record<string, any[]>>({})
  const [categoriasVisibles, setCategoriasVisibles] = useState<string[]>([])

  useEffect(() => {
    // Filtrar documentos por búsqueda
    let documentosFiltrados = documentos

    if (busqueda) {
      const busquedaLower = busqueda.toLowerCase()
      documentosFiltrados = documentosFiltrados.filter(
        (doc) =>
          doc.titulo.toLowerCase().includes(busquedaLower) ||
          doc.descripcion.toLowerCase().includes(busquedaLower) ||
          doc.autor.toLowerCase().includes(busquedaLower),
      )
    }

    // Filtrar por categoría si no es "todos"
    if (categoriaActiva !== "todos") {
      documentosFiltrados = documentosFiltrados.filter((doc) => doc.categoria === categoriaActiva)
    }

    // Agrupar documentos por categoría
    const porCategoria: Record<string, any[]> = {}
    const categoriasConDocumentos: string[] = []

    documentosFiltrados.forEach((doc) => {
      if (!porCategoria[doc.categoria]) {
        porCategoria[doc.categoria] = []
        categoriasConDocumentos.push(doc.categoria)
      }
      porCategoria[doc.categoria].push(doc)
    })

    setDocumentosPorCategoria(porCategoria)
    setCategoriasVisibles(categoriasConDocumentos)
  }, [categoriaActiva, busqueda])

  // Obtener el nombre de la categoría a partir de su ID
  const getNombreCategoria = (id: string) => {
    const categoria = categorias.find((cat) => cat.id === id)
    return categoria ? categoria.nombre : id.charAt(0).toUpperCase() + id.slice(1)
  }

  return (
    <div className="container mx-auto px-4 pb-16">
      {/* Filtros */}
      <div className="mb-12">
        <FiltroBiblioteca
          categoriaActiva={categoriaActiva}
          setCategoriaActiva={setCategoriaActiva}
          setBusqueda={setBusqueda}
        />
      </div>

      {/* Resultados de búsqueda */}
      {busqueda && (
        <div className="mb-8 flex items-center text-gray-600">
          <Search className="mr-2 h-5 w-5" />
          <p>
            Resultados para: <span className="font-medium">"{busqueda}"</span>
          </p>
        </div>
      )}

      {/* Mensaje si no hay resultados */}
      {categoriasVisibles.length === 0 && (
        <div className="rounded-lg bg-white p-8 text-center shadow-sm">
          <Book className="mx-auto mb-4 h-12 w-12 text-gray-400" />
          <h3 className="mb-2 text-xl font-semibold text-gray-900">No se encontraron documentos</h3>
          <p className="text-gray-600">
            No hay documentos que coincidan con tu búsqueda. Intenta con otros términos o categorías.
          </p>
        </div>
      )}

      {/* Listado de documentos por categoría */}
      {categoriasVisibles.map((categoriaId) => (
        <CategoriaBiblioteca
          key={categoriaId}
          nombre={getNombreCategoria(categoriaId)}
          documentos={documentosPorCategoria[categoriaId]}
        />
      ))}
    </div>
  )
}
