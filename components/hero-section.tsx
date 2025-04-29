"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const [currentBg, setCurrentBg] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  const backgrounds = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/colorful-playground-lunch-time_1048944-11160375.jpg-HiIi064uUj4frEtJgWnxK5JUVDUX7e.jpeg", // Playground image
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2865.jpg-V4GVGRyIwm3Kz89SUrHh6Kpy4dVpJs.jpeg", // Modern buildings image
    "/placeholder.svg?height=1080&width=1920", // Placeholder as third image
  ]

  useEffect(() => {
    setIsLoaded(true)
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length)
    }, 3000) // Change every 3 seconds

    return () => clearInterval(interval)
  }, [backgrounds.length])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {backgrounds.map((bg, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentBg === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={`absolute inset-0 scale-110 transition-transform duration-3000 ${
              currentBg === index ? "animate-zoom-in" : ""
            }`}
          >
            <Image
              src={bg || "/placeholder.svg"}
              alt={`Background ${index + 1}`}
              fill
              priority={index === 0}
              className="object-cover"
              sizes="100vw"
            />
          </div>
          {/* Overlay to improve text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60"></div>
        </div>
      ))}

      <div
        className={`relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">Purbayan City</h1>
        <p className="text-xl md:text-2xl max-w-2xl mb-8 drop-shadow-md">
        Modern living spaces designed for comfort and luxury in the heart of Bangladesh.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">Explore Our Spaces</Button>
          <Button
            variant="outline"
            className="bg-white/20 hover:bg-white/30 text-white border-white px-8 py-6 text-lg backdrop-blur-sm"
          >
            View Locations
          </Button>
        </div>
      </div>
    </section>
  )
}
