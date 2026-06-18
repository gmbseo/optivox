# Optivox

Production-ready marketing website for **Optivox** — a local SEO agency helping small and medium-sized businesses increase visibility on Google Search and Google Maps through organic promotion.

**Live stack:** Next.js 16 · TypeScript · Tailwind CSS v4 · shadcn/ui · React Hook Form · Zod

---

## Quick start

### Prerequisites

- Node.js 20+
- npm 10+

### Installation

```bash
git clone https://github.com/YOUR_USERNAME/optivox.git
cd optivox
npm install
cp .env.example .env.local
```

Set `NEXT_PUBLIC_SITE_URL` in `.env.local` to your production domain (e.g. `https://optivox.com`).

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

---

## Site structure

| Route | Page |
|-------|------|
| `/` | Home |
| `/services` | Services overview |
| `/services/local-seo` | Local SEO |
| `/services/google-business-profile-optimization` | Google Business Profile |
| `/services/website-seo` | Website SEO |
| `/services/seo-audit` | SEO Audit |
| `/industries` | Industries overview |
| `/industries/dentists` | SEO for Dentists |
| `/industries/lawyers` | SEO for Lawyers |
| `/industries/contractors` | SEO for Contractors |
| `/industries/accountants` | SEO for Accountants |
| `/industries/clinics` | SEO for Clinics |
| `/industries/real-estate-agencies` | SEO for Real Estate |
| `/case-studies` | Case Studies |
| `/about` | About |
| `/contact` | Contact + lead form |

---

## Project architecture

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout, fonts, global schema
│   ├── sitemap.ts          # Dynamic XML sitemap
│   └── robots.ts           # Robots.txt
├── components/
│   ├── layout/             # Header, Footer
│   ├── home/               # Homepage sections
│   ├── forms/              # Contact form
│   ├── templates/          # Service & industry page templates
│   ├── shared/             # Hero, CTAs, section headers
│   ├── seo/                # JSON-LD helpers
│   └── ui/                 # shadcn/ui primitives
├── content/                # Copy, case studies, FAQs (editable)
└── lib/                    # Site config, metadata, validation
docs/
├── design-system.md
├── seo-strategy.md
└── conversion-strategy.md
```

---

## Deployment

### Vercel (recommended)

1. Push the repository to GitHub.
2. Import the project in [Vercel](https://vercel.com).
3. Set environment variable: `NEXT_PUBLIC_SITE_URL=https://your-domain.com`
4. Deploy.

Vercel auto-detects Next.js. No custom build settings required.

### Other platforms

Build with `npm run build` and serve the output. Ensure `NEXT_PUBLIC_SITE_URL` is set at build time for correct canonical URLs and sitemap.

### Post-deploy checklist

- [ ] Verify `NEXT_PUBLIC_SITE_URL` matches production domain
- [ ] Submit `https://your-domain.com/sitemap.xml` in Google Search Console
- [ ] Connect contact form to CRM or email API (see below)
- [ ] Add Google Analytics 4 or preferred analytics
- [ ] Test all pages on mobile and run Lighthouse audit

---

## Contact form integration

The contact form (`src/components/forms/contact-form.tsx`) currently logs submissions and shows a success state. For production:

1. Add a server action or API route (e.g. `/api/contact`)
2. Connect to Resend, SendGrid, HubSpot, or Formspree
3. Replace the `onSubmit` handler with your API call

Example pattern:

```typescript
await fetch("/api/contact", {
  method: "POST",
  body: JSON.stringify(data),
});
```

---

## Maintenance

### Updating copy

- **Global config:** `src/lib/site.ts` (name, CTAs, nav links)
- **Services:** `src/content/services.ts`
- **Industries:** `src/content/industries.ts`
- **Case studies:** `src/content/case-studies.ts`
- **Testimonials / FAQs:** `src/content/testimonials.ts`, `src/content/faqs.ts`

### Adding a new service page

1. Add an entry to `src/content/services.ts`
2. Add a link in `src/lib/site.ts` → `serviceLinks`
3. Rebuild — `generateStaticParams` auto-generates the route

### Adding a new industry page

1. Add an entry to `src/content/industries.ts`
2. Add a link in `src/lib/site.ts` → `industryLinks`
3. Rebuild

### Design tokens

Colors, typography, and spacing live in `src/app/globals.css`. See `docs/design-system.md` for the full design system.

### SEO

Metadata helper: `src/lib/metadata.ts`  
Structured data: `src/components/seo/json-ld.tsx`  
Strategy documentation: `docs/seo-strategy.md`

---

## Documentation

| Document | Description |
|----------|-------------|
| [docs/design-system.md](docs/design-system.md) | Colors, typography, wireframe, components |
| [docs/seo-strategy.md](docs/seo-strategy.md) | Keywords, schema, internal linking |
| [docs/conversion-strategy.md](docs/conversion-strategy.md) | CTAs, lead magnet, trust signals |

---

## License

Proprietary — Optivox. All rights reserved.
