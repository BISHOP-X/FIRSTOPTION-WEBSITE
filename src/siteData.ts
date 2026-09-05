export type LinkItem = {
  label: string;
  href: string;
  external?: boolean;
};

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  path: string;
  category: string;
  image: string;
  accent: string;
  summary: string;
  proof: string;
  cta: string;
  details: string[];
  steps: string;
};

export type Guide = {
  path: string;
  title: string;
  summary: string;
};

export const PRODUCTION_WHATSAPP_NUMBER = "2349060689011";
export const OFFICIAL_WHATSAPP_DISPLAY = "0906 068 9011";
export const SUPPORT_EMAIL = "support@thefirstoption.com.ng";
export const SUPPORT_EMAIL_LINK = `mailto:${SUPPORT_EMAIL}`;
export const WHATSAPP_START_URL = `https://wa.me/${PRODUCTION_WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi")}`;
export const BACKEND_BASE_URL = "https://firstoption.onrender.com";
export const WEBSITE_URL = "https://www.thefirstoption.com.ng";
export const LEGAL_NAME = "FIRSTOPTION DIGITAL SERVICES";
export const CAC_BUSINESS_NUMBER = "9443317";
export const OPERATING_COUNTRY = "Nigeria";

export const NAV_LINKS: LinkItem[] = [
  { label: "Personal", href: "/personal" },
  { label: "Business", href: "/business" },
  { label: "Services", href: "/services" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Safety", href: "/official-whatsapp" },
  { label: "About", href: "/about" },
];

export const SOCIAL_LINKS: LinkItem[] = [
  { label: "Instagram", href: "https://www.instagram.com/firstoptionng", external: true },
  { label: "X / Twitter", href: "https://x.com/firstoptionng", external: true },
  { label: "TikTok", href: "https://www.tiktok.com/@firstoptionng", external: true },
  { label: "Telegram", href: "https://t.me/firstoptionng", external: true },
];

export const LEGAL_LINKS: LinkItem[] = [
  { label: "Privacy Policy", href: `${BACKEND_BASE_URL}/privacy`, external: true },
  { label: "Terms of Service", href: `${BACKEND_BASE_URL}/terms`, external: true },
  { label: "Data Deletion", href: `${BACKEND_BASE_URL}/data-deletion`, external: true },
];

export const SERVICES: Service[] = [
  {
    slug: "airtime",
    name: "Airtime Top-Up",
    shortName: "Airtime",
    path: "/services/airtime",
    category: "Mobile",
    image: "/service-icons/airtime.png",
    accent: "#19a866",
    summary: "Top up MTN, Airtel, Glo and 9mobile lines.",
    proof: "MTN, Airtel, Glo, 9mobile",
    cta: "Buy airtime",
    steps: "Choose the network, enter the phone number and amount, then check the details before you pay.",
    details: ["Choose a network", "Enter the phone number", "Receive your WhatsApp receipt"],
  },
  {
    slug: "data-bundles",
    name: "Data Bundles",
    shortName: "Data",
    path: "/services/data-bundles",
    category: "Mobile",
    image: "/service-icons/data-bundles.png",
    accent: "#3478f6",
    summary: "Buy daily, weekly and monthly data plans.",
    proof: "SME and CG plans",
    cta: "Buy data",
    steps: "Choose a network and plan, check the receiving number, then confirm your purchase.",
    details: ["Browse current plans", "Choose the receiving line", "Get confirmation on WhatsApp"],
  },
  {
    slug: "electricity",
    name: "Electricity",
    shortName: "Electricity",
    path: "/services/electricity",
    category: "Bills",
    image: "/service-icons/electricity.png",
    accent: "#efb309",
    summary: "Pay electricity bills and receive your token.",
    proof: "Prepaid and postpaid",
    cta: "Pay electricity bill",
    steps: "Enter your meter number, verify the customer details, choose an amount and confirm.",
    details: ["Check meter details", "Review before payment", "Receive token and receipt"],
  },
  {
    slug: "cable-tv",
    name: "Cable TV",
    shortName: "Cable TV",
    path: "/services/cable-tv",
    category: "Entertainment",
    image: "/service-icons/cable-tv.png",
    accent: "#0ca5d8",
    summary: "Renew DSTV, GOtv, Startimes and Showmax.",
    proof: "DSTV, GOtv, Startimes",
    cta: "Renew cable TV",
    steps: "Choose a provider, verify the smartcard or IUC number, select a package and confirm.",
    details: ["Choose a provider", "Verify the account", "Renew or change package"],
  },
  {
    slug: "exam-pins",
    name: "Exam Pins",
    shortName: "Exam Pins",
    path: "/services/exam-pins",
    category: "Education",
    image: "/service-icons/exam-pins.png",
    accent: "#7957df",
    summary: "Buy WAEC and JAMB pins from the chat.",
    proof: "WAEC and JAMB",
    cta: "Buy an exam pin",
    steps: "Choose the exam body, check the price, confirm the purchase and receive the pin.",
    details: ["Choose WAEC or JAMB", "Confirm the price", "Receive your pin securely"],
  },
  {
    slug: "internet",
    name: "Internet & Gaming",
    shortName: "Internet",
    path: "/services/internet",
    category: "Subscriptions",
    image: "/service-icons/internet.png",
    accent: "#1590a9",
    summary: "Pay internet and supported gaming subscriptions.",
    proof: "Spectranet, Smile and more",
    cta: "Pay for internet",
    steps: "Choose the provider, enter the account details, select a plan and confirm.",
    details: ["Internet subscriptions", "Gaming services", "Simpler repeat renewals"],
  },
  {
    slug: "betting",
    name: "Betting Wallets",
    shortName: "Betting",
    path: "/services/betting",
    category: "Betting",
    image: "/service-icons/betting.png",
    accent: "#25a65a",
    summary: "Top up supported betting wallets.",
    proof: "SportyBet and Bet9ja",
    cta: "Fund SportyBet or Bet9ja",
    steps: "Choose a provider, verify the betting account, enter an amount and confirm.",
    details: ["SportyBet", "Bet9ja", "Verify the account before payment"],
  },
  {
    slug: "gift-cards",
    name: "Gift Cards",
    shortName: "Gift Cards",
    path: "/services/gift-cards",
    category: "Trade",
    image: "/service-icons/gift-cards.png",
    accent: "#df477d",
    summary: "Buy and sell supported gift cards.",
    proof: "Buy and sell",
    cta: "Buy or sell gift cards",
    steps: "Choose buy or sell, select the card, enter its value and review the details.",
    details: ["Buy gift cards", "Sell supported cards", "See the value before continuing"],
  },
  {
    slug: "crypto",
    name: "Crypto",
    shortName: "Crypto",
    path: "/services/crypto",
    category: "Digital assets",
    image: "/service-icons/crypto.png",
    accent: "#f28b20",
    summary: "Buy, sell, send and receive supported crypto.",
    proof: "Buy, sell, send, receive",
    cta: "Buy or sell crypto",
    steps: "Choose an operation and asset, review the rate or destination, then confirm.",
    details: ["Buy and sell", "Send and receive", "Review every detail first"],
  },
  {
    slug: "virtual-cards",
    name: "Virtual Cards",
    shortName: "Cards",
    path: "/services/virtual-cards",
    category: "Cards",
    image: "/service-icons/virtual-cards.png",
    accent: "#111a2d",
    summary: "Create and manage supported virtual cards.",
    proof: "USD virtual cards",
    cta: "Get a virtual card",
    steps: "Create a card, review the fee, add money and manage the card securely.",
    details: ["Create a virtual card", "Add money to the card", "Manage card details securely"],
  },
];

export const GUIDE_PAGES: Guide[] = [
  {
    path: "/guides/buy-airtime-on-whatsapp-nigeria",
    title: "How to buy airtime on WhatsApp in Nigeria",
    summary: "Choose airtime, enter the receiving number, review the amount and confirm.",
  },
  {
    path: "/guides/fund-your-wallet-before-paying-bills",
    title: "How to add money to FirstOption",
    summary: "Create your permanent Paga account from a service webview and transfer to it whenever you need.",
  },
  {
    path: "/guides/buy-exam-pins-whatsapp-nigeria",
    title: "How to buy WAEC or JAMB pins on WhatsApp",
    summary: "Choose the exam body, review the price and receive your pin after payment.",
  },
  {
    path: "/guides/renew-dstv-gotv-whatsapp-nigeria",
    title: "How to renew DSTV or GOtv through WhatsApp",
    summary: "Choose a provider, verify the smartcard or IUC number and select a package.",
  },
  {
    path: "/guides/fund-betting-wallets-via-whatsapp",
    title: "How to fund a supported betting wallet",
    summary: "Choose a provider, verify the account and review the amount before payment.",
  },
];

export const TRUST_CHECKS = [
  `WhatsApp: ${OFFICIAL_WHATSAPP_DISPLAY}`,
  `Email: ${SUPPORT_EMAIL}`,
  `Website: ${WEBSITE_URL.replace("https://", "")}`,
  `CAC BN: ${CAC_BUSINESS_NUMBER}`,
];
