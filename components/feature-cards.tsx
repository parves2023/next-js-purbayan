"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

interface FeatureCard {
  title: string
  description: string
  image: string
  link: string
}

export default function FeatureCards() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const features: FeatureCard[] = [
    {
      title: "Modern Playgrounds",
      description: "State-of-the-art playground equipment designed for safety and fun.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/colorful-playground-lunch-time_1048944-11160375.jpg-HiIi064uUj4frEtJgWnxK5JUVDUX7e.jpeg",
      link: "/playgrounds",
    },
    {
      title: "Urban Spaces",
      description: "Contemporary urban environments that blend nature with architecture.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2865.jpg-V4GVGRyIwm3Kz89SUrHh6Kpy4dVpJs.jpeg",
      link: "/urban",
    },
    {
      title: "Indoor Activities",
      description: "Climate-controlled indoor spaces for year-round enjoyment.",
      image: "/placeholder.svg?height=400&width=600",
      link: "/indoor",
    },
    {
      title: "Educational Programs",
      description: "Learning experiences that combine education with entertainment.",
      image: "/placeholder.svg?height=400&width=600",
      link: "/education",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section ref={ref} className="py-16 bg-background">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Featured Spaces</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`overflow-hidden transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative h-48 w-full">
                <Image src={feature.image || "/placeholder.svg"} alt={feature.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="outline" className="w-full group">
                  Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
