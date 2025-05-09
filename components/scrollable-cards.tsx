"use client"

import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import OptimizedImage from "./optimized-image"

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

  // Use actual images
  const cards: CardData[] = [
    {
      title: "Modern Playgrounds",
      description: "Safe and engaging play areas for children of all ages.",
      image: "https://i.ibb.co.com/9kfNX5Ny/1.jpg",
    },
    {
      title: "Urban Architecture",
      description: "Contemporary buildings designed for modern living.",
      image: "https://i.ibb.co.com/35TQW6Nz/2.jpg",
    },
    {
      title: "Indoor Activities",
      description: "Fun-filled activities for rainy days and all seasons.",
      image: "https://i.ibb.co.com/9kRTm9pW/3.jpg",
    },
    {
      title: "Community Spaces",
      description: "Areas designed for social interaction and community building.",
      image: "https://i.ibb.co.com/K8RSWbh/4.jpg",
    },
    {
      title: "Outdoor Recreation",
      description: "Spaces for sports and outdoor enjoyment.",
      image: "https://i.ibb.co.com/W4gbXKJ1/5.jpg",
    },
    {
      title: "Learning Environments",
      description: "Educational spaces that inspire creativity.",
      image: "https://i.ibb.co.com/xq3gh1St/6.jpg",
    },
    {
      title: "Green Spaces",
      description: "Natural areas for relaxation and connection with nature.",
      image: "https://i.ibb.co.com/fdk1gsLQ/8.jpg",
    },
    {
      title: "Event Venues",
      description: "Spaces designed for gatherings and celebrations.",
      image: "https://i.ibb.co.com/bg0npVCN/9.jpg",
    },
    {
      title: "Art Installations",
      description: "Creative spaces that showcase local artistry.",
      image: "https://i.ibb.co.com/Z1drCrXv/10.jpg",
    },
    {
      title: "Water Features",
      description: "Beautiful aquatic elements for visual and sensory appeal.",
      image: "https://i.ibb.co.com/gMztSHhp/11.jpg",
    },
    {
      title: "Walking Trails",
      description: "Paths designed for exercise and exploration.",
      image: "https://i.ibb.co.com/ZzxxxZxC/12.jpg",
    },
    {
      title: "Seating Areas",
      description: "Comfortable spaces for rest and conversation.",
      image: "https://i.ibb.co.com/nNHwKqmS/13.jpg",
    },
    {
      title: "Public Art",
      description: "Community artwork that enhances the environment.",
      image: "https://i.ibb.co.com/k2PKm0kF/14.jpg",
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
            <div key={index} className="relative md:h-[70vh] h-[60vh] w-[280px] md:w-[500px] flex-shrink-0">
              <OptimizedImage
                src={card.image}
                alt={card.title}
                fill
                className="object-cover rounded-xl"
                sizes="(max-width: 768px) 280px, 600px"
                loading="lazy"
                fallbackSrc="/placeholder.png"
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
