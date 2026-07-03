import { useEffect, useMemo, useState, type ReactNode } from "react";
import "./App.css";
import logo from "/firstoption-logo-cropped.png";
import flutterwaveLogo from "/Flutterwave_whitebg.svg";

type AppProps = {
  initialPath?: string;
  initialSearch?: string;
};

type LinkItem = {
  label: string;
  href: string;
  external?: boolean;
};

type Service = {
  slug: string;
  name: string;
  shortName: string;
  path: string;
  category: string;
  image: string;
  accent: string;
  summary: string;
  proof: string;
  details: string[];
  steps: string;
};

type Guide = {
  path: string;
  title: string;
  summary: string;
};

const PRODUCTION_WHATSAPP_NUMBER = "2349060689011";
const OFFICIAL_WHATSAPP_DISPLAY = "+234 906 068 9011";
const SUPPORT_EMAIL = "support@thefirstoption.com.ng";
const SUPPORT_EMAIL_LINK = `mailto:${SUPPORT_EMAIL}`;
const WHATSAPP_START_URL = `https://wa.me/${PRODUCTION_WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi")}`;
const BACKEND_BASE_URL = "https://firstoption.onrender.com";
const WEBSITE_URL = "https://www.thefirstoption.com.ng";
const LEGAL_NAME = "FIRSTOPTION DIGITAL SERVICES";
const CAC_BUSINESS_NUMBER = "9443317";
const OPERATING_COUNTRY = "Nigeria";

