"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Header() {
  return (
    <header className="w-full bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold">
                <span className="text-gray-800">Me </span>
                <span className="text-orange-500">Jubilo</span>
              </span>
            </Link>
          </div>

          {/* Navigation Menu - Only "Descubrelo" button */}
          <div className="flex items-center">
            <Link href="/evaluar">
              <Button variant="default" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full">
                Jubila
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
