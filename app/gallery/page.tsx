import { SiteHeader } from "@/components/site-header"
import Footer from "@/components/footer"
import type { Metadata } from "next"
import GalleryGrid from "@/components/gallery-grid"

export const metadata: Metadata = {
  title: "Gallery | Purbayan Properties Limited",
  description: "Explore our gallery showcasing Purbayan Properties Limited's beautiful developments and amenities.",
}

export default function GalleryPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-gray-900 text-white ">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8 text-center">Purbayan Properties Limited Gallery</h1>
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
