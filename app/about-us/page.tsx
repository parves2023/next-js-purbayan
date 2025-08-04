import type { Metadata } from "next";
import Script from "next/script";
import OptimizedImage from "@/components/optimized-image";

export const metadata: Metadata = {
  title: "About Us | Purbayan Properties Limited",
  description:
    "Learn about Purbayan Properties Limited, our vision, mission, and commitment to excellence in real estate development in Bangladesh.",
  alternates: {
    canonical: "https://purbayanbd.com/about-us",
  },
  openGraph: {
    title: "About Us | Purbayan Properties Limited",
    description:
      "Learn about our vision, mission, and commitment to excellence in real estate development.",
    url: "https://purbayanbd.com/about-us",
    siteName: "Purbayan Properties Limited",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200",
        width: 1200,
        height: 630,
        alt: "About Purbayan Properties Limited",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Purbayan Properties Limited",
    description:
      "Learn about our vision, mission, and commitment to excellence in real estate development.",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
};

export default function AboutUsPage() {
  // About page structured data
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Purbayan Properties Limited",
    description:
      "Learn about Purbayan Properties Limited, our vision, mission, and commitment to excellence in real estate development.",
    url: "https://purbayanbd.com/about-us",
    mainEntity: {
      "@type": "Organization",
      name: "Purbayan Properties Limited",
      url: "https://purbayanbd.com",
      logo: "https://purbayanbd.com/logo.png",
      description:
        "Premium real estate developer in Bangladesh offering residential and commercial properties with exclusive amenities.",
    },
  };

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
        name: "About Us",
        item: "https://purbayanbd.com/about-us",
      },
    ],
  };

  return (
    <main className="bg-gray-900 text-white">
      <Script
        id="about-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section */}
      <section className="relative h-[50vh] w-full">
        <OptimizedImage
          src="https://i.ibb.co/C5WMK7px/Purbayan2.webp"
          alt="About Purbayan Properties Limited"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-lg">
            About Us
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl drop-shadow-md">
            Building communities and creating value through excellence in real
            estate development
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#f8c927] ">
                Our Company
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Purbayan Properties Limited is a leading real estate developer
                in Bangladesh, committed to creating premium residential and
                commercial spaces that enhance quality of life and provide
                excellent investment opportunities.
              </p>
              <p className="text-lg text-gray-300">
                With decades of combined experience in the real estate sector,
                our team brings expertise, innovation, and a deep understanding
                of the market to every project we undertake. We pride ourselves
                on our attention to detail, quality construction, and
                customer-focused approach.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <OptimizedImage
                src="https://i.ibb.co/Jwq3CfVT/9.webp"
                alt="Purbayan Properties Office"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-900 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6 text-[#f8c927]">
                Our Vision
              </h2>
              <p className="text-lg text-gray-300">
                To be the most trusted and respected real estate developer in
                Bangladesh, known for creating sustainable, innovative, and
                high-quality developments that positively impact communities and
                provide exceptional value to our customers.
              </p>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6 text-[#f8c927]">
                Our Mission
              </h2>
              <p className="text-lg text-gray-300">
                To develop premium real estate projects that exceed customer
                expectations through innovative design, quality construction,
                and exceptional service, while maintaining the highest standards
                of integrity, sustainability, and social responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#f8c927]">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="bg-primary/20 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-[#f8c927]"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <path d="m10 13-2 2 2 2"></path>
                  <path d="m14 17 2-2-2-2"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Integrity</h3>
              <p className="text-gray-300">
                We conduct our business with the highest standards of honesty,
                transparency, and ethical behavior.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="bg-primary/20 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-[#f8c927]"
                >
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                  <path d="M4 22h16"></path>
                  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p className="text-gray-300">
                We strive for excellence in everything we do, from design and
                construction to customer service.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="bg-primary/20 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-[#f8c927]"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                  <path d="m7 10 2 2 7-7"></path>
                  <path d="m7 15 2 2 7-7"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-300">
                We embrace innovation and continuously seek new ways to improve
                our projects and processes.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="bg-primary/20 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-[#f8c927]"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Customer Focus</h3>
              <p className="text-gray-300">
                We prioritize our customers' needs and satisfaction in every
                aspect of our business.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
