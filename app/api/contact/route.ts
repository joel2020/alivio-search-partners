import { NextResponse } from "next/server";

/**
 * Contact form handler, stubbed for the HubSpot Forms API.
 *
 * Required env vars for production:
 *   HUBSPOT_PORTAL_ID — the HubSpot portal (account) ID
 *   HUBSPOT_FORM_GUID — the GUID of the target HubSpot form
 *
 * Until both are set, submissions are accepted and logged so the
 * front-end flow works end to end in every environment.
 */

type ContactPayload = {
  name: string;
  company: string;
  email: string;
  phone?: string;
  practice: string;
  roleLevel: string;
  message: string;
  website?: string; // honeypot
};

export async function POST(request: Request) {
  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  // Honeypot: bots fill the hidden field. Pretend success, do nothing.
  if (payload.website) {
    return NextResponse.json({ ok: true });
  }

  // Server-side validation mirrors the client.
  const email = String(payload.email ?? "").trim();
  if (
    !String(payload.name ?? "").trim() ||
    !String(payload.company ?? "").trim() ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    !String(payload.message ?? "").trim()
  ) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 422 });
  }

  const portalId = process.env.HUBSPOT_PORTAL_ID;
  const formGuid = process.env.HUBSPOT_FORM_GUID;

  if (!portalId || !formGuid) {
    // Stub mode: HubSpot not configured yet.
    console.log("[contact] HubSpot not configured; received submission:", {
      name: payload.name,
      company: payload.company,
      email,
      practice: payload.practice,
      roleLevel: payload.roleLevel,
    });
    return NextResponse.json({ ok: true, stub: true });
  }

  const hubspotBody = {
    fields: [
      { objectTypeId: "0-1", name: "firstname", value: payload.name },
      { objectTypeId: "0-1", name: "company", value: payload.company },
      { objectTypeId: "0-1", name: "email", value: email },
      { objectTypeId: "0-1", name: "phone", value: payload.phone ?? "" },
      { objectTypeId: "0-1", name: "practice_area", value: payload.practice },
      { objectTypeId: "0-1", name: "role_level", value: payload.roleLevel },
      { objectTypeId: "0-1", name: "message", value: payload.message },
    ],
    context: { pageUri: "https://aliviosearchpartners.com/contact", pageName: "Contact" },
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
    console.error("[contact] HubSpot submission failed:", res.status, detail);
    return NextResponse.json({ error: "Upstream submission failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
