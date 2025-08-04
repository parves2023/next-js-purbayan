import { SiteHeader } from "@/components/site-header"
import PurbayanGallery from "@/components/purbayan-gallery"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Purbayan City Gallery | Purbayan Properties Limited",
  description: "Explore our gallery showcasing Purbayan City's beautiful development, amenities, and landscapes.",
}

// Define the Purbayan City gallery images with placeholder images
const purbayanCityImages = [
  {
    src: "/placeholder.svg?height=800&width=1200",
    title: "A NEW TOWNSHIP IS DEVELOPING",
    description: "The future of modern living in Bangladesh",
  },
  {
    src: "/placeholder.svg?height=800&width=1200",
    title: "PURBAYAN CITY LOCATION",
    description: "Strategically located for convenience and accessibility",
  },
  {
    src: "/placeholder.svg?height=800&width=1200",
    title: "CLUB HOUSE + CIVIC AMENITIES",
    description: "Modern facilities for recreation and community gatherings",
  },
  {
    src: "/placeholder.svg?height=800&width=1200",
    title: "ASSISTED HOME FOR SENIOR'S RESIDENTS",
    description: "Specialized care facilities for elderly residents",
  },
  {
    src: "/placeholder.svg?height=800&width=1200",
    title: "CENTRAL PARK",
    description: "A green oasis at the heart of the development",
  },
  {
    src: "/placeholder.svg?height=800&width=1200",
    title: "Modern Amenities 1",
    description: "State-of-the-art facilities for residents",
  },
  {
    src: "/placeholder.svg?height=800&width=1200",
    title: "Modern Amenities 2",
    description: "Thoughtfully designed spaces for modern living",
  },
  {
    src: "/placeholder.svg?height=800&width=1200",
    title: "Modern Amenities 3",
    description: "Contemporary infrastructure for comfort and convenience",
  },
  {
    src: "/placeholder.svg?height=800&width=1200",
    title: "Modern Amenities 4",
    description: "Premium features for an elevated lifestyle",
  },
  {
    src: "/placeholder.svg?height=800&width=1200",
    title: "Modern Amenities 5",
    description: "Innovative design elements throughout the community",
  },
]

export default function PurbayanCityGalleryPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-gray-900 text-white pt-16">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8 text-center">Purbayan City Gallery</h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center mb-12">
              Explore our beautiful development through our curated gallery of images showcasing Purbayan City's
              amenities, landscapes, and community spaces.
            </p>

            <PurbayanGallery images={purbayanCityImages} showViewAll={false} />
          </div>
        </section>
      </main>
    </>
  )
}
