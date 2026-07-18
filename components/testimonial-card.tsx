/**
 * Testimonial card, v2. Attribution fields are clearly-editable
 * placeholders until real, consented client quotes exist.
 */
export function TestimonialCard({
  quote,
  name,
  title,
  company,
}: {
  quote: string;
  name: string;
  title: string;
  company: string;
}) {
  return (
    <blockquote className="glass flex h-full flex-col rounded-xl p-7">
      <svg width="26" height="20" viewBox="0 0 26 20" aria-hidden="true" className="text-acc/60">
        <path
          d="M0 20V11.6C0 4.9 3.9 1 10.4 0l1.2 3.1c-3.7.9-5.6 2.9-5.8 5.9H11V20H0zm15 0V11.6C15 4.9 18.9 1 25.4 0l.6 3.1c-3.7.9-5.6 2.9-5.8 5.9H26V20H15z"
          fill="currentColor"
        />
      </svg>
      <p className="mt-5 flex-1 text-[0.95rem] leading-relaxed text-tx-1">{quote}</p>
      <footer className="mt-6 border-t border-line-1 pt-4">
        <p className="text-sm font-medium text-tx-1">{name}</p>
        <p className="mt-1 text-xs leading-relaxed text-tx-2">
          {title} · {company}
        </p>
      </footer>
    </blockquote>
  );
}
