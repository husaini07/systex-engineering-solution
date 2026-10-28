/**
 * Website copy and structured content.
 * Keep wording factual: everything here can be supported by Systex's company profile.
 */

export const stats = [
  { value: "G1–G4", label: "Core client segment", detail: "CIDB-graded small and growing contractors" },
  { value: "4", label: "Project stages covered", detail: "Tender, construction, QA/QC and close-out" },
  { value: "6-step", label: "Support workflow", detail: "From scope review to final handover dossier" },
  { value: "15+", label: "Years of leadership", detail: "Engineering and delivery experience of our MD" },
] as const;

export const disciplines = [
  {
    key: "civil",
    title: "Civil Works",
    text: "Earthworks, roads, drainage and infrastructure packages — tender review, BOQ verification and progress documentation.",
  },
  {
    key: "structural",
    title: "Structural Works",
    text: "Building and infrastructure structures — method statements, inspection records and material approvals prepared to specification.",
  },
  {
    key: "mne",
    title: "M&E Building Services",
    text: "Electrical, ACMV, plumbing and fire services — MAR submissions, QA/QC checklists and testing & commissioning records.",
  },
  {
    key: "energy",
    title: "Energy & Utilities",
    text: "Power distribution, water and utility networks — interface coordination, progress tracking and handover dossiers.",
  },
] as const;

export type ServiceArea = {
  id: string;
  number: string;
  title: string;
  stage: string;
  summary: string;
  items: string[];
  outcome: string;
};

export const serviceAreas: ServiceArea[] = [
  {
    id: "tender",
    number: "01",
    title: "Tender & Pre-Contract Support",
    stage: "Pre-contract",
    summary:
      "A technically sound, complete and compliant submission — prepared without pulling your team off live sites.",
    items: [
      "Tender document review and site visit inspection",
      "Bill of Quantities (BOQ) checking and scope verification",
      "Tender document compilation and submission support",
      "Technical clarification and query response drafting",
    ],
    outcome: "Structured tender documents and scope review records for client verification.",
  },
  {
    id: "construction",
    number: "02",
    title: "Construction & Site Progress",
    stage: "Construction",
    summary:
      "Progress that is measured, recorded and substantiated — so valuations reflect the work actually done on site.",
    items: [
      "Regular site progress monitoring and verification",
      "Monthly progress reports with photographic records",
      "Interim Progress Claim (AIP) documentation",
      "Variation Order (VO) and Extension of Time (EOT) tracking",
    ],
    outcome: "Fewer valuation disputes, better-supported claims and earlier visibility of programme slippage.",
  },
  {
    id: "qaqc",
    number: "03",
    title: "Technical & QA/QC Management",
    stage: "Construction",
    summary:
      "Technical submissions prepared in the format consultants expect, reducing rejection and resubmission cycles.",
    items: [
      "Material Approval Request (MAR) compilation",
      "Method Statement (MS) preparation and submission",
      "Inspection and QA/QC checklist administration",
      "Defect monitoring and rectification tracking",
    ],
    outcome: "Organised technical submissions and traceable QA/QC documentation.",
  },
  {
    id: "closeout",
    number: "04",
    title: "Project Documentation & Close-Out",
    stage: "Close-out",
    summary:
      "A clean handover that protects your final account, retention release and reputation with the client.",
    items: [
      "Project correspondence and professional letter drafting",
      "Site meeting representation and minutes verification",
      "Testing & Commissioning (T&C) documentation",
      "As-built drawings and final handover dossier compilation",
    ],
    outcome: "Complete close-out records that support Certificate of Practical Completion and final account.",
  },
  {
    id: "admin",
    number: "05",
    title: "Business & Project Administration",
    stage: "All stages",
    summary:
      "Professional written communication and administration that reflects a well-run contracting business.",
    items: [
      "Professional business letters and email drafting",
      "Meeting agendas and minutes preparation",
      "Document formatting, compilation and submission reports",
      "Project administrative coordination and follow-up",
    ],
    outcome: "Consistent, professional correspondence and nothing left waiting on a reply.",
  },
];

