import { notFound } from "next/navigation";
import { ServicePageTemplate } from "@/components/templates/service-page";
import {
  breadcrumbSchema,
  faqSchema,
  JsonLd,
  serviceSchema,
} from "@/components/seo/json-ld";
import { services } from "@/content/services";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = services[slug];
  if (!service) return {};

  return createPageMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${slug}`,
    keywords: service.keywords,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services[slug];
  if (!service) notFound();

  const url = `${siteConfig.url}/services/${slug}`;

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: service.title,
            description: service.description,
            url,
          }),
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Services", url: `${siteConfig.url}/services` },
            { name: service.title, url },
          ]),
          ...(service.faqs.length > 0 ? [faqSchema(service.faqs)] : []),
        ]}
      />
      <ServicePageTemplate service={service} />
    </>
  );
}
