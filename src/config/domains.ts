/** Israel site: Hebrew at `/`, English at `/en/`. */
export function israelOrigin(): string {
  return stripSlash(process.env.ISRAEL_SITE_URL ?? process.env.SITE_URL ?? "https://optivox.co.il");
}

/** International site: English at `/`. Later locales can share this host. */
export function intlOrigin(): string {
  return stripSlash(process.env.INTL_SITE_URL ?? "https://optivox.io");
}

function stripSlash(origin: string): string {
  return origin.replace(/\/$/, "");
}

export function publicOrigin(lang: "he" | "en"): string {
  return lang === "he" ? israelOrigin() : intlOrigin();
}

/** Locale-neutral `path` must start and end with `/`. Hebrew stays on `.co.il`; English canonical is `.io` with no `/en/` prefix. */
export function publicUrl(lang: "he" | "en", path: string): string {
  return new URL(path, `${publicOrigin(lang)}/`).toString();
}

export function israelEnglishUrl(path: string): string {
  const prefixed = path === "/" ? "/en/" : `/en${path}`;
  return new URL(prefixed, `${israelOrigin()}/`).toString();
}
