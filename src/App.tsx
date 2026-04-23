import { useEffect, useState, type ReactNode } from "react";
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

type GuideSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

type GuidePageConfig = {
  slug: string;
  path: string;
  name: string;
  badge: string;
  title: string;
  cardDescription: string;
  heroDescription: string;
  summary: string;
  highlights: string[];
  sections: GuideSection[];
  checklist: string[];
  primaryLink: FooterLink;
  relatedLinks: FooterLink[];
  ctaTitle: string;
  ctaDescription: string;
  featured?: boolean;
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

const MOBILE_MENU_PRIMARY_LINKS: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Wallet Funding", href: "/wallet-funding" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const MOBILE_MENU_TRUST_LINKS: FooterLink[] = [
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

const GUIDE_PAGES: GuidePageConfig[] = [
  {
    slug: "buy-airtime-on-whatsapp-nigeria",
    path: "/guides/buy-airtime-on-whatsapp-nigeria",
    name: "Buy Airtime on WhatsApp",
    badge: "AIRTIME GUIDE",
    title: "How to Buy Airtime on WhatsApp in Nigeria",
    cardDescription: "A practical guide to buying airtime through the official FirstOption WhatsApp flow in Nigeria.",
    heroDescription:
      "A practical guide for Nigerians who want to buy airtime on WhatsApp without guessing which number, support path or payment flow to trust.",
    summary:
      "The cleanest route is to start from the official FirstOption website or WhatsApp link, choose airtime in the menu, confirm the number and amount carefully, and keep follow-up inside the same verified chat.",
    highlights: [
      "Use the official number first",
      "Confirm network, amount and destination",
      "Keep support in the same chat",
    ],
    sections: [
      {
        heading: "What the airtime flow should look like",
        paragraphs: [
          "A proper WhatsApp airtime flow should feel simple: you open the official chat, choose airtime, select the network, enter the amount, confirm the destination number and complete the payment step without jumping across random profiles.",
          "That matters because airtime is a repeat purchase. The more ordinary the transaction feels, the easier it is to miss a wrong number, a fake support contact or a mismatched payment instruction if the public route is not clear.",
        ],
        bullets: [
          "Start from the official website or official WhatsApp link.",
          "Choose airtime from the live menu, not from a forwarded screenshot.",
          "Recheck the destination number before confirming payment.",
        ],
      },
      {
        heading: "What to verify before you pay",
        paragraphs: [
          "The basic trust checks are not complicated. The website should match the business, the WhatsApp number should match the one publicly listed, and the support email should match the official domain.",
          "If any of those details are different, stop there. Airtime is fast, but it should not be rushed so much that you skip basic verification.",
        ],
        bullets: [
          "The public WhatsApp number is +234 906 068 9011.",
          "The official website is www.thefirstoption.com.ng.",
          "Support follow-up uses support@thefirstoption.com.ng.",
        ],
      },
      {
        heading: "Why a WhatsApp airtime route can still be practical",
        paragraphs: [
          "For many users, the practical appeal is not novelty. It is fewer moving parts. You stay in a chat flow you already understand, the business keeps its public trust details visible, and repeat payments can become faster once the wallet route is already clear.",
          "That is the real value: not just buying airtime, but buying it through a route that stays easy to verify every time you come back.",
        ],
      },
    ],
    checklist: [
      "The number, website and email all match the official FirstOption details.",
      "You confirmed the network and amount before payment.",
      "You checked the destination number twice before sending the request.",
      "You know where to continue support if something needs follow-up.",
    ],
    primaryLink: { label: "Open the airtime service page", href: "/services/airtime" },
    relatedLinks: [
      { label: "Wallet Funding", href: "/wallet-funding" },
      { label: "Official WhatsApp", href: "/official-whatsapp" },
      { label: "Anti-Scam Guide", href: "/anti-scam" },
    ],
    ctaTitle: "Start the Airtime Flow From the Official Route",
    ctaDescription:
      "Open the official FirstOption WhatsApp chat, choose airtime from the menu and keep the same conversation available for follow-up.",
    featured: true,
  },
  {
    slug: "fund-your-wallet-before-paying-bills",
    path: "/guides/fund-your-wallet-before-paying-bills",
    name: "Fund Your Wallet Before Paying Bills",
    badge: "WALLET GUIDE",
    title: "How to Fund Your Wallet Before Paying Bills on WhatsApp",
    cardDescription: "A practical guide to the wallet-first flow behind faster repeat bill payments on FirstOption.",
    heroDescription:
      "A straightforward guide to how wallet funding fits the FirstOption payment flow and why it matters before repeat bill, airtime and subscription purchases.",
    summary:
      "The wallet-first model is designed to reduce repeated transfer friction. You fund once through the official route, then use the same chat for repeat service purchases, balance checks and support.",
    highlights: [
      "Fund once, spend faster",
      "Use the same verified chat",
      "Keep support and balance checks together",
    ],
    sections: [
      {
        heading: "Why the wallet comes first",
        paragraphs: [
          "For repeat services like airtime, data, electricity and subscriptions, the slowest part is often redoing the payment step every single time. A wallet-first model reduces that repetition and keeps the service flow tighter once money is already available.",
          "It is not just about speed. It also keeps the customer journey easier to track because the same chat becomes the place for funding, payment confirmation and follow-up.",
        ],
      },
      {
        heading: "What a clean funding flow should include",
        paragraphs: [
          "A proper funding flow should start from the official FirstOption route, show a clear payment path, and give you a reliable way to return to the same conversation after checkout or transfer.",
          "That is especially important on mobile, where a payment screen can break continuity if the user does not know how to get back to the same support path.",
        ],
        bullets: [
          "Use the official site or official WhatsApp link first.",
          "Complete funding through the approved wallet route only.",
          "Return to the same chat to check the balance or confirm support.",
        ],
      },
      {
        heading: "When the wallet model helps most",
        paragraphs: [
          "The more repeat purchases you make, the more useful the wallet becomes. It works particularly well when you buy airtime often, renew subscriptions regularly or need faster repeat utility payments.",
          "That is why the wallet page and service pages should stay tightly linked: the user should always understand how funding and service delivery fit together.",
        ],
      },
    ],
    checklist: [
      "You started from the official FirstOption route before funding.",
      "You know how to return to the same chat after payment.",
      "You understand that repeat purchases are faster after the wallet is funded.",
      "You have the support email handy if written follow-up is needed.",
    ],
    primaryLink: { label: "Open the wallet funding page", href: "/wallet-funding" },
    relatedLinks: [
      { label: "Electricity Tokens", href: "/services/electricity" },
      { label: "Data Bundles", href: "/services/data-bundles" },
      { label: "Contact", href: "/contact" },
    ],
    ctaTitle: "Use the Wallet Route That Matches the Service Flow",
    ctaDescription:
      "Fund your FirstOption wallet through the official route and keep repeat purchases, balance checks and support inside one conversation.",
    featured: true,
  },
  {
    slug: "airtime-to-cash-whatsapp-nigeria",
    path: "/guides/airtime-to-cash-whatsapp-nigeria",
    name: "How Airtime-to-Cash Works",
    badge: "AIRTIME-TO-CASH GUIDE",
    title: "How Airtime-to-Cash Works in Nigeria on WhatsApp",
    cardDescription: "A guide to verifying the official route and understanding the basics before any airtime-to-cash request.",
    heroDescription:
      "A practical guide to understanding airtime-to-cash requests in Nigeria and why verification matters before you act on any instruction.",
    summary:
      "Airtime-to-cash requests are sensitive, so the safest approach is to start from the official route, confirm the public support details, and avoid acting on random instructions or forwarded screenshots.",
    highlights: [
      "Verify first",
      "Do not trust forwarded instructions",
      "Keep sensitive support in the official channel",
    ],
    sections: [
      {
        heading: "Why this service needs more caution",
        paragraphs: [
          "Airtime-to-cash is not the same as a routine top-up. It is more sensitive, easier to fake with screenshots, and more likely to attract impersonation attempts because users can be pressured to act quickly.",
          "That makes the public trust layer more important than usual. The website, WhatsApp number, email and anti-scam guide need to agree before any request moves forward.",
        ],
      },
      {
        heading: "How the official route should feel",
        paragraphs: [
          "A legitimate flow should not start from a mystery number or an unverified profile picture. It should start from the official FirstOption footprint and continue inside a support path that is easy to cross-check if anything feels off.",
          "If the conversation suddenly pushes you away from the public website or official contact details, that is already enough reason to pause.",
        ],
        bullets: [
          "Start from the official site or the official WhatsApp page.",
          "Cross-check the listed number and support email before acting.",
          "Use the anti-scam page if any instruction feels inconsistent.",
        ],
      },
      {
        heading: "What a careful user should do",
        paragraphs: [
          "Treat every airtime-to-cash request like a sensitive transaction. Read the instruction carefully, verify the channel, and avoid rushing just because the format looks familiar.",
          "The goal is not only speed. The goal is to avoid preventable mistakes on a category where trust matters more than marketing language.",
        ],
      },
    ],
    checklist: [
      "The contact details match the official FirstOption footprint.",
      "You are not acting on a forwarded screenshot or a copied payment script.",
      "You know which official page to use if something feels inconsistent.",
      "You can continue the request through the same verified support path.",
    ],
    primaryLink: { label: "Open the airtime-to-cash service page", href: "/services/airtime-to-cash" },
    relatedLinks: [
      { label: "Official WhatsApp", href: "/official-whatsapp" },
      { label: "Anti-Scam Guide", href: "/anti-scam" },
      { label: "Contact", href: "/contact" },
    ],
    ctaTitle: "Use the Public Route Before Any Airtime-to-Cash Request",
    ctaDescription:
      "Open the official FirstOption pages first, verify the support path and continue only through the public route you can cross-check.",
    featured: true,
  },
  {
    slug: "buy-exam-pins-whatsapp-nigeria",
    path: "/guides/buy-exam-pins-whatsapp-nigeria",
    name: "Buy Exam Pins on WhatsApp",
    badge: "EXAM PIN GUIDE",
    title: "How to Buy Exam Pins Without Leaving WhatsApp in Nigeria",
    cardDescription: "A practical guide to handling exam pin requests through one official WhatsApp support path.",
    heroDescription:
      "A guide for users who want exam pin requests handled through one official route without getting dragged into unclear support or payment instructions.",
    summary:
      "The safest pattern is to start from the official FirstOption route, choose the exam pin flow in the live menu, confirm the request details carefully, and keep the same support path available if you need follow-up.",
    highlights: [
      "Use the official route",
      "Confirm the exact exam request",
      "Keep follow-up inside one support path",
    ],
    sections: [
      {
        heading: "Why exam pin requests need clarity",
        paragraphs: [
          "Exam pin requests are usually time-sensitive, so users can become more vulnerable to sloppy support or rushed mistakes. That is why the process should stay direct, official and easy to verify.",
          "The goal is to make the transaction feel guided, not improvised.",
        ],
      },
      {
        heading: "What to confirm before completing the request",
        paragraphs: [
          "Before payment, make sure you are clear on the exact pin request, the support route and where you will continue the conversation if something needs follow-up.",
          "That sounds basic, but exam-related payments are exactly the kind of tasks where preventable confusion shows up if the route is not stable.",
        ],
        bullets: [
          "Check the official WhatsApp number before you continue.",
          "Confirm the exact exam-related request details before payment.",
          "Use the same conversation for clarification if needed.",
        ],
      },
      {
        heading: "How WhatsApp helps when the route is well structured",
        paragraphs: [
          "A good WhatsApp flow keeps the user inside one familiar interface. That reduces unnecessary switching while still preserving a visible support path.",
          "The real value is not that the request happens in chat. It is that the chat route is public, consistent and easier to verify.",
        ],
      },
    ],
    checklist: [
      "You started from the official FirstOption route.",
      "You confirmed the exact exam request before payment.",
      "You can use the same support path if anything needs clarification.",
      "The public number and support email still match the site.",
    ],
    primaryLink: { label: "Open the exam pins service page", href: "/services/exam-pins" },
    relatedLinks: [
      { label: "Contact", href: "/contact" },
      { label: "Official WhatsApp", href: "/official-whatsapp" },
      { label: "About", href: "/about" },
    ],
    ctaTitle: "Use the Official Exam Pin Route",
    ctaDescription:
      "Start the exam pin request from the official FirstOption path and keep support in the same verified conversation if anything needs follow-up.",
  },
  {
    slug: "renew-dstv-gotv-whatsapp-nigeria",
    path: "/guides/renew-dstv-gotv-whatsapp-nigeria",
    name: "Renew DSTV or GOtv on WhatsApp",
    badge: "CABLE GUIDE",
    title: "How to Renew DSTV or GOtv Through WhatsApp in Nigeria",
    cardDescription: "A guide to handling cable subscription renewals through the official FirstOption route.",
    heroDescription:
      "A practical guide to cable subscription renewals on WhatsApp, especially for users who want a simple repeat-payment flow without losing track of support.",
    summary:
      "A clean cable renewal flow should start from the official FirstOption route, keep the subscription details accurate, and leave you with one support path if any clarification is needed.",
    highlights: [
      "Use the official cable route",
      "Confirm subscription details carefully",
      "Keep support close to the payment flow",
    ],
    sections: [
      {
        heading: "Why cable renewals fit a chat-based flow",
        paragraphs: [
          "Cable renewals are recurring, practical payments. That makes them a good fit for a route that stays simple, repeatable and easy to verify.",
          "The user usually does not need a complicated dashboard. The user needs the right subscription handled through a route that does not feel risky.",
        ],
      },
      {
        heading: "Where mistakes usually happen",
        paragraphs: [
          "The common mistakes are not dramatic: wrong subscription details, rushed payment confirmation or unclear support when something needs to be corrected.",
          "That is why the guide matters. A repeat-payment service still needs a visible trust layer so the user knows exactly where the official route begins and ends.",
        ],
        bullets: [
          "Verify the public number before starting the renewal.",
          "Review the subscription details carefully before payment.",
          "Use the same support path if the transaction needs clarification.",
        ],
      },
      {
        heading: "How the wallet route helps repeat renewals",
        paragraphs: [
          "If you handle subscription renewals often, the wallet-first flow becomes more useful because it reduces repeated transfer friction.",
          "That is part of why the wallet page and cable page should stay close together in the site structure: users should understand how payment setup and service use connect.",
        ],
      },
    ],
    checklist: [
      "You started from the official FirstOption route.",
      "You rechecked the subscription details before payment.",
      "You know where to continue support if the renewal needs follow-up.",
      "The official website and support details still match the public site.",
    ],
    primaryLink: { label: "Open the cable TV service page", href: "/services/cable-tv" },
    relatedLinks: [
      { label: "Wallet Funding", href: "/wallet-funding" },
      { label: "Contact", href: "/contact" },
      { label: "Anti-Scam Guide", href: "/anti-scam" },
    ],
    ctaTitle: "Handle Cable Renewals Through the Official Route",
    ctaDescription:
      "Use the official FirstOption cable flow on WhatsApp and keep the same support path available for repeat renewals and follow-up.",
  },
  {
    slug: "fund-betting-wallets-via-whatsapp",
    path: "/guides/fund-betting-wallets-via-whatsapp",
    name: "Fund Betting Wallets via WhatsApp",
    badge: "BETTING GUIDE",
    title: "How to Fund Betting Wallets via WhatsApp in Nigeria",
    cardDescription: "A practical guide to funding betting wallets through the official FirstOption support route.",
    heroDescription:
      "A guide for users who want betting wallet funding handled through an official support path instead of relying on random forwarded payment instructions.",
    summary:
      "The safest betting-wallet flow starts from the official FirstOption route, keeps the support channel visible, and avoids any instruction that cannot be cross-checked against the public website.",
    highlights: [
      "Reject random payment forwards",
      "Keep the support path visible",
      "Use the official route only",
    ],
    sections: [
      {
        heading: "Why this category needs a clear official route",
        paragraphs: [
          "Betting wallet funding is exactly the kind of transaction where users are often exposed to copied payment instructions, random account details and unverified profiles pretending to be support.",
          "That makes the public website and official WhatsApp page more than nice-to-have. They are part of the safety layer.",
        ],
      },
      {
        heading: "What the user should expect from a proper flow",
        paragraphs: [
          "A legitimate flow should keep the brand details stable. The website, number, email and support route should all agree before money moves.",
          "If a request depends on pressure, urgency or a contact that does not match the public details, the safest move is to stop and verify.",
        ],
        bullets: [
          "Start from the official FirstOption pages first.",
          "Verify the support path before using any funding instruction.",
          "Continue inside the same official route if follow-up is needed.",
        ],
      },
      {
        heading: "How this connects to the wider service footprint",
        paragraphs: [
          "This is one reason the trust pages matter. Betting wallet funding should not feel isolated from the rest of the FirstOption footprint. It should sit alongside the same official contact, anti-scam and wallet-support structure that the other services use.",
          "That consistency is what helps both users and search engines understand that the site is the official route.",
        ],
      },
    ],
    checklist: [
      "The instruction came from the official FirstOption route.",
      "The website, number and support email still match the public site.",
      "You can verify the route through the anti-scam or contact page if needed.",
      "You are not acting on an isolated screenshot or forwarded payment script.",
    ],
    primaryLink: { label: "Open the betting funding service page", href: "/services/betting-funding" },
    relatedLinks: [
      { label: "Official WhatsApp", href: "/official-whatsapp" },
      { label: "Anti-Scam Guide", href: "/anti-scam" },
      { label: "Wallet Funding", href: "/wallet-funding" },
    ],
    ctaTitle: "Use the Official Betting Funding Route",
    ctaDescription:
      "Start from the public FirstOption pages, verify the support path and continue through the same official route for betting wallet funding.",
  },
];

const FEATURED_GUIDES = GUIDE_PAGES.filter((guide) => guide.featured);

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

function getGuideByPath(routePath: string) {
  return GUIDE_PAGES.find((guide) => guide.path === routePath);
}

function getLinkAttributes(link: FooterLink) {
  return link.external ? { target: "_blank", rel: "noreferrer" } : {};
}

function isPathActive(currentPath: string, href: string) {
  if (href === "/") {
    return currentPath === "/";
  }

  if (href === "/services") {
    return currentPath === "/services" || currentPath.startsWith("/services/");
  }

  return currentPath === href;
}

function getCurrentPageLabel(currentPath: string) {
  const matchedService = getServiceByPath(currentPath);
  const matchedGuide = getGuideByPath(currentPath);

  if (matchedService) {
    return matchedService.name;
  }

  if (matchedGuide) {
    return matchedGuide.name;
  }

  switch (currentPath) {
    case "/":
      return "Home";
    case "/services":
      return "Services";
    case "/wallet-funding":
      return "Wallet Funding";
    case "/about":
      return "About";
    case "/contact":
      return "Contact";
    case "/official-whatsapp":
      return "Official WhatsApp";
    case "/anti-scam":
      return "Anti-Scam Guide";
    default:
      return "FirstOption";
  }
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

function GuideCardLink({ guide }: { guide: GuidePageConfig }) {
  return (
    <a href={guide.path} className="info-card info-card-link guide-card">
      <span className="info-card-label">Guide</span>
      <h3>{guide.title}</h3>
      <p>{guide.cardDescription}</p>
    </a>
  );
}

function SiteChrome({ currentPath, children }: { currentPath: string; children: ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen || typeof window === "undefined") {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const currentPageLabel = getCurrentPageLabel(currentPath);

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
              <a
                key={link.label}
                href={link.href}
                className={isPathActive(currentPath, link.href) ? "nav-link-active" : undefined}
                {...getLinkAttributes(link)}
              >
                {link.label}
              </a>
            ))}
          </div>
          <a href={WHATSAPP_START_URL} className="nav-cta nav-cta-desktop" target="_blank" rel="noreferrer">
            Get Started
          </a>
          <button
            type="button"
            className={`nav-menu-button${isMobileMenuOpen ? " nav-menu-button-open" : ""}`}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav-panel"
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsMobileMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
      <div className={`mobile-nav-shell${isMobileMenuOpen ? " mobile-nav-shell-open" : ""}`}>
        <button
          type="button"
          className="mobile-nav-backdrop"
          aria-label="Close navigation menu"
          onClick={closeMobileMenu}
        />
        <div className="mobile-nav-panel" id="mobile-nav-panel">
          <div className="mobile-nav-header">
            <div className="mobile-nav-brand">
              <img src={logo} alt="FirstOption" className="mobile-nav-brand-logo" />
              <div className="mobile-nav-brand-copy">
                <span className="mobile-nav-label">Browse FirstOption</span>
                <span className="mobile-nav-current">You are here: {currentPageLabel}</span>
              </div>
            </div>
            <button
              type="button"
              className="mobile-nav-close"
              aria-label="Close navigation menu"
              onClick={closeMobileMenu}
            >
              ×
            </button>
          </div>
          <div className="mobile-nav-sections">
            <div className="mobile-nav-section">
              <span className="mobile-nav-section-label">Navigate</span>
              <div className="mobile-nav-links">
                {MOBILE_MENU_PRIMARY_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className={isPathActive(currentPath, link.href) ? "mobile-nav-link-active" : undefined}
                    {...getLinkAttributes(link)}
                    onClick={closeMobileMenu}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="mobile-nav-section">
              <span className="mobile-nav-section-label">Verify and Protect</span>
              <div className="mobile-nav-links mobile-nav-links-compact">
                {MOBILE_MENU_TRUST_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className={isPathActive(currentPath, link.href) ? "mobile-nav-link-active" : undefined}
                    {...getLinkAttributes(link)}
                    onClick={closeMobileMenu}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <a
            href={WHATSAPP_START_URL}
            className="mobile-nav-cta"
            target="_blank"
            rel="noreferrer"
            onClick={closeMobileMenu}
          >
            Start on WhatsApp
          </a>
          <div className="mobile-nav-meta">
            <a href={SUPPORT_EMAIL_LINK} onClick={closeMobileMenu}>{SUPPORT_EMAIL}</a>
          </div>
        </div>
      </div>
      {children}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-brand-section">
              <img src={logo} alt="FirstOption" className="footer-logo" />
              <p>
                Official WhatsApp digital services for airtime, data, bills, wallet
                funding and everyday payments through one verified support path.
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
            <p>{LEGAL_NAME} &bull; CAC BN {CAC_BUSINESS_NUMBER} &bull; {OPERATING_COUNTRY}</p>
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
    <SiteChrome currentPath={service.path}>
      <PageHero
        badge={service.badge}
        title={service.h1}
        description={service.heroDescription}
      >
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

function GuidePage({ guide }: { guide: GuidePageConfig }) {
  return (
    <SiteChrome currentPath={guide.path}>
      <PageHero badge={guide.badge} title={guide.title} description={guide.heroDescription}>
        <a href={guide.primaryLink.href} className="hero-trust-item hero-trust-link">
          {guide.primaryLink.label}
        </a>
        <a href={WHATSAPP_START_URL} className="hero-trust-item hero-trust-link" target="_blank" rel="noreferrer">
          Start on WhatsApp
        </a>
      </PageHero>

      <section className="page-section">
        <div className="guide-layout">
          <article className="guide-body">
            <div className="guide-summary">
              <span className="info-card-label">Quick Answer</span>
              <p>{guide.summary}</p>
              <div className="guide-chip-row">
                {guide.highlights.map((highlight) => (
                  <span key={highlight} className="guide-chip">{highlight}</span>
                ))}
              </div>
            </div>

            {guide.sections.map((section) => (
              <section className="guide-section" key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.bullets ? (
                  <ul className="trust-list guide-list">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </article>

          <aside className="guide-sidebar">
            <article className="info-card">
              <span className="info-card-label">Start Here</span>
              <h3>Open the related official route</h3>
              <p>
                Use the matching FirstOption page first so the service details and support path stay consistent before you continue in WhatsApp.
              </p>
              <div className="page-links-row">
                <a href={guide.primaryLink.href} className="page-link-chip">{guide.primaryLink.label}</a>
              </div>
            </article>

            <article className="info-card">
              <span className="info-card-label">Before You Pay</span>
              <h3>Checks that reduce preventable mistakes</h3>
              <ul className="trust-list">
                {guide.checklist.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="info-card">
              <span className="info-card-label">Related Pages</span>
              <h3>Continue through the official footprint</h3>
              <div className="page-links-row">
                {guide.relatedLinks.map((link) => (
                  <a key={link.label} href={link.href} className="page-link-chip" {...getLinkAttributes(link)}>
                    {link.label}
                  </a>
                ))}
              </div>
            </article>
          </aside>
        </div>
      </section>

      <SharedClosingCta title={guide.ctaTitle} description={guide.ctaDescription} />
    </SiteChrome>
  );
}

function WalletFundingPage() {
  return (
    <SiteChrome currentPath="/wallet-funding">
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
    <SiteChrome currentPath="/">
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot">✦</span>
            OFFICIAL FIRSTOPTION CHANNEL
          </div>
          <h1>
            Buy Airtime, Pay Bills &amp;
            <br />
            <em>Fund Your Wallet</em> on WhatsApp
          </h1>
          <p className="hero-sub">
            FirstOption helps Nigerians buy airtime, data, electricity, cable TV,
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
            <a href={WHATSAPP_START_URL} className="hero-trust-item hero-trust-link" target="_blank" rel="noreferrer">
              Official WhatsApp {OFFICIAL_WHATSAPP_DISPLAY}
            </a>
            <a href={SUPPORT_EMAIL_LINK} className="hero-trust-item hero-trust-link">
              {SUPPORT_EMAIL}
            </a>
            <a href="/official-whatsapp" className="hero-trust-item hero-trust-link">
              How to verify FirstOption
            </a>
          </div>
        </div>

        <div className="hero-cards">
          <div className="float-card card-left">
            <p className="card-label">Official Route</p>
            <p className="card-big">Verified</p>
            <span className="card-tag green">Public Details</span>
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
          FirstOption Digital Services is a Nigerian digital services business built for fast,
          everyday purchases through one official WhatsApp channel. We help
          customers fund a wallet, buy airtime and data, pay bills, and handle
          routine digital payments without leaving chat.
        </p>
        <div className="about-facts">
          <span>One verified support path</span>
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
            <h3>Business Details</h3>
            <p>
              FirstOption operates under one public identity across its website,
              WhatsApp channel and official social profiles.
            </p>
            <ul className="trust-list">
              <li>Legal name: {LEGAL_NAME}</li>
              <li>CAC BN: {CAC_BUSINESS_NUMBER}</li>
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

      <section className="page-section page-section-muted" id="guides">
        <div className="section-header">
          <div className="about-badge">
            <span className="badge-dot">✦</span>
            PRACTICAL GUIDES
          </div>
          <h2>Helpful reading before you <em>use a service</em></h2>
        </div>
        <div className="page-grid">
          {FEATURED_GUIDES.map((guide) => (
            <GuideCardLink guide={guide} key={guide.path} />
          ))}
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
    <SiteChrome currentPath="/services">
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

      <section className="page-section" id="guides">
        <div className="section-header">
          <div className="about-badge">
            <span className="badge-dot">✦</span>
            PRACTICAL GUIDES
          </div>
          <h2>Helpful guides that match <em>real search intent</em></h2>
        </div>
        <div className="page-grid">
          {GUIDE_PAGES.map((guide) => (
            <GuideCardLink guide={guide} key={guide.path} />
          ))}
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
    <SiteChrome currentPath="/about">
      <PageHero
        badge="ABOUT FIRSTOPTION"
        title={<>A trusted digital services brand built around <em>one chat</em></>}
        description="FirstOption Digital Services serves Nigerians who want airtime, bills and everyday digital services handled quickly through one official WhatsApp flow."
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
              <li>CAC BN: {CAC_BUSINESS_NUMBER}</li>
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
    <SiteChrome currentPath="/contact">
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
    <SiteChrome currentPath="/official-whatsapp">
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
    <SiteChrome currentPath="/anti-scam">
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
  const matchedGuidePage = getGuideByPath(normalizedPath);

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    const defaultRobotsContent = "index, follow, max-image-preview:large";
    let robotsMeta = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
    let createdMeta = false;

    if (!robotsMeta) {
      robotsMeta = document.createElement("meta");
      robotsMeta.setAttribute("name", "robots");
      document.head.appendChild(robotsMeta);
      createdMeta = true;
    }

    const previousContent = robotsMeta.getAttribute("content") ?? defaultRobotsContent;
    const nextContent = normalizedPath === "/payment-success" ? "noindex, nofollow" : defaultRobotsContent;

    robotsMeta.setAttribute("content", nextContent);

    return () => {
      if (!robotsMeta) {
        return;
      }

      if (createdMeta && previousContent === defaultRobotsContent) {
        robotsMeta.setAttribute("content", defaultRobotsContent);
        return;
      }

      robotsMeta.setAttribute("content", previousContent);
    };
  }, [normalizedPath]);

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

  if (matchedGuidePage) {
    return <GuidePage guide={matchedGuidePage} />;
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
