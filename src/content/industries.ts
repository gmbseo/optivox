export type IndustryDetail = {
  slug: string;
  title: string;
  plural: string;
  description: string;
  heroSubtitle: string;
  keywords: string[];
  challenges: string[];
  opportunities: string[];
  mapsStrategy: string[];
  recommendations: string[];
  outcomes: Array<{ label: string; value: string }>;
};

export const industries: Record<string, IndustryDetail> = {
  dentists: {
    slug: "dentists",
    title: "SEO for Dentists",
    plural: "Dentists",
    description:
      "Help your dental practice get found when patients search for dentists, emergency dental care, and cosmetic treatments on Google and Google Maps.",
    heroSubtitle:
      "New patients start with a Google search. Make sure they find your practice first.",
    keywords: ["SEO for dentists", "dental SEO", "dentist Google Maps ranking"],
    challenges: [
      "Competing with DSOs and multi-location practices in local map results",
      "Low visibility for high-intent searches like \"dentist near me\" and emergency dental",
      "Incomplete Google Business Profile with outdated photos and few reviews",
      "Website pages that don't target specific treatments or neighborhoods",
      "Inconsistent new patient flow beyond referrals",
    ],
    opportunities: [
      "Google Maps rankings for neighborhood and treatment-specific searches",
      "Review growth that builds trust for anxious new patients",
      "Service pages for implants, Invisalign, cosmetic dentistry, and pediatrics",
      "Local content targeting suburbs and communities you serve",
      "Strong GBP posts highlighting offers, team expertise, and patient education",
    ],
    mapsStrategy: [
      "Optimize primary and secondary GBP categories for dental services",
      "Add detailed service listings aligned with patient search behavior",
      "Implement ethical review requests after positive appointments",
      "Upload professional photos of office, team, and technology",
      "Post weekly updates on services, seasonal reminders, and community involvement",
    ],
    recommendations: [
      "Build location-specific landing pages for each service area",
      "Ensure NAP consistency across health directories and local listings",
      "Improve mobile site speed—most dental searches happen on phones",
      "Create content answering common patient questions before they call",
      "Track calls and form submissions from organic and Maps traffic",
    ],
    outcomes: [
      { label: "Map pack visibility", value: "Top 3 for core keywords" },
      { label: "New patient inquiries", value: "+40–60%" },
      { label: "Organic website traffic", value: "+50–80%" },
      { label: "Review velocity", value: "Steady monthly growth" },
    ],
  },
  lawyers: {
    slug: "lawyers",
    title: "SEO for Lawyers",
    plural: "Lawyers",
    description:
      "Increase consultation requests with SEO built for law firms—organic visibility in Google Search and Maps for the practice areas and locations that matter.",
    heroSubtitle:
      "Clients search for lawyers in moments of urgency. Be visible when they need you.",
    keywords: ["SEO for lawyers", "law firm SEO", "legal SEO services"],
    challenges: [
      "High competition for practice-area keywords in organic search",
      "Weak Google Business Profile compared to larger firms",
      "Thin website content that doesn't demonstrate expertise",
      "Dependence on referrals and expensive paid leads",
      "Multiple attorneys or offices without clear local structure",
    ],
    opportunities: [
      "Localized pages for each practice area and jurisdiction",
      "Google Maps visibility for \"lawyer near me\" and city-specific queries",
      "Authority content that answers client questions pre-consultation",
      "GBP optimization showcasing credentials, reviews, and consultation CTAs",
      "Internal linking that connects related practice areas and locations",
    ],
    mapsStrategy: [
      "Select precise legal categories and subcategories in GBP",
      "Highlight consultation availability and response expectations",
      "Earn reviews that mention specific practice areas (where appropriate)",
      "Use GBP posts for case insights, legal updates, and firm news",
      "Ensure each office location has a fully optimized profile if multi-location",
    ],
    recommendations: [
      "Develop comprehensive practice-area pages with clear CTAs",
      "Fix technical SEO issues affecting crawl and indexation",
      "Build local landing pages for cities and counties you serve",
      "Implement schema markup for legal services and local business",
      "Measure consultation form and call conversions from organic traffic",
    ],
    outcomes: [
      { label: "Organic consultations", value: "+50–100%" },
      { label: "Practice-area rankings", value: "Top 10 growth" },
      { label: "GBP actions", value: "+60–90%" },
      { label: "Cost per lead", value: "Lower vs. paid alone" },
    ],
  },
  contractors: {
    slug: "contractors",
    title: "SEO for Contractors",
    plural: "Contractors",
    description:
      "Get more job inquiries from Google for HVAC, plumbing, electrical, roofing, and general contracting—with local SEO and Maps strategies built for home service businesses.",
    heroSubtitle:
      "Homeowners search Google first. Rank at the top when they need a contractor now.",
    keywords: [
      "SEO for contractors",
      "contractor SEO",
      "home services SEO",
      "HVAC SEO",
    ],
    challenges: [
      "Seasonal demand swings and unpredictable lead volume",
      "Large competitors dominating emergency and \"near me\" searches",
      "Slow mobile website hurting conversions on urgent searches",
      "Few reviews compared to established local players",
      "Service areas that span multiple cities without clear geo-targeting",
    ],
    opportunities: [
      "Top Google Maps rankings for emergency and high-intent service queries",
      "Service-area pages for every city and suburb you cover",
      "Review systems that build trust after completed jobs",
      "GBP offers and posts for seasonal maintenance and promotions",
      "Fast mobile experience that converts urgent searchers into calls",
    ],
    mapsStrategy: [
      "Optimize categories for each trade and emergency services",
      "List all service types with clear descriptions in GBP",
      "Request reviews immediately after successful job completion",
      "Add before/after project photos to GBP and website",
      "Use posts for seasonal tips, maintenance reminders, and limited offers",
    ],
    recommendations: [
      "Prioritize Core Web Vitals and click-to-call on mobile",
      "Create dedicated pages for each service and location combination",
      "Ensure consistent business info across contractor directories",
      "Track which keywords and areas drive the most qualified calls",
      "Combine organic growth with clear scheduling or estimate CTAs",
    ],
    outcomes: [
      { label: "Emergency search rankings", value: "#1–3 in Maps" },
      { label: "Monthly organic leads", value: "+40–70%" },
      { label: "Mobile conversion rate", value: "Improved CVR" },
      { label: "Review count", value: "Consistent growth" },
    ],
  },
  accountants: {
    slug: "accountants",
    title: "SEO for Accountants",
    plural: "Accountants",
    description:
      "Attract more clients to your accounting or CPA firm with local SEO that puts you in front of businesses and individuals searching for tax, bookkeeping, and advisory services.",
    heroSubtitle:
      "When tax season—or year-end planning—hits, clients search Google. Be the firm they find.",
    keywords: ["SEO for accountants", "CPA SEO", "accounting firm SEO"],
    challenges: [
      "Seasonal spikes with weak year-round visibility",
      "Generic website content that doesn't differentiate services",
      "Low Google Maps presence for local accounting searches",
      "Competition from national brands and software platforms",
      "Reliance on word-of-mouth without digital lead capture",
    ],
    opportunities: [
      "Local rankings for \"CPA near me,\" bookkeeping, and tax preparation",
      "Content targeting small business owners and specific industries",
      "GBP optimization highlighting credentials, services, and consultation offers",
      "Review growth from satisfied business clients",
      "Landing pages for business tax, personal tax, and advisory services",
    ],
    mapsStrategy: [
      "Use accurate accounting and tax categories in GBP",
      "Highlight certifications, languages, and business specialties",
      "Post seasonal tax deadlines, tips, and firm updates",
      "Encourage reviews from long-term business clients",
      "Ensure office hours and consultation options are clear",
    ],
    recommendations: [
      "Build service pages for tax prep, bookkeeping, payroll, and advisory",
      "Publish helpful content before peak tax and fiscal seasons",
      "Improve local citations on financial and business directories",
      "Add clear CTAs for free consultations or discovery calls",
      "Track leads by service line to refine SEO priorities",
    ],
    outcomes: [
      { label: "Local search visibility", value: "Top 5 map pack" },
      { label: "New client inquiries", value: "+35–55%" },
      { label: "Seasonal lead stability", value: "Improved year-round" },
      { label: "Organic traffic", value: "+45–70%" },
    ],
  },
  clinics: {
    slug: "clinics",
    title: "SEO for Clinics",
    plural: "Clinics",
    description:
      "Help medical clinics, urgent care centers, and specialty practices increase patient acquisition through Google Search and Maps visibility.",
    heroSubtitle:
      "Patients choose providers they can find quickly on Google. Increase your clinic's visibility.",
    keywords: ["SEO for clinics", "medical clinic SEO", "healthcare local SEO"],
    challenges: [
      "Competing with hospital networks in local search",
      "Incomplete or inconsistent Google Business Profiles",
      "Website content that doesn't address patient search intent",
      "Regulatory considerations around healthcare marketing",
      "Low review volume affecting trust and map rankings",
    ],
    opportunities: [
      "Maps rankings for specialty services and \"clinic near me\" queries",
      "Patient-focused content that answers conditions and treatment questions",
      "GBP optimization with services, insurance, and accessibility info",
      "Ethical review growth from satisfied patients",
      "Location pages for each clinic site in a multi-location practice",
    ],
    mapsStrategy: [
      "Select precise medical categories and specialties in GBP",
      "List accepted insurance, languages, and accessibility features",
      "Use professional photos of facilities, staff, and patient areas",
      "Post health education content and clinic updates regularly",
      "Respond to reviews promptly and professionally",
    ],
    recommendations: [
      "Develop condition and treatment pages with clear patient pathways",
      "Ensure HIPAA-compliant forms and fast mobile booking experience",
      "Maintain NAP consistency across healthcare directories",
      "Implement local schema for medical organizations",
      "Measure new patient requests from organic and Maps channels",
    ],
    outcomes: [
      { label: "Map pack rankings", value: "Top 3 for specialties" },
      { label: "New patient requests", value: "+30–50%" },
      { label: "Profile engagement", value: "+50–80%" },
      { label: "Organic visibility", value: "Steady keyword growth" },
    ],
  },
  "real-estate-agencies": {
    slug: "real-estate-agencies",
    title: "SEO for Real Estate Agencies",
    plural: "Real Estate Agencies",
    description:
      "Generate more buyer and seller leads for your real estate agency with local SEO strategies tailored to competitive property markets.",
    heroSubtitle:
      "Buyers and sellers start on Google. Make your agency the local authority they trust.",
    keywords: [
      "SEO for real estate agencies",
      "real estate SEO",
      "realtor local SEO",
    ],
    challenges: [
      "National portals (Zillow, Realtor.com) dominating broad searches",
      "Agents competing within the same agency for local visibility",
      "GBP profiles that don't reflect agency brand and service areas",
      "Website structured around listings without local expertise content",
      "Inconsistent lead flow between market cycles",
    ],
    opportunities: [
      "Hyperlocal neighborhood pages and market reports",
      "Google Maps visibility for \"real estate agency near me\"",
      "Content targeting sellers, buyers, and investors in your market",
      "GBP showcasing team, reviews, and agency credentials",
      "Internal linking between neighborhoods, agents, and service pages",
    ],
    mapsStrategy: [
      "Optimize agency GBP with accurate categories and service areas",
      "Highlight team expertise, languages, and market specialties",
      "Use posts for new listings, market updates, and community events",
      "Collect reviews that emphasize agency service and local knowledge",
      "Maintain consistent branding across all agent-related profiles",
    ],
    recommendations: [
      "Build neighborhood guides with schools, amenities, and market data",
      "Create seller and buyer resource hubs with strong CTAs",
      "Improve site speed and mobile experience for on-the-go searchers",
      "Develop agent profile pages optimized for local name searches",
      "Track lead sources to prioritize high-converting neighborhoods",
    ],
    outcomes: [
      { label: "Local agency visibility", value: "Top map results" },
      { label: "Seller/buyer leads", value: "+40–65%" },
      { label: "Neighborhood page traffic", value: "+60–100%" },
      { label: "Brand search growth", value: "Increased recognition" },
    ],
  },
};

export const industryList = Object.values(industries);
