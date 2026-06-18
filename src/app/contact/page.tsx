import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/forms/contact-form";
import { PageHero, SectionHeader } from "@/components/shared/sections";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Request a free Google Visibility Audit or book a consultation with Optivox. Tell us about your business goals and we'll help you grow through organic search.",
  path: "/contact",
  keywords: ["free SEO audit", "Google visibility audit"],
});

type Props = { searchParams: Promise<{ intent?: string }> };

export default async function ContactPage({ searchParams }: Props) {
  const params = await searchParams;
  const intent =
    params.intent === "consultation"
      ? "consultation"
      : params.intent === "general"
        ? "general"
        : "audit";

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get your free Google Visibility Audit"
        subtitle="Tell us about your business. We'll review your website, Google Business Profile, and local rankings—then share a clear action plan within a few business days."
      />

      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="flex flex-col gap-8 lg:col-span-2">
              <SectionHeader
                align="left"
                title="Let's talk growth"
                description="No obligation. No jargon. Just a honest look at your Google visibility and what it would take to improve it."
              />

              <div className="flex flex-col gap-6">
                <div className="flex gap-4">
                  <Mail className="size-5 shrink-0 text-accent" aria-hidden="true" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="size-5 shrink-0 text-accent" aria-hidden="true" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a
                      href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <MapPin className="size-5 shrink-0 text-accent" aria-hidden="true" />
                  <div>
                    <p className="font-medium">Serving</p>
                    <p className="text-muted-foreground">
                      Small and medium-sized businesses across the United States
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-secondary/50 p-6">
                <h3 className="mb-3 font-semibold">What&apos;s included in the audit?</h3>
                <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                  <li>Website technical and on-page review</li>
                  <li>Google Business Profile analysis</li>
                  <li>Local ranking and competitor comparison</li>
                  <li>Prioritized recommendations and action plan</li>
                  <li>Delivered within 3–5 business days</li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-3">
              <ContactForm defaultIntent={intent} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
