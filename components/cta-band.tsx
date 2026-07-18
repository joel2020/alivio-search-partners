import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { Magnetic } from "@/components/magnetic";

/**
 * Full-bleed call-to-action band used at the foot of pages.
 * v2: dark base with a contained accent-gradient wash.
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
    <section className="relative overflow-hidden bg-bg0">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-[-40%] h-[80%] opacity-25"
        style={{ background: "radial-gradient(ellipse at center, var(--acc) 0%, rgba(69,150,255,0.3) 40%, transparent 68%)" }}
      />
      <div className="relative mx-auto max-w-6xl px-6 py-24 text-center lg:px-8 lg:py-32">
        <Reveal>
          <h2 className="font-display text-headline-lg mx-auto max-w-3xl font-semibold text-tx-1">
            {heading}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-tx-2 sm:text-lg">
            {body}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Magnetic>
              <Link
                href={primary.href}
                className="glow-acc inline-flex h-12 items-center rounded-lg bg-acc px-7 text-sm font-semibold text-acc-ink transition-colors hover:bg-acc-2"
              >
                {primary.label}
              </Link>
            </Magnetic>
            {secondary ? (
              <Link
                href={secondary.href}
                className="glass inline-flex h-12 items-center rounded-lg px-7 text-sm font-medium text-tx-1 transition-colors hover:border-line-2 hover:bg-srf-2"
              >
                {secondary.label}
              </Link>
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
