"use client"

import { useEffect, useState, useRef } from "react"
import { useInView } from "react-intersection-observer"

interface CounterProps {
  end: number
  label: string
  duration?: number
  suffix?: string
}

function Counter({ end, label, duration = 2000, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const countingRef = useRef<NodeJS.Timeout | null>(null)
  const startTimeRef = useRef<number | null>(null)

  useEffect(() => {
    if (inView) {
      startTimeRef.current = Date.now()

      const animate = () => {
        if (!startTimeRef.current) return

        const elapsedTime = Date.now() - startTimeRef.current
        const progress = Math.min(elapsedTime / duration, 1)

        // Easing function for smoother animation
        const easedProgress = 1 - Math.pow(1 - progress, 3)

        setCount(Math.floor(easedProgress * end))

        if (progress < 1) {
          countingRef.current = setTimeout(animate, 16)
        } else {
          setCount(end)
        }
      }

      animate()
    }

    return () => {
      if (countingRef.current) {
        clearTimeout(countingRef.current)
      }
    }
  }, [inView, end, duration])

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-500 mb-2">
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-lg text-gray-300">{label}</div>
    </div>
  )
}

export default function CounterSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Purbayan City in Numbers</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Our development features premium residential and commercial units with extensive green and lake areas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Counter end={1510} label="Residential Units" />
          <Counter end={140} label="Commercial Units" />
          <Counter end={7330} label="Green Areas (Katha)" />
          <Counter end={3125} label="Lake Areas (Katha)" />
        </div>
      </div>
    </section>
  )
}
