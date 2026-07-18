import Link from "next/link";
import { LedgerRule } from "@/components/ledger";

/**
 * Practice card in the ledger idiom: hairline rule, metadata row,
 * display title, body, and a quiet directional link.
 */
export function PracticeCard({
  index,
  meta,
  title,
  body,
  href,
}: {
  index: string;
  meta: { area: string; scope: string; geography: string };
  title: string;
  body: string;
  href: string;
}) {
  return (
    <Link href={href} className="group block">
      <LedgerRule labels={[`${index} — ${meta.scope}`, meta.geography]} />
      <h3 className="font-display text-headline-sm mt-8 font-medium text-ink transition-colors group-hover:text-terra">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-relaxed text-stone">{body}</p>
      <span className="mt-6 inline-flex items-center gap-2 text-sm text-terra">
        View practice
        <svg
          width="14"
          height="10"
          viewBox="0 0 14 10"
          aria-hidden="true"
          className="transition-transform duration-300 group-hover:translate-x-1"
        >
          <path d="M0 5h12M8.5 1L13 5l-4.5 4" fill="none" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      </span>
    </Link>
  );
}
