import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import { Toaster } from "sonner"
import { Suspense } from "react"

const montserrat = Montserrat({ subsets: ["latin"] })

// Cambiar el título del sitio
export const metadata: Metadata = {
  title: "Me Jubilo - Descubre tu pensión",
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
// Enhanced MetaMask Error Suppression
(function() {
  // Suppress console messages about MetaMask and ChromeTransport
  const originalConsoleError = console.error;
  console.error = function(...args) {
    const message = args.join(' ');
    if (
      message.includes('MetaMask') ||
      message.includes('ChromeTransport') ||
      message.includes('connectChrome') ||
      message.includes('extension not found') ||
      message.includes('ethereum') ||
      message.includes('chrome-extension') ||
      message.toLowerCase().includes('metamask')
    ) {
      // Completely suppress MetaMask-related errors
      return;
    }
    originalConsoleError.apply(console, args);
  };

  // Also suppress console.log messages related to MetaMask
  const originalConsoleLog = console.log;
  console.log = function(...args) {
    const message = args.join(' ');
    if (
      message.includes('MetaMask') ||
      message.includes('ChromeTransport') ||
      message.includes('connectChrome') ||
      message.includes('extension not found')
    ) {
      return;
    }
    originalConsoleLog.apply(console, args);
  };

  // Override console.warn as well
  const originalConsoleWarn = console.warn;
  console.warn = function(...args) {
    const message = args.join(' ');
    if (
      message.includes('MetaMask') ||
      message.includes('ChromeTransport') ||
      message.includes('connectChrome') ||
      message.includes('extension not found') ||
      message.includes('ethereum')
    ) {
      return;
    }
    originalConsoleWarn.apply(console, args);
  };

  // Prevent unhandled promise rejections from MetaMask
  window.addEventListener('unhandledrejection', function(event) {
    if (
      event.reason && 
      (String(event.reason).includes('MetaMask') ||
       String(event.reason).includes('ChromeTransport') ||
       String(event.reason).includes('connectChrome') ||
       String(event.reason).includes('extension not found'))
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
       event.message.includes('connectChrome') ||
       event.message.includes('extension not found'))
    ) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    }
  }, true);

  // Mock ethereum object more comprehensively
  if (typeof window !== 'undefined') {
    // Prevent any attempts to access ethereum
    Object.defineProperty(window, 'ethereum', {
      get: function() {
        return undefined;
      },
      set: function() {
        // Ignore attempts to set ethereum
      },
      configurable: false,
      enumerable: false
    });

    // Also prevent web3 access
    Object.defineProperty(window, 'web3', {
      get: function() {
        return undefined;
      },
      set: function() {
        // Ignore attempts to set web3
      },
      configurable: false,
      enumerable: false
    });
  }

  // Suppress any chrome extension related errors
  if (typeof chrome !== 'undefined' && chrome.runtime) {
    const originalSendMessage = chrome.runtime.sendMessage;
    chrome.runtime.sendMessage = function(...args) {
      try {
        return originalSendMessage.apply(this, args);
      } catch (error) {
        // Suppress chrome extension errors
        return Promise.resolve();
      }
    };
  }

  // Specifically handle ChromeTransport errors
  if (typeof window !== 'undefined') {
    // Create a dummy ChromeTransport object to prevent errors
    window.ChromeTransport = {
      connect: function() {
        return Promise.resolve({
          disconnect: function() {},
          on: function() {},
          send: function() {}
        });
      },
      connectChrome: function() {
        return Promise.resolve({
          disconnect: function() {},
          on: function() {},
          send: function() {}
        });
      }
    };
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
      <body className={montserrat.className}>
        <Suspense fallback={null}>{children}</Suspense>
        <Toaster position="top-center" />
      </body>
    </html>
  )
}
