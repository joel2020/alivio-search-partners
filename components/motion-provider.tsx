"use client";

import { MotionConfig } from "framer-motion";

/**
 * Global framer-motion config: respects the user's reduced-motion
 * preference by neutering transform/layout animations while keeping
 * markup identical between server and client (no conditional
 * rendering, so no hydration mismatches).
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
