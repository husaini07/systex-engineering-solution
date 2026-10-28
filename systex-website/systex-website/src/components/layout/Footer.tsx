import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { nav, site, whatsappLink } from "@/lib/site";
import { serviceAreas } from "@/lib/content";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-brand-950 text-ink-300" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="h-1 bg-gradient-to-r from-brand-700 via-gold-500 to-brand-700" aria-hidden="true" />
      <div className="container grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo dark />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink-400">
            Project Management Consultancy for small and growing contractors across Civil, Structural, M&amp;E
            Building Services, Energy &amp; Utilities works.
          </p>
          <p className="mt-6 font-display text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
            {site.tagline}
          </p>
        </div>

        <nav aria-label="Quick links" className="lg:col-span-2">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="transition-colors hover:text-white">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Services" className="lg:col-span-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {serviceAreas.map((s) => (
              <li key={s.id}>
                <Link href={`/services#${s.id}`} className="transition-colors hover:text-white">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h3>
          <address className="mt-5 space-y-4 text-sm not-italic">
            <a href={`tel:${site.contact.phoneIntl}`} className="flex items-start gap-3 hover:text-white">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" aria-hidden="true" />
              <span>
                <span className="sr-only">Phone: </span>
                {site.contact.phoneDisplay}
              </span>
            </a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-white">
              <WhatsAppIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <span>WhatsApp {site.contact.phoneDisplay}</span>
            </a>
            <a href={`mailto:${site.contact.email}`} className="flex items-start gap-3 break-all hover:text-white">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" aria-hidden="true" />
              <span>{site.contact.email}</span>
            </a>
            <p className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" aria-hidden="true" />
              <span>
                {site.operatingArea}
                <br />
                <span className="text-ink-400">{site.coverage}</span>
              </span>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col gap-2 py-6 text-xs text-ink-400 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>Business Reg. No. {site.registrationNo}</p>
        </div>
      </div>
    </footer>
  );
}
