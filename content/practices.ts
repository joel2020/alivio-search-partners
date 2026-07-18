/**
 * Practice pages — shared shape, unique content per practice.
 * The nearshore practice carries extra sections (cost, timezone,
 * compliance, countries) rendered only on that page.
 */

export type SearchExample = {
  role: string;
  client: string;
  detail: string;
};

export type Practice = {
  slug: string;
  eyebrow: string;
  name: string;
  headline: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  roles: { heading: string; items: string[] };
  sectors: { heading: string; items: string[] };
  examples: { heading: string; note: string; items: SearchExample[] };
  cta: { heading: string; body: string; label: string };
  nearshore?: {
    costArgument: {
      heading: string;
      body: string;
      comparison: {
        title: string;
        note: string;
        rows: { label: string; amount: number; display: string }[];
      };
    };
    timezone: {
      heading: string;
      body: string;
      zones: { city: string; offset: string; overlapStart: number; overlapEnd: number }[];
      workdayNote: string;
    };
    compliance: {
      heading: string;
      body: string;
      items: { title: string; body: string }[];
    };
    countries: {
      heading: string;
      items: { name: string; strengths: string; note: string }[];
    };
  };
};

export const practices: Practice[] = [
  {
    slug: "healthcare",
    eyebrow: "Practice · Healthcare & Life Sciences",
    name: "Healthcare & Life Sciences",
    headline: "Leaders for the hardest operating environment in the economy.",
    intro:
      "Health systems, digital health, medtech, biotech, and payers run on margins that punish leadership mistakes. We place executives and clinical leaders who have already operated under that pressure — and we verify it before you meet them.",
    metaTitle: "Healthcare Executive Search",
    metaDescription:
      "Retained healthcare executive search: C-suite, VP, and clinical leadership for health systems, digital health, medtech, biotech, and payers.",
    roles: {
      heading: "Roles we place",
      items: [
        "Chief Executive Officer",
        "Chief Medical Officer",
        "Chief Nursing Officer",
        "Chief Operating Officer",
        "Chief Financial Officer",
        "Chief Information / Digital Officer",
        "VP of Clinical Operations",
        "VP of Population Health",
        "VP of Regulatory Affairs",
        "Service line and market presidents",
      ],
    },
    sectors: {
      heading: "Where we work",
      items: [
        "Health systems and academic medical centers",
        "Digital health and virtual care",
        "Medtech and medical devices",
        "Biotech and pharma services",
        "Payers and risk-bearing entities",
        "Behavioral health and post-acute care",
      ],
    },
    examples: {
      heading: "Representative searches",
      note: "Client names withheld under engagement terms.",
      items: [
        /* TODO: replace all representative searches with real, approved engagements */
        {
          role: "VP of Clinical Operations",
          client: "$2B regional health system",
          detail: "Completed in 47 days",
        },
        {
          role: "Chief Medical Officer",
          client: "Series C virtual-care platform",
          detail: "Completed in 63 days",
        },
        {
          role: "Chief Financial Officer",
          client: "Multi-state behavioral health operator",
          detail: "Completed in 55 days",
        },
        {
          role: "VP of Regulatory Affairs",
          client: "Growth-stage medtech, Class III devices",
          detail: "Completed in 71 days",
        },
      ],
    },
    cta: {
      heading: "A clinical enterprise is not a generalist search.",
      body: "Tell us about the role and the operating reality behind it. We will respond within one business day.",
      label: "Start a Healthcare Search",
    },
  },
  {
    slug: "technology",
    eyebrow: "Practice · Technology",
    name: "Technology",
    headline: "The executives who take companies from proven to scaled.",
    intro:
      "Venture-backed and growth-stage companies do not fail for lack of ideas. They fail when the leadership layer stops scaling. We place the product, engineering, and go-to-market executives who carry companies through that transition — and we know the difference between a title and a track record.",
    metaTitle: "Technology Executive Search",
    metaDescription:
      "Retained technology executive search: CTOs, VPs of Engineering, Heads of Product, and CROs for venture-backed and growth-stage companies.",
    roles: {
      heading: "Roles we place",
      items: [
        "Chief Technology Officer",
        "Chief Product Officer",
        "Chief Revenue Officer",
        "VP of Engineering",
        "Head of Product",
        "VP of Sales",
        "VP of Marketing / Demand Generation",
        "Head of Data / AI",
        "VP of Customer Success",
        "First executive hires post-Series A",
      ],
    },
    sectors: {
      heading: "Where we work",
      items: [
        "Enterprise SaaS and infrastructure",
        "Fintech and payments",
        "AI and data platforms",
        "Healthtech and vertical software",
        "Marketplaces and consumer platforms",
        "Developer tools and security",
      ],
    },
    examples: {
      heading: "Representative searches",
      note: "Client names withheld under engagement terms.",
      items: [
        /* TODO: replace all representative searches with real, approved engagements */
        {
          role: "Chief Technology Officer",
          client: "Series C fintech, $80M ARR",
          detail: "Completed in 58 days",
        },
        {
          role: "VP of Engineering",
          client: "Series B developer-tools company",
          detail: "Completed in 44 days",
        },
        {
          role: "Chief Revenue Officer",
          client: "Growth-stage vertical SaaS",
          detail: "Completed in 66 days",
        },
        {
          role: "Head of Product",
          client: "AI infrastructure startup, post-Series A",
          detail: "Completed in 51 days",
        },
      ],
    },
    cta: {
      heading: "Your board will remember this hire.",
      body: "Tell us where the company is going and what the current team cannot yet carry. We will respond within one business day.",
      label: "Start a Technology Search",
    },
  },
  {
    slug: "nearshore-latam",
    eyebrow: "Practice · Nearshore Talent — LATAM",
    name: "Nearshore Talent — LATAM",
    headline: "A talent strategy, not an outsourcing contract.",
    intro:
      "We build engineering, operations, finance, and support teams in Latin America with the same rigor we bring to a C-suite search. Senior, bilingual, timezone-aligned professionals in Colombia, Mexico, Argentina, and Brazil — employed compliantly, retained deliberately, and integrated into your organization rather than bolted onto it. No other retained search firm owns this category. We do.",
    metaTitle: "Nearshore Talent LATAM — Hire in Colombia, Mexico, Argentina & Brazil",
    metaDescription:
      "Build senior nearshore teams in Latin America: engineering, operations, finance, and support talent in Colombia, Mexico, Argentina, and Brazil with full EOR compliance.",
    roles: {
      heading: "Teams we build",
      items: [
        "Software engineering (senior and staff level)",
        "Data engineering and analytics",
        "DevOps and platform engineering",
        "Finance and accounting",
        "Revenue operations",
        "Customer support and success",
        "Back-office operations",
        "Design and product support",
      ],
    },
    sectors: {
      heading: "Who hires nearshore with us",
      items: [
        "Venture-backed startups extending runway without cutting headcount",
        "Growth-stage companies scaling engineering past their local market",
        "Private equity portfolio companies under margin mandates",
        "Healthcare and fintech companies needing compliant, stable teams",
      ],
    },
    examples: {
      heading: "Representative builds",
      note: "Client names withheld under engagement terms.",
      items: [
        /* TODO: replace all representative builds with real, approved engagements */
        {
          role: "12-person engineering pod",
          client: "US healthtech, Bogotá",
          detail: "Staffed in 90 days",
        },
        {
          role: "Finance shared-services team of 6",
          client: "PE-backed logistics operator, Mexico City",
          detail: "Staffed in 75 days",
        },
        {
          role: "Senior data engineering team of 4",
          client: "Series B fintech, Buenos Aires",
          detail: "Staffed in 60 days",
        },
        {
          role: "Bilingual support organization of 15",
          client: "Consumer SaaS, Medellín",
          detail: "Staffed in 80 days",
        },
      ],
    },
    cta: {
      heading: "Build the team four hours south.",
      body: "Tell us the functions you need and the hours they must keep. We will map the market and the cost within one week.",
      label: "Hire Nearshore Talent",
    },
    nearshore: {
      costArgument: {
        heading: "The cost argument, stated plainly",
        body: "Nearshore economics are real, but they are the second-best reason to do this. The first is seniority: the same budget that hires one senior US engineer hires two in Latin America — with equivalent experience, working your hours, in your meetings. Cost efficiency of 40 to 60 percent is the floor of the argument, not the ceiling.",
        comparison: {
          title: "Fully-loaded annual cost by role",
          note: "Salary, benefits, employer taxes, and EOR fees. Directional market medians.", // TODO: replace with real, sourced compensation data
          rows: [
            { label: "Senior engineer — US", amount: 265000, display: "$265,000" }, // TODO: real figure
            { label: "Senior engineer — LATAM", amount: 118000, display: "$118,000" }, // TODO: real figure
            { label: "Senior accountant — US", amount: 145000, display: "$145,000" }, // TODO: real figure
            { label: "Senior accountant — LATAM", amount: 62000, display: "$62,000" }, // TODO: real figure
          ],
        },
      },
      timezone: {
        heading: "Your hours, kept",
        body: "Bogotá is on Eastern Time. Mexico City is one hour behind. Buenos Aires and São Paulo are one to two ahead. Your nearshore team attends the 10 a.m. standup live — not on a recording.",
        zones: [
          { city: "New York", offset: "ET", overlapStart: 9, overlapEnd: 17 },
          { city: "Bogotá", offset: "ET +0", overlapStart: 9, overlapEnd: 17 },
          { city: "Mexico City", offset: "ET −1", overlapStart: 10, overlapEnd: 17 },
          { city: "Buenos Aires", offset: "ET +1", overlapStart: 9, overlapEnd: 16 },
          { city: "São Paulo", offset: "ET +2", overlapStart: 9, overlapEnd: 15 },
        ],
        workdayNote: "Shared working hours with US Eastern, 9:00–17:00",
      },
      compliance: {
        heading: "Compliance is our problem, not yours",
        body: "Hiring abroad fails on paperwork more often than on talent. We handle the employment infrastructure end to end through vetted Employer-of-Record partners, so your team is employed legally from day one and you never open a foreign entity.",
        items: [
          {
            title: "Contracts",
            body: "Locally compliant employment agreements in Spanish or Portuguese, with IP assignment and confidentiality provisions that hold up in the local jurisdiction.",
          },
          {
            title: "Payroll and benefits",
            body: "Payroll, statutory benefits, bonuses, and severance obligations administered correctly in local currency, invoiced to you in USD.",
          },
          {
            title: "Local labor law",
            body: "Working-hours rules, termination procedures, and mandatory benefits differ by country. Our EOR partners carry the liability and we structure roles to fit.",
          },
        ],
      },
      countries: {
        heading: "Where we build",
        items: [
          {
            name: "Colombia",
            strengths: "Engineering, finance, bilingual support",
            note: "Eastern Time. Deep senior engineering market in Bogotá and Medellín; our own office on the ground.",
          },
          {
            name: "Mexico",
            strengths: "Engineering, operations, shared services",
            note: "Largest talent pool in the region. Strong nearshore track record with US manufacturers and fintechs.",
          },
          {
            name: "Argentina",
            strengths: "Senior engineering, data, design",
            note: "Exceptional engineering seniority and English fluency. Compensation in USD is standard practice.",
          },
          {
            name: "Brazil",
            strengths: "Engineering at scale, product, analytics",
            note: "The region's largest tech ecosystem. Portuguese-first; bilingual talent concentrated in São Paulo and Florianópolis.",
          },
        ],
      },
    },
  },
];

export function getPractice(slug: string): Practice | undefined {
  return practices.find((p) => p.slug === slug);
}
