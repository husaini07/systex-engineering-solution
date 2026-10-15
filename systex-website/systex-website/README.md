# Systex Engineering Solutions — Corporate Website

Corporate website for **Systex Engineering Solutions**, a Project Management Consultancy for G1–G4 contractors
in Civil, Structural, M&E Building Services, and Energy & Utilities works.

**Stack:** Next.js 15 (App Router), TypeScript, Tailwind CSS 3, self-hosted fonts (Inter + Manrope), lucide icons.

## Pages

| Route        | Content                                                                                   |
| ------------ | ----------------------------------------------------------------------------------------- |
| `/`          | Hero, company overview, stats, core services, why choose us, featured experience, industries, CTA |
| `/about`     | Background, corporate details, challenges, mission, vision, core values, leadership, capabilities |
| `/services`  | Project Management: 5 service areas, 6-step workflow, packages, à la carte fees, FAQ      |
| `/projects`  | Industry categories, filterable project showcase cards with descriptions and scope         |
| `/contact`   | Enquiry form (validated), WhatsApp, phone, email, operating area                          |

Also included: `sitemap.xml`, `robots.txt`, web manifest, favicon/app icons, Open Graph image, JSON-LD
(ProfessionalService, Service, FAQPage, BreadcrumbList), custom 404, security headers.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run start
```

Requires Node.js 18.18+ (Node 20 or 22 recommended).

## Editing content

| What                                          | File                     |
| --------------------------------------------- | ------------------------ |
| Phone, WhatsApp, email, social links, reg. no. | `src/lib/site.ts`        |
| Show / hide indicative fees                    | `site.showIndicativeFees` in `src/lib/site.ts` |
| Services, packages, values, industries, projects | `src/lib/content.ts`   |
| Logo files                                     | `public/images/`         |
| Favicon / OG image                             | `src/app/icon.png`, `apple-icon.png`, `opengraph-image.png` |

**Projects:** entries with `kind: "experience"` are the Managing Director's prior roles; entries with
`kind: "engagement"` are representative engagement profiles. Add completed Systex projects to the `projects`
array as they are delivered.

**Social media:** replace the `#` placeholders in `site.social`.

**Leadership photo:** the About page shows an initials placeholder. To use a photo, add it to
`public/images/` and swap the placeholder block in `src/app/about/page.tsx` for a `next/image`.

## Contact form

The form validates on the client and server (`src/app/api/contact/route.ts`), includes a honeypot and basic
rate limiting.

- **Without configuration:** the visitor is offered a one-tap hand-off — their completed enquiry is pre-filled
  into WhatsApp or an email to `admin.systex@gmail.com`. Nothing is lost.
- **To receive enquiries by email automatically:** create a free [Resend](https://resend.com) account, verify
  your domain (e.g. `systex.my`), then set these environment variables in Vercel:

```
RESEND_API_KEY=re_xxxxxxxx
CONTACT_FROM_EMAIL=Systex Website <noreply@systex.my>
CONTACT_TO_EMAIL=admin.systex@gmail.com
NEXT_PUBLIC_SITE_URL=https://www.systex.my
```

## Deploying to GitHub + Vercel

```bash
git init
git add .
git commit -m "Initial commit: Systex corporate website"
git branch -M main
git remote add origin https://github.com/<your-account>/systex-website.git
git push -u origin main
```

1. Sign in at [vercel.com](https://vercel.com) → **Add New → Project** → import the repository.
2. Framework preset is detected as **Next.js** — no build settings need changing.
3. Add the environment variables above (at minimum `NEXT_PUBLIC_SITE_URL`).
4. Deploy, then add `systex.my` / `www.systex.my` under **Settings → Domains** and update your DNS as shown.

## Accessibility & performance

- Semantic landmarks, skip link, single `h1` per page, labelled sections, `aria-current` navigation
- Keyboard-operable mobile menu (Escape to close), visible focus rings, `aria-pressed` filters
- Form errors linked with `aria-describedby`, focus moved to the first invalid field
- Respects `prefers-reduced-motion`; colour contrast meets WCAG AA
- All pages statically pre-rendered; no hero photos (SVG/CSS graphics only); ~106 kB first-load JS
