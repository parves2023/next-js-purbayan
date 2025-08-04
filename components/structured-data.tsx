"use client"

import { useEffect } from "react"

interface OrganizationStructuredDataProps {
  url?: string
  logo?: string
  name?: string
  description?: string
  address?: {
    streetAddress: string
    addressLocality: string
    addressRegion: string
    postalCode: string
    addressCountry: string
  }
  contactPoint?: {
    telephone: string
    contactType: string
  }
  sameAs?: string[]
}

export function OrganizationStructuredData({
  url = "https://purbayanbd.com",
  logo = "https://purbayanbd.com/logo.png",
  name = "Purbayan Properties Limited",
  description = "Premium real estate developer in Bangladesh offering residential and commercial properties with exclusive amenities.",
  address = {
    streetAddress: "House-35 (5th floor), Road-7, Block-G",
    addressLocality: "Banani",
    addressRegion: "Dhaka",
    postalCode: "1213",
    addressCountry: "BD",
  },
  contactPoint = {
    telephone: "+8801713034079",
    contactType: "customer service",
  },
  sameAs = [
    "https://www.facebook.com/purbayanbd",
    "https://www.linkedin.com/company/purbayanbd",
    "https://twitter.com/purbayanbd",
    "https://www.instagram.com/purbayanbd",
  ],
}: OrganizationStructuredDataProps) {
  useEffect(() => {
    const organizationData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${url}/#organization`,
      name,
      url,
      logo: {
        "@type": "ImageObject",
        url: logo,
      },
      description,
      address: {
        "@type": "PostalAddress",
        ...address,
      },
      contactPoint: {
        "@type": "ContactPoint",
        ...contactPoint,
      },
      sameAs,
    }

    const script = document.createElement("script")
    script.type = "application/ld+json"
    script.textContent = JSON.stringify(organizationData)
    script.id = "organization-structured-data"
    document.head.appendChild(script)

    return () => {
      const existingScript = document.getElementById("organization-structured-data")
      if (existingScript) {
        document.head.removeChild(existingScript)
      }
    }
  }, [url, logo, name, description, address, contactPoint, sameAs])

  return null
}

interface WebsiteStructuredDataProps {
  url?: string
  name?: string
  description?: string
  searchUrl?: string
}

export function WebsiteStructuredData({
  url = "https://purbayanbd.com",
  name = "Purbayan Properties Limited",
  description = "Premium real estate developer in Bangladesh offering residential and commercial properties with exclusive amenities.",
  searchUrl = "https://purbayanbd.com/search?q={search_term_string}",
}: WebsiteStructuredDataProps) {
  useEffect(() => {
    const websiteData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${url}/#website`,
      url,
      name,
      description,
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: searchUrl,
        },
        "query-input": "required name=search_term_string",
      },
    }

    const script = document.createElement("script")
    script.type = "application/ld+json"
    script.textContent = JSON.stringify(websiteData)
    script.id = "website-structured-data"
    document.head.appendChild(script)

    return () => {
      const existingScript = document.getElementById("website-structured-data")
      if (existingScript) {
        document.head.removeChild(existingScript)
      }
    }
  }, [url, name, description, searchUrl])

  return null
}

interface BreadcrumbStructuredDataProps {
  items: {
    name: string
    item: string
  }[]
}

export function BreadcrumbStructuredData({ items }: BreadcrumbStructuredDataProps) {
  useEffect(() => {
    const breadcrumbData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.item,
      })),
    }

    const script = document.createElement("script")
    script.type = "application/ld+json"
    script.textContent = JSON.stringify(breadcrumbData)
    script.id = "breadcrumb-structured-data"
    document.head.appendChild(script)

    return () => {
      const existingScript = document.getElementById("breadcrumb-structured-data")
      if (existingScript) {
        document.head.removeChild(existingScript)
      }
    }
  }, [items])

  return null
}

interface RealEstateProjectStructuredDataProps {
  name: string
  description: string
  url: string
  image: string
  status?: "Completed" | "In Progress" | "Planned"
  address?: {
    streetAddress?: string
    addressLocality: string
    addressRegion?: string
    postalCode?: string
    addressCountry: string
  }
  priceRange?: string
  amenities?: string[]
}

export function RealEstateProjectStructuredData({
  name,
  description,
  url,
  image,
  status = "In Progress",
  address = {
    addressLocality: "Dhaka",
    addressCountry: "BD",
  },
  priceRange = "৳৳৳",
  amenities = [],
}: RealEstateProjectStructuredDataProps) {
  useEffect(() => {
    const projectData = {
      "@context": "https://schema.org",
      "@type": "Product",
      name,
      description,
      url,
      image,
      brand: {
        "@type": "Brand",
        name: "Purbayan Properties Limited",
      },
      offers: {
        "@type": "AggregateOffer",
        availability: "https://schema.org/InStock",
        priceCurrency: "BDT",
        priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split("T")[0],
        priceRange,
      },
      address: {
        "@type": "PostalAddress",
        ...address,
      },
      additionalProperty: [
        {
          "@type": "PropertyValue",
          name: "Status",
          value: status,
        },
        ...amenities.map((amenity) => ({
          "@type": "PropertyValue",
          name: "Amenity",
          value: amenity,
        })),
      ],
    }

    const script = document.createElement("script")
    script.type = "application/ld+json"
    script.textContent = JSON.stringify(projectData)
    script.id = "real-estate-project-structured-data"
    document.head.appendChild(script)

    return () => {
      const existingScript = document.getElementById("real-estate-project-structured-data")
      if (existingScript) {
        document.head.removeChild(existingScript)
      }
    }
  }, [name, description, url, image, status, address, priceRange, amenities])

  return null
}
