import type { APIRoute } from "astro";
import { site as siteConfig } from "@/config/site";
import { services } from "@/content/services";
import { localePath, type Lang } from "@/i18n";

const summary = {
  en: "Optivox helps small and mid-sized businesses get found on Google Search, Google Maps and in AI answers (ChatGPT, Gemini, Perplexity, Google AI Overviews). Services: website development, SEO, and AI search optimization (GEO). Works in Hebrew and English, serving businesses in Israel.",
  he: "Optivox עוזרת לעסקים קטנים ובינוניים להימצא בחיפוש של גוגל, בגוגל מפות ובתשובות של מנועי AI. שירותים: בניית אתרים, קידום אתרים בגוגל וקידום במנועי AI.",
} satisfies Record<Lang, string>;

const pages = {
  en: { home: "Home", services: "All services", about: "About", contact: "Contact and free visibility audit" },
  he: { home: "דף הבית", services: "כל השירותים", about: "אודות", contact: "צור קשר ובדיקת נראות חינם" },
} satisfies Record<Lang, Record<string, string>>;

export const GET: APIRoute = ({ site }) => {
  const url = (lang: Lang, path: string) => new URL(localePath(lang, path), site).toString();

  const section = (lang: Lang, heading: string) => [
    `## ${heading}`,
    "",
    `- [${pages[lang].home}](${url(lang, "/")})`,
    `- [${pages[lang].services}](${url(lang, "/services/")})`,
    ...services.map((s) => `- [${s.content[lang].name}](${url(lang, `/services/${s.slug}/`)}): ${s.content[lang].short}`),
    `- [${pages[lang].about}](${url(lang, "/about/")})`,
    `- [${pages[lang].contact}](${url(lang, "/contact/")})`,
    "",
  ];

  const body = [
    `# ${siteConfig.name}`,
    "",
    `> ${summary.en}`,
    "",
    summary.he,
    "",
    `Contact: ${siteConfig.email}`,
    "",
    ...section("en", "Pages (English)"),
    ...section("he", "עמודים (עברית)"),
  ].join("\n");

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