export const workflow = [
  { step: "01", title: "Understand", text: "Scope and tender review" },
  { step: "02", title: "Plan", text: "Action list and programme" },
  { step: "03", title: "Prepare", text: "Compile technical documents" },
  { step: "04", title: "Check", text: "Compliance audit" },
  { step: "05", title: "Monitor", text: "Site and claim tracking" },
  { step: "06", title: "Close", text: "Handover and final dossier" },
] as const;

export const packages = [
  {
    name: "Tender Support",
    tag: "Package 1",
    fee: "RM 1,800 – 4,500",
    basis: "per tender submission",
    fit: "Pre-contract phase",
    featured: false,
    items: [
      "Site visit and assessment",
      "BOQ and scope review",
      "Tender document preparation",
      "Technical clarification support",
    ],
  },
  {
    name: "Project Support",
    tag: "Package 2",
    fee: "RM 2,000 – 3,800",
    basis: "per month",
    fit: "Construction phase",
    featured: true,
    items: [
      "Monthly progress reports",
      "Progress claim documentation",
      "QA/QC inspection checklists",
      "Method statements and material approvals",
      "Contractual correspondence and administrative coordination",
      "VO and EOT tracking",
    ],
  },
  {
    name: "Integrated Project Support",
    tag: "Package 3",
    fee: "RM 5,000 – 9,500",
    basis: "phased fees based on project duration and agreed scope",
    fit: "Full project life cycle",
    featured: false,
    items: [
      "Tender-to-handover support",
      "Project reporting and controls",
      "Technical and QA/QC documents",
      "Handover and final account closing",
    ],
  },
] as const;

export const alaCarte = [
  {
    group: "Tender support",
    rows: [
      ["Site visit & assessment", "RM 250 – 400", "per visit"],
      ["BOQ review & scope check", "RM 300 – 800", "per review"],
      ["Tender document preparation", "RM 1,200 – 2,500", "per submission"],
      ["Technical clarifications", "RM 200 – 500", "per response set"],
    ],
  },
  {
    group: "Construction support",
    rows: [
      ["Monthly progress report", "RM 300 – 700", "per submission"],
      ["Progress claim preparation", "RM 300 – 700", "per submission"],
      ["VO submission", "RM 300 – 800", "per submission"],
      ["EOT submission", "From RM 500", "subject to claim complexity"],
    ],
  },
  {
    group: "Technical & close-out",
    rows: [
      ["QA/QC report", "RM 250 – 400", "per document"],
      ["Material approval submission", "RM 250 – 400", "per document"],
      ["Method statement / HIRAC", "RM 300 – 700", "per document"],
      ["Handover dossier compilation", "RM 800 – 2,000", "per project"],
      ["T&C documentation", "RM 400 – 800", "per trade system"],
      ["Contractual letter & delay notice", "RM 150 – 300", "per letter"],
    ],
  },
  {
    group: "Professional administration",
    rows: [
      ["Business letter / executive email", "RM 50 – 150", "per letter / email"],
      ["Meeting agenda & minutes", "RM 100 – 300", "per meeting"],
      ["Document formatting & submission packaging", "RM 500 – 1,500", "per submission"],
      ["Administrative coordination & follow-up", "RM 25 – 60", "per hour"],
    ],
  },
] as const;

export const challenges = [
  {
    title: "Fixed overheads",
    text: "Full-time technical hires carry payroll, EPF and SOCSO whether or not projects are running.",
  },
  {
    title: "Principals stretched thin",
    text: "Owners juggle site execution, tender bidding and paperwork at the same time — and something slips.",
  },
  {
    title: "Undervalued progress claims",
    text: "Poorly substantiated claims lead to valuation shortfalls and strained cash flow.",
  },
  {
    title: "LAD exposure",
    text: "Unsupported VO and EOT submissions leave the contractor carrying liquidated damages risk.",
  },
] as const;

