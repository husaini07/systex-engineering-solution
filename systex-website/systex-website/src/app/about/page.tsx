import Image from "next/image";
import { Check, Eye, Target } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { StatsBar } from "@/components/sections/StatsBar";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { challenges, credentials, disciplines, governance, directorExperience, serviceAreas, values } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import logo from "../../../public/images/systex-logo.png";

export const metadata = pageMetadata({
  title: "About Us",
  description:
    "Systex Engineering Solutions is a Project Management Consultancy supporting G1–G4 contractors in the Klang Valley and Selangor, led by Ir. Ts. Mohd Husaini bin Maznudeen.",
  path: "/about",
});

export default function AboutPage() {
  const experience = directorExperience;

  return (
    <>
      <PageHero
        crumb="About Us"
        path="/about"
        eyebrow="About Systex"
        title="Engineering governance, sized for growing contractors."
        intro="We bring the project controls, documentation discipline and commercial rigour of major infrastructure delivery to small and growing contractors — on a flexible, per-project basis."
      />

      {/* Background */}
      <Section labelledBy="background-title">
        <div className="grid gap-14 grid-cols-1 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div>
            <SectionHeading id="background-title" eyebrow="Company Background" title="Why Systex exists." />
            <div className="prose-body mt-8 text-lg leading-relaxed text-ink-600">
              <p>
                Contractors in grades G1 to G4 carry the same documentation and compliance obligations as larger
                firms, but rarely have dedicated tender engineers, document controllers or QA/QC staff to meet them.
                The result is familiar: principals stretched across site, tender and paperwork; delayed material
                approvals; and progress claims that do not reflect the work actually done.
              </p>
              <p>
                Systex Engineering Solutions was established to close that gap. We are a specialised Project
                Management Consultancy that acts as an outsourced technical advisory team — preparing, checking
                and tracking the technical and commercial documentation that keeps a project moving and a
                contractor paid.
              </p>
              <p>
                We operate from the Klang Valley, serving contractors across Greater Selangor with extended
                coverage throughout Peninsular Malaysia.
              </p>
            </div>
          </div>
          <aside className="rounded-2xl border border-ink-200 bg-ink-50 p-8" aria-labelledby="entity-title">
            <Image src={logo} alt="Systex Engineering Solutions logo" className="mx-auto h-auto w-56" sizes="224px" />
            <h3 id="entity-title" className="mt-8 text-sm font-semibold uppercase tracking-wider text-ink-500">
              Corporate Details
            </h3>
            <dl className="mt-4 divide-y divide-ink-200 text-sm">
              {[
                ["Company", site.name],
                ["Registration No.", site.registrationNo],
                ["Legal Status", site.legalStatus],
                ["Operating Area", `${site.operatingArea} (${site.coverage.toLowerCase()})`],
                ["Disciplines", site.disciplines.join(", ")],
              ].map(([k, v]) => (
                <div key={k} className="grid grid-cols-[120px_1fr] gap-4 py-3">
                  <dt className="font-medium text-ink-500">{k}</dt>
                  <dd className="text-ink-800">{v}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
        <div className="mt-16">
          <StatsBar />
        </div>
      </Section>

      {/* Challenges */}
      <Section tone="muted" labelledBy="challenges-title">
        <SectionHeading
          id="challenges-title"
          eyebrow="The Problem We Solve"
          title="Where growing contractors lose time and margin."
        />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {challenges.map((c) => (
            <li key={c.title} className="rounded-xl border-t-4 border-brand-700 bg-white p-7 shadow-card">
              <h3 className="text-lg font-bold">{c.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-500">{c.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Mission & Vision */}
      <Section labelledBy="mission-title">
        <h2 id="mission-title" className="sr-only">
          Mission and Vision
        </h2>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl bg-brand-800 p-10 text-white">
            <Target className="h-9 w-9 text-gold-400" aria-hidden="true" />
            <h3 className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-brand-200">Our Mission</h3>
            <p className="mt-4 font-display text-2xl font-bold leading-snug text-white">
              To give small and growing contractors access to professional project governance — accurate
              documentation, disciplined controls and substantiated claims — without the burden of fixed overheads.
            </p>
          </div>
          <div className="rounded-2xl border border-ink-200 bg-ink-50 p-10">
            <Eye className="h-9 w-9 text-brand-700" aria-hidden="true" />
            <h3 className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-ink-500">Our Vision</h3>
            <p className="mt-4 font-display text-2xl font-bold leading-snug text-ink-900">
              To be the trusted project management partner that helps Malaysian contractors grow from G1 to the
              next grade — with the systems, records and reputation to compete for larger work.
            </p>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section tone="muted" labelledBy="values-title">
        <SectionHeading id="values-title" eyebrow="Core Values" title="How we work, on every engagement." />
        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {values.map((v, i) => (
            <li key={v.title} className="rounded-xl bg-white p-7 shadow-card">
              <span className="font-display text-sm font-bold text-gold-600">0{i + 1}</span>
              <h3 className="mt-3 text-lg font-bold">{v.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-500">{v.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Leadership */}
      <Section labelledBy="leadership-title">
        <SectionHeading
          id="leadership-title"
          eyebrow="Leadership"
          title="Led by a Professional Engineer."
          intro="Every Systex engagement is directed by our Managing Director, who brings over 15 years of technical leadership on major Malaysian infrastructure."
        />
        <div className="mt-14 grid gap-10 rounded-2xl border border-ink-200 p-6 sm:p-10 grid-cols-1 lg:grid-cols-[320px_1fr]">
          <div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-ink-100">
              <Image
                src="/images/IMG-20260923-WA0017.jpg"
                alt="Portrait of the Managing Director of Systex Engineering Solutions"
                fill
                sizes="(min-width: 1024px) 320px, (min-width: 640px) 320px, 100vw"
                className="object-cover object-top"
                priority
              />
            </div>
            <ul className="mt-6 grid grid-cols-2 gap-3">
              {credentials.map((c) => (
                <li key={c.short} className="rounded-lg border border-ink-200 p-3">
                  <p className="font-display text-lg font-extrabold text-brand-700">{c.short}</p>
                  <p className="text-xs font-semibold text-ink-800">{c.long}</p>
                  <p className="mt-0.5 text-[11px] leading-snug text-ink-500">{c.body}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold">{site.director.name}</h3>
            <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-brand-600">
              Managing Director · Professional Engineer &amp; Technologist
            </p>
            <p className="mt-6 text-lg leading-relaxed text-ink-600">
              A Professional Engineer with over 15 years of technical leadership in engineering, project delivery,
              testing &amp; commissioning and stakeholder management across Malaysia&apos;s premier infrastructure
              and commercial projects — working on behalf of government clients, supervision consultants and main
              contractors.
            </p>
            <h4 className="mt-10 text-xs font-semibold uppercase tracking-wider text-ink-500">
              Selected professional experience in previous appointments
            </h4>
            <p className="mt-3 text-sm text-ink-600">The experience below belongs to the Managing Director through previous professional employment, and does not represent projects contracted or delivered by Systex Engineering Solutions. Details are based on the MD curriculum vitae.</p>
            <ul className="mt-4 divide-y divide-ink-200 border-y border-ink-200">
              {experience.map((e) => (
                <li key={e.title} className="grid gap-1 py-4 sm:grid-cols-[1fr_1.2fr] sm:gap-6">
                  <p className="font-semibold text-ink-900">{e.title}</p>
                  <p className="text-sm text-ink-600">{e.role}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Capabilities */}
      <Section tone="dark" labelledBy="capabilities-title">
        <SectionHeading
          id="capabilities-title"
          dark
          eyebrow="Company Capabilities"
          title="What we deliver, and the principles behind it."
        />
        <div className="mt-14 grid gap-12 lg:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-400">Service capabilities</h3>
            <ul className="mt-5 space-y-3">
              {serviceAreas.map((s) => (
                <li key={s.id} className="flex gap-3 text-ink-200">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-gold-400" aria-hidden="true" /> {s.title}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-400">Engineering disciplines</h3>
            <ul className="mt-5 space-y-4">
              {disciplines.map((d) => (
                <li key={d.key}>
                  <p className="font-semibold text-white">{d.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-300">{d.text}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-400">Governance principles</h3>
            <ul className="mt-5 space-y-4">
              {governance.map((g) => (
                <li key={g.title} className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="font-semibold text-white">{g.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-300">{g.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
