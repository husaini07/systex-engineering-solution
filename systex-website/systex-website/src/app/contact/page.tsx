import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { Section } from "@/components/ui/Section";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { pageMetadata } from "@/lib/seo";
import { site, whatsappLink } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Contact Us",
  description: `Contact Systex Engineering Solutions for tender support, progress claims, QA/QC documentation and project management. WhatsApp ${site.contact.phoneDisplay} or email ${site.contact.email}.`,
  path: "/contact",
});

const channels = [
  {
    icon: "whatsapp",
    label: "WhatsApp",
    value: site.contact.phoneDisplay,
    href: whatsappLink(`Hello ${site.shortName}, I would like to discuss project support.`),
    note: "Fastest response for urgent tenders",
  },
  {
    icon: "phone",
    label: "Phone",
    value: site.contact.phoneDisplay,
    href: `tel:${site.contact.phoneIntl}`,
    note: site.director.name,
  },
  {
    icon: "mail",
    label: "Email",
    value: site.contact.email,
    href: `mailto:${site.contact.email}`,
    note: "Send tender documents and drawings",
  },
] as const;

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumb="Contact Us"
        path="/contact"
        eyebrow="Contact Us"
        title="Tell us about your project."
        intro="Share your project stage, discipline and deadline. We will respond within one working day with what we can deliver, by when, and an indicative cost."
      />

      <Section labelledBy="contact-form-title">
        <div className="grid gap-12 grid-cols-1 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <aside aria-label="Contact details">
            <h2 className="text-2xl font-bold">Speak with us directly</h2>
            <ul className="mt-8 space-y-4">
              {channels.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    {...(c.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex items-start gap-4 rounded-xl border border-ink-200 p-5 transition-colors hover:border-brand-400 hover:bg-brand-50/50"
                  >
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${
                        c.icon === "whatsapp" ? "bg-[#128C7E] text-white" : "bg-brand-50 text-brand-700"
                      }`}
                    >
                      {c.icon === "whatsapp" && <WhatsAppIcon className="h-5 w-5" />}
                      {c.icon === "phone" && <Phone className="h-5 w-5" aria-hidden="true" />}
                      {c.icon === "mail" && <Mail className="h-5 w-5" aria-hidden="true" />}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-semibold uppercase tracking-wider text-ink-500">{c.label}</span>
                      <span className="mt-0.5 block break-all font-semibold text-ink-900 group-hover:text-brand-800">{c.value}</span>
                      <span className="mt-0.5 block text-sm text-ink-500">{c.note}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <dl className="mt-8 space-y-5 rounded-xl bg-ink-50 p-6 text-sm">
              <div className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-700" aria-hidden="true" />
                <div>
                  <dt className="font-semibold text-ink-900">Operating area</dt>
                  <dd className="mt-0.5 text-ink-600">
                    {site.operatingArea}
                    <br />
                    {site.coverage}
                  </dd>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-brand-700" aria-hidden="true" />
                <div>
                  <dt className="font-semibold text-ink-900">Business hours</dt>
                  <dd className="mt-0.5 text-ink-600">{site.contact.hours}</dd>
                </div>
              </div>
            </dl>
          </aside>

          <div className="rounded-2xl border border-ink-200 bg-white p-6 shadow-card sm:p-10">
            <h2 id="contact-form-title" className="text-2xl font-bold">
              Project enquiry
            </h2>
            <p className="mt-2 text-ink-500">No obligation. We confirm scope and fees in writing before any work begins.</p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
