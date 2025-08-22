"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold">
              <span className="text-gray-700">Me </span>
              <span className="text-orange-500">Jubilo</span>
            </span>
          </Link>

          <Link href="/evaluar">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
              Quiero jubilar
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
