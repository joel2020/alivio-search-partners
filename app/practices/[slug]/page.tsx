import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { SectionHeader, LedgerRule, Eyebrow } from "@/components/ledger";
import { CostComparison } from "@/components/cost-comparison";
import { TimezoneGraphic } from "@/components/timezone-graphic";
import { DuotoneFigure } from "@/components/duotone-figure";
import { CtaBand } from "@/components/cta-band";
import { practices, getPractice } from "@/content/practices";

export function generateStaticParams() {
  return practices.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const practice = getPractice(slug);
  if (!practice) return {};
  return {
    title: practice.metaTitle,
    description: practice.metaDescription,
    alternates: { canonical: `/practices/${practice.slug}` },
  };
}

const practiceImages: Record<string, { src: string; caption: string; meta: string }> = {
  healthcare: { src: "/images/skyline-nyc.svg", caption: "New York", meta: "US National" },
  technology: { src: "/images/skyline-miami.svg", caption: "Miami", meta: "US · Remote" },
  "nearshore-latam": { src: "/images/skyline-bogota.svg", caption: "Bogotá", meta: "LATAM" },
};

export default async function PracticePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const practice = getPractice(slug);
  if (!practice) notFound();

  const image = practiceImages[practice.slug];
  const nearshore = practice.nearshore;

  return (
    <>
      <PageHeader
        eyebrow={practice.eyebrow}
        headlineLines={[practice.headline]}
        intro={practice.intro}
        meta={["New York", "Miami", "Bogotá"]}
      />

      {/* Roles and sectors */}
      <section className="bg-paper" aria-label="Coverage">
        <div className="mx-auto max-w-6xl px-6 pb-20 lg:px-8 lg:pb-28">
          <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <Reveal>
              <div className="border-t border-line pt-4">
                <Eyebrow>{practice.roles.heading}</Eyebrow>
                <ul className="mt-8 divide-y divide-line">
                  {practice.roles.items.map((role) => (
                    <li key={role} className="py-3 text-sm text-ink">
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <div className="space-y-16">
              <Reveal delay={0.1}>
                <div className="border-t border-line pt-4">
                  <Eyebrow>{practice.sectors.heading}</Eyebrow>
                  <ul className="mt-8 space-y-4">
                    {practice.sectors.items.map((sector) => (
                      <li key={sector} className="flex gap-4 text-sm leading-relaxed text-ink">
                        <span aria-hidden="true" className="mt-2.5 h-px w-6 shrink-0 bg-terra" />
                        {sector}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              {image ? (
                <Reveal delay={0.15}>
                  <DuotoneFigure
                    src={image.src}
                    alt={`${image.caption} — placeholder cityscape`}
                    caption={image.caption}
                    meta={image.meta}
                  />
                </Reveal>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {/* Nearshore-only sections */}
      {nearshore ? (
        <>
          <section className="bg-paper-dim" aria-label="Cost and quality">
            <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
              <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
                <Reveal>
                  <SectionHeader
                    eyebrow="The economics"
                    heading={nearshore.costArgument.heading}
                    body={nearshore.costArgument.body}
                  />
                </Reveal>
                <Reveal delay={0.12} className="self-center">
                  <CostComparison
                    title={nearshore.costArgument.comparison.title}
                    note={nearshore.costArgument.comparison.note}
                    rows={nearshore.costArgument.comparison.rows}
                  />
                </Reveal>
              </div>
            </div>
          </section>

          <section className="bg-paper" aria-label="Timezone alignment">
            <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
              <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
                <Reveal>
                  <SectionHeader
                    eyebrow="Timezone"
                    heading={nearshore.timezone.heading}
                    body={nearshore.timezone.body}
                  />
                </Reveal>
                <Reveal delay={0.12} className="self-center">
                  <TimezoneGraphic
                    zones={nearshore.timezone.zones}
                    workdayNote={nearshore.timezone.workdayNote}
                  />
                </Reveal>
              </div>
            </div>
          </section>

          <section className="on-ink bg-ink" aria-label="Compliance">
            <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
              <Reveal>
                <SectionHeader
                  onInk
                  eyebrow="Compliance & EOR"
                  heading={nearshore.compliance.heading}
                  body={nearshore.compliance.body}
                />
              </Reveal>
              <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
                {nearshore.compliance.items.map((item, i) => (
                  <Reveal key={item.title} delay={i * 0.08}>
                    <div className="border-t border-line-ink pt-5">
                      <h3 className="font-display text-xl font-medium text-paper">{item.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-stone-light">{item.body}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-paper" aria-label="Country coverage">
            <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
              <Reveal>
                <SectionHeader eyebrow="Coverage" heading={nearshore.countries.heading} />
              </Reveal>
              <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                {nearshore.countries.items.map((country, i) => (
                  <Reveal key={country.name} delay={i * 0.08}>
                    <LedgerRule labels={[country.name]} />
                    <p className="mt-5 text-sm font-medium text-ink">{country.strengths}</p>
                    <p className="mt-3 text-sm leading-relaxed text-stone">{country.note}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        </>
      ) : null}

      {/* Representative searches */}
      <section className={nearshore ? "bg-paper-dim" : "bg-paper-dim"} aria-label="Representative searches">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          <Reveal>
            <div className="flex items-baseline justify-between border-t border-line pt-4">
              <Eyebrow>{practice.examples.heading}</Eyebrow>
              <Eyebrow className="hidden sm:block">{practice.examples.note}</Eyebrow>
            </div>
          </Reveal>
          <ul className="mt-10">
            {practice.examples.items.map((example, i) => (
              <Reveal key={example.role} as="li" delay={i * 0.05}>
                <div className="grid gap-2 border-b border-line py-6 sm:grid-cols-[1.2fr_1fr_auto] sm:items-baseline sm:gap-8">
                  <p className="font-display text-lg font-medium text-ink">{example.role}</p>
                  <p className="text-sm text-stone">{example.client}</p>
                  <p className="text-eyebrow text-terra">{example.detail}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        heading={practice.cta.heading}
        body={practice.cta.body}
        primary={{ label: practice.cta.label, href: "/contact" }}
      />
    </>
  );
}
