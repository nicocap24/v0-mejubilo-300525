"use client"

import type React from "react"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, ChevronDown, ChevronRight, User } from "lucide-react"
import { Logo } from "./logo"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false) // This would be determined by your auth state
  const [isAprendeOpen, setIsAprendeOpen] = useState(false)
  const [isAcercaDeOpen, setIsAcercaDeOpen] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isAprendeDesktopOpen, setIsAprendeDesktopOpen] = useState(false)
  const [isAcercaDeDesktopOpen, setIsAcercaDeDesktopOpen] = useState(false)
  const [isLoginDesktopOpen, setIsLoginDesktopOpen] = useState(false)

  const toggleAprendeMenu = () => {
    setIsAprendeOpen(!isAprendeOpen)
  }

  const toggleAcercaDeMenu = () => {
    setIsAcercaDeOpen(!isAcercaDeOpen)
  }

  const toggleLoginMenu = () => {
    setIsLoginOpen(!isLoginOpen)
  }

  const toggleAprendeDesktopMenu = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsAprendeDesktopOpen(!isAprendeDesktopOpen)
    setIsAcercaDeDesktopOpen(false)
    setIsLoginDesktopOpen(false)
  }

  const toggleAcercaDeDesktopMenu = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsAcercaDeDesktopOpen(!isAcercaDeDesktopOpen)
    setIsAprendeDesktopOpen(false)
    setIsLoginDesktopOpen(false)
  }

  const toggleLoginDesktopMenu = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsLoginDesktopOpen(!isLoginDesktopOpen)
    setIsAprendeDesktopOpen(false)
    setIsAcercaDeDesktopOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest(".desktop-menu-container")) {
        setIsAprendeDesktopOpen(false)
        setIsAcercaDeDesktopOpen(false)
        setIsLoginDesktopOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <header className="bg-white shadow-sm relative">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-orange-500 transition-colors">
              Home
            </Link>

            {/* Menú desplegable "Acerca de" */}
            <div className="relative desktop-menu-container">
              <button
                className="flex items-center text-gray-600 hover:text-orange-500 transition-colors"
                onClick={toggleAcercaDeDesktopMenu}
              >
                Acerca de
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div
                className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 ${
                  isAcercaDeDesktopOpen ? "block" : "hidden group-hover:block"
                }`}
              >
                <Link
                  href="/quienes-somos"
                  className="block px-4 py-2 text-gray-600 hover:bg-orange-50 hover:text-orange-500"
                >
                  Quienes Somos
                </Link>
                <Link
                  href="/nuestra-historia"
                  className="block px-4 py-2 text-gray-600 hover:bg-orange-50 hover:text-orange-500"
                >
                  Nuestra Historia
                </Link>
                <Link
                  href="/el-futuro-de-mejubilo"
                  className="block px-4 py-2 text-gray-600 hover:bg-orange-50 hover:text-orange-500"
                >
                  El Futuro de MeJubilo
                </Link>
                <Link
                  href="/en-que-creemos"
                  className="block px-4 py-2 text-gray-600 hover:bg-orange-50 hover:text-orange-500"
                >
                  En qué creemos
                </Link>
                <Link
                  href="/el-problema"
                  className="block px-4 py-2 text-gray-600 hover:bg-orange-50 hover:text-orange-500"
                >
                  El Problema
                </Link>
              </div>
            </div>

            <Link href="/precios" className="text-gray-600 hover:text-orange-500 transition-colors">
              Precios
            </Link>

            {/* Menú desplegable "Aprende" */}
            <div className="relative desktop-menu-container">
              <button
                className="flex items-center text-gray-600 hover:text-orange-500 transition-colors"
                onClick={toggleAprendeDesktopMenu}
              >
                Aprende
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div
                className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 ${
                  isAprendeDesktopOpen ? "block" : "hidden group-hover:block"
                }`}
              >
                <Link
                  href="/herramientas"
                  className="block px-4 py-2 text-gray-600 hover:bg-orange-50 hover:text-orange-500"
                >
                  Herramientas
                </Link>
                <Link
                  href="/biblioteca-previsional"
                  className="block px-4 py-2 text-gray-600 hover:bg-orange-50 hover:text-orange-500"
                >
                  Biblioteca Previsional
                </Link>
                <Link href="/blog" className="block px-4 py-2 text-gray-600 hover:bg-orange-50 hover:text-orange-500">
                  Blog
                </Link>
                <Link
                  href="/pension-analytics"
                  className="block px-4 py-2 text-gray-600 hover:bg-orange-50 hover:text-orange-500"
                >
                  Pension Analytics
                </Link>
              </div>
            </div>

            {/* Menú desplegable "Iniciar sesión" */}
            <div className="relative desktop-menu-container">
              {isLoggedIn ? (
                <>
                  <button
                    className="flex items-center text-gray-600 hover:text-orange-500 transition-colors"
                    onClick={toggleLoginDesktopMenu}
                  >
                    <User className="mr-1 h-4 w-4" />
                    Mi Cuenta
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  <div
                    className={`absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 ${
                      isLoginDesktopOpen ? "block" : "hidden group-hover:block"
                    }`}
                  >
                    <Link
                      href="/dashboard"
                      className="block px-4 py-2 text-gray-600 hover:bg-orange-50 hover:text-orange-500"
                    >
                      Mi Dashboard
                    </Link>
                    <Link
                      href="/leaderboard"
                      className="block px-4 py-2 text-gray-600 hover:bg-orange-50 hover:text-orange-500"
                    >
                      Leaderboard
                    </Link>
                    <Link
                      href="/perfil"
                      className="block px-4 py-2 text-gray-600 hover:bg-orange-50 hover:text-orange-500"
                    >
                      Mi Perfil
                    </Link>
                    <Link
                      href="/actividad"
                      className="block px-4 py-2 text-gray-600 hover:bg-orange-50 hover:text-orange-500"
                    >
                      Actividad
                    </Link>
                    <hr className="my-1" />
                    <button className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-orange-50 hover:text-orange-500">
                      Cerrar Sesión
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <button
                    className="flex items-center text-gray-600 hover:text-orange-500 transition-colors"
                    onClick={toggleLoginDesktopMenu}
                  >
                    <User className="mr-1 h-4 w-4" />
                    Iniciar sesión
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  <div
                    className={`absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 ${
                      isLoginDesktopOpen ? "block" : "hidden group-hover:block"
                    }`}
                  >
                    <Link
                      href="/login"
                      className="block px-4 py-2 text-gray-600 hover:bg-orange-50 hover:text-orange-500"
                    >
                      Iniciar sesión
                    </Link>
                    <Link
                      href="/register"
                      className="block px-4 py-2 text-gray-600 hover:bg-orange-50 hover:text-orange-500"
                    >
                      Registrarse
                    </Link>
                    <hr className="my-1" />
                    <Link
                      href="/leaderboard"
                      className="block px-4 py-2 text-gray-600 hover:bg-orange-50 hover:text-orange-500"
                    >
                      Leaderboard
                    </Link>
                  </div>
                </>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white pb-4 shadow-lg z-50">
          <nav className="container mx-auto px-4 flex flex-col space-y-4">
            <Link
              href="/"
              className="py-2 text-gray-600 hover:text-orange-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>

            {/* Menú desplegable "Acerca de" para móvil */}
            <div>
              <button
                className="flex items-center justify-between w-full py-2 text-gray-600 hover:text-orange-500 transition-colors"
                onClick={toggleAcercaDeMenu}
              >
                <span>Acerca de</span>
                {isAcercaDeOpen ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
              </button>

              {isAcercaDeOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  <Link
                    href="/quienes-somos"
                    className="block py-2 text-gray-600 hover:text-orange-500 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Quienes Somos
                  </Link>
                  <Link
                    href="/nuestra-historia"
                    className="block py-2 text-gray-600 hover:text-orange-500 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Nuestra Historia
                  </Link>
                  <Link
                    href="/el-futuro-de-mejubilo"
                    className="block py-2 text-gray-600 hover:text-orange-500 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    El Futuro de MeJubilo
                  </Link>
                  <Link
                    href="/en-que-creemos"
                    className="block py-2 text-gray-600 hover:text-orange-500 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    En qué creemos
                  </Link>
                  <Link
                    href="/el-problema"
                    className="block py-2 text-gray-600 hover:text-orange-500 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    El Problema
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/precios"
              className="py-2 text-gray-600 hover:text-orange-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Precios
            </Link>

            {/* Menú desplegable "Aprende" para móvil */}
            <div>
              <button
                className="flex items-center justify-between w-full py-2 text-gray-600 hover:text-orange-500 transition-colors"
                onClick={toggleAprendeMenu}
              >
                <span>Aprende</span>
                {isAprendeOpen ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
              </button>

              {isAprendeOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  <Link
                    href="/herramientas"
                    className="block py-2 text-gray-600 hover:text-orange-500 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Herramientas
                  </Link>
                  <Link
                    href="/biblioteca-previsional"
                    className="block py-2 text-gray-600 hover:text-orange-50 hover:text-orange-500"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Biblioteca Previsional
                  </Link>
                  <Link
                    href="/blog"
                    className="block py-2 text-gray-600 hover:text-orange-500 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Blog
                  </Link>
                  <Link
                    href="/pension-analytics"
                    className="block py-2 text-gray-600 hover:text-orange-500 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Pension Analytics
                  </Link>
                </div>
              )}
            </div>

            {/* Menú desplegable "Iniciar sesión" para móvil */}
            <div>
              <button
                className="flex items-center justify-between w-full py-2 text-gray-600 hover:text-orange-500 transition-colors"
                onClick={toggleLoginMenu}
              >
                <span className="flex items-center">
                  <User className="mr-1 h-4 w-4" />
                  {isLoggedIn ? "Mi Cuenta" : "Iniciar sesión"}
                </span>
                {isLoginOpen ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
              </button>

              {isLoginOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  {isLoggedIn ? (
                    <>
                      <Link
                        href="/dashboard"
                        className="block py-2 text-gray-600 hover:text-orange-500 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Mi Dashboard
                      </Link>
                      <Link
                        href="/leaderboard"
                        className="block py-2 text-gray-600 hover:text-orange-500 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Leaderboard
                      </Link>
                      <Link
                        href="/perfil"
                        className="block py-2 text-gray-600 hover:text-orange-500 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Mi Perfil
                      </Link>
                      <Link
                        href="/actividad"
                        className="block py-2 text-gray-600 hover:text-orange-500 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Actividad
                      </Link>
                      <button
                        className="block w-full text-left py-2 text-gray-600 hover:text-orange-500 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Cerrar Sesión
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        href="/login"
                        className="block py-2 text-gray-600 hover:text-orange-500 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Iniciar sesión
                      </Link>
                      <Link
                        href="/register"
                        className="block py-2 text-gray-600 hover:text-orange-500 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Registrarse
                      </Link>
                      <Link
                        href="/leaderboard"
                        className="block py-2 text-gray-600 hover:text-orange-500 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Leaderboard
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
