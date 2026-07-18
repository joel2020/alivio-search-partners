import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { SectionHeader, LedgerRule } from "@/components/ledger";
import { CtaBand } from "@/components/cta-band";
import {
  productHero,
  productStats,
  modules,
  humanLayer,
  engagementModels,
  productCta,
} from "@/content/product";

export const metadata: Metadata = {
  title: "AI Candidate Engine — AI-Powered Recruiting, Human-Driven Results",
  description:
    "Install an AI-powered recruiting engine for hard-to-fill technical and clinical hiring: AI sourcing, structured scoring, personalized outreach, and calibrated shortlists in 48 hours — every slate reviewed by a partner.",
  alternates: { canonical: "/product" },
};

export default function ProductPage() {
  return (
    <>
      <PageHeader
        eyebrow={productHero.eyebrow}
        headlineLines={productHero.headlineLines}
        intro={productHero.intro}
        meta={productHero.meta}
      />

      {/* Proof stats */}
      <section className="bg-paper-dim" aria-label="Engine performance">
        <div className="mx-auto max-w-6xl px-6 py-14 lg:px-8">
          <dl className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {productStats.items.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.06}>
                <div className="border-t border-line pt-5">
                  <dd className="font-display text-headline-sm font-medium text-ink">
                    {stat.value}
                  </dd>
                  <dt className="mt-2 text-sm leading-relaxed text-stone">{stat.label}</dt>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* Six modules */}
      <section className="bg-paper" aria-label="Engine modules">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          <Reveal>
            <SectionHeader eyebrow={modules.eyebrow} heading={modules.heading} body={modules.body} />
          </Reveal>
          <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-14">
            {modules.items.map((module, i) => (
              <Reveal key={module.name} delay={(i % 3) * 0.08}>
                <LedgerRule labels={[module.index, "Module"]} />
                <h3 className="font-display mt-6 text-xl font-medium text-ink">{module.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone">{module.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Human layer — dark band */}
      <section className="on-ink bg-ink" aria-label="Human oversight">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          <Reveal>
            <SectionHeader
              onInk
              eyebrow={humanLayer.eyebrow}
              heading={humanLayer.heading}
              body={humanLayer.body}
            />
          </Reveal>
          <ul className="mt-14 grid gap-6 sm:grid-cols-2">
            {humanLayer.points.map((point) => (
              <Reveal key={point}>
                <li className="flex gap-4 text-sm leading-relaxed text-paper/90">
                  <span aria-hidden="true" className="mt-2.5 h-px w-6 shrink-0 bg-terra-light" />
                  {point}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Engagement models */}
      <section id="pricing" className="bg-paper scroll-mt-28" aria-label="Engagement models">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          <Reveal>
            <SectionHeader
              eyebrow={engagementModels.eyebrow}
              heading={engagementModels.heading}
              body={engagementModels.body}
            />
          </Reveal>
          <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
            {engagementModels.items.map((model, i) => (
              <Reveal key={model.name} delay={i * 0.08}>
                <div className="flex h-full flex-col">
                  <LedgerRule labels={[model.name]} />
                  <p className="font-display text-headline-sm mt-6 font-medium text-ink">
                    {model.price}
                  </p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-stone">{model.body}</p>
                  <p className="mt-6 border-l border-terra pl-4 text-xs leading-relaxed text-ink">
                    {model.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-14">
            <p className="max-w-2xl text-sm leading-relaxed text-stone">
              Not sure which fits? Start with the strategy call — we routinely tell companies the
              engine is more than they need, and a{" "}
              <Link href="/process" className="text-terra underline underline-offset-2 hover:text-terra-dark">
                retained search
              </Link>{" "}
              or a{" "}
              <Link
                href="/practices/nearshore-latam"
                className="text-terra underline underline-offset-2 hover:text-terra-dark"
              >
                nearshore team
              </Link>{" "}
              is the better instrument.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand
        heading={productCta.heading}
        body={productCta.body}
        primary={productCta.primary}
        secondary={productCta.secondary}
      />
    </>
  );
}
