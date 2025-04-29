import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import Slider from "@/components/slider"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <Slider />
    </main>
  )
}
