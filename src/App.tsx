import type { ReactNode } from "react";
import "./App.css";
import logo from "/FISRTOPTION-LOGO-removebg-preview (1).png";
import flutterwaveLogo from "/Flutterwave_whitebg.svg";

type AppProps = {
  initialPath?: string;
  initialSearch?: string;
};

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

type ServiceHighlight = {
  label: string;
  title: string;
  body: string;
};

type ServicePageConfig = {
  slug: string;
  path: string;
  name: string;
  badge: string;
  h1: string;
  icon: string;
  cardDesc: string;
  heroDescription: string;
  highlights: ServiceHighlight[];
  steps: string[];
  reasons: string[];
  related: string[];
  ctaTitle: string;
  ctaDescription: string;
};

const PRODUCTION_WHATSAPP_NUMBER = "2349060689011";
const OFFICIAL_WHATSAPP_DISPLAY = "+234 906 068 9011";
const WHATSAPP_GREETING = "Hi";
const WHATSAPP_START_URL = `https://wa.me/${PRODUCTION_WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_GREETING)}`;
const WEBSITE_URL = "https://www.thefirstoption.com.ng";
const BACKEND_BASE_URL = "https://firstoption.onrender.com";
const LEGAL_NAME = "FIRSTOPTION DIGITAL SERVICES";
const SUPPORT_EMAIL = "support@thefirstoption.com.ng";
const SUPPORT_EMAIL_LINK = `mailto:${SUPPORT_EMAIL}`;
const CAC_BUSINESS_NUMBER = "9443317";
const OPERATING_COUNTRY = "Nigeria";

const SOCIAL_LINKS: FooterLink[] = [
  { label: "Instagram", href: "https://www.instagram.com/firstoptionng", external: true },
  { label: "X / Twitter", href: "https://x.com/firstoptionng", external: true },
  { label: "TikTok", href: "https://www.tiktok.com/@firstoptionng", external: true },
  { label: "Telegram", href: "https://t.me/firstoptionng", external: true },
];

const LEGAL_LINKS: FooterLink[] = [
  { label: "Privacy Policy", href: `${BACKEND_BASE_URL}/privacy`, external: true },
  { label: "Terms of Service", href: `${BACKEND_BASE_URL}/terms`, external: true },
  { label: "Data Deletion", href: `${BACKEND_BASE_URL}/data-deletion`, external: true },
];

const PRIMARY_NAV_LINKS: FooterLink[] = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Official", href: "/official-whatsapp" },
];

const COMPANY_LINKS: FooterLink[] = [
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Official WhatsApp", href: "/official-whatsapp" },
  { label: "Anti-Scam Guide", href: "/anti-scam" },
];

