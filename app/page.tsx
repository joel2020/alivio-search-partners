import type { Metadata } from "next";
import Link from "next/link";
import { HeroHome } from "@/components/hero-home";
import { Reveal } from "@/components/reveal";
import { SectionHeader, LedgerRule, Eyebrow } from "@/components/ledger";
import { PracticeCard } from "@/components/practice-card";
import { CostComparison } from "@/components/cost-comparison";
import { InsightCard } from "@/components/insight-card";
import { CtaBand } from "@/components/cta-band";
import { getAllInsights } from "@/lib/insights";
import { site } from "@/content/site";
import {
  credibility,
  practicesIntro,
  practiceCards,
  howWeWork,
  results,
  nearshoreSpotlight,
  engineSpotlight,
  testimonials,
  insightsTeaser,
  finalCta,
} from "@/content/home";

export const metadata: Metadata = {
  title: `${site.name} — Executive Search Firm | New York · Miami · Bogotá`,
  description:
    "Retained executive search for healthcare, technology, and nearshore LATAM talent. Offices in New York, Miami, and Bogotá. Complete market maps, calibrated shortlists in 21 days, 12-month guarantee.",
};

export default function HomePage() {
  const insights = getAllInsights().slice(0, 3);

  return (
    <>
      <HeroHome />

      {/* Credibility bar */}
      <section className="bg-paper-dim" aria-label="Credibility">
        <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
          <Reveal>
            <p className="text-eyebrow text-stone">{credibility.statLine}</p>
            {/* TODO: replace typeset placeholder names with real grayscale client logos */}
            <ul className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
              {credibility.logos.map((logo) => (
                <li
                  key={logo}
                  className="font-display text-sm font-medium tracking-wide text-stone/70"
                >
                  {logo}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Practices */}
      <section className="bg-paper" aria-label="Practices">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          <Reveal>
            <SectionHeader
              eyebrow={practicesIntro.eyebrow}
              heading={practicesIntro.heading}
              body={practicesIntro.body}
            />
          </Reveal>
          <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
            {practiceCards.map((card, i) => (
              <Reveal key={card.href} delay={i * 0.08}>
                <PracticeCard {...card} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-paper-dim" aria-label="How we work">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          <Reveal>
            <SectionHeader
              eyebrow={howWeWork.eyebrow}
              heading={howWeWork.heading}
              body={howWeWork.body}
            />
          </Reveal>
          <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {howWeWork.steps.map((step, i) => (
              <Reveal key={step.name} as="li" delay={i * 0.08}>
                <LedgerRule labels={[`Step ${step.number}`, step.window]} />
                <h3 className="font-display mt-6 text-xl font-medium text-ink">{step.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone">{step.body}</p>
              </Reveal>
            ))}
          </ol>
          <Reveal className="mt-12">
            <Link
              href={howWeWork.link.href}
              className="inline-flex items-center gap-2 text-sm text-terra transition-colors hover:text-terra-dark"
            >
              {howWeWork.link.label}
              <svg width="14" height="10" viewBox="0 0 14 10" aria-hidden="true">
                <path d="M0 5h12M8.5 1L13 5l-4.5 4" fill="none" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Results — dark band */}
      <section className="on-ink bg-ink" aria-label="Results">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          <Reveal>
            <SectionHeader onInk eyebrow={results.eyebrow} heading={results.heading} />
          </Reveal>
          <dl className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {results.stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.08}>
                <div className="border-t border-line-ink pt-5">
                  <dd className="font-display text-headline-md font-medium text-paper">
                    {stat.value}
                  </dd>
                  <dt className="mt-3 text-sm leading-relaxed text-stone-light">{stat.label}</dt>
                </div>
              </Reveal>
            ))}
          </dl>
          <Reveal className="mt-14">
            <p className="max-w-2xl border-l border-terra pl-5 text-sm leading-relaxed text-paper/90">
              {results.note}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Nearshore spotlight */}
      <section className="bg-paper" aria-label="Nearshore talent spotlight">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <SectionHeader
                eyebrow={nearshoreSpotlight.eyebrow}
                heading={nearshoreSpotlight.heading}
                body={nearshoreSpotlight.body}
              />
              <ul className="mt-10 space-y-4">
                {nearshoreSpotlight.points.map((point) => (
                  <li key={point} className="flex gap-4 text-sm leading-relaxed text-ink">
                    <span aria-hidden="true" className="mt-2.5 h-px w-6 shrink-0 bg-terra" />
                    {point}
                  </li>
                ))}
              </ul>
              <Link
                href={nearshoreSpotlight.cta.href}
                className="mt-10 inline-block border border-ink/25 px-7 py-3.5 text-sm text-ink transition-colors hover:border-terra hover:text-terra"
              >
                {nearshoreSpotlight.cta.label}
              </Link>
            </Reveal>
            <Reveal delay={0.12} className="self-center">
              <CostComparison
                title={nearshoreSpotlight.comparison.title}
                note={nearshoreSpotlight.comparison.note}
                rows={nearshoreSpotlight.comparison.rows}
                takeaway={nearshoreSpotlight.comparison.takeaway}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* AI Candidate Engine spotlight */}
      <section className="bg-paper" aria-label="AI Candidate Engine">
        <div className="mx-auto max-w-6xl px-6 pb-20 lg:px-8 lg:pb-28">
          <Reveal>
            <div className="border border-line bg-paper-dim/60 p-8 sm:p-12">
              <SectionHeader
                eyebrow={engineSpotlight.eyebrow}
                heading={engineSpotlight.heading}
                body={engineSpotlight.body}
              />
              <ul className="mt-8 space-y-4">
                {engineSpotlight.points.map((point) => (
                  <li key={point} className="flex gap-4 text-sm leading-relaxed text-ink">
                    <span aria-hidden="true" className="mt-2.5 h-px w-6 shrink-0 bg-terra" />
                    {point}
                  </li>
                ))}
              </ul>
              <Link
                href={engineSpotlight.cta.href}
                className="mt-10 inline-block border border-ink bg-ink px-7 py-3.5 text-sm text-paper transition-colors hover:border-terra hover:bg-terra"
              >
                {engineSpotlight.cta.label}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-paper-dim" aria-label="Client testimonials">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          <Reveal>
            <div className="border-t border-line pt-4">
              <Eyebrow>{testimonials.eyebrow}</Eyebrow>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-12 lg:grid-cols-3 lg:gap-10">
            {testimonials.items.map((item, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <blockquote className="flex h-full flex-col">
                  <p className="font-display text-lg font-normal italic leading-relaxed text-ink">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <footer className="mt-6 border-t border-line pt-4">
                    {/* TODO: replace with real, attributed client testimonials */}
                    <p className="text-sm font-medium text-ink">{item.name}</p>
                    <p className="mt-1 text-xs leading-relaxed text-stone">
                      {item.title} · {item.company}
                    </p>
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Insights teaser */}
      <section className="bg-paper" aria-label="Insights">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          <Reveal>
            <div className="flex items-end justify-between border-t border-line pt-4">
              <div>
                <Eyebrow>{insightsTeaser.eyebrow}</Eyebrow>
                <h2 className="font-display text-headline-md mt-6 font-medium text-ink">
                  {insightsTeaser.heading}
                </h2>
              </div>
              <Link
                href={insightsTeaser.link.href}
                className="hidden text-sm text-terra transition-colors hover:text-terra-dark sm:block"
              >
                {insightsTeaser.link.label} →
              </Link>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-8">
            {insights.map((insight, i) => (
              <Reveal key={insight.slug} delay={i * 0.08}>
                <InsightCard insight={insight} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        heading={finalCta.heading}
        body={finalCta.body}
        primary={finalCta.primaryCta}
        secondary={finalCta.secondaryCta}
      />
    </>
  );
}
