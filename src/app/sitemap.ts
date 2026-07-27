import type { MetadataRoute } from "next";
import { livePages } from "@/content/live";

const siteUrl = "https://mediumpurple-ant-531485.hostingersite.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const docxRoutes = [
    "/process-advisory",
    "/operational-excellence",
    "/corporate-function",
    "/service-delivery",
    "/industrial-manufacturing-sector",
    "/healthcare",
    "/insurance",
    "/aerospace-defence",
    "/automotive",
    "/global-capability-centers",
    "/education",
    "/insights",
  ];

  return [
    ...livePages.map((page) => ({
    url: `${siteUrl}${page.route}`,
    lastModified: new Date("2026-07-27"),
    changeFrequency: page.route === "/" ? ("weekly" as const) : ("monthly" as const),
    priority: page.route === "/" ? 1 : 0.7,
    })),
    ...docxRoutes.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified: new Date("2026-07-27"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