const SERVICE_PAGES: ServicePageConfig[] = [
  {
    slug: "airtime",
    path: "/services/airtime",
    name: "Airtime Top-Up",
    badge: "AIRTIME TOP-UP",
    h1: "Buy Airtime on WhatsApp in Nigeria",
    icon: "📱",
    cardDesc: "Top up MTN, Airtel, Glo and 9mobile from one verified WhatsApp channel.",
    heroDescription:
      "Use FirstOption to buy MTN, Airtel, Glo and 9mobile airtime through one official WhatsApp chat in Nigeria, with a faster repeat-payment flow once your wallet is funded.",
    highlights: [
      {
        label: "Networks",
        title: "Major Nigerian networks",
        body: "Airtime requests are designed around everyday top-up needs across MTN, Airtel, Glo and 9mobile inside the same official chat.",
      },
      {
        label: "Repeat Use",
        title: "Fast day-to-day top-ups",
        body: "The wallet-first setup reduces friction when you need to buy airtime regularly instead of repeating a fresh transfer every time.",
      },
      {
        label: "Support",
        title: "One visible support trail",
        body: "The same public WhatsApp number and support email stay consistent across the website when you need to verify a transaction or ask for help.",
      },
    ],
    steps: [
      "Start from the official WhatsApp number and choose airtime from the service menu.",
      "Select the network, amount and destination number carefully before confirming.",
      "Stay in the same conversation for balance checks, receipts and support follow-up if needed.",
    ],
    reasons: [
      "Airtime remains one of the most frequent digital purchases for Nigerians, so speed and clarity matter.",
      "Keeping the flow in WhatsApp reduces app switching for simple, repeat purchases.",
      "Public trust pages make it easier to verify the official route before you pay.",
    ],
    related: ["data-bundles", "electricity", "exam-pins"],
    ctaTitle: "Top Up Airtime From One Official Chat",
    ctaDescription:
      "Open the official WhatsApp conversation to buy airtime in Nigeria and keep the support trail in the same verified channel.",
  },
  {
    slug: "data-bundles",
    path: "/services/data-bundles",
    name: "Data Bundles",
    badge: "DATA BUNDLES",
    h1: "Buy Data Bundles on WhatsApp in Nigeria",
    icon: "📶",
    cardDesc: "Access data bundle flows for major networks through one official WhatsApp route.",
    heroDescription:
      "Use FirstOption on WhatsApp to buy data bundles in Nigeria without leaving the conversation, whether you are topping up for everyday browsing or repeat network use.",
    highlights: [
      {
        label: "Networks",
        title: "Built for common Nigerian network use",
        body: "The data flow is designed for the network choices users make most often in Nigeria, keeping the purchase inside one guided chat.",
      },
      {
        label: "Convenience",
        title: "Fewer steps for repeat users",
        body: "Once your wallet is funded, repeat data purchases become easier to complete without restarting the whole payment process every time.",
      },
      {
        label: "Verification",
        title: "Official support stays visible",
        body: "The site, number and email stay aligned so users can cross-check the brand before any data purchase or support conversation.",
      },
    ],
    steps: [
      "Open the official WhatsApp chat and choose the data option from the service menu.",
      "Select the network and bundle that matches your intended use before confirming.",
      "Return to the same chat if you need support, a balance check or transaction clarification.",
    ],
    reasons: [
      "Data is a daily utility purchase for many Nigerians, so repeat access needs a low-friction flow.",
      "WhatsApp-based service selection is easier for users who already operate through chat-first habits.",
      "FirstOption keeps the trust layer public so the official route remains easy to verify.",
    ],
    related: ["airtime", "internet", "electricity"],
    ctaTitle: "Open the Data Bundle Flow on WhatsApp",
    ctaDescription:
      "Start from the official FirstOption chat to buy data bundles in Nigeria and keep support inside the same verified conversation.",
  },
  {
    slug: "electricity",
    path: "/services/electricity",
    name: "Electricity Tokens",
    badge: "ELECTRICITY TOKENS",
    h1: "Pay Electricity Bills on WhatsApp in Nigeria",
    icon: "💡",
    cardDesc: "Handle prepaid electricity token purchases through one official WhatsApp service flow.",
    heroDescription:
      "Use FirstOption to handle electricity bill and token requests on WhatsApp in Nigeria, with a wallet-first flow that reduces repeated payment friction.",
    highlights: [
      {
        label: "Utility",
        title: "Built for routine bill payments",
        body: "Electricity is a repeat household payment, so the service flow is designed around clarity, confirmation and support visibility.",
      },
      {
        label: "Speed",
        title: "One chat for the full process",
        body: "You do not need to jump across multiple apps when the service request, verification path and support channel all stay inside one official flow.",
      },
      {
        label: "Trust",
        title: "Public verification matters",
        body: "Utility payments are trust-sensitive, so the website keeps the official WhatsApp number, email and legal links easy to verify.",
      },
    ],
    steps: [
      "Start from the official WhatsApp number and choose electricity from the menu.",
      "Follow the guided steps carefully with the correct meter-related details before confirming.",
      "Use the same support path if you need follow-up on a payment or token issue.",
    ],
    reasons: [
      "Bill payments in Nigeria are recurring and sensitive, so users need a clear official channel.",
      "A wallet-first model helps speed up repeat payments without losing control of support history.",
      "Strong public trust signals reduce impersonation risk for utility-related transactions.",
    ],
    related: ["cable-tv", "wallet-funding", "contact"],
    ctaTitle: "Handle Electricity Payments From the Official Chat",
    ctaDescription:
      "Use the verified FirstOption WhatsApp route for electricity-related payments and keep the support history tied to the same official conversation.",
  },
  {
    slug: "cable-tv",
    path: "/services/cable-tv",
    name: "Cable TV",
    badge: "CABLE TV",
    h1: "Renew Cable TV on WhatsApp in Nigeria",
    icon: "📺",
    cardDesc: "Renew or manage common cable TV subscriptions through one official WhatsApp channel.",
    heroDescription:
      "Use FirstOption to handle cable TV renewal requests on WhatsApp in Nigeria, including the kind of everyday subscription actions users want to complete quickly.",
    highlights: [
      {
        label: "Subscriptions",
        title: "Renew without leaving chat",
        body: "Cable TV renewals are treated as practical repeat payments that can live in the same official conversation as your other service requests.",
      },
      {
        label: "Flow",
        title: "Guided and easier to verify",
        body: "The service flow keeps the brand, support details and payment route visible so users can verify they are transacting with the real FirstOption footprint.",
      },
      {
        label: "Support",
        title: "One place for follow-up",
        body: "If you need clarification, your support path remains the same public WhatsApp number and email listed across the site.",
      },
    ],
    steps: [
      "Open the official WhatsApp chat and choose cable TV from the available service options.",
      "Follow the guided subscription details carefully before confirming the transaction.",
      "Keep the same conversation open for support and future repeat renewals.",
    ],
    reasons: [
      "Cable renewals are routine household purchases and benefit from a predictable support path.",
      "A single official chat lowers friction compared to moving between multiple channels.",
      "Public legal and anti-scam pages strengthen trust for subscription-related payments.",
    ],
    related: ["electricity", "wallet-funding", "contact"],
    ctaTitle: "Renew Cable TV Through One Official Channel",
    ctaDescription:
      "Start from the official WhatsApp number to handle cable TV renewals in Nigeria and keep your support trail inside the same verified path.",
  },
  {
    slug: "betting-funding",
    path: "/services/betting-funding",
    name: "Betting Funding",
    badge: "BETTING FUNDING",
    h1: "Fund Betting Wallets on WhatsApp in Nigeria",
    icon: "🎯",
    cardDesc: "Use the official chat to handle betting wallet funding through the visible FirstOption support path.",
    heroDescription:
      "FirstOption supports betting wallet funding flows on WhatsApp in Nigeria so users can work from one visible support path instead of random forwarded payment instructions.",
    highlights: [
      {
        label: "Use Case",
        title: "Built for fast wallet top-ups",
        body: "Betting-related funding is treated as a repeat digital need where clarity, speed and brand verification matter before a transaction is made.",
      },
      {
        label: "Safety",
        title: "Avoid random payment routes",
        body: "The official site, WhatsApp number and anti-scam guide make it easier to reject unverified instructions before sending money.",
      },
      {
        label: "Support",
        title: "Same contact route for follow-up",
        body: "If anything needs clarification, users can return to the same public support channels instead of chasing scattered contact points.",
      },
    ],
    steps: [
      "Start from the official WhatsApp link and choose the betting funding option.",
      "Follow the guided flow for the platform and funding details you need.",
      "Use the same official conversation or support email if you need follow-up after funding.",
    ],
    reasons: [
      "Funding flows are especially sensitive to impersonation, so public verification is critical.",
      "One consistent channel is easier to trust than scattered payment requests from unknown numbers.",
      "The wallet-first model helps repeat users move faster once their balance is ready.",
    ],
    related: ["wallet-funding", "airtime-to-cash", "contact"],
    ctaTitle: "Use the Official Betting Funding Route",
    ctaDescription:
      "Start from the official FirstOption WhatsApp chat for betting wallet funding in Nigeria and verify the public support details before proceeding.",
  },
  {
    slug: "airtime-to-cash",
    path: "/services/airtime-to-cash",
    name: "Airtime to Cash",
    badge: "AIRTIME TO CASH",
    h1: "Convert Airtime to Cash on WhatsApp in Nigeria",
    icon: "💸",
    cardDesc: "Handle airtime-to-cash requests through one official FirstOption verification path.",
    heroDescription:
      "Use FirstOption to handle airtime-to-cash requests on WhatsApp in Nigeria through a visible public route that keeps support and verification easier to track.",
    highlights: [
      {
        label: "Conversion",
        title: "Built for excess airtime use cases",
        body: "The service is framed around users who need a clearer, more structured route when converting excess airtime to value.",
      },
      {
        label: "Checks",
        title: "Verification before action",
        body: "Because conversion requests are sensitive, the site keeps official contact details and anti-scam guidance visible before you proceed.",
      },
      {
        label: "Follow-up",
        title: "Support stays tied to the same trail",
        body: "The same public contact points remain available if you need clarification after an airtime-to-cash request.",
      },
    ],
    steps: [
      "Open the official WhatsApp number and choose the airtime-to-cash option when available.",
      "Follow the guided details carefully and verify the public support path before acting on any instruction.",
      "Return to the same official conversation if you need transaction support afterward.",
    ],
    reasons: [
      "Airtime conversion requests are more trust-sensitive than ordinary top-ups or bill payments.",
      "Public verification reduces the risk of users responding to fake support or impersonation attempts.",
      "Keeping the whole flow inside one known channel makes support easier to trace.",
    ],
    related: ["airtime", "betting-funding", "official-whatsapp"],
    ctaTitle: "Verify the Route Before Any Airtime Conversion",
    ctaDescription:
      "Start from the official FirstOption site and WhatsApp number when handling airtime-to-cash requests in Nigeria.",
  },
  {
    slug: "exam-pins",
    path: "/services/exam-pins",
    name: "Exam Pins",
    badge: "EXAM PINS",
    h1: "Buy Exam Pins on WhatsApp in Nigeria",
    icon: "📝",
    cardDesc: "Access exam pin requests through one official WhatsApp support path in Nigeria.",
    heroDescription:
      "Use FirstOption to handle exam pin requests on WhatsApp in Nigeria through a clear public route that keeps the service flow, support and trust signals aligned.",
    highlights: [
      {
        label: "Use Case",
        title: "Useful for time-sensitive requests",
        body: "Exam-related purchases are often urgent, so the service flow is designed around a visible official route and practical support access.",
      },
      {
        label: "Clarity",
        title: "One support path matters",
        body: "When users are buying something time-sensitive, it helps to keep the support channel and verification details in one place.",
      },
      {
        label: "Trust",
        title: "Brand details remain public",
        body: "The site keeps the legal name, support email, official WhatsApp number and trust pages visible so users know they are on the official footprint.",
      },
    ],
    steps: [
      "Start from the official WhatsApp number and choose the exam pin option when you need it.",
      "Follow the guided request details carefully before confirming payment or wallet use.",
      "Return to the same support trail if you need clarification after the purchase.",
    ],
    reasons: [
      "Exam-related purchases are often urgent and benefit from a straightforward chat-first route.",
      "Users need a public way to verify the real business before paying under time pressure.",
      "Keeping support centralized reduces confusion when a follow-up is needed.",
    ],
    related: ["airtime", "data-bundles", "contact"],
    ctaTitle: "Handle Exam Pin Requests Through the Official Chat",
    ctaDescription:
      "Use the public FirstOption WhatsApp channel for exam pin requests in Nigeria and keep the support path easy to verify.",
  },
  {
    slug: "internet",
    path: "/services/internet",
    name: "Internet Subscriptions",
    badge: "INTERNET SUBSCRIPTIONS",
    h1: "Pay for Internet Subscriptions on WhatsApp in Nigeria",
    icon: "🌐",
    cardDesc: "Handle internet subscription requests from one official WhatsApp-based service route.",
    heroDescription:
      "Use FirstOption to handle internet subscription requests on WhatsApp in Nigeria through a public, verifiable support path designed for repeat service purchases.",
    highlights: [
      {
        label: "Providers",
        title: "Made for practical subscription use",
        body: "Internet subscriptions are treated as real repeat digital service needs, not filler pages, so the copy and links stay grounded in actual use cases.",
      },
      {
        label: "Repeat Flow",
        title: "Better for recurring payments",
        body: "The wallet-first model helps repeated subscription-related requests move faster after your balance is already ready in the same chat flow.",
      },
      {
        label: "Verification",
        title: "Trust signals stay visible",
        body: "Users can verify the website, official WhatsApp number and support email before acting on any subscription instruction.",
      },
    ],
    steps: [
      "Open the official WhatsApp chat and choose the internet subscription flow.",
      "Provide the requested subscription details carefully before confirming.",
      "Use the same conversation or contact page if you need follow-up after payment.",
    ],
    reasons: [
      "Internet subscriptions are recurring and fit well with a wallet-first payment model.",
      "Users benefit from having one public route for both purchase and support.",
      "A visible official footprint reduces doubt before making repeat subscription payments.",
    ],
    related: ["data-bundles", "electricity", "wallet-funding"],
    ctaTitle: "Use the Official Internet Subscription Flow",
    ctaDescription:
      "Start from the FirstOption WhatsApp chat for internet subscription requests in Nigeria and keep the support trail inside the same official route.",
  },
];

