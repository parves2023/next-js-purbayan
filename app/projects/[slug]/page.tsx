import { SiteHeader } from "@/components/site-header"
import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { notFound } from "next/navigation"
import Script from "next/script"

// This would typically come from a database or CMS
const projects = [
  {
    slug: "purbayan-city-phase-1",
    title: "Purbayan Properties Limited Phase 1",
    description: "Premium residential plots with modern infrastructure and amenities.",
    fullDescription:
      "Purbayan Properties Limited Phase 1 is our flagship residential development offering premium plots in a prime location. The project features modern infrastructure, 24/7 security, landscaped gardens, and a range of community amenities designed for comfortable and luxurious living.",
    image: "https://i.ibb.co/LXF6SDx/purbayan-slider-1.jpg?height=800&width=1200",
    features: [
      "Premium residential plots",
      "Modern infrastructure",
      "24/7 security",
      "Landscaped gardens",
      "Community center",
      "Wide roads and walkways",
    ],
    status: "completed",
    location: "Dhaka, Bangladesh",
    completionDate: "2021",
  },
  // Add other projects here
]

type Props = {
  params: { slug: string }
}

// Dynamic metadata generation
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    return {
      title: "Project Not Found | Purbayan Properties Limited",
      description: "The requested project could not be found.",
    }
  }

  const ogImageUrl = `https://purbayanbd.com/api/og?title=${encodeURIComponent(project.title)}&description=${encodeURIComponent(project.description)}&type=project`

  return {
    title: `${project.title} | Purbayan Properties Limited`,
    description: project.description,
    alternates: {
      canonical: `https://purbayanbd.com/projects/${params.slug}`,
    },
    openGraph: {
      title: `${project.title} | Purbayan Properties Limited`,
      description: project.description,
      url: `https://purbayanbd.com/projects/${params.slug}`,
      siteName: "Purbayan Properties Limited",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Purbayan Properties Limited`,
      description: project.description,
      images: [ogImageUrl],
    },
  }
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  // JSON-LD structured data for this specific project
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateProject",
    name: project.title,
    description: project.fullDescription,
    image: project.image.startsWith("/") ? `https://purbayanbd.com${project.image}` : project.image,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "BDT",
      priceValidUntil: "2024-12-31",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: project.location,
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
        name: "Projects",
        item: "https://purbayanbd.com/projects",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: `https://purbayanbd.com/projects/${params.slug}`,
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
      <SiteHeader />

      <main className="bg-gray-900 text-white ">
        <div className="relative h-[50vh] w-full">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <Link href="/projects" className="text-amber-500 hover:text-amber-400 flex items-center">
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
                  className="h-4 w-4 mr-2"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
                Back to Projects
              </Link>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>

            <div className="inline-block bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded uppercase mb-6">
              {project.status}
            </div>

            <p className="text-lg text-gray-300 mb-8">{project.fullDescription}</p>

            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Project Features</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
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
                      className="h-5 w-5 text-amber-500 mr-2 mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h2 className="text-xl font-bold mb-2">Location</h2>
                <p className="text-gray-300">{project.location}</p>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2">Completion Date</h2>
                <p className="text-gray-300">{project.completionDate}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-amber-500 hover:bg-amber-600 text-white">Register Interest</Button>
              <Button variant="outline" className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
