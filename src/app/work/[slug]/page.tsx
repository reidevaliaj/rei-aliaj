import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ArrowUpRightIcon } from "@/components/icons";
import { caseStudies, contactDetails } from "@/lib/site-data";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getCaseStudy(slug: string) {
  return caseStudies.find((item) => item.slug === slug);
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    return {
      title: "Case Study | Rei Aliaj",
    };
  }

  return {
    title: `${study.title} Case Study | Rei Aliaj`,
    description: study.summary,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  return (
    <main className="relative overflow-hidden px-6 pb-12 pt-6 md:px-10 md:pb-16 md:pt-8">
      <div className="mx-auto max-w-7xl">
        <header className="flex flex-col gap-6 border-b border-white/8 pb-8 md:flex-row md:items-center md:justify-between">
          <div>
            <Link
              href="/"
              className="text-xs uppercase tracking-[0.3em] text-white/42 transition-colors hover:text-white/84"
            >
              Back to home
            </Link>
            <h1 className="mt-4 font-display text-4xl tracking-[-0.05em] text-white md:text-6xl">
              {study.title}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--muted)]">
              {study.summary}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {study.metrics.slice(0, 2).map((metric) => (
              <div
                key={metric.label}
                className="rounded-[22px] border border-white/10 bg-white/4 px-5 py-4"
              >
                <p className="eyebrow">{metric.label}</p>
                <p className="mt-3 text-base font-semibold text-white">
                  {metric.value}
                </p>
              </div>
            ))}
          </div>
        </header>

        <section className="grid gap-8 py-10 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)]">
          <div className="glass-panel overflow-hidden rounded-[32px] p-4 sm:p-5">
            <div className="overflow-hidden rounded-[24px] border border-white/10">
              <Image
                src={study.screenshot}
                alt={`${study.title} storefront screenshot`}
                width={1440}
                height={1080}
                className="h-auto w-full"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass-panel rounded-[30px] p-6 sm:p-7">
              <p className="eyebrow">Project snapshot</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {study.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-[20px] border border-white/10 bg-white/4 p-4"
                  >
                    <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/42">
                      {metric.label}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-[var(--muted-strong)]">
                      {metric.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel rounded-[30px] p-6 sm:p-7">
              <p className="eyebrow">Live store</p>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                The live storefront can be viewed here:
              </p>
              <a
                href={study.website}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm uppercase tracking-[0.24em] text-white transition-colors hover:text-[var(--muted-strong)]"
              >
                Visit {study.website.replace("https://", "").replace(/\/$/, "")}
                <ArrowUpRightIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        <section className="grid gap-8 pb-8 lg:grid-cols-2">
          <div className="glass-panel rounded-[30px] p-6 sm:p-7">
            <p className="eyebrow">What I worked on</p>
            <p className="mt-4 text-base leading-8 text-[var(--muted)]">
              {study.scopeIntro}
            </p>
            <ul className="mt-6 space-y-4">
              {study.scope.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-7 text-[var(--muted-strong)]"
                >
                  <span className="mt-[0.72rem] h-1.5 w-1.5 shrink-0 rounded-full bg-white/72" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-panel rounded-[30px] p-6 sm:p-7">
            <p className="eyebrow">Technical highlights</p>
            <ul className="mt-6 space-y-4">
              {study.technicalHighlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-7 text-[var(--muted-strong)]"
                >
                  <span className="mt-[0.72rem] h-1.5 w-1.5 shrink-0 rounded-full bg-white/72" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="glass-panel rounded-[32px] p-6 sm:p-8">
          <p className="eyebrow">Public storefront today</p>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {study.publicSignals.map((signal) => (
              <div
                key={signal}
                className="rounded-[22px] border border-white/10 bg-white/4 p-5 text-sm leading-7 text-[var(--muted-strong)]"
              >
                {signal}
              </div>
            ))}
          </div>
        </section>

        <section className="glass-panel mt-8 rounded-[32px] p-6 sm:p-8">
          <p className="eyebrow">Need similar Shopify help?</p>
          <div className="mt-4 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="font-display text-3xl tracking-[-0.04em] text-white md:text-4xl">
                Let&apos;s talk about your store
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-8 text-[var(--muted)]">
                If you need Shopify theme engineering, integrations, custom
                solutions, or help untangling technical store problems, I am
                available for direct freelance work.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/#contact" className="button-primary">
                Contact Me
              </Link>
              <a
                href={`mailto:${contactDetails.email}?subject=Case%20study%20inquiry`}
                className="button-secondary"
              >
                Email Directly
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
