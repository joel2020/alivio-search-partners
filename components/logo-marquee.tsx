/**
 * Trust bar marquee. Renders typeset names until real grayscale logos
 * exist (each item is an honest placeholder — see content/home.ts).
 * The list is duplicated once for a seamless CSS loop; the duplicate
 * is aria-hidden. Under reduced motion the strip is static and the
 * first copy simply wraps.
 */
export function LogoMarquee({ items, label }: { items: readonly string[]; label: string }) {
  return (
    <div aria-label={label}>
      <p className="text-eyebrow text-center text-tx-3">{label}</p>
      <div className="marquee-mask mt-7 overflow-hidden">
        <div className="animate-marquee flex w-max items-center gap-14 pr-14">
          {[false, true].map((clone) => (
            <ul
              key={String(clone)}
              aria-hidden={clone || undefined}
              className="flex shrink-0 items-center gap-14"
            >
              {items.map((item) => (
                <li
                  key={item}
                  className="font-display whitespace-nowrap text-base font-medium tracking-wide text-tx-3"
                >
                  {item}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
