import type React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BackButton } from "@/components/ui/back-button"

interface PageLayoutProps {
  children: React.ReactNode
  showBackButton?: boolean
  backHref?: string
  className?: string
}

export function PageLayout({ children, showBackButton = true, backHref = "/", className = "" }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div
        className={`flex-1 bg-cover bg-center bg-no-repeat py-12 ${className}`}
        style={{
          backgroundImage: "url('/images/landscape-background.png')",
        }}
      >
        <div className="absolute inset-0 bg-white/20"></div>

        <div className="relative z-10 container mx-auto px-4">
          {showBackButton && <BackButton href={backHref} />}
          {children}
        </div>
      </div>

      <Footer />
    </div>
  )
}
