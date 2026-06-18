# SEO Strategy

## Primary keyword themes

| Theme | Target pages |
|-------|----------------|
| Local SEO services | Home, Services, Local SEO |
| Google Business Profile optimization | GBP service page, Home |
| Google Maps ranking | Local SEO, GBP, Home |
| Local SEO agency | Home, About, Services |
| Small business SEO | Website SEO, Home |
| Google Business Profile management | GBP service page |
| SEO for small businesses | Website SEO, Industries |
| Local search optimization | Local SEO, Home |

## On-page SEO implementation

- Unique `<title>` and meta description per page via `createPageMetadata()`
- Canonical URLs on every page
- Open Graph and Twitter card metadata
- Semantic heading hierarchy (single H1 per page)
- Descriptive, keyword-aligned URLs (no dates or IDs)
- Internal linking: header/footer nav, service cards, industry cross-links, CTAs to contact/audit

## Technical SEO

- `src/app/sitemap.ts` — dynamic sitemap for all routes
- `src/app/robots.ts` — allow all, reference sitemap
- `NEXT_PUBLIC_SITE_URL` for absolute URLs in metadata and schema
- Static generation for service and industry pages (`generateStaticParams`)
- Mobile-first responsive layout
- Core Web Vitals: minimal JS on content pages, optimized fonts via `next/font`

## Structured data (JSON-LD)

| Schema | Where |
|--------|-------|
| Organization | Root layout |
| ProfessionalService | Root layout |
| WebSite | Root layout |
| Service | Service + industry pages |
| BreadcrumbList | Service + industry pages |
| FAQPage | Home + service pages with FAQs |

## Content strategy

1. **Service pages** — deep coverage of features, benefits, process, FAQs
2. **Industry pages** — challenges, opportunities, Maps strategy, outcomes
3. **Case studies** — outcome-focused proof with metrics
4. **Blog (future)** — optional expansion for long-tail local SEO content

## Internal linking strategy

```
Home → all services, industries, case studies, contact
Services hub → each service detail → contact/audit
Industries hub → each industry page → contact/audit
Case studies → contact
About → contact
Footer → all key pages + audit CTA
```

Every service and industry page ends with audit CTA. Header includes primary CTA on all pages.

## Local SEO (for Optivox as a business)

When launching publicly:
1. Create and verify Google Business Profile for Optivox
2. Set `NEXT_PUBLIC_SITE_URL` to production domain
3. Submit sitemap in Google Search Console
4. Add Google Analytics 4 / conversion tracking on form submit
5. Connect contact form to CRM (HubSpot, Formspree, etc.)

## Conversion SEO

Lead magnet keyword alignment: "free Google visibility audit", "SEO audit" on Contact and Audit sections.

FAQ sections target objection-handling queries and support FAQ rich results.
