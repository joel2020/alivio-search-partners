import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";

/**
 * Bento capability grid. Cards span 1 or 2 columns on desktop; the
 * grid collapses to a single column on mobile.
 */
export function BentoGrid({ children }: { children: React.ReactNode }) {
  return <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{children}</div>;
}

export function BentoCard({
  eyebrow,
  title,
  body,
  wide = false,
  soon = false,
  visual,
  delay = 0,
}: {
  eyebrow: string;
  title: string;
  body: string;
  wide?: boolean;
  soon?: boolean;
  visual?: React.ReactNode;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className={cn(wide && "md:col-span-2")}>
      <article
        className={cn(
          "glass group relative flex h-full flex-col overflow-hidden rounded-xl p-7 transition-colors duration-300 hover:border-line-2 hover:bg-srf-2"
        )}
      >
        <div className="flex items-center justify-between gap-3">
          <p className="text-eyebrow text-acc">{eyebrow}</p>
          {soon ? <Badge variant="soon">Coming soon</Badge> : null}
        </div>
        <h3 className="font-display mt-4 text-xl font-semibold tracking-tight text-tx-1">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-tx-2">{body}</p>
        {visual ? <div className="mt-6 flex-1">{visual}</div> : null}
      </article>
    </Reveal>
  );
}
