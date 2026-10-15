import type { Metadata } from "next";
import { site } from "./site";

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      url: path,
      siteName: site.name,
      locale: "en_MY",
      type: "website",
    },
    twitter: { card: "summary_large_image", title: `${title} | ${site.name}`, description },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${site.url}/#organization`,
    name: site.name,
    alternateName: "Systex",
    slogan: site.tagline,
    description: site.description,
    url: site.url,
    logo: `${site.url}/images/systex-logo.png`,
    image: `${site.url}/opengraph-image.png`,
    email: site.contact.email,
    telephone: site.contact.phoneIntl,
    identifier: site.registrationNo,
    areaServed: [
      { "@type": "AdministrativeArea", name: "Klang Valley" },
      { "@type": "State", name: "Selangor" },
      { "@type": "Country", name: "Malaysia" },
    ],
    address: { "@type": "PostalAddress", addressRegion: "Selangor", addressCountry: "MY" },
    founder: { "@type": "Person", name: site.director.name, jobTitle: site.director.title },
    knowsAbout: [
      "Project Management Consultancy",
      "Tender preparation",
      "QA/QC documentation",
      "Progress claims",
      "Variation Orders",
      "Extension of Time",
      "Testing and Commissioning",
      ...site.disciplines,
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.contact.phoneIntl,
      email: site.contact.email,
      contactType: "sales",
      areaServed: "MY",
      availableLanguage: ["English", "Malay"],
    },
  };
}
