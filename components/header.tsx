"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Header() {
  return (
    <header className="w-full bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo - SIEMPRE lleva al home */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold">
                <span className="text-gray-800">Me </span>
                <span className="text-green-500">Jubilo</span>
              </span>
            </Link>
          </div>

          {/* Navigation Menu - SIEMPRE lleva a /evaluar */}
          <div className="flex items-center">
            <Link href="/evaluar">
              <Button
                variant="default"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full animate-dance cta-button hover:animate-none transition-all duration-300 transform hover:scale-105 shadow-lg"
                style={{
                  backgroundColor: "#22c55e",
                  boxShadow: "0 4px 15px rgba(34, 197, 94, 0.3)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#16a34a"
                  e.currentTarget.style.boxShadow = "0 6px 25px rgba(34, 197, 94, 0.6)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#22c55e"
                  e.currentTarget.style.boxShadow = "0 4px 15px rgba(34, 197, 94, 0.3)"
                }}
              >
                Quiero jubilar
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
