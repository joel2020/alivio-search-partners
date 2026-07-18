import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/*
 * tailwind-merge must be taught about the custom typography utilities;
 * otherwise it classifies `text-headline-*` / `text-eyebrow` as text
 * colors and drops them when combined with `text-ink` etc.
 */
const twMerge = extendTailwindMerge<"font-variant">({
  extend: {
    classGroups: {
      "font-size": [
        "text-headline-xl",
        "text-headline-lg",
        "text-headline-md",
        "text-headline-sm",
        "text-eyebrow",
      ],
      "font-variant": ["text-smallcaps"],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
