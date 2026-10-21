import type { APIRoute } from "astro";

const aiCrawlers = ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "PerplexityBot", "Google-Extended"];

export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL("/sitemap-index.xml", site ?? "https://optivox.co.il").toString();
  const body = [
    "User-agent: *",
    "Allow: /",
    "Disallow: /contact/thanks/",
    "Disallow: /en/contact/thanks/",
    "",
    ...aiCrawlers.flatMap((bot) => [`User-agent: ${bot}`, "Allow: /", ""]),
    `Sitemap: ${sitemap}`,
    "",
  ].join("\n");

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
