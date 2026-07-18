import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/reveal";
import { LedgerRule, Eyebrow } from "@/components/ledger";
import { ApplyForm } from "@/components/apply-form";
import { positions, getPosition } from "@/content/positions";
import { site } from "@/content/site";

export function generateStaticParams() {
  return positions.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const position = getPosition(slug);
  if (!position) return {};
  return {
    title: `${position.title} — ${position.location}`,
    description: `${position.summary} Apply directly through Alivio Search Partners.`,
    alternates: { canonical: `/positions/${position.slug}` },
  };
}

export default async function PositionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const position = getPosition(slug);
  if (!position) notFound();

  /* JobPosting structured data — qualifies listings for Google Jobs. */
  const jobPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: position.title,
    description: `${position.about} Responsibilities: ${position.responsibilities.join("; ")}. Qualifications: ${position.qualifications.join("; ")}.`,
    datePosted: position.datePosted,
    employmentType: position.employmentType,
    hiringOrganization: {
      "@type": "Organization",
      name: "Confidential — represented by Alivio Search Partners",
      sameAs: site.url,
    },
    jobLocation: {
      "@type": "Place",
      address: { "@type": "PostalAddress", addressLocality: position.location },
    },
    ...(position.workMode === "Remote"
      ? { jobLocationType: "TELECOMMUTE", applicantLocationRequirements: { "@type": "Country", name: "United States" } }
      : {}),
    directApply: true,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jobPostingJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <article className="bg-paper">
        <div className="mx-auto max-w-6xl px-6 pb-24 pt-36 lg:px-8 lg:pt-44">
          <div className="flex items-baseline justify-between border-t border-line pt-3">
            <Eyebrow>{position.practice}</Eyebrow>
            <Eyebrow className="hidden sm:block">Posted {position.datePosted}</Eyebrow>
          </div>

          <h1 className="font-display text-headline-lg mt-12 max-w-4xl font-medium text-ink">
            {position.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-stone sm:text-lg">
            {position.summary}
          </p>

          <dl className="mt-10 grid gap-6 border-t border-line pt-6 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <dt className="text-eyebrow text-stone">Client</dt>
              <dd className="mt-2 text-sm text-ink">{position.client}</dd>
            </div>
            <div>
              <dt className="text-eyebrow text-stone">Location</dt>
              <dd className="mt-2 text-sm text-ink">
                {position.location} · {position.workMode}
              </dd>
            </div>
            <div>
              <dt className="text-eyebrow text-stone">Type</dt>
              <dd className="mt-2 text-sm text-ink">
                {position.employmentType === "FULL_TIME" ? "Full time" : "Contract"}
              </dd>
            </div>
            {position.compensation ? (
              <div>
                <dt className="text-eyebrow text-stone">Compensation</dt>
                <dd className="mt-2 text-sm text-ink">{position.compensation}</dd>
              </div>
            ) : null}
          </dl>

          <div className="mt-16 grid gap-16 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
            <div>
              <Reveal>
                <LedgerRule labels={["The mandate"]} />
                <p className="mt-6 text-base leading-relaxed text-ink/90">{position.about}</p>
              </Reveal>

              <Reveal className="mt-12">
                <LedgerRule labels={["What you will own"]} />
                <ul className="mt-6 space-y-4">
                  {position.responsibilities.map((item) => (
                    <li key={item} className="flex gap-4 text-sm leading-relaxed text-ink">
                      <span aria-hidden="true" className="mt-2.5 h-px w-6 shrink-0 bg-terra" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal className="mt-12">
                <LedgerRule labels={["What the search requires"]} />
                <ul className="mt-6 space-y-4">
                  {position.qualifications.map((item) => (
                    <li key={item} className="flex gap-4 text-sm leading-relaxed text-ink">
                      <span aria-hidden="true" className="mt-2.5 h-px w-6 shrink-0 bg-terra" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal className="mt-12">
                <Link
                  href="/positions"
                  className="inline-flex items-center gap-2 text-sm text-terra transition-colors hover:text-terra-dark"
                >
                  <svg width="14" height="10" viewBox="0 0 14 10" aria-hidden="true" className="rotate-180">
                    <path d="M0 5h12M8.5 1L13 5l-4.5 4" fill="none" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                  All open positions
                </Link>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <div id="apply" className="border border-line bg-paper-dim/60 p-8 sm:p-10">
                <h2 className="font-display text-xl font-medium text-ink">Apply for this position</h2>
                <p className="mt-3 text-sm leading-relaxed text-stone">
                  Applications go directly to the partner running the search. We respond to every
                  applicant within five business days — including the ones we decline.
                </p>
                <div className="mt-8">
                  <ApplyForm positionSlug={position.slug} positionTitle={position.title} />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </article>
    </>
  );
}
