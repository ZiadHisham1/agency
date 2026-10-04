// data/footer.ts
export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface Office {
  country: string;
  addressLines: string[];
  phones: string[];
  emails: string[];
  timezone: string;      // IANA tz — used for the world clock
}

export interface Award {
  name: string;
  image: string;         // under public/awards/
}

export interface SocialLink {
  name: "facebook" | "linkedin" | "twitter" | "instagram" | "youtube";
  href: string;
}

export const footer = {
  brand: {
    name: "PowerGate",
    tagline: "SOFTWARE",
    logo: "/logos/powergate.svg",
    blurb:
      "We are looking for representative offices and partners in Egypt and across the region.",
    contactEmail: "contact@powergatesoftware.com",
  },

  socials: [
    { name: "facebook", href: "#" },
    { name: "linkedin", href: "#" },
  ] as SocialLink[],

  columns: [
    {
      title: "Services",
      links: [
        { label: "Solutions",    href: "#" },
        { label: "Industries",   href: "#" },
        { label: "Technologies", href: "#" },
        { label: "Case studies", href: "#" },
      ],
    },
    {
      title: "About us",
      links: [
        { label: "Contact us", href: "#" },
        { label: "Career",     href: "#" },
        { label: "Insight",    href: "#" },
        { label: "Approach",   href: "#" },
      ],
    },
  ] as FooterColumn[],

  awards: [
    { name: "ISO 27001",  image: "/awards/iso-27001.png" },
    { name: "ISO 9001",   image: "/awards/iso-9001.png" },
    { name: "Clutch",     image: "/awards/clutch-1.png" },
    { name: "Clutch",     image: "/awards/clutch-2.png" },
    { name: "Clutch",     image: "/awards/clutch-3.png" },
    { name: "Top B2B",    image: "/awards/top-b2b.png" },
    { name: "GoodFirms",  image: "/awards/goodfirms.png" },
  ] as Award[],

  offices: [
    {
      country: "Egypt",
      addressLines: [
        "6A Floor, C Tower, Central Point, 219 Trung Kinh St,",
        "Cau Giay Dist., Cairo",
      ],
      phones: ["(+20) 100 000 0000"],
      emails: ["eg@powergatesoftware.com"],
      timezone: "Africa/Cairo",
    },
  ] as Office[],

  // Extra world clocks (no address — just showing time where partners are)
  clocks: [
    { city: "London",   timezone: "Europe/London" },
    { city: "New York", timezone: "America/New_York" },
    { city: "Dubai",    timezone: "Asia/Dubai" },
    { city: "Sydney",   timezone: "Australia/Sydney" },
  ],

  legal: {
    copyright: "© Copyright 2025 PowerGate Software — A Member of PowerGate Group",
    links: [
      { label: "Cookie Settings", href: "#" },
      { label: "Privacy Policy",  href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
    dmcaHref: "#",
  },
};