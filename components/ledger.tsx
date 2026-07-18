import { cn } from "@/lib/utils";

/**
 * The recurring "ledger" motif: hairline rules with small uppercase
 * metadata labels, in the manner of a private placement memorandum.
 */

export function Eyebrow({
  children,
  onInk = false,
  className,
}: {
  children: React.ReactNode;
  onInk?: boolean;
  className?: string;
}) {
  return (
    <p className={cn("text-eyebrow", onInk ? "text-stone-light" : "text-stone", className)}>
      {children}
    </p>
  );
}

/** Hairline rule with distributed metadata labels above content. */
export function LedgerRule({
  labels,
  onInk = false,
  className,
}: {
  labels: string[];
  onInk?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-baseline justify-between gap-4 border-t pt-3",
        onInk ? "border-line-ink" : "border-line",
        className
      )}
    >
      {labels.map((label, i) => (
        <span
          key={label + i}
          className={cn(
            "text-eyebrow",
            onInk ? "text-stone-light" : "text-stone",
            i > 0 && "text-right"
          )}
        >
          {label}
        </span>
      ))}
    </div>
  );
}

/** Section header in the ledger idiom: rule, eyebrow, display heading. */
export function SectionHeader({
  eyebrow,
  heading,
  body,
  onInk = false,
  className,
}: {
  eyebrow: string;
  heading: string;
  body?: string;
  onInk?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("border-t pt-4", onInk ? "border-line-ink" : "border-line", className)}>
      <Eyebrow onInk={onInk}>{eyebrow}</Eyebrow>
      <h2
        className={cn(
          "font-display text-headline-md mt-6 max-w-3xl font-medium",
          onInk ? "text-paper" : "text-ink"
        )}
      >
        {heading}
      </h2>
      {body ? (
        <p
          className={cn(
            "mt-5 max-w-2xl text-base leading-relaxed",
            onInk ? "text-stone-light" : "text-stone"
          )}
        >
          {body}
        </p>
      ) : null}
    </div>
  );
}
