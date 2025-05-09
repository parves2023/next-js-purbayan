"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const [currentBg, setCurrentBg] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  const backgrounds = [
    "https://i.ibb.co.com/p6k6Jm83/Purbayan1banner.jpg", 
    "https://i.ibb.co.com/PvK2H990/Purbayan2banner.jpg", 
  ]

  useEffect(() => {
    setIsLoaded(true)
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [backgrounds.length])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {backgrounds.map((bg, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            currentBg === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={`absolute inset-0 ${
              currentBg === index ? "animate-continuous-zoom" : ""
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60"></div>
        </div>
      ))}

      <div
        className={`relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">Purbayan Properties Limited</h1>
        <p className="text-xl md:text-2xl max-w-2xl mb-8 drop-shadow-md">
          Modern living spaces designed for comfort and luxury in the heart of Bangladesh.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="bg-[#f8c927] hover:bg-[#fe584e] text-black px-8 py-6 text-lg">Explore Our Spaces</Button>
          <Button
            variant="outline"
            className="bg-white/20 hover:bg-white/30 text-white border-white px-8 py-6 text-lg backdrop-blur-sm"
          >
            View Locations
          </Button>
        </div>
      </div>

      <style jsx global>{`
        @keyframes continuous-zoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.15);
          }
        }
        .animate-continuous-zoom {
          animation: continuous-zoom 5000ms linear forwards;
        }
      `}</style>
    </section>
  )
}