import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { LedgerRule } from "@/components/ledger";
import { CtaBand } from "@/components/cta-band";
import { positions, positionsIntro } from "@/content/positions";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Open Positions — Executive & Nearshore Roles",
  description:
    "Open executive searches and nearshore LATAM roles at Alivio Search Partners: healthcare leadership, technology leadership, and senior positions in Colombia, Mexico, Argentina, and Brazil.",
  alternates: { canonical: "/positions" },
};

export default function PositionsPage() {
  return (
    <>
      <PageHeader
        eyebrow={positionsIntro.eyebrow}
        headlineLines={positionsIntro.headlineLines}
        intro={positionsIntro.intro}
        meta={[`${positions.length} open mandates`]}
      />

      <section className="bg-paper" aria-label="Open positions">
        <div className="mx-auto max-w-6xl px-6 pb-20 lg:px-8 lg:pb-28">
          <ul>
            {positions.map((position, i) => (
              <Reveal key={position.slug} as="li" delay={i * 0.04}>
                <Link
                  href={`/positions/${position.slug}`}
                  className="group block border-b border-line py-8 transition-colors first:border-t hover:bg-paper-dim/50"
                >
                  <div className="grid gap-3 sm:grid-cols-[1.4fr_1fr_auto] sm:items-baseline sm:gap-8">
                    <div>
                      <p className="text-eyebrow text-stone">{position.practice}</p>
                      <h2 className="font-display mt-3 text-xl font-medium text-ink transition-colors group-hover:text-terra">
                        {position.title}
                      </h2>
                      <p className="mt-2 text-sm text-stone">{position.client}</p>
                    </div>
                    <p className="text-sm leading-relaxed text-stone">{position.summary}</p>
                    <p className="text-eyebrow text-terra">
                      {position.location} · {position.workMode}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </ul>

          <Reveal className="mt-14">
            <LedgerRule labels={["General applications"]} />
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-stone">
              {positionsIntro.generalNote}{" "}
              <a
                href={`mailto:${site.email}?subject=General application`}
                className="text-terra underline underline-offset-2 hover:text-terra-dark"
              >
                {positionsIntro.generalCta}
              </a>
              . Most of our searches never reach this page.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand
        heading="Hiring, not looking?"
        body="If you are on the other side of the table, start a search and we will show you how these mandates get filled."
        primary={{ label: "Start a Search", href: "/contact" }}
      />
    </>
  );
}
