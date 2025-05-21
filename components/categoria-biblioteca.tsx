import { Book } from "lucide-react"
import type { Documento } from "@/lib/biblioteca-data"
import Link from "next/link"

interface CategoriaProps {
  nombre: string
  documentos: Documento[]
}

export function CategoriaBiblioteca({ nombre, documentos }: CategoriaProps) {
  return (
    <div className="mb-12">
      <div className="mb-6 flex items-center">
        <div className="mr-3 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600">
          <Book className="h-6 w-6" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">{nombre}</h2>
      </div>

      <div className="space-y-4">
        {documentos.map((documento) => (
          <div
            key={documento.id}
            className="group flex items-start rounded-lg border border-gray-200 bg-white p-4 transition-all hover:border-orange-200 hover:bg-orange-50"
          >
            <div className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-500">
              <Book className="h-5 w-5" />
            </div>
            <div className="flex-grow">
              <h3 className="mb-1 font-semibold text-gray-900 group-hover:text-orange-600">{documento.titulo}</h3>
              <p className="mb-2 text-sm text-gray-600">{documento.descripcion}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">
                  {documento.autor} • {documento.fecha}
                </span>
                <Link
                  href={documento.url}
                  target="_blank"
                  className="text-sm font-medium text-orange-600 hover:text-orange-700"
                >
                  Descargar
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
