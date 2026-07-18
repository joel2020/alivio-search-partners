import Link from "next/link";
import { Reveal } from "@/components/reveal";

/**
 * Full-bleed navy call-to-action band used at the foot of pages.
 */
export function CtaBand({
  heading,
  body,
  primary,
  secondary,
}: {
  heading: string;
  body: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="on-ink bg-ink">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
        <Reveal>
          <div className="border-t border-line-ink pt-4">
            <h2 className="font-display text-headline-md mt-6 max-w-3xl font-medium text-paper">
              {heading}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-stone-light">{body}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href={primary.href}
                className="border border-terra bg-terra px-7 py-3.5 text-sm text-paper transition-colors hover:border-terra-light hover:bg-terra-dark"
              >
                {primary.label}
              </Link>
              {secondary ? (
                <Link
                  href={secondary.href}
                  className="border border-paper/30 px-7 py-3.5 text-sm text-paper transition-colors hover:border-terra-light hover:text-terra-light"
                >
                  {secondary.label}
                </Link>
              ) : null}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
