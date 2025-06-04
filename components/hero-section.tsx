"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Typewriter } from "@/components/ui/typewriter"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Banner1 from "@/public/banner1.png"
import Banner2 from "@/public/banner2.png"
import Banner3 from "@/public/banner3.png"


export default function HeroSection() {
  const [currentBg, setCurrentBg] = useState(0)
  const [loaded, setLoaded] = useState(false)

  // Use actual banner images
  const backgrounds = [
    {
      src: Banner1,
      alt: "Purbayan Properties Banner 1",
    },
    {
      src: Banner2,
      alt: "Purbayan Properties Banner 2",
    },
    {
      src: Banner3,
      alt: "Purbayan Properties Banner 3",
    },
  ]

  const typewriterTexts = [
    "MEETS TIMELESS COMFORT",
    "Premium land development in Bangladesh",
    "350 acres of visionary living",
    "Where thoughtful design meets timeless comfort",
  ]

  // Simple image rotation
  useEffect(() => {
    if (!loaded) return

    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [loaded, backgrounds.length])

  // Simple image loading handler
  const handleImageLoad = () => {
    setLoaded(true)
  }

  return (
   <>
    <section className="relative h-screen w-full overflow-hidden bg-gray-900">
      {/* Initial background color while images load */}
      <div className="absolute inset-0 bg-black"></div>

      {/* Background images - simplified approach */}
      {backgrounds.map((bg, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentBg === index && loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={bg.src || "/placeholder.svg"}
            alt={bg.alt}
            fill
            priority={index === 0}
            quality={75}
            className="object-cover"
            sizes="100vw"
            onLoad={index === 0 ? handleImageLoad : undefined}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">Purbayan Properties Limited</h1>
        <p className="text-xl md:text-2xl max-w-2xl mb-8 drop-shadow-md">
          <Typewriter words={typewriterTexts} delay={80} />
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/contact" >
            <Button className="bg-[#f8c927] hover:bg-amber-600 text-black px-8 py-6 text-lg group">
              Book a free site visit
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link href="/locations">
            <Button
              variant="outline"
              className="bg-white/20 hover:bg-white/30 text-white border-white px-8 py-6 text-lg backdrop-blur-sm"
            >
              View Locations
            </Button>
          </Link>
        </div>
      </div>

      <style jsx global>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
      `}</style>
    </section>
    
     
        </>
  )
}