const NAV_LINKS: LinkItem[] = [
  { label: "Services", href: "/services" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Safety", href: "/official-whatsapp" },
  { label: "About", href: "/about" },
];

const SOCIAL_LINKS: LinkItem[] = [
  { label: "Instagram", href: "https://www.instagram.com/firstoptionng", external: true },
  { label: "X / Twitter", href: "https://x.com/firstoptionng", external: true },
  { label: "TikTok", href: "https://www.tiktok.com/@firstoptionng", external: true },
  { label: "Telegram", href: "https://t.me/firstoptionng", external: true },
];

const LEGAL_LINKS: LinkItem[] = [
  { label: "Privacy Policy", href: `${BACKEND_BASE_URL}/privacy`, external: true },
  { label: "Terms of Service", href: `${BACKEND_BASE_URL}/terms`, external: true },
  { label: "Data Deletion", href: `${BACKEND_BASE_URL}/data-deletion`, external: true },
];

const SERVICES: Service[] = [
  {
    slug: "airtime",
    name: "Airtime Top-Up",
    shortName: "Airtime",
    path: "/services/airtime",
    category: "Mobile",
    image: "/service-icons/airtime.png",
    accent: "#12a86b",
    summary: "Buy airtime for MTN, Airtel, Glo and 9mobile.",
    proof: "MTN, Airtel, Glo, 9mobile",
    steps: "Choose your network, enter the phone number, confirm the amount and pay.",
    details: ["Pick a network", "Enter the phone number", "Get your receipt on WhatsApp"],
  },
  {
    slug: "data-bundles",
    name: "Data Bundles",
    shortName: "Data",
    path: "/services/data-bundles",
    category: "Mobile",
    image: "/service-icons/data-bundles.png",
    accent: "#2877ff",
    summary: "Buy daily, weekly and monthly data plans.",
    proof: "SME and CG plans",
    steps: "Choose a network, pick a data plan, confirm the number and pay.",
    details: ["Browse available plans", "Choose what fits your budget", "Receive confirmation on WhatsApp"],
  },
  {
    slug: "electricity",
    name: "Electricity Tokens",
    shortName: "Electricity",
    path: "/services/electricity",
    category: "Bills",
    image: "/service-icons/electricity.png",
    accent: "#f3b21b",
    summary: "Pay electricity bills and get your token.",
    proof: "Prepaid tokens",
    steps: "Enter your meter number, check the details, confirm the amount and pay.",
    details: ["Check meter details", "Confirm before payment", "Receive token and receipt"],
  },
  {
    slug: "cable-tv",
    name: "Cable TV",
    shortName: "Cable",
    path: "/services/cable-tv",
    category: "Bills",
    image: "/service-icons/cable-tv.png",
    accent: "#0ea5e9",
    summary: "Renew DSTV, GOtv, Startimes and Showmax.",
    proof: "DSTV / GOtv / Startimes",
    steps: "Choose your provider, enter your smartcard number, pick a package and pay.",
    details: ["DSTV, GOtv and Startimes", "Check smartcard details", "Renew or choose a package"],
  },
  {
    slug: "exam-pins",
    name: "Exam Pins",
    shortName: "Exam Pins",
    path: "/services/exam-pins",
    category: "Education",
    image: "/service-icons/exam-pins.png",
    accent: "#7c3aed",
    summary: "Buy WAEC and JAMB pins.",
    proof: "WAEC and JAMB",
    steps: "Choose WAEC or JAMB, confirm the details and pay.",
    details: ["WAEC pins", "JAMB pins", "Quick receipt after purchase"],
  },
  {
    slug: "internet",
    name: "Internet & Gaming",
    shortName: "Internet",
    path: "/services/internet",
    category: "Subscriptions",
    image: "/service-icons/internet.png",
    accent: "#0891b2",
    summary: "Pay for internet subscriptions and gaming services.",
    proof: "Spectranet, Smile, gaming",
    steps: "Choose the provider, pick a plan, confirm the account and pay.",
    details: ["Internet subscriptions", "Gaming services", "Repeat renewals made easier"],
  },
  {
    slug: "betting",
    name: "Betting Wallets",
    shortName: "Betting",
    path: "/services/betting",
    category: "Betting",
    image: "/service-icons/betting.png",
    accent: "#16a34a",
    summary: "Top up supported betting wallets.",
    proof: "SportyBet and Bet9ja",
    steps: "Choose the betting provider, enter the account details, confirm the amount and pay.",
    details: ["SportyBet", "Bet9ja", "Check details before payment"],
  },
  {
    slug: "gift-cards",
    name: "Gift Cards",
    shortName: "Gift Cards",
    path: "/services/gift-cards",
    category: "Gift Cards",
    image: "/service-icons/gift-cards.png",
    accent: "#db2777",
    summary: "Buy and sell supported gift cards.",
    proof: "Buy and sell",
    steps: "Choose buy or sell, select the gift card, confirm the value and continue.",
    details: ["Buy gift cards", "Sell supported cards", "Clear value before you continue"],
  },
  {
    slug: "crypto",
    name: "Crypto",
    shortName: "Crypto",
    path: "/services/crypto",
    category: "Digital Assets",
    image: "/service-icons/crypto.png",
    accent: "#f7931a",
    summary: "Buy, sell, send and receive supported crypto.",
    proof: "Buy, sell, send, receive",
    steps: "Choose what you want to do, check the rate or address, then confirm.",
    details: ["Buy crypto", "Sell crypto", "Send and receive crypto"],
  },
  {
    slug: "virtual-cards",
    name: "Virtual Cards",
    shortName: "Cards",
    path: "/services/virtual-cards",
    category: "Cards",
    image: "/service-icons/virtual-cards.png",
    accent: "#111827",
    summary: "Create and manage virtual cards.",
    proof: "Virtual cards",
    steps: "Create a card, review the fee, add money and use the card details safely.",
    details: ["Create virtual cards", "Add money to cards", "Manage card details"],
  },
];

const HOME_SERVICES = SERVICES.filter((service) =>
  ["airtime", "data-bundles", "electricity", "cable-tv", "exam-pins", "internet", "gift-cards", "crypto"].includes(service.slug),
);

const GUIDE_PAGES: Guide[] = [
  {
    path: "/guides/buy-airtime-on-whatsapp-nigeria",
    title: "How to buy airtime on WhatsApp in Nigeria",
    summary: "Open FirstOption on WhatsApp, choose airtime, enter the number and confirm the amount.",
  },
  {
    path: "/guides/fund-your-wallet-before-paying-bills",
    title: "How to pay faster next time",
    summary: "Keep your details correct, confirm the amount and save your receipt after each payment.",
  },
  {
    path: "/guides/buy-exam-pins-whatsapp-nigeria",
    title: "How to buy WAEC or JAMB pins without leaving WhatsApp",
    summary: "Choose the exam body, confirm the price and receive your pin after payment.",
  },
  {
    path: "/guides/renew-dstv-gotv-whatsapp-nigeria",
    title: "How to renew cable TV through FirstOption",
    summary: "Choose DSTV, GOtv or Startimes, enter your smartcard number and pick a package.",
  },
  {
    path: "/guides/fund-betting-wallets-via-whatsapp",
    title: "How to check a payment before you continue",
    summary: "Use the correct FirstOption number, check the amount and avoid random payment instructions.",
  },
];

const TRUST_CHECKS = [
  `WhatsApp number: ${OFFICIAL_WHATSAPP_DISPLAY}`,
  `Support email: ${SUPPORT_EMAIL}`,
  `Website: ${WEBSITE_URL.replace("https://", "")}`,
  `CAC BN: ${CAC_BUSINESS_NUMBER}`,
];

function getLinkAttrs(link: LinkItem) {
  return link.external ? { target: "_blank", rel: "noreferrer" } : {};
}

function resolveLocation(initialPath = "/", initialSearch = "") {
  if (typeof window !== "undefined") {
    return { pathname: window.location.pathname, search: window.location.search };
  }
  return { pathname: initialPath, search: initialSearch };
}

function normalizePath(pathname: string) {
  return pathname !== "/" ? pathname.replace(/\/+$/, "") || "/" : pathname;
}

function getServiceByPath(pathname: string) {
  return SERVICES.find((service) => service.path === pathname);
}

function getGuideByPath(pathname: string) {
  return GUIDE_PAGES.find((guide) => guide.path === pathname);
}

function currentPageLabel(pathname: string) {
  if (pathname === "/") return "Home";
  if (pathname === "/services") return "Services";
  if (pathname === "/how-it-works") return "How it works";
  if (pathname === "/referral" || pathname === "/services/referral") return "Refer & Earn";
  if (pathname === "/about") return "About";
  if (pathname === "/contact") return "Contact";
  if (pathname === "/official-whatsapp") return "Official WhatsApp";
  if (pathname === "/anti-scam") return "Anti-Scam Guide";
  if (pathname === "/wallet-funding") return "Payments";
  return getServiceByPath(pathname)?.name ?? getGuideByPath(pathname)?.title ?? "FirstOption";
}

function isPathActive(currentPath: string, href: string) {
  if (href === "/services") return currentPath === "/services" || (currentPath.startsWith("/services/") && currentPath !== "/services/referral");
  return currentPath === href;
}

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`reveal ${className}`}>{children}</div>;
}

