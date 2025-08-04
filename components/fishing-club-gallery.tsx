"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import ErrorBoundary from "./error-boundary"

interface GalleryImage {
  src: string
  alt: string
  className?: string
}

export default function FishingClubGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryImages: GalleryImage[] = [
    {
      src: "https://i.ibb.co/spRvGwP0/12.jpg",
      alt: "Fishing Club Main View",
      className: "row-span-2 col-span-1",
    },
    {
      src: "https://i.ibb.co/5gFS98tT/7.jpg",
      alt: "Fishing Club Lake",
      className: "row-span-1 col-span-2",
    },
    {
      src: "https://i.ibb.co/PzWF9T8y/2.jpg",
      alt: "Fishing Activities",
      className: "row-span-1 col-span-1",
    },
    {
      src: "https://i.ibb.co/q3kZYgTw/3.jpg",
      alt: "Fishing Club Facilities",
      className: "row-span-1 col-span-1",
    },
  ]

  const openModal = (src: string) => {
    setSelectedImage(src)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setSelectedImage(null)
    document.body.style.overflow = "auto"
  }

  return (
    <ErrorBoundary>
      <div className="w-full">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[250px]">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={cn(
                "relative overflow-hidden rounded-lg cursor-pointer transition-transform duration-300 hover:scale-[1.02]",
                image.className,
              )}
              onClick={() => openModal(image.src)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                onError={(e) => {
                  // Fallback to placeholder if image fails to load
                  const target = e.target as HTMLImageElement
                  target.src = "/placeholder.png"
                }}
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white p-4 font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
          >
            <div className="relative max-w-5xl w-full max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
              <div className="relative h-[80vh]">
                <Image
                  src={selectedImage || "/placeholder.svg"}
                  alt="Gallery image"
                  fill
                  className="object-contain"
                  sizes="100vw"
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    const target = e.target as HTMLImageElement
                    target.src = "/placeholder.png"
                  }}
                />
              </div>
              <button
                className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2"
                onClick={closeModal}
                aria-label="Close gallery"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </ErrorBoundary>
  )
}
