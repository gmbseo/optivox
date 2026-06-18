import Image from "next/image";
import Link from "next/link";
import {
  industryLinks,
  navLinks,
  primaryCta,
  serviceLinks,
  siteConfig,
} from "@/lib/site";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="container-wide section-padding !py-12">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="flex flex-col gap-4 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo.png" alt="Logo" width={180} height={48} className="h-12 w-auto object-contain" />
              <span className="text-2xl font-bold">{siteConfig.name}</span>
            </Link>
            <p className="text-sm text-primary-foreground/75 text-pretty">
              {siteConfig.description}
            </p>
            <div className="flex flex-col gap-1 text-sm text-primary-foreground/75">
              <a href={`mailto:${siteConfig.email}`} className="hover:text-primary-foreground">
                {siteConfig.email}
              </a>
              <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} className="hover:text-primary-foreground">
                {siteConfig.phone}
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Services</h3>
            <ul className="flex flex-col gap-2">
              {serviceLinks.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-primary-foreground/75 transition-colors hover:text-primary-foreground"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Industries</h3>
            <ul className="flex flex-col gap-2">
              {industryLinks.map((industry) => (
                <li key={industry.href}>
                  <Link
                    href={industry.href}
                    className="text-sm text-primary-foreground/75 transition-colors hover:text-primary-foreground"
                  >
                    {industry.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Company</h3>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/75 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={primaryCta.href}
                  className="text-sm font-medium text-accent transition-colors hover:text-accent/90"
                >
                  {primaryCta.label}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/15" />

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-primary-foreground/60">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-sm text-primary-foreground/60">
            Organic Google visibility for growing local businesses.
          </p>
        </div>
      </div>
    </footer>
  );
}
