import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "sonner"
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
        {/* MetaMask Error Suppression - Improved Version */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            // Direct script injection for earliest possible execution
            (function() {
              // Override console.error before any other scripts run
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
                  // Completely suppress MetaMask-related errors
                  return;
                }
                originalConsoleError.apply(console, args);
              };

              // Prevent unhandled promise rejections from MetaMask
              window.addEventListener('unhandledrejection', function(event) {
                if (
                  event.reason && 
                  (String(event.reason).includes('MetaMask') ||
                   String(event.reason).includes('ChromeTransport') ||
                   String(event.reason).includes('connectChrome'))
                ) {
                  event.preventDefault();
                  event.stopPropagation();
                }
              }, true);

              // Prevent general errors from MetaMask
              window.addEventListener('error', function(event) {
                if (
                  event.message && 
                  (event.message.includes('MetaMask') || 
                   event.message.includes('ChromeTransport') ||
                   event.message.includes('connectChrome'))
                ) {
                  event.preventDefault();
                  event.stopPropagation();
                  return false;
                }
              }, true);

              // Mock ethereum object if it doesn't exist to prevent errors
              if (typeof window !== 'undefined') {
                Object.defineProperty(window, 'ethereum', {
                  value: {
                    isMetaMask: false,
                    request: () => Promise.reject(new Error('MetaMask not installed')),
                    on: () => {},
                    removeListener: () => {},
                    autoRefreshOnNetworkChange: false,
                    _metamask: { isUnlocked: () => Promise.resolve(false) }
                  },
                  writable: false,
                  configurable: false
                });
              }
            })();
          `,
          }}
        />

        {/* Microsoft Clarity */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "rx0f3x9f27");
          `,
          }}
        />

        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5179832879235237"
          crossOrigin="anonymous"
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
