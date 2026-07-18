import Link from "next/link";
import { LedgerRule } from "@/components/ledger";
import type { InsightMeta } from "@/lib/insights";
import { formatDate } from "@/lib/insights";

export function InsightCard({ insight }: { insight: InsightMeta }) {
  return (
    <Link href={`/insights/${insight.slug}`} className="group block">
      <LedgerRule labels={[insight.category, formatDate(insight.date)]} />
      <h3 className="font-display mt-6 text-xl font-medium leading-snug text-ink transition-colors group-hover:text-terra">
        {insight.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-stone">{insight.description}</p>
      <span className="mt-5 inline-block text-xs text-stone">{insight.readingTime}</span>
    </Link>
  );
}
