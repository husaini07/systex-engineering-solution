import Image from "next/image";
import Link from "next/link";
import emblem from "../../../public/images/systex-emblem.png";

export function Logo({ dark = false, priority = false }: { dark?: boolean; priority?: boolean }) {
  return (
    <Link href="/" className="group inline-flex items-center gap-3 rounded-md" aria-label="Systex Engineering Solutions — home">
      <Image src={emblem} alt="" width={44} height={44} priority={priority} className="h-11 w-11" />
      <span className="flex flex-col leading-none">
        <span className={`font-display text-xl font-extrabold tracking-[0.08em] ${dark ? "text-white" : "text-brand-800"}`}>
          SYSTE<span className="text-gold-500">X</span>
        </span>
        <span className={`mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] ${dark ? "text-ink-300" : "text-ink-500"}`}>
          Engineering Solutions
        </span>
      </span>
    </Link>
  );
}
