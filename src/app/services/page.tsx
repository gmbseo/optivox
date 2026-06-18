import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHero, SectionHeader } from "@/components/shared/sections";
import { createPageMetadata } from "@/lib/metadata";
import { serviceList } from "@/content/services";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "SEO Services for Local Businesses",
  description:
    "Local SEO, Google Business Profile optimization, website SEO, and visibility audits for small and medium-sized businesses. Grow through organic Google search.",
  path: "/services",
  keywords: ["local SEO services", "small business SEO", "local SEO agency"],
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Organic Google visibility that drives leads"
        subtitle="We help local businesses rank in Google Search and Google Maps—without paid advertising. Choose the service that fits your growth goals."
      />

      <section className="section-padding">
        <div className="container-narrow flex flex-col gap-12">
          <SectionHeader
            title="Core services"
            description="Every service is designed to increase visibility, leads, and authority on Google."
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {serviceList.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group"
              >
                <Card className="h-full border-border/60 transition-shadow hover:shadow-md">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between text-xl">
                      {service.title}
                      <ArrowRight
                        className="size-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-accent"
                        aria-hidden="true"
                      />
                    </CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary/40">
        <div className="container-narrow text-center">
          <p className="text-muted-foreground">
            Not sure where to start?{" "}
            <Link href="/contact?intent=audit" className="font-medium text-accent hover:text-accent/80">
              Get a free Google Visibility Audit
            </Link>
            —we&apos;ll recommend the right priorities for {siteConfig.name}.
          </p>
        </div>
      </section>
    </>
  );
}
