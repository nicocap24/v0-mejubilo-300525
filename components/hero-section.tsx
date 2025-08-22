"use client"

import Link from "next/link"
import { useState } from "react"
import Image from "next/image"

export function HeroSection() {
  const [showWorkingForever, setShowWorkingForever] = useState(false)

  if (showWorkingForever) {
    return (
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/new-landscape-background.png')",
        }}
      >
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md mx-4 text-center">
          <div className="mb-6">
            <Image
              src="/images/working-forever-meme.png"
              alt="Working forever meme"
              width={200}
              height={200}
              className="mx-auto rounded-full"
            />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Buena suerte con eso.</h2>
          <p className="text-gray-600 mb-6">Te esperamos cuando estés listo</p>
          <button
            onClick={() => setShowWorkingForever(false)}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Volver
          </button>
        </div>
      </div>
    )
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/new-landscape-background.png')",
      }}
    >
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md mx-4 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Ya te quieres <span className="text-orange-500">jubilar</span> ?
        </h1>
        <p className="text-2xl mb-8">👇</p>

        <div className="space-y-4">
          <Link
            href="/simulador-simple"
            className="block w-full bg-orange-500 hover:bg-orange-600 text-white py-4 px-6 rounded-lg text-xl font-bold transition-colors"
          >
            Si 😎
          </Link>

          <button
            onClick={() => setShowWorkingForever(true)}
            className="block w-full bg-gray-500 hover:bg-gray-600 text-white py-4 px-6 rounded-lg text-xl font-bold transition-colors"
          >
            No todavía 😒
          </button>
        </div>
      </div>
    </div>
  )
}
