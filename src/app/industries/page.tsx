import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHero, SectionHeader } from "@/components/shared/sections";
import { industryList } from "@/content/industries";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "SEO by Industry",
  description:
    "Industry-specific local SEO strategies for dentists, lawyers, contractors, accountants, clinics, and real estate agencies.",
  path: "/industries",
  keywords: ["SEO for small businesses", "local SEO by industry"],
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Local SEO tailored to your industry"
        subtitle="Every industry competes differently on Google. We build strategies around how your customers search—and what it takes to win in your market."
      />

      <section className="section-padding">
        <div className="container-narrow flex flex-col gap-12">
          <SectionHeader
            title="Industries we serve"
            description="Dedicated landing pages with industry-specific challenges, Maps strategies, and growth opportunities."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industryList.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group"
              >
                <Card className="h-full border-border/60 transition-shadow hover:shadow-md">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between text-lg">
                      {industry.plural}
                      <ArrowRight
                        className="size-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-accent"
                        aria-hidden="true"
                      />
                    </CardTitle>
                    <CardDescription className="text-pretty">{industry.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
