"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function BankAnimation() {
  const [isDestroyed, setIsDestroyed] = useState(false)
  const [showHammer, setShowHammer] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  const handleBankClick = () => {
    if (!isClicked) {
      setIsClicked(true)
      setShowHammer(true)
      
      setTimeout(() => {
        setIsDestroyed(true)
      }, 1000)
    }
  }

  return (
    <div className="relative w-96 h-64 flex items-center justify-center cursor-pointer" onClick={handleBankClick}>
      {/* Hammer */}
      {showHammer && (
        <div 
          className={`absolute -top-20 left-1/2 transform -translate-x-1/2 z-20 transition-all duration-1000 ${
            isDestroyed ? 'translate-y-32 rotate-45' : 'translate-y-0'
          }`}
        >
          <div className="w-16 h-32 bg-amber-800 rounded-lg relative shadow-lg">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-20 h-16 bg-gray-600 rounded-lg shadow-xl"></div>
          </div>
        </div>
      )}

      {/* Bank Building */}
      <div className={`relative transition-all duration-1000 ${isDestroyed ? 'opacity-0 scale-0 rotate-12' : 'opacity-100 scale-100'} hover:scale-105`}>
        <Image
          src="/images/bank.webp"
          alt="Traditional Bank"
          width={300}
          height={200}
          className="drop-shadow-2xl"
          priority
        />
      </div>

      {/* Destruction Particles */}
      {isDestroyed && (
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-gray-400 rounded animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random() * 2}s`,
                backgroundColor: ['#94a3b8', '#64748b', '#475569', '#334155'][Math.floor(Math.random() * 4)]
              }}
            />
          ))}
        </div>
      )}

      {/* Click hint */}
      {!isClicked && (
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-gray-600 animate-pulse">
          👆 Haz clic aquí
        </div>
      )}
    </div>
  )
}
