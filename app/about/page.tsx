import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { SectionHeader, LedgerRule, Eyebrow } from "@/components/ledger";
import { DuotoneFigure } from "@/components/duotone-figure";
import { CtaBand } from "@/components/cta-band";
import { aboutHero, story, values, team, locations } from "@/content/about";
import { offices } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Alivio Search Partners is a retained executive search firm with offices in New York, Miami, and Bogotá. Alivio means relief — removing the weight of the leadership hire.",
  alternates: { canonical: "/about" },
};

const officeImages = [
  { src: "/images/skyline-nyc.svg", caption: "New York", meta: "Healthcare · Technology" },
  { src: "/images/skyline-miami.svg", caption: "Miami", meta: "Client advisory" },
  { src: "/images/skyline-bogota.svg", caption: "Bogotá", meta: "Nearshore practice" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow={aboutHero.eyebrow}
        headlineLines={aboutHero.headlineLines}
        intro={aboutHero.intro}
        meta={["Est. New York", "Retained only"]}
      />

      {/* Firm story */}
      <section className="bg-paper" aria-label="The firm">
        <div className="mx-auto max-w-6xl px-6 pb-20 lg:px-8 lg:pb-28">
          <div className="grid gap-16 lg:grid-cols-[240px_1fr] lg:gap-20">
            <Reveal>
              <div className="border-t border-line pt-4">
                <Eyebrow>{story.eyebrow}</Eyebrow>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="space-y-7 border-t border-line pt-8 lg:border-t-0 lg:pt-1">
                {story.paragraphs.map((paragraph, i) => (
                  <p
                    key={i}
                    className="max-w-2xl text-base leading-relaxed text-ink sm:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values — dark band */}
      <section className="on-ink bg-ink" aria-label="Values">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          <Reveal>
            <SectionHeader onInk eyebrow={values.eyebrow} heading={values.heading} />
          </Reveal>
          <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {values.items.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.08}>
                <div className="border-t border-line-ink pt-5">
                  <h3 className="font-display text-xl font-medium text-paper">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone-light">{value.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-paper" aria-label="Leadership">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          <Reveal>
            <SectionHeader eyebrow={team.eyebrow} heading={team.heading} body={team.body} />
          </Reveal>
          <ul className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {team.members.map((member, i) => (
              <Reveal key={`${member.title}-${i}`} as="li" delay={(i % 3) * 0.08}>
                {/* TODO: replace placeholder monogram blocks with real headshots.
                    Keep the duotone grade for consistency. */}
                <div className="img-duotone flex aspect-[4/5] items-end bg-ink p-6">
                  <span
                    aria-hidden="true"
                    className="font-display text-headline-lg font-medium text-paper/25"
                  >
                    {member.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </span>
                </div>
                <LedgerRule className="mt-4" labels={[member.focus, member.location]} />
                <p className="mt-4 font-display text-lg font-medium text-ink">{member.name}</p>
                <p className="mt-1 text-sm text-stone">{member.title}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Offices */}
      <section className="bg-paper-dim" aria-label="Offices">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
          <Reveal>
            <SectionHeader
              eyebrow={locations.eyebrow}
              heading={locations.heading}
              body={locations.body}
            />
          </Reveal>
          <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
            {officeImages.map((image, i) => {
              const office = offices[i];
              return (
                <Reveal key={image.caption} delay={i * 0.08}>
                  <DuotoneFigure
                    src={image.src}
                    alt={`${image.caption} — placeholder cityscape`}
                    caption={image.caption}
                    meta={image.meta}
                  />
                  <p className="mt-4 text-sm leading-relaxed text-stone">
                    {office.address}
                    <br />
                    {office.postal}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand
        heading="Meet the partner who would run your search."
        body="A thirty-minute conversation tells you more about a firm than any website. We are easy to reach and direct on the phone."
        primary={{ label: "Start a Search", href: "/contact" }}
      />
    </>
  );
}
