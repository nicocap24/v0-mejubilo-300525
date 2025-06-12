"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { X, Phone } from "lucide-react"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-md mx-auto bg-white">
        <CardHeader className="relative pb-4">
          <Button variant="ghost" size="sm" className="absolute right-2 top-2 h-8 w-8 p-0" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
          <CardTitle className="text-center text-xl font-bold text-gray-800">Agendar con Nico</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <p className="text-gray-700 mb-6">
              Hola! Mi nombre es Nicolás Arrieta, tengo +10 años de experiencia en pensiones y soy agente de rentas
              vitalicias certificado por la CMF.
            </p>
            <p className="text-gray-700 mb-6">¿Quieres agendar una reunión conmigo para revisar tu caso específico?</p>
          </div>

          <div className="space-y-4">
            <a
              href="https://wa.me/56923935961"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <Phone className="w-5 h-5" />
              WhatsApp
            </a>
          </div>

          <div className="text-center pt-4">
            <Button variant="outline" onClick={onClose} className="px-8">
              Cerrar
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
