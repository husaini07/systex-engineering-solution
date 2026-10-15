export const grades = ["G1", "G2", "G3", "G4", "G5 and above", "Not CIDB registered / Other"] as const;

export const interests = [
  "Tender & Pre-Contract Support",
  "Construction & Site Progress",
  "Technical & QA/QC Management",
  "Project Documentation & Close-Out",
  "Business & Project Administration",
  "Tender Support Package",
  "Project Support Package",
  "Full PMC Turnkey Package",
  "Not sure yet — need advice",
] as const;

export type ContactPayload = {
  name: string;
  company: string;
  grade: string;
  phone: string;
  email: string;
  interest: string;
  message: string;
  website?: string; // honeypot
};

export type FieldErrors = Partial<Record<keyof ContactPayload, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+()\d\s-]{8,20}$/;

export function validateContact(data: Partial<ContactPayload>): FieldErrors {
  const e: FieldErrors = {};
  const s = (v: unknown) => (typeof v === "string" ? v.trim() : "");
  if (s(data.name).length < 2) e.name = "Please enter your full name.";
  if (s(data.name).length > 100) e.name = "Name is too long.";
  if (s(data.company).length < 2) e.company = "Please enter your company name.";
  if (!PHONE_RE.test(s(data.phone))) e.phone = "Please enter a valid phone number, e.g. 012-345 6789.";
  if (!EMAIL_RE.test(s(data.email))) e.email = "Please enter a valid email address.";
  if (!s(data.interest)) e.interest = "Please select the support you need.";
  if (s(data.message).length < 10) e.message = "Please tell us a little about your project (at least 10 characters).";
  if (s(data.message).length > 3000) e.message = "Message is too long (maximum 3,000 characters).";
  return e;
}

export function formatEnquiry(d: ContactPayload) {
  return [
    `Name: ${d.name}`,
    `Company: ${d.company}`,
    `CIDB Grade: ${d.grade || "-"}`,
    `Phone: ${d.phone}`,
    `Email: ${d.email}`,
    `Interested in: ${d.interest}`,
    "",
    d.message,
  ].join("\n");
}
