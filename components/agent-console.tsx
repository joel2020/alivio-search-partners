"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Hero visual: a stylized view of the platform's agent activity feed.
 * Events cycle in one at a time on a loop; the full list renders
 * statically under prefers-reduced-motion. Content mirrors real
 * platform capabilities (sourcing, scoring, voice screening,
 * shortlists) — illustrative, not fabricated client data.
 */

const EVENTS = [
  {
    agent: "Sourcing agent",
    text: "Found 24 registered nurses matching Med-Surg RN — Tampa",
    tag: "Source",
  },
  {
    agent: "Scoring agent",
    text: "Ranked candidates against license, acuity mix, and shift fit",
    tag: "Match",
  },
  {
    agent: "Voice agent",
    text: "Completed phone screen — availability and licensure verified",
    tag: "Screen",
  },
  {
    agent: "Outreach agent",
    text: "Follow-up sequence sent to 11 engaged candidates",
    tag: "Engage",
  },
  {
    agent: "Shortlist",
    text: "5 screened candidates ready for hiring-manager review",
    tag: "Shortlist",
  },
] as const;

export function AgentConsole() {
  const reduce = useReducedMotion();
  /* Constant initial state so server and client render identically;
     reduced-motion users get the full static list after mount. */
  const [count, setCount] = useState(2);

  useEffect(() => {
    if (reduce) {
      /* Deferred so the state change happens outside the effect body
         (react-hooks/set-state-in-effect) and after hydration. */
      const t = setTimeout(() => setCount(EVENTS.length), 0);
      return () => clearTimeout(t);
    }
    const id = setInterval(() => {
      setCount((c) => (c >= EVENTS.length ? 2 : c + 1));
    }, 2200);
    return () => clearInterval(id);
  }, [reduce]);

  const visible = EVENTS.slice(0, count);

  return (
    <div className="glass-raised relative overflow-hidden rounded-xl p-5 sm:p-6" aria-hidden="true">
      {/* Title bar */}
      <div className="flex items-center justify-between border-b border-line-1 pb-4">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-good opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-good" />
          </span>
          <p className="text-xs font-medium text-tx-2">Agent activity</p>
        </div>
        <p className="text-eyebrow text-tx-3">Alivio OS</p>
      </div>

      {/* Event feed */}
      <ul className="mt-4 flex min-h-[19rem] flex-col gap-2.5">
        <AnimatePresence initial={false}>
          {visible.map((event, i) => (
            <motion.li
              key={`${event.tag}-${i}`}
              layout={!reduce}
              initial={reduce ? false : { opacity: 0, y: 14, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "glass flex items-start justify-between gap-4 rounded-lg px-4 py-3",
                i === visible.length - 1 && !reduce && "border-acc/25"
              )}
            >
              <div>
                <p className="text-[0.7rem] font-semibold uppercase tracking-wider text-acc">
                  {event.agent}
                </p>
                <p className="mt-1 text-[0.8rem] leading-snug text-tx-1">{event.text}</p>
              </div>
              <span className="shrink-0 rounded-full border border-line-1 px-2 py-0.5 text-[0.65rem] font-medium text-tx-3">
                {event.tag}
              </span>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>

      {/* Bottom summary strip */}
      <div className="mt-4 grid grid-cols-3 gap-2.5 border-t border-line-1 pt-4">
        {[
          { k: "Candidates sourced", v: "1,240" },
          { k: "Voice screens", v: "312" },
          { k: "Avg. days to shortlist", v: "6" },
        ].map((s) => (
          <div key={s.k} className="rounded-lg bg-srf px-3 py-2.5">
            <p className="font-display text-base font-semibold text-tx-1">{s.v}</p>
            <p className="mt-0.5 text-[0.65rem] leading-tight text-tx-3">{s.k}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
