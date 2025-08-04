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

 const cards: CardData[] = [
    {
      title: "Elegant Residences",
      description: "Crafted for comfort and luxury in every detail.",
      image: "https://i.ibb.co/zWF0sZpM/purbayan-slider-18.jpg",
    },
    {
      title: "Scenic Neighborhoods",
      description: "Where nature meets modern living.",
      image: "https://i.ibb.co/cc5FBkQ5/purbayan-slider-19.jpg",
    },
    {
      title: "Open Green Spaces",
      description: "Breathe in the serenity of well-planned landscapes.",
      image: "https://i.ibb.co/nNmsZKQK/purbayan-slider-20.jpg",
    },
    {
      title: "Urban Excellence",
      description: "Modernity redefined through thoughtful design.",
      image: "https://i.ibb.co/LXJ5nyCq/purbayan-slider-21.jpg",
    },
    {
      title: "Smart Architecture",
      description: "Designed for smarter living and sustainability.",
      image: "https://i.ibb.co/LXF6SDxS/purbayan-slider-1.jpg",
    },
    {
      title: "Family-Friendly Living",
      description: "A perfect blend of community and privacy.",
      image: "https://i.ibb.co/q3STQQ65/purbayan-slider-2.jpg",
    },
    {
      title: "Vibrant Lifestyle",
      description: "Live where life feels like a vacation.",
      image: "https://i.ibb.co/WvbgRpmB/purbayan-slider-3.jpg",
    },
    {
      title: "Night View Brilliance",
      description: "Experience city lights in their full glory.",
      image: "https://i.ibb.co/s9Kvb4Km/purbayan-slider-4.jpg",
    },
  ];


  useEffect(() => {
    if (inView) {
      setIsVisible(true)
    }
  }, [inView])

  return (
    <section className="overflow-hidden bg-muted/30 py-10 group" ref={ref}>
      <div className="relative w-full ">
        <div
          className={`flex space-x-4 ${
            isVisible ? "animate-infinite-scroll group-hover:[animation-play-state:paused]" : ""
          }`}
        >
          {[...cards, ...cards].map((card, index) => (
            <div key={index} className="relative w-[280px] md:w-[600px] h-[360px] flex-shrink-0 rounded-xl overflow-hidden">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
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
