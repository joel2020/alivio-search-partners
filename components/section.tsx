import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

/**
 * v2 section shell + heading block. Every marketing section shares
 * this rhythm: eyebrow, big display heading, optional supporting body.
 */
export function Section({
  children,
  className,
  ariaLabel,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  id?: string;
}) {
  return (
    <section id={id} aria-label={ariaLabel} className={cn("relative", className)}>
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  heading,
  body,
  align = "left",
  headingClassName,
}: {
  eyebrow?: string;
  heading: React.ReactNode;
  body?: string;
  align?: "left" | "center";
  headingClassName?: string;
}) {
  return (
    <Reveal className={cn(align === "center" && "text-center")}>
      {eyebrow ? <p className="text-eyebrow text-acc">{eyebrow}</p> : null}
      <h2
        className={cn(
          "font-display text-headline-lg mt-4 max-w-3xl font-semibold text-tx-1",
          align === "center" && "mx-auto",
          headingClassName
        )}
      >
        {heading}
      </h2>
      {body ? (
        <p
          className={cn(
            "mt-5 max-w-2xl text-base leading-relaxed text-tx-2 sm:text-lg",
            align === "center" && "mx-auto"
          )}
        >
          {body}
        </p>
      ) : null}
    </Reveal>
  );
}
