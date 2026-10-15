import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/ui/JsonLd";
import { site } from "@/lib/site";

export function PageHero({
  eyebrow,
  title,
  intro,
  crumb,
  path,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  crumb: string;
  path: string;
}) {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
      { "@type": "ListItem", position: 2, name: crumb, item: `${site.url}${path}` },
    ],
  };
  return (
    <section className="relative overflow-hidden bg-brand-950 text-white" aria-labelledby="page-title">
      <JsonLd data={breadcrumb} />
      <div className="absolute inset-0 bg-blueprint-grid bg-grid opacity-70" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(42,90,159,0.45),transparent_60%)]"
        aria-hidden="true"
      />
      <Container className="relative py-20 sm:py-24">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm text-ink-300">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="h-3.5 w-3.5" />
            </li>
            <li aria-current="page" className="text-white">
              {crumb}
            </li>
          </ol>
        </nav>
        <p className="eyebrow eyebrow-light mt-10">{eyebrow}</p>
        <h1 id="page-title" className="mt-4 max-w-3xl text-4xl font-bold leading-[1.1] text-white sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-300">{intro}</p>
      </Container>
    </section>
  );
}