export const reasons = [
  {
    icon: "wallet",
    title: "Senior expertise without payroll",
    text: "Engage technical support per project or per deliverable. No EPF, SOCSO or long-term staffing commitment.",
  },
  {
    icon: "shield",
    title: "Aligned to JKR & CIDB expectations",
    text: "Document preparation is guided by the applicable tender and contract requirements supplied for each engagement.",
  },
  {
    icon: "trending",
    title: "Stronger cash flow",
    text: "We help prepare supporting records for progress claims, variation requests and extension-of-time submissions.",
  },
  {
    icon: "scale",
    title: "Scales with your workload",
    text: "Support flexes up during tender peaks and down between projects — you pay for what is delivered.",
  },
  {
    icon: "badge",
    title: "Led by a Professional Engineer",
    text: "Led by a Managing Director with professional experience in Malaysian infrastructure delivery.",
  },
  {
    icon: "handshake",
    title: "Agreed scope, your control",
    text: "Scope, deliverables and timeline are fixed upfront. You retain every decision and every submission.",
  },
] as const;

export const governance = [
  {
    title: "Scope Control",
    text: "Rigorous evaluation of deliverables, interfaces and contract boundaries before work begins.",
  },
  {
    title: "Programme Control",
    text: "Planned versus actual tracking to identify milestone slippage early and act on it.",
  },
  {
    title: "Quality & Compliance",
    text: "Execution in accordance with approved specifications, drawings and applicable standards.",
  },
] as const;

export const industries = [
  {
    icon: "landmark",
    title: "Public Infrastructure",
    text: "Government-funded civil and building works under JKR and agency contracts.",
  },
  {
    icon: "train",
    title: "Rail & Transit",
    text: "Sub-contract packages on rail, station and transit-related infrastructure.",
  },
  {
    icon: "building",
    title: "Commercial & Residential",
    text: "Building construction, fit-out and M&E services installation packages.",
  },
  {
    icon: "factory",
    title: "Industrial Facilities",
    text: "Factory, warehouse and plant works requiring disciplined QA/QC records.",
  },
  {
    icon: "droplets",
    title: "Water & Utilities",
    text: "Water reticulation, sewerage and utility network installation works.",
  },
  {
    icon: "zap",
    title: "Power & Energy",
    text: "LV/MV distribution, substations and energy infrastructure packages.",
  },
] as const;

export const values = [
  {
    title: "Integrity",
    text: "We document what is true and verifiable. A claim we prepare is one we can stand behind in front of a consultant.",
  },
  {
    title: "Discipline",
    text: "Structured workflows, checklists and version control on every submission — not ad hoc effort.",
  },
  {
    title: "Accountability",
    text: "Agreed deliverables, agreed dates. We report progress openly and flag issues before they become disputes.",
  },
  {
    title: "Contractor First",
    text: "We work for the contractor's commercial position, inside the boundaries of the contract and the specification.",
  },
  {
    title: "Practicality",
    text: "Advice sized to G1–G4 operations. Every recommendation has to work on a real site with a real budget.",
  },
] as const;

export const credentials = [
  { short: "Ir.", long: "Professional Engineer", body: "Board of Engineers Malaysia (BEM)" },
  { short: "Ts.", long: "Professional Technologist", body: "Malaysia Board of Technologists (MBOT)" },
  { short: "IEM", long: "Member", body: "The Institution of Engineers, Malaysia (IEM)" },
  { short: "B.Eng", long: "Electrical Engineering", body: "Universiti Teknologi Malaysia (UTM)" },
] as const;

/** Individual professional history stated in the MD CV; NOT Systex project contracts. */
export const directorExperience = [
  { title: "East Coast Rail Link (ECRL)", role: "Senior Signalling Engineer — LRSSC (from Feb 2024)" },
  { title: "Klang Valley Electrified Double Track Phase 2 (KVDT2)", role: "Senior Signalling Engineer — SITC (from Feb 2024)" },
  { title: "Gemas–Johor Bahru Electrified Double Track", role: "Resident Engineer (Aug 2019 – Jan 2024)" },
  { title: "Klang Valley Electrified Double Track Phase 1 (KVDT1)", role: "Signalling Engineer (Feb 2016 – Aug 2019)" },
  { title: "Klang Valley MRT Line 1", role: "Signalling Design Engineer / Interface Engineer (2013 – 2015)" },
  { title: "LRT Ampang Line Extension", role: "Senior Signalling Site Engineer / Site Design Engineer (2015 – 2016)" },
] as const;
