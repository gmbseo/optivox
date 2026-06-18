import {
  AuditLeadMagnet,
  FaqSection,
  FinalCta,
  HomeHero,
  HowItWorks,
  ProblemSection,
  ServicesOverview,
  TestimonialsSection,
} from "@/components/home/sections";
import { faqSchema, JsonLd } from "@/components/seo/json-ld";
import { homeFaqs } from "@/content/faqs";

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema([...homeFaqs])} />
      <HomeHero />
      <ProblemSection />
      <ServicesOverview />
      <HowItWorks />
      <TestimonialsSection />
      <AuditLeadMagnet />
      <FaqSection />
      <FinalCta />
    </>
  );
}
