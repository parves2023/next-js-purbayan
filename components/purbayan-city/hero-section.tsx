"use client"

import OptimizedImage from "@/components/optimized-image"

export default function PurbayanCityHero() {
  return (
    <section className="relative h-[70vh]">
      <OptimizedImage
        src="https://i.ibb.co/7d2B3Hym/MASTERPLAN.png"
        alt="Purbayan City"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Purbayan City</h1>
        <p className="text-lg md:text-xl max-w-3xl">
          A masterpiece of thoughtful design and sustainable living by Purbayan Properties Limited
        </p>
      </div>
    </section>
  )
}
