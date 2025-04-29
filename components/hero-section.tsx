"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden pt-16">
      {/* Playground image as background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 scale-110 transition-transform duration-3000 animate-zoom-in">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/colorful-playground-lunch-time_1048944-11160375.jpg-HiIi064uUj4frEtJgWnxK5JUVDUX7e.jpeg"
            alt="Colorful playground with slides and swings"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* Overlay to improve text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60"></div>
        </div>
      </div>

      <div
        className={`relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">Fun & Safe Playground for Children</h1>
        <p className="text-xl md:text-2xl max-w-2xl mb-8 drop-shadow-md">
          Providing a colorful and exciting environment where children can play, learn, and grow together.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg">
            Explore Our Facilities
          </Button>
          <Button
            variant="outline"
            className="bg-white/20 hover:bg-white/30 text-white border-white px-8 py-6 text-lg backdrop-blur-sm"
          >
            View Programs
          </Button>
        </div>
      </div>
    </section>
  )
}
