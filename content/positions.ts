/**
 * Open positions — candidate-facing job board.
 * Confidential retained searches are not listed; these are the
 * engagements clients have approved for public posting.
 *
 * TODO: replace all placeholder positions with real, approved
 * engagements before launch. Keep salary ranges where the client
 * allows — postings with pay ranges convert better and qualify for
 * richer Google Jobs treatment.
 */

export type Position = {
  slug: string;
  title: string;
  practice: "Healthcare & Life Sciences" | "Technology" | "Nearshore Talent — LATAM";
  client: string;
  location: string;
  employmentType: "FULL_TIME" | "CONTRACTOR";
  workMode: "On-site" | "Hybrid" | "Remote";
  compensation?: string;
  datePosted: string;
  summary: string;
  about: string;
  responsibilities: string[];
  qualifications: string[];
};

export const positionsIntro = {
  eyebrow: "Open positions",
  headlineLines: ["The searches we can", "talk about."],
  intro:
    "Most of our work is confidential. The positions below are the exceptions — live engagements our clients have approved for public posting. If your background fits a search we cannot list, we will find you; if you would rather not wait, apply to the practice closest to your work.",
  generalNote: "None of these fit?",
  generalCta: "Send us your profile anyway",
} as const;

export const positions: Position[] = [
  /* TODO: replace with real approved engagements */
  {
    slug: "vp-clinical-operations-northeast-health-system",
    title: "VP of Clinical Operations",
    practice: "Healthcare & Life Sciences",
    client: "Regional health system, $2B revenue",
    location: "New York, NY",
    employmentType: "FULL_TIME",
    workMode: "Hybrid",
    compensation: "$320,000–$380,000 base + incentive", // TODO: confirm with client
    datePosted: "2026-06-22",
    summary:
      "Own clinical operations across a nine-hospital system through a major care-model redesign.",
    about:
      "Our client is a nine-hospital regional system entering the second year of a system-wide care-model redesign. The role reports to the COO, carries a team of roughly 400 through six direct reports, and owns the operational side of the clinical enterprise: throughput, staffing models, and the performance of service lines representing most of the system's revenue.",
    responsibilities: [
      "Run clinical operations for nine hospitals and forty ambulatory sites",
      "Lead the operational workstream of the care-model redesign with the CMO",
      "Own service-line performance reviews and corrective plans",
      "Build the staffing model that reduces contract-labor dependence",
    ],
    qualifications: [
      "Ten or more years of progressive hospital operations leadership",
      "Experience operating at multi-hospital or system scale",
      "A track record of measurable throughput or labor-cost results",
      "Clinical license (RN, MD, or allied) preferred, not required",
    ],
  },
  {
    slug: "chief-technology-officer-series-c-fintech",
    title: "Chief Technology Officer",
    practice: "Technology",
    client: "Series C fintech, $80M ARR",
    location: "Remote (US)",
    employmentType: "FULL_TIME",
    workMode: "Remote",
    compensation: "$350,000–$425,000 base + equity", // TODO: confirm with client
    datePosted: "2026-06-30",
    summary:
      "Take a 90-engineer organization from founder-led architecture to a platform that supports the next $200M of ARR.",
    about:
      "Our client processes payments for a vertical the large processors underserve. The founding CTO is moving to a chief architect role by his own request. The company needs an executive who has scaled an engineering organization past 150 people and a platform past the point where every incident is survivable — and who can do both without stalling a roadmap the sales team has already sold.",
    responsibilities: [
      "Own engineering, infrastructure, and security for a regulated payments platform",
      "Scale the organization from 90 to roughly 150 engineers over two years",
      "Replace single-region infrastructure with a resilient multi-region platform",
      "Partner with the founding CTO on architecture without diluting accountability",
    ],
    qualifications: [
      "Prior CTO or SVP Engineering role in fintech or another regulated domain",
      "Scaled an engineering org past 150 while shipping a commercial roadmap",
      "Deep familiarity with payments infrastructure or adjacent systems",
      "Comfort operating with a technical founder still in the building",
    ],
  },
  {
    slug: "vp-engineering-series-b-developer-tools",
    title: "VP of Engineering",
    practice: "Technology",
    client: "Series B developer-tools company",
    location: "New York, NY",
    employmentType: "FULL_TIME",
    workMode: "Hybrid",
    datePosted: "2026-07-01",
    summary:
      "First VP of Engineering for a 40-engineer team whose founders need to stop being the management layer.",
    about:
      "The product is loved, the founders are excellent engineers, and the management structure is three years overdue. This is a first-VP-of-Engineering role in the truest sense: the mandate is to build the management layer, the hiring machine, and the delivery discipline while keeping the two technical founders close to the code, where they belong and want to be.",
    responsibilities: [
      "Build the first real management layer across four product areas",
      "Own delivery: planning, execution, and the credibility of dates",
      "Design the hiring process and grow the team from 40 to 70",
      "Establish engineering standards without suffocating a strong culture",
    ],
    qualifications: [
      "Built the management layer at a startup between Series A and C",
      "Grew an engineering team through the 40-to-100 transition",
      "Strong developer-tools or infrastructure product sensibility",
      "Managed founders' transition out of day-to-day management",
    ],
  },
  {
    slug: "senior-software-engineers-bogota-hub",
    title: "Senior Software Engineers (multiple)",
    practice: "Nearshore Talent — LATAM",
    client: "US healthtech company — Bogotá engineering hub",
    location: "Bogotá, Colombia",
    employmentType: "FULL_TIME",
    workMode: "Hybrid",
    compensation: "COP 280M–360M + USD-indexed adjustment", // TODO: confirm with client
    datePosted: "2026-07-03",
    summary:
      "Founding cohort of a Bogotá engineering hub for a US healthtech — US Eastern hours, US product ownership, local employment done right.",
    about:
      "Our client is standing up a twelve-person engineering pod in Bogotá as a first-class part of their product organization, not a delivery annex. The founding cohort will own a full product area within two quarters. Employment is through a vetted EOR with full Colombian statutory benefits; the working day tracks US Eastern, which in Bogotá means no night shifts — ever.",
    responsibilities: [
      "Ship production code inside an existing US team from week one",
      "Take ownership of a defined product area as the pod matures",
      "Participate in on-call on US Eastern daytime rotations",
      "Help set the technical bar for the hub's next hires",
    ],
    qualifications: [
      "Six or more years building production software (TypeScript, Python, or Go)",
      "Professional working English — daily meetings are in English",
      "Experience owning services end to end, not tickets",
      "Based in or willing to relocate to Bogotá or Medellín",
    ],
  },
  {
    slug: "finance-operations-lead-mexico-city",
    title: "Finance Operations Lead",
    practice: "Nearshore Talent — LATAM",
    client: "PE-backed logistics operator — Mexico City shared services",
    location: "Mexico City, Mexico",
    employmentType: "FULL_TIME",
    workMode: "Hybrid",
    datePosted: "2026-06-18",
    summary:
      "Build and run a six-person finance shared-services team supporting US operations from Mexico City.",
    about:
      "A US logistics operator backed by a disciplined private equity firm is moving its transactional finance functions to Mexico City. This role builds the team: six people across AP, AR, and reconciliation in year one, with month-end close ownership migrating south as the team proves out. The mandate comes with real authority and a direct line to the US controller.",
    responsibilities: [
      "Hire and manage a six-person AP/AR and reconciliation team",
      "Own the migration of transactional processes from the US",
      "Run month-end close workstreams to US GAAP standards",
      "Report operational metrics to the US controller weekly",
    ],
    qualifications: [
      "Public accounting foundation or shared-services leadership experience",
      "US GAAP fluency; NetSuite or similar ERP experience",
      "Bilingual Spanish/English at professional working level",
      "Prior experience building a team, not only running one",
    ],
  },
  {
    slug: "chief-revenue-officer-vertical-saas",
    title: "Chief Revenue Officer",
    practice: "Technology",
    client: "Growth-stage vertical SaaS",
    location: "Miami, FL",
    employmentType: "FULL_TIME",
    workMode: "Hybrid",
    datePosted: "2026-06-25",
    summary:
      "Unify sales, expansion, and partnerships for a vertical SaaS company moving upmarket from SMB to mid-market.",
    about:
      "Our client dominates SMB in its vertical and is moving upmarket, where deals are five times larger and three times slower. The founder has run sales personally to $30M ARR and knows precisely what he does not know. The CRO will own new business, expansion, and the partnership channel, and will inherit a 45-person revenue organization built for velocity that must learn patience without losing pace.",
    responsibilities: [
      "Own the full revenue plan: new business, expansion, and partnerships",
      "Build the mid-market motion — segmentation, coverage, and enablement",
      "Recalibrate compensation plans for longer-cycle, larger-ACV deals",
      "Serve as the founder's operating partner on pricing and packaging",
    ],
    qualifications: [
      "Scaled a SaaS revenue organization from roughly $30M to $100M+ ARR",
      "Led an SMB-to-mid-market transition with documented results",
      "Built partnership channels that produced material revenue",
      "Vertical SaaS experience strongly preferred",
    ],
  },
];

