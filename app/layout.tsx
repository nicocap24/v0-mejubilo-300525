import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "sonner"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MeJubilo - Planifica tu jubilación",
  description: "Obtén tu evaluación 100% GRATUITA y online para planificar tu jubilación",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5179832879235237"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        {/* Script para prevenir errores de MetaMask */}
        <Script id="metamask-handling" strategy="beforeInteractive">
          {`
            // Prevenir errores de MetaMask
            window.addEventListener('error', function(e) {
              if (e.message && e.message.includes('MetaMask')) {
                console.log('Prevented MetaMask error logging');
                e.stopPropagation();
                e.preventDefault();
              }
            });
          `}
        </Script>
      </head>
      <body className={inter.className}>
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  )
}
