"use client"

import PurbayanGallery from "@/components/purbayan-gallery"

// Define the Purbayan City gallery images with actual images
const purbayanCityImages = [
  {
    src: "https://i.ibb.co/cKtw5RXv/A-NEW-TOWNSHIP.png",
    title: "A NEW TOWNSHIP IS DEVELOPING",
    description: "The future of modern living in Bangladesh",
  },
  {
    src: "https://i.ibb.co/dwrpHJcw/PURBAYAN-CITY.png",
    title: "PURBAYAN CITY LOCATION",
    description: "Strategically located for convenience and accessibility",
  },
  {
    src: "https://i.ibb.co/jv7x3cLS/CLUB-HOUSE.png",
    title: "CLUB HOUSE + CIVIC AMENITIES",
    description: "Modern facilities for recreation and community gatherings",
  },
  {
    src: "https://i.ibb.co/vvCSG1gQ/ASSISTED-HOME.png",
    title: "ASSISTED HOME FOR SENIOR'S RESIDENTS",
    description: "Specialized care facilities for elderly residents",
  },
  {
    src: "https://i.ibb.co/fYRVTSHt/CENTRAL-PARK.png",
    title: "CENTRAL PARK",
    description: "A green oasis at the heart of the development",
  },
  {
    src: "https://i.ibb.co/ycVpPXmP/purbayan-city-adunik1.png",
    title: "Modern Amenities 1",
    description: "State-of-the-art facilities for residents",
  },
  {
    src: "https://i.ibb.co/XrmfW8YV/purbayan-city-adunik2.png",
    title: "Modern Amenities 2",
    description: "Thoughtfully designed spaces for modern living",
  },
  {
    src: "https://i.ibb.co/0VRr0HbP/purbayan-city-adunik3.png",
    title: "Modern Amenities 3",
    description: "Contemporary infrastructure for comfort and convenience",
  },
  {
    src: "https://i.ibb.co/4gRmcYTy/purbayan-city-adunik4.png",
    title: "Modern Amenities 4",
    description: "Premium features for an elevated lifestyle",
  },
  {
    src: "https://i.ibb.co/HDCjrQQy/purbayan-city-adunik5.png",
    title: "Modern Amenities 5",
    description: "Innovative design elements throughout the community",
  },
]

export default function PurbayanCityGallery() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#f8c927]">Purbayan City Gallery</h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center mb-12">
          Explore our beautiful development through our curated gallery of images showcasing Purbayan City's amenities,
          landscapes, and community spaces.
        </p>

        <PurbayanGallery images={purbayanCityImages} />
      </div>
    </section>
  )
}
