import { Eyebrow } from "@/components/ledger";
import { cn } from "@/lib/utils";

/**
 * Interior page header in the ledger idiom. Single h1 per page.
 */
export function PageHeader({
  eyebrow,
  headlineLines,
  intro,
  meta,
  onInk = false,
}: {
  eyebrow: string;
  headlineLines: readonly string[];
  intro?: string;
  meta?: readonly string[];
  onInk?: boolean;
}) {
  return (
    <div
      className={cn(
        "mx-auto max-w-6xl px-6 pb-16 pt-36 lg:px-8 lg:pb-20 lg:pt-44",
        onInk && "on-ink"
      )}
    >
      <div
        className={cn(
          "flex items-baseline justify-between border-t pt-3",
          onInk ? "border-line-ink" : "border-line"
        )}
      >
        <Eyebrow onInk={onInk}>{eyebrow}</Eyebrow>
        {meta?.length ? (
          <Eyebrow onInk={onInk} className="hidden sm:block">
            {meta.join(" · ")}
          </Eyebrow>
        ) : null}
      </div>
      <h1
        className={cn(
          "font-display text-headline-lg mt-12 max-w-4xl font-medium",
          onInk ? "text-paper" : "text-ink"
        )}
      >
        {headlineLines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </h1>
      {intro ? (
        <p
          className={cn(
            "mt-8 max-w-2xl text-base leading-relaxed sm:text-lg",
            onInk ? "text-stone-light" : "text-stone"
          )}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}
