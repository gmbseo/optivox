import { israelOrigin, publicUrl } from "@/config/domains";
import { site } from "@/config/site";
import { langMeta, type Lang } from "@/i18n";
import { t } from "@/i18n/ui";

type Json = Record<string, unknown>;

export function absolute(path: string, base: URL | string): string {
  return new URL(path, base).toString();
}

export function organizationSchema(lang: Lang, _base?: URL | string): Json {
  const origin = israelOrigin();
  const url = publicUrl(lang, "/");
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": absolute("/#organization", origin),
    name: site.name,
    url,
    logo: absolute(site.logo, origin),
    image: absolute(site.ogImage, origin),
    description: t(lang).footer.tagline,
    ...(site.email ? { email: site.email } : {}),
    ...(site.phone ? { telephone: site.phone } : {}),
    areaServed: { "@type": "Country", name: lang === "he" ? "ישראל" : "Israel" },
    knowsLanguage: ["he", "en"],
  };
}

export function websiteSchema(lang: Lang, _base?: URL | string): Json {
  const url = publicUrl(lang, "/");
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${url}#website`,
    name: site.name,
    url,
    inLanguage: langMeta[lang].hreflang,
    publisher: { "@id": absolute("/#organization", israelOrigin()) },
  };
}

export function serviceSchema(
  lang: Lang,
  base: URL | string,
  service: { name: string; description: string; path: string },
): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: publicUrl(lang, service.path),
    serviceType: service.name,
    provider: { "@id": absolute("/#organization", israelOrigin()) },
    areaServed: { "@type": "Country", name: lang === "he" ? "ישראל" : "Israel" },
    inLanguage: langMeta[lang].hreflang,
  };
}

export function faqSchema(faqs: readonly { q: string; a: string }[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(
  base: URL | string,
  items: readonly { name: string; href: string }[],
): Json {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absolute(item.href, base),
    })),
  };
}
