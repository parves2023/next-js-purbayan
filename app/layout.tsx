import "./globals.css"
import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { SiteHeader } from "@/components/site-header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import ScrollToTop from "@/components/scroll-to-top"
import Providers from "./providers"
import ErrorBoundary from "@/components/error-boundary"

// Optimize font loading
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: "Purbayan Properties Ltd. | Trusted Real Estate Developer in Dhaka",
  description:
    "Purbayan Properties Limited offers premium land projects, ready plots, and development services across Bangladesh with a focus on trust and transparency.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" data-theme="dark">
      <head>
     
      </head>
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <Providers>
          <ErrorBoundary>
            <div className="flex min-h-screen flex-col">
              <SiteHeader />
              <main className="flex-1">{children}</main>
              <Footer />
              <WhatsAppButton />
              <ScrollToTop />
            </div>
          </ErrorBoundary>
        </Providers>
      </body>
    </html>
  )
}
