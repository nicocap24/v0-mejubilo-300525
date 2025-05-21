"use client"

import type React from "react"

import { useState } from "react"
import { Search, Book } from "lucide-react"
import { categorias } from "@/lib/biblioteca-data"
import { Button } from "@/components/ui/button"

interface FiltroProps {
  categoriaActiva: string
  setCategoriaActiva: (categoria: string) => void
  setBusqueda: (busqueda: string) => void
}

export function FiltroBiblioteca({ categoriaActiva, setCategoriaActiva, setBusqueda }: FiltroProps) {
  const [inputBusqueda, setInputBusqueda] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setBusqueda(inputBusqueda)
  }

  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center">
        <Book className="mr-3 h-6 w-6 text-orange-500" />
        <h2 className="text-xl font-semibold text-gray-900">Filtrar documentos</h2>
      </div>

      <div className="space-y-6">
        <form onSubmit={handleSubmit} className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Buscar documentos..."
            className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-4 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
            value={inputBusqueda}
            onChange={(e) => setInputBusqueda(e.target.value)}
          />
        </form>

        <div>
          <h3 className="mb-3 font-medium text-gray-700">Categorías</h3>
          <div className="flex flex-wrap gap-2">
            {categorias.map((categoria) => (
              <Button
                key={categoria.id}
                variant={categoriaActiva === categoria.id ? "default" : "outline"}
                className={
                  categoriaActiva === categoria.id
                    ? "bg-orange-500 text-white hover:bg-orange-600"
                    : "border-gray-300 text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                }
                onClick={() => setCategoriaActiva(categoria.id)}
              >
                {categoria.nombre}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
