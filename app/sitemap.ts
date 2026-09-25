import { MetadataRoute } from "next";

const BASE_URL = `${process.env.NEXT_PUBLIC_SITE_URL}`;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date("2026-09-30"),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/quienes-somos`,
      lastModified: new Date("2026-09-30"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/quienes-somos/antecedentes`,
      lastModified: new Date("2026-09-30"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/quienes-somos/integrantes`,
      lastModified: new Date("2026-09-30"),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/servicios`,
      lastModified: new Date("2026-09-30"),
      changeFrequency: "yearly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/servicios/metodologia`,
      lastModified: new Date("2026-09-30"),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/premios`,
      lastModified: new Date("2026-09-30"),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date("2026-09-30"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/privacidad`,
      lastModified: new Date("2026-09-30"),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/terminos`,
      lastModified: new Date("2026-09-30"),
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];
}
