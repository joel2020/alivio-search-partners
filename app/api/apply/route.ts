import { NextResponse } from "next/server";

/**
 * Candidate application handler.
 *
 * Stub-ready for an ATS or CRM integration. Optional env vars:
 *   HUBSPOT_PORTAL_ID      — shared with the contact form
 *   HUBSPOT_APPLY_FORM_GUID — a dedicated HubSpot form for applications
 *
 * Until configured, applications are accepted and logged so the
 * candidate-facing flow works end to end.
 * TODO: wire to the ATS of record (HubSpot, Greenhouse, or Ashby).
 */

type ApplyPayload = {
  position: string;
  positionTitle: string;
  name: string;
  email: string;
  phone?: string;
  linkedin?: string;
  resume?: string;
  note: string;
  website?: string; // honeypot
};

export async function POST(request: Request) {
  let payload: ApplyPayload;
  try {
    payload = (await request.json()) as ApplyPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  if (payload.website) {
    return NextResponse.json({ ok: true });
  }

  const email = String(payload.email ?? "").trim();
  const hasProfile = Boolean(payload.linkedin?.trim() || payload.resume?.trim());
  if (
    !String(payload.name ?? "").trim() ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    !String(payload.position ?? "").trim() ||
    !hasProfile
  ) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 422 });
  }

  const portalId = process.env.HUBSPOT_PORTAL_ID;
  const formGuid = process.env.HUBSPOT_APPLY_FORM_GUID;

  if (!portalId || !formGuid) {
    console.log("[apply] ATS not configured; received application:", {
      position: payload.position,
      name: payload.name,
      email,
      linkedin: payload.linkedin,
    });
    return NextResponse.json({ ok: true, stub: true });
  }

  const hubspotBody = {
    fields: [
      { objectTypeId: "0-1", name: "firstname", value: payload.name },
      { objectTypeId: "0-1", name: "email", value: email },
      { objectTypeId: "0-1", name: "phone", value: payload.phone ?? "" },
      { objectTypeId: "0-1", name: "linkedin_url", value: payload.linkedin ?? "" },
      { objectTypeId: "0-1", name: "resume_url", value: payload.resume ?? "" },
      { objectTypeId: "0-1", name: "position", value: payload.position },
      { objectTypeId: "0-1", name: "message", value: payload.note },
    ],
    context: {
      pageUri: `https://aliviosearchpartners.com/positions/${payload.position}`,
      pageName: `Application — ${payload.positionTitle}`,
    },
  };

  const res = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(hubspotBody),
    }
  );

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    console.error("[apply] HubSpot submission failed:", res.status, detail);
    return NextResponse.json({ error: "Upstream submission failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
