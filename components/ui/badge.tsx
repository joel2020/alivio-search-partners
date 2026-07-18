import { cn } from "@/lib/utils";

/**
 * Small pill label. Variants:
 *  - default: glass chip on dark
 *  - accent:  tinted accent chip (live/active things)
 *  - soon:    muted chip for honestly-labeled "coming soon" items
 */
export function Badge({
  variant = "default",
  className,
  children,
}: {
  variant?: "default" | "accent" | "soon";
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium",
        variant === "default" && "glass text-tx-2",
        variant === "accent" && "border border-acc/30 bg-acc/10 text-acc",
        variant === "soon" && "border border-line-1 bg-transparent text-tx-3",
        className
      )}
    >
      {children}
    </span>
  );
}
