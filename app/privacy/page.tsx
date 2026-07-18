import type { Metadata } from "next";
import { LedgerRule } from "@/components/ledger";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Alivio Search Partners collects, uses, and protects personal information.",
  alternates: { canonical: "/privacy" },
  robots: { index: false },
};

/* TODO: have counsel review and finalize this policy before launch. */
export default function PrivacyPage() {
  return (
    <article className="bg-paper">
      <div className="mx-auto max-w-3xl px-6 pb-24 pt-36 lg:px-8 lg:pt-44">
        <LedgerRule labels={["Legal", "Last updated: July 2026"]} />
        <h1 className="font-display text-headline-md mt-10 font-medium text-ink">Privacy Policy</h1>

        <div className="mt-10 space-y-8 text-base leading-relaxed text-ink/90">
          <p>
            Alivio Search Partners LLC (&ldquo;Alivio,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;)
            respects the privacy of clients, candidates, and visitors to this website. This policy
            describes what we collect, why, and the choices available to you.
          </p>

          <section>
            <h2 className="font-display text-xl font-medium text-ink">Information we collect</h2>
            <p className="mt-4">
              We collect information you provide directly — such as your name, company, email
              address, phone number, and the contents of messages you send through our contact
              form — and professional information relevant to search engagements, such as career
              history and references, provided by you or by publicly available sources.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-ink">How we use it</h2>
            <p className="mt-4">
              We use this information to respond to inquiries, conduct retained search and talent
              advisory engagements, evaluate candidates with their knowledge, and send occasional
              publications you have requested. We do not sell personal information.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-ink">Sharing</h2>
            <p className="mt-4">
              Candidate information is shared with clients only in the course of an engagement and
              with appropriate care. We use service providers — such as our CRM and form
              processing vendors — under agreements that limit their use of your data to providing
              services to us.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-ink">Retention and security</h2>
            <p className="mt-4">
              We retain personal information for as long as needed for legitimate business
              purposes and applicable legal requirements, and we apply reasonable technical and
              organizational measures to protect it.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-ink">Your choices</h2>
            <p className="mt-4">
              You may request access to, correction of, or deletion of your personal information,
              or unsubscribe from communications, by writing to{" "}
              <a href={`mailto:${site.email}`} className="text-terra underline underline-offset-2">
                {site.email}
              </a>
              . Depending on your jurisdiction, you may have additional rights under applicable
              data protection law.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
