import { SiteHeader } from "@/components/site-header"
import HeroSection from "@/components/hero-section"
import FeatureCards from "@/components/feature-cards"
import ScrollableCards from "@/components/scrollable-cards"
import OurProjects from "@/components/our-projects"
import BoardOfDirectors from "@/components/board-of-directors"
import type { Metadata } from "next"
import Footer from "@/components/footer"
import CounterSection from "@/components/counter-section"
import ContactSection from "@/components/contact-section"
import WhatsAppButton from "@/components/whatsapp-button"
import ScrollToTop from "@/components/scroll-to-top"


export const metadata: Metadata = {
  title: "Purbayan Properties Limited | Premium Land Development in Bangladesh",
  description:
    "Purbayan Properties Limited offers premium land development projects, modern living spaces, and exclusive amenities including a fishing club in Bangladesh.",
}

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-gray-900 text-white">
        <HeroSection />
        {/* <FeatureCards /> */}
        <OurProjects />
        <CounterSection />
        <BoardOfDirectors />
        <ScrollableCards />
        <ContactSection />
      </main>
      <Footer />
          <WhatsAppButton />
              <ScrollToTop />
    </>
  )
}
