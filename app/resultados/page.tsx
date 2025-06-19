"use client"

import { Button } from "@/components/ui/button"
import { useRouter, useSearchParams } from "next/navigation"

export default function ResultadosPage() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const nombre = searchParams.get("nombre")
  const saldoAFP = searchParams.get("saldoAFP")
  const email = searchParams.get("email")
  const fechaNacimiento = searchParams.get("fechaNacimiento")

  const handleRecalculate = () => {
    const params = new URLSearchParams({
      nombre: searchParams.get("nombre") || "",
      saldoAFP: searchParams.get("saldoAFP") || "",
      email: searchParams.get("email") || "",
      fechaNacimiento: searchParams.get("fechaNacimiento") || "",
      recalcular: "true",
    }).toString()
    router.push(`/evaluar?${params}`)
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Resultados</h1>
      <p>Nombre: {nombre}</p>
      <p>Saldo AFP: {saldoAFP}</p>
      <p>Email: {email}</p>
      <p>Fecha de Nacimiento: {fechaNacimiento}</p>

      <Button
        onClick={handleRecalculate}
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium"
      >
        Recalcular
      </Button>
    </div>
  )
}
