import { SiteHeader } from "@/components/site-header"
import type { Metadata } from "next"
import PurbayanCityHero from "@/components/purbayan-city/hero-section"
import PurbayanCityOverview from "@/components/purbayan-city/overview-section"
import PurbayanCityLocation from "@/components/purbayan-city/location-section"
import PurbayanCityAmenities from "@/components/purbayan-city/amenities-section"
import PurbayanCityAssistedHome from "@/components/purbayan-city/assisted-home-section"
import PurbayanCityCentralPark from "@/components/purbayan-city/central-park-section"
import PurbayanCityProjectGlance from "@/components/purbayan-city/project-glance-section"
import PurbayanCityGallery from "@/components/purbayan-city/gallery-section"

export const metadata: Metadata = {
  title: "Purbayan City | Purbayan Properties Limited",
  description:
    "Explore Purbayan City - a masterpiece of thoughtful design and sustainable living by Purbayan Properties Limited. Located near Dhaka's RAJUK Purbachal New Town.",
}

export default function PurbayanCity() {
  return (
    <>
      <SiteHeader />
      <main className="bg-gray-900 text-white pt-16">
        <PurbayanCityHero />
        <PurbayanCityOverview />
        <PurbayanCityLocation />
        <PurbayanCityAmenities />
        <PurbayanCityAssistedHome />
        <PurbayanCityCentralPark />
        <PurbayanCityProjectGlance />
        <PurbayanCityGallery />
      </main>
    </>
  )
}
