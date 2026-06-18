export type CaseStudy = {
  id: string;
  title: string;
  client: string;
  industry: string;
  location: string;
  overview: string;
  challenge: string;
  strategy: string;
  execution: string;
  results: string;
  metrics: Array<{ label: string; value: string }>;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
};

export const caseStudies: CaseStudy[] = [
  {
    id: "bright-smile-dental",
    title: "Bright Smile Dental — Local Maps Dominance",
    client: "Bright Smile Dental",
    industry: "Dentistry",
    location: "Austin, TX",
    overview:
      "A family dental practice struggling to appear in Google Maps for high-intent local searches.",
    challenge:
      "The practice ranked outside the local map pack for core services like \"dentist near me\" and \"emergency dentist.\" Competitors with weaker reviews consistently outranked them. Website leads were inconsistent and mostly from referrals.",
    strategy:
      "We prioritized Google Business Profile optimization, local citation consistency, service-area landing pages, and review growth—aligned with a technical cleanup of the website.",
    execution:
      "We restructured their GBP categories and services, implemented a review request workflow, built location-specific content, fixed NAP inconsistencies across directories, and improved on-page SEO for priority treatments.",
    results:
      "Bright Smile moved into the top three Google Maps results for their primary keywords and saw a sustained increase in new patient calls from organic search.",
    metrics: [
      { label: "Map pack visibility", value: "Top 3" },
      { label: "Organic calls", value: "+68%" },
      { label: "New patient inquiries", value: "+45%" },
      { label: "Google reviews", value: "4.9 ★ (120+)" },
    ],
    testimonial: {
      quote:
        "Within four months we went from barely showing on Maps to ranking in the top three for our main services.",
      author: "Dr. Sarah Mitchell",
      role: "Owner, Bright Smile Dental",
    },
  },
  {
    id: "chen-law",
    title: "Chen & Associates — Organic Consultation Growth",
    client: "Chen & Associates Law",
    industry: "Legal",
    location: "Denver, CO",
    overview:
      "A mid-sized law firm seeking more consultation requests without increasing paid ad spend.",
    challenge:
      "Strong offline reputation but weak online visibility. Competitors dominated organic results for personal injury and family law queries. The firm's Google Business Profile was incomplete and rarely updated.",
    strategy:
      "Combined website SEO for high-value practice areas with GBP optimization and localized content targeting Denver neighborhoods and suburbs.",
    execution:
      "We developed practice-area pages with clear conversion paths, optimized metadata and internal linking, launched a GBP posting cadence, and addressed technical SEO issues affecting crawlability.",
    results:
      "Consultation form submissions and phone inquiries from organic search doubled within six months while ad spend remained flat.",
    metrics: [
      { label: "Organic consultations", value: "+2×" },
      { label: "Organic traffic", value: "+74%" },
      { label: "Keyword rankings (top 10)", value: "+32" },
      { label: "GBP profile views", value: "+89%" },
    ],
    testimonial: {
      quote:
        "Our consultation requests doubled without spending on ads. They showed us exactly where we were losing visibility.",
      author: "James Chen",
      role: "Managing Partner",
    },
  },
  {
    id: "rivera-hvac",
    title: "Rivera HVAC — Google Maps Lead Engine",
    client: "Rivera HVAC Solutions",
    industry: "HVAC / Contractor",
    location: "Phoenix, AZ",
    overview:
      "An HVAC company dependent on referrals and seasonal ad campaigns with unpredictable lead flow.",
    challenge:
      "Low Google Maps visibility during peak summer demand. Website loaded slowly on mobile. Few reviews compared to larger competitors. Inconsistent lead volume month to month.",
    strategy:
      "Focus on local pack rankings for emergency and seasonal HVAC searches, speed optimization, and systematic review acquisition.",
    execution:
      "We optimized GBP for service categories and seasonal offers, improved Core Web Vitals, built service-area pages for Phoenix suburbs, and implemented post-service review requests.",
    results:
      "Rivera HVAC became a consistent top Maps result for emergency HVAC searches and stabilized year-round lead flow from organic channels.",
    metrics: [
      { label: "Maps ranking (emergency HVAC)", value: "#1–2" },
      { label: "Monthly organic leads", value: "+52%" },
      { label: "Mobile page speed", value: "92/100" },
      { label: "Review count", value: "+85 new" },
    ],
    testimonial: {
      quote:
        "Now Google brings us qualified leads every week. The Google Business Profile work alone made a huge difference.",
      author: "Marcus Rivera",
      role: "Owner",
    },
  },
];
