type SiteConfig = {
  name: string;
  email: string;
  /** Leave empty to hide. International format, e.g. "+972-50-000-0000". */
  phone: string;
  /** Leave empty to hide. Digits only with country code, e.g. "972500000000". */
  whatsapp: string;
  logo: string;
  ogImage: string;
};

export const site: SiteConfig = {
  name: "Optivox",
  email: "hello@optivox.com",
  phone: "+972-55-245-2289",
  whatsapp: "972552452289",
  logo: "/menu_logo.webp",
  ogImage: "/icon.jpeg",
};