const SERVICE_LINKS: FooterLink[] = [
  { label: "Airtime Top-Up", href: "/services/airtime" },
  { label: "Electricity Tokens", href: "/services/electricity" },
  { label: "Wallet Funding", href: "/wallet-funding" },
];

const LIVE_SERVICES = [
  "Airtime top-up across major Nigerian networks",
  "Data bundles and internet subscriptions",
  "Electricity token payments and cable TV renewals",
  "Betting wallet funding, exam pins and airtime to cash",
];

const CONTACT_CHANNELS = [
  {
    label: "Official WhatsApp",
    value: OFFICIAL_WHATSAPP_DISPLAY,
    note: "Start with a simple Hi to open the live menu and continue support in the same chat.",
    href: WHATSAPP_START_URL,
    external: true,
  },
  {
    label: "Support Email",
    value: SUPPORT_EMAIL,
    note: "Use email for follow-up, support escalation and formal business communication.",
    href: SUPPORT_EMAIL_LINK,
  },
  {
    label: "Official Website",
    value: "www.thefirstoption.com.ng",
    note: "Use the website to verify our brand, public details, trust pages and legal links.",
    href: WEBSITE_URL,
    external: true,
  },
  {
    label: "Official Handle",
    value: "@firstoptionng",
    note: "The same handle is used across Instagram, X, TikTok and Telegram for brand consistency.",
    href: SOCIAL_LINKS[0].href,
    external: true,
  },
];

