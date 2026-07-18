/**
 * Home page content — v2 "bold modern SaaS" positioning.
 *
 * Primary audience: employers (hospitals, health systems, clinics).
 * Core message: Alivio's AI recruiting agents source, score, screen
 * (by voice), and engage qualified clinicians so roles fill in days,
 * not months — with human recruiters accountable for every hire.
 */

export const hero = {
  badge: "AI recruiting agents for healthcare",
  /*
   * Headline states the buyer's outcome, not our category. "Days, not
   * months" is the time-to-fill promise the rest of the page proves.
   * Rendered as one balanced block; the accent segment takes the
   * gradient.
   */
  headline: "Clinical roles filled in",
  headlineAccent: "days, not months.",
  sub: "Alivio's AI recruiting agents source, score, and voice-screen qualified nurses, clinicians, and healthcare leaders around the clock — and our recruiters close them. You get a screened shortlist, not a stack of resumes.",
  primaryCta: { label: "Book a demo", href: "/contact" },
  secondaryCta: { label: "See how it works", href: "#how-it-works" },
} as const;

export const trustBar = {
  label: "Built for hospitals, health systems, and clinics", // TODO: swap for real client logos once consented
  /* Typeset placeholders until real grayscale logos exist. */
  logos: [
    "Meridian Health", // TODO: replace with real client
    "Vantage Bio", // TODO: replace with real client
    "Northline Medical", // TODO: replace with real client
    "Cobalt Care", // TODO: replace with real client
    "Andina Group", // TODO: replace with real client
    "Harbor Health", // TODO: replace with real client
  ],
} as const;

export const problem = {
  eyebrow: "The problem",
  heading: "Clinical hiring is slow because every step of it is manual.",
  body: "The average clinical vacancy takes about three months to fill and costs thousands of dollars per open day in coverage and lost revenue. Not because the candidates don't exist — because sourcing, screening, and follow-up are still done by hand, one candidate at a time.",
  points: [
    {
      stat: "90+ days", // TODO: confirm figure and source
      label: "Typical time-to-fill for a specialized clinical role",
    },
    {
      stat: "Dozens of hours",
      label: "Recruiter time consumed per hire on manual screening and phone tag",
    },
    {
      stat: "Days of silence",
      label: "Typical response lag that loses interested candidates to faster offers",
    },
  ],
} as const;

export const howItWorks = {
  eyebrow: "How it works",
  heading: "Six agents. One pipeline. Zero waiting.",
  body: "Each stage of the pipeline is run by a specialized AI agent and reviewed by a human recruiter. Every action is logged, and you can watch the pipeline work in real time.",
  steps: [
    {
      index: "1",
      name: "Source",
      capability: "AI sourcing agent",
      body: "Scans licensed candidate pools and inbound channels continuously to build the field for every open role.",
    },
    {
      index: "2",
      name: "Match",
      capability: "Scoring & matching",
      body: "Scores every candidate against your role's must-haves — license, specialty, experience, location, shift.",
    },
    {
      index: "3",
      name: "Screen",
      capability: "AI voice screening",
      body: "Calls qualified candidates, verifies licensure and availability by voice, and transcribes every conversation.",
    },
    {
      index: "4",
      name: "Engage",
      capability: "Automated outreach",
      body: "Runs personalized outreach sequences and answers within minutes, so interested candidates never go cold.",
    },
    {
      index: "5",
      name: "Shortlist",
      capability: "Client shortlists",
      body: "Delivers a screened, ranked shortlist with transcripts, scores, and a recruiter's recommendation attached.",
    },
    {
      index: "6",
      name: "Hire",
      capability: "Human recruiters",
      body: "Our recruiters run interviews, references, and offers to signature. AI does the volume; people close.",
    },
  ],
} as const;

export const capabilities = {
  eyebrow: "The platform",
  heading: "Everything between a vacancy and a signed offer.",
  body: "One system runs the whole pipeline — and you can see all of it working.",
  cards: [
    {
      eyebrow: "Sourcing",
      title: "AI candidate sourcing",
      body: "Agents work every sourcing channel around the clock and add qualified nurses, clinicians, and leaders to your pipeline while your team sleeps.",
      wide: true,
    },
    {
      eyebrow: "Matching",
      title: "Scoring & matching",
      body: "Every candidate is scored against the role's actual requirements, with the reasoning shown — not a black-box rank.",
    },
    {
      eyebrow: "Screening",
      title: "AI voice screening",
      body: "Automated screening calls verify licensure, availability, and interest — recorded, transcribed, and summarized for review.",
    },
    {
      eyebrow: "Engagement",
      title: "Outreach sequences",
      body: "Multi-step, personalized outreach that follows up automatically and hands hot replies to a human immediately.",
    },
    {
      eyebrow: "Reporting",
      title: "Shortlists & weekly reports",
      body: "Clients get ranked shortlists, structured feedback loops, and a weekly report on exactly what moved — no status-call archaeology.",
    },
    {
      eyebrow: "Transparency",
      title: "Agent activity log",
      body: "Every agent action is logged and reviewable. You can audit what the AI did on your search, candidate by candidate.",
      wide: true,
    },
  ],
} as const;