export function getPosition(slug: string): Position | undefined {
  return positions.find((p) => p.slug === slug);
}

export const applyForm = {
  heading: "Apply for this position",
  body: "Applications go directly to the partner running the search. We respond to every applicant within five business days — including the ones we decline.",
  fields: {
    name: { label: "Full name", placeholder: "Jane Alvarez" },
    email: { label: "Email", placeholder: "jane@email.com" },
    phone: { label: "Phone", placeholder: "+1 (555) 000-0000" },
    linkedin: { label: "LinkedIn profile", placeholder: "linkedin.com/in/janealvarez" },
    resume: {
      label: "Resume / CV link",
      placeholder: "Link to your resume (Google Drive, Dropbox, or personal site)",
      hint: "A LinkedIn profile alone is fine if it is current.",
    },
    note: {
      label: "Why this role",
      placeholder: "Two or three sentences. What in your track record maps to this mandate?",
    },
  },
  submit: "Submit application",
  submitting: "Submitting…",
  success: {
    heading: "Application received.",
    body: "The partner running this search will respond within five business days.",
  },
  error: "Something went wrong on our end. Email your profile directly and reference the role.",
  validation: {
    name: "Please enter your name.",
    email: "Please enter a valid email.",
    linkedin: "Add a LinkedIn URL or a resume link so we can review your background.",
    note: "Tell us briefly why this role.",
  },
} as const;