const CONTACT_SUPPORT_STEPS = [
  "Use the same WhatsApp chat you used for the transaction whenever possible.",
  "Include the transaction reference, phone number or service used when asking for help.",
  "Use support email when you need a written follow-up or cannot continue in chat.",
];

const OFFICIAL_CHANNEL_CHECKS = [
  "The only public WhatsApp number promoted on the site is +234 906 068 9011.",
  "The official website is www.thefirstoption.com.ng and support email is support@thefirstoption.com.ng.",
  "The public social handle is firstoptionng across official social profiles.",
];

const ANTI_SCAM_RED_FLAGS = [
  "Any WhatsApp number other than +234 906 068 9011 claiming to be FirstOption.",
  "Anyone asking you to ignore the official site or support email for verification.",
  "Pressure to send money to random personal accounts without your normal wallet flow.",
  "Screenshots or forwards that do not match the current official channels listed publicly.",
];

const SAFE_PRACTICES = [
  "Start from the official website or official WhatsApp link instead of a forwarded message.",
  "Keep wallet funding and purchase conversations inside the same verified support flow.",
  "Cross-check the number, email and handle before acting on any payment instruction.",
  "Stop and verify through the public contact page if anything feels inconsistent.",
];

const SERVICE_PAGE_LOOKUP = new Map(SERVICE_PAGES.map((service) => [service.slug, service]));

function getServiceBySlug(slug: string) {
  return SERVICE_PAGE_LOOKUP.get(slug);
}

function getServiceByPath(routePath: string) {
  return SERVICE_PAGES.find((service) => service.path === routePath);
}

function getLinkAttributes(link: FooterLink) {
  return link.external ? { target: "_blank", rel: "noreferrer" } : {};
}

function ServiceCardLink({ service }: { service: ServicePageConfig }) {
  return (
    <a href={service.path} className="service-card">
      <span className="service-icon">{service.icon}</span>
      <h3>{service.name}</h3>
      <p>{service.cardDesc}</p>
    </a>
  );
}

