/**
 * Contact page content and form configuration.
 */

export const contactHero = {
  eyebrow: "Contact",
  heading: "Tell us about the role.",
  body: "We respond within one business day, and the response comes from a partner. If we are not the right firm for the search, we will say so and point you toward who is.",
  directEmailLabel: "Prefer email?",
  bookingLabel: "Prefer to talk first?",
  bookingLink: "Book a 30-minute intro call",
} as const;

export const booking = {
  eyebrow: "Book a call",
  heading: "Thirty minutes with a partner.",
  body: "Pick a time that works. You will speak with the partner who would run your search — not a business development representative.",
} as const;

export const form = {
  fields: {
    name: { label: "Full name", placeholder: "Jane Alvarez" },
    company: { label: "Company", placeholder: "Company name" },
    email: { label: "Work email", placeholder: "jane@company.com" },
    phone: { label: "Phone", placeholder: "+1 (555) 000-0000", optional: true },
    practice: {
      label: "Practice area",
      placeholder: "Select a practice",
      options: [
        { value: "healthcare", label: "Healthcare & Life Sciences" },
        { value: "technology", label: "Technology" },
        { value: "nearshore-latam", label: "Nearshore Talent — LATAM" },
        { value: "other", label: "Not sure yet" },
      ],
    },
    roleLevel: {
      label: "Role level",
      placeholder: "Select a level",
      options: [
        { value: "c-suite", label: "C-suite" },
        { value: "svp-vp", label: "SVP / VP" },
        { value: "director", label: "Director" },
        { value: "team-build", label: "Team build (nearshore)" },
        { value: "other", label: "Other" },
      ],
    },
    message: {
      label: "About the role",
      placeholder: "The role, the company stage, and what makes this hire consequential.",
    },
  },
  submit: "Send the brief",
  submitting: "Sending…",
  success: {
    heading: "Received.",
    body: "A partner will respond within one business day.",
  },
  error: "Something went wrong on our end. Email us directly and we will pick it up from there.",
  validation: {
    name: "Please enter your name.",
    company: "Please enter your company.",
    email: "Please enter a valid work email.",
    practice: "Please select a practice area.",
    roleLevel: "Please select a role level.",
    message: "Tell us a sentence or two about the role.",
  },
} as const;
