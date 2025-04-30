import type { Metadata } from "next/types"

// Default metadata - used as fallback when metadata is not defined in page
export const defaultMetadata: Metadata = {
  title: {
    default: "Purbayan City | Premium Land Development in Bangladesh",
    template: "%s | Purbayan City",
  },
  description:
    "Purbayan City offers premium land development projects, modern living spaces, and exclusive amenities including a fishing club in Bangladesh.",
  keywords: [
    "Purbayan City",
    "land development",
    "real estate Bangladesh",
    "premium plots",
    "fishing club",
    "Purbayan Group",
  ],
  authors: [{ name: "Purbayan Group" }],
  creator: "Purbayan Group",
  publisher: "Purbayan Group",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://purbayanbd.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Purbayan City | Premium Land Development in Bangladesh",
    description:
      "Purbayan City offers premium land development projects, modern living spaces, and exclusive amenities including a fishing club in Bangladesh.",
    url: "https://purbayanbd.com",
    siteName: "Purbayan City",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Purbayan City",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Purbayan City | Premium Land Development in Bangladesh",
    description:
      "Purbayan City offers premium land development projects, modern living spaces, and exclusive amenities including a fishing club in Bangladesh.",
    images: ["/og-image.jpg"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    // Add your verification codes when you have them
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
  category: "real estate",
}
