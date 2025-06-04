import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://purbayanbd.com"
  const currentDate = new Date()

  // Main pages with appropriate priorities
  const mainPages = [
    {
      url: `${baseUrl}/`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/locations`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/fishing-club`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ]

  // Project pages with appropriate priorities
  const projectSlugs = [
    {
      slug: "purbayan-city-phase-1",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      slug: "purbayan-commercial-hub",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      slug: "purbayan-green-valley",
      priority: 0.8,
      changeFrequency: "weekly" as const,
    },
    {
      slug: "purbayan-waterfront",
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
    {
      slug: "purbayan-business-park",
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
    {
      slug: "purbayan-leisure-complex",
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
  ]

  const projectPages = projectSlugs.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: currentDate,
    changeFrequency: project.changeFrequency,
    priority: project.priority,
  }))

  // Category pages
  const categoryPages = [
    {
      url: `${baseUrl}/projects?category=residential`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects?category=commercial`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects?status=ongoing`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects?status=completed`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/projects?status=upcoming`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
  ]

  return [...mainPages, ...projectPages, ...categoryPages]
}
