import { site, whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/ui/Icons";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink(`Hello ${site.shortName}, I would like to discuss project support for my company.`)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with ${site.shortName} on WhatsApp`}
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#128C7E] hover:bg-[#0f7a6e] text-white shadow-lift transition-transform hover:scale-105 sm:bottom-6 sm:right-6"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
