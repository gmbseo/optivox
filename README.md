# Optivox

Bilingual (Hebrew / English) marketing website for **Optivox**: website development, SEO, and AI search optimization (GEO) for small and mid-sized businesses.

**Stack:** Astro 7 (static output) · TypeScript · Tailwind CSS v4 · Netlify · EmailJS

Client JavaScript is limited to the header menu and the EmailJS contact form.

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

Build-time origins (set in Netlify):

- `SITE_URL` / `ISRAEL_SITE_URL` — `https://optivox.co.il` (Hebrew at `/`, English at `/en/`)
- `INTL_SITE_URL` — `https://optivox.io` (English at `/`; later locales can be added here too)

---

## Languages and routes

Hebrew is the default language on `optivox.co.il` (RTL at `/`). English also lives on `.co.il` under `/en/`, and is the only language on `optivox.io` (served at `/`). Canonical English URLs point at `.io`. `hreflang` links Hebrew, English, `en-IL`, and `x-default` (English / `.io`).

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

- The contact form sends through **EmailJS**. Set `PUBLIC_EMAILJS_PUBLIC_KEY`, `PUBLIC_EMAILJS_SERVICE_ID`, `PUBLIC_EMAILJS_TEMPLATE_ID`, and `PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID` in `.env` locally and in the Netlify env UI. Allow `localhost`, `optivox.co.il`, and `optivox.io` in the EmailJS dashboard.
  - Lead template variables: `name`, `business`, `email`, `phone`, `website`, `service`, `language`, `origin`, `message`.
  - Auto-reply template: **To Email** = `{{to_email}}`, **Subject** = `{{reply_subject}}`, body = `{{{reply_html}}}` (three braces so Hebrew HTML stays RTL). Do not also enable the dashboard Auto-Reply link on the lead template, or visitors get two confirmation emails.
- `/_astro/*` assets get long-lived immutable cache headers.
- Unknown `/en/*` URLs on `.co.il` return the English 404 page. On `.io`, unknown URLs return the English 404 and `/en/*` redirects to the unprefixed English URL.

### Post-deploy checklist

- [ ] Confirm `SITE_URL` matches the production domain
- [ ] Submit `/sitemap-index.xml` in Google Search Console and Bing Webmaster Tools
- [ ] Confirm EmailJS env vars and a test submission from `/contact/`
- [ ] Add analytics (with a cookie consent banner)

---

## License

Proprietary — Optivox. All rights reserved.
