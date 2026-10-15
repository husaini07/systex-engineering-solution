import { BadgeCheck, Handshake, Scale, ShieldCheck, TrendingUp, Wallet } from "lucide-react";
import { reasons } from "@/lib/content";

const icons = {
  wallet: Wallet,
  shield: ShieldCheck,
  trending: TrendingUp,
  scale: Scale,
  badge: BadgeCheck,
  handshake: Handshake,
} as const;

export function ReasonsGrid() {
  return (
    <ul className="grid gap-px overflow-hidden rounded-xl border border-ink-200 bg-ink-200 sm:grid-cols-2 lg:grid-cols-3">
      {reasons.map((r) => {
        const Icon = icons[r.icon];
        return (
          <li key={r.title} className="bg-white p-8">
            <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
              <Icon className="h-6 w-6" aria-hidden="true" />
            </span>
            <h3 className="mt-6 text-lg font-bold">{r.title}</h3>
            <p className="mt-3 leading-relaxed text-ink-500">{r.text}</p>
          </li>
        );
      })}
    </ul>
  );
}
