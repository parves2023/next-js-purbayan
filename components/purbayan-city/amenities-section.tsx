"use client"

import OptimizedImage from "@/components/optimized-image"

export default function PurbayanCityAmenities() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-[#f8c927]">MODERN AMENITIES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="relative h-64 rounded-lg overflow-hidden">
            <OptimizedImage
              src="https://i.ibb.co/ycVpPXmP/purbayan-city-adunik1.png"
              alt="Modern Amenities"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden">
            <OptimizedImage
              src="https://i.ibb.co/XrmfW8YV/purbayan-city-adunik2.png"
              alt="Modern Amenities"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden">
            <OptimizedImage
              src="https://i.ibb.co/0VRr0HbP/purbayan-city-adunik3.png"
              alt="Modern Amenities"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden">
            <OptimizedImage
              src="https://i.ibb.co/4gRmcYTy/purbayan-city-adunik4.png"
              alt="Modern Amenities"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden">
            <OptimizedImage
              src="https://i.ibb.co/HDCjrQQy/purbayan-city-adunik5.png"
              alt="Modern Amenities"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden">
            <OptimizedImage
              src="https://i.ibb.co/jv7x3cLS/CLUB-HOUSE.png"
              alt="Club House"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
