import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  MapPin,
  Search,
  Shield,
  Star,
  TrendingUp,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { caseStudies } from "@/content/case-studies";
import { homeFaqs } from "@/content/faqs";
import { testimonials } from "@/content/testimonials";
import { serviceLinks } from "@/lib/site";
import { CtaButtons, SectionHeader } from "@/components/shared/sections";

const problems = [
  {
    icon: MapPin,
    title: "Invisible on Google Maps",
    description:
      "Customers search nearby—but your business doesn't appear in the map pack when it matters most.",
  },
  {
    icon: Search,
    title: "Low search rankings",
    description:
      "Competitors outrank you for the services you offer, capturing the leads you should be winning.",
  },
  {
    icon: TrendingUp,
    title: "Inconsistent lead flow",
    description:
      "Referrals and ads aren't enough. You need steady organic visibility that brings customers every week.",
  },
  {
    icon: Star,
    title: "Underoptimized Google profile",
    description:
      "An incomplete Google Business Profile costs you calls, directions, and trust before customers ever visit.",
  },
];

const steps = [
  {
    step: "01",
    title: "Visibility audit",
    description:
      "We analyze your website, Google Business Profile, rankings, and competitors to find what's holding you back.",
  },
  {
    step: "02",
    title: "Custom growth plan",
    description:
      "You get a clear, prioritized roadmap focused on the keywords, locations, and actions that drive leads.",
  },
  {
    step: "03",
    title: "Execute & optimize",
    description:
      "We improve your Maps presence, website, content, and reputation—with ongoing refinement based on data.",
  },
  {
    step: "04",
    title: "Measure results",
    description:
      "Track rankings, calls, and leads. Transparent reporting tied to real business outcomes—not vanity metrics.",
  },
];

const benefits = [
  {
    icon: BarChart3,
    title: "More qualified leads",
    description: "Capture customers actively searching for your services on Google.",
  },
  {
    icon: MapPin,
    title: "Dominant local presence",
    description: "Rank in Google Maps and local results across your service areas.",
  },
  {
    icon: Shield,
    title: "Trust & authority",
    description: "Reviews, content, and visibility that position you as the go-to local choice.",
  },
  {
    icon: TrendingUp,
    title: "Sustainable growth",
    description: "Organic visibility that compounds over time—without dependency on paid ads.",
  },
];

const results = [
  { metric: "+68%", label: "Organic calls", detail: "Average client increase" },
  { metric: "Top 3", label: "Map pack rankings", detail: "For priority local keywords" },
  { metric: "2×", label: "Consultation growth", detail: "Organic inquiry lift" },
  { metric: "4.9 ★", label: "Review quality", detail: "Through ethical review systems" },
];

