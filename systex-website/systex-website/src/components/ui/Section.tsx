import type { ReactNode } from "react";
import { Container } from "./Container";

type Tone = "white" | "muted" | "dark";

const tones: Record<Tone, string> = {
  white: "bg-white",
  muted: "bg-ink-50",
  dark: "bg-brand-950 text-ink-200",
};

export function Section({
  children,
  tone = "white",
  id,
  className = "",
  labelledBy,
}: {
  children: ReactNode;
  tone?: Tone;
  id?: string;
  className?: string;
  labelledBy?: string;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`py-20 sm:py-24 lg:py-28 ${tones[tone]} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