function SiteChrome({ children }: { children: ReactNode }) {
  return (
    <div className="app">
      <nav className="nav">
        <div className="nav-inner">
          <div className="nav-left">
            <a href="/" aria-label="FirstOption home">
              <img src={logo} alt="FirstOption" className="nav-logo" />
            </a>
          </div>
          <div className="nav-links">
            {PRIMARY_NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href} {...getLinkAttributes(link)}>
                {link.label}
              </a>
            ))}
          </div>
          <a href={WHATSAPP_START_URL} className="nav-cta" target="_blank" rel="noreferrer">
            Get Started
          </a>
        </div>
      </nav>
      {children}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-brand-section">
              <img src={logo} alt="FirstOption" className="footer-logo" />
              <p>
                CAC-registered Nigerian business for airtime, data, bills, wallet
                funding and everyday digital services through one official WhatsApp number.
              </p>
            </div>
            <div className="footer-links">
              <div>
                <h4>Services</h4>
                {SERVICE_LINKS.map((link) => (
                  <a key={link.label} href={link.href} {...getLinkAttributes(link)}>
                    {link.label}
                  </a>
                ))}
              </div>
              <div>
                <h4>Company</h4>
                {COMPANY_LINKS.map((link) => (
                  <a key={link.label} href={link.href} {...getLinkAttributes(link)}>
                    {link.label}
                  </a>
                ))}
              </div>
              <div>
                <h4>Legal</h4>
                {LEGAL_LINKS.map((link) => (
                  <a key={link.label} href={link.href} {...getLinkAttributes(link)}>
                    {link.label}
                  </a>
                ))}
              </div>
              <div>
                <h4>Official Socials</h4>
                {SOCIAL_LINKS.map((link) => (
                  <a key={link.label} href={link.href} {...getLinkAttributes(link)}>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>{LEGAL_NAME} &bull; RC/BN: {CAC_BUSINESS_NUMBER} &bull; CAC Registered, Nigeria</p>
            <p>&copy; {new Date().getFullYear()} FirstOption. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function PageHero({
  badge,
  title,
  description,
  children,
}: {
  badge: string;
  title: ReactNode;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="page-hero">
      <div className="hero-bg" />
      <div className="page-hero-content">
        <div className="about-badge">
          <span className="badge-dot">✦</span>
          {badge}
        </div>
        <h1>{title}</h1>
        <p className="page-hero-sub">{description}</p>
        {children ? <div className="page-hero-links">{children}</div> : null}
      </div>
    </section>
  );
}

function SharedClosingCta({ title, description }: { title: string; description: string }) {
  return (
    <section className="final-cta">
      <div className="final-cta-inner">
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={WHATSAPP_START_URL} className="cta-btn cta-big" target="_blank" rel="noreferrer">
          Message FirstOption on WhatsApp
        </a>
        <div className="final-cta-meta">
          <span>{OFFICIAL_WHATSAPP_DISPLAY}</span>
          <a href={SUPPORT_EMAIL_LINK}>{SUPPORT_EMAIL}</a>
        </div>
      </div>
    </section>
  );
}

function ServiceLandingPage({ service }: { service: ServicePageConfig }) {
  const relatedServices = service.related
    .map((slug) => getServiceBySlug(slug))
    .filter((entry): entry is ServicePageConfig => Boolean(entry));

  return (
    <SiteChrome>
      <PageHero badge={service.badge} title={service.h1} description={service.heroDescription}>
        <a href={WHATSAPP_START_URL} className="hero-trust-item hero-trust-link" target="_blank" rel="noreferrer">
          Start on WhatsApp
        </a>
        <a href="/official-whatsapp" className="hero-trust-item hero-trust-link">
          Verify the official channel
        </a>
      </PageHero>

      <section className="page-section">
        <div className="page-grid">
          {service.highlights.map((highlight) => (
            <article className="info-card" key={highlight.title}>
              <span className="info-card-label">{highlight.label}</span>
              <h3>{highlight.title}</h3>
              <p>{highlight.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section page-section-muted">
        <div className="page-grid">
          <article className="info-card">
            <span className="info-card-label">How It Works</span>
            <h3>What the flow looks like</h3>
            <ul className="trust-list">
              {service.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </article>
          <article className="info-card">
            <span className="info-card-label">Why It Matters</span>
            <h3>Made for practical Nigerian use</h3>
            <ul className="trust-list">
              {service.reasons.map((reason) => (
                <li key={reason}>{reason}</li>
              ))}
            </ul>
          </article>
          <article className="info-card">
            <span className="info-card-label">Related Pages</span>
            <h3>Continue through the official footprint</h3>
            <div className="page-links-row">
              <a href="/" className="page-link-chip">Home</a>
              <a href="/services" className="page-link-chip">All Services</a>
              <a href="/contact" className="page-link-chip">Contact</a>
              <a href="/official-whatsapp" className="page-link-chip">Official WhatsApp</a>
              <a href="/anti-scam" className="page-link-chip">Anti-Scam Guide</a>
              {relatedServices.map((relatedService) => (
                <a key={relatedService.path} href={relatedService.path} className="page-link-chip">
                  {relatedService.name}
                </a>
              ))}
            </div>
          </article>
        </div>
      </section>

      <SharedClosingCta title={service.ctaTitle} description={service.ctaDescription} />
    </SiteChrome>
  );
}

function WalletFundingPage() {
  return (
    <SiteChrome>
      <PageHero
        badge="WALLET FUNDING"
        title="Fund Your Wallet Before Paying Bills on WhatsApp"
        description="FirstOption uses a wallet-first model in Nigeria so repeat purchases like airtime, data, electricity and subscriptions can move faster inside one official chat."
      >
        <a href={WHATSAPP_START_URL} className="hero-trust-item hero-trust-link" target="_blank" rel="noreferrer">
          Start funding on WhatsApp
        </a>
        <a href="/contact" className="hero-trust-item hero-trust-link">
          Contact support
        </a>
      </PageHero>

      <section className="page-section">
        <div className="page-grid">
          <article className="info-card">
            <span className="info-card-label">Funding Model</span>
            <h3>Built for repeat payments</h3>
            <p>
              The wallet-first flow is designed to reduce friction when users need to buy
              airtime, data or bills repeatedly through the same official WhatsApp conversation.
            </p>
          </article>
          <article className="info-card">
            <span className="info-card-label">Clarity</span>
            <h3>One visible support route</h3>
            <p>
              Funding questions, transaction checks and support follow-up remain tied to the
              same public WhatsApp number and support email shown across the site.
            </p>
          </article>
          <article className="info-card">
            <span className="info-card-label">Trust</span>
            <h3>Verify before you act</h3>
            <p>
              The wallet model works best when users start from the official website or WhatsApp link,
              not from forwarded messages or unverified payment instructions.
            </p>
          </article>
        </div>
      </section>

      <section className="page-section page-section-muted">
        <div className="page-grid">
          <article className="info-card">
            <span className="info-card-label">Typical Flow</span>
            <h3>How wallet funding fits the service journey</h3>
            <ul className="trust-list">
              <li>Start from the official WhatsApp number and follow the guided funding flow.</li>
              <li>Keep the same conversation open for balance checks and repeat payments.</li>
              <li>Use the support page or email if you need a clear follow-up trail.</li>
            </ul>
          </article>
          <article className="info-card">
            <span className="info-card-label">Why It Helps</span>
            <h3>Why a wallet-first model matters</h3>
            <ul className="trust-list">
              <li>Repeat service purchases become easier after your balance is ready.</li>
              <li>The same verified chat becomes the hub for payments, support and history.</li>
              <li>Users can verify the brand footprint publicly before transacting.</li>
            </ul>
          </article>
          <article className="info-card">
            <span className="info-card-label">Related Pages</span>
            <h3>Continue with the official journey</h3>
            <div className="page-links-row">
              <a href="/services/airtime" className="page-link-chip">Airtime Top-Up</a>
              <a href="/services/data-bundles" className="page-link-chip">Data Bundles</a>
              <a href="/services/electricity" className="page-link-chip">Electricity Tokens</a>
              <a href="/contact" className="page-link-chip">Contact</a>
              <a href="/official-whatsapp" className="page-link-chip">Official WhatsApp</a>
            </div>
          </article>
        </div>
      </section>

      <SharedClosingCta
        title="Fund Once, Pay Faster"
        description="Use the official FirstOption WhatsApp route to fund your wallet and keep repeat purchases inside the same verified service flow."
      />
    </SiteChrome>
  );
}

function HomePage() {
  return (
    <SiteChrome>
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot">✦</span>
            OFFICIAL WHATSAPP DIGITAL SERVICES BUSINESS
          </div>
          <h1>
            Buy Airtime, Pay Bills &amp;
            <br />
            <em>Fund Your Wallet</em> on WhatsApp
          </h1>
          <p className="hero-sub">
            {LEGAL_NAME} helps Nigerians buy airtime, data, electricity, cable TV,
            exam pins and more through one official WhatsApp chat. No app to download.
          </p>
          <div className="hero-btns">
            <a href={WHATSAPP_START_URL} className="cta-btn" target="_blank" rel="noreferrer">
              Get Started
            </a>
            <a href="/services" className="cta-outline">
              Explore Services
            </a>
          </div>
          <div className="hero-trust-strip">
            <span className="hero-trust-item">CAC BN {CAC_BUSINESS_NUMBER}</span>
            <a href={WHATSAPP_START_URL} className="hero-trust-item hero-trust-link" target="_blank" rel="noreferrer">
              Official WhatsApp {OFFICIAL_WHATSAPP_DISPLAY}
            </a>
            <a href={SUPPORT_EMAIL_LINK} className="hero-trust-item hero-trust-link">
              {SUPPORT_EMAIL}
            </a>
          </div>
        </div>

        <div className="hero-cards">
          <div className="float-card card-left">
            <p className="card-label">CAC Business Number</p>
            <p className="card-big">{CAC_BUSINESS_NUMBER}</p>
            <span className="card-tag green">Registered</span>
          </div>
          <div className="float-card card-center">
            <div className="card-header">
              <img src={logo} alt="" className="card-logo" />
              <span>FirstOption</span>
            </div>
            <div className="card-ring">
              <svg viewBox="0 0 120 120" className="ring-svg">
                <circle cx="60" cy="60" r="50" fill="none" stroke="#e8ecf0" strokeWidth="10" />
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  stroke="#25D366"
                  strokeWidth="10"
                  strokeDasharray="251.3"
                  strokeDashoffset="50.3"
                  strokeLinecap="round"
                  transform="rotate(-90 60 60)"
                />
              </svg>
              <span className="ring-pct">8+</span>
            </div>
            <p className="card-note">Services live now</p>
          </div>
          <div className="float-card card-right">
            <p className="card-label">Wallet Funding</p>
            <p className="card-big">Ready</p>
            <span className="card-tag blue">Virtual Account</span>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-badge">
          <span className="badge-dot">✦</span>
          ABOUT FIRSTOPTION
        </div>
        <p className="about-text">
          {LEGAL_NAME} is a CAC-registered Nigerian business built for fast,
          everyday digital services through one official WhatsApp number. We help
          customers fund a wallet, buy airtime and data, pay bills, and handle
          routine digital payments without leaving chat.
        </p>
        <div className="about-facts">
          <span>Registered in Nigeria</span>
          <span>Serving customers across {OPERATING_COUNTRY}</span>
          <a href={SUPPORT_EMAIL_LINK}>{SUPPORT_EMAIL}</a>
        </div>
      </section>

      <section className="trust-section" id="trust">
        <div className="section-header">
          <div className="about-badge">
            <span className="badge-dot">✦</span>
            OFFICIAL CHANNELS &amp; SAFETY
          </div>
          <h2>Trust the details that are <em>public and verifiable</em></h2>
        </div>
        <div className="trust-grid">
          <article className="trust-card trust-card-highlight">
            <h3>Official Channels</h3>
            <p>
              Use only the contacts below for support, funding help and transaction
              issues. If a link, page or number is not listed here, do not use it.
            </p>
            <div className="trust-pairs">
              <a href={WHATSAPP_START_URL} className="trust-pair" target="_blank" rel="noreferrer">
                <span className="trust-item-label">WhatsApp</span>
                <span className="trust-item-value">{OFFICIAL_WHATSAPP_DISPLAY}</span>
              </a>
              <a href={SUPPORT_EMAIL_LINK} className="trust-pair">
                <span className="trust-item-label">Support Email</span>
                <span className="trust-item-value">{SUPPORT_EMAIL}</span>
              </a>
              <a href={WEBSITE_URL} className="trust-pair" target="_blank" rel="noreferrer">
                <span className="trust-item-label">Website</span>
                <span className="trust-item-value">www.thefirstoption.com.ng</span>
              </a>
            </div>
            <div className="trust-link-pills">
              {SOCIAL_LINKS.map((link) => (
                <a key={link.label} href={link.href} className="trust-link-pill" target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              ))}
            </div>
          </article>

          <article className="trust-card">
            <h3>Registered Nigerian Business</h3>
            <p>
              FirstOption operates under one public identity across its website,
              WhatsApp channel and official social profiles.
            </p>
            <ul className="trust-list">
              <li>Legal name: {LEGAL_NAME}</li>
              <li>CAC business number: {CAC_BUSINESS_NUMBER}</li>
              <li>Operating country: {OPERATING_COUNTRY}</li>
            </ul>
          </article>

          <article className="trust-card">
            <h3>Wallet Funding With Clear Confirmation</h3>
            <p>
              Fund your wallet through your assigned virtual account or approved
              checkout flow, then spend inside the same WhatsApp conversation.
            </p>
            <ul className="trust-list">
              <li>Dedicated virtual account for repeat funding</li>
              <li>Wallet balance and transaction history inside chat</li>
              <li>One official support path for funding issues</li>
            </ul>
          </article>

          <article className="trust-card">
            <h3>Services Live Right Now</h3>
            <p>
              FirstOption is already handling everyday digital service requests for
              Nigerians through the active WhatsApp menu.
            </p>
            <ul className="trust-list">
              {LIVE_SERVICES.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="services" id="services">
        <div className="section-header">
          <div className="about-badge">
            <span className="badge-dot">✦</span>
            OUR SERVICES
          </div>
          <h2>Everything You Need,<br /><em>One Chat Away</em></h2>
        </div>
        <div className="services-grid">
          {SERVICE_PAGES.map((service) => (
            <ServiceCardLink service={service} key={service.path} />
          ))}
        </div>
      </section>

      <section className="how" id="how">
        <div className="section-header">
          <div className="about-badge">
            <span className="badge-dot">✦</span>
            HOW IT WORKS
          </div>
          <h2>Three Simple Steps to<br /><em>Get Started</em></h2>
        </div>
        <div className="steps">
          <div className="step">
            <div className="step-num">1</div>
            <h3>Tap the Link</h3>
            <p>Click our WhatsApp link — it opens the chat instantly</p>
          </div>
          <div className="step-arrow">→</div>
          <div className="step">
            <div className="step-num">2</div>
            <h3>Hit Send</h3>
            <p>Your account is created automatically. No forms. No OTP.</p>
          </div>
          <div className="step-arrow">→</div>
          <div className="step">
            <div className="step-num">3</div>
            <h3>Pick a Service</h3>
            <p>Choose what you need from the menu and you're done!</p>
          </div>
        </div>
      </section>

      <section className="wallet-section" id="wallet-funding">
        <div className="wallet-inner">
          <img src={logo} alt="" className="wallet-logo" />
          <h2>Your Wallet, Your Speed</h2>
          <p>
            Fund your FirstOption wallet through a dedicated virtual account or an
            approved checkout flow. Once funded, you can buy airtime, data and
            bills instantly without repeating a manual transfer for every order.
          </p>
          <div className="wallet-perks">
            <span>✅ Dedicated virtual account</span>
            <span>✅ Faster repeat payments</span>
            <span>✅ Balance and history in chat</span>
            <span>✅ Official support path</span>
          </div>
        </div>
      </section>

      <SharedClosingCta
        title="Start With the Official Number"
        description="Start the chat with a simple Hi and follow the menu from there. Use only our official WhatsApp number and support email for funding or transaction help."
      />
    </SiteChrome>
  );
}

function ServicesPage() {
  return (
    <SiteChrome>
      <PageHero
        badge="LIVE SERVICES"
        title={<>Everyday digital services built for <em>WhatsApp</em></>}
        description="Explore the live FirstOption services already available through one official chat, from airtime and data to bills, wallet funding and support."
      >
        <a href={WHATSAPP_START_URL} className="hero-trust-item hero-trust-link" target="_blank" rel="noreferrer">
          Start on WhatsApp
        </a>
        <a href="/wallet-funding" className="hero-trust-item hero-trust-link">
          Explore wallet funding
        </a>
      </PageHero>

      <section className="page-section" id="active-services">
        <div className="section-header">
          <div className="about-badge">
            <span className="badge-dot">✦</span>
            ACTIVE SERVICES
          </div>
          <h2>Live services users can access <em>right now</em></h2>
        </div>
        <div className="services-grid">
          {SERVICE_PAGES.map((service) => (
            <ServiceCardLink service={service} key={service.path} />
          ))}
        </div>
      </section>

      <section className="page-section page-section-muted" id="wallet-funding">
        <div className="page-grid">
          <article className="info-card">
            <span className="info-card-label">Wallet Funding</span>
            <h3>Faster repeat payments</h3>
            <p>
              FirstOption uses a wallet-first flow so you can fund once and complete
              repeat digital purchases faster inside the same WhatsApp conversation.
            </p>
          </article>
          <article className="info-card">
            <span className="info-card-label">Support</span>
            <h3>One support path</h3>
            <p>
              Funding and service issues are handled through the same official
              WhatsApp number and support email listed publicly across the site.
            </p>
          </article>
          <article className="info-card">
            <span className="info-card-label">Trust</span>
            <h3>Continue with route-specific pages</h3>
            <div className="page-links-row">
              <a href="/wallet-funding" className="page-link-chip">Wallet Funding</a>
              <a href="/official-whatsapp" className="page-link-chip">Official WhatsApp</a>
              <a href="/contact" className="page-link-chip">Contact</a>
              <a href="/anti-scam" className="page-link-chip">Anti-Scam Guide</a>
            </div>
          </article>
        </div>
      </section>

      <SharedClosingCta
        title="Start Any Service From One Chat"
        description="Use the official WhatsApp link to open the live menu, fund your wallet if needed, and complete purchases without leaving the chat flow."
      />
    </SiteChrome>
  );
}

function AboutPage() {
  return (
    <SiteChrome>
      <PageHero
        badge="ABOUT FIRSTOPTION"
        title={<>A CAC-registered brand built around <em>one trusted chat</em></>}
        description="FirstOption Digital Services is designed for Nigerians who want airtime, bills and everyday digital services handled quickly through one official WhatsApp number."
      >
        <a href="/services" className="hero-trust-item hero-trust-link">
          See live services
        </a>
        <a href="/contact" className="hero-trust-item hero-trust-link">
          Contact FirstOption
        </a>
      </PageHero>

      <section className="page-section">
        <div className="page-grid">
          <article className="info-card">
            <span className="info-card-label">What We Are</span>
            <h3>WhatsApp-native digital services</h3>
            <p>
              FirstOption is focused on routine digital services like airtime, data,
              electricity, cable TV, betting funding, exam pins and internet subscriptions.
            </p>
          </article>
          <article className="info-card">
            <span className="info-card-label">How It Works</span>
            <h3>One chat, guided flow</h3>
            <p>
              Users start with a simple message, choose a service from the menu,
              and complete the flow inside chat without installing a separate app.
            </p>
          </article>
          <article className="info-card">
            <span className="info-card-label">Why It Matters</span>
            <h3>Speed with fewer moving parts</h3>
            <p>
              The wallet-first model reduces friction for repeat purchases and keeps
              service delivery closer to the user’s everyday messaging behavior.
            </p>
          </article>
        </div>
      </section>

      <section className="page-section page-section-muted">
        <div className="page-grid">
          <article className="info-card">
            <span className="info-card-label">Public Identity</span>
            <h3>One brand across channels</h3>
            <ul className="trust-list">
              <li>Legal name: {LEGAL_NAME}</li>
              <li>CAC business number: {CAC_BUSINESS_NUMBER}</li>
              <li>Operating country: {OPERATING_COUNTRY}</li>
            </ul>
          </article>
          <article className="info-card">
            <span className="info-card-label">Official Channels</span>
            <h3>Simple to verify</h3>
            <ul className="trust-list">
              {OFFICIAL_CHANNEL_CHECKS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <SharedClosingCta
        title="Want to See the Brand in Action?"
        description="Open the official WhatsApp chat, explore the live menu and verify the same public contact details across the site before you transact."
      />
    </SiteChrome>
  );
}

function ContactPage() {
  return (
    <SiteChrome>
      <PageHero
        badge="CONTACT FIRSTOPTION"
        title={<>Use the public channels that <em>match everywhere</em></>}
        description="These are the official contact routes users should rely on for support, follow-up and brand verification."
      >
        <a href="/official-whatsapp" className="hero-trust-item hero-trust-link">
          Check the official number
        </a>
        <a href="/anti-scam" className="hero-trust-item hero-trust-link">
          Read the anti-scam guide
        </a>
      </PageHero>

      <section className="page-section">
        <div className="page-grid">
          {CONTACT_CHANNELS.map((channel) => (
            <a
              key={channel.label}
              href={channel.href}
              className="info-card info-card-link"
              {...(channel.external ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              <span className="info-card-label">{channel.label}</span>
              <h3>{channel.value}</h3>
              <p>{channel.note}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="page-section page-section-muted">
        <div className="page-grid">
          <article className="info-card">
            <span className="info-card-label">Best Way to Get Help</span>
            <h3>Keep the support trail clean</h3>
            <ul className="trust-list">
              {CONTACT_SUPPORT_STEPS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="info-card">
            <span className="info-card-label">Legal & Support Links</span>
            <h3>Reference pages users may need</h3>
            <div className="page-links-row">
              {LEGAL_LINKS.map((link) => (
                <a key={link.label} href={link.href} className="page-link-chip" target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              ))}
            </div>
          </article>
        </div>
      </section>

      <SharedClosingCta
        title="Need Support or Want to Start?"
        description="Use the official WhatsApp number for the fastest product flow and keep the support email for structured follow-up when needed."
      />
    </SiteChrome>
  );
}

function OfficialWhatsAppPage() {
  return (
    <SiteChrome>
      <PageHero
        badge="OFFICIAL WHATSAPP"
        title={<>The public FirstOption number users should <em>actually trust</em></>}
        description="This page exists to make verification easy. If the number, email or site does not match the details below, do not treat it as FirstOption."
      >
        <a href={WHATSAPP_START_URL} className="hero-trust-item hero-trust-link" target="_blank" rel="noreferrer">
          Start with {OFFICIAL_WHATSAPP_DISPLAY}
        </a>
      </PageHero>

      <section className="page-section">
        <div className="page-grid">
          <article className="info-card info-card-highlight">
            <span className="info-card-label">Official Number</span>
            <h3>{OFFICIAL_WHATSAPP_DISPLAY}</h3>
            <p>
              This is the public WhatsApp number promoted on the website for new chats,
              support guidance and verification.
            </p>
          </article>
          <article className="info-card">
            <span className="info-card-label">What to Verify</span>
            <h3>Cross-check before you act</h3>
            <ul className="trust-list">
              {OFFICIAL_CHANNEL_CHECKS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="info-card">
            <span className="info-card-label">When You Start</span>
            <h3>How the chat should feel</h3>
            <ul className="trust-list">
              <li>Start with a simple Hi to enter the menu flow.</li>
              <li>Stay inside the same chat for funding, balance checks and purchase follow-up.</li>
              <li>Use the support email only when you need formal written follow-up.</li>
            </ul>
          </article>
        </div>
        <div className="page-note">
          If a message or profile asks you to use a different number, different website
          or different support email, stop and verify through this page first.
        </div>
      </section>

      <SharedClosingCta
        title="Use the Verified Public Route"
        description="Start from the official WhatsApp link on this site and keep your transaction and support history inside the same verified conversation."
      />
    </SiteChrome>
  );
}

function AntiScamPage() {
  return (
    <SiteChrome>
      <PageHero
        badge="ANTI-SCAM GUIDE"
        title={<>How to verify FirstOption before you <em>send money or data</em></>}
        description="This page exists to reduce impersonation risk. Use it whenever a forwarded message, random profile or unverified number claims to represent FirstOption."
      >
        <a href="/contact" className="hero-trust-item hero-trust-link">
          Check official contacts
        </a>
        <a href="/official-whatsapp" className="hero-trust-item hero-trust-link">
          Verify the WhatsApp number
        </a>
      </PageHero>

      <section className="page-section">
        <div className="page-grid">
          <article className="info-card">
            <span className="info-card-label">Red Flags</span>
            <h3>What should make you stop immediately</h3>
            <ul className="trust-list">
              {ANTI_SCAM_RED_FLAGS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="info-card">
            <span className="info-card-label">Safe Checks</span>
            <h3>What users should do first</h3>
            <ul className="trust-list">
              {SAFE_PRACTICES.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="info-card">
            <span className="info-card-label">Official Identity</span>
            <h3>The public details that should match</h3>
            <ul className="trust-list">
              <li>Brand: FirstOption / FirstOption Digital Services</li>
              <li>WhatsApp: {OFFICIAL_WHATSAPP_DISPLAY}</li>
              <li>Email: {SUPPORT_EMAIL}</li>
              <li>Handle: firstoptionng</li>
            </ul>
          </article>
        </div>
      </section>

      <SharedClosingCta
        title="Verify First, Then Continue"
        description="If anything about a payment request or support instruction looks different from this website, stop and verify through the official public channels before proceeding."
      />
    </SiteChrome>
  );
}

function resolveLocation(initialPath = "/", initialSearch = "") {
  if (typeof window !== "undefined") {
    return {
      pathname: window.location.pathname,
      search: window.location.search,
    };
  }

  return {
    pathname: initialPath,
    search: initialSearch,
  };
}

function App({ initialPath = "/", initialSearch = "" }: AppProps) {
  const { pathname, search } = resolveLocation(initialPath, initialSearch);
  const normalizedPath = pathname !== "/" ? pathname.replace(/\/+$/, "") || "/" : pathname;
  const matchedServicePage = getServiceByPath(normalizedPath);

  // Payment success redirect page
  if (normalizedPath === "/payment-success") {
    const params = new URLSearchParams(search);
    const status = params.get("status");
    const failed = status && status !== "successful" && status !== "completed";

    return (
      <div className="payment-result-page">
        <div className="payment-result-glow payment-result-glow-left" />
        <div className="payment-result-glow payment-result-glow-right" />
        <div className="payment-result-card">
          <div className="payment-brand-strip">
            <div className="payment-brand-panel">
              <img src={logo} alt="FirstOption" className="payment-brand-logo payment-brand-logo-firstoption" />
            </div>
            <span className="payment-brand-divider">+</span>
            <div className="payment-brand-panel">
              <img src={flutterwaveLogo} alt="Flutterwave" className="payment-brand-logo payment-brand-logo-flutterwave" />
            </div>
          </div>

          <div className={`payment-status-badge ${failed ? "payment-status-failed" : "payment-status-success"}`}>
            {failed ? "Payment Not Completed" : "Payment Confirmed"}
          </div>

          <h1 className="payment-result-title">
            {failed ? "Return to WhatsApp and try again" : "Payment successful"}
          </h1>

          <p className="payment-result-copy">
            {failed
              ? "Your checkout did not complete. Go back to the same WhatsApp chat and start the funding flow again."
              : "Your payment has been received. Go back to the same WhatsApp chat yourself and type wallet to confirm the updated balance."}
          </p>

          <div className="payment-result-steps">
            <div className="payment-result-step">
              <span>1</span>
              <p>Return to the same WhatsApp app you used for checkout.</p>
            </div>
            <div className="payment-result-step">
              <span>2</span>
              <p>Open your FirstOption chat manually.</p>
            </div>
            <div className="payment-result-step">
              <span>3</span>
              <p>Type wallet to check your balance.</p>
            </div>
          </div>

          <div className="payment-result-note">
            We do not auto-redirect to WhatsApp because phones with both WhatsApp and WhatsApp Business can open the wrong app.
          </div>

          <a href="/" className="payment-result-link">
            Back to FirstOption
          </a>
        </div>
      </div>
    );
  }

  if (matchedServicePage) {
    return <ServiceLandingPage service={matchedServicePage} />;
  }

  switch (normalizedPath) {
    case "/services":
      return <ServicesPage />;
    case "/wallet-funding":
      return <WalletFundingPage />;
    case "/about":
      return <AboutPage />;
    case "/contact":
      return <ContactPage />;
    case "/official-whatsapp":
      return <OfficialWhatsAppPage />;
    case "/anti-scam":
      return <AntiScamPage />;
    default:
      return <HomePage />;
  }
}

export default App;
