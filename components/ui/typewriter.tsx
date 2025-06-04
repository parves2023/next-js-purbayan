"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface TypewriterProps {
  words: string[]
  className?: string
  delay?: number
  loop?: boolean
}

export function Typewriter({ words, className, delay = 100, loop = true }: TypewriterProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(delay)

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentWord = words[currentWordIndex]

      if (isDeleting) {
        setCurrentText(currentWord.substring(0, currentText.length - 1))
        setTypingSpeed(delay / 2) // Faster when deleting
      } else {
        setCurrentText(currentWord.substring(0, currentText.length + 1))
        setTypingSpeed(delay)
      }

      // If word is complete
      if (!isDeleting && currentText === currentWord) {
        // Pause at the end of the word
        setTypingSpeed(2000)
        setIsDeleting(true)
      }
      // If word is deleted
      else if (isDeleting && currentText === "") {
        setIsDeleting(false)
        setCurrentWordIndex((prev) => (loop ? (prev + 1) % words.length : Math.min(prev + 1, words.length - 1)))
        setTypingSpeed(500) // Pause before typing next word
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [currentText, currentWordIndex, delay, isDeleting, loop, words])

  return (
    <span className={cn("inline-block", className)}>
      {currentText}
      <span className="animate-blink">|</span>
    </span>
  )
}
