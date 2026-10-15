"use client";

import { useMemo, useState } from "react";
import { projectCategories, projects, type ProjectCategory } from "@/lib/content";
import { ProjectCard } from "./ProjectCard";

type Filter = (typeof projectCategories)[number];

export function ProjectsExplorer() {
  const [active, setActive] = useState<Filter>("All");

  const counts = useMemo(() => {
    const c: Record<string, number> = { All: projects.length };
    for (const p of projects) c[p.category] = (c[p.category] ?? 0) + 1;
    return c;
  }, []);

  const visible = active === "All" ? projects : projects.filter((p) => p.category === (active as ProjectCategory));

  return (
    <div>
      <div role="group" aria-label="Filter projects by industry category" className="flex flex-wrap gap-2">
        {projectCategories.map((cat) => {
          const on = active === cat;
          return (
            <button
              key={cat}
              type="button"
              aria-pressed={on}
              onClick={() => setActive(cat)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                on
                  ? "border-brand-700 bg-brand-700 text-white"
                  : "border-ink-200 bg-white text-ink-700 hover:border-brand-400 hover:text-brand-800"
              }`}
            >
              {cat} <span className={on ? "text-brand-200" : "text-ink-400"}>({counts[cat] ?? 0})</span>
            </button>
          );
        })}
      </div>
      <p className="sr-only" aria-live="polite">
        Showing {visible.length} {visible.length === 1 ? "project" : "projects"}
        {active !== "All" ? ` in ${active}` : ""}.
      </p>
      <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => (
          <li key={p.slug}>
            <ProjectCard project={p} />
          </li>
        ))}
      </ul>
    </div>
  );
}