export function HomeHero() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 right-0 size-[500px] rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 size-[400px] rounded-full bg-primary/5 blur-3xl" />
      </div>
      <div className="container-narrow">
        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="flex flex-col gap-6">
            <Badge variant="secondary" className="self-start">
              Organic Google visibility for local businesses
            </Badge>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Get Found on Google{" "}
              <span className="text-gradient">Before Your Competitors</span>
            </h1>
            <p className="text-lg text-muted-foreground sm:text-xl text-pretty">
              Optivox helps businesses rank higher in Google Search and Google Maps—turning
              searches into more calls, leads, and customers. No paid ads. No jargon. Just
              visibility that grows your business.
            </p>
            <CtaButtons />
            <p className="text-sm text-muted-foreground">
              Free Google Visibility Audit · No obligation · Results-focused
            </p>
          </div>

          <div className="relative rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">Local visibility</span>
                <Badge className="bg-accent/15 text-accent hover:bg-accent/15">+42% this quarter</Badge>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {["Maps", "Search", "Reviews"].map((label, i) => (
                  <div
                    key={label}
                    className="flex flex-col gap-2 rounded-xl bg-secondary p-4"
                  >
                    <span className="text-xs text-muted-foreground">{label}</span>
                    <div className="flex items-end gap-1">
                      {[40, 65, 85].map((h, j) => (
                        <div
                          key={j}
                          className="w-full rounded-sm bg-accent/80"
                          style={{ height: `${h - i * 10}px`, opacity: j === 2 ? 1 : 0.4 + j * 0.2 }}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="rounded-xl border border-border bg-background p-4">
                <div className="flex items-start gap-3">
                  <MapPin className="size-5 shrink-0 text-accent" aria-hidden="true" />
                  <div>
                    <p className="font-medium">Google Maps ranking</p>
                    <p className="text-sm text-muted-foreground">
                      Top 3 for &quot;dentist near me&quot; · +68% calls
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProblemSection() {
  return (
    <section className="section-padding bg-secondary/40">
      <div className="container-narrow flex flex-col gap-12">
        <SectionHeader
          eyebrow="The problem"
          title="Your customers are searching. Are they finding you?"
          description="Most local businesses lose leads every day because they're invisible—or outranked—when customers search on Google and Google Maps."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {problems.map((problem) => (
            <Card key={problem.title} className="border-border/60 bg-card">
              <CardHeader>
                <problem.icon className="size-8 text-accent" aria-hidden="true" />
                <CardTitle className="text-xl">{problem.title}</CardTitle>
                <CardDescription className="text-base">{problem.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServicesOverview() {
  return (
    <section className="section-padding">
      <div className="container-narrow flex flex-col gap-12">
        <SectionHeader
          eyebrow="Services"
          title="Everything you need to dominate local search"
          description="We focus on organic Google visibility—local SEO, Google Business Profile, website SEO, and audits that turn search demand into customers."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {serviceLinks.map((service) => (
            <Link key={service.href} href={service.href} className="group">
              <Card className="h-full border-border/60 transition-shadow hover:shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-xl">
                    {service.label}
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
        <div className="text-center">
          <Link
            href="/services"
            className="text-sm font-medium text-accent hover:text-accent/80"
          >
            View all services →
          </Link>
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  return (
    <section className="section-padding bg-secondary/40">
      <div className="container-narrow flex flex-col gap-12">
        <SectionHeader
          eyebrow="How it works"
          title="A clear path from invisible to found"
          description="No black boxes. We audit, plan, execute, and report—with transparency at every step."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.step} className="flex flex-col gap-4">
              <span className="text-sm font-bold text-accent">{step.step}</span>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="text-muted-foreground text-pretty">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BenefitsSection() {
  return (
    <section className="section-padding">
      <div className="container-narrow flex flex-col gap-12">
        <SectionHeader
          eyebrow="Benefits"
          title="Visibility that drives real business growth"
          description="We sell leads, growth, and authority—not SEO buzzwords."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="flex flex-col gap-3">
              <benefit.icon className="size-8 text-accent" aria-hidden="true" />
              <h3 className="font-semibold">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground text-pretty">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ResultsSection() {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-narrow flex flex-col gap-12">
        <SectionHeader
          eyebrow="Results"
          title="Outcomes our clients care about"
          description="Rankings matter when they translate to calls, leads, and revenue."
          className="[&_h2]:text-primary-foreground [&_p]:text-primary-foreground/75 [&_p:first-of-type]:text-accent"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {results.map((result) => (
            <div
              key={result.label}
              className="flex flex-col gap-2 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-6"
            >
              <span className="text-3xl font-bold text-accent">{result.metric}</span>
              <span className="font-medium">{result.label}</span>
              <span className="text-sm text-primary-foreground/65">{result.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section className="section-padding">
      <div className="container-narrow flex flex-col gap-12">
        <SectionHeader
          eyebrow="Testimonials"
          title="Trusted by local businesses"
          description="Real results from dentists, lawyers, contractors, and service providers who chose organic growth."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.author} className="border-border/60">
              <CardContent className="flex flex-col gap-4 pt-6">
                <div className="flex gap-1" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground text-pretty">&ldquo;{testimonial.quote}&rdquo;</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.business}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CaseStudiesPreview() {
  const preview = caseStudies.slice(0, 2);

  return (
    <section className="section-padding bg-secondary/40">
      <div className="container-narrow flex flex-col gap-12">
        <SectionHeader
          eyebrow="Case studies"
          title="Business outcomes, not vanity metrics"
          description="See how local businesses improved visibility and lead flow with Optivox."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {preview.map((study) => (
            <Card key={study.id} className="border-border/60">
              <CardHeader>
                <Badge variant="secondary">{study.industry}</Badge>
                <CardTitle className="text-xl">{study.title}</CardTitle>
                <CardDescription className="text-base">{study.overview}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-3">
                  {study.metrics.slice(0, 2).map((metric) => (
                    <div key={metric.label} className="rounded-lg bg-secondary p-3">
                      <p className="text-lg font-bold text-accent">{metric.value}</p>
                      <p className="text-xs text-muted-foreground">{metric.label}</p>
                    </div>
                  ))}
                </div>
                <Link
                  href="/case-studies"
                  className="text-sm font-medium text-accent hover:text-accent/80"
                >
                  Read case studies →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqSection() {
  return (
    <section className="section-padding">
      <div className="container-narrow flex flex-col gap-12">
        <SectionHeader
          eyebrow="FAQ"
          title="Common questions"
          description="Clear answers about how Optivox helps you grow through Google visibility."
        />
        <Accordion className="mx-auto w-full max-w-3xl">
          {homeFaqs.map((faq, index) => (
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
  );
}

export function AuditLeadMagnet() {
  return (
    <section className="section-padding bg-secondary/40">
      <div className="container-narrow">
        <div className="flex flex-col gap-8 rounded-2xl border border-border bg-card p-8 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 lg:p-12">
          <div className="flex flex-col gap-4">
            <SectionHeader
              align="left"
              eyebrow="Free audit"
              title="Get a Free Google Visibility Audit"
              description="Discover exactly where you're losing visibility—and what to fix first."
            />
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-accent">✓</span>
                Website and technical SEO review
              </li>
              <li className="flex gap-2">
                <span className="text-accent">✓</span>
                Google Business Profile analysis
              </li>
              <li className="flex gap-2">
                <span className="text-accent">✓</span>
                Local ranking and competitor comparison
              </li>
              <li className="flex gap-2">
                <span className="text-accent">✓</span>
                Prioritized action plan within 3–5 business days
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <CtaButtons />
            <p className="text-sm text-muted-foreground">
              Valuable whether you work with us or implement changes yourself. No obligation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="section-padding">
      <div className="container-narrow text-center">
        <div className="flex flex-col items-center gap-6 mx-auto max-w-3xl">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Ready to grow through Google visibility?
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Join local businesses that turned Google searches into a steady source of customers.
            Start with a free visibility audit—no jargon, no pressure.
          </p>
          <CtaButtons />
        </div>
      </div>
    </section>
  );
}
