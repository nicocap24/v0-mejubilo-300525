"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AlertCircle, Loader2 } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function AfpConnectionForm() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      // This would be where you'd handle the actual AFP connection
      // For demo purposes, we'll just simulate an error
      setError("No pudimos conectar con tu AFP. Por favor verifica tus credenciales e intenta nuevamente.")
    } catch (err) {
      setError("Ocurrió un error al conectar con tu AFP. Por favor intenta nuevamente.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="space-y-4">
        <div>
          <Label htmlFor="afp">Selecciona tu AFP</Label>
          <Select>
            <SelectTrigger className="border-gray-300 focus:ring-orange-500 focus:border-orange-500">
              <SelectValue placeholder="Selecciona tu AFP" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="habitat">AFP Habitat</SelectItem>
              <SelectItem value="provida">AFP ProVida</SelectItem>
              <SelectItem value="capital">AFP Capital</SelectItem>
              <SelectItem value="cuprum">AFP Cuprum</SelectItem>
              <SelectItem value="modelo">AFP Modelo</SelectItem>
              <SelectItem value="planvital">AFP PlanVital</SelectItem>
              <SelectItem value="uno">AFP Uno</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="rut">RUT</Label>
          <Input
            id="rut"
            placeholder="12.345.678-9"
            required
            className="border-gray-300 focus:ring-orange-500 focus:border-orange-500"
          />
          <p className="text-xs text-gray-500 mt-1">Ingresa tu RUT sin puntos y con guión (Ej: 12345678-9)</p>
        </div>

        <div>
          <Label htmlFor="password">Contraseña AFP</Label>
          <Input
            id="password"
            type="password"
            required
            className="border-gray-300 focus:ring-orange-500 focus:border-orange-500"
          />
          <p className="text-xs text-gray-500 mt-1">
            La misma contraseña que utilizas para ingresar al sitio de tu AFP
          </p>
        </div>
      </div>

      <div className="space-y-2">
        <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white" disabled={loading}>
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Conectando...
            </>
          ) : (
            "Conectar AFP"
          )}
        </Button>
        <p className="text-xs text-center text-gray-500">
          Tus credenciales están seguras. Utilizamos encriptación de nivel bancario y no almacenamos tu contraseña.
        </p>
      </div>
    </form>
  )
}
