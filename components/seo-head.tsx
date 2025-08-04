"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"
import { BreadcrumbStructuredData } from "./structured-data"

interface SEOHeadProps {
  title?: string
  description?: string
  canonicalPath?: string
  ogImage?: string
  noindex?: boolean
  breadcrumbs?: {
    name: string
    path: string
  }[]
}

export default function SEOHead({
  title,
  description,
  canonicalPath,
  ogImage = "/og-image.jpg",
  noindex = false,
  breadcrumbs = [],
}: SEOHeadProps) {
  const pathname = usePathname()
  const fullPath = canonicalPath || pathname
  const baseUrl = "https://purbayanbd.com"
  const fullUrl = `${baseUrl}${fullPath}`

  // Generate breadcrumb items
  const breadcrumbItems = [
    { name: "Home", item: baseUrl },
    ...breadcrumbs.map((crumb) => ({
      name: crumb.name,
      item: `${baseUrl}${crumb.path}`,
    })),
  ]

  useEffect(() => {
    // Add canonical link
    const canonical = document.createElement("link")
    canonical.rel = "canonical"
    canonical.href = fullUrl
    document.head.appendChild(canonical)

    // Add meta description if provided
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]')
      if (!metaDescription) {
        metaDescription = document.createElement("meta")
        metaDescription.setAttribute("name", "description")
        document.head.appendChild(metaDescription)
      }
      metaDescription.setAttribute("content", description)
    }

    // Add Open Graph image if provided
    const ogImageUrl = ogImage.startsWith("http") ? ogImage : `${baseUrl}${ogImage}`
    let metaOgImage = document.querySelector('meta[property="og:image"]')
    if (!metaOgImage) {
      metaOgImage = document.createElement("meta")
      metaOgImage.setAttribute("property", "og:image")
      document.head.appendChild(metaOgImage)
    }
    metaOgImage.setAttribute("content", ogImageUrl)

    // Add noindex if specified
    if (noindex) {
      let metaRobots = document.querySelector('meta[name="robots"]')
      if (!metaRobots) {
        metaRobots = document.createElement("meta")
        metaRobots.setAttribute("name", "robots")
        document.head.appendChild(metaRobots)
      }
      metaRobots.setAttribute("content", "noindex, nofollow")
    }

    return () => {
      document.head.removeChild(canonical)
    }
  }, [fullUrl, description, ogImage, noindex, baseUrl])

  return <BreadcrumbStructuredData items={breadcrumbItems} />
}
