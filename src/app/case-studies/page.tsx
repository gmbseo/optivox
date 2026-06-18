import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CtaButtons, PageHero, SectionHeader } from "@/components/shared/sections";
import { caseStudies } from "@/content/case-studies";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Case Studies",
  description:
    "See how Optivox helped local businesses improve Google Maps rankings, organic traffic, and lead generation—with measurable business outcomes.",
  path: "/case-studies",
  keywords: ["local SEO case studies", "SEO results"],
});

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="Real results from real local businesses"
        subtitle="We measure success in calls, leads, and growth—not vanity rankings. Explore how clients improved visibility on Google Search and Maps."
      />

      <section className="section-padding">
        <div className="container-narrow flex flex-col gap-16">
          {caseStudies.map((study) => (
            <article
              key={study.id}
              className="flex flex-col gap-8 rounded-2xl border border-border bg-card p-6 sm:p-8"
            >
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="secondary">{study.industry}</Badge>
                  <Badge variant="outline">{study.location}</Badge>
                </div>
                <h2 className="text-2xl font-semibold sm:text-3xl">{study.title}</h2>
                <p className="text-muted-foreground text-pretty">{study.overview}</p>
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                <div className="flex flex-col gap-4">
                  <h3 className="font-semibold">Challenge</h3>
                  <p className="text-muted-foreground text-pretty">{study.challenge}</p>
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="font-semibold">Strategy</h3>
                  <p className="text-muted-foreground text-pretty">{study.strategy}</p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="font-semibold">Execution</h3>
                <p className="text-muted-foreground text-pretty">{study.execution}</p>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="font-semibold">Results</h3>
                <p className="text-muted-foreground text-pretty">{study.results}</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {study.metrics.map((metric) => (
                  <Card key={metric.label} className="border-border/60 bg-secondary/50">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-2xl text-accent">{metric.value}</CardTitle>
                      <CardDescription>{metric.label}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>

              {study.testimonial && (
                <>
                  <Separator />
                  <blockquote className="flex flex-col gap-2">
                    <p className="text-lg text-pretty">
                      &ldquo;{study.testimonial.quote}&rdquo;
                    </p>
                    <footer className="text-sm text-muted-foreground">
                      — {study.testimonial.author}, {study.testimonial.role}
                    </footer>
                  </blockquote>
                </>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="section-padding bg-secondary/40">
        <div className="container-narrow text-center">
          <div className="flex flex-col items-center gap-6 mx-auto max-w-2xl">
            <SectionHeader
              title="Want results like these?"
              description="Start with a free Google Visibility Audit. We'll show you where you stand and what's possible in your market."
            />
            <CtaButtons />
          </div>
        </div>
      </section>
    </>
  );
}
