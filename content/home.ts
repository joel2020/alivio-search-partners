/**
 * Home page content.
 */

export const hero = {
  /*
   * Headline options considered:
   * 1. "Leadership search for the Americas." — clear, geographic, but passive.
   * 2. "The weight of the hire, lifted." — on-narrative, but leads with metaphor before category.
   * 3. "Consequential hires, made with certainty." — states the stakes and the promise; category is carried by the sub-line.
   * Selected: option 3. It passes the CHRO test — it names what the client is buying (certainty on a consequential decision) without naming ourselves.
   */
  eyebrow: "Retained executive search · New York · Miami · Bogotá",
  headlineLines: ["Consequential hires,", "made with certainty."],
  sub: "Alivio Search Partners is a retained search and talent advisory firm for healthcare, technology, and nearshore LATAM leadership. We take on a small number of searches and finish every one of them.",
  primaryCta: { label: "Start a Search", href: "/contact" },
  secondaryCta: { label: "Hire Nearshore Talent", href: "/practices/nearshore-latam" },
} as const;

export const credibility = {
  statLine: "Retained searches across four countries. Offices in New York, Miami, and Bogotá.",
  /* TODO: replace with real client logos (grayscale SVG or PNG, ~120px wide).
     These names render as typeset placeholders until then. */
  logos: [
    "Meridian Health", // TODO: replace with real client
    "Vantage Bio", // TODO: replace with real client
    "Northline Capital", // TODO: replace with real client
    "Cobalt Systems", // TODO: replace with real client
    "Andina Group", // TODO: replace with real client
    "Harbor Digital", // TODO: replace with real client
  ],
} as const;

export const practicesIntro = {
  eyebrow: "Practices",
  heading: "Three practices. One standard.",
  body: "We work where leadership failure is most expensive: clinical enterprises, venture-backed technology, and distributed teams across Latin America.",
} as const;

export const practiceCards = [
  {
    index: "01",
    meta: { area: "Healthcare & Life Sciences", scope: "C-suite · VP · Clinical", geography: "US National" },
    title: "Healthcare & Life Sciences",
    body: "Executive and clinical leadership for health systems, digital health, medtech, biotech, and payers. Leaders who can run both the mission and the margin.",
    href: "/practices/healthcare",
  },
  {
    index: "02",
    meta: { area: "Technology", scope: "Product · Engineering · GTM", geography: "US · Remote" },
    title: "Technology",
    body: "Product, engineering, and go-to-market leadership for venture-backed and growth-stage companies. The executives who take companies from proven to scaled.",
    href: "/practices/technology",
  },
  {
    index: "03",
    meta: { area: "Nearshore Talent", scope: "Engineering · Ops · Finance", geography: "LATAM" },
    title: "Nearshore Talent — LATAM",
    body: "Senior, timezone-aligned teams in Colombia, Mexico, Argentina, and Brazil — built with the same rigor as an executive search, at 40 to 60 percent lower fully-loaded cost.",
    href: "/practices/nearshore-latam",
  },
] as const;

export const howWeWork = {
  eyebrow: "How we work",
  heading: "A retained process, run to a calendar.",
  body: "Every search follows the same four movements. Clients know what they will receive, and when, before we begin.",
  steps: [
    {
      number: "1",
      name: "Brief",
      window: "Days 1–10",
      body: "We interrogate the role before we sell it. Success profile, stakeholder alignment, compensation architecture, and the honest reasons the last person left.",
    },
    {
      number: "2",
      name: "Map",
      window: "Days 10–21",
      body: "A complete map of the relevant market — who holds this role today, who is ready for it, and who would never move. You see the whole field, not a shortlist of the willing.",
    },
    {
      number: "3",
      name: "Assess",
      window: "Days 21–60",
      body: "Structured interviews, calibrated scorecards, and referencing that starts before the offer stage. We present candidates with the case against them included.",
    },
    {
      number: "4",
      name: "Place",
      window: "Days 60–90",
      body: "Offer design, close management, and a structured first-90-days plan. Our involvement ends when the leader is performing, not when the invoice is paid.",
    },
  ],
  link: { label: "See the full methodology", href: "/process" },
} as const;

