import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { site, whatsappLink } from "@/lib/site";

export function CtaBand({
  title = "Strengthen your next tender and project delivery.",
  text = "Tell us about your workload. We agree the scope, deliverables and timeline before any work begins — and you keep control of every decision and submission.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section aria-labelledby="cta-title" className="bg-white py-20 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-2xl bg-brand-800 px-6 py-14 sm:px-12 lg:px-16">
          <div className="absolute inset-0 bg-blueprint-grid bg-grid opacity-60" aria-hidden="true" />
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border-[28px] border-gold-500/20" aria-hidden="true" />
          <div className="relative grid gap-10 grid-cols-1 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <p className="eyebrow eyebrow-light">{site.tagline}</p>
              <h2 id="cta-title" className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
                {title}
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-brand-100">{text}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch">
              <ButtonLink href="/contact" variant="gold">
                Request a Consultation <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink
                href={whatsappLink(`Hello ${site.shortName}, I would like to discuss project support.`)}
                variant="ghost-light"
              >
                <WhatsAppIcon className="h-5 w-5" /> WhatsApp {site.contact.phoneDisplay}
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
