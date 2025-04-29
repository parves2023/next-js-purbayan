"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ScrollCard {
  title: string
  description: string
  image: string
}

export default function ScrollableCards() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const cards: ScrollCard[] = [
    {
      title: "Modern Playgrounds",
      description: "Safe and engaging play areas for children of all ages.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/colorful-playground-lunch-time_1048944-11160375.jpg-HiIi064uUj4frEtJgWnxK5JUVDUX7e.jpeg",
    },
    {
      title: "Urban Architecture",
      description: "Contemporary buildings designed for modern living.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2865.jpg-V4GVGRyIwm3Kz89SUrHh6Kpy4dVpJs.jpeg",
    },
    {
      title: "Indoor Activities",
      description: "Fun-filled activities for rainy days and all seasons.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Community Spaces",
      description: "Areas designed for social interaction and community building.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Educational Zones",
      description: "Spaces that combine learning with play for optimal development.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Nature Integration",
      description: "Blending natural elements with modern design principles.",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current
      const scrollAmount = direction === "left" ? -clientWidth / 2 : clientWidth / 2
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
      setTimeout(checkScrollButtons, 500)
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      },
    )

    if (scrollRef.current) {
      observer.observe(scrollRef.current)
      scrollRef.current.addEventListener("scroll", checkScrollButtons)
    }

    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("scroll", checkScrollButtons)
      }
      observer.disconnect()
    }
  }, [])

  return (
    <section className="py-16 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Explore Our Spaces</h2>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Scroll left</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Scroll right</span>
            </Button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className={`flex space-x-4 overflow-x-auto pb-4 scrollbar-hide transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {cards.map((card, index) => (
            <Card key={index} className="flex-shrink-0 w-[280px] md:w-[320px]">
              <div className="relative h-48 w-full">
                <Image src={card.image || "/placeholder.svg"} alt={card.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
