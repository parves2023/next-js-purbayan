"use client"

import OptimizedImage from "@/components/optimized-image"

export default function PurbayanCityCentralPark() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#f8c927]">CENTRAL PARK AT ITS HEART</h2>
            <p className="text-lg text-gray-300">
              Purbayan City features a beautiful central park at its heart, providing residents with a serene natural
              space for relaxation, recreation, and community gatherings. This thoughtfully designed green area serves
              as the lungs of the development, offering fresh air and a connection to nature amidst the urban setting.
            </p>
            <p className="text-lg text-gray-300 mt-4">
              The central park includes walking paths, seating areas, and landscaped gardens that create a peaceful
              retreat for residents of all ages. It's a place where families can gather, children can play, and
              individuals can find moments of tranquility away from the hustle and bustle of daily life.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <OptimizedImage
              src="https://i.ibb.co/fYRVTSHt/CENTRAL-PARK.png"
              alt="Central Park"
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
