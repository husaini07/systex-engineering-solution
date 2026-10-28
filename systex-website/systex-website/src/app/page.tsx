import Link from "next/link";
import { ArrowRight, ArrowUpRight, BadgeCheck, Check } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { StatsBar } from "@/components/sections/StatsBar";
import { ReasonsGrid } from "@/components/sections/ReasonsGrid";
import { IndustriesGrid } from "@/components/sections/IndustriesGrid";
import { CtaBand } from "@/components/sections/CtaBand";
import { disciplines, serviceAreas } from "@/lib/content";
import { site, whatsappLink } from "@/lib/site";

const lifecycle = [
  { stage: "Tender", detail: "BOQ check · Method statements · Submission" },
  { stage: "Construction", detail: "Progress reports · AIP claims · VO / EOT" },
  { stage: "QA/QC", detail: "MAR · Inspection checklists · Defects" },
  { stage: "Close-out", detail: "T&C records · As-built · Handover dossier" },
];

export default function HomePage() {

  return (
    <>
      {/* ------------------------------- HERO ------------------------------- */}
      <section className="relative overflow-hidden bg-brand-950 text-white" aria-labelledby="hero-title">
        <div className="absolute inset-0 bg-blueprint-grid bg-grid" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(42,90,159,0.55),transparent_55%)]"
          aria-hidden="true"
        />
        <Container className="relative grid gap-14 py-20 sm:py-24 grid-cols-1 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:py-32">
          <div>
            <p className="eyebrow eyebrow-light">Project Management Consultancy</p>
            <h1 id="hero-title" className="mt-5 text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-[3.5rem]">
              Your outsourced project team,
              <span className="block text-gold-400">from tender to handover.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-300">
              Systex supports G1–G4 contractors with tender preparation, QA/QC documentation, progress claims and
              close-out — across Civil, Structural, M&amp;E, Energy and Utilities works. Led by a Professional
              Engineer, engaged per project, without adding to your fixed headcount.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" variant="gold">
                Request a Consultation <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink href="/services" variant="ghost-light">
                Explore Our Services
              </ButtonLink>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-300">
              {["Professional Engineer (BEM)", "Professional Technologist (MBOT)", "Member IEM"].map((c) => (
                <li key={c} className="flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 text-gold-400" aria-hidden="true" /> {c}
                </li>
              ))}
            </ul>
          </div>

          {/* Lifecycle panel */}
          <div className="relative">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur sm:p-8">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-300">Project lifecycle coverage</p>
                <span className="rounded-full bg-gold-500/15 px-3 py-1 text-xs font-semibold text-gold-300">
                  G1 – G4
                </span>
              </div>
              <ol className="mt-6 space-y-3">
                {lifecycle.map((l, i) => (
                  <li key={l.stage} className="flex items-center gap-4 rounded-xl border border-white/10 bg-brand-900/60 p-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-700 font-display text-sm font-bold text-white">
                      0{i + 1}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="font-display font-bold text-white">{l.stage}</p>
                      <p className="truncate text-sm text-ink-300">{l.detail}</p>
                    </div>
                    <Check className="h-5 w-5 shrink-0 text-gold-400" aria-hidden="true" />
                  </li>
                ))}
              </ol>
              <div className="mt-6 flex flex-wrap items-center justify-between gap-2 border-t border-white/10 pt-5 text-sm">
                <span className="text-ink-300">{site.operatingArea}</span>
                <span className="font-display font-semibold tracking-[0.18em] text-gold-400">PLAN · MANAGE · DELIVER</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ----------------------------- OVERVIEW ----------------------------- */}
      <Section labelledBy="overview-title">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            id="overview-title"
            eyebrow="Company Overview"
            title="A practical extension of your project team."
          />
          <div className="prose-body text-lg leading-relaxed text-ink-600">
            <p>
              Growing contractors win work on capability, then lose time and margin to paperwork. Tender
              documents, method statements, material approvals, progress claims and close-out dossiers all compete
              with the job that matters most — delivering on site.
            </p>
            <p>
              Systex Engineering Solutions is a specialised Project Management Consultancy that takes on that
              technical, commercial and documentation workload. We operate as your outsourced technical advisory
              team, so projects run systematically and claims are properly substantiated — without the cost of
              permanent staff.
            </p>
            <Link href="/about" className="mt-6 inline-flex items-center gap-2 font-semibold text-brand-700 hover:text-brand-900">
              About Systex <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="mt-16">
          <StatsBar />
        </div>
      </Section>

      {/* ------------------------------ SERVICES ---------------------------- */}
      <Section tone="muted" labelledBy="services-title">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            id="services-title"
            eyebrow="Core Services"
            title="Support across the full project lifecycle."
            intro="Engage Systex for a single deliverable or an agreed workstream. Every engagement starts with an agreed scope, deliverables and timeline."
          />
          <ButtonLink href="/services" variant="outline" className="shrink-0">
            All Services
          </ButtonLink>
        </div>
        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {serviceAreas.map((s) => (
            <li key={s.id}>
              <Link
                href={`/services#${s.id}`}
                className="group flex h-full flex-col rounded-xl border border-ink-200 bg-white p-8 shadow-card transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-lift"
              >
                <div className="flex items-start justify-between">
                  <span className="font-display text-3xl font-extrabold text-brand-100 transition-colors group-hover:text-gold-400">
                    {s.number}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-ink-300 transition-colors group-hover:text-brand-700" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-xl font-bold">{s.title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-ink-500">{s.summary}</p>
                <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-brand-600">{s.stage}</p>
              </Link>
            </li>
          ))}
          <li className="flex flex-col justify-between rounded-xl bg-brand-800 p-8 text-white">
            <div>
              <h3 className="text-xl font-bold text-white">Disciplines we cover</h3>
              <ul className="mt-5 space-y-3">
                {disciplines.map((d) => (
                  <li key={d.key} className="flex items-center gap-3 text-brand-100">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold-400" aria-hidden="true" />
                    {d.title}
                  </li>
                ))}
              </ul>
            </div>
            <Link href="/contact" className="mt-8 inline-flex items-center gap-2 font-semibold text-gold-300 hover:text-gold-400">
              Discuss your project <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </li>
        </ul>
      </Section>

      {/* ---------------------------- WHY CHOOSE US ------------------------- */}
      <Section labelledBy="why-title">
        <SectionHeading
          id="why-title"
          eyebrow="Why Choose Systex"
          title="Turn fixed overheads into flexible, project-based cost."
          intro="Full-time technical staff are a fixed liability. Systex gives you senior engineering support that scales with your active project volume."
        />
        <div className="mt-14">
          <ReasonsGrid />
        </div>
      </Section>

      {/* ------------------------------ INDUSTRIES -------------------------- */}
      <Section tone="dark" labelledBy="industries-title" className="relative overflow-hidden">
        <SectionHeading
          id="industries-title"
          dark
          eyebrow="Client Industries Served"
          title="Supporting contractors across Malaysia's built environment."
          intro="We focus on supporting G1–G4 contractors working across these sectors."
        />
        <div className="mt-14">
          <IndustriesGrid />
        </div>
      </Section>

      {/* -------------------------------- CTA ------------------------------- */}
      <CtaBand />

      <Container className="-mt-10 pb-16 text-center text-sm text-ink-500">
        Prefer a quick conversation?{" "}
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-semibold text-brand-700 hover:text-brand-900"
        >
          <WhatsAppIcon className="h-4 w-4" /> Message us on WhatsApp
        </a>
      </Container>
    </>
  );
}
