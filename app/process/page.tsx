import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { SectionHeader, LedgerRule } from "@/components/ledger";
import { CtaBand } from "@/components/cta-band";
import { processHero, stages, guarantee, comparison, processCta } from "@/content/process";

export const metadata: Metadata = {
  title: "Our Retained Search Process",
  description:
    "The Alivio retained search methodology: Brief, Map, Assess, Place. What you receive at each stage, the 12-month replacement guarantee, and an honest comparison with contingency and internal recruiting.",
  alternates: { canonical: "/process" },
};

export default function ProcessPage() {
  return (
    <>
      <PageHeader
        eyebrow={processHero.eyebrow}
        headlineLines={processHero.headlineLines}
        intro={processHero.intro}
        meta={["Brief · Map · Assess · Place"]}
      />

      {/* Stages */}
      <section className="bg-paper" aria-label="The four stages">
        <div className="mx-auto max-w-6xl px-6 pb-20 lg:px-8 lg:pb-28">
          <ol className="space-y-20">
            {stages.map((stage, i) => (
              <Reveal key={stage.name} as="li" delay={i === 0 ? 0 : 0.05}>
                <LedgerRule labels={[`Stage ${stage.number} — ${stage.name}`, stage.window]} />
                <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
                  <div>
                    <h2 className="font-display text-headline-sm font-medium text-ink">
                      {stage.name}
                    </h2>
                    <p className="mt-5 max-w-xl text-base leading-relaxed text-stone">
                      {stage.body}
                    </p>
                  </div>
                  <div>
                    <p className="text-eyebrow text-stone">What you receive</p>
                    <ul className="mt-5 space-y-4">
                      {stage.deliverables.map((deliverable) => (
                        <li
                          key={deliverable}
                          className="flex gap-4 text-sm leading-relaxed text-ink"
                        >
                          <span aria-hidden="true" className="mt-2.5 h-px w-6 shrink-0 bg-terra" />
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Guarantee — dark band */}
      <section className="on-ink bg-ink" aria-label="The guarantee">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          <Reveal>
            <SectionHeader
              onInk
              eyebrow={guarantee.eyebrow}
              heading={guarantee.heading}
              body={guarantee.body}
            />
            <p className="mt-10 max-w-2xl border-l border-terra pl-5 text-sm leading-relaxed text-paper/90">
              {guarantee.note}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Comparison table */}
      <section className="bg-paper" aria-label="Model comparison">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          <Reveal>
            <SectionHeader
              eyebrow={comparison.eyebrow}
              heading={comparison.heading}
              body={comparison.body}
            />
          </Reveal>
          <Reveal className="mt-14">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] border-collapse text-left">
                <caption className="sr-only">
                  Comparison of retained search, contingency recruiting, and internal recruiting
                </caption>
                <thead>
                  <tr className="border-b border-ink">
                    <th scope="col" className="py-4 pr-6 text-eyebrow font-medium text-stone">
                      &nbsp;
                    </th>
                    {comparison.columns.map((column, i) => (
                      <th
                        key={column}
                        scope="col"
                        className={`py-4 pr-6 font-display text-base font-medium ${
                          i === 0 ? "text-terra" : "text-ink"
                        }`}
                      >
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparison.rows.map((row) => (
                    <tr key={row.label} className="border-b border-line align-top">
                      <th
                        scope="row"
                        className="py-5 pr-6 text-eyebrow font-medium text-stone"
                      >
                        {row.label}
                      </th>
                      {row.values.map((value, i) => (
                        <td
                          key={i}
                          className={`py-5 pr-6 text-sm leading-relaxed ${
                            i === 0 ? "text-ink" : "text-stone"
                          }`}
                        >
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        heading={processCta.heading}
        body={processCta.body}
        primary={{ label: processCta.label, href: "/contact" }}
      />
    </>
  );
}
