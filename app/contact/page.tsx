import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { Eyebrow, SectionHeader } from "@/components/ledger";
import { ContactForm } from "@/components/contact-form";
import { BookCall } from "@/components/book-call";
import { contactHero, booking } from "@/content/contact";
import { site, offices } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact — Start a Search",
  description:
    "Start a retained search or a nearshore team build. Offices in New York, Miami, and Bogotá. A partner responds within one business day.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="bg-paper" aria-label="Contact">
      <div className="mx-auto max-w-6xl px-6 pb-24 pt-36 lg:px-8 lg:pt-44">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
          {/* Left — the offer */}
          <Reveal>
            <div className="border-t border-line pt-3">
              <Eyebrow>{contactHero.eyebrow}</Eyebrow>
            </div>
            <h1 className="font-display text-headline-lg mt-12 font-medium text-ink">
              {contactHero.heading}
            </h1>
            <p className="mt-8 max-w-md text-base leading-relaxed text-stone sm:text-lg">
              {contactHero.body}
            </p>

            <div className="mt-12 border-t border-line pt-6">
              <p className="text-eyebrow text-stone">{contactHero.directEmailLabel}</p>
              <a
                href={`mailto:${site.email}`}
                className="mt-2 inline-block text-base text-terra underline-offset-4 hover:underline"
              >
                {site.email}
              </a>
            </div>

            <div className="mt-8 border-t border-line pt-6">
              <p className="text-eyebrow text-stone">{contactHero.bookingLabel}</p>
              <a
                href="#book"
                className="mt-2 inline-block text-base text-terra underline-offset-4 hover:underline"
              >
                {contactHero.bookingLink}
              </a>
            </div>

            <div className="mt-12 space-y-6">
              {offices.map((office) => (
                <div key={office.city} className="border-t border-line pt-5">
                  <p className="text-eyebrow text-stone">{office.city}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink">
                    {office.address}
                    <br />
                    {office.postal}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right — the form */}
          <Reveal delay={0.1}>
            <div className="border border-line bg-paper-dim/60 p-8 sm:p-10">
              <ContactForm />
            </div>
          </Reveal>
        </div>

        {/* Cal.com booking */}
        <div id="book" className="mt-24 scroll-mt-28">
          <Reveal>
            <SectionHeader eyebrow={booking.eyebrow} heading={booking.heading} body={booking.body} />
          </Reveal>
          <Reveal className="mt-10">
            <BookCall />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
