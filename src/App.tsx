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

const SERVICE_LINKS: FooterLink[] = [
  { label: "Airtime & Data", href: "/services#active-services" },
  { label: "Electricity & Cable", href: "/services#active-services" },
  { label: "Wallet Funding", href: "/services#wallet-funding" },
];

const SERVICE_CARDS = [
  { icon: "📱", title: "Airtime Top-Up", desc: "MTN, Airtel, Glo, 9mobile — instant delivery" },
  { icon: "📶", title: "Data Bundles", desc: "Cheap SME & CG data plans for all networks" },
  { icon: "💡", title: "Electricity", desc: "Prepaid meter tokens for all DISCOs nationwide" },
  { icon: "📺", title: "Cable TV", desc: "DSTV, GOtv, Startimes — renew or upgrade" },
  { icon: "🎯", title: "Betting Funding", desc: "Fund Bet9ja, SportyBet & 14 more platforms" },
  { icon: "💸", title: "Airtime to Cash", desc: "Convert excess airtime to real money" },
  { icon: "📝", title: "Exam Pins", desc: "WAEC, NECO, JAMB result checker & registration" },
  { icon: "🌐", title: "Internet", desc: "Spectranet, Smile & other ISP subscriptions" },
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

function getLinkAttributes(link: FooterLink) {
  return link.external ? { target: "_blank", rel: "noreferrer" } : {};
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
          {SERVICE_CARDS.map((service) => (
            <div className="service-card" key={service.title}>
              <span className="service-icon">{service.icon}</span>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
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
        <a href="/official-whatsapp" className="hero-trust-item hero-trust-link">
          Verify the official channel
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
          {SERVICE_CARDS.map((service) => (
            <div className="service-card" key={service.title}>
              <span className="service-icon">{service.icon}</span>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
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
            <h3>Public identity stays consistent</h3>
            <p>
              The website, WhatsApp number, email and social handle are aligned to help
              users and search engines identify the same business correctly.
            </p>
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

  switch (normalizedPath) {
    case "/services":
      return <ServicesPage />;
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
