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
        {/* Enhanced MetaMask error prevention */}
        <Script id="metamask-error-prevention" strategy="beforeInteractive">
          {`
            // Comprehensive MetaMask error prevention
            (function() {
              // Prevent MetaMask connection errors
              const originalConsoleError = console.error;
              console.error = function(...args) {
                const message = args.join(' ');
                if (
                  message.includes('MetaMask') ||
                  message.includes('ChromeTransport') ||
                  message.includes('connectChrome') ||
                  message.includes('extension not found') ||
                  message.includes('ethereum')
                ) {
                  // Silently ignore MetaMask-related errors
                  return;
                }
                originalConsoleError.apply(console, args);
              };

              // Prevent unhandled promise rejections from MetaMask
              window.addEventListener('unhandledrejection', function(event) {
                if (
                  event.reason && 
                  (event.reason.message || '').toLowerCase().includes('metamask')
                ) {
                  event.preventDefault();
                }
              });

              // Prevent general errors from MetaMask
              window.addEventListener('error', function(event) {
                if (
                  event.message && 
                  (event.message.includes('MetaMask') || 
                   event.message.includes('ChromeTransport') ||
                   event.message.includes('connectChrome'))
                ) {
                  event.stopPropagation();
                  event.preventDefault();
                }
              });

              // Mock ethereum object if it doesn't exist to prevent errors
              if (typeof window !== 'undefined' && !window.ethereum) {
                window.ethereum = {
                  isMetaMask: false,
                  request: () => Promise.reject(new Error('MetaMask not installed'))
                };
              }
            })();
          `}
        </Script>

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
