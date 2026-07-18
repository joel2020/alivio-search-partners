/**
 * Global site content — navigation, offices, contact, footer.
 * All user-facing strings live in content/ so an /es locale can be
 * added later without touching components.
 */

export const site = {
  name: "Alivio Search Partners",
  wordmark: { primary: "Alivio", secondary: "Search Partners" },
  url: "https://aliviosearchpartners.com",
  tagline: "Executive search and talent advisory for the Americas.",
  description:
    "Alivio Search Partners is a retained executive search and talent advisory firm serving healthcare, technology, and nearshore LATAM talent markets from New York, Miami, and Bogotá.",
  email: "search@aliviosearchpartners.com", // TODO: replace with real inbox
  linkedin: "https://www.linkedin.com/company/alivio-search-partners", // TODO: replace with real LinkedIn URL
} as const;

export const offices = [
  {
    city: "New York",
    country: "United States",
    address: "500 Seventh Avenue, 8th Floor", // TODO: replace with real address
    postal: "New York, NY 10018",
  },
  {
    city: "Miami",
    country: "United States",
    address: "78 SW 7th Street, Suite 500", // TODO: replace with real address
    postal: "Miami, FL 33130",
  },
  {
    city: "Bogotá",
    country: "Colombia",
    address: "Carrera 11 #79-35, Piso 6", // TODO: replace with real address
    postal: "Bogotá, D.C. 110221",
  },
] as const;

export const nav = {
  practices: {
    label: "Practices",
    items: [
      { label: "Healthcare & Life Sciences", href: "/practices/healthcare" },
      { label: "Technology", href: "/practices/technology" },
      { label: "Nearshore Talent — LATAM", href: "/practices/nearshore-latam" },
    ],
  },
  links: [
    { label: "AI Engine", href: "/product" },
    { label: "Process", href: "/process" },
    { label: "About", href: "/about" },
    { label: "Insights", href: "/insights" },
    { label: "Positions", href: "/positions" },
    { label: "Contact", href: "/contact" },
  ],
  cta: { label: "Start a Search", href: "/contact" },
} as const;

export const footer = {
  practices: {
    heading: "Practices",
    links: [
      { label: "Healthcare & Life Sciences", href: "/practices/healthcare" },
      { label: "Technology", href: "/practices/technology" },
      { label: "Nearshore Talent — LATAM", href: "/practices/nearshore-latam" },
      { label: "AI Candidate Engine", href: "/product" },
    ],
  },
  company: {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Process", href: "/process" },
      { label: "Insights", href: "/insights" },
      { label: "Open Positions", href: "/positions" },
      { label: "Contact", href: "/contact" },
    ],
  },
  offices: { heading: "Offices" },
  newsletter: {
    heading: "The Ledger",
    body: "One brief a month on leadership hiring across the Americas. No noise.",
    placeholder: "Work email",
    button: "Subscribe",
    success: "You are on the list.",
  },
  legal: {
    line: `© ${new Date().getFullYear()} Alivio Search Partners LLC. All rights reserved.`,
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
} as const;
