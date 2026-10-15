import type { ReactNode } from "react";

export function SectionHeading({
  id,
  eyebrow,
  title,
  intro,
  align = "left",
  dark = false,
  as: Tag = "h2",
}: {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  dark?: boolean;
  as?: "h1" | "h2";
}) {
  const centered = align === "center";
  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className={`eyebrow ${dark ? "eyebrow-light" : ""} ${centered ? "justify-center" : ""}`}>{eyebrow}</p>}
      <Tag
        id={id}
        className={`mt-4 text-3xl font-bold leading-tight sm:text-4xl ${dark ? "text-white" : "text-ink-900"}`}
      >
        {title}
      </Tag>
      {intro && (
        <p className={`mt-5 text-lg leading-relaxed ${dark ? "text-ink-300" : "text-ink-500"}`}>{intro}</p>
      )}
    </div>
  );
}
