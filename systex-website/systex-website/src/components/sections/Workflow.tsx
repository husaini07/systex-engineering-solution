import { workflow } from "@/lib/content";

export function Workflow({ dark = false }: { dark?: boolean }) {
  return (
    <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
      {workflow.map((w, idx) => (
        <li
          key={w.step}
          className={`relative rounded-xl border p-6 ${
            dark ? "border-white/10 bg-white/[0.03]" : "border-ink-200 bg-white shadow-card"
          }`}
        >
          <span className={`font-display text-sm font-bold ${dark ? "text-gold-400" : "text-gold-600"}`}>{w.step}</span>
          <h3 className={`mt-3 text-lg font-bold uppercase tracking-wide ${dark ? "text-white" : "text-brand-800"}`}>
            {w.title}
          </h3>
          <p className={`mt-2 text-sm leading-relaxed ${dark ? "text-ink-300" : "text-ink-500"}`}>{w.text}</p>
          {idx < workflow.length - 1 && (
            <span
              aria-hidden="true"
              className={`absolute -right-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full text-xs lg:flex ${
                dark ? "bg-brand-800 text-gold-400" : "bg-brand-700 text-white"
              }`}
            >
              ›
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}
