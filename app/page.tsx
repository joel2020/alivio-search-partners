import type { Metadata } from "next";
import Link from "next/link";
import { HeroHome } from "@/components/hero-home";
import { Reveal } from "@/components/reveal";
import { Section, SectionHeading } from "@/components/section";
import { LogoMarquee } from "@/components/logo-marquee";
import { PipelineFlow } from "@/components/pipeline-flow";
import { BentoGrid, BentoCard } from "@/components/bento";
import { CountUp } from "@/components/count-up";
import { TestimonialCard } from "@/components/testimonial-card";
import { Badge } from "@/components/ui/badge";
import { Faq } from "@/components/faq";
import { CtaBand } from "@/components/cta-band";
import { site } from "@/content/site";
import {
  trustBar,
  problem,
  howItWorks,
  capabilities,
  metrics,
  testimonials,
  integrations,
  engagement,
  faq,
  finalCta,
} from "@/content/home";

export const metadata: Metadata = {
  title: `${site.name} — AI Recruiting Agents for Healthcare Employers`,
  description:
    "Alivio's AI recruiting agents source, score, and voice-screen qualified nurses, clinicians, and healthcare leaders — so clinical roles fill in days, not months. Human recruiters close every hire.",
};

export default function HomePage() {
  return (
    <div className="bg-bg0 text-tx-1">
      <HeroHome />

      {/* Trust bar */}
      <section className="border-y border-line-1 bg-bg1" aria-label="Trusted by">
        <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
          <Reveal>
            <LogoMarquee items={trustBar.logos} label={trustBar.label} />
          </Reveal>
        </div>
      </section>

      {/* The problem */}
      <Section ariaLabel="The problem">
        <SectionHeading eyebrow={problem.eyebrow} heading={problem.heading} body={problem.body} />
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {problem.points.map((point, i) => (
            <Reveal key={point.label} delay={i * 0.08}>
              <div className="glass h-full rounded-xl p-7">
                <p className="font-display text-headline-sm font-semibold text-tx-1">
                  {point.stat}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-tx-2">{point.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* How it works — agent pipeline */}
      <section id="how-it-works" aria-label="How it works" className="scroll-mt-24 bg-bg1">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          <SectionHeading
            eyebrow={howItWorks.eyebrow}
            heading={howItWorks.heading}
            body={howItWorks.body}
          />
          <PipelineFlow steps={howItWorks.steps} />
        </div>
      </section>

      {/* Capabilities bento */}
      <Section ariaLabel="Platform capabilities">
        <SectionHeading
          eyebrow={capabilities.eyebrow}
          heading={capabilities.heading}
          body={capabilities.body}
        />
        <div className="mt-14">
          <BentoGrid>
            {capabilities.cards.map((card, i) => (
              <BentoCard
                key={card.title}
                eyebrow={card.eyebrow}
                title={card.title}
                body={card.body}
                wide={"wide" in card && card.wide}
                delay={i * 0.06}
              />
            ))}
          </BentoGrid>
        </div>
      </Section>

      {/* Metrics band */}
      <section aria-label="Results" className="border-y border-line-1 bg-bg1">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          <SectionHeading eyebrow={metrics.eyebrow} heading={metrics.heading} />
          <dl className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {metrics.stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.08}>
                <div className="border-t border-line-2 pt-5">
                  <dd className="font-display text-headline-md font-semibold text-tx-1">
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </dd>
                  <dt className="mt-3 text-sm leading-relaxed text-tx-2">{stat.label}</dt>
                </div>
              </Reveal>
            ))}
          </dl>
          <Reveal className="mt-14">
            <p className="max-w-2xl border-l-2 border-acc pl-5 text-sm leading-relaxed text-tx-1/90">
              {metrics.note}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <Section ariaLabel="Client testimonials">
        <SectionHeading eyebrow={testimonials.eyebrow} heading="Hiring leaders on the pipeline." />
        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {testimonials.items.map((item, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <TestimonialCard {...item} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Integrations strip */}
      <section aria-label="Integrations" className="border-y border-line-1 bg-bg1">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow={integrations.eyebrow}
            heading={integrations.heading}
            body={integrations.body}
          />
          <Reveal className="mt-10">
            <ul className="flex flex-wrap gap-3">
              {integrations.items.map((item) => (
                <li key={item.name}>
                  <Badge variant={item.status === "live" ? "accent" : "soon"} className="px-4 py-2">
                    {item.name}
                    {item.status === "soon" ? " · coming soon" : ""}
                  </Badge>
                </li>
              ))}
            </ul>
            {/* TODO(phase 4): waitlist form wired to integration_waitlist */}
          </Reveal>
        </div>
      </section>

      {/* Engagement model */}
      <Section ariaLabel="Engagement model">
        <SectionHeading
          eyebrow={engagement.eyebrow}
          heading={engagement.heading}
          body={engagement.body}
        />
        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {engagement.tiers.map((tier, i) => {
            const featured = "featured" in tier && tier.featured;
            return (
              <Reveal key={tier.name} delay={i * 0.08}>
                <article
                  className={
                    featured
                      ? "glass-raised relative h-full rounded-xl border-acc/30 p-7"
                      : "glass h-full rounded-xl p-7"
                  }
                >
                  {featured ? (
                    <Badge variant="accent" className="absolute -top-3 left-6">
                      Most common
                    </Badge>
                  ) : null}
                  <h3 className="font-display text-xl font-semibold tracking-tight text-tx-1">
                    {tier.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-tx-2">{tier.description}</p>
                  <ul className="mt-6 space-y-3">
                    {tier.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-sm text-tx-1">
                        <span aria-hidden="true" className="mt-2 h-px w-4 shrink-0 bg-acc" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
        <Reveal className="mt-10">
          <Link
            href={engagement.cta.href}
            className="inline-flex items-center gap-2 text-sm font-medium text-acc transition-colors hover:text-acc-2"
          >
            {engagement.cta.label}
            <svg width="14" height="10" viewBox="0 0 14 10" aria-hidden="true">
              <path
                d="M0 5h12M8.5 1L13 5l-4.5 4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              />
            </svg>
          </Link>
        </Reveal>
      </Section>

      {/* FAQ */}
      <section aria-label="Frequently asked questions" className="bg-bg1">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:py-28">
          <SectionHeading eyebrow={faq.eyebrow} heading={faq.heading} />
          <Reveal delay={0.1}>
            <Faq items={faq.items} />
          </Reveal>
        </div>
      </section>

      <CtaBand
        heading={finalCta.heading}
        body={finalCta.body}
        primary={finalCta.primaryCta}
        secondary={finalCta.secondaryCta}
      />
    </div>
  );
}
