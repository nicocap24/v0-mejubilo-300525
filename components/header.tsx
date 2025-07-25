"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Me Jubilo
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Características
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Precios
            </a>
            <a href="#demo" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Demo
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
              Iniciar Sesión
            </Button>
            <Button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-6 py-2 rounded-xl font-semibold shadow-lg shadow-emerald-500/25">
              Comenzar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4 mt-4">
              <a href="#features" className="text-gray-600 hover:text-gray-900 font-medium">
                Características
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 font-medium">
                Precios
              </a>
              <a href="#demo" className="text-gray-600 hover:text-gray-900 font-medium">
                Demo
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" className="justify-start">
                  Iniciar Sesión
                </Button>
                <Button className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white justify-start">
                  Comenzar
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
