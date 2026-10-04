// data/plans.ts
export interface Plan {
  id: string;
  name: string;
  tagline: string;
  price: number;
  currency: string;
  period: string;         // "project", "month", etc.
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  featured?: boolean;     // highlights one plan
  badge?: string;         // e.g. "Most Popular"
}

export const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "Perfect for validating an idea",
    price: 2500,
    currency: "$",
    period: "project",
    features: [
      "Landing page or MVP",
      "Up to 5 screens",
      "Responsive design",
      "Basic SEO setup",
      "2 weeks delivery",
      "1 revision round",
    ],
    ctaLabel: "Get started",
    ctaHref: "#contact",
  },
  {
    id: "growth",
    name: "Growth",
    tagline: "For startups shipping fast",
    price: 7500,
    currency: "$",
    period: "project",
    features: [
      "Full product or web app",
      "Up to 15 screens",
      "Custom design system",
      "API & database integration",
      "4–6 weeks delivery",
      "Unlimited revisions",
      "30 days post-launch support",
    ],
    ctaLabel: "Start a project",
    ctaHref: "#contact",
    featured: true,
    badge: "Most Popular",
  },
  {
    id: "scale",
    name: "Scale",
    tagline: "Dedicated team, ongoing delivery",
    price: 12000,
    currency: "$",
    period: "month",
    features: [
      "Dedicated dev & design team",
      "Unlimited scope",
      "Priority support",
      "AI-assisted development",
      "Weekly demos",
      "Ongoing maintenance",
    ],
    ctaLabel: "Book a call",
    ctaHref: "#contact",
  },
];