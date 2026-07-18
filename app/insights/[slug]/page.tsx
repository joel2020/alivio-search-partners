import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { LedgerRule } from "@/components/ledger";
import { CtaBand } from "@/components/cta-band";
import { getAllInsights, getInsight, formatDate } from "@/lib/insights";
import { site } from "@/content/site";

export function generateStaticParams() {
  return getAllInsights().map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) return {};
  return {
    title: insight.title,
    description: insight.description,
    alternates: { canonical: `/insights/${insight.slug}` },
    openGraph: {
      title: insight.title,
      description: insight.description,
      type: "article",
      publishedTime: insight.date,
    },
  };
}

/* Editorial MDX components — typography consistent with the site. */
const mdxComponents = {
  h2: (props: React.ComponentPropsWithoutRef<"h2">) => (
    <h2
      className="font-display mt-14 border-t border-line pt-8 text-2xl font-medium text-ink"
      {...props}
    />
  ),
  h3: (props: React.ComponentPropsWithoutRef<"h3">) => (
    <h3 className="font-display mt-10 text-xl font-medium text-ink" {...props} />
  ),
  p: (props: React.ComponentPropsWithoutRef<"p">) => (
    <p className="mt-6 text-base leading-relaxed text-ink/90" {...props} />
  ),
  ul: (props: React.ComponentPropsWithoutRef<"ul">) => (
    <ul className="mt-6 space-y-3 pl-5 text-base leading-relaxed text-ink/90 [&>li]:list-disc" {...props} />
  ),
  ol: (props: React.ComponentPropsWithoutRef<"ol">) => (
    <ol className="mt-6 space-y-3 pl-5 text-base leading-relaxed text-ink/90 [&>li]:list-decimal" {...props} />
  ),
  strong: (props: React.ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-semibold text-ink" {...props} />
  ),
  blockquote: (props: React.ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className="font-display mt-8 border-l border-terra pl-6 text-lg italic text-ink"
      {...props}
    />
  ),
  a: (props: React.ComponentPropsWithoutRef<"a">) => (
    <a className="text-terra underline underline-offset-2 hover:text-terra-dark" {...props} />
  ),
};

export default async function InsightPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: insight.title,
    description: insight.description,
    datePublished: insight.date,
    author: { "@type": "Organization", name: site.name, url: site.url },
    publisher: { "@type": "Organization", name: site.name, url: site.url },
    mainEntityOfPage: `${site.url}/insights/${insight.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <article className="bg-paper">
        <div className="mx-auto max-w-3xl px-6 pb-24 pt-36 lg:px-8 lg:pt-44">
          <LedgerRule labels={[insight.category, formatDate(insight.date), insight.readingTime]} />
          <h1 className="font-display text-headline-md mt-10 font-medium text-ink">
            {insight.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-stone">{insight.description}</p>
          <div className="mt-4">
            <MDXRemote source={insight.content} components={mdxComponents} />
          </div>
          <div className="mt-16 border-t border-line pt-8">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-sm text-terra transition-colors hover:text-terra-dark"
            >
              <svg width="14" height="10" viewBox="0 0 14 10" aria-hidden="true" className="rotate-180">
                <path d="M0 5h12M8.5 1L13 5l-4.5 4" fill="none" stroke="currentColor" strokeWidth="1.2" />
              </svg>
              All insights
            </Link>
          </div>
        </div>
      </article>

      <CtaBand
        heading="Apply this to a live search."
        body="If the subject of this brief is on your desk right now, we should talk this week."
        primary={{ label: "Start a Search", href: "/contact" }}
      />
    </>
  );
}
