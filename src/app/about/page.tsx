import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CtaButtons, PageHero, SectionHeader } from "@/components/shared/sections";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "About Optivox",
  description:
    "Optivox helps local businesses compete on Google through organic visibility—local SEO, Google Business Profile optimization, and website SEO without paid ads.",
  path: "/about",
});

const values = [
  {
    title: "Transparency",
    description:
      "Clear reporting, honest recommendations, and no hidden agendas. You always know what we're doing and why.",
  },
  {
    title: "Results-driven",
    description:
      "We focus on calls, leads, and growth—the outcomes that matter to your business.",
  },
  {
    title: "Data-oriented",
    description:
      "Every decision is backed by rankings, analytics, and competitive data—not guesswork.",
  },
  {
    title: "Partnership",
    description:
      "We work alongside you as a growth partner, not a vendor pushing packages you don't need.",
  },
];

const differentiators = [
  "Organic-only focus—no paid ad dependency",
  "Plain language, not SEO jargon",
  "Local expertise for SMB service businesses",
  "Google Maps and Search visibility as core strengths",
  "Free Google Visibility Audit to start with clarity",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="We help local businesses win on Google"
        subtitle="Optivox exists because small and medium-sized businesses deserve the same visibility as larger competitors—through organic search, not expensive ads."
      />

      <section className="section-padding">
        <div className="container-narrow flex flex-col gap-12">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="flex flex-col gap-4">
              <SectionHeader align="left" title="Our story" />
              <p className="text-muted-foreground text-pretty">
                Optivox was founded on a simple observation: local businesses lose customers
                every day because they&apos;re invisible when people search on Google. Meanwhile,
                competitors with better optimization—not necessarily better service—capture those
                leads.
              </p>
              <p className="text-muted-foreground text-pretty">
                We built Optivox to level the playing field. Our team combines local SEO, Google
                Business Profile expertise, and website optimization to help businesses become
                visible when customers search—turning Google into a reliable growth channel.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <SectionHeader align="left" title="Our mission" />
              <p className="text-lg font-medium text-pretty">
                We help local businesses compete successfully against larger competitors by
                improving their visibility on Google.
              </p>
              <p className="text-muted-foreground text-pretty">
                We sell visibility, leads, growth, and authority—not technical buzzwords. Every
                strategy we implement is designed to bring more customers through organic search
                and Google Maps.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary/40">
        <div className="container-narrow flex flex-col gap-12">
          <SectionHeader title="Our approach" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "01", title: "Audit", desc: "Understand your current visibility and gaps" },
              { step: "02", title: "Prioritize", desc: "Focus on high-impact keywords and locations" },
              { step: "03", title: "Execute", desc: "Improve GBP, website, content, and citations" },
              { step: "04", title: "Grow", desc: "Measure, refine, and compound organic results" },
            ].map((item) => (
              <Card key={item.step} className="border-border/60">
                <CardHeader>
                  <p className="text-sm font-bold text-accent">{item.step}</p>
                  <CardTitle>{item.title}</CardTitle>
                  <p className="text-sm text-muted-foreground text-pretty">{item.desc}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow flex flex-col gap-12">
          <SectionHeader title="Our values" />
          <div className="grid gap-6 sm:grid-cols-2">
            {values.map((value) => (
              <Card key={value.title} className="border-border/60">
                <CardHeader>
                  <CardTitle>{value.title}</CardTitle>
                  <p className="text-muted-foreground text-pretty">{value.description}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary/40">
        <div className="container-narrow flex flex-col gap-12">
          <SectionHeader title="What makes Optivox different" />
          <ul className="grid gap-4 sm:grid-cols-2">
            {differentiators.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-xl border border-border bg-card p-4 text-pretty"
              >
                <span className="text-accent font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow text-center">
          <div className="flex flex-col items-center gap-6 mx-auto max-w-2xl">
            <h2 className="text-2xl font-semibold sm:text-3xl">
              Let&apos;s improve your Google visibility
            </h2>
            <CtaButtons />
          </div>
        </div>
      </section>
    </>
  );
}
