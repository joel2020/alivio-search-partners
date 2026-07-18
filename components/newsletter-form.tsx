"use client";

import { useState } from "react";
import { footer } from "@/content/site";

/**
 * Footer newsletter capture. Front-end only for now.
 * TODO: wire to the marketing list (HubSpot form or ESP) when ready.
 */
export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  if (done) {
    return <p className="text-sm text-tx-2">{footer.newsletter.success}</p>;
  }

  return (
    <form
      className="flex border-b border-line-2"
      onSubmit={(e) => {
        e.preventDefault();
        if (email.includes("@")) setDone(true);
      }}
    >
      <label htmlFor="newsletter-email" className="sr-only">
        {footer.newsletter.placeholder}
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={footer.newsletter.placeholder}
        className="w-full bg-transparent py-2.5 text-sm text-tx-1 placeholder:text-tx-3 focus:outline-none"
      />
      <button
        type="submit"
        className="shrink-0 py-2.5 pl-4 text-eyebrow text-acc transition-colors hover:text-acc-2"
      >
        {footer.newsletter.button}
      </button>
    </form>
  );
}
