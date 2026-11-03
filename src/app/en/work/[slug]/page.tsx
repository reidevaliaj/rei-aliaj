import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CaseStudyPage } from "@/components/case-study-page";
import { caseStudies, getCaseStudy } from "@/lib/site-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) return { title: "Case Study | Rei Aliaj" };

  return {
    title: `${study.title} Case Study | Rei Aliaj`,
    description: study.content.en.summary,
    openGraph: {
      title: `${study.title} | Rei Aliaj`,
      description: study.content.en.summary,
      url: `/en/work/${slug}`,
      locale: "en_US",
      images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    },
    alternates: {
      canonical: `/en/work/${slug}`,
      languages: { de: `/work/${slug}`, en: `/en/work/${slug}` },
    },
  };
}

export default async function EnglishCaseStudyRoute({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) notFound();

  return <CaseStudyPage study={study} locale="en" />;
}
