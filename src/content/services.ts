import type { Lang } from "@/i18n";

export type ServiceSlug = "website-development" | "seo" | "ai-search-optimization";

type Item = { title: string; body: string };
type Faq = { q: string; a: string };

export type ServiceContent = {
  name: string;
  short: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  intro: string;
  problem: Item;
  included: Item[];
  process: Item[];
  fit: string[];
  notFit: string[];
  faqs: Faq[];
};

export type Service = {
  slug: ServiceSlug;
  icon: "web" | "search" | "ai";
  related: ServiceSlug[];
  content: Record<Lang, ServiceContent>;
};

export const services: Service[] = [
  {
    slug: "website-development",
    icon: "web",
    related: ["seo", "ai-search-optimization"],
    content: {
      he: {
        name: "בניית אתרים",
        short: "אתר מהיר וברור, שבנוי להימצא בגוגל ולהביא פניות.",
        metaTitle: "בניית אתרים לעסקים שבנויים להימצא בגוגל",
        metaDescription:
          "בניית אתרים לעסקים קטנים ובינוניים: מהירים, מותאמים לנייד, בנויים לקידום בגוגל ובמנועי AI, ועם מסלול ברור ליצירת קשר.",
        eyebrow: "בניית אתרים",
        h1: "אתר שעושה את העבודה: נטען מהר, מסביר ברור ומביא פניות",
        intro:
          "אנחנו בונים אתרים לעסקים קטנים ובינוניים, עם מבנה שגוגל ומנועי ה-AI מבינים, טקסטים שמדברים בשפה של הלקוחות שלכם ודרך פשוטה ליצור קשר מכל מסך.",
        problem: {
          title: "אתר יפה זה לא מספיק",
          body: "הרבה אתרים נראים טוב, אבל נטענים לאט בנייד, לא מסבירים תוך שתי שניות מה העסק עושה, ובנויים כך שגוגל מתקשה להבין אותם. התוצאה: מבקרים שעוזבים ופניות שהולכות למתחרים.",
        },
        included: [
          {
            title: "מבנה עמודים לפי חיפושים",
            body: "כל שירות מקבל עמוד משלו, עם כותרות ותוכן שעונים על מה שהלקוחות באמת מחפשים.",
          },
          {
            title: "מהירות ונייד קודם",
            body: "קוד נקי ותמונות מותאמות, כדי שהאתר ייטען מהר גם בטלפון ובחיבור חלש.",
          },
          {
            title: "תשתית SEO מובנית",
            body: "כותרות, תיאורים, מפת אתר, נתונים מובנים (Schema) וכתובות ברורות, כבר מהיום הראשון.",
          },
          {
            title: "מוכן למנועי AI",
            body: "תוכן בפורמט של שאלה ותשובה ומידע עקבי על העסק, כך שמנועים כמו ChatGPT יוכלו לצטט אתכם.",
          },
          {
            title: "מסלול פנייה ברור",
            body: "טופס קצר, כפתורי חיוג ו-WhatsApp וקריאה לפעולה בכל עמוד.",
          },
          {
            title: "נגישות ושתי שפות",
            body: "התאמה לתקן הנגישות הישראלי, ותמיכה מלאה בעברית ובאנגלית כשצריך.",
          },
        ],
        process: [
          {
            title: "היכרות ואפיון",
            body: "מבינים את העסק, את הלקוחות ואת המתחרים, ומגדירים מה האתר צריך להשיג.",
          },
          {
            title: "מבנה ותוכן",
            body: "בונים מפת עמודים לפי מחקר מילות מפתח, וכותבים או משכתבים את הטקסטים.",
          },
          {
            title: "עיצוב ופיתוח",
            body: "מעצבים לפי המותג שלכם ומפתחים אתר מהיר, נגיש ומותאם לנייד.",
          },
          {
            title: "השקה ומדידה",
            body: "מחברים ל-Google Search Console ולכלי מדידה, ובודקים שהכל עובד לפני העלייה לאוויר ואחריה.",
          },
        ],
        fit: [
          "אין לכם אתר, או שהאתר הנוכחי ישן ואיטי",
          "אתם רוצים שהאתר יהיה הבסיס לקידום בגוגל וב-AI",
          "חשוב לכם שלקוחות יפנו אליכם ישירות מהאתר",
        ],
        notFit: [
          "אתם מחפשים רק עיצוב, בלי קשר לתוצאות",
          "אתם צריכים מערכת מורכבת, כמו חנות עם אלפי מוצרים או אפליקציה",
        ],
        faqs: [
          {
            q: "כמה זמן לוקח לבנות אתר?",
            a: "אתר לעסק קטן לוקח בדרך כלל כמה שבועות, תלוי בכמות העמודים ובזמינות התוכן. בפגישת ההיכרות נגדיר לוח זמנים מדויק.",
          },
          {
            q: "האתר מגיע מוכן לקידום בגוגל?",
            a: "כן. התשתית הטכנית לקידום, כמו מהירות, מבנה כותרות, מפת אתר ונתונים מובנים, נבנית כחלק מהאתר. קידום שוטף, כמו תוכן חדש וחיזוק סמכות, הוא שירות נפרד.",
          },
          {
            q: "אפשר לשפר את האתר הקיים במקום לבנות חדש?",
            a: "לפעמים כן. אנחנו מתחילים בבדיקה של האתר הקיים, ואם התשתית סבירה נמליץ לשפר אותה במקום להתחיל מאפס.",
          },
          {
            q: "האתר יכול להיות בעברית ובאנגלית?",
            a: "כן. אפשר לבנות אתר דו-לשוני, כולל התאמה מלאה לכתיבה מימין לשמאל ותגיות שמסבירות לגוגל איזו גרסה להציג לכל משתמש.",
          },
        ],
      },
      en: {
        name: "Website development",
        short: "Fast, clear websites built to be found and to bring in enquiries.",
        metaTitle: "Website development for businesses that need to be found",
        metaDescription:
          "Websites for small and mid-sized businesses: fast, mobile-first, built for Google and AI search from day one, with a clear path to getting in touch.",
        eyebrow: "Website development",
        h1: "A website that does its job: loads fast, explains clearly, brings in enquiries",
        intro:
          "We build websites for small and mid-sized businesses, with a structure Google and AI engines understand, copy written in your customers' language, and an easy way to reach you from every screen.",
        problem: {
          title: "Looking good isn't enough",
          body: "Plenty of websites look great but load slowly on mobile, take too long to say what the business does, and are built in a way Google struggles to read. Visitors leave, and the enquiries go to competitors.",
        },
        included: [
          {
            title: "Page structure built around searches",
            body: "Every service gets its own page, with headings and copy that answer what customers actually search for.",
          },
          {
            title: "Speed and mobile first",
            body: "Clean code and optimized images, so pages load fast even on a phone with a weak connection.",
          },
          {
            title: "SEO foundations built in",
            body: "Titles, descriptions, sitemap, structured data (schema) and clean URLs from day one.",
          },
          {
            title: "Ready for AI engines",
            body: "Question-and-answer content and consistent business details, so engines like ChatGPT can cite you.",
          },
          {
            title: "A clear path to contact",
            body: "A short form, call and WhatsApp buttons, and a call to action on every page.",
          },
          {
            title: "Accessible and bilingual",
            body: "Built to accessibility standards, with full Hebrew and English support when you need it.",
          },
        ],
        process: [
          {
            title: "Discovery",
            body: "We learn your business, customers and competitors, and define what the site needs to achieve.",
          },
          {
            title: "Structure and content",
            body: "We map pages from keyword research, then write or rewrite the copy.",
          },
          {
            title: "Design and build",
            body: "We design around your brand and build a fast, accessible, mobile-first site.",
          },
          {
            title: "Launch and measurement",
            body: "We connect Google Search Console and analytics, and check everything works before and after launch.",
          },
        ],
        fit: [
          "You don't have a website, or yours is old and slow",
          "You want the site to be the foundation for Google and AI visibility",
          "You want customers to contact you directly from the site",
        ],
        notFit: [
          "You only want a visual redesign, regardless of results",
          "You need a complex system, like a store with thousands of products or an app",
        ],
        faqs: [
          {
            q: "How long does it take to build a website?",
            a: "A small-business website usually takes a few weeks, depending on the number of pages and how quickly content is ready. We set an exact timeline in our first meeting.",
          },
          {
            q: "Is the site ready for SEO when it launches?",
            a: "Yes. Technical SEO foundations like speed, heading structure, sitemap and structured data are part of the build. Ongoing SEO, like new content and building authority, is a separate service.",
          },
          {
            q: "Can you improve my existing site instead of building a new one?",
            a: "Sometimes, yes. We start by reviewing your current site, and if the foundation is reasonable we'll recommend improving it rather than starting over.",
          },
          {
            q: "Can the site be in both Hebrew and English?",
            a: "Yes. We build bilingual sites with full right-to-left support for Hebrew, plus the tags that tell Google which version to show each visitor.",
          },
        ],
      },
    },
  },
  {
    slug: "seo",
    icon: "search",
    related: ["ai-search-optimization", "website-development"],
    content: {
      he: {
        name: "קידום אתרים בגוגל",
        short: "להופיע גבוה בחיפוש ובגוגל מפות, כשמחפשים בדיוק את מה שאתם עושים.",
        metaTitle: "קידום אתרים אורגני בגוגל ובגוגל מפות לעסקים",
        metaDescription:
          "קידום אורגני לעסקים קטנים ובינוניים: מחקר מילות מפתח, SEO טכני, תוכן, קידום מקומי ופרופיל עסק בגוגל, עם דוח חודשי בשפה פשוטה.",
        eyebrow: "קידום בגוגל (SEO)",
        h1: "להופיע בגוגל בדיוק כשלקוחות מחפשים את מה שאתם עושים",
        intro:
          "קידום אורגני בחיפוש ובגוגל מפות, שמתמקד בחיפושים שמביאים פניות ולא רק תנועה: מחקר, תיקונים טכניים, תוכן ופרופיל העסק בגוגל.",
        problem: {
          title: "רוב הלקוחות לא מגיעים לעמוד השני",
          body: "כשמישהו מחפש \"רואה חשבון ברמת גן\" או \"שיפוצים בחיפה\", הוא בוחר מבין התוצאות הראשונות ומפת העסקים. אם אתם לא שם, הפנייה הולכת למתחרה, גם אם השירות שלכם טוב יותר.",
        },
        included: [
          {
            title: "מחקר מילות מפתח עם כוונת קנייה",
            body: "מאתרים את החיפושים שאנשים עושים רגע לפני שהם פונים לעסק כמו שלכם.",
          },
          {
            title: "SEO טכני",
            body: "מהירות, סריקה ואינדוקס, מבנה כתובות, נתונים מובנים ותיקון שגיאות שמעכבות את האתר.",
          },
          {
            title: "עמודים ותוכן",
            body: "שיפור עמודים קיימים ויצירת עמודי שירות ואזורי שירות שעונים על השאלות של הלקוחות.",
          },
          {
            title: "קידום מקומי וגוגל מפות",
            body: "אופטימיזציה של פרופיל העסק בגוגל: קטגוריות, תמונות, פוסטים ופרטי עסק עקביים ברחבי הרשת.",
          },
          {
            title: "חיזוק סמכות",
            body: "אזכורים וקישורים מאתרים רלוונטיים ואמינים, בלי קיצורי דרך מסוכנים.",
          },
          {
            title: "דוח חודשי ברור",
            body: "מה עשינו, מה השתנה בדירוגים ובפניות ומה הצעד הבא, בשפה פשוטה.",
          },
        ],
        process: [
          {
            title: "בדיקת נראות",
            body: "בודקים איפה אתם מופיעים היום, מה מעכב את האתר ואיפה המתחרים מקדימים אתכם.",
          },
          {
            title: "תוכנית עבודה",
            body: "מתעדפים לפי ההשפעה הצפויה: קודם מה שיביא פניות הכי מהר.",
          },
          {
            title: "ביצוע שוטף",
            body: "תיקונים טכניים, תוכן, פרופיל העסק וחיזוק סמכות, באופן קבוע.",
          },
          {
            title: "מדידה ושיפור",
            body: "עוקבים אחרי דירוגים, תנועה ופניות, ומעדכנים את התוכנית כל חודש.",
          },
        ],
        fit: [
          "יש לכם לקוחות שמחפשים את השירות שלכם בגוגל",
          "אתם מוכנים להשקיע כמה חודשים כדי לבנות תוצאות יציבות",
          "אתם רוצים להפחית את התלות בפרסום ממומן",
        ],
        notFit: [
          "אתם צריכים פניות כבר מחר בבוקר. לזה פרסום ממומן מתאים יותר",
          "אתם מחפשים הבטחה למקום ראשון. אף אחד לא יכול להבטיח את זה ביושר",
        ],
        faqs: [
          {
            q: "תוך כמה זמן רואים תוצאות?",
            a: "שיפורים טכניים ושיפורים בפרופיל העסק יכולים להשפיע תוך שבועות. דירוגים יציבים בביטויים תחרותיים לוקחים בדרך כלל כמה חודשים. כבר בבדיקה הראשונית נציג לכם מה מציאותי בתחום שלכם.",
          },
          {
            q: "אתם מבטיחים מקום ראשון בגוגל?",
            a: "לא. אף אחד לא יכול להבטיח מיקום בגוגל, ומי שמבטיח עלול להשתמש בשיטות שמסכנות את האתר. אנחנו מתחייבים לעבודה שקופה ולמדידה של מה שבאמת חשוב: פניות.",
          },
          {
            q: "מה ההבדל בין קידום אורגני לפרסום ממומן?",
            a: "בפרסום ממומן משלמים על כל קליק, והתנועה נעצרת כשמפסיקים לשלם. קידום אורגני בונה נכס: ככל שהאתר מתחזק, הוא ממשיך להביא תנועה בלי תשלום על כל ביקור.",
          },
          {
            q: "הקידום כולל את פרופיל העסק בגוגל?",
            a: "כן. לעסקים מקומיים, פרופיל העסק בגוגל ומפות הם לרוב המקור הגדול ביותר לשיחות ולפניות, ולכן הוא חלק מרכזי בעבודה.",
          },
        ],
      },
      en: {
        name: "SEO",
        short: "Rank on Google Search and Maps when people look for exactly what you do.",
        metaTitle: "Organic SEO for Google Search and Google Maps",
        metaDescription:
          "Organic SEO for small and mid-sized businesses: keyword research, technical SEO, content, local SEO and Google Business Profile, with a plain-language monthly report.",
        eyebrow: "Search engine optimization",
        h1: "Show up on Google exactly when customers search for what you do",
        intro:
          "Organic SEO for Search and Google Maps, focused on the searches that bring enquiries, not just traffic: research, technical fixes, content and your Google Business Profile.",
        problem: {
          title: "Most customers never reach page two",
          body: "When someone searches \"accountant in Tel Aviv\" or \"kitchen renovation Haifa\", they choose from the top results and the map pack. If you're not there, the enquiry goes to a competitor, even if your service is better.",
        },
        included: [
          {
            title: "Keyword research with buying intent",
            body: "We find the searches people make right before they contact a business like yours.",
          },
          {
            title: "Technical SEO",
            body: "Speed, crawling and indexing, URL structure, structured data, and fixing errors that hold the site back.",
          },
          {
            title: "Pages and content",
            body: "We improve existing pages and create service and location pages that answer customers' questions.",
          },
          {
            title: "Local SEO and Google Maps",
            body: "Google Business Profile optimization: categories, photos, posts and consistent business details across the web.",
          },
          {
            title: "Building authority",
            body: "Mentions and links from relevant, trustworthy sites, with no risky shortcuts.",
          },
          {
            title: "A clear monthly report",
            body: "What we did, what changed in rankings and enquiries, and what's next, in plain language.",
          },
        ],
        process: [
          {
            title: "Visibility audit",
            body: "We check where you show up today, what's holding the site back and where competitors are ahead.",
          },
          {
            title: "Action plan",
            body: "We prioritize by expected impact: whatever brings enquiries fastest comes first.",
          },
          {
            title: "Ongoing execution",
            body: "Technical fixes, content, your business profile and authority building, every month.",
          },
          {
            title: "Measure and improve",
            body: "We track rankings, traffic and enquiries, and update the plan every month.",
          },
        ],
        fit: [
          "Your customers search for your service on Google",
          "You're willing to invest a few months to build lasting results",
          "You want to depend less on paid ads",
        ],
        notFit: [
          "You need leads tomorrow morning. Paid ads are a better fit for that",
          "You want a guaranteed #1 ranking. Nobody can honestly promise that",
        ],
        faqs: [
          {
            q: "How long until I see results?",
            a: "Technical and business-profile improvements can make a difference within weeks. Stable rankings for competitive terms usually take a few months. We'll show you what's realistic for your market in the initial audit.",
          },
          {
            q: "Do you guarantee a #1 ranking on Google?",
            a: "No. Nobody can guarantee a position on Google, and anyone who does may be using tactics that put your site at risk. We commit to transparent work and to measuring what matters: enquiries.",
          },
          {
            q: "What's the difference between SEO and paid ads?",
            a: "With paid ads you pay for every click, and traffic stops when you stop paying. SEO builds an asset: as the site grows stronger, it keeps bringing visitors without paying for each one.",
          },
          {
            q: "Does SEO include my Google Business Profile?",
            a: "Yes. For local businesses, the Google Business Profile and Maps are often the biggest source of calls and enquiries, so they're a core part of the work.",
          },
        ],
      },
    },
  },
  {
    slug: "ai-search-optimization",
    icon: "ai",
    related: ["seo", "website-development"],
    content: {
      he: {
        name: "קידום במנועי AI",
        short: "שהעסק שלכם יומלץ בתשובות של ChatGPT, Gemini ו-Google AI Overviews.",
        metaTitle: "קידום במנועי AI וב-ChatGPT (GEO) לעסקים",
        metaDescription:
          "קידום GEO לעסקים: בודקים מה ChatGPT, Gemini, Perplexity ו-Google AI Overviews עונים על התחום שלכם, ובונים את המידע והסמכות שיגרמו להם להמליץ עליכם.",
        eyebrow: "קידום במנועי AI (GEO)",
        h1: "כשלקוחות שואלים את ChatGPT, שהעסק שלכם יהיה בתשובה",
        intro:
          "יותר ויותר אנשים מבקשים המלצות מצ'אטים ומתשובות ה-AI של גוגל, במקום לעבור על רשימת תוצאות. אנחנו עוזרים למנועים האלה להכיר את העסק שלכם, לסמוך עליו ולהזכיר אותו.",
        problem: {
          title: "בתשובה של AI יש מקום רק לכמה שמות",
          body: "כשמישהו שואל \"איזה רואה חשבון מומלץ לעסק קטן במרכז?\", הצ'אט עונה עם שניים או שלושה שמות. המנועים בוחרים עסקים שהמידע עליהם ברור, עקבי ונתמך במקורות אמינים. אם המידע עליכם חסר או סותר, הם ימליצו על מישהו אחר.",
        },
        included: [
          {
            title: "בדיקת נראות ב-AI",
            body: "שואלים את ChatGPT, Gemini, Perplexity ו-Google AI Overviews את השאלות שהלקוחות שלכם שואלים, ומתעדים מי מוזכר, אילו מקורות מצוטטים ואיפה אתם חסרים.",
          },
          {
            title: "זהות עסק ברורה ועקבית",
            body: "שם, תחום, אזור שירות ופרטי קשר זהים באתר, בפרופיל העסק בגוגל ובאתרים חיצוניים, עם נתונים מובנים (Schema).",
          },
          {
            title: "תוכן שקל לצטט",
            body: "עמודים שעונים ישירות על שאלות, עם עובדות והסברים ברורים, בפורמט שקל לחלץ ממנו תשובה.",
          },
          {
            title: "סמכות ממקורות חיצוניים",
            body: "אזכורים בכתבות, באינדקסים, בביקורות ובאתרי תוכן שהמנועים נשענים עליהם.",
          },
          {
            title: "תשתית טכנית",
            body: "גישה של סורקי AI לאתר, קובץ llms.txt, מפת אתר ועמודים מהירים שקל לקרוא.",
          },
          {
            title: "מעקב חודשי",
            body: "בודקים כל חודש את אותן שאלות, ומדווחים על אזכורים, ציטוטים ותנועה שמגיעה מצ'אטים.",
          },
        ],
        process: [
          {
            title: "מיפוי השאלות",
            body: "מגדירים את השאלות שלקוחות שואלים לפני שהם בוחרים עסק בתחום שלכם.",
          },
          {
            title: "בדיקת מצב קיים",
            body: "מריצים את השאלות במנועים השונים ומזהים את הפערים מול המתחרים.",
          },
          {
            title: "סגירת פערים",
            body: "מתקנים את המידע על העסק, מוסיפים תוכן חסר ומחזקים אזכורים חיצוניים.",
          },
          {
            title: "מעקב ושיפור",
            body: "מודדים כל חודש ומתעדפים מחדש לפי מה שמשתנה.",
          },
        ],
        fit: [
          "לקוחות בתחום שלכם משווים ובודקים לפני שהם בוחרים",
          "כבר יש לכם אתר ופרופיל עסק, ואתם רוצים להקדים את המתחרים",
          "חשוב לכם להופיע גם בגוגל וגם בצ'אטים",
        ],
        notFit: [
          "אתם מחפשים הבטחה שהצ'אט ימליץ עליכם. אי אפשר להבטיח את זה ביושר",
          "עדיין אין לכם אתר. במקרה כזה מתחילים מבניית אתר",
        ],
        faqs: [
          {
            q: "מה זה GEO?",
            a: "GEO (Generative Engine Optimization) הוא קידום שמטרתו להופיע בתשובות שמנועי AI מייצרים, כמו ChatGPT, Gemini, Perplexity ו-Google AI Overviews. בקידום רגיל המטרה היא מקום ברשימת התוצאות. ב-GEO המטרה היא שהעסק יוזכר או יצוטט בתוך התשובה עצמה.",
          },
          {
            q: "זה מחליף קידום בגוגל?",
            a: "לא, זה משלים אותו. מנועי AI נשענים במידה רבה על אותו מידע שגוגל מדרג: האתר שלכם, פרופיל העסק, ביקורות ואזכורים. בסיס SEO חזק מקל מאוד על קידום ב-AI.",
          },
          {
            q: "אתם יכולים להבטיח שהצ'אט ימליץ עליי?",
            a: "לא, ואף אחד לא יכול להבטיח את זה ביושר. מה שאפשר לעשות זה לסגור כל פער שבשליטתנו, ולמדוד כל חודש אם האזכורים שלכם עולים.",
          },
          {
            q: "איך מודדים תוצאות?",
            a: "בודקים קבוצה קבועה של שאלות בכל מנוע, ועוקבים אחרי כמה פעמים אתם מוזכרים, אילו עמודים שלכם מצוטטים וכמה ביקורים מגיעים לאתר מצ'אטים.",
          },
        ],
      },
      en: {
        name: "AI search optimization",
        short: "Get recommended in ChatGPT, Gemini, Perplexity and Google AI Overviews.",
        metaTitle: "AI search optimization (GEO) for ChatGPT, Gemini and AI Overviews",
        metaDescription:
          "Generative engine optimization for businesses: we check what ChatGPT, Gemini, Perplexity and Google AI Overviews say about your market, then build the information and authority that gets you recommended.",
        eyebrow: "AI search optimization (GEO)",
        h1: "When customers ask ChatGPT, make sure your business is in the answer",
        intro:
          "More and more people ask chatbots and Google's AI answers for recommendations instead of scanning a list of results. We help those engines know your business, trust it and mention it.",
        problem: {
          title: "An AI answer only has room for a few names",
          body: "When someone asks \"which accountant do you recommend for a small business in Tel Aviv?\", the chatbot replies with two or three names. Engines pick businesses whose information is clear, consistent and backed by trusted sources. If yours is missing or contradictory, they'll recommend someone else.",
        },
        included: [
          {
            title: "AI visibility audit",
            body: "We ask ChatGPT, Gemini, Perplexity and Google AI Overviews the questions your customers ask, and log who gets mentioned, which sources are cited and where you're missing.",
          },
          {
            title: "A clear, consistent business identity",
            body: "The same name, category, service area and contact details on your site, your Google Business Profile and other sites, backed by structured data.",
          },
          {
            title: "Content that's easy to cite",
            body: "Pages that answer questions directly, with clear facts and explanations, in a format engines can lift an answer from.",
          },
          {
            title: "Authority from outside sources",
            body: "Mentions in articles, directories, reviews and the content sites AI engines rely on.",
          },
          {
            title: "Technical groundwork",
            body: "Access for AI crawlers, an llms.txt file, a sitemap and fast pages that are easy to read.",
          },
          {
            title: "Monthly tracking",
            body: "We re-run the same questions every month and report on mentions, citations and traffic coming from chatbots.",
          },
        ],
        process: [
          {
            title: "Map the questions",
            body: "We define the questions customers ask before they choose a business in your field.",
          },
          {
            title: "Check where you stand",
            body: "We run those questions across the engines and identify the gaps versus competitors.",
          },
          {
            title: "Close the gaps",
            body: "We fix your business information, add missing content and strengthen outside mentions.",
          },
          {
            title: "Track and improve",
            body: "We measure every month and re-prioritize based on what moves.",
          },
        ],
        fit: [
          "Customers in your field compare options before they choose",
          "You already have a website and business profile, and want to get ahead of competitors",
          "You want to show up on Google and in chatbots",
        ],
        notFit: [
          "You want a guarantee that chatbots will recommend you. Nobody can honestly promise that",
          "You don't have a website yet. In that case, start with website development",
        ],
        faqs: [
          {
            q: "What is GEO?",
            a: "GEO (generative engine optimization) is the practice of getting your business into the answers AI engines generate, such as ChatGPT, Gemini, Perplexity and Google AI Overviews. Traditional SEO aims for a position in a list of results. GEO aims for your business to be mentioned or cited inside the answer itself.",
          },
          {
            q: "Does it replace SEO?",
            a: "No, it complements it. AI engines rely heavily on the same information Google ranks: your website, your business profile, reviews and mentions. A strong SEO foundation makes AI visibility much easier.",
          },
          {
            q: "Can you guarantee that chatbots will recommend me?",
            a: "No, and nobody can honestly guarantee it. What we can do is close every gap within our control and measure every month whether your mentions are growing.",
          },
          {
            q: "How do you measure results?",
            a: "We test a fixed set of questions in each engine and track how often you're mentioned, which of your pages are cited, and how many visits reach your site from chatbots.",
          },
        ],
      },
    },
  },
];

export function getService(slug: ServiceSlug): Service {
  const service = services.find((s) => s.slug === slug);
  if (!service) throw new Error(`Unknown service: ${slug}`);
  return service;
}
