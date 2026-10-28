/**
 * Central company configuration.
 * Update contact details, URLs and social links here — every page reads from this file.
 */
export const site = {
  name: "Systex Engineering Solutions",
  shortName: "Systex",
  tagline: "Plan • Manage • Deliver",
  description:
    "Project Management Consultancy for G1–G4 contractors in Malaysia. Tender support, QA/QC documentation, progress claims, VO/EOT tracking and handover dossiers across Civil, Structural, M&E Building Services, Energy & Utilities works.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.systex.my").replace(/\/$/, ""),
  registrationNo: "202603264523 (003897094-W)",
  legalStatus: "Registered under the Registration of Businesses Act 1956",
  operatingArea: "Klang Valley & Greater Selangor",
  coverage: "Extended Peninsular Malaysia coverage",
  disciplines: ["Civil", "Structural", "M&E Building Services", "Energy & Utilities Infrastructure"],
  contact: {
    phoneDisplay: "013-718 4950",
    phoneIntl: "+60137184950",
    whatsappNumber: "60137184950",
    email: "admin.systex@gmail.com",
    hours: "Monday – Friday, 9:00 am – 6:00 pm",
  },
  director: {
    name: "Ir. Ts. Mohd Husaini bin Maznudeen",
    title: "Managing Director",
  },
  social: [
  ] as const,
  /** Set to false to hide indicative package fees on the Services page. */
  showIndicativeFees: false,
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
] as const;

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${site.contact.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
