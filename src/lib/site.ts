export const siteConfig = {
  name: "Optivox",
  tagline: "Get found on Google before your competitors.",
  description:
    "Optivox helps small and medium-sized businesses increase visibility on Google through organic local SEO, Google Business Profile optimization, and website SEO—turning searches into calls, leads, and customers.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://optivox.com",
  email: "hello@optivox.com",
  phone: "+1 (888) 478-4869",
  locale: "en_US",
  keywords: [
    "local SEO services",
    "Google Business Profile optimization",
    "Google Maps ranking",
    "local SEO agency",
    "small business SEO",
    "Google Business Profile management",
    "SEO for small businesses",
    "local search optimization",
  ],
} as const;

export const primaryCta = {
  label: "Get a Free Google Visibility Audit",
  href: "/contact?intent=audit",
} as const;

export const secondaryCta = {
  label: "Book a Consultation",
  href: "/contact?intent=consultation",
} as const;

export const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const serviceLinks = [
  {
    label: "Local SEO",
    href: "/services/local-seo",
    description: "Rank higher in Google Maps and local search results.",
  },
  {
    label: "Google Business Profile",
    href: "/services/google-business-profile-optimization",
    description: "Optimize your profile to attract more local customers.",
  },
  {
    label: "Website SEO",
    href: "/services/website-seo",
    description: "Improve your website to capture organic search traffic.",
  },
  {
    label: "SEO Audit",
    href: "/services/seo-audit",
    description: "Uncover growth opportunities with a full visibility review.",
  },
] as const;

export const industryLinks = [
  { label: "Dentists", href: "/industries/dentists" },
  { label: "Lawyers", href: "/industries/lawyers" },
  { label: "Contractors", href: "/industries/contractors" },
  { label: "Accountants", href: "/industries/accountants" },
  { label: "Clinics", href: "/industries/clinics" },
  { label: "Real Estate Agencies", href: "/industries/real-estate-agencies" },
] as const;