export const results = {
  eyebrow: "Results",
  heading: "We measure what clients actually buy.",
  stats: [
    {
      value: "175+",
      label: "Retained searches completed", // TODO: replace with real figure
    },
    {
      value: "21 days",
      label: "Average time to calibrated shortlist", // TODO: replace with real figure
    },
    {
      value: "94%",
      label: "Placements still in seat at 12 months", // TODO: replace with real figure
    },
    {
      value: "6",
      label: "Countries with completed searches", // TODO: replace with real figure
    },
  ],
  note: "Every placement carries a 12-month replacement guarantee. If the leader leaves, we run the search again at no fee.",
} as const;

export const nearshoreSpotlight = {
  eyebrow: "Nearshore Talent — LATAM",
  heading: "The team you meant to build, four hours south.",
  body: "Nearshore is not an outsourcing decision. It is a talent-strategy decision — senior engineers, finance leads, and operators in Colombia, Mexico, Argentina, and Brazil who work your hours, join your standups, and stay. We run the search, the compliance, and the employment infrastructure.",
  comparison: {
    title: "Fully-loaded annual cost, senior software engineer",
    note: "Includes salary, benefits, employer taxes, and EOR fees. Figures are directional market medians.", // TODO: replace with real, sourced figures
    rows: [
      { label: "United States", amount: 265000, display: "$265,000" }, // TODO: replace with real figure
      { label: "LATAM nearshore", amount: 118000, display: "$118,000" }, // TODO: replace with real figure
    ],
    takeaway: "40–60% cost efficiency, without the timezone tax.",
  },
  points: [
    "Timezone overlap of 6–8 working hours with US Eastern",
    "Bilingual senior talent pools in Colombia, Mexico, Argentina, and Brazil",
    "Full compliance: contracts, payroll, and local labor law through vetted EOR partners",
  ],
  cta: { label: "Explore the nearshore practice", href: "/practices/nearshore-latam" },
} as const;

export const engineSpotlight = {
  eyebrow: "Product · AI Candidate Engine",
  heading: "Not every role needs a retained search.",
  body: "For continuous, hard-to-fill hiring below the executive line, we install the AI Candidate Engine: AI-powered sourcing, structured scoring, and personalized outreach — calibrated slates in 48 hours, every one reviewed by a partner before it ships.",
  points: [
    "First calibrated slate within 48 hours of kickoff", // TODO: confirm claim
    "Six modules: Source, Score, Engage, Prioritize, Report, Optimize",
    "Human oversight on every shortlist and every outreach",
  ],
  cta: { label: "See the engine", href: "/product" },
} as const;

export const testimonials = {
  eyebrow: "What clients say",
  items: [
    {
      quote:
        "They told us in week two that our compensation range would lose the search, and they were right. We fixed it, and the VP they placed rebuilt our clinical operations in a year.",
      name: "Placeholder Name", // TODO: replace with real client
      title: "Chief Human Resources Officer",
      company: "Regional health system, $2B revenue",
    },
    {
      quote:
        "Alivio mapped the entire market before showing us a single resume. When the shortlist arrived, there was nothing to second-guess. We hired the first candidate we met.",
      name: "Placeholder Name", // TODO: replace with real client
      title: "Chief Executive Officer",
      company: "Series C infrastructure software company",
    },
    {
      quote:
        "Our Bogotá engineering team has lower attrition than our US team. That was not the outcome we were promised by anyone else we spoke to.",
      name: "Placeholder Name", // TODO: replace with real client
      title: "Chief Technology Officer",
      company: "Growth-stage fintech",
    },
  ],
} as const;

export const insightsTeaser = {
  eyebrow: "Insights",
  heading: "Notes from the field.",
  link: { label: "All insights", href: "/insights" },
} as const;

export const finalCta = {
  heading: "The next hire is the strategy.",
  body: "Tell us about the role. We will tell you, candidly, whether we are the right firm to fill it.",
  primaryCta: { label: "Start a Search", href: "/contact" },
  secondaryCta: { label: "Hire Nearshore Talent", href: "/practices/nearshore-latam" },
} as const;