export const metrics = {
  eyebrow: "The results",
  heading: "What the pipeline produces.",
  /* TODO: replace all four with real, defensible platform figures before launch */
  stats: [
    { value: 1200, suffix: "+", label: "Candidates sourced and scored by the platform" },
    { value: 300, suffix: "+", label: "AI voice screens completed" },
    { value: 6, suffix: " days", label: "Average time to a screened shortlist" },
    { value: 24, suffix: "/7", label: "Pipeline coverage — agents never sleep" },
  ],
  note: "Every shortlist is reviewed by a licensed-market recruiter before it reaches you. AI runs the volume; a human signs off on the quality.",
} as const;

export const testimonials = {
  eyebrow: "What clients say",
  /* TODO: replace with real, attributed, consented client quotes */
  items: [
    {
      quote:
        "We had two Med-Surg vacancies open for a quarter. Alivio's shortlist arrived in the first week — screened, scored, with transcripts. We hired both.",
      name: "Placeholder Name", // TODO: real client
      title: "Chief Nursing Officer",
      company: "Regional health system",
    },
    {
      quote:
        "The difference is the screening. Every candidate we met had already been voice-screened on licensure and availability. Zero wasted interviews.",
      name: "Placeholder Name", // TODO: real client
      title: "VP, Talent Acquisition",
      company: "Multi-site clinic group",
    },
    {
      quote:
        "The weekly report tells me exactly what the agents did and what my recruiter recommends. It's the most transparent search process we've run.",
      name: "Placeholder Name", // TODO: real client
      title: "Chief Human Resources Officer",
      company: "Academic medical center",
    },
  ],
} as const;

export const integrations = {
  eyebrow: "Integrations",
  heading: "Meets your stack where it is.",
  body: "Email-native today. ATS and calendar integrations are in development — join the waitlist and we'll notify you when yours ships.",
  items: [
    { name: "Email (outreach & inbound)", status: "live" },
    { name: "Greenhouse", status: "soon" },
    { name: "Workday", status: "soon" },
    { name: "iCIMS", status: "soon" },
    { name: "Google Calendar", status: "soon" },
    { name: "Outlook Calendar", status: "soon" },
  ],
} as const;

export const engagement = {
  eyebrow: "Engagement model",
  heading: "Priced like a partner, not a job board.",
  body: "Every engagement starts with a conversation about your roles, volume, and timeline. No seat licenses, no self-serve tier — a recruiting operation configured to your openings.",
  tiers: [
    {
      name: "Per-role search",
      description:
        "A single hard-to-fill role, run through the full agent pipeline with a dedicated recruiter.",
      bullets: ["Screened shortlist in days", "Voice-screen transcripts included", "Weekly progress report"],
    },
    {
      name: "Pipeline partnership",
      description:
        "Continuous hiring across a set of roles — the pipeline stays warm, and shortlists keep arriving.",
      bullets: ["Always-on sourcing and screening", "Client portal and feedback loop", "Quarterly hiring-market review"],
      featured: true,
    },
    {
      name: "Enterprise",
      description:
        "Multi-facility health systems with custom volume, compliance, and reporting requirements.",
      bullets: ["Custom SLAs and reporting", "Dedicated recruiting pod", "Security and compliance review"],
    },
  ],
  cta: { label: "Talk to us about pricing", href: "/contact" },
} as const;

export const faq = {
  eyebrow: "Questions",
  heading: "The questions every hiring leader asks.",
  items: [
    {
      q: "Is this replacing recruiters with AI?",
      a: "No. The agents do the volume work — sourcing, first-pass scoring, screening calls, follow-ups. Licensed-market recruiters review every shortlist, run interviews and references, and close offers. You always have a human accountable for the hire.",
    },
    {
      q: "How is candidate data handled?",
      a: "Candidate data is confidential: encrypted in transit and at rest, scoped to your organization, never indexed by search engines, and never shared with third parties without an explicit integration you approve.",
    },
    {
      q: "Do candidates know they're talking to an AI on screening calls?",
      a: "Yes. Screening calls disclose that they're automated, and any candidate can request a human callback at any point in the process.",
    },
    {
      q: "What roles do you cover?",
      a: "Nursing, allied health, physicians and advanced practice, and healthcare leadership — plus the revenue-cycle and operations roles that keep a clinical enterprise running.",
    },
    {
      q: "How fast is a first shortlist, really?",
      a: "For most roles the agents produce a scored field within days, and your recruiter delivers a reviewed shortlist the same week. Highly specialized searches take longer — we'll tell you the honest timeline before we start.", // TODO: confirm SLA language
    },
  ],
} as const;

export const finalCta = {
  heading: "See your next shortlist before your next status meeting.",
  body: "Book a 30-minute demo. Bring a real open role — we'll show you exactly what the pipeline would do with it.",
  primaryCta: { label: "Book a demo", href: "/contact" },
  /* TODO(phase 4): point to /services once the Recruitment Services page ships */
  secondaryCta: { label: "Explore the platform", href: "/product" },
} as const;
