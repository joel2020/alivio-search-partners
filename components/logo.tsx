import Link from "next/link";
import { cn } from "@/lib/utils";
import { site } from "@/content/site";

/**
 * Wordmark lockup, v2: tight grotesk "Alivio" with an accent-gradient
 * terminal dot, "Search Partners" letterspaced beneath. The onInk prop
 * is kept for call-site compatibility; both variants read on dark.
 */
export function Logo({ onInk = false, className }: { onInk?: boolean; className?: string }) {
  void onInk;
  return (
    <Link
      href="/"
      aria-label={`${site.name} — home`}
      className={cn("group inline-flex flex-col leading-none", className)}
    >
      <span className="font-display text-[1.4rem] font-bold tracking-[-0.03em] text-tx-1">
        {site.wordmark.primary}
        <span className="text-grad">.</span>
      </span>
      <span className="mt-1 text-[0.56rem] font-medium uppercase tracking-[0.3em] text-tx-3">
        {site.wordmark.secondary}
      </span>
    </Link>
  );
}
