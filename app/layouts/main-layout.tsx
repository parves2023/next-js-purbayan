import { MainHeader } from "@/components/main-header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import type { ReactNode } from "react"

interface MainLayoutProps {
  children: ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <MainHeader />
      <main className="min-h-screen bg-gray-900 text-white">{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
