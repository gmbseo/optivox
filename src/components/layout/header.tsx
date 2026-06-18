"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { ButtonLink } from "@/components/ui/button-link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  industryLinks,
  navLinks,
  primaryCta,
  serviceLinks,
  siteConfig,
} from "@/lib/site";
import { cn } from "@/lib/utils";

function NavLink({
  href,
  children,
  className,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
        className,
      )}
    >
      {children}
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container-wide flex h-20 lg:h-24 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Logo" width={240} height={64} className="h-12 lg:h-16 w-auto object-contain" priority />
          <span className="text-2xl font-bold tracking-tight">{siteConfig.name}</span>
        </Link>

        <nav className="hidden items-center gap-2 lg:flex" aria-label="Main navigation">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-1 p-4">
                    {serviceLinks.map((service) => (
                      <li key={service.href}>
                        <Link
                          href={service.href}
                          className="block rounded-lg p-3 transition-colors hover:bg-muted"
                        >
                          <span className="font-medium">{service.label}</span>
                          <span className="mt-1 block text-sm text-muted-foreground">
                            {service.description}
                          </span>
                        </Link>
                      </li>
                    ))}
                    <li className="border-t border-border pt-2">
                      <Link
                        href="/services"
                        className="block rounded-lg p-3 text-sm font-medium text-accent hover:bg-muted"
                      >
                        View all services →
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">
                  Industries
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[320px] gap-1 p-4 sm:grid-cols-2">
                    {industryLinks.map((industry) => (
                      <li key={industry.href}>
                        <Link
                          href={industry.href}
                          className="block rounded-lg p-3 text-sm font-medium transition-colors hover:bg-muted"
                        >
                          {industry.label}
                        </Link>
                      </li>
                    ))}
                    <li className="col-span-full border-t border-border pt-2">
                      <Link
                        href="/industries"
                        className="block rounded-lg p-3 text-sm font-medium text-accent hover:bg-muted"
                      >
                        All industries →
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {navLinks.slice(2).map((link) => (
                <NavigationMenuItem key={link.href}>
                  <NavLink href={link.href} className="px-4 py-2">
                    {link.label}
                  </NavLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ButtonLink
            href={primaryCta.href}
            size="sm"
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            {primaryCta.label}
          </ButtonLink>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <ButtonLink
            href={primaryCta.href}
            size="sm"
            className="bg-accent text-accent-foreground hover:bg-accent/90 text-xs px-3 h-8"
          >
            Free Audit
          </ButtonLink>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className={cn(buttonVariants({ variant: "outline", size: "icon" }), "lg:hidden")}
            aria-label="Open menu"
          >
            <Menu />
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:max-w-sm">
            <SheetHeader>
              <SheetTitle>{siteConfig.name}</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-6 px-4 pb-8" aria-label="Mobile navigation">
              <div className="flex flex-col gap-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Services
                </p>
                {serviceLinks.map((service) => (
                  <NavLink key={service.href} href={service.href} onClick={() => setOpen(false)}>
                    {service.label}
                  </NavLink>
                ))}
                <NavLink href="/services" onClick={() => setOpen(false)}>
                  All services
                </NavLink>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Industries
                </p>
                {industryLinks.map((industry) => (
                  <NavLink key={industry.href} href={industry.href} onClick={() => setOpen(false)}>
                    {industry.label}
                  </NavLink>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                {navLinks.slice(2).map((link) => (
                  <NavLink key={link.href} href={link.href} onClick={() => setOpen(false)}>
                    {link.label}
                  </NavLink>
                ))}
              </div>
              <ButtonLink
                href={primaryCta.href}
                className="bg-accent text-accent-foreground hover:bg-accent/90"
                onClick={() => setOpen(false)}
              >
                {primaryCta.label}
              </ButtonLink>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
