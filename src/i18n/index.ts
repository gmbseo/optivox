export const locales = ["he", "en"] as const;
export type Lang = (typeof locales)[number];
export const defaultLang: Lang = "he";

export const langMeta = {
  he: { dir: "rtl", hreflang: "he-IL", ogLocale: "he_IL", name: "עברית" },
  en: { dir: "ltr", hreflang: "en", ogLocale: "en_US", name: "English" },
} as const satisfies Record<Lang, { dir: "rtl" | "ltr"; hreflang: string; ogLocale: string; name: string }>;

/** `path` is locale-neutral and must start and end with "/". */
export function localePath(lang: Lang, path = "/"): string {
  return lang === defaultLang ? path : `/${lang}${path}`;
}

export function getLang(url: URL): Lang {
  const [, first] = url.pathname.split("/");
  return (locales as readonly string[]).includes(first) ? (first as Lang) : defaultLang;
}

export function stripLang(pathname: string): string {
  const stripped = pathname.replace(/^\/en(?=\/|$)/, "");
  return stripped === "" ? "/" : stripped;
}

export function otherLang(lang: Lang): Lang {
  return lang === "he" ? "en" : "he";
}
