/**
 * Process page content — expanded retained search methodology.
 */

export const processHero = {
  eyebrow: "Process",
  headlineLines: ["Ninety days,", "accounted for."],
  intro:
    "Retained search earns its fee through discipline, not access. This is the calendar we run on every engagement — what happens, when it happens, and what you hold in your hands at each stage.",
} as const;

export const stages = [
  {
    number: "1",
    name: "Brief",
    window: "Days 1–10",
    body: "We start by interrogating the role, not marketing it. Structured sessions with the hiring executive, key stakeholders, and where useful, the incumbent. We pressure-test the success profile against the compensation, the reporting lines, and the real reasons the seat is open.",
    deliverables: [
      "Written success profile, signed off by every stakeholder",
      "Compensation benchmark against current market data",
      "Search calendar with committed dates",
    ],
  },
  {
    number: "2",
    name: "Map",
    window: "Days 10–21",
    body: "We build a complete map of the market: every person credibly holding or ready for this role, across direct competitors, adjacent industries, and rising internal candidates you may not have considered. The map is the product — the shortlist is derived from it.",
    deliverables: [
      "Full market map, typically 80–150 named executives",
      "Calibration session: your reactions recalibrate the profile",
      "First calibrated shortlist within 21 days",
    ],
  },
  {
    number: "3",
    name: "Assess",
    window: "Days 21–60",
    body: "Structured, scored interviews against the success profile — not chemistry reads. Referencing begins mid-process with sources we develop independently, so by the time you extend an offer, the evidence file is already closed.",
    deliverables: [
      "Written assessment report per finalist, case against included",
      "Independent referencing, 5–7 sources per finalist",
      "Compensation expectations verified in writing",
    ],
  },
  {
    number: "4",
    name: "Place",
    window: "Days 60–90",
    body: "We design the offer with you, manage the close, and stay through the resignation, the counteroffer, and the first 90 days. The search closes when the leader is performing in the seat, not when the paperwork is signed.",
    deliverables: [
      "Offer strategy and negotiation support through acceptance",
      "Counteroffer management and resignation planning",
      "Structured 30/60/90-day integration plan with scheduled check-ins",
    ],
  },
] as const;

export const guarantee = {
  eyebrow: "The guarantee",
  heading: "Twelve months. In writing.",
  body: "If a placed executive leaves for any reason within twelve months — performance, fit, or their own decision — we rerun the search at no professional fee. We can offer this because our 12-month retention rate makes it inexpensive to honor.",
  note: "94% of our placements are still in seat at twelve months.", // TODO: replace with real retention figure
} as const;

export const comparison = {
  eyebrow: "The honest comparison",
  heading: "Retained, contingency, or in-house.",
  body: "Each model has a legitimate use. This is where each one earns its keep — and where it does not.",
  columns: ["Retained search", "Contingency", "Internal recruiting"],
  rows: [
    {
      label: "Best suited for",
      values: [
        "C-suite, VP, and business-critical roles",
        "Mid-level roles with deep candidate pools",
        "High-volume and repeatable hiring",
      ],
    },
    {
      label: "Candidate pool",
      values: [
        "The whole market, including people not looking",
        "Active candidates in the recruiter's database",
        "Applicants and your own network",
      ],
    },
    {
      label: "Assessment",
      values: [
        "Structured, scored, independently referenced",
        "Resume screen and recruiter interview",
        "Varies with internal capacity",
      ],
    },
    {
      label: "Exclusivity",
      values: [
        "Dedicated team, one client per search",
        "Same candidates shopped to multiple clients",
        "Fully dedicated, capacity permitting",
      ],
    },
    {
      label: "Accountability",
      values: [
        "Committed calendar and 12-month guarantee",
        "Paid only on placement; no completion duty",
        "Internal SLAs, if defined",
      ],
    },
    {
      label: "Typical timeline",
      values: ["60–90 days, run to a calendar", "Fast when the pool is deep; stalls when it is not", "Depends on requisition load"],
    },
  ],
} as const;

export const processCta = {
  heading: "See the calendar before you commit.",
  body: "We will walk you through the methodology against your open role — including whether retained search is the right instrument for it.",
  label: "Start a Search",
} as const;
