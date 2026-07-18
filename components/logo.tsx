import Link from "next/link";
import { cn } from "@/lib/utils";
import { site } from "@/content/site";

/**
 * Text-based wordmark lockup: "ALIVIO" in the display serif with
 * "Search Partners" in letterspaced small caps beneath the baseline.
 */
export function Logo({ onInk = false, className }: { onInk?: boolean; className?: string }) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} — home`}
      className={cn("group inline-flex flex-col leading-none", className)}
    >
      <span
        className={cn(
          "font-display text-[1.45rem] font-semibold tracking-[0.01em]",
          onInk ? "text-paper" : "text-ink"
        )}
      >
        {site.wordmark.primary.toUpperCase()}
      </span>
      <span
        className={cn(
          "mt-0.5 text-[0.58rem] font-medium uppercase tracking-[0.32em]",
          onInk ? "text-stone-light" : "text-stone"
        )}
      >
        {site.wordmark.secondary}
      </span>
    </Link>
  );
}
