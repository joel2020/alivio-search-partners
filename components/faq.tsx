"use client";

import { Accordion } from "radix-ui";
import { cn } from "@/lib/utils";

export type FaqItem = { readonly q: string; readonly a: string };

/**
 * FAQ accordion on the v2 dark system (Radix Accordion for keyboard
 * and screen-reader behavior).
 */
export function Faq({ items, className }: { items: readonly FaqItem[]; className?: string }) {
  return (
    <Accordion.Root type="single" collapsible className={cn("divide-y divide-line-1", className)}>
      {items.map((item, i) => (
        <Accordion.Item key={i} value={`item-${i}`}>
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center justify-between gap-6 py-5 text-left text-base font-medium text-tx-1 transition-colors hover:text-acc">
              {item.q}
              <svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                aria-hidden="true"
                className="shrink-0 text-tx-3 transition-transform duration-200 group-data-[state=open]:rotate-180"
              >
                <path d="M1 1.5L6 6.5L11 1.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden pb-5 pr-8 text-sm leading-relaxed text-tx-2">
            {item.a}
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
