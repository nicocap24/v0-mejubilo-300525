import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "sonner"
import Script from "next/script"
import { Suspense } from "react"

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
        {/* Google Analytics */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-WS9ZZVX576" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WS9ZZVX576');
          `}
        </Script>

        {/* Google AdSense */}
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
        <link rel="icon" href="/favicon.png" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <Suspense fallback={null}>{children}</Suspense>
        <Toaster position="top-center" />
      </body>
    </html>
  )
}
