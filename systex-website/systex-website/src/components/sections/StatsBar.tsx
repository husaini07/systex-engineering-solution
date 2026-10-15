import { stats } from "@/lib/content";

export function StatsBar({ dark = false }: { dark?: boolean }) {
  return (
    <dl className={`grid grid-cols-2 gap-px overflow-hidden rounded-xl border lg:grid-cols-4 ${dark ? "border-white/10" : "border-ink-200"} ${dark ? "bg-white/10" : "bg-ink-200"}`}>
      {stats.map((s) => (
        <div key={s.label} className={`flex flex-col p-6 sm:p-8 ${dark ? "bg-brand-900" : "bg-white"}`}>
          <dt className={`order-2 mt-2 text-sm font-semibold ${dark ? "text-white" : "text-ink-900"}`}>{s.label}</dt>
          <dd className={`order-1 font-display text-3xl font-extrabold sm:text-4xl ${dark ? "text-gold-400" : "text-brand-700"}`}>
            {s.value}
          </dd>
          <dd className={`order-3 mt-1 text-sm leading-snug ${dark ? "text-ink-300" : "text-ink-500"}`}>{s.detail}</dd>
        </div>
      ))}
    </dl>
  );
}
