import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Muted architectural imagery with a consistent duotone grade and a
 * ledger caption.
 *
 * TODO: replace the generated skyline SVGs in /public/images with
 * licensed architectural / cityscape photography (NYC, Miami, Bogotá,
 * Medellín). Keep the img-duotone class so all photography shares one
 * desaturated grade. Recommended sources: licensed stock or a
 * commissioned shoot; never literal "business people" imagery.
 */
export function DuotoneFigure({
  src,
  alt,
  caption,
  meta,
  className,
  aspect = "aspect-[16/10]",
}: {
  src: string;
  alt: string;
  caption?: string;
  meta?: string;
  className?: string;
  aspect?: string;
}) {
  return (
    <figure className={cn(className)}>
      <div className={cn("relative w-full overflow-hidden bg-ink", aspect)}>
        <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="img-duotone object-cover" />
      </div>
      {caption ? (
        <figcaption className="mt-3 flex items-baseline justify-between gap-4 border-t border-line pt-2">
          <span className="text-eyebrow text-stone">{caption}</span>
          {meta ? <span className="text-eyebrow text-stone">{meta}</span> : null}
        </figcaption>
      ) : null}
    </figure>
  );
}
