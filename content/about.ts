/**
 * About page content — firm story built on the "alivio = relief" narrative.
 */

export const aboutHero = {
  eyebrow: "About the firm",
  headlineLines: ["Alivio. Spanish for relief.", "It is also the product."],
  intro:
    "A leadership hire is the highest-stakes decision a company makes, and it is usually made under pressure, with incomplete information, by people who cannot afford to be wrong. We built this firm to take that weight off the table.",
} as const;

export const story = {
  eyebrow: "The firm",
  paragraphs: [
    "Alivio Search Partners was founded on a simple observation: the retained search industry serves the Fortune 500 well and everyone else unevenly. Health systems and growth-stage companies were paying retained fees for contingency behavior — resumes instead of market maps, enthusiasm instead of evidence.",
    "We run every search the way the best firms run their largest: a complete map of the market before the first introduction, structured assessment instead of chemistry reads, and references that begin before the offer letter, not after.",
    "And we built something the established firms have not: a genuine Latin America practice. Not a delivery center — a practice, with our own office in Bogotá, our own networks in four countries, and the conviction that the region's senior talent is the most underpriced asset in the American labor market.",
  ],
} as const;

export const values = {
  eyebrow: "How we operate",
  heading: "Four commitments, kept on every engagement.",
  items: [
    {
      title: "We finish",
      body: "Our completion rate is the number we manage the firm by. A search that ends without a placement is a failure we absorb, not a fee we keep.",
    },
    {
      title: "We tell you early",
      body: "If the compensation is wrong, the spec is contradictory, or the market will not yield, you hear it in week two — while it is still cheap to fix.",
    },
    {
      title: "We show the whole market",
      body: "You see everyone relevant, including the people who said no and why. A shortlist means more when you know what it was selected from.",
    },
    {
      title: "We stay accountable",
      body: "Every placement carries a 12-month replacement guarantee. Our incentives run to the anniversary, not the invoice.",
    },
  ],
} as const;

export const team = {
  eyebrow: "Leadership",
  heading: "The partners on your search are the partners in the room.",
  body: "No leverage model, no handoffs to junior researchers you never meet. The person who takes your brief runs your search.",
  members: [
    /* TODO: replace all team members with real names, titles, bios, and licensed headshots.
       Keep the duotone image treatment for visual consistency. */
    {
      name: "Placeholder Partner",
      title: "Managing Partner",
      focus: "Healthcare & Life Sciences",
      location: "New York",
    },
    {
      name: "Placeholder Partner",
      title: "Partner",
      focus: "Technology",
      location: "Miami",
    },
    {
      name: "Placeholder Partner",
      title: "Partner",
      focus: "Nearshore Talent — LATAM",
      location: "Bogotá",
    },
    {
      name: "Placeholder Principal",
      title: "Principal",
      focus: "Research & Assessment",
      location: "New York",
    },
    {
      name: "Placeholder Principal",
      title: "Principal",
      focus: "LATAM Delivery",
      location: "Bogotá",
    },
    {
      name: "Placeholder Director",
      title: "Director",
      focus: "Client Advisory",
      location: "Miami",
    },
  ],
} as const;

export const locations = {
  eyebrow: "Offices",
  heading: "New York · Miami · Bogotá",
  body: "Three offices, one firm. New York anchors the healthcare and technology practices, Miami bridges the hemispheres, and Bogotá runs the nearshore practice from inside the market it serves.",
} as const;
