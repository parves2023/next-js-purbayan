import type { Metadata } from "next"
import FishingClubClientPage from "./FishingClubClientPage"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Fishing Club | Purbayan Properties Limited",
  description:
    "Enjoy free fish hunting and family day out at Purbayan Properties Limited's exclusive fishing club. Perfect for family outings and fishing enthusiasts.",
  alternates: {
    canonical: "https://purbayanbd.com/fishing-club",
  },
  openGraph: {
    title: "Fishing Club | Purbayan Properties Limited",
    description: "Enjoy free fish hunting and family day out at our exclusive fishing club.",
    url: "https://purbayanbd.com/fishing-club",
    siteName: "Purbayan Properties Limited",
    images: [
      {
        url: "https://i.ibb.co.com/0jJ457w5/Purbayan3.jpg",
        width: 1200,
        height: 630,
        alt: "Fishing Club at Purbayan Properties Limited",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fishing Club | Purbayan Properties Limited",
    description: "Enjoy free fish hunting and family day out at our exclusive fishing club.",
    images: ["https://i.ibb.co.com/0jJ457w5/Purbayan3.jpg"],
  },
}

export default function FishingClubPage() {
  // Project structured data
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Purbayan Fishing Club",
    description:
      "Exclusive fishing club with facilities for family day out, including free fish hunting, boating, and traditional food.",
    url: "https://purbayanbd.com/fishing-club",
    image: "https://i.ibb.co.com/0jJ457w5/Purbayan3.jpg",
    brand: {
      "@type": "Brand",
      name: "Purbayan Properties Limited",
    },
    offers: {
      "@type": "AggregateOffer",
      availability: "https://schema.org/InStock",
      priceCurrency: "BDT",
      priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split("T")[0],
      priceRange: "৳৳৳",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dhaka",
      addressRegion: "Purbachal",
      addressCountry: "BD",
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Status",
        value: "Completed",
      },
      {
        "@type": "PropertyValue",
        name: "Amenity",
        value: "Free Fish Hunting",
      },
      {
        "@type": "PropertyValue",
        name: "Amenity",
        value: "Boating",
      },
      {
        "@type": "PropertyValue",
        name: "Amenity",
        value: "Traditional Food",
      },
    ],
  }

  // Breadcrumb structured data
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://purbayanbd.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Fishing Club",
        item: "https://purbayanbd.com/fishing-club",
      },
    ],
  }

  return (
    <>
      <Script
        id="project-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <FishingClubClientPage />
    </>
  )
}
