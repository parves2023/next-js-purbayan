"use client"

import OptimizedImage from "@/components/optimized-image"

export default function PurbayanCityLocation() {
  return (
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#f8c927]">Strategic Location</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <OptimizedImage
              src="https://i.ibb.co/dwrpHJcw/PURBAYAN-CITY.png"
              alt="Purbayan City Location"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="text-lg text-gray-300 mb-6">
              Purbayan City, by Purbayan Properties Limited, is a well-planned residential project at Gutulia, Rupganj,
              Narayanganj District near Dhaka's RAJUK Purbachal New Town (RPNT), just 20 minutes from Kuril. Combining
              modern amenities with a serene environment, it offers an ideal investment for a comfortable and peaceful
              lifestyle.
            </p>
            <p className="text-lg text-gray-300">
              Located between the Dhaka-Sylhet Highway to the east and Shonpara Road (proposed 150 feet wide) to the
              west, Purbayan City ensures excellent connectivity. The Japan Economic Zone lies nearby, while the
              Shitalakshya River, Kanchan Bridge, and RPNT are only 4 km away. This clean and organized housing project
              features wide roads developed entirely on its own land, making it a perfect choice for sustainable and
              secure living.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
