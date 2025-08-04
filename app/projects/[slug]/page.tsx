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
    slug: "purbayan-city-duplex",
    title: "Purbayan City Duplex Zone",
    description:
      "A modern residential zone featuring stylish duplex houses designed for family living.",
    fullDescription:
      "The Purbayan City Duplex Zone offers elegant and spacious duplex homes designed to accommodate modern families. Surrounded by lush greenery and equipped with essential utilities, this zone promises a premium residential lifestyle with privacy, comfort, and eco-conscious planning.",
    image: "/DUPLEX-ZONE-project3.PNG",
    features: [
      "Spacious duplex houses",
      "Eco-friendly layout",
      "Private garden space",
      "Modern design & interiors",
      "Secure gated community",
      "Easy access to main road",
    ],
    status: "upcoming",
    location: "Dhaka, Bangladesh",
    completionDate: "2026",
  },
  {
      slug: "purbayan-wedding",
    title: "Purbayan City Destination Wedding Project",
    description:
      "A luxurious venue tailored for unforgettable destination weddings.",
    fullDescription:
      "The Destination Wedding Project at Purbayan City is built to host grand weddings and celebrations amidst nature. With landscaped gardens, event halls, and luxury accommodations, it's the ideal venue for memorable destination weddings and cultural events.",
    image: "https://i.ibb.co/d4chkYcZ/Destination-Wedding-Resort.jpg",
    features: [
      "Event banquet halls",
      "Landscaped outdoor areas",
      "Luxury guest accommodations",
      "Photography zones",
      "In-house catering support",
      "Exclusive private access",
    ],
    status: "upcoming",
    location: "Dhaka, Bangladesh",
    completionDate: "2026",
  },
  {
slug: "purbayan-pyramid",
    title: "Purbayan City Pyramid Super Shop",
    description:
      "A modern retail center for groceries, lifestyle goods, and daily essentials.",
    fullDescription:
      "Pyramid Super Shop is a comprehensive shopping destination within Purbayan City offering residents a wide variety of products from groceries to electronics. With its clean layout and modern design, it ensures a hassle-free shopping experience for all.",
    image: "https://i.ibb.co/HDQS44Qr/SUPER.jpg",
    features: [
      "Wide range of products",
      "Modern checkout system",
      "Air-conditioned shopping halls",
      "Ample parking space",
      "CCTV security",
      "Wheelchair access",
    ],
    status: "upcoming",
    location: "Dhaka, Bangladesh",
    completionDate: "2025",
  },
  {
slug: "purbayan-city-park",
    title: "Purbayan City Central Park",
    description:
      "A beautifully designed central park for leisure and community gatherings.",
    fullDescription:
      "Purbayan City Central Park is a thoughtfully planned green zone in the heart of the development. It features walking trails, seating areas, children’s play zones, and open-air event spaces, making it the recreational centerpiece of the community.",
    image: "/CENTRAL-PARK-project1.PNG",
    features: [
      "Jogging and walking tracks",
      "Children’s play area",
      "Open-air amphitheater",
      "Water fountains",
      "Botanical landscaping",
      "Yoga & meditation zones",
    ],
    status: "upcoming",
    location: "Dhaka, Bangladesh",
    completionDate: "2025",
  },
  {
    slug: "purbayan-football-turf",
    title: "Purbayan City Football Turf",
    description:
      "A professional-grade football turf for sports and recreation.",
    fullDescription:
      "Purbayan City Football Turf is a modern synthetic field built to support both amateur and professional matches. Equipped with night lighting and spectator seating, it promotes healthy lifestyles and encourages youth participation in sports.",
    image: "https://i.ibb.co/Cph9zWgs/Purbayan-City-Football-turf.jpg",
    features: [
      "Standard-sized turf ground",
      "LED flood lighting",
      "Changing rooms",
      "Cafeteria and sitting area",
      "Booking system for events",
      "Youth training facilities",
    ],
    status: "upcoming",
    location: "Dhaka, Bangladesh",
    completionDate: "2024",
  },
  {
     slug: "PURBAYAN-Coffee",
    title: "Purbayan City Library & Coffee Shop",
    description:
      "A cozy space for learning and relaxing with books and coffee.",
    fullDescription:
      "The Library & Coffee Shop blends learning with leisure in a calm, well-lit environment. Whether you want to study, read, or socialize over coffee, this space caters to students, freelancers, and families looking for quiet time.",
    image: "https://i.ibb.co/9kQBS6H3/Library-Coffee-Shop.jpg",
    features: [
      "Curated book collection",
      "Reading zones & booths",
      "Premium coffee & snacks",
      "High-speed Wi-Fi",
      "Community events & book clubs",
      "Indoor plants & acoustic comfort",
    ],
    status: "upcoming",
    location: "Dhaka, Bangladesh",
    completionDate: "2024",
  },
  {
     slug: "purbayan-commercial-hub",
    title: "Purbayan City Commercial Hub",
    description:
      "A business hub with office spaces, shops, and corporate facilities.",
    fullDescription:
      "The Commercial Hub of Purbayan City serves as the economic heart of the project. With its modern office spaces, retail outlets, and business-friendly amenities, it supports startups, service providers, and enterprises looking to thrive in a vibrant setting.",
    image: "/CLUB-HOUSE-project2.PNG",
    features: [
      "Office spaces & showrooms",
      "Conference and meeting rooms",
      "High-speed elevators",
      "24/7 power backup",
      "CCTV surveillance",
      "Business lounge & food court",
    ],
    status: "upcoming",
    location: "Dhaka, Bangladesh",
    completionDate: "2025",
  },
  {
    slug: "purbayan-waterfront",
    title: "Purbayan City Medical College Hospital",
    description:
      "A top-tier medical college and hospital serving health and education needs.",
    fullDescription:
      "The Medical College Hospital at Purbayan City is being developed to provide advanced medical education alongside specialized healthcare services. With modern facilities, emergency care, and experienced professionals, it aims to serve both residents and the wider community.",
    image: "/MEDICAL COLLEGE HOSPITAL-project4.PNG",
    features: [
      "Fully equipped hospital wards",
      "Medical college campus",
      "Emergency & trauma center",
      "Pharmacy & diagnostics",
      "Ambulance services",
      "Staff accommodations",
    ],
    status: "upcoming",
    location: "Dhaka, Bangladesh",
    completionDate: "2026",
  },
];

type Props = {
  params: { slug: string }
}

// console.log(params);

// Dynamic metadata generation
export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The project you are looking for does not exist.",
    }
  }

  return {
    title: project.title,
    description: project.description,
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
