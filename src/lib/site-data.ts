export type CaseStudyMetric = {
  label: string;
  value: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  location: string;
  website: string;
  screenshot: string;
  summary: string;
  cardResult: string;
  revenue: string;
  timeframe: string;
  scopeIntro: string;
  scope: string[];
  technicalHighlights: string[];
  publicSignals: string[];
  metrics: CaseStudyMetric[];
};

export const contactDetails = {
  email: "hello@rei-aliaj.com",
  whatsapp: "+355675852355",
  whatsappHref: "https://wa.me/355675852355",
  address: "Bulevardi Gjergj Fishta, Tirane",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Bulevardi+Gjergj+Fishta+Tirane",
  linkedin: "https://www.linkedin.com/in/rei-aliaj-28a951172",
};

export const technicalServices = [
  {
    title: "Shopify Design & UX",
    label: "01 / Experience",
    items: [
      "High-converting design",
      "Product page optimization",
      "Mobile-first UX",
    ],
  },
  {
    title: "Shopify Development",
    label: "02 / Build",
    items: [
      "Custom Liquid development",
      "Advanced theme customization",
      "Performance optimization",
    ],
  },
  {
    title: "Custom Shopify Apps",
    label: "03 / Apps",
    items: [
      "Private apps",
      "API integrations",
      "Backend solutions",
    ],
  },
  {
    title: "Integrations & Automation",
    label: "04 / Systems",
    items: [
      "CRM integrations (HubSpot etc.)",
      "Workflow automation",
      "Third-party tools",
    ],
  },
  {
    title: "Store Management",
    label: "05 / Merchandising",
    items: [
      "Product setup & optimization",
      "Collection structure",
      "Merchandising",
    ],
  },
  {
    title: "Shopify SEO",
    label: "06 / Visibility",
    items: [
      "Technical SEO",
      "Speed optimization",
      "Structured data",
    ],
  },
  {
    title: "Fixes & Optimization",
    label: "07 / Support",
    items: [
      "Bug fixing",
      "Checkout issues",
      "App conflicts",
    ],
  },
  {
    title: "Full Store Build / Rebuild",
    label: "08 / Launch",
    items: [
      "New Shopify stores",
      "Redesign existing stores",
      "Migration",
    ],
  },
] as const;

export const whyWorkWithMe = [
  {
    title: "11+ years experience",
    detail: "Working in web since the age of 18, with long-term Shopify focus.",
  },
  {
    title: "Technical problem solving",
    detail:
      "I work beyond visual polish and focus on systems, logic, workflows, and store operations.",
  },
  {
    title: "Fast execution",
    detail: "Direct freelance workflow with fewer layers and faster decision making.",
  },
  {
    title: "Affordable pricing",
    detail: "Strong value without agency overhead, while still delivering senior-level work.",
  },
  {
    title: "Direct communication",
    detail: "Clear updates, practical recommendations, and no unnecessary complexity.",
  },
] as const;

export const caseStudies: CaseStudy[] = [
  {
    slug: "lens-and-frame",
    title: "Lens & Frame Co.",
    category: "Retail Eyewear Shopify Store",
    location: "Los Angeles, California",
    website: "https://lensandframe.co/",
    screenshot: "/case-studies/lens-and-frame-home.png",
    summary:
      "A scratch-built Shopify store for a retail eyewear brand selling reading glasses, prescription eyewear, and replacement lenses.",
    cardResult:
      "Built from scratch with catalog setup, custom storefront work, and a reported $600k+ in annual revenue after launch.",
    revenue: "$600k+ / year",
    timeframe: "Built from scratch",
    scopeIntro:
      "This project covered the full Shopify build, from setup and store structure to custom solutions, content pages, SEO, and ongoing technical improvements.",
    scope: [
      "Built the store from scratch in Shopify, including navigation, storefront structure, and reusable page systems.",
      "Handled product setup, collection organization, merchandising, and content page creation across the storefront.",
      "Implemented custom solutions around the product and buying experience, plus SEO-focused structure and cleanup.",
      "Supported the store as a serious retail business rather than a simple brochure store.",
    ],
    technicalHighlights: [
      "Custom Shopify theme engineering for a storefront that balances editorial visuals with a deeper multi-category product catalog.",
      "Catalog architecture for readers, prescription eyewear, sunglasses, and replacement lenses with clearer discovery paths.",
      "Storefront components and custom logic to support a more specialized eyewear purchase flow and better product education.",
      "Technical SEO and performance-minded cleanup to keep the experience manageable as content and product depth grew.",
    ],
    publicSignals: [
      "The live storefront currently highlights reading, prescription, and lens categories, plus search-led navigation.",
      "Homepage messaging centers on EV Readers, Rx sunglasses, replacement lenses, and multi-brand merchandising.",
      "Public storefront cues include 3,455 reviews, free returns, a 1-year scratch warranty, and handcrafted-in-California messaging.",
    ],
    metrics: [
      { label: "Store Type", value: "Retail Eyewear" },
      { label: "Role", value: "Full Shopify Build" },
      { label: "Revenue", value: "$600k+ / year" },
      { label: "Scope", value: "Theme, catalog, SEO, custom solutions" },
    ],
  },
  {
    slug: "mybody-x",
    title: "mybody x",
    category: "Health Test Ecommerce Shopify Store",
    location: "EU DTC Market",
    website: "https://mybody-x.com/",
    screenshot: "/case-studies/mybody-x-home.png",
    summary:
      "A content-rich Shopify storefront for at-home DNA, microbiome, nutrient, and blood-based health tests, with custom setup across products, pages, and store experience.",
    cardResult:
      "Custom Shopify execution for a fast-growing health-test store with broad product structure and a reported $300k+ annual revenue level.",
    revenue: "$300k+ / year",
    timeframe: "Full Shopify execution",
    scopeIntro:
      "The work here was broad: product and collection setup, page building, custom storefront solutions, SEO structure, and technical support for a store with more operational and content complexity.",
    scope: [
      "Built and structured major parts of the Shopify storefront, including products, collections, landing pages, and conversion-focused sections.",
      "Created custom solutions to support a more complex catalog across DNA, microbiome, nutrient, and self-test products.",
      "Handled SEO-related structure, content hierarchy, and merchandising presentation to support discoverability and trust.",
      "Worked across both frontend execution and the practical setup needed to keep the store manageable as it grew.",
    ],
    technicalHighlights: [
      "Theme and content architecture for a product catalog that mixes education, trust, bundles, and direct response ecommerce.",
      "Information structure for multiple test categories, regional storefront needs, and a more content-heavy buying journey.",
      "Custom Shopify implementation to support clearer product comparison, landing-page flexibility, and reusable merchandising blocks.",
      "Technical cleanup across templates, store organization, and conversion points to make the storefront easier to scale.",
    ],
    publicSignals: [
      "The live storefront currently presents DNA, microbiome, nutrient, hormone, and self-test categories for at-home use.",
      "Public site messaging includes free shipping in DE, AT, and CH, multi-language / market support, and over 11,314 satisfied customers.",
      "Homepage structure mixes editorial trust sections, press mentions, bundles, and category-led discovery for health test products.",
    ],
    metrics: [
      { label: "Store Type", value: "Health Test DTC" },
      { label: "Role", value: "Technical Shopify Execution" },
      { label: "Revenue", value: "$300k+ / year" },
      { label: "Scope", value: "Catalog, pages, SEO, custom solutions" },
    ],
  },
];
