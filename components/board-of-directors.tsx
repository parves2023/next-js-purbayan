"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Director {
  id: string
  name: string
  title: string
  image: string
  bio: string
  linkedin?: string
  email?: string
}

export default function BoardOfDirectors() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const directors: Director[] = [
    {
      id: "director-1",
      name: "Samsuddin Ahmed",
      title: "Chairman",
      image: "/placeholder.svg?height=400&width=400",
      bio: "With over 30 years of experience in real estate development, Mr. Rahman has led Purbayan Group to become one of the leading developers in Bangladesh.",
      linkedin: "https://linkedin.com",
      email: "chairman@purbayanbd.com",
    },
    {
      id: "director-2",
      name: "Fatima Begum",
      title: "Managing Director",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Ms. Begum oversees all operational aspects of Purbayan Group, ensuring the highest standards of quality and customer satisfaction.",
      linkedin: "https://linkedin.com",
      email: "md@purbayanbd.com",
    },
    {
      id: "director-3",
      name: "Kamal Hossain",
      title: "Director of Finance",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Mr. Hossain brings 20 years of financial expertise to ensure the sustainable growth and financial stability of all Purbayan projects.",
      linkedin: "https://linkedin.com",
      email: "finance@purbayanbd.com",
    },
    {
      id: "director-4",
      name: "Nasreen Khan",
      title: "Director of Marketing",
      image: "/placeholder.svg?height=400&width=400",
      bio: "With a background in international marketing, Ms. Khan leads our strategic marketing initiatives and brand development.",
      linkedin: "https://linkedin.com",
      email: "marketing@purbayanbd.com",
    },
    {
      id: "director-5",
      name: "Rafiq Islam",
      title: "Director of Operations",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Mr. Islam ensures the timely execution of all projects while maintaining the highest standards of quality and safety.",
      linkedin: "https://linkedin.com",
      email: "operations@purbayanbd.com",
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
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Board of Directors</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Meet the leadership team behind Purbayan Group, dedicated to creating exceptional developments and
            communities.
          </p>
        </div>

        <div className="flex items-center justify-end mb-6">
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="rounded-full border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Scroll left</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="rounded-full border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white"
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Scroll right</span>
            </Button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className={`flex space-x-6 overflow-x-auto pb-8 scrollbar-hide transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {directors.map((director) => (
            <Card
              key={director.id}
              className="flex-shrink-0 w-[280px] md:w-[320px] bg-gray-800 border-gray-700 overflow-hidden"
            >
              <div className="relative h-80 w-full bg-gray-700">
                <Image
                  src={director.image || "/placeholder.svg"}
                  alt={director.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">{director.name}</h3>
                <p className="text-amber-500 font-medium mb-4">{director.title}</p>
                <p className="text-gray-300 text-sm mb-4">{director.bio}</p>
                <div className="flex space-x-2">
                  {director.linkedin && (
                    <a
                      href={director.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-amber-500 transition-colors"
                    >
                      <Linkedin size={18} />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  )}
                  {director.email && (
                    <a
                      href={`mailto:${director.email}`}
                      className="text-gray-400 hover:text-amber-500 transition-colors"
                    >
                      <Mail size={18} />
                      <span className="sr-only">Email</span>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
