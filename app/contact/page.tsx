import { SiteHeader } from "@/components/site-header"
import Footer from "@/components/footer"
import ContactSection from "@/components/contact-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Purbayan Properties Limited",
  description:
    "Get in touch with Purbayan Properties Limited for inquiries about our premium land development projects and amenities.",
}

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-gray-900 text-white pt-0">
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
