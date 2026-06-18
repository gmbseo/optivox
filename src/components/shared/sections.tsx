import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { primaryCta, secondaryCta } from "@/lib/site";
import { cn } from "@/lib/utils";

type CtaButtonsProps = {
  className?: string;
  primaryOnly?: boolean;
  size?: "default" | "sm" | "lg";
};

export function CtaButtons({
  className,
  primaryOnly = false,
  size = "default",
}: CtaButtonsProps) {
  return (
    <div className={cn("flex flex-col gap-3 sm:flex-row sm:items-center", className)}>
      <ButtonLink 
        href={primaryCta.href} 
        size={size} 
        className="group bg-accent text-accent-foreground transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(var(--accent),0.3)] hover:bg-accent/90"
      >
        {primaryCta.label}
        <ArrowRight data-icon="inline-end" className="transition-transform duration-300 group-hover:translate-x-1" />
      </ButtonLink>
      {!primaryOnly && (
        <ButtonLink href={secondaryCta.href} variant="outline" size={size}>
          {secondaryCta.label}
        </ButtonLink>
      )}
    </div>
  );
}

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "mx-auto max-w-3xl text-center",
        align === "left" && "max-w-3xl text-left",
        className,
      )}
    >
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-wider text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">{title}</h2>
      {description && (
        <p className="text-lg text-muted-foreground text-pretty">{description}</p>
      )}
    </div>
  );
}

type PageHeroProps = {
  title: string;
  subtitle: string;
  eyebrow?: string;
  children?: React.ReactNode;
};

export function PageHero({ title, subtitle, eyebrow, children }: PageHeroProps) {
  return (
    <section className="section-padding border-b border-border/60 bg-gradient-to-b from-secondary/50 to-background">
      <div className="container-narrow flex flex-col gap-8">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            {eyebrow}
          </p>
        )}
        <div className="flex flex-col gap-6 max-w-4xl">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="text-lg text-muted-foreground sm:text-xl text-pretty">{subtitle}</p>
        </div>
        {children ?? <CtaButtons />}
      </div>
    </section>
  );
}
