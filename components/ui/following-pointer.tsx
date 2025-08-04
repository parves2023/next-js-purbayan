"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

type FollowingPointerProps = {
  children: React.ReactNode
  className?: string
}

export const FollowingPointer = ({ children, className = "" }: FollowingPointerProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.body.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.body.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [isVisible])

  return (
    <div className={`relative ${className}`}>
      {isVisible && (
        <motion.div
          className="pointer-events-none fixed z-50 h-6 w-6 rounded-full bg-amber-500/80 shadow-xl"
          animate={{
            x: position.x - 12,
            y: position.y - 12,
            scale: 1,
            opacity: 0.5,
          }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 15,
            mass: 0.1,
          }}
        />
      )}
      {children}
    </div>
  )
}
