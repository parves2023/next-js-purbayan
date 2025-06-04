import { Suspense } from "react"
import HeroSection from "@/components/hero-section"
import OurProjects from "@/components/our-projects"
import HomeSections from "@/components/home-sections"
import PartnerSection from "@/components/partner-section"
import CampaignBanner from "@/components/Campain-Banner"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Purbayan Properties Limited | Premium Land Development in Bangladesh",
  description:
    "Purbayan Properties Limited offers premium land development projects, modern living spaces, and exclusive amenities including a fishing club in Bangladesh. Trusted real estate developer since 2010.",
  alternates: {
    canonical: "https://purbayanbd.com",
  },
  openGraph: {
    title: "Purbayan Properties Limited | Premium Land Development in Bangladesh",
    description:
      "Purbayan Properties Limited offers premium land development projects, modern living spaces, and exclusive amenities including a fishing club in Bangladesh.",
    url: "https://purbayanbd.com",
    siteName: "Purbayan Properties Limited",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Purbayan Properties Limited - Premium Real Estate Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Purbayan Properties Limited | Premium Land Development in Bangladesh",
    description:
      "Purbayan Properties Limited offers premium land development projects, modern living spaces, and exclusive amenities including a fishing club in Bangladesh.",
    images: ["/og-image.jpg"],
  },
}

export default function Home() {
  return (
    <>
      <HeroSection />


   
     
   

      <section id="about-section" className="py-16">
    
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Welcome to Purbayan Properties Limited</h2>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto text-center mb-8">
            Purbayan Properties Limited is a premier real estate developer in Bangladesh, committed to creating
            exceptional residential and commercial spaces that enhance quality of life and provide excellent investment
            opportunities. With decades of experience and a commitment to quality, we deliver projects that stand the
            test of time.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-3 text-amber-500">Quality Construction</h3>
              <p className="text-gray-300">
                We use premium materials and adhere to international construction standards to ensure durability and
                safety.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-3 text-amber-500">Prime Locations</h3>
              <p className="text-gray-300">
                Our properties are strategically located in areas with excellent connectivity and growth potential.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-3 text-amber-500">Customer Satisfaction</h3>
              <p className="text-gray-300">
                We prioritize customer needs and provide transparent, hassle-free property buying experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="h-96 bg-gray-800 animate-pulse"></div>}>
         
        <OurProjects />
      </Suspense>



      <Suspense fallback={<div className="h-96 bg-gray-800 animate-pulse"></div>}>
        <HomeSections />
      </Suspense>
      <PartnerSection />
    </>
  )
}
