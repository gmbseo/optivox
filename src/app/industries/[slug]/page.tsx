import { notFound } from "next/navigation";
import { IndustryPageTemplate } from "@/components/templates/industry-page";
import { breadcrumbSchema, JsonLd, serviceSchema } from "@/components/seo/json-ld";
import { industries } from "@/content/industries";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return Object.keys(industries).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const industry = industries[slug];
  if (!industry) return {};

  return createPageMetadata({
    title: industry.title,
    description: industry.description,
    path: `/industries/${slug}`,
    keywords: industry.keywords,
  });
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const industry = industries[slug];
  if (!industry) notFound();

  const url = `${siteConfig.url}/industries/${slug}`;

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: industry.title,
            description: industry.description,
            url,
          }),
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Industries", url: `${siteConfig.url}/industries` },
            { name: industry.title, url },
          ]),
        ]}
      />
      <IndustryPageTemplate industry={industry} />
    </>
  );
}
