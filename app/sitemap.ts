import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://vigimoy-portfolio.vercel.app", priority: 1 }];
}
