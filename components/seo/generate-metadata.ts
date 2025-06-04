import type { Metadata } from "next"

interface SEOProps {
  title: string
  description: string
  path: string
  ogImage?: string
  type?: "website" | "article" | "product"
}

export function generateMetadata({
  title,
  description,
  path,
  ogImage = "/og-default.jpg",
  type = "website",
}: SEOProps): Metadata {
  const url = `https://purbayanbd.com${path}`

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Purbayan Properties Limited",
      images: [
        {
          url: ogImage.startsWith("http") ? ogImage : `https://purbayanbd.com${ogImage}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  }
}
