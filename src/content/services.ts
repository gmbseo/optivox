export type ServiceDetail = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  heroSubtitle: string;
  keywords: string[];
  features: Array<{ title: string; description: string }>;
  benefits: string[];
  process: Array<{ step: string; title: string; description: string }>;
  faqs: Array<{ question: string; answer: string }>;
};

export const services: Record<string, ServiceDetail> = {
  "local-seo": {
    slug: "local-seo",
    title: "Local SEO Services",
    shortTitle: "Local SEO",
    description:
      "Rank higher in Google Maps and local search when customers in your area look for your services. Optivox builds local authority, relevance, and visibility that drives calls and visits.",
    heroSubtitle:
      "Dominate local search results and Google Maps so nearby customers find you first—not your competitors.",
    keywords: [
      "local SEO services",
      "local search optimization",
      "Google Maps ranking",
      "local SEO agency",
    ],
    features: [
      {
        title: "Local Rankings",
        description:
          "Improve positions in the local pack and organic results for geo-targeted keywords that drive real business.",
      },
      {
        title: "Location Relevance",
        description:
          "Align your website, Google Business Profile, and citations so Google clearly understands where you serve.",
      },
      {
        title: "Local Citations",
        description:
          "Build consistent business listings across trusted directories to strengthen local authority signals.",
      },
      {
        title: "Google Maps Visibility",
        description:
          "Optimize for map pack rankings—the highest-converting placement for local service businesses.",
      },
      {
        title: "Local Authority Building",
        description:
          "Earn relevance through reviews, content, links, and engagement that signal trust to Google and customers.",
      },
    ],
    benefits: [
      "More calls and direction requests from Google Maps",
      "Stronger visibility against larger competitors",
      "Consistent local lead flow without ad dependency",
      "Clear reporting tied to rankings and business outcomes",
    ],
    process: [
      {
        step: "01",
        title: "Local visibility audit",
        description:
          "We map your current rankings, GBP health, citations, and competitor landscape.",
      },
      {
        step: "02",
        title: "Priority roadmap",
        description:
          "You get a focused plan targeting the local keywords and areas that matter most.",
      },
      {
        step: "03",
        title: "Execute & optimize",
        description:
          "We implement on-site, off-site, and GBP improvements with ongoing refinement.",
      },
      {
        step: "04",
        title: "Measure growth",
        description:
          "Track rankings, calls, leads, and visibility shifts—with transparent reporting.",
      },
    ],
    faqs: [
      {
        question: "How is local SEO different from regular SEO?",
        answer:
          "Local SEO targets customers searching in a specific geographic area—especially Google Maps and \"near me\" queries. It emphasizes Google Business Profile, citations, reviews, and location relevance.",
      },
      {
        question: "Can local SEO help multi-location businesses?",
        answer:
          "Yes. We create location-specific strategies for each service area, including dedicated pages, GBP management, and localized content.",
      },
    ],
  },
  "google-business-profile-optimization": {
    slug: "google-business-profile-optimization",
    title: "Google Business Profile Optimization",
    shortTitle: "Google Business Profile",
    description:
      "Turn your Google Business Profile into a lead-generating asset. Optivox optimizes categories, content, reviews, photos, and posts to improve map visibility and customer actions.",
    heroSubtitle:
      "Your Google Business Profile is often the first impression customers have. Make it convert.",
    keywords: [
      "Google Business Profile optimization",
      "Google Business Profile management",
      "GBP optimization",
      "Google Maps visibility",
    ],
    features: [
      {
        title: "Profile Optimization",
        description:
          "Complete and accurate business information, services, attributes, and descriptions aligned with search intent.",
      },
      {
        title: "Categories & Services",
        description:
          "Strategic category selection and service listings that match how customers search for your business.",
      },
      {
        title: "Reviews & Reputation",
        description:
          "Systems to earn more reviews, respond professionally, and build trust that influences rankings and conversions.",
      },
      {
        title: "Posts & Updates",
        description:
          "Regular GBP posts that highlight offers, news, and expertise—keeping your profile active and relevant.",
      },
      {
        title: "Photos & Media",
        description:
          "High-quality visuals that showcase your team, work, and location to increase engagement and clicks.",
      },
      {
        title: "Map Visibility",
        description:
          "Ongoing optimization to improve local pack rankings and maximize calls, messages, and direction requests.",
      },
    ],
    benefits: [
      "Higher map pack rankings for priority searches",
      "More profile views, calls, and website clicks",
      "Stronger reputation through review growth",
      "A profile that reflects your brand quality",
    ],
    process: [
      {
        step: "01",
        title: "GBP audit",
        description:
          "We assess completeness, accuracy, category fit, reviews, and competitor profiles.",
      },
      {
        step: "02",
        title: "Optimization sprint",
        description:
          "We fix gaps, refine categories, enhance media, and align services with search demand.",
      },
      {
        step: "03",
        title: "Engagement cadence",
        description:
          "Posts, review responses, and updates that signal an active, trustworthy business.",
      },
      {
        step: "04",
        title: "Rank & refine",
        description:
          "Monitor map rankings and profile actions; adjust based on performance data.",
      },
    ],
    faqs: [
      {
        question: "Why does Google Business Profile matter so much?",
        answer:
          "For local businesses, GBP often appears above organic results and drives direct actions—calls, directions, and website visits. It's essential for Google Maps rankings.",
      },
      {
        question: "Can you help us get more Google reviews?",
        answer:
          "Yes. We implement ethical review request workflows and response strategies that improve volume and quality without violating Google's policies.",
      },
    ],
  },
  "website-seo": {
    slug: "website-seo",
    title: "Website SEO for Small Businesses",
    shortTitle: "Website SEO",
    description:
      "Build a website that ranks and converts. Optivox improves technical health, on-page optimization, content, speed, and user experience to capture organic search traffic.",
    heroSubtitle:
      "Your website should work for you 24/7—ranking for the searches that bring qualified customers.",
    keywords: [
      "website SEO",
      "small business SEO",
      "SEO for small businesses",
      "on-page SEO",
    ],
    features: [
      {
        title: "Technical SEO",
        description:
          "Fix crawl issues, indexing problems, site structure, and technical barriers that limit visibility.",
      },
      {
        title: "On-Page SEO",
        description:
          "Optimize titles, headings, metadata, and content for keywords your customers actually search.",
      },
      {
        title: "Content Optimization",
        description:
          "Develop and refine pages that answer customer questions and demonstrate expertise.",
      },
      {
        title: "Site Speed",
        description:
          "Improve Core Web Vitals and load times—critical for rankings and mobile user experience.",
      },
      {
        title: "Internal Linking",
        description:
          "Structure links so Google and users discover your most important service and location pages.",
      },
      {
        title: "User Experience",
        description:
          "Clear navigation, mobile-first design, and conversion paths that turn visitors into leads.",
      },
    ],
    benefits: [
      "Higher organic rankings for service and location keywords",
      "Faster, more trustworthy website experience",
      "More form submissions and phone calls from search",
      "A scalable content foundation for long-term growth",
    ],
    process: [
      {
        step: "01",
        title: "Technical review",
        description:
          "Audit crawlability, speed, mobile experience, and indexation.",
      },
      {
        step: "02",
        title: "On-page priorities",
        description:
          "Optimize high-impact pages first—services, locations, and conversion pages.",
      },
      {
        step: "03",
        title: "Content expansion",
        description:
          "Add or improve content that targets gaps in your search visibility.",
      },
      {
        step: "04",
        title: "Iterate on data",
        description:
          "Use ranking and analytics data to refine pages and internal linking.",
      },
    ],
    faqs: [
      {
        question: "Do I need a new website for SEO?",
        answer:
          "Not always. Many businesses see significant gains from optimization alone. We recommend redesigns only when technical or UX limitations block growth.",
      },
      {
        question: "How does website SEO connect to local SEO?",
        answer:
          "Website authority and relevance reinforce Google Business Profile rankings. Local landing pages, NAP consistency, and service content strengthen both.",
      },
    ],
  },
  "seo-audit": {
    slug: "seo-audit",
    title: "SEO Audit & Google Visibility Review",
    shortTitle: "SEO Audit",
    description:
      "Get a clear picture of your Google visibility with a comprehensive SEO audit. We review your website, Google Business Profile, competitors, and growth opportunities—then deliver an actionable plan.",
    heroSubtitle:
      "Know exactly where you're losing visibility—and what to fix first.",
    keywords: [
      "SEO audit",
      "Google visibility audit",
      "local SEO audit",
      "free SEO audit",
    ],
    features: [
      {
        title: "Website Audit",
        description:
          "Technical health, on-page factors, content gaps, speed, and conversion paths reviewed in detail.",
      },
      {
        title: "GBP Audit",
        description:
          "Profile completeness, category fit, reviews, photos, and comparison against local competitors.",
      },
      {
        title: "Competitor Analysis",
        description:
          "See who outranks you, why they win, and where you can realistically gain ground.",
      },
      {
        title: "Growth Opportunities",
        description:
          "Prioritized list of keywords, pages, and local tactics with the highest impact potential.",
      },
      {
        title: "Action Plan",
        description:
          "A practical roadmap you can execute internally or with Optivox—no fluff, no jargon.",
      },
    ],
    benefits: [
      "Clarity on what's holding back your visibility",
      "Prioritized recommendations—not a generic checklist",
      "Competitive context for your market",
      "Free Google Visibility Audit available for qualified businesses",
    ],
    process: [
      {
        step: "01",
        title: "Submit your details",
        description:
          "Tell us about your business, website, and goals via our contact form.",
      },
      {
        step: "02",
        title: "We analyze",
        description:
          "Our team reviews website, GBP, rankings, and competitors—typically within 3–5 business days.",
      },
      {
        step: "03",
        title: "Receive your audit",
        description:
          "You get findings, opportunities, and a prioritized action plan.",
      },
      {
        step: "04",
        title: "Choose your path",
        description:
          "Implement on your own or partner with us for execution and ongoing growth.",
      },
    ],
    faqs: [
      {
        question: "Is the Google Visibility Audit really free?",
        answer:
          "Yes, for qualifying local businesses. There's no obligation. We use it to demonstrate our approach and identify whether we're a good fit to help you grow.",
      },
      {
        question: "What do I receive after the audit?",
        answer:
          "A summary of key findings, competitive context, and prioritized recommendations for website, GBP, and local SEO—focused on business outcomes.",
      },
    ],
  },
};

export const serviceList = Object.values(services);
