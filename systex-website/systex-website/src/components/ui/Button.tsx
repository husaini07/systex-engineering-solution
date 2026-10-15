import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost-light" | "gold";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3.5 text-[15px] font-semibold transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "bg-brand-700 text-white hover:bg-brand-800",
  secondary: "bg-white text-brand-800 hover:bg-brand-50",
  outline: "border border-ink-300 text-ink-800 hover:border-brand-700 hover:text-brand-800",
  "ghost-light": "border border-white/30 text-white hover:bg-white/10",
  gold: "bg-gold-500 text-brand-950 hover:bg-gold-400",
};

type Props = {
  href: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
  external?: boolean;
} & Omit<ComponentProps<"a">, "href">;

export function ButtonLink({ href, variant = "primary", children, className = "", external, ...rest }: Props) {
  const cls = `${base} ${variants[variant]} ${className}`;
  if (external || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return (
      <a
        href={href}
        className={cls}
        {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {children}
    </Link>
  );
}

export const buttonClass = (variant: Variant = "primary") => `${base} ${variants[variant]}`;
