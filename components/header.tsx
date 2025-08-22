"use client"

import Link from "next/link"

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold">
              <span className="text-gray-700">Me</span>
              <span className="text-orange-500">Jubilo</span>
            </span>
          </Link>
          <Link
            href="/evaluar"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
          >
            Quiero jubilar
          </Link>
        </div>
      </div>
    </header>
  )
}
