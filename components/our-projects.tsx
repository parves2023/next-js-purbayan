"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Script from "next/script"
import Link from "next/link"

interface Project {
  id: string
  title: string
  description: string
  image: string
  category: string
  status: "completed" | "ongoing" | "upcoming"
  slug: string
}

export default function OurProjects() {
  const [activeTab, setActiveTab] = useState("all")

  const projects: Project[] = [
    {
      id: "project-1",
      title: "Purbayan City Phase 1",
      description: "Premium residential plots with modern infrastructure and amenities.",
      image: "/placeholder.svg?height=400&width=600",
      category: "residential",
      status: "completed",
      slug: "purbayan-city-phase-1",
    },
    {
      id: "project-2",
      title: "Purbayan Commercial Hub",
      description: "State-of-the-art commercial spaces for businesses and retail.",
      image: "/placeholder.svg?height=400&width=600",
      category: "commercial",
      status: "completed",
      slug: "purbayan-commercial-hub",
    },
    {
      id: "project-3",
      title: "Purbayan Green Valley",
      description: "Eco-friendly residential development with lush green surroundings.",
      image: "/placeholder.svg?height=400&width=600",
      category: "residential",
      status: "ongoing",
      slug: "purbayan-green-valley",
    },
    {
      id: "project-4",
      title: "Purbayan Waterfront",
      description: "Exclusive waterfront properties with scenic views and premium amenities.",
      image: "/placeholder.svg?height=400&width=600",
      category: "residential",
      status: "upcoming",
      slug: "purbayan-waterfront",
    },
    {
      id: "project-5",
      title: "Purbayan Business Park",
      description: "Modern office spaces designed for productivity and collaboration.",
      image: "/placeholder.svg?height=400&width=600",
      category: "commercial",
      status: "ongoing",
      slug: "purbayan-business-park",
    },
    {
      id: "project-6",
      title: "Purbayan Leisure Complex",
      description: "Recreational facilities including sports, entertainment, and dining options.",
      image: "/placeholder.svg?height=400&width=600",
      category: "mixed-use",
      status: "completed",
      slug: "purbayan-leisure-complex",
    },
  ]

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.status === activeTab)

  // JSON-LD structured data for projects
  const projectsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "RealEstateProject",
        name: project.title,
        description: project.description,
        url: `https://purbayanbd.com/projects/${project.slug}`,
        image: project.image.startsWith("/") ? `https://purbayanbd.com${project.image}` : project.image,
      },
    })),
  }

  return (
    <>
      <Script id="projects-schema" type="application/ld+json">
        {JSON.stringify(projectsSchema)}
      </Script>

      <section className="py-16 bg-gray-800" id="our-projects" aria-labelledby="projects-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 id="projects-heading" className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Our Projects
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Discover our portfolio of completed, ongoing, and upcoming development projects that showcase our
              commitment to quality and innovation.
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-8">
              <TabsList className="bg-gray-700">
                <TabsTrigger value="all" className="text-sm md:text-base">
                  All Projects
                </TabsTrigger>
                <TabsTrigger value="completed" className="text-sm md:text-base">
                  Completed
                </TabsTrigger>
                <TabsTrigger value="ongoing" className="text-sm md:text-base">
                  Ongoing
                </TabsTrigger>
                <TabsTrigger value="upcoming" className="text-sm md:text-base">
                  Upcoming
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="completed" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="ongoing" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="upcoming" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="text-center mt-12">
            <Link href="/projects">
              <Button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-6 text-lg">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const statusColors = {
    completed: "bg-green-500",
    ongoing: "bg-amber-500",
    upcoming: "bg-blue-500",
  }

  return (
    <Card className="overflow-hidden bg-gray-900 border-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10">
      <div className="relative h-64 w-full">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={`${project.title} - ${project.description}`}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
        <div
          className={`absolute top-4 right-4 ${statusColors[project.status]} text-white text-xs font-bold px-2 py-1 rounded uppercase`}
        >
          {project.status}
        </div>
      </div>
      <CardContent className="p-6">
        <CardTitle className="text-xl font-bold mb-2 text-white">{project.title}</CardTitle>
        <CardDescription className="text-gray-300">{project.description}</CardDescription>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Link href={`/projects/${project.slug}`} className="w-full">
          <Button
            variant="outline"
            className="w-full border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white"
          >
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
