# Optivox Design System

## Brand positioning

**Core message:** Optivox helps businesses become visible when customers search on Google.

**Tone:** Professional, trustworthy, premium, modern, results-driven, transparent, data-oriented, friendly.

**Avoid:** Generic agency copy, SEO jargon, cheap stock imagery, clutter.

---

## Color palette

| Token | Role | Value |
|-------|------|-------|
| Primary | Navy brand, headers, footer | `oklch(0.28 0.055 262)` |
| Accent | CTAs, highlights, growth metrics | `oklch(0.55 0.14 165)` emerald |
| Background | Page surface | `oklch(0.985 0.004 247)` warm off-white |
| Foreground | Body text | `oklch(0.2 0.03 260)` |
| Muted | Secondary text | `oklch(0.5 0.02 260)` |
| Secondary | Section backgrounds | `oklch(0.96 0.008 247)` |

Semantic tokens (`bg-primary`, `text-accent`, etc.) are defined in `src/app/globals.css`.

---

## Typography

| Usage | Font | Weight |
|-------|------|--------|
| Body | Geist Sans | 400–500 |
| Headings | Plus Jakarta Sans | 600–700 |
| Code / mono | Geist Mono | 400 |

**Scale:**
- H1: `text-4xl` → `text-6xl` (hero)
- H2: `text-3xl` → `text-4xl` (sections)
- H3: `text-lg` → `text-xl`
- Body: `text-base` / `text-lg` for lead paragraphs
- Eyebrow: `text-sm uppercase tracking-wider`

---

## Spacing & layout

- **Section padding:** `.section-padding` — `py-16` to `py-24`, responsive horizontal padding
- **Containers:** `.container-narrow` (max-w-6xl), `.container-wide` (max-w-7xl)
- **Gap:** Use `flex flex-col gap-*` — never `space-y-*`
- **Whitespace:** Generous section spacing; card padding `p-6` to `p-8`

---

## Components

Built with shadcn/ui (base-nova) + Tailwind CSS v4.

**Core patterns:**
- Cards for service/industry tiles and feature blocks
- Accent-filled primary CTA buttons
- Outline secondary CTAs
- Badges for industry tags and eyebrows
- Accordion for FAQ sections

---

## Homepage wireframe (structural)

```
[Header: Logo | Services ▾ | Industries ▾ | Case Studies | About | Contact | CTA]

[Hero: Headline + subhead + 2 CTAs | Visibility dashboard visual]

[Problem: 4 pain-point cards]

[Services: 4 service cards + link]

[How it works: 4-step process]

[Benefits: 4 benefit columns]

[Results: 4 metric cards on navy background]

[Testimonials: 2×2 quote cards]

[Case studies preview: 2 cards]

[Audit lead magnet: checklist + CTA]

[FAQ accordion]

[Final CTA]

[Footer: 4-column links + contact]
```

---

## Motion

Framer Motion is available but used minimally. Prefer CSS transitions on hover (cards, links, arrows). No excessive scroll animations.

---

## Accessibility

- Semantic landmarks (`header`, `main`, `footer`, `article`)
- Form labels, `aria-invalid`, and error `role="alert"`
- Focus states via shadcn defaults
- Sufficient color contrast on primary/accent pairings
- Mobile navigation via accessible Sheet component
