"use client"

import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

interface CardData {
  title: string
  description: string
  image: string
}

export default function ScrollableCards() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [isVisible, setIsVisible] = useState(false)

  // Use the specified images
  const cards: CardData[] = [
    {
      title: "Modern Playgrounds",
      description: "Safe and engaging play areas for children of all ages.",
      image: "https://i.ibb.co/9kfNX5Ny/1.jpg",
    },
    {
      title: "Urban Architecture",
      description: "Contemporary buildings designed for modern living.",
      image: "https://i.ibb.co/35TQW6Nz/2.jpg",
    },
    {
      title: "Indoor Activities",
      description: "Fun-filled activities for rainy days and all seasons.",
      image: "https://i.ibb.co/9kRTm9pW/3.jpg",
    },
    {
      title: "Outdoor Recreation",
      description: "Spaces for sports and outdoor enjoyment.",
      image: "https://i.ibb.co/ZzxxxZxC/12.jpg",
    },
    // Repeat the images for more cards
    {
      title: "Community Spaces",
      description: "Areas designed for social interaction and community building.",
      image: "https://i.ibb.co/9kfNX5Ny/1.jpg",
    },
    {
      title: "Learning Environments",
      description: "Educational spaces that inspire creativity.",
      image: "https://i.ibb.co/35TQW6Nz/2.jpg",
    },
    {
      title: "Green Spaces",
      description: "Natural areas for relaxation and connection with nature.",
      image: "https://i.ibb.co/9kRTm9pW/3.jpg",
    },
    {
      title: "Event Venues",
      description: "Spaces designed for gatherings and celebrations.",
      image: "https://i.ibb.co/ZzxxxZxC/12.jpg",
    },
  ]

  useEffect(() => {
    if (inView) {
      setIsVisible(true)
    }
  }, [inView])

  return (
    <section className="overflow-hidden bg-muted/30 py-10 group" ref={ref}>
      <div className="relative w-full">
        <div
          className={`flex space-x-4 ${
            isVisible ? "animate-infinite-scroll group-hover:[animation-play-state:paused]" : ""
          }`}
        >
          {[...cards, ...cards].map((card, index) => (
            <div key={index} className="relative h-[60vh] w-[280px] md:w-[600px] flex-shrink-0">
              <Image
                src={card.image || "/placeholder.svg"}
                alt={card.title}
                fill
                className="object-cover rounded-xl"
                sizes="(max-width: 768px) 280px, 600px"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
                <p className="text-white/80">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes infinite-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  )
}
