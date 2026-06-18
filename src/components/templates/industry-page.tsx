import type { IndustryDetail } from "@/content/industries";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { CtaButtons, PageHero, SectionHeader } from "@/components/shared/sections";

export function IndustryPageTemplate({ industry }: { industry: IndustryDetail }) {
  return (
    <>
      <PageHero title={industry.title} subtitle={industry.heroSubtitle} eyebrow="Industry" />

      <section className="section-padding">
        <div className="container-narrow flex flex-col gap-12">
          <SectionHeader
            align="left"
            title="Industry challenges"
            description={industry.description}
          />
          <ul className="grid gap-4 sm:grid-cols-2">
            {industry.challenges.map((challenge) => (
              <li
                key={challenge}
                className="rounded-xl border border-border bg-card p-4 text-pretty"
              >
                {challenge}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-secondary/40">
        <div className="container-narrow flex flex-col gap-12">
          <SectionHeader title="Growth opportunities" />
          <ul className="grid gap-4 sm:grid-cols-2">
            {industry.opportunities.map((opportunity) => (
              <li
                key={opportunity}
                className="flex gap-3 rounded-xl border border-border bg-card p-4 text-pretty"
              >
                <span className="text-accent font-bold">→</span>
                {opportunity}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow flex flex-col gap-12">
          <SectionHeader title="Google Maps strategy" />
          <ol className="flex flex-col gap-4">
            {industry.mapsStrategy.map((item, index) => (
              <li key={item} className="flex gap-4 rounded-xl border border-border p-4">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent/15 text-sm font-bold text-accent">
                  {index + 1}
                </span>
                <span className="text-pretty">{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-padding bg-secondary/40">
        <div className="container-narrow flex flex-col gap-12">
          <SectionHeader title="SEO recommendations" />
          <ul className="grid gap-4 sm:grid-cols-2">
            {industry.recommendations.map((rec) => (
              <li
                key={rec}
                className="rounded-xl border border-border bg-card p-4 text-pretty"
              >
                {rec}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow flex flex-col gap-12">
          <SectionHeader title="Sample outcomes" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {industry.outcomes.map((outcome) => (
              <Card key={outcome.label} className="border-border/60">
                <CardHeader>
                  <CardTitle className="text-2xl text-accent">{outcome.value}</CardTitle>
                  <p className="text-sm text-muted-foreground">{outcome.label}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-narrow text-center">
          <div className="flex flex-col items-center gap-6 mx-auto max-w-2xl">
            <h2 className="text-2xl font-semibold sm:text-3xl">
              Get more {industry.plural.toLowerCase()} clients from Google
            </h2>
            <p className="text-primary-foreground/75 text-pretty">
              Request a free visibility audit tailored to your industry and market.
            </p>
            <CtaButtons />
          </div>
        </div>
      </section>
    </>
  );
}