function SiteChrome({ currentPath, children }: { currentPath: string; children: ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavScrolled, setIsNavScrolled] = useState(false);
  const [isNavHidden, setIsNavHidden] = useState(false);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = isMenuOpen ? "hidden" : previous;
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const closeOnResize = () => {
      if (window.innerWidth > 780) setIsMenuOpen(false);
    };
    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateNav = () => {
      const currentScrollY = window.scrollY;
      const isMovingDown = currentScrollY > lastScrollY + 6;
      const isMovingUp = currentScrollY < lastScrollY - 6;

      setIsNavScrolled(currentScrollY > 12);
      if (currentScrollY < 90 || isMovingUp || isMenuOpen) {
        setIsNavHidden(false);
      } else if (isMovingDown) {
        setIsNavHidden(true);
      }

      lastScrollY = currentScrollY;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateNav);
        ticking = true;
      }
    };

    updateNav();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMenuOpen]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const targets = Array.from(document.querySelectorAll(".reveal"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("reveal-visible");
        });
      },
      { threshold: 0.16 },
    );
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [currentPath]);

  return (
    <div className="app">
      <nav className={`nav${isNavScrolled ? " nav-scrolled" : ""}${isNavHidden ? " nav-hidden" : ""}`}>
        <div className="nav-inner">
          <a href="/" aria-label="FirstOption home" className="nav-brand">
            <img src={logo} alt="FirstOption" className="nav-logo" />
          </a>
          <div className="nav-links">
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href} className={isPathActive(currentPath, link.href) ? "nav-link-active" : undefined}>
                {link.label}
              </a>
            ))}
          </div>
          <a href={WHATSAPP_START_URL} className="nav-cta" target="_blank" rel="noreferrer">
            Start on WhatsApp
          </a>
          <button
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className={`nav-menu-button${isMenuOpen ? " nav-menu-button-open" : ""}`}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`mobile-nav-shell${isMenuOpen ? " mobile-nav-shell-open" : ""}`} aria-hidden={!isMenuOpen}>
        <button type="button" aria-label="Close navigation" className="mobile-nav-backdrop" onClick={() => setIsMenuOpen(false)} />
        <div className="mobile-nav-panel">
          <div className="mobile-nav-header">
            <img src={logo} alt="FirstOption" className="mobile-nav-logo" />
            <span>{currentPageLabel(currentPath)}</span>
            <button type="button" aria-label="Close navigation menu" onClick={() => setIsMenuOpen(false)}>
              x
            </button>
          </div>
          {[{ label: "Home", href: "/" }, ...NAV_LINKS, { label: "Contact", href: "/contact" }, { label: "Anti-Scam", href: "/anti-scam" }].map((link) => (
            <a key={link.label} href={link.href} onClick={() => setIsMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href={WHATSAPP_START_URL} className="mobile-nav-cta" target="_blank" rel="noreferrer">
            Message FirstOption
          </a>
        </div>
      </div>

      {children}
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img src={logo} alt="FirstOption" className="footer-logo" />
          <p>Buy airtime and data, pay bills, buy or sell gift cards and crypto, and create virtual cards on WhatsApp.</p>
        </div>
        <div className="footer-links">
          <div>
            <h4>Services</h4>
            {SERVICES.map((service) => (
              <a key={service.slug} href={service.path}>
                {service.shortName}
              </a>
            ))}
          </div>
          <div>
            <h4>Company</h4>
            <a href="/how-it-works">How it works</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/referral">Refer & Earn</a>
            <a href="/official-whatsapp">Official WhatsApp</a>
            <a href="/anti-scam">Anti-Scam Guide</a>
          </div>
          <div>
            <h4>Legal</h4>
            {LEGAL_LINKS.map((link) => (
              <a key={link.label} href={link.href} {...getLinkAttrs(link)}>
                {link.label}
              </a>
            ))}
          </div>
          <div>
            <h4>Social</h4>
            {SOCIAL_LINKS.map((link) => (
              <a key={link.label} href={link.href} {...getLinkAttrs(link)}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <p>{LEGAL_NAME} - CAC BN {CAC_BUSINESS_NUMBER} - {OPERATING_COUNTRY}</p>
          <p>Copyright 2026 FirstOption. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function PhoneMockup() {
  return (
    <div className="device-stage" aria-label="FirstOption WhatsApp preview">
      <div className="orbit-card orbit-card-balance">
        <span>Ready</span>
        <strong>N28,650.00</strong>
      </div>
      <div className="orbit-card orbit-card-receipt">
        <span>Payment successful</span>
        <strong>Electricity token</strong>
        <small>Receipt sent to WhatsApp</small>
      </div>
      <div className="phone">
        <div className="phone-speaker" />
        <div className="phone-screen">
          <div className="whatsapp-top">
            <img src={logo} alt="" />
            <div>
              <strong>FirstOption</strong>
              <span>Official support account</span>
            </div>
          </div>
          <div className="chat-bubble">Hi, welcome to FirstOption. What would you like to do today?</div>
          <div className="menu-list">
            {SERVICES.slice(0, 8).map((service) => (
              <div className="menu-row" key={service.slug}>
                <span className="menu-dot" style={{ background: service.accent }} />
                <span>{service.shortName}</span>
                <small>{service.category}</small>
              </div>
            ))}
          </div>
          <div className="message-bar">Message</div>
        </div>
      </div>
      <div className="mini-webview">
        <div className="webview-top">
          <img src={logo} alt="" />
          <span>Secure</span>
        </div>
        <div className="webview-card">
          <small>You will pay</small>
          <strong>N5,000.00</strong>
        </div>
        <button type="button">Complete purchase</button>
      </div>
    </div>
  );
}

function ServiceCard({ service, large = false }: { service: Service; large?: boolean }) {
  return (
    <a href={service.path} className={`service-card${large ? " service-card-large" : ""}`}>
      <div className="service-mark" style={{ backgroundColor: `${service.accent}12` }}>
        <img src={service.image} alt="" loading="lazy" />
      </div>
      <div className="service-copy">
        <span>{service.category}</span>
        <h3>{service.name}</h3>
        <p>{service.summary}</p>
        <strong>{service.proof}</strong>
      </div>
    </a>
  );
}

function HomePage() {
  return (
    <SiteChrome currentPath="/">
      <main>
        <section className="hero">
          <div className="hero-bg" />
          <div className="hero-grid">
            <Reveal className="hero-copy">
              <p className="eyebrow">FirstOption on WhatsApp</p>
              <h1>
                <span>Buy airtime.</span>
                <span>Pay bills.</span>
                <span>Buy or sell gift cards and crypto.</span>
              </h1>
              <p className="hero-sub">
                Send Hi on WhatsApp, choose what you need, confirm the details and pay.
              </p>
              <div className="hero-actions">
                <a href={WHATSAPP_START_URL} className="primary-btn" target="_blank" rel="noreferrer">
                  Start on WhatsApp
                </a>
                <a href="/services" className="secondary-btn">
                  Explore services
                </a>
              </div>
              <div className="hero-trust">
                <span>{OFFICIAL_WHATSAPP_DISPLAY}</span>
                <span>{SUPPORT_EMAIL}</span>
                <span>CAC BN {CAC_BUSINESS_NUMBER}</span>
              </div>
            </Reveal>
            <Reveal className="hero-product">
              <PhoneMockup />
            </Reveal>
          </div>
        </section>

        <section className="section section-services" id="services">
          <Reveal className="section-heading">
            <p className="eyebrow">Services</p>
            <h2>What would you like to do?</h2>
            <p>Choose any FirstOption service from one WhatsApp chat.</p>
          </Reveal>
          <div className="feature-grid home-service-grid">
            {HOME_SERVICES.map((service) => (
              <Reveal key={service.slug}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
          <Reveal className="all-services-link">
            <a href="/services" className="secondary-btn">See all services</a>
          </Reveal>
        </section>

        <section className="section product-story" id="how">
          <div className="story-copy">
            <Reveal>
              <p className="eyebrow">How it works</p>
              <h2>Start on WhatsApp. Finish in a few clear steps.</h2>
              <p>
                No confusing process. FirstOption shows you what to choose, what to enter and what to pay before you continue.
              </p>
            </Reveal>
            <div className="step-list">
              {["Open FirstOption on WhatsApp", "Choose a service", "Check the details", "Pay and get your receipt"].map((item, index) => (
                <Reveal className="step-row" key={item}>
                  <span>{index + 1}</span>
                  <strong>{item}</strong>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal className="webview-showcase">
            <div className="webview-phone">
              <div className="webview-topbar">
                <img src={logo} alt="" />
                <strong>FirstOption</strong>
                <span>Secure</span>
              </div>
              <div className="wallet-card">
                <small>Ready to pay</small>
                <strong>N28,650.00</strong>
                <button type="button">Continue</button>
              </div>
              <h3>Pay Cable</h3>
              <div className="provider-grid">
                {["DSTV", "GOtv", "Startimes", "Showmax"].map((item) => (
                  <button type="button" key={item}>{item}</button>
                ))}
              </div>
              <input value="Smartcard / IUC number" readOnly />
              <div className="summary-line">
                <span>You will pay</span>
                <strong>N5,000.00</strong>
              </div>
              <button type="button" className="webview-primary">Pay Cable</button>
            </div>
          </Reveal>
        </section>

        <section className="section visual-band" id="referral">
          <Reveal className="visual-copy">
            <p className="eyebrow">Referral program</p>
            <h2>Invite people. Earn rewards.</h2>
            <p>Share FirstOption with friends and groups. Earn when they start using it.</p>
            <a href={WHATSAPP_START_URL} className="primary-btn" target="_blank" rel="noreferrer">Ask about Refer & Earn</a>
          </Reveal>
          <Reveal className="visual-image">
            <div className="referral-visual" aria-label="Refer and earn preview">
              <div className="referral-ticket">
                <img src="/service-icons/referral.png" alt="" />
                <span>Refer & Earn</span>
                <strong>Share your link</strong>
                <p>Invite friends. Earn rewards.</p>
              </div>
              <div className="referral-mini referral-mini-top">Group ready</div>
              <div className="referral-mini referral-mini-bottom">Reward earned</div>
            </div>
          </Reveal>
        </section>

        <section className="section trust-section">
          <Reveal className="section-heading">
            <p className="eyebrow">Stay safe</p>
            <h2>Check the right FirstOption details before you pay.</h2>
          </Reveal>
          <div className="trust-grid">
            <Reveal className="trust-panel trust-panel-dark">
              <h3>Use the right number</h3>
              <p>Only use the WhatsApp number and support email listed on this website.</p>
              <a href="/official-whatsapp">Verify the WhatsApp number</a>
            </Reveal>
            {TRUST_CHECKS.map((item) => (
              <Reveal className="trust-panel" key={item}>
                <span>{item}</span>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section guide-strip">
          <Reveal className="section-heading">
            <p className="eyebrow">Helpful guides</p>
            <h2>Simple guides before you pay.</h2>
          </Reveal>
          <div className="guide-grid">
            {GUIDE_PAGES.slice(0, 4).map((guide) => (
              <Reveal key={guide.path}>
                <a href={guide.path} className="guide-card">
                  <h3>{guide.title}</h3>
                  <p>{guide.summary}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </section>

        <ClosingCta title="Start with the official FirstOption chat" description="Open WhatsApp, send Hi, and choose the service you need from the menu." />
      </main>
    </SiteChrome>
  );
}

function ServicesPage() {
  return (
    <SiteChrome currentPath="/services">
      <main className="subpage">
        <PageHero
          eyebrow="Services"
          title="Choose what you want to do on WhatsApp."
          description="Choose airtime, data, electricity, cable TV, exam pins, internet, gift cards, crypto or virtual cards."
        />
        <section className="section services-page-grid">
          {SERVICES.map((service) => (
            <Reveal key={service.slug}>
              <ServiceCard service={service} large />
            </Reveal>
          ))}
        </section>
        <ClosingCta title="Start with FirstOption on WhatsApp" description="Send Hi, choose a service and follow the prompts." />
      </main>
    </SiteChrome>
  );
}

function HowItWorksPage() {
  return (
    <SiteChrome currentPath="/how-it-works">
      <main className="subpage">
        <PageHero
          eyebrow="How it works"
          title="Start on WhatsApp. Finish in a few clear steps."
          description="FirstOption keeps the process simple: choose what you need, check the details, pay and get your receipt."
        />
        <section className="section split-section">
          <Reveal>
            <h2>The basic steps</h2>
            <p>Most purchases follow the same pattern, whether you are buying airtime, paying a bill, renewing cable TV or using gift cards and crypto.</p>
          </Reveal>
          <div className="detail-list">
            {["Send Hi on WhatsApp", "Choose a service", "Check the details", "Pay and get your receipt"].map((item) => (
              <Reveal className="detail-item" key={item}>
                <span />
                <strong>{item}</strong>
              </Reveal>
            ))}
          </div>
        </section>
        <section className="section related-section">
          <Reveal className="section-heading">
            <p className="eyebrow">Popular services</p>
            <h2>Choose what you want to do next.</h2>
          </Reveal>
          <div className="feature-grid feature-grid-three">
            {SERVICES.slice(0, 6).map((service) => (
              <Reveal key={service.slug}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </section>
        <ClosingCta title="Start on WhatsApp" description="Send Hi to FirstOption and choose what you need." />
      </main>
    </SiteChrome>
  );
}

function ReferralProgramPage() {
  return (
    <SiteChrome currentPath="/referral">
      <main className="subpage">
        <PageHero
          eyebrow="Refer & Earn"
          title="Invite people to FirstOption and earn rewards."
          description="Refer & Earn is a reward program, not a core payment service. Share FirstOption with friends, groups and your community."
        />
        <section className="section visual-band">
          <Reveal className="visual-copy">
            <p className="eyebrow">How it works</p>
            <h2>Share FirstOption. Earn when people start using it.</h2>
            <p>Ask about Refer & Earn on WhatsApp to confirm the current reward rules before you start sharing.</p>
            <a href={WHATSAPP_START_URL} className="primary-btn" target="_blank" rel="noreferrer">Ask about Refer & Earn</a>
          </Reveal>
          <Reveal className="visual-image">
            <div className="referral-visual" aria-label="Refer and earn preview">
              <div className="referral-ticket">
                <img src="/service-icons/referral.png" alt="" />
                <span>Refer & Earn</span>
                <strong>Share your link</strong>
                <p>Invite friends and earn when they use FirstOption.</p>
              </div>
              <div className="referral-mini referral-mini-top">Group ready</div>
              <div className="referral-mini referral-mini-bottom">Reward earned</div>
            </div>
          </Reveal>
        </section>
      </main>
    </SiteChrome>
  );
}

function ServiceLandingPage({ service }: { service: Service }) {
  const related = SERVICES.filter((item) => item.slug !== service.slug).slice(0, 3);
  return (
    <SiteChrome currentPath={service.path}>
      <main className="subpage">
        <section className="service-hero">
          <Reveal className="service-hero-copy">
            <p className="eyebrow">{service.category}</p>
            <h1>{service.name} on WhatsApp</h1>
            <p>{service.summary}</p>
            <div className="hero-actions">
              <a href={WHATSAPP_START_URL} className="primary-btn" target="_blank" rel="noreferrer">
                Start on WhatsApp
              </a>
              <a href="/official-whatsapp" className="secondary-btn">Verify first</a>
            </div>
          </Reveal>
          <Reveal className="service-hero-art">
            <img src={service.image} alt="" />
          </Reveal>
        </section>
        <section className="section split-section">
          <Reveal>
            <h2>How it works</h2>
            <p>{service.steps}</p>
          </Reveal>
          <div className="detail-list">
            {service.details.map((detail) => (
              <Reveal className="detail-item" key={detail}>
                <span />
                <strong>{detail}</strong>
              </Reveal>
            ))}
          </div>
        </section>
        <section className="section related-section">
          <Reveal className="section-heading">
            <p className="eyebrow">Related services</p>
            <h2>More things you can do.</h2>
          </Reveal>
          <div className="feature-grid feature-grid-three">
            {related.map((item) => (
              <Reveal key={item.slug}>
                <ServiceCard service={item} />
              </Reveal>
            ))}
          </div>
        </section>
        <ClosingCta title={`Start ${service.shortName} on WhatsApp`} description="Send Hi to FirstOption and choose the service you need." />
      </main>
    </SiteChrome>
  );
}

function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="page-hero">
      <Reveal>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{description}</p>
      </Reveal>
    </section>
  );
}

function WalletFundingPage() {
  return (
    <SiteChrome currentPath="/wallet-funding">
      <main className="subpage">
        <PageHero
          eyebrow="Payments"
          title="Pay faster when you use FirstOption again."
          description="Some services may ask you to add money before you pay. Always check the amount before you continue."
        />
        <section className="section split-section">
          <Reveal>
            <h2>What to check</h2>
            <p>Before you pay, confirm the service, phone number, meter number, smartcard number or card details. Keep your receipt after payment.</p>
          </Reveal>
          <div className="detail-list">
            {["Correct service", "Correct amount", "Receipt after payment", "Support on WhatsApp"].map((item) => (
              <Reveal className="detail-item" key={item}>
                <span />
                <strong>{item}</strong>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
    </SiteChrome>
  );
}

function AboutPage() {
  return (
    <SiteChrome currentPath="/about">
      <main className="subpage">
        <PageHero
          eyebrow="About FirstOption"
          title="A simple way to buy everyday services on WhatsApp."
          description="FirstOption helps people buy airtime, data, electricity, cable TV, exam pins, internet, gift cards, crypto and virtual cards."
        />
        <section className="section split-section">
          <Reveal>
            <h2>What we do</h2>
            <p>We make common payments easier from WhatsApp. Choose what you need, check the details and pay.</p>
          </Reveal>
          <Reveal className="identity-card">
            <strong>{LEGAL_NAME}</strong>
            <span>CAC BN {CAC_BUSINESS_NUMBER}</span>
            <span>{OPERATING_COUNTRY}</span>
            <span>{SUPPORT_EMAIL}</span>
          </Reveal>
        </section>
      </main>
    </SiteChrome>
  );
}

function ContactPage() {
  return (
    <SiteChrome currentPath="/contact">
      <main className="subpage">
        <PageHero
          eyebrow="Contact"
          title="Contact FirstOption."
          description="Use these details when you need help or want to confirm you are speaking with the right FirstOption account."
        />
        <section className="section contact-grid">
          {[
            { label: "WhatsApp", value: OFFICIAL_WHATSAPP_DISPLAY, href: WHATSAPP_START_URL },
            { label: "Support email", value: SUPPORT_EMAIL, href: SUPPORT_EMAIL_LINK },
            { label: "Website", value: WEBSITE_URL.replace("https://", ""), href: WEBSITE_URL },
          ].map((item) => (
            <Reveal key={item.label}>
              <a href={item.href} className="contact-card">
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </a>
            </Reveal>
          ))}
        </section>
      </main>
    </SiteChrome>
  );
}

function OfficialWhatsAppPage() {
  return (
    <SiteChrome currentPath="/official-whatsapp">
      <main className="subpage">
        <PageHero
          eyebrow="Official WhatsApp"
          title="Use the right FirstOption WhatsApp number."
          description="Before you send money or details, check that the number matches what is shown here."
        />
        <section className="section trust-grid">
          {TRUST_CHECKS.map((item) => (
            <Reveal className="trust-panel" key={item}>
              <span>{item}</span>
            </Reveal>
          ))}
        </section>
        <ClosingCta title="Start from the right WhatsApp number" description="Use the WhatsApp link on this website when you want to begin." />
      </main>
    </SiteChrome>
  );
}

function AntiScamPage() {
  return (
    <SiteChrome currentPath="/anti-scam">
      <main className="subpage">
        <PageHero
          eyebrow="Anti-scam guide"
          title="Verify FirstOption before you send money, card details or personal data."
          description="The WhatsApp number, support email, website and social handles should match the details listed here."
        />
        <section className="section split-section">
          <Reveal>
            <h2>Stop if you see these signs</h2>
            <ul className="clean-list">
              <li>A different WhatsApp number asks you to pay.</li>
              <li>A profile pressures you to send money quickly.</li>
              <li>Support asks for passwords, OTPs or private account access.</li>
            </ul>
          </Reveal>
          <Reveal>
            <h2>Safer way</h2>
            <ul className="clean-list">
              <li>Start from the official website or WhatsApp link.</li>
              <li>Check the amount and service before you pay.</li>
              <li>Email support when you need written help.</li>
            </ul>
          </Reveal>
        </section>
      </main>
    </SiteChrome>
  );
}

function GuidePage({ guide }: { guide: Guide }) {
  return (
    <SiteChrome currentPath={guide.path}>
      <main className="subpage">
        <PageHero eyebrow="Guide" title={guide.title} description={guide.summary} />
        <section className="section split-section">
          <Reveal>
            <h2>Start from the official channel</h2>
            <p>Use the WhatsApp number listed on this website. Check the service, amount and details before you pay.</p>
          </Reveal>
          <Reveal>
            <h2>What to check</h2>
            <ul className="clean-list">
              <li>Service name and destination details.</li>
              <li>Total amount before payment.</li>
              <li>Receipt or reference after payment.</li>
            </ul>
          </Reveal>
        </section>
      </main>
    </SiteChrome>
  );
}

function ClosingCta({ title, description }: { title: string; description: string }) {
  return (
    <section className="closing-cta">
      <Reveal>
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={WHATSAPP_START_URL} className="primary-btn" target="_blank" rel="noreferrer">
          Message FirstOption on WhatsApp
        </a>
        <div className="closing-meta">
          <span>{OFFICIAL_WHATSAPP_DISPLAY}</span>
          <span>{SUPPORT_EMAIL}</span>
        </div>
      </Reveal>
    </section>
  );
}

function PaymentResultPage({ search }: { search: string }) {
  const params = new URLSearchParams(search);
  const status = params.get("status");
  const failed = Boolean(status && status !== "successful" && status !== "completed");

  return (
    <div className="payment-result-page">
      <div className="payment-result-card">
        <div className="payment-brand-strip">
          <div className="payment-brand-panel">
            <img src={logo} alt="FirstOption" />
          </div>
          <span>+</span>
          <div className="payment-brand-panel">
            <img src={flutterwaveLogo} alt="Flutterwave" />
          </div>
        </div>
        <div className={`payment-status ${failed ? "payment-status-failed" : ""}`}>{failed ? "Payment not completed" : "Payment confirmed"}</div>
        <h1>{failed ? "Return to WhatsApp and try again" : "Payment successful"}</h1>
        <p>{failed ? "Your payment did not complete. Go back to WhatsApp and try again." : "Your payment has been received. Go back to FirstOption on WhatsApp for your receipt."}</p>
        <div className="payment-steps">
          {["Return to WhatsApp", "Open FirstOption chat", "Check your receipt"].map((item, index) => (
            <div key={item}>
              <span>{index + 1}</span>
              <strong>{item}</strong>
            </div>
          ))}
        </div>
        <a href="/" className="primary-btn">Back to FirstOption</a>
      </div>
    </div>
  );
}

function App({ initialPath = "/", initialSearch = "" }: AppProps) {
  const { pathname, search } = resolveLocation(initialPath, initialSearch);
  const currentPath = normalizePath(pathname);
  const service = useMemo(() => getServiceByPath(currentPath), [currentPath]);
  const guide = useMemo(() => getGuideByPath(currentPath), [currentPath]);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const title = currentPageLabel(currentPath);
    document.title = title === "Home"
      ? "FirstOption Digital Services | Buy Airtime, Data, Bills, Crypto & Gift Cards on WhatsApp"
      : `${title} | FirstOption Digital Services`;
  }, [currentPath]);

  if (currentPath === "/payment-success") return <PaymentResultPage search={search} />;
  if (service) return <ServiceLandingPage service={service} />;
  if (guide) return <GuidePage guide={guide} />;

  switch (currentPath) {
    case "/services":
      return <ServicesPage />;
    case "/how-it-works":
      return <HowItWorksPage />;
    case "/referral":
    case "/services/referral":
      return <ReferralProgramPage />;
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
