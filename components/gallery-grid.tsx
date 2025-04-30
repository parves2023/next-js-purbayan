"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Play } from "lucide-react"

interface GalleryItem {
  id: string
  type: "image" | "video"
  thumbnail: string
  src: string
  title: string
}

export default function GalleryGrid() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)

  // Sample gallery items - in a real app, these would come from an API or CMS
  const galleryItems: GalleryItem[] = [
    {
      id: "1",
      type: "image",
      thumbnail: "/placeholder.svg?height=400&width=600",
      src: "/placeholder.svg?height=1200&width=1600",
      title: "Purbayan Properties Limited Aerial View",
    },
    {
      id: "2",
      type: "image",
      thumbnail: "/placeholder.svg?height=400&width=600",
      src: "/placeholder.svg?height=1200&width=1600",
      title: "Residential Area",
    },
    {
      id: "3",
      type: "video",
      thumbnail: "/placeholder.svg?height=400&width=600",
      src: "https://www.example.com/video.mp4", // Replace with actual video URL
      title: "Purbayan Properties Limited Tour",
    },
    {
      id: "4",
      type: "image",
      thumbnail: "/placeholder.svg?height=400&width=600",
      src: "/placeholder.svg?height=1200&width=1600",
      title: "Green Spaces",
    },
    {
      id: "5",
      type: "image",
      thumbnail: "/placeholder.svg?height=400&width=600",
      src: "/placeholder.svg?height=1200&width=1600",
      title: "Lake View",
    },
    {
      id: "6",
      type: "image",
      thumbnail: "/placeholder.svg?height=400&width=600",
      src: "/placeholder.svg?height=1200&width=1600",
      title: "Community Center",
    },
    {
      id: "7",
      type: "video",
      thumbnail: "/placeholder.svg?height=400&width=600",
      src: "https://www.example.com/video2.mp4", // Replace with actual video URL
      title: "Fishing Club Experience",
    },
    {
      id: "8",
      type: "image",
      thumbnail: "/placeholder.svg?height=400&width=600",
      src: "/placeholder.svg?height=1200&width=1600",
      title: "Commercial Hub",
    },
    {
      id: "9",
      type: "image",
      thumbnail: "/placeholder.svg?height=400&width=600",
      src: "/placeholder.svg?height=1200&width=1600",
      title: "Landscaped Gardens",
    },
  ]

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setLoading(false)
          return 100
        }
        return prev + 5
      })
    }, 200)

    return () => clearInterval(interval)
  }, [])

  const openModal = (item: GalleryItem) => {
    setSelectedItem(item)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setSelectedItem(null)
    document.body.style.overflow = "auto"
  }

  return (
    <div className="relative">
      {loading ? (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="relative w-32 h-32">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle
                className="text-gray-700"
                strokeWidth="8"
                stroke="currentColor"
                fill="transparent"
                r="42"
                cx="50"
                cy="50"
              />
              <circle
                className="text-amber-500"
                strokeWidth="8"
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
                r="42"
                cx="50"
                cy="50"
                strokeDasharray={264}
                strokeDashoffset={264 - (progress / 100) * 264}
              />
            </svg>
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <span className="text-2xl font-bold text-white">{progress}%</span>
            </div>
          </div>
          <p className="mt-4 text-gray-300">Loading gallery...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="relative h-64 rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => openModal(item)}
            >
              <Image
                src={item.thumbnail || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {item.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-amber-500 rounded-full p-3 bg-opacity-80">
                    <Play className="h-8 w-8 text-white" />
                  </div>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                  <h3 className="text-white font-bold">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="relative max-w-5xl w-full max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            {selectedItem.type === "image" ? (
              <div className="relative h-[80vh]">
                <Image
                  src={selectedItem.src || "/placeholder.svg"}
                  alt={selectedItem.title}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
            ) : (
              <div className="relative aspect-video">
                <video src={selectedItem.src} controls className="w-full h-full" autoPlay>
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
            <button className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2" onClick={closeModal}>
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
  )
}
