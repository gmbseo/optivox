// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { intlOrigin } from "./src/config/domains.ts";

const site = process.env.SITE_URL ?? process.env.ISRAEL_SITE_URL ?? "https://optivox.co.il";

export default defineConfig({
  site,
  trailingSlash: "always",
  build: {
    format: "directory",
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/thanks/"),
      serialize(item) {
        const url = new URL(item.url);
        if (url.pathname === "/en/" || url.pathname.startsWith("/en/")) {
          const intl = new URL(intlOrigin());
          url.protocol = intl.protocol;
          url.host = intl.host;
          url.pathname = url.pathname.replace(/^\/en/, "") || "/";
          if (!url.pathname.endsWith("/")) url.pathname += "/";
          item.url = url.toString();
        }
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
