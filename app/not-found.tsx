import Link from "next/link";
import { LedgerRule } from "@/components/ledger";

export default function NotFound() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-6xl px-6 pb-24 pt-40 lg:px-8 lg:pt-48">
        <LedgerRule labels={["Error 404", "Page not found"]} />
        <h1 className="font-display text-headline-lg mt-12 max-w-3xl font-medium text-ink">
          This page has left the building.
        </h1>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-stone sm:text-lg">
          The page you are looking for does not exist or has moved. In our line of work, that
          usually means someone got promoted.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/"
            className="border border-ink bg-ink px-7 py-3.5 text-sm text-paper transition-colors hover:border-terra hover:bg-terra"
          >
            Back to home
          </Link>
          <Link
            href="/contact"
            className="border border-ink/25 px-7 py-3.5 text-sm text-ink transition-colors hover:border-terra hover:text-terra"
          >
            Start a Search
          </Link>
        </div>
      </div>
    </section>
  );
}
