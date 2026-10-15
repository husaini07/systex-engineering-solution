import { Info } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { ProjectsExplorer } from "@/components/sections/ProjectsExplorer";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projectCategories, projects } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Projects & Experience",
  description:
    "Project leadership experience on ECRL, KVDT 2, Gemas–JB EDTP and KVMRT, and representative Systex engagement profiles across Civil, Structural, M&E, Energy and Utilities works.",
  path: "/projects",
});

const categoryNotes: Record<string, string> = {
  "Rail & Transit": "Signalling, system interface and resident engineering on national rail projects.",
  "Civil & Structural": "Tender, progress and claim support for civil and building structural packages.",
  "M&E Building Services": "Technical submissions, QA/QC and T&C documentation for building services.",
  "Energy & Utilities": "Contract administration and full PMC for power and utility network works.",
};

export default function ProjectsPage() {
  const cats = projectCategories.filter((c) => c !== "All");
  return (
    <>
      <PageHero
        crumb="Projects"
        path="/projects"
        eyebrow="Projects & Experience"
        title="Experience built on national infrastructure. Applied to your projects."
        intro="Our standards come from supervising and delivering some of Malaysia's largest rail programmes. The engagement profiles below show how that discipline is applied for G1–G4 contractors."
      />

      <Section tone="muted" labelledBy="categories-title">
        <SectionHeading id="categories-title" eyebrow="Industry Categories" title="Where our experience sits." />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cats.map((c) => (
            <li key={c} className="rounded-xl border border-ink-200 bg-white p-6">
              <p className="font-display text-3xl font-extrabold text-brand-700">
                {projects.filter((p) => p.category === c).length}
              </p>
              <h3 className="mt-2 font-bold">{c}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{categoryNotes[c]}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="showcase-title">
        <SectionHeading id="showcase-title" eyebrow="Project Showcase" title="Selected experience and engagement profiles." />
        <div className="mt-8 flex gap-3 rounded-xl border border-brand-100 bg-brand-50 p-5 text-sm leading-relaxed text-ink-700">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-brand-700" aria-hidden="true" />
          <p>
            <strong className="text-ink-900">Leadership experience</strong> refers to roles held by our Managing
            Director on behalf of government clients, consultants and main contractors prior to founding Systex.{" "}
            <strong className="text-ink-900">Engagement profiles</strong> illustrate the scope Systex typically delivers
            for contractors in each discipline.
          </p>
        </div>
        <div className="mt-12">
          <ProjectsExplorer />
        </div>
      </Section>

      <CtaBand
        title="Have a tender closing or a claim falling behind?"
        text="Share the project details and deadline. We will tell you what we can deliver, by when, and at what cost — before you commit."
      />
    </>
  );
}
