type SiteConfig = {
  name: string;
  /** Leave empty to hide. */
  email: string;
  /** Leave empty to hide. International format, e.g. "+972-50-000-0000". */
  phone: string;
  /** Leave empty to hide. Digits only with country code, e.g. "972500000000". */
  whatsapp: string;
  /**
   * Israel office — shown on optivox.co.il only (any language), hidden on .io.
   * Leave mapsUrl empty to hide.
   */
  address: {
    he: string;
    en: string;
    mapsUrl: string;
    /** Google Maps embed src (no API key). Leave empty to hide the map. */
    embedUrl: string;
  };
  logo: string;
  ogImage: string;
};

export const site: SiteConfig = {
  name: "Optivox",
  email: "",
  phone: "055-245-2289",
  whatsapp: "972552452289",
  address: {
    he: "WeWork Midtown, תל אביב",
    en: "WeWork Midtown, Tel Aviv",
    mapsUrl: "https://maps.app.goo.gl/Xuj6aJy4JRV7NvYZ7",
    embedUrl:
      "https://www.google.com/maps?q=WeWork+Midtown,+Tel+Aviv&hl=he&z=16&output=embed",
  },
  logo: "/menu_logo.webp",
  ogImage: "/icon.jpeg",
};
