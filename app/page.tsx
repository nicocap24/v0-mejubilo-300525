"use client"

import { useState } from "react"
import Sidebar from "@/components/sidebar"
import BankAnimation from "@/components/bank-animation"
import LearnSection from "@/components/learn-section"
import PensionCalculator from "@/components/pension-calculator"
import GovernancePortal from "@/components/governance-portal"
import SwapPage from "@/components/swap-page"
import { Button } from "@/components/ui/button"

type ActiveSection = 'home' | 'learn' | 'invest' | 'retire' | 'contribute' | 'swap'

export default function HomePage() {
  const [language, setLanguage] = useState<'es' | 'en'>('es')
  const [activeSection, setActiveSection] = useState<ActiveSection>('home')

  const translations = {
    es: {
      buyCapital: "Compra $CAPITAL",
      socialSecurityDead: "La seguridad social está muerta",
      learn: "Aprende",
      invest: "Invierte",
      retire: "Jubila",
      contribute: "Contribuye",
      clickToDestroy: "Haz clic para destruir el banco"
    },
    en: {
      buyCapital: "Buy $CAPITAL",
      socialSecurityDead: "Social security is dead",
      learn: "Learn",
      invest: "Invest",
      retire: "Retire",
      contribute: "Contribute",
      clickToDestroy: "Click to destroy the bank"
    }
  }

  const t = translations[language]

  const handleSectionClick = (section: ActiveSection) => {
    setActiveSection(section)
  }

  const renderMainContent = () => {
    switch (activeSection) {
      case 'learn':
        return <LearnSection language={language} />
      case 'retire':
        return <PensionCalculator language={language} />
      case 'contribute':
        return <GovernancePortal language={language} />
      case 'swap':
        return <SwapPage language={language} />
      default:
        return (
          <div className="flex-1 flex flex-col items-center justify-center min-h-[80vh]">
            <BankAnimation />
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 text-center mt-8 px-4">
              {t.socialSecurityDead}
            </h1>
            <p className="text-lg text-gray-600 mt-4">{t.clickToDestroy}</p>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(to bottom, #87CEEB 0%, #87CEEB 60%, #90EE90 60%, #228B22 100%)"
        }}
      />
      
      {/* Clouds */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-20 h-12 bg-white rounded-full opacity-80 animate-pulse"></div>
        <div className="absolute top-16 right-1/3 w-16 h-10 bg-white rounded-full opacity-70 animate-pulse delay-1000"></div>
        <div className="absolute top-8 right-1/4 w-24 h-14 bg-white rounded-full opacity-60 animate-pulse delay-2000"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 flex justify-between items-center p-6">
        <Button 
          onClick={() => setActiveSection('home')}
          variant="ghost"
          className="text-gray-800 hover:text-gray-600"
        >
          🏠 Inicio
        </Button>
        <Button 
          onClick={() => setActiveSection('swap')}
          className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold border-2 border-gray-600"
        >
          {t.buyCapital}
        </Button>
      </header>

      {/* Main Content */}
      <div className="flex relative z-10">
        {/* Sidebar */}
        <Sidebar 
          language={language} 
          setLanguage={setLanguage}
          translations={t}
          activeSection={activeSection}
          onSectionClick={handleSectionClick}
        />

        {/* Center Content */}
        {renderMainContent()}
      </div>
    </div>
  )
}
