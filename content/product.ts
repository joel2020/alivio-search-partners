/**
 * AI Candidate Engine — the productized recruiting offering.
 * Carried over from the previous site's /product positioning and
 * rewritten in the firm's voice. Route kept at /product so existing
 * links (and the old /pricing redirect) survive the domain move.
 */

export const productHero = {
  eyebrow: "Product · AI Candidate Engine",
  headlineLines: ["The recruiting engine,", "installed."],
  intro:
    "Retained search is how we fill the roles that decide a company's future. The AI Candidate Engine is how we handle the rest: an AI-powered sourcing, scoring, and outreach system installed into your hiring process, run under human oversight, and tuned monthly. Built for hard-to-fill technical and clinical hiring at startup speed.",
  meta: ["AI-powered · Human-driven"],
} as const;

export const productStats = {
  items: [
    { value: "48 hrs", label: "From kickoff to first calibrated slate" }, // TODO: confirm claim
    { value: "1,000+", label: "Placements behind the scoring models" }, // TODO: confirm figure
    { value: "Monthly", label: "Engine calibration against your hiring outcomes" },
    { value: "Human", label: "Every shortlist reviewed by a partner before it ships" },
  ],
} as const;

export const modules = {
  eyebrow: "The engine",
  heading: "Six modules. One pipeline.",
  body: "Each module replaces a manual recruiting motion. Together they run your top-of-funnel continuously, so hiring stops being a project you restart from zero every time a req opens.",
  items: [
    {
      index: "01",
      name: "Source",
      body: "AI-assisted sourcing across public and licensed talent data, mapped to your role profiles — including bilingual LATAM pools where the search calls for them.",
    },
    {
      index: "02",
      name: "Score",
      body: "Structured candidate scoring against calibrated scorecards, not keyword matching. Every score carries its reasoning, so you can disagree with it intelligently.",
    },
    {
      index: "03",
      name: "Engage",
      body: "Personalized outreach drafted by the engine, approved by a human, delivered from your brand. Response handling and follow-ups run automatically.",
    },
    {
      index: "04",
      name: "Prioritize",
      body: "A live pipeline that ranks candidates by fit and momentum, so your team spends its interview hours on the ten who matter, not the two hundred who applied.",
    },
    {
      index: "05",
      name: "Report",
      body: "Shortlist reports and pipeline dashboards your board can read: coverage, conversion, time-in-stage, and the honest reasons candidates decline.",
    },
    {
      index: "06",
      name: "Optimize",
      body: "Monthly calibration against your actual hiring outcomes. The engine learns which profiles succeed in your environment and reweights accordingly.",
    },
  ],
} as const;

export const humanLayer = {
  eyebrow: "The human layer",
  heading: "AI runs the funnel. People make the calls.",
  body: "The engine is operated by the same partners who run our retained searches. No candidate reaches you without a human review, no outreach ships without an approval, and no scoring model goes unexamined. Automation earns its keep here by giving judgment more time, not by replacing it.",
  points: [
    "Every slate reviewed by a partner before delivery",
    "Outreach approved by a human before it sends",
    "Scoring models audited monthly for drift and bias",
    "Escalation path to full retained search when a role proves consequential",
  ],
} as const;

export const engagementModels = {
  eyebrow: "Engagement models",
  heading: "Three ways to run it.",
  body: "Pricing is stated up front because grown-up buyers plan budgets. Every model includes installation, calibration, and partner oversight.",
  items: [
    /* TODO: confirm current pricing with Joel before launch */
    {
      name: "Engine Install",
      price: "$5,000–$10,000 setup",
      body: "We install the engine into your hiring process: role profiles, scorecards, sourcing configuration, and outreach sequences. Your team runs it; we calibrate it monthly.",
      detail: "Best for teams with in-house recruiting capacity",
    },
    {
      name: "Managed Engine",
      price: "$2,000–$3,000 monthly",
      body: "We run the engine for you: sourcing, scoring, outreach, and pipeline management, delivered as calibrated slates on a standing cadence.",
      detail: "Best for founders hiring continuously without a recruiting team",
    },
    {
      name: "Search + Success Fee",
      price: "Custom",
      body: "Engine-powered top-of-funnel with retained-search rigor on the close: assessment, referencing, offer management, and the 12-month guarantee.",
      detail: "Best for consequential roles that deserve both speed and certainty",
    },
  ],
} as const;

export const productCta = {
  heading: "See the engine on your open roles.",
  body: "Book a thirty-minute strategy call. We will walk through your current funnel and show you what the engine would change — including whether you need it at all.",
  primary: { label: "Book a Strategy Call", href: "/contact#book" },
  secondary: { label: "Start a Retained Search", href: "/contact" },
} as const;
