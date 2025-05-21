import Image from "next/image"
import Link from "next/link"
import { FileText, Download } from "lucide-react"
import type { Documento } from "@/lib/biblioteca-data"
import { Badge } from "@/components/ui/badge"

interface TarjetaDocumentoProps {
  documento: Documento
}

export function TarjetaDocumento({ documento }: TarjetaDocumentoProps) {
  return (
    <div className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={documento.imagen || "/placeholder.svg"}
          alt={documento.titulo}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {documento.destacado && <Badge className="absolute right-2 top-2 bg-orange-500 text-white">Destacado</Badge>}
      </div>
      <div className="p-4">
        <div className="mb-2 flex items-center gap-2 text-sm text-gray-600">
          <FileText className="h-4 w-4" />
          <span>{documento.categoria.charAt(0).toUpperCase() + documento.categoria.slice(1)}</span>
        </div>
        <h3 className="mb-2 text-lg font-semibold text-gray-900">{documento.titulo}</h3>
        <p className="mb-4 text-sm text-gray-600">{documento.descripcion}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{documento.autor}</span>
          <span>{documento.fecha}</span>
        </div>
        <div className="mt-4 flex justify-between">
          <Link
            href={documento.url}
            target="_blank"
            className="inline-flex items-center rounded-md bg-orange-500 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-orange-600"
          >
            <Download className="mr-2 h-4 w-4" />
            Descargar
          </Link>
        </div>
      </div>
    </div>
  )
}
