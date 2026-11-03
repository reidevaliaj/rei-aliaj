import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.rei-aliaj.com";
  return ["", ...caseStudies.map((study) => `/work/${study.slug}`)].flatMap(
    (path) => {
      const languages = {
        de: `${base}${path || "/"}`,
        en: `${base}/en${path}`,
      };
      return [
        { url: languages.de, alternates: { languages } },
        { url: languages.en, alternates: { languages } },
      ];
    },
  );
}
