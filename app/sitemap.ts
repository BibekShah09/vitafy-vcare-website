import { MetadataRoute } from "next";
import { siteConfig, pageMetadata } from "@/lib/seo";

/**
 * Dynamic sitemap generation
 * Accessible at /sitemap.xml
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const currentDate = new Date();

  // Static pages from pageMetadata
  const staticPages: MetadataRoute.Sitemap = Object.values(pageMetadata).map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: currentDate,
    changeFrequency: page.path === "/" ? "daily" : "weekly",
    priority: page.path === "/" ? 1.0 : 0.8,
  }));

  // You can add dynamic routes here in the future
  // Example: blog posts, service pages, etc.
  // const dynamicPages = await getDynamicPages();
  
  return [
    ...staticPages,
    // ...dynamicPages,
  ];
}
