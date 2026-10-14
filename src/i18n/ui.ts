import type { Lang } from "./index";

export const ui = {
  he: {
    skipToContent: "דלגו לתוכן הראשי",
    nav: {
      home: "עמוד הבית",
      services: "שירותים",
      allServices: "כל השירותים",
      about: "אודות",
      contact: "צור קשר",
      main: "ניווט ראשי",
      mobile: "ניווט נייד",
      openMenu: "פתיחת תפריט",
      closeMenu: "סגירת תפריט",
      switchLang: "English",
      switchLangLabel: "Switch to English",
    },
    cta: {
      audit: "לבדיקת נראות חינם",
      auditShort: "בדיקה חינם",
      services: "לשירותים שלנו",
      contact: "דברו איתנו",
    },
    footer: {
      tagline: "עוזרים לעסקים להימצא בגוגל, במפות ובתשובות של מנועי ה-AI.",
      services: "שירותים",
      company: "החברה",
      contact: "יצירת קשר",
      accessibility: "הצהרת נגישות",
      rights: "כל הזכויות שמורות.",
    },
    floating: {
      label: "יצירת קשר מהירה",
      call: "התקשרו אלינו",
      whatsapp: "שלחו לנו הודעה בוואטסאפ",
    },
    common: {
      learnMore: "למידע נוסף",
      faqTitle: "שאלות נפוצות",
      home: "בית",
      whatsIncluded: "מה כלול",
      howItWorks: "איך זה עובד",
      goodFit: "מתאים לכם אם",
      notFit: "פחות מתאים אם",
      related: "שירותים משלימים",
    },
  },
  en: {
    skipToContent: "Skip to main content",
    nav: {
      home: "Home",
      services: "Services",
      allServices: "View all services",
      about: "About",
      contact: "Contact",
      main: "Main navigation",
      mobile: "Mobile navigation",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      switchLang: "עברית",
      switchLangLabel: "לאתר בעברית",
    },
    cta: {
      audit: "Get a free visibility audit",
      auditShort: "Free audit",
      services: "Explore our services",
      contact: "Talk to us",
    },
    footer: {
      tagline: "Helping businesses get found on Google, on Maps and in AI answers.",
      services: "Services",
      company: "Company",
      contact: "Contact",
      accessibility: "Accessibility statement",
      rights: "All rights reserved.",
    },
    floating: {
      label: "Quick contact",
      call: "Call us",
      whatsapp: "Message us on WhatsApp",
    },
    common: {
      learnMore: "Learn more",
      faqTitle: "Frequently asked questions",
      home: "Home",
      whatsIncluded: "What's included",
      howItWorks: "How it works",
      goodFit: "A good fit if",
      notFit: "Not the right fit if",
      related: "Related services",
    },
  },
} as const satisfies Record<Lang, unknown>;

export function t(lang: Lang) {
  return ui[lang];
}
