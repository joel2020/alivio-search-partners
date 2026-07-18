import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { InsightCard } from "@/components/insight-card";
import { CtaBand } from "@/components/cta-band";
import { getAllInsights } from "@/lib/insights";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Notes from the field on executive search, healthcare leadership, and nearshore LATAM talent strategy — written by the partners who run the searches.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  const insights = getAllInsights();

  return (
    <>
      <PageHeader
        eyebrow="Insights"
        headlineLines={["Notes from the field."]}
        intro="What we are seeing in live searches — compensation, market movement, and the decisions that separate searches that close from searches that stall. Written by partners, not a content team."
        meta={["Published monthly"]}
      />

      <section className="bg-paper" aria-label="All insights">
        <div className="mx-auto max-w-6xl px-6 pb-20 lg:px-8 lg:pb-28">
          <div className="grid gap-14 md:grid-cols-3 md:gap-8">
            {insights.map((insight, i) => (
              <Reveal key={insight.slug} delay={i * 0.08}>
                <InsightCard insight={insight} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        heading="The market brief, before it is published."
        body="Clients see our compensation and market data first. Start a conversation and we will share what is relevant to your search."
        primary={{ label: "Start a Search", href: "/contact" }}
      />
    </>
  );
}
