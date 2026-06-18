import type { MetadataRoute } from "next";
import { industries } from "@/content/industries";
import { services } from "@/content/services";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

const staticRoutes = [
  "/",
  "/services",
  "/industries",
  "/case-studies",
  "/about",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const serviceRoutes = Object.keys(services).map((slug) => `/services/${slug}`);
  const industryRoutes = Object.keys(industries).map((slug) => `/industries/${slug}`);

  const allRoutes = [...staticRoutes, ...serviceRoutes, ...industryRoutes];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.includes("/services") || route.includes("/industries") ? 0.8 : 0.7,
  }));
}