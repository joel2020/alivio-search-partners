"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { hero } from "@/content/home";

/**
 * Home hero. One orchestrated load sequence: eyebrow, headline lines,
 * dictionary gloss, sub-line, and CTAs rise in on a stagger.
 *
 * The deliberate aesthetic risk lives here: a dictionary-entry gloss
 * ("a·li·vio — n. relief") set as a marginal annotation beside the
 * headline, borrowing the typography of a reference work rather than
 * a marketing site.
 */
export function HeroHome() {
  const reduce = useReducedMotion();

  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section className="relative overflow-hidden bg-paper">
      <div className="mx-auto max-w-6xl px-6 pb-20 pt-36 lg:px-8 lg:pb-28 lg:pt-44">
        <motion.div {...rise(0)}>
          <div className="flex items-baseline justify-between border-t border-line pt-3">
            <p className="text-eyebrow text-stone">{hero.eyebrow}</p>
            <p className="text-eyebrow hidden text-stone sm:block">Retained only</p>
          </div>
        </motion.div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_240px] lg:gap-16">
          <h1 className="font-display text-headline-xl font-medium text-ink">
            {hero.headlineLines.map((line, i) => {
              const isLast = i === hero.headlineLines.length - 1;
              const endsWithPeriod = isLast && line.endsWith(".");
              return (
                <motion.span key={line} className="block" {...rise(0.15 + i * 0.12)}>
                  {endsWithPeriod ? (
                    <>
                      {line.slice(0, -1)}
                      <span className="text-terra">.</span>
                    </>
                  ) : (
                    line
                  )}
                </motion.span>
              );
            })}
          </h1>

          <motion.aside
            {...rise(0.5)}
            className="self-end border-l border-terra pl-5 lg:mb-2"
            aria-label="On the name Alivio"
          >
            <p className="font-display text-lg italic leading-snug text-ink">a·li·vio</p>
            <p className="mt-1 text-sm leading-relaxed text-stone">
              <span className="italic">n.</span> Spanish — relief; the lifting of a weight.
            </p>
          </motion.aside>
        </div>

        <motion.p
          {...rise(0.62)}
          className="mt-10 max-w-2xl text-base leading-relaxed text-stone sm:text-lg"
        >
          {hero.sub}
        </motion.p>

        <motion.div {...rise(0.74)} className="mt-10 flex flex-wrap gap-4">
          <Link
            href={hero.primaryCta.href}
            className="border border-ink bg-ink px-7 py-3.5 text-sm text-paper transition-colors hover:border-terra hover:bg-terra"
          >
            {hero.primaryCta.label}
          </Link>
          <Link
            href={hero.secondaryCta.href}
            className="border border-ink/25 bg-transparent px-7 py-3.5 text-sm text-ink transition-colors hover:border-terra hover:text-terra"
          >
            {hero.secondaryCta.label}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
