"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Scroll-triggered entrance used on section entry. Fades and rises
 * once when the element enters the viewport. Reduced-motion handling
 * comes from the global MotionConfig (reducedMotion="user"), which
 * disables the transform while keeping server/client markup identical.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article";
}) {
  const Component = motion[as];
  return (
    <Component
      className={cn(className)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}
