import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Workflow } from "@/components/sections/Workflow";
import { ButtonLink } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { alaCarte, governance, packages, serviceAreas } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Project Management Services",
  description:
    "Project Management Consultancy for G1–G4 contractors: tender support, site progress and claims, QA/QC and technical submissions, close-out documentation and project administration.",
  path: "/services",
});

const faqs = [
  {
    q: "Do we lose control of our submissions by outsourcing?",
    a: "No. Systex prepares, checks and tracks documents; your company reviews and approves every submission before it is issued. Decisions on pricing, claims and correspondence remain with you.",
  },
  {
    q: "Can we engage Systex for a single document?",
    a: "Yes. Individual deliverables such as a method statement, a VO submission or a BOQ review can be engaged on an à la carte basis without committing to a monthly package.",
  },
  {
    q: "Which disciplines do you support?",
    a: "Civil, Structural, M&E Building Services, and Energy & Utilities infrastructure works — for both main contract and sub-contract packages.",
  },
  {
    q: "Where do you operate?",
    a: `Our primary operating area is the ${site.operatingArea}. We support projects elsewhere in Peninsular Malaysia, with travel agreed as part of the scope.`,
  },
  {
    q: "How is a quotation prepared?",
    a: "We start with a short discussion of your project and workload, then confirm scope, deliverables, timeline, project complexity and travel before issuing a written quotation.",
  },
];

