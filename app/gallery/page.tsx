import { SiteHeader } from "@/components/site-header"
import Footer from "@/components/footer"
import type { Metadata } from "next"
import GalleryGrid from "@/components/gallery-grid"

export const metadata: Metadata = {
  title: "Gallery | Purbayan City",
  description: "Explore our gallery showcasing Purbayan City's beautiful developments and amenities.",
}

export default function GalleryPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-gray-900 text-white pt-20">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8 text-center">Purbayan City Gallery</h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center mb-12">
              Explore our beautiful developments, amenities, and community through our curated gallery of images and
              videos.
            </p>

            <GalleryGrid />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
