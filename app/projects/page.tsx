import { SiteHeader } from "@/components/site-header"
import OurProjects from "@/components/our-projects"
import type { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Our Projects | Purbayan Properties Limited",
  description:
    "Explore Purbayan Properties Limited's residential and commercial real estate projects in Bangladesh. View our completed, ongoing, and upcoming developments.",
  alternates: {
    canonical: "https://purbayanbd.com/projects",
  },
  openGraph: {
    title: "Our Projects | Purbayan Properties Limited",
    description: "Explore our residential and commercial real estate projects in Bangladesh.",
    url: "https://purbayanbd.com/projects",
    siteName: "Purbayan Properties Limited",
    images: [
      {
        url: "/og-projects.jpg",
        width: 1200,
        height: 630,
        alt: "Purbayan Properties Limited Projects",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Projects | Purbayan Properties Limited",
    description: "Explore our residential and commercial real estate projects in Bangladesh.",
    images: ["/og-projects.jpg"],
  },
}

export default function ProjectsPage() {
  // Projects structured data
  const projectsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "RealEstateProject",
          name: "Purbayan Properties Limited Phase 1",
          description: "Premium residential plots with modern infrastructure and amenities.",
          url: "https://purbayanbd.com/projects/purbayan-city-phase-1",
          image:
            "https://images.squarespace-cdn.com/content/v1/56b61d457c65e483ef192c14/5aa740a0-dd9c-4812-9803-86d7a943a07f/IMG_0319e.jpg?format=2500w",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "RealEstateProject",
          name: "Purbayan Commercial Hub",
          description: "State-of-the-art commercial spaces for businesses and retail.",
          url: "https://purbayanbd.com/projects/purbayan-commercial-hub",
          image: "https://www.planradar.com/wp-content/uploads/2018/04/construction-site-1-2.jpg",
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "RealEstateProject",
          name: "Purbayan Green Valley",
          description: "Eco-friendly residential development with lush green surroundings.",
          url: "https://purbayanbd.com/projects/purbayan-green-valley",
          image:
            "https://images.squarespace-cdn.com/content/v1/56b61d457c65e483ef192c14/1582225102776-YV9DTSRAW36QF1JMON0C/3.%2BInsideGarage2%2Bcopy.jpg?format=2500w",
        },
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
        name: "Projects",
        item: "https://purbayanbd.com/projects",
      },
    ],
  }

  return (
    <>
      <Script
        id="projects-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <SiteHeader />
      <main className="bg-gray-900 text-white pt-16">
        <div className="container mx-auto px-4 py-12">

          <OurProjects />
        </div>
      </main>
    </>
  )
}
