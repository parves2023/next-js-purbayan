"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import ErrorBoundary from "./error-boundary"

interface GalleryImage {
  src: string
  title: string
  description?: string
}

interface PurbayanGalleryProps {
  images: GalleryImage[]
  showViewAll?: boolean
}

export default function PurbayanGallery({ images, showViewAll = true }: PurbayanGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  const openModal = (image: GalleryImage) => {
    setSelectedImage(image)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setSelectedImage(null)
    document.body.style.overflow = "auto"
  }

  // Display only the first 6 images if showViewAll is true
  const displayImages = showViewAll ? images.slice(0, 6) : images

  return (
    <ErrorBoundary>
      <div className="space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayImages.map((image, index) => (
            <div
              key={index}
              className="relative h-64 rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => openModal(image)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                onError={(e) => {
                  // Fallback to placeholder if image fails to load
                  const target = e.target as HTMLImageElement
                  target.src = "/placeholder.png"
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                  <h3 className="text-white font-bold text-lg">{image.title}</h3>
                  {image.description && <p className="text-white/90 text-sm mt-1">{image.description}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>

        {showViewAll && images.length > 6 && (
          <div className="text-center mt-8">
            <Link href="/purbayan-city/gallery">
              <Button className="bg-amber-500 hover:bg-amber-600 text-black">View All Images</Button>
            </Link>
          </div>
        )}

        {/* Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="image-modal-title"
          >
            <div
              className="relative max-w-5xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-[80vh]">
                <Image
                  src={selectedImage.src || "/placeholder.svg"}
                  alt={selectedImage.title}
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
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4">
                <h3 id="image-modal-title" className="text-white font-bold text-lg">
                  {selectedImage.title}
                </h3>
                {selectedImage.description && <p className="text-white/90">{selectedImage.description}</p>}
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
