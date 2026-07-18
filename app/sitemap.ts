import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { practices } from "@/content/practices";
import { positions } from "@/content/positions";
import { getAllInsights } from "@/lib/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: site.url, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/product`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/process`, changeFrequency: "yearly", priority: 0.8 },
    { url: `${site.url}/about`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${site.url}/insights`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${site.url}/positions`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${site.url}/contact`, changeFrequency: "yearly", priority: 0.9 },
  ];

  const practiceRoutes: MetadataRoute.Sitemap = practices.map((practice) => ({
    url: `${site.url}/practices/${practice.slug}`,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const positionRoutes: MetadataRoute.Sitemap = positions.map((position) => ({
    url: `${site.url}/positions/${position.slug}`,
    lastModified: new Date(`${position.datePosted}T12:00:00Z`),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const insightRoutes: MetadataRoute.Sitemap = getAllInsights().map((insight) => ({
    url: `${site.url}/insights/${insight.slug}`,
    lastModified: new Date(`${insight.date}T12:00:00Z`),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...practiceRoutes, ...positionRoutes, ...insightRoutes];
}
