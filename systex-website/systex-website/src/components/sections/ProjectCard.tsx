import { Check, MapPin } from "lucide-react";
import type { Project } from "@/lib/content";

export function ProjectCard({ project, compact = false }: { project: Project; compact?: boolean }) {
  const isExperience = project.kind === "experience";
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-ink-200 bg-white shadow-card transition-shadow hover:shadow-lift">
      <div className="relative h-36 overflow-hidden bg-brand-900">
        <div className="absolute inset-0 bg-blueprint-grid bg-grid" aria-hidden="true" />
        <ProjectGraphic category={project.category} />
        <div className="absolute left-5 top-5 flex flex-wrap gap-2">
          <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-brand-800">{project.category}</span>
        </div>
        <span
          className={`absolute bottom-4 left-5 rounded px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider ${
            isExperience ? "bg-gold-500 text-brand-950" : "bg-white/15 text-white"
          }`}
        >
          {isExperience ? "Leadership experience" : "Engagement profile"}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold leading-snug">{project.title}</h3>
        <p className="mt-2 text-sm font-medium text-brand-700">{project.role}</p>
        <p className="mt-1 flex items-center gap-1.5 text-xs text-ink-500">
          <MapPin className="h-3.5 w-3.5" aria-hidden="true" /> {project.location}
        </p>
        <p className="mt-4 text-[15px] leading-relaxed text-ink-600">{project.summary}</p>
        {!compact && (
          <>
            <h4 className="mt-5 text-xs font-semibold uppercase tracking-wider text-ink-500">Scope</h4>
            <ul className="mt-3 space-y-2 text-sm text-ink-600">
              {project.scope.map((s) => (
                <li key={s} className="flex gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" />
                  {s}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </article>
  );
}

/** Lightweight line-art per discipline — no photos, so pages stay fast. */
function ProjectGraphic({ category }: { category: Project["category"] }) {
  const stroke = "rgba(221,178,79,0.85)";
  const faint = "rgba(255,255,255,0.35)";
  return (
    <svg viewBox="0 0 400 144" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMaxYMid slice" aria-hidden="true">
      {category === "Rail & Transit" && (
        <g fill="none" strokeWidth="2">
          <path d="M150 120 L400 60" stroke={faint} />
          <path d="M170 132 L400 78" stroke={faint} />
          {Array.from({ length: 10 }).map((_, i) => (
            <path key={i} d={`M${180 + i * 24} ${118 - i * 5.6} l6 14`} stroke={faint} />
          ))}
          <path d="M240 70 h110 a14 14 0 0 1 14 14 v14 h-124z" stroke={stroke} />
          <path d="M252 78 h20 v10 h-20z M282 78 h20 v10 h-20z M312 78 h20 v10 h-20z" stroke={stroke} />
        </g>
      )}
      {category === "Civil & Structural" && (
        <g fill="none" strokeWidth="2">
          <path d="M200 130 h190" stroke={faint} />
          <path d="M230 130 V40 h120 v90" stroke={stroke} />
          <path d="M230 70 h120 M230 100 h120 M270 40 v90 M310 40 v90" stroke={stroke} />
          <path d="M230 40 l40 30 M270 40 l40 30 M310 40 l40 30" stroke={faint} />
        </g>
      )}
      {category === "M&E Building Services" && (
        <g fill="none" strokeWidth="2">
          <path d="M210 40 h60 v40 h60 v-20 h50" stroke={stroke} />
          <path d="M210 110 h100 v-30" stroke={faint} />
          <circle cx="270" cy="80" r="10" stroke={stroke} />
          <circle cx="330" cy="60" r="10" stroke={stroke} />
          <path d="M350 100 l10 -16 h-12 l10 -16" stroke={stroke} />
        </g>
      )}
      {category === "Energy & Utilities" && (
        <g fill="none" strokeWidth="2">
          <path d="M260 130 L285 30 L310 130 M268 98 h34 M274 70 h22" stroke={stroke} />
          <path d="M255 52 h60" stroke={stroke} />
          <path d="M315 52 C345 70 370 70 400 56 M255 52 C225 70 200 70 180 60" stroke={faint} />
          <path d="M330 130 h60 M340 118 h40 v12" stroke={faint} />
        </g>
      )}
    </svg>
  );
}
