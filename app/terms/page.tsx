import type { Metadata } from "next";
import { LedgerRule } from "@/components/ledger";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms governing the use of the Alivio Search Partners website.",
  alternates: { canonical: "/terms" },
  robots: { index: false },
};

/* TODO: have counsel review and finalize these terms before launch. */
export default function TermsPage() {
  return (
    <article className="bg-paper">
      <div className="mx-auto max-w-3xl px-6 pb-24 pt-36 lg:px-8 lg:pt-44">
        <LedgerRule labels={["Legal", "Last updated: July 2026"]} />
        <h1 className="font-display text-headline-md mt-10 font-medium text-ink">Terms of Use</h1>

        <div className="mt-10 space-y-8 text-base leading-relaxed text-ink/90">
          <p>
            These terms govern your use of the Alivio Search Partners website. By using the site,
            you accept them.
          </p>

          <section>
            <h2 className="font-display text-xl font-medium text-ink">Use of the site</h2>
            <p className="mt-4">
              The content on this site is provided for general information about our firm and
              services. It does not constitute professional advice, an offer of engagement, or a
              guarantee of any outcome. Engagements are governed exclusively by written agreements
              between Alivio and its clients.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-ink">Intellectual property</h2>
            <p className="mt-4">
              The site, its design, and its content are the property of Alivio Search Partners LLC
              or its licensors. You may not reproduce or distribute site content for commercial
              purposes without written permission.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-ink">Limitation of liability</h2>
            <p className="mt-4">
              The site is provided on an &ldquo;as is&rdquo; basis. To the fullest extent permitted
              by law, Alivio disclaims all warranties and will not be liable for damages arising
              from use of the site or reliance on its content.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-ink">Contact</h2>
            <p className="mt-4">
              Questions about these terms may be directed to{" "}
              <a href={`mailto:${site.email}`} className="text-terra underline underline-offset-2">
                {site.email}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
