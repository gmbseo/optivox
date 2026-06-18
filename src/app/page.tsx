import {
  AuditLeadMagnet,
  BenefitsSection,
  CaseStudiesPreview,
  FaqSection,
  FinalCta,
  HomeHero,
  HowItWorks,
  ProblemSection,
  ResultsSection,
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
      <BenefitsSection />
      <ResultsSection />
      <TestimonialsSection />
      <CaseStudiesPreview />
      <AuditLeadMagnet />
      <FaqSection />
      <FinalCta />
    </>
  );
}
