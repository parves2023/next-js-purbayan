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
    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-white">
      Welcome to Purbayan City — 500 Acres of Visionary Living
    </h2>
    <p className="text-lg text-gray-300 max-w-4xl mx-auto text-center mb-8">
      Crafted by Purbayan Properties Limited, Purbayan City is not just a residential development — it's a revolution in modern, sustainable urban living. Near RAJUK Purbachal New Town and just 30 minutes from Kuril, this eco-conscious township offers rare connectivity, thoughtful design, and community-first planning.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
      <div className="bg-gray-800 p-6 rounded-lg text-center">
        <h3 className="text-xl font-bold mb-3 text-amber-500">Master-Planned Township</h3>
        <p className="text-gray-300">
          Spread across 500 acres with Blocks A–D, government roads, metro rail links, and just 20 plots left in Block A — Purbayan City is your gateway to modern living.
        </p>
      </div>
      <div className="bg-gray-800 p-6 rounded-lg text-center">
        <h3 className="text-xl font-bold mb-3 text-amber-500">Nature Meets Innovation</h3>
        <p className="text-gray-300">
          Eco-conscious design with green corridors, airflow-focused layouts, and lush breathing spaces — for a life reconnected with nature.
        </p>
      </div>
      <div className="bg-gray-800 p-6 rounded-lg text-center">
        <h3 className="text-xl font-bold mb-3 text-amber-500">Future-Ready Investment</h3>
        <p className="text-gray-300">
          Metro rail access, 5-minute Dhaka–Sylhet Highway link, and rising nearby landmarks make this a smart and secure investment for your future.
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
