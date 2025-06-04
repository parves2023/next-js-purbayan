import { SiteHeader } from "@/components/site-header"
import Footer from "@/components/footer"
import PurbayanGallery from "@/components/purbayan-gallery"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gallery | Purbayan Properties Limited",
  description:
    "Explore our gallery showcasing Purbayan Properties Limited's beautiful developments, amenities, and landscapes.",
}

// Define the gallery images with placeholder URLs
const galleryImages = [
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
  {
    src: "/placeholder.svg?height=800&width=1200",
    title: "Head Office",
    description: "Our corporate headquarters",
  },
  {
    src: "/placeholder.svg?height=800&width=1200",
    title: "Site Office",
    description: "Our on-site project office",
  },
]

export default function GalleryPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-gray-900 text-white pt-16">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8 text-center">Gallery</h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center mb-12">
              Explore our beautiful developments through our curated gallery of images showcasing Purbayan Properties
              Limited's projects, amenities, and landscapes.
            </p>

            <PurbayanGallery images={galleryImages} showViewAll={false} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