export default function ServicesPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Project Management Consultancy",
    provider: { "@id": `${site.url}/#organization` },
    areaServed: "MY",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Project Management Services",
      itemListElement: serviceAreas.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title, description: s.summary },
      })),
    },
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={faqJsonLd} />
      <PageHero
        crumb="Services"
        path="/services"
        eyebrow="Project Management"
        title="Practical project management and documentation support."
        intro="Outsourced PMC support for G1–G4 contractors — tender readiness, project controls, QA/QC documentation and close-out — delivered against an agreed scope."
      />

      {/* Service navigator */}
      <nav aria-label="Service areas" className="sticky top-[72px] z-30 border-b border-ink-200 bg-white/95 backdrop-blur md:top-[108px]">
        <ul className="container flex gap-1 overflow-x-auto py-3 text-sm [scrollbar-width:none]">
          {serviceAreas.map((s) => (
            <li key={s.id} className="shrink-0">
              <a href={`#${s.id}`} className="block rounded-md px-3 py-2 font-medium text-ink-600 hover:bg-brand-50 hover:text-brand-800">
                {s.number} · {s.title}
              </a>
            </li>
          ))}
          <li className="shrink-0">
            <a href="#packages" className="block rounded-md px-3 py-2 font-medium text-ink-600 hover:bg-brand-50 hover:text-brand-800">
              Packages
            </a>
          </li>
        </ul>
      </nav>

      {/* Service areas */}
      <Section labelledBy="scope-title">
        <SectionHeading
          id="scope-title"
          eyebrow="Scope of PMC Services"
          title="Five service areas. One accountable partner."
          intro="Each area can be engaged on its own or combined into a package covering the full project life cycle."
        />
        <div className="mt-16 space-y-8">
          {serviceAreas.map((s) => (
            <article
              key={s.id}
              id={s.id}
              aria-labelledby={`${s.id}-title`}
              className="scroll-mt-40 grid gap-8 rounded-2xl border border-ink-200 bg-white p-6 shadow-card sm:p-10 grid-cols-1 lg:grid-cols-[1fr_1.1fr] lg:gap-14"
            >
              <div>
                <div className="flex items-center gap-4">
                  <span className="font-display text-5xl font-extrabold text-brand-100">{s.number}</span>
                  <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
                    {s.stage}
                  </span>
                </div>
                <h3 id={`${s.id}-title`} className="mt-5 text-2xl font-bold">
                  {s.title}
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-ink-600">{s.summary}</p>
                <div className="mt-6 border-l-2 border-gold-500 pl-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">Outcome</p>
                  <p className="mt-1 text-ink-800">{s.outcome}</p>
                </div>
              </div>
              <div className="rounded-xl bg-ink-50 p-6 sm:p-8">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-500">What we deliver</h4>
                <ul className="mt-5 space-y-4">
                  {s.items.map((it) => (
                    <li key={it} className="flex gap-3 text-ink-800">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-700">
                        <Check className="h-3 w-3 text-white" aria-hidden="true" />
                      </span>
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Workflow */}
      <Section tone="dark" labelledBy="workflow-title">
        <SectionHeading
          id="workflow-title"
          dark
          eyebrow="How We Work"
          title="Our proposed six-step workflow."
          intro="A structured approach tailored to the agreed scope, deliverables and project requirements."
        />
        <div className="mt-14">
          <Workflow dark />
        </div>
        <ul className="mt-14 grid gap-4 md:grid-cols-3">
          {governance.map((g) => (
            <li key={g.title} className="border-t border-white/15 pt-5">
              <h3 className="font-display text-lg font-bold text-white">{g.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-300">{g.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Packages */}
      <Section tone="muted" id="packages" labelledBy="packages-title" className="scroll-mt-32">
        <SectionHeading
          id="packages-title"
          align="center"
          eyebrow="Service Engagement Models"
          title="Packages built around your workload."
          intro="Choose the level of support that matches your project stage, or combine services as the project develops."
        />
        <ul className="mt-14 grid gap-6 lg:grid-cols-3">
          {packages.map((p) => (
            <li
              key={p.name}
              className={`relative flex flex-col rounded-2xl p-8 ${
                p.featured ? "bg-brand-800 text-white shadow-lift ring-2 ring-gold-500" : "border border-ink-200 bg-white shadow-card"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-8 rounded-full bg-gold-500 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-950">
                  Featured package
                </span>
              )}
              <p className={`text-xs font-semibold uppercase tracking-wider ${p.featured ? "text-brand-200" : "text-ink-500"}`}>
                {p.tag}
              </p>
              <h3 className={`mt-2 text-2xl font-bold ${p.featured ? "text-white" : ""}`}>{p.name}</h3>
              {site.showIndicativeFees && (
                <p className="mt-6">
                  <span className={`font-display text-3xl font-extrabold ${p.featured ? "text-gold-400" : "text-brand-800"}`}>
                    {p.fee}
                  </span>
                  <span className={`mt-1 block text-sm ${p.featured ? "text-brand-200" : "text-ink-500"}`}>{p.basis}</span>
                </p>
              )}
              <ul className="mt-8 flex-1 space-y-3">
                {p.items.map((it) => (
                  <li key={it} className={`flex gap-3 text-[15px] ${p.featured ? "text-brand-50" : "text-ink-700"}`}>
                    <Check className={`mt-0.5 h-4 w-4 shrink-0 ${p.featured ? "text-gold-400" : "text-brand-600"}`} aria-hidden="true" />
                    {it}
                  </li>
                ))}
              </ul>
              <p className={`mt-8 border-t pt-5 text-sm ${p.featured ? "border-white/15 text-brand-100" : "border-ink-200 text-ink-500"}`}>
                <span className="font-semibold">Best for:</span> {p.fit}
              </p>
              <ButtonLink
                href={`/contact?package=${encodeURIComponent(p.name)}`}
                variant={p.featured ? "gold" : "primary"}
                className="mt-6"
              >
                Enquire about {p.name}
              </ButtonLink>
            </li>
          ))}
        </ul>

        {site.showIndicativeFees && (
          <>
            <div className="mt-20">
              <h3 className="text-center text-2xl font-bold">À la carte — pay only for what you need</h3>
              <div className="mt-10 grid gap-6 lg:grid-cols-3">
                {alaCarte.map((g) => (
                  <div key={g.group} className="overflow-hidden rounded-xl border border-ink-200 bg-white">
                    <table className="w-full text-left text-sm">
                      <caption className="bg-brand-50 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-brand-800">
                        {g.group}
                      </caption>
                      <thead className="sr-only">
                        <tr>
                          <th scope="col">Service</th>
                          <th scope="col">Indicative fee</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-ink-100">
                        {g.rows.map(([name, fee, unit]) => (
                          <tr key={name}>
                            <th scope="row" className="px-5 py-4 font-medium text-ink-800">
                              {name}
                            </th>
                            <td className="px-5 py-4 text-right">
                              <span className="block whitespace-nowrap font-semibold text-brand-800">{fee}</span>
                              <span className="text-xs text-ink-500">{unit}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ))}
              </div>
            </div>
            <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-ink-500">
              Indicative fees only. Scope, project complexity, travel and deliverables are confirmed in writing before
              quotation.
            </p>
          </>
        )}
      </Section>

      {/* FAQ */}
      <Section labelledBy="faq-title">
        <div className="grid gap-12 grid-cols-1 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <SectionHeading id="faq-title" eyebrow="Questions" title="Common questions from contractors." />
            <ButtonLink href="/contact" className="mt-8">
              Ask us directly <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </div>
          <div className="divide-y divide-ink-200 border-y border-ink-200">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-lg font-bold text-ink-900 [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span
                    aria-hidden="true"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink-200 text-brand-700 transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl leading-relaxed text-ink-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
