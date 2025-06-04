"use client"

import OptimizedImage from "@/components/optimized-image"

export default function PurbayanCityOverview() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#f8c927]">Purbayan City Overview</h2>
            <p className="text-lg text-gray-300 mb-6">
              Welcome to Purbayan City—a masterpiece of thoughtful design and sustainable living by Purbayan Properties
              Limited. Situated near Dhaka's RAJUK Purbachal New Town (RPNT) and just 20 minutes from Kuril, this
              residential project offers an unparalleled blend of modern civic amenities, serene natural surroundings,
              and meticulous planning.
            </p>
            <p className="text-lg text-gray-300">
              Spanning approximately 350 acres, Purbayan City stands as a testament to innovative town planning that
              harmonizes with the environment rather than overpowering it. Every aspect of the township has been
              designed with a deep respect for the region's ecology-evident in the preservation of native trees, the
              maintenance of natural landscapes, and the careful alignment of homes to the sun and wind paths.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <OptimizedImage
              src="https://i.ibb.co/cKtw5RXv/A-NEW-TOWNSHIP.png"
              alt="A NEW TOWNSHIP IS DEVELOPING"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
