import { Building2, Droplets, Factory, Landmark, TrainFront, Zap } from "lucide-react";
import { industries } from "@/lib/content";

const icons = {
  landmark: Landmark,
  train: TrainFront,
  building: Building2,
  factory: Factory,
  droplets: Droplets,
  zap: Zap,
} as const;

export function IndustriesGrid() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {industries.map((i) => {
        const Icon = icons[i.icon];
        return (
          <li
            key={i.title}
            className="flex gap-5 rounded-xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-gold-500/50 hover:bg-white/[0.06]"
          >
            <Icon className="h-7 w-7 shrink-0 text-gold-400" aria-hidden="true" />
            <div>
              <h3 className="font-display text-lg font-bold text-white">{i.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-300">{i.text}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
