# Optivox

Bilingual (Hebrew / English) marketing website for **Optivox**: website development, SEO, and AI search optimization (GEO) for small and mid-sized businesses.

**Stack:** Astro 7 (static output) · TypeScript · Tailwind CSS v4 · Netlify (hosting + Forms)

The site ships no framework JavaScript. The only client script is the small inline one in `Header.astro` for the services dropdown and mobile menu.

---

## Quick start

Requires Node.js 22+.

```bash
npm install
npm run dev        # http://localhost:4321
```

```bash
npm run build      # astro check + astro build into dist/
npm run preview    # serve dist/ locally
```

The `SITE_URL` environment variable (read at build time, e.g. set in Netlify) sets the origin used for canonical URLs, hreflang, the sitemap and JSON-LD. It defaults to `https://optivox.com`.

---

## Languages and routes

Hebrew is the default language and lives at the root (RTL). English lives under `/en/`. Every page exists in both languages and is linked with `hreflang` alternates (`x-default` points to Hebrew).

| Hebrew | English | Page |
|--------|---------|------|
| `/` | `/en/` | Home |
| `/services/` | `/en/services/` | Services overview |
| `/services/website-development/` | `/en/services/website-development/` | Website development |
| `/services/seo/` | `/en/services/seo/` | SEO |
| `/services/ai-search-optimization/` | `/en/services/ai-search-optimization/` | AI search optimization |
| `/about/` | `/en/about/` | About |
| `/contact/` | `/en/contact/` | Contact + audit form |
| `/accessibility/` | `/en/accessibility/` | Accessibility statement |

Also generated: `/sitemap-index.xml`, `/robots.txt` (explicitly allows AI crawlers) and `/llms.txt`.

---

## Project structure

```
src/
├── config/site.ts         # Name, email, phone, WhatsApp, logo
├── content/services.ts    # All service copy, both languages
├── i18n/                  # Locale helpers and UI strings
├── lib/schema.ts          # JSON-LD builders
├── layouts/Base.astro     # <html lang/dir>, SEO head, header, footer
├── components/            # Header, Footer, Seo, Faq, CtaBand, Icon, ...
├── views/                 # Page bodies, shared by both languages (take a `lang` prop)
├── pages/                 # Thin route wrappers: Hebrew at root, English under en/
└── styles/global.css      # Tailwind theme tokens and components
```

### Common edits

- **Contact details:** `src/config/site.ts`. Empty `phone` / `whatsapp` values are hidden automatically.
- **Service copy:** `src/content/services.ts`
- **Navigation and UI strings:** `src/i18n/ui.ts`
- **Adding a service:** add an entry to `services` in `src/content/services.ts` and add its slug to `ServiceSlug`. Pages, navigation, sitemap and `llms.txt` pick it up automatically.

---

## Deployment (Netlify)

`netlify.toml` builds with `npm run build` and publishes `dist/`.

- The contact form uses **Netlify Forms** (`name="contact"`). Submissions appear in the Netlify dashboard once the site is deployed. Set up email notifications there.
- `/_astro/*` assets get long-lived immutable cache headers.
- Unknown `/en/*` URLs return the English 404 page.

### Post-deploy checklist

- [ ] Confirm `SITE_URL` matches the production domain
- [ ] Submit `/sitemap-index.xml` in Google Search Console and Bing Webmaster Tools
- [ ] Enable form notifications in Netlify
- [ ] Add analytics (with a cookie consent banner)

---

## License

Proprietary — Optivox. All rights reserved.
