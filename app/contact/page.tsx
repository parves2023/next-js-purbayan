import { SiteHeader } from "@/components/site-header"
import ContactSection from "@/components/contact-section"
import type { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Contact Us | Purbayan Properties Limited",
  description:
    "Get in touch with Purbayan Properties Limited for inquiries about our premium land development projects and amenities. Visit our office or contact us online.",
  alternates: {
    canonical: "https://purbayanbd.com/contact",
  },
  openGraph: {
    title: "Contact Us | Purbayan Properties Limited",
    description:
      "Get in touch with Purbayan Properties Limited for inquiries about our premium land development projects.",
    url: "https://purbayanbd.com/contact",
    siteName: "Purbayan Properties Limited",
    images: [
      {
        url: "/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Purbayan Properties Limited",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Purbayan Properties Limited",
    description:
      "Get in touch with Purbayan Properties Limited for inquiries about our premium land development projects.",
    images: ["/og-contact.jpg"],
  },
}

export default function ContactPage() {
  // Contact page structured data
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Purbayan Properties Limited",
    description:
      "Get in touch with Purbayan Properties Limited for inquiries about our premium land development projects.",
    url: "https://purbayanbd.com/contact",
    mainEntity: {
      "@type": "Organization",
      name: "Purbayan Properties Limited",
      telephone: "+8801713034079",
      email: "info@purbayanbd.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "House-35 (5th floor), Road-7, Block-G",
        addressLocality: "Banani",
        addressRegion: "Dhaka",
        postalCode: "1213",
        addressCountry: "BD",
      },
    },
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
        name: "Contact",
        item: "https://purbayanbd.com/contact",
      },
    ],
  }

  return (
    <>
      <Script
        id="contact-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <SiteHeader />
      <main className="bg-gray-900 text-white pt-0">
        <ContactSection />
      </main>
     
    </>
  )
}
