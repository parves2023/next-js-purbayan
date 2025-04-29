import { SiteHeader } from "@/components/site-header"
import HeroSection from "@/components/hero-section"
import FeatureCards from "@/components/feature-cards"
import ScrollableCards from "@/components/scrollable-cards"

export default function Home() {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <HeroSection />
      <FeatureCards />
      <ScrollableCards />
    </main>
  )
}
