"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface SlideProps {
  title: string
  description: string
  bgColor: string
}

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)

  const slides: SlideProps[] = [
    {
      title: "Safe Play Environment",
      description:
        "Our playground is designed with safety as the top priority, featuring soft surfaces and age-appropriate equipment.",
      bgColor: "bg-gradient-to-r from-green-700 to-green-900",
    },
    {
      title: "Educational Activities",
      description:
        "We combine fun with learning through our specially designed play activities that stimulate cognitive development.",
      bgColor: "bg-gradient-to-r from-blue-700 to-blue-900",
    },
    {
      title: "Inclusive Play Areas",
      description: "Our playground is accessible to children of all abilities, ensuring everyone can join in the fun.",
      bgColor: "bg-gradient-to-r from-red-700 to-red-900",
    },
  ]

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentSlide((prev) => (prev + 1) % slides.length)
      setTimeout(() => setIsAnimating(false), 500)
    }
  }

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
      setTimeout(() => setIsAnimating(false), 500)
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Preload all slide images when the slider comes into view
        }
      },
      { threshold: 0.1 },
    )

    if (sliderRef.current) {
      observer.observe(sliderRef.current)
    }

    return () => {
      if (sliderRef.current) {
        observer.unobserve(sliderRef.current)
      }
    }
  }, [])

  return (
    <section ref={sliderRef} className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Playground Features</h2>

        <div className="relative h-[400px] overflow-hidden rounded-xl">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex flex-col justify-center items-center p-8 transition-all duration-500 ease-in-out ${
                slide.bgColor
              } ${
                index === currentSlide
                  ? "opacity-100 translate-x-0"
                  : index < currentSlide
                    ? "opacity-0 -translate-x-full"
                    : "opacity-0 translate-x-full"
              }`}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{slide.title}</h3>
              <p className="text-xl text-white/90 max-w-2xl text-center">{slide.description}</p>
            </div>
          ))}

          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? "bg-white scale-125" : "bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}
