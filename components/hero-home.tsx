import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { Aurora } from "@/components/aurora";
import { AgentConsole } from "@/components/agent-console";
import { Magnetic } from "@/components/magnetic";
import { Badge } from "@/components/ui/badge";
import { hero } from "@/content/home";

/**
 * v2 hero: aurora backdrop, badge, display headline with gradient
 * terminus, dual CTA, and the animated agent-console product visual.
 */
export function HeroHome() {
  return (
    <section className="relative overflow-hidden bg-bg0" aria-label="Intro">
      <Aurora />
      <div className="relative mx-auto grid max-w-6xl gap-14 px-6 pb-20 pt-36 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12 lg:px-8 lg:pb-28 lg:pt-44">
        <div>
          <Reveal>
            <Badge variant="accent">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-acc-2" />
              {hero.badge}
            </Badge>
            <h1 className="font-display text-hero mt-6 text-balance text-tx-1">
              {hero.headline} <span className="text-grad">{hero.headlineAccent}</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-tx-2">{hero.sub}</p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Magnetic>
                <Link
                  href={hero.primaryCta.href}
                  className="glow-acc inline-flex h-12 items-center rounded-lg bg-acc px-7 text-sm font-semibold text-acc-ink transition-colors hover:bg-acc-2"
                >
                  {hero.primaryCta.label}
                </Link>
              </Magnetic>
              <Link
                href={hero.secondaryCta.href}
                className="glass inline-flex h-12 items-center rounded-lg px-7 text-sm font-medium text-tx-1 transition-colors hover:border-line-2 hover:bg-srf-2"
              >
                {hero.secondaryCta.label}
              </Link>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.15}>
          <AgentConsole />
        </Reveal>
      </div>
    </section>
  );
}
