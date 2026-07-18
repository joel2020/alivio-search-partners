"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

/**
 * Cal.com inline booking embed, themed to the brand.
 *
 * The Cal.com event link comes from NEXT_PUBLIC_CAL_LINK and
 * defaults to the firm's existing event type (alivio/intro-call30,
 * the same link used on the current live site).
 */
const CAL_LINK = process.env.NEXT_PUBLIC_CAL_LINK ?? "alivio/intro-call30";
const CAL_NAMESPACE = "intro";

export function BookCall() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE });
      cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#9c4227" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <div className="border border-line bg-paper">
      <Cal
        namespace={CAL_NAMESPACE}
        calLink={CAL_LINK}
        style={{ width: "100%", height: "100%", minHeight: "560px", overflow: "auto" }}
        config={{ layout: "month_view", theme: "light" }}
      />
    </div>
  );
}
