"use client"

import OptimizedImage from "./optimized-image"
import Link from "next/link"

export default function PartnerSection() {
  return (
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-[#f8c927]">Our Other Services</h2>

        {/* First Partner Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* First 2 columns - larger image */}
            <Link
              href="https://www.facebook.com/SNMLeathers"
              target="_blank"
              rel="noopener noreferrer"
              className="col-span-1 md:col-span-2 relative h-80 rounded-lg overflow-hidden block"
            >
              <OptimizedImage
                src="https://i.ibb.co.com/ZzYxxRXG/SNMLeathers-Banner.jpg"
                alt="SNM Leathers"
                fill
                quality={80}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">SNM Leathers</h3>
                <p className="text-white/80 mb-4">Premium leather products and accessories</p>
              </div>
            </Link>

            {/* Third column - smaller image */}
            <Link
              href="https://www.facebook.com/SNMLeathers"
              target="_blank"
              rel="noopener noreferrer"
              className="col-span-1 relative h-80 rounded-lg overflow-hidden block"
            >
              <OptimizedImage
                src="https://i.ibb.co.com/DPRbBt1W/SNMLeathers-Square.jpg"
                alt="SNM Leathers Products"
                fill
                quality={80}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <p className="text-white/80">Quality craftsmanship since 2010</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Second Partner Section */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* First column - smaller image */}
            <Link
              href="https://www.facebook.com/profile.php?id=61574103005992"
              target="_blank"
              rel="noopener noreferrer"
              className="col-span-1 relative h-80 rounded-lg overflow-hidden block"
            >
              <OptimizedImage
                src="https://i.ibb.co.com/21nLnMkv/Aloy-Physiotherapy-Centre-Square.png"
                alt="Aloy Physiotherapy Centre"
                fill
                quality={80}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <p className="text-white/80">Professional physiotherapy services</p>
              </div>
            </Link>

            {/* Last 2 columns - larger image */}
            <Link
              href="https://www.facebook.com/profile.php?id=61574103005992"
              target="_blank"
              rel="noopener noreferrer"
              className="col-span-1 md:col-span-2 relative h-80 rounded-lg overflow-hidden block"
            >
              <OptimizedImage
                src="https://i.ibb.co.com/G4phP27b/Aloy-Physiotherapy-Centre-Banner.jpg"
                alt="Aloy Physiotherapy Centre"
                fill
                quality={80}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Aloy Physiotherapy Centre</h3>
                <p className="text-white/80 mb-4">Professional healthcare services</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
