"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import OptimizedImage from "./optimized-image";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  status: "completed" | "ongoing" | "upcoming";
  slug: string;
}

export default function OurProjects() {
  const [activeTab, setActiveTab] = useState("all");

  const projects: Project[] = [
    {
      id: "project-1",
      title: "Purbayan City Duplex Zone",
      description:
        "Eco-friendly residential development with lush green surroundings.",
      image: "/DUPLEX-ZONE-project3.PNG",
      category: "residential",
      status: "upcoming",
      slug: "purbayan-green-valley",
    },
    {
      id: "project-2",
      title: "Purbayan City Destination Wedding Project",
      description:
        "Eco-friendly residential development with lush green surroundings.",
      image: "/DUPLEX-ZONE-project3.PNG",
      category: "residential",
      status: "upcoming",
      slug: "purbayan-green-valley",
    },
    {
      id: "project-3",
      title: "Purbayan City Pyramid Super Shop",
      description:
        "Eco-friendly residential development with lush green surroundings.",
      image: "/DUPLEX-ZONE-project3.PNG",
      category: "residential",
      status: "upcoming",
      slug: "purbayan-green-valley",
    },
    {
      id: "project-4",
      title: "Purbayan City Central Park",
      description:
        "Premium residential plots with modern infrastructure and amenities.",
      image: "/CENTRAL-PARK-project1.PNG",
      category: "residential",
      status: "upcoming",
      slug: "purbayan-city-phase-1",
    },
    {
      id: "project-5",
      title: "PURBAYAN CITY FOOTBALL TURF",
      description:
        "Modern office spaces designed for productivity and collaboration.",
      image: "https://i.ibb.co/Cph9zWgs/Purbayan-City-Football-turf.jpg",
      category: "commercial",
      status: "upcoming",
      slug: "PURBAYAN-FOOTBALL-PARK",
    },
    {
      id: "project-6",
      title: "Purbayan City Library & Coffee Shop",
      description:
        "Modern office spaces designed for productivity and collaboration.",
      image: "https://i.ibb.co/Cph9zWgs/Purbayan-City-Football-turf.jpg",
      category: "commercial",
      status: "upcoming",
      slug: "PURBAYAN-FOOTBALL-PARK",
    },

    {
      id: "project-7",
      title: "PURBAYAN CITY COMMERCIAL HUB",
      description:
        "State-of-the-art commercial spaces for businesses and retail.",
      image: "/CLUB-HOUSE-project2.PNG",
      category: "commercial",
      status: "upcoming",
      slug: "purbayan-commercial-hub",
    },

    {
      id: "project-4",
      title: "PURBAYAN CITY MEDICAL COLLEGE HOSPITAL",
      description:
        "Exclusive waterfront properties with scenic views and premium amenities.",
      image: "/MEDICAL COLLEGE HOSPITAL-project4.PNG",
      category: "residential",
      status: "upcoming",
      slug: "purbayan-waterfront",
    },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.status === activeTab);

  return (
    <>
      <section
        className="py-16 bg-gray-800"
        id="our-projects"
        aria-labelledby="projects-heading"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              id="projects-heading"
              className="text-3xl md:text-4xl font-bold mb-4 text-white"
            >
              Our Projects
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Discover our portfolio of completed, ongoing, and upcoming
              development projects that showcase our commitment to quality and
              innovation.
            </p>
          </div>

          <Tabs
            defaultValue="all"
            className="w-full"
            onValueChange={setActiveTab}
          >
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
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
  );
}

function ProjectCard({ project }: { project: Project }) {
  const statusColors = {
    completed: "bg-green-500",
    ongoing: "bg-amber-500",
    upcoming: "bg-blue-500",
  };

  return (
    <Card className="overflow-hidden bg-gray-900 border-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10">
      <div className="relative h-64 w-full">
        <OptimizedImage
          src={project.image || "/placeholder.svg"}
          alt={`${project.title} - ${project.description}`}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
        <div
          className={`absolute top-4 right-4 ${
            statusColors[project.status]
          } text-white text-xs font-bold px-2 py-1 rounded uppercase`}
        >
          {project.status}
        </div>
      </div>
      <CardContent className="p-6">
        <CardTitle className="text-xl font-bold mb-2 text-white">
          {project.title}
        </CardTitle>
        <CardDescription className="text-gray-300">
          {project.description}
        </CardDescription>
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
  );
}
