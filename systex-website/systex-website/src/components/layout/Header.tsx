"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { nav, site } from "@/lib/site";
import { Logo } from "./Logo";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white transition-shadow ${
        scrolled ? "border-ink-100 shadow-sm" : "border-transparent"
      }`}
    >
      <div className="hidden border-b border-ink-100 bg-ink-50 text-xs text-ink-500 md:block">
        <div className="container flex h-9 items-center justify-between">
          <p>
            Project Management Consultancy for G1–G4 Contractors · {site.operatingArea}
          </p>
          <div className="flex items-center gap-6">
            <a href={`tel:${site.contact.phoneIntl}`} className="hover:text-brand-700">
              {site.contact.phoneDisplay}
            </a>
            <a href={`mailto:${site.contact.email}`} className="hover:text-brand-700">
              {site.contact.email}
            </a>
          </div>
        </div>
      </div>

      <div className="container flex h-[72px] items-center justify-between gap-6">
        <Logo priority />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`relative rounded-md px-4 py-2 text-[15px] font-medium transition-colors ${
                    isActive(item.href) ? "text-brand-800" : "text-ink-600 hover:text-brand-800"
                  }`}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <span aria-hidden="true" className="absolute inset-x-4 -bottom-[17px] h-0.5 bg-gold-500" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-md bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-800 sm:inline-flex"
          >
            Request a Consultation
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-ink-800 hover:bg-ink-50 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-[72px] overflow-y-auto border-t border-ink-100 bg-white lg:hidden md:top-[108px]"
      >
        <nav aria-label="Mobile" className="container py-6">
          <ul className="divide-y divide-ink-100">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`flex items-center justify-between py-4 text-lg font-medium ${
                    isActive(item.href) ? "text-brand-800" : "text-ink-700"
                  }`}
                >
                  {item.label}
                  {isActive(item.href) && <span className="h-2 w-2 rounded-full bg-gold-500" aria-hidden="true" />}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 space-y-3">
            <Link
              href="/contact"
              className="flex w-full items-center justify-center rounded-md bg-brand-700 px-5 py-3.5 font-semibold text-white"
            >
              Request a Consultation
            </Link>
            <a
              href={`tel:${site.contact.phoneIntl}`}
              className="flex w-full items-center justify-center gap-2 rounded-md border border-ink-200 px-5 py-3.5 font-semibold text-ink-800"
            >
              <Phone className="h-4 w-4" aria-hidden="true" /> {site.contact.phoneDisplay}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
