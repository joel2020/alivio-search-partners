import Link from "next/link";
import { Logo } from "@/components/logo";
import { NewsletterForm } from "@/components/newsletter-form";
import { site, offices, footer } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="on-ink bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.4fr]">
          <div>
            <Logo onInk />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-stone-light">
              {site.tagline}
            </p>
            <a
              href={site.linkedin}
              className="mt-6 inline-flex items-center gap-2 text-sm text-stone-light transition-colors hover:text-paper"
              aria-label={`${site.name} on LinkedIn`}
            >
              {/* TODO: confirm final LinkedIn URL */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
              </svg>
              LinkedIn
            </a>
          </div>

          <nav aria-label="Footer — practices">
            <p className="text-eyebrow text-stone-light">{footer.practices.heading}</p>
            <ul className="mt-5 space-y-3">
              {footer.practices.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-paper/90 transition-colors hover:text-terra-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer — company">
            <p className="text-eyebrow text-stone-light">{footer.company.heading}</p>
            <ul className="mt-5 space-y-3">
              {footer.company.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-paper/90 transition-colors hover:text-terra-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-eyebrow text-stone-light">{footer.offices.heading}</p>
            <ul className="mt-5 space-y-4">
              {offices.map((office) => (
                <li key={office.city} className="text-sm leading-relaxed text-paper/90">
                  <span className="font-medium">{office.city}</span>
                  <br />
                  <span className="text-stone-light">
                    {office.address}, {office.postal}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <p className="text-eyebrow text-stone-light">{footer.newsletter.heading}</p>
              <p className="mt-3 text-sm leading-relaxed text-stone-light">
                {footer.newsletter.body}
              </p>
              <div className="mt-4">
                <NewsletterForm />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line-ink pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-stone-light">{footer.legal.line}</p>
          <div className="flex gap-6">
            {footer.legal.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-stone-light transition-colors hover:text-paper"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
