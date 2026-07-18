import { cn } from "@/lib/utils";

/**
 * Cost-comparison visual: horizontal ledger bars, typeset like a
 * table in a placement memorandum rather than a marketing chart.
 */
export function CostComparison({
  title,
  note,
  rows,
  takeaway,
  onInk = false,
}: {
  title: string;
  note: string;
  rows: readonly { label: string; amount: number; display: string }[];
  takeaway?: string;
  onInk?: boolean;
}) {
  const max = Math.max(...rows.map((r) => r.amount));
  return (
    <figure className={cn("border-t pt-4", onInk ? "border-line-ink" : "border-line")}>
      <figcaption
        className={cn(
          "flex flex-wrap items-baseline justify-between gap-2",
          onInk ? "text-stone-light" : "text-stone"
        )}
      >
        <span className="text-eyebrow">{title}</span>
        <span className="text-xs">{note}</span>
      </figcaption>
      <div className="mt-8 space-y-7">
        {rows.map((row) => {
          const width = (row.amount / max) * 100;
          const isLatam = row.label.toLowerCase().includes("latam");
          return (
            <div key={row.label}>
              <div
                className={cn(
                  "flex items-baseline justify-between text-sm",
                  onInk ? "text-paper" : "text-ink"
                )}
              >
                <span>{row.label}</span>
                <span className="font-display text-lg font-medium tabular-nums">
                  {row.display}
                </span>
              </div>
              <div
                className={cn("mt-2 h-[3px] w-full", onInk ? "bg-line-ink" : "bg-line")}
                role="presentation"
              >
                <div
                  className={cn(
                    "h-full",
                    isLatam ? "bg-terra" : onInk ? "bg-stone-light" : "bg-ink"
                  )}
                  style={{ width: `${width}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
      {takeaway ? (
        <p
          className={cn(
            "mt-8 border-l border-terra pl-4 text-sm leading-relaxed",
            onInk ? "text-paper" : "text-ink"
          )}
        >
          {takeaway}
        </p>
      ) : null}
    </figure>
  );
}
