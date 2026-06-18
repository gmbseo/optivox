import type { ServiceDetail } from "@/content/services";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CtaButtons, PageHero, SectionHeader } from "@/components/shared/sections";

export function ServicePageTemplate({ service }: { service: ServiceDetail }) {
  return (
    <>
      <PageHero title={service.title} subtitle={service.heroSubtitle} eyebrow="Service" />

      <section className="section-padding">
        <div className="container-narrow flex flex-col gap-12">
          <SectionHeader
            align="left"
            title="What we deliver"
            description={service.description}
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {service.features.map((feature) => (
              <Card key={feature.title} className="border-border/60">
                <CardHeader>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary/40">
        <div className="container-narrow flex flex-col gap-12">
          <SectionHeader title="Business benefits" />
          <ul className="grid gap-4 sm:grid-cols-2">
            {service.benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex gap-3 rounded-xl border border-border bg-card p-4 text-pretty"
              >
                <span className="text-accent font-bold">✓</span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow flex flex-col gap-12">
          <SectionHeader title="Our process" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step) => (
              <div key={step.step} className="flex flex-col gap-3">
                <span className="text-sm font-bold text-accent">{step.step}</span>
                <h3 className="font-semibold">{step.title}</h3>
                <p className="text-sm text-muted-foreground text-pretty">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {service.faqs.length > 0 && (
        <section className="section-padding bg-secondary/40">
          <div className="container-narrow flex flex-col gap-12">
            <SectionHeader title="Frequently asked questions" />
            <Accordion className="mx-auto w-full max-w-3xl">
              {service.faqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-pretty">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )}

      <section className="section-padding">
        <div className="container-narrow text-center">
          <div className="flex flex-col items-center gap-6 mx-auto max-w-2xl">
            <h2 className="text-2xl font-semibold sm:text-3xl">
              Start with a free Google Visibility Audit
            </h2>
            <p className="text-muted-foreground text-pretty">
              See how {service.shortTitle} can improve your visibility before you commit.
            </p>
            <CtaButtons />
          </div>
        </div>
      </section>
    </>
  );
}
