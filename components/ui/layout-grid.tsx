"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import Image from "next/image"

type Card = {
  id: number
  content: React.ReactNode | React.ReactNode[]
  className?: string
  thumbnail: string
  title?: string
  description?: string
}

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<number | null>(null)
  const [lastSelected, setLastSelected] = useState<number | null>(null)
  const isDark = true

  const handleClick = (id: number) => {
    setLastSelected(selected)
    setSelected(id === selected ? null : id)
  }

  return (
    <div className="w-full h-full p-1 md:p-4 lg:p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-full">
        {cards.map((card) => (
          <div key={card.id} className="relative h-full">
            <motion.div
              onClick={() => handleClick(card.id)}
              className={cn(
                "relative h-full w-full rounded-xl cursor-pointer overflow-hidden",
                selected === card.id ? "absolute inset-0 h-full w-full z-50" : selected !== null ? "opacity-30" : "",
              )}
              layout
              layoutId={`card-${card.id}`}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <BlurImage card={card} isSelected={selected === card.id} isDark={isDark} />
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}

const BlurImage = ({
  card,
  isSelected,
  isDark,
}: {
  card: Card
  isSelected: boolean
  isDark: boolean
}) => {
  const [loaded, setLoaded] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        setMousePosition({ x, y })
      }
    }

    const element = imageRef.current
    if (element) {
      element.addEventListener("mousemove", handleMouseMove)
      return () => {
        element.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [])

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const bgColor = "bg-gray-800"
  const textColor = "text-white"
  const textMutedColor = "text-white/80"

  return (
    <motion.div
      ref={imageRef}
      className={cn("relative h-full w-full overflow-hidden rounded-xl", bgColor, card.className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      layout
    >
      <motion.div
        className="absolute inset-0 z-10 opacity-0 backdrop-blur-xl"
        animate={{ opacity: isSelected ? 0 : 0 }}
      />
      <motion.div className={cn("relative h-full w-full", isSelected ? "overflow-auto" : "overflow-hidden")}>
        {/* Enhanced lens effect */}
        {isHovered && !isSelected && (
          <motion.div
            className="absolute pointer-events-none z-10 h-40 w-40 rounded-full overflow-hidden"
            style={{
              left: mousePosition.x - 80,
              top: mousePosition.y - 80,
              boxShadow: "0 0 20px rgba(255,255,255,0.3)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <div
              className="absolute inset-0 scale-150"
              style={{
                backgroundImage: `url(${card.thumbnail})`,
                backgroundPosition: `${-mousePosition.x * 1.5 + 120}px ${-mousePosition.y * 1.5 + 120}px`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            />
          </motion.div>
        )}

        {/* Thumbnail */}
        <motion.div
          className={cn("absolute inset-0 z-0", isSelected ? "hidden md:block" : "block")}
          initial={{ scale: 1 }}
          whileHover={{ scale: isSelected ? 1 : 1.05 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={card.thumbnail || "/placeholder.svg"}
            alt={card.title || "Gallery image"}
            fill
            className={cn(
              "h-full w-full object-cover transition-all duration-500",
              loaded ? "blur-none" : "blur-sm",
              isHovered && !isSelected ? "scale-110" : "scale-100",
            )}
            onLoad={() => setLoaded(true)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={95}
          />
        </motion.div>

        {/* Content */}
        <motion.div
          className={cn(
            "absolute inset-0 z-20 flex items-center justify-center p-6",
            isSelected ? "bg-black/80" : "bg-transparent",
          )}
          animate={{ opacity: isSelected ? 1 : 0 }}
        >
          {card.content}
        </motion.div>

        {/* Preview overlay */}
        {!isSelected && (
          <motion.div
            className={cn(
              "absolute inset-0 z-10 flex flex-col items-center justify-end p-4 opacity-0 hover:opacity-100 transition-opacity duration-300",
              "bg-black/30",
            )}
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            {card.title && <h3 className={`text-white text-lg font-bold mb-1 drop-shadow-md`}>{card.title}</h3>}
            {card.description && <p className="text-white/80 text-sm text-center drop-shadow-md">{card.description}</p>}
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  )
}
