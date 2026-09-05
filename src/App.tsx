import {
  ArrowRight,
  ArrowLeft,
  Building2,
  Check,
  CheckCheck,
  ChevronRight,
  CircleDollarSign,
  Code2,
  Headphones,
  Landmark,
  Link2,
  LockKeyhole,
  Menu,
  MessageCircleMore,
  Mic2,
  Play,
  PhoneCall,
  QrCode,
  ReceiptText,
  RefreshCcw,
  Send,
  ShieldCheck,
  Users,
  Video,
  WalletCards,
  X,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState, type CSSProperties, type ReactNode } from "react";
import "./App.css";
import logo from "/logo.png";
import flutterwaveLogo from "/Flutterwave_whitebg.svg";
import {
  CAC_BUSINESS_NUMBER,
  GUIDE_PAGES,
  LEGAL_LINKS,
  LEGAL_NAME,
  NAV_LINKS,
  OFFICIAL_WHATSAPP_DISPLAY,
  OPERATING_COUNTRY,
  SERVICES,
  SOCIAL_LINKS,
  SUPPORT_EMAIL,
  SUPPORT_EMAIL_LINK,
  TRUST_CHECKS,
  WEBSITE_URL,
  WHATSAPP_START_URL,
  type Guide,
  type LinkItem,
  type Service,
} from "./siteData";

type AppProps = { initialPath?: string; initialSearch?: string };

function BrandLogo({ onDark = false, markOnly = false, decorative = false }: { onDark?: boolean; markOnly?: boolean; decorative?: boolean }) {
  const className = `brand-logo${onDark ? " brand-logo-on-dark" : ""}${markOnly ? " brand-mark" : ""}`;
  return <span className={className} role={decorative ? undefined : "img"} aria-label={decorative ? undefined : "FirstOption"} aria-hidden={decorative || undefined} style={{ backgroundImage: `url(${logo})` }} />;
}

const PRODUCT_LINKS: LinkItem[] = [
  { label: "Personal payments", href: "/personal" },
  { label: "Business payments", href: "/business" },
  { label: "Group collections", href: "/groups" },
  { label: "Payment links & QR", href: "/payments" },
  { label: "Developer tools", href: "/developers" },
];

const NETWORK_AREAS: Array<{ icon: LucideIcon; number: string; title: string; copy: string; href: string }> = [
  {
    icon: Send,
    number: "01",
    title: "People",
    copy: "Send, receive, request and claim money in the conversations where plans are already being made.",
    href: "/personal",
  },
  {
    icon: Building2,
    number: "02",
    title: "Businesses",
    copy: "Collect customer payments with clear amounts, references and confirmation for both sides.",
    href: "/business",
  },
  {
    icon: Users,
    number: "03",
    title: "Groups",
    copy: "Organize dues, contributions and shared targets without manually chasing every transfer.",
    href: "/groups",
  },
];

function resolveLocation(initialPath = "/", initialSearch = "") {
  if (typeof window !== "undefined") return { pathname: window.location.pathname, search: window.location.search };
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
  const fixed: Record<string, string> = {
    "/": "Home",
    "/personal": "Personal",
    "/business": "Business",
    "/groups": "Group collections",
    "/payments": "Payments",
    "/developers": "Developers",
    "/services": "Services",
    "/how-it-works": "How it works",
    "/referral": "Refer & Earn",
    "/services/referral": "Refer & Earn",
    "/wallet-funding": "Add money",
    "/about": "About",
    "/contact": "Contact",
    "/official-whatsapp": "Official WhatsApp",
    "/anti-scam": "Anti-scam guide",
  };
  return fixed[pathname] ?? getServiceByPath(pathname)?.name ?? getGuideByPath(pathname)?.title ?? "FirstOption";
}

function isPathActive(currentPath: string, href: string) {
  if (href === "/services") return currentPath === href || (currentPath.startsWith("/services/") && currentPath !== "/services/referral");
  return currentPath === href;
}

function getLinkAttrs(link: LinkItem) {
  return link.external ? { target: "_blank", rel: "noreferrer" } : {};
}

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`reveal ${className}`.trim()}>{children}</div>;
}

function SiteMotion({ currentPath }: { currentPath: string }) {
  useEffect(() => {
    if (typeof window === "undefined" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let disposed = false;
    let cleanup = () => {};

    const setup = async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([import("gsap"), import("gsap/ScrollTrigger")]);
      if (disposed) return;
      gsap.registerPlugin(ScrollTrigger);
      const context = gsap.context(() => {
        const nav = document.querySelector(".site-nav-inner");
        const heroCopy = document.querySelectorAll(".motion-hero-copy > *");
        const phone = document.querySelector(".motion-phone");
        const phoneContent = document.querySelectorAll(".phone-message, .phone-action");
        if (nav) gsap.from(nav, { autoAlpha: 0, y: -22, duration: 0.8, ease: "power3.out" });
        if (heroCopy.length) gsap.from(heroCopy, { autoAlpha: 0, y: 30, duration: 0.85, stagger: 0.09, ease: "power3.out" });
        if (phone) gsap.from(phone, { autoAlpha: 0, y: 64, rotationY: -15, rotationZ: 2, scale: 0.9, duration: 1.15, ease: "power4.out", delay: 0.18 });
        if (phoneContent.length) gsap.from(phoneContent, { autoAlpha: 0, y: 16, stagger: 0.12, duration: 0.55, ease: "power3.out", delay: 0.72 });
        document.querySelectorAll<HTMLElement>(".reveal").forEach((element) => {
          if (element.closest(".hero")) return;
          gsap.from(element, {
            autoAlpha: 0,
            y: 36,
            duration: 0.78,
            ease: "power3.out",
            scrollTrigger: { trigger: element, start: "top 88%", once: true },
          });
        });
        document.querySelectorAll<HTMLElement>(".service-card").forEach((card) => {
          gsap.from(card, {
            autoAlpha: 0,
            y: 26,
            scale: 0.98,
            duration: 0.62,
            ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 92%", once: true },
          });
        });
        const processLine = document.querySelector(".process-line");
        const processFill = processLine?.querySelector("span");
        if (processLine && processFill) {
          gsap.from(processFill, {
            scaleX: 0,
            transformOrigin: "left center",
            ease: "none",
            scrollTrigger: { trigger: processLine, start: "top 82%", end: "top 48%", scrub: 0.7 },
          });
        }
      });
      cleanup = () => context.revert();
    };
    void setup();
    return () => {
      disposed = true;
      cleanup();
    };
  }, [currentPath]);
  return null;
}

function SiteHeader({ currentPath }: { currentPath: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [condensed, setCondensed] = useState(false);
  const menuOpenRef = useRef(false);

  useEffect(() => {
    menuOpenRef.current = menuOpen;
  }, [menuOpen]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let lastY = window.scrollY;
    let ticking = false;
    const update = () => {
      const nextY = window.scrollY;
      setCondensed(nextY > 24);
      setHidden(!menuOpenRef.current && nextY > 150 && nextY > lastY);
      lastY = nextY;
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen || typeof document === "undefined") return;
    document.body.classList.add("menu-locked");
    return () => document.body.classList.remove("menu-locked");
  }, [menuOpen]);

  return (
    <>
      <header className={`site-nav${hidden ? " site-nav-hidden" : ""}${condensed ? " site-nav-condensed" : ""}`}>
        <div className="site-nav-inner">
          <a className="nav-brand" href="/" aria-label="FirstOption home">
            <BrandLogo decorative />
          </a>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} aria-current={isPathActive(currentPath, link.href) ? "page" : undefined}>
                {link.label}
              </a>
            ))}
          </nav>
          <a className="nav-cta" href={WHATSAPP_START_URL} target="_blank" rel="noreferrer">
            Open WhatsApp <ArrowRight size={17} strokeWidth={2.2} />
          </a>
        </div>
        <button
          className="nav-menu-button"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </header>
      <div className={`mobile-menu${menuOpen ? " mobile-menu-open" : ""}`} aria-hidden={!menuOpen}>
        <button className="mobile-menu-backdrop" type="button" aria-label="Close navigation" onClick={() => setMenuOpen(false)} />
        <div className="mobile-menu-panel">
          <nav aria-label="Mobile navigation">
            <a href="/">Home <ChevronRight size={18} /></a>
            {NAV_LINKS.map((link) => <a key={link.href} href={link.href}>{link.label}<ChevronRight size={18} /></a>)}
          </nav>
          <a className="mobile-menu-cta" href={WHATSAPP_START_URL} target="_blank" rel="noreferrer">
            Open FirstOption on WhatsApp <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <BrandLogo onDark />
          <p>Payments and everyday transactions, through WhatsApp.</p>
          <a href={WHATSAPP_START_URL} target="_blank" rel="noreferrer">Message FirstOption <ArrowRight size={16} /></a>
        </div>
        <div className="footer-column">
          <strong>Product</strong>
          {PRODUCT_LINKS.map((link) => <a href={link.href} key={link.href}>{link.label}</a>)}
          <a href="/referral">Refer & Earn</a>
        </div>
        <div className="footer-column footer-services">
          <strong>Everyday services</strong>
          {SERVICES.map((service) => <a href={service.path} key={service.path}>{service.shortName}</a>)}
        </div>
        <div className="footer-column">
          <strong>Company</strong>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/official-whatsapp">Official WhatsApp</a>
          <a href="/anti-scam">Anti-scam guide</a>
          {SOCIAL_LINKS.map((link) => <a href={link.href} key={link.href} {...getLinkAttrs(link)}>{link.label}</a>)}
        </div>
      </div>
      <div className="footer-bottom">
        <span>{LEGAL_NAME} · CAC BN {CAC_BUSINESS_NUMBER} · {OPERATING_COUNTRY}</span>
        <div>{LEGAL_LINKS.map((link) => <a href={link.href} key={link.href} {...getLinkAttrs(link)}>{link.label}</a>)}</div>
        <span>© 2026 FirstOption</span>
      </div>
    </footer>
  );
}

function SiteChrome({ currentPath, children }: { currentPath: string; children: ReactNode }) {
  return <div className="app"><SiteHeader currentPath={currentPath} />{children}<Footer /></div>;
}

const WAVEFORM_HEIGHTS = [8, 13, 19, 11, 24, 17, 10, 21, 27, 15, 9, 18, 25, 13, 20, 11, 7, 15, 22, 12, 8, 17, 11, 6];

function Waveform({ light = false }: { light?: boolean }) {
  return (
    <span className={`waveform${light ? " waveform-light" : ""}`} aria-hidden="true">
      {WAVEFORM_HEIGHTS.map((height, index) => <i key={`${height}-${index}`} style={{ "--wave-height": `${height}px` } as CSSProperties} />)}
    </span>
  );
}

function ProductPhone({ compact = false }: { compact?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element || typeof window === "undefined" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onMove = (event: PointerEvent) => {
      if (window.innerWidth < 900) return;
      const bounds = element.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      element.style.setProperty("--phone-rx", `${y * -5}deg`);
      element.style.setProperty("--phone-ry", `${x * 8}deg`);
    };
    const reset = () => {
      element.style.setProperty("--phone-rx", "0deg");
      element.style.setProperty("--phone-ry", "0deg");
    };
    element.addEventListener("pointermove", onMove);
    element.addEventListener("pointerleave", reset);
    return () => {
      element.removeEventListener("pointermove", onMove);
      element.removeEventListener("pointerleave", reset);
    };
  }, []);

  return (
    <div className={`product-phone-stage motion-phone${compact ? " product-phone-stage-compact" : ""}`} ref={ref}>
      <div className="product-phone-shadow" aria-hidden="true" />
      <div className="product-phone">
        <div className="phone-hardware phone-hardware-one" />
        <div className="phone-hardware phone-hardware-two" />
        <div className="product-phone-screen">
          <div className="phone-status"><strong>9:41</strong><span aria-hidden="true">● WiFi ▰</span></div>
          <div className="phone-contact">
            <ArrowLeft className="phone-back" size={17} />
            <div className="phone-contact-mark"><BrandLogo markOnly decorative /></div>
            <div><strong>FirstOption</strong><span>online</span></div>
            <div className="phone-contact-actions"><Video size={16} /><PhoneCall size={15} /></div>
          </div>
          <div className="phone-thread">
            <span className="phone-day">Today</span>
            <div className="phone-message phone-message-bot phone-welcome">
              <p>Hi. What would you like to do?</p>
              <div className="phone-menu-options">
                <span>Send or request money <ChevronRight size={11} /></span>
                <span>Buy airtime or data <ChevronRight size={11} /></span>
                <span>Pay a bill <ChevronRight size={11} /></span>
              </div>
              <time>9:40</time>
            </div>
            <div className="phone-message phone-message-user">
              <p>Buy 2GB MTN data for 0906 068 9011</p>
              <time>9:41 <CheckCheck size={10} /></time>
            </div>
            <div className="phone-message phone-message-bot phone-confirmation">
              <span className="message-label">Ready to confirm</span>
              <strong className="phone-service-name">MTN 2GB data</strong>
              <div className="amount-row"><span>Receiving line</span><strong>0906 068 9011</strong></div>
              <div className="reference-row"><span>Total</span><strong>₦2,500.00</strong></div>
              <span className="phone-action"><LockKeyhole size={15} /> Confirm securely</span>
            </div>
          </div>
          <div className="phone-composer"><span>Message</span><Mic2 size={17} /></div>
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ service, large = false }: { service: Service; large?: boolean }) {
  return (
    <a href={service.path} className={`service-card${large ? " service-card-large" : ""}`} style={{ "--service-accent": service.accent } as CSSProperties}>
      <div className="service-card-top">
        <span className="service-mark"><img src={service.image} alt="" loading="lazy" /></span>
        <ArrowRight size={18} />
      </div>
      <span className="service-category">{service.category}</span>
      <h3>{service.name}</h3>
      <p>{service.summary}</p>
      <strong>{service.proof}</strong>
    </a>
  );
}

function CommandDemo() {
  return (
    <div className="whatsapp-demo" aria-label="A natural FirstOption conversation on WhatsApp">
      <div className="whatsapp-demo-header">
        <span className="whatsapp-demo-avatar"><BrandLogo markOnly decorative /></span>
        <div><strong>FirstOption</strong><span>online</span></div>
        <ShieldCheck size={19} />
      </div>
      <div className="whatsapp-demo-thread">
        <span className="whatsapp-day">Today</span>
        <div className="whatsapp-bubble whatsapp-bubble-user"><p>Buy 2GB MTN data</p><time>9:41</time></div>
        <div className="whatsapp-bubble whatsapp-bubble-user whatsapp-voice-note">
          <span className="voice-play voice-play-large"><Play size={13} fill="currentColor" /></span>
          <Waveform />
          <div className="voice-meta"><span>0:06</span><Mic2 size={13} /></div>
        </div>
        <div className="whatsapp-bubble whatsapp-bubble-bot">
          <span className="whatsapp-bot-label"><Check size={13} /> I have the details</span>
          <strong>MTN 2GB data</strong>
          <div><span>Receiving line</span><b>0906 068 9011</b></div>
          <div><span>Total</span><b>₦2,500.00</b></div>
          <span className="whatsapp-confirm"><LockKeyhole size={15} /> Confirm securely</span>
        </div>
        <div className="whatsapp-bubble whatsapp-bubble-bot whatsapp-result"><ReceiptText size={15} /><span>Everything stays clear before you pay.</span></div>
      </div>
      <div className="whatsapp-demo-composer"><span>Message</span><Mic2 size={17} /></div>
    </div>
  );
}

function HomePage() {
  return (
    <SiteChrome currentPath="/">
      <main>
        <section className="hero">
          <div className="hero-grid-lines" aria-hidden="true" />
          <div className="hero-content motion-hero-copy">
            <p className="eyebrow">FirstOption on WhatsApp</p>
            <h1>Send a message.<br /><span>Move money.</span></h1>
            <p className="hero-copy">Type it or say it. FirstOption helps you pay, collect and get everyday transactions done through WhatsApp.</p>
            <div className="hero-actions">
              <a className="button button-primary" href={WHATSAPP_START_URL} target="_blank" rel="noreferrer">Open WhatsApp <ArrowRight size={18} /></a>
              <a className="button button-secondary" href="/how-it-works">See how it works</a>
            </div>
            <div className="hero-prompts" aria-label="Example requests">
              <span>“Send ₦5,000 to Ada”</span>
              <span>“Buy MTN data”</span>
              <span>“Request payment”</span>
            </div>
          </div>
          <div className="hero-product"><ProductPhone /></div>
        </section>

        <div className="hero-service-line">
          <span>Pay, buy and manage</span>
          <div>{SERVICES.slice(0, 8).map((service) => <a href={service.path} key={service.slug}>{service.shortName}</a>)}</div>
        </div>

        <section className="section conversation-section">
          <Reveal className="section-intro section-intro-wide">
            <p className="eyebrow">Speak naturally</p>
            <h2>No commands to memorize.</h2>
            <p>Write the way you normally write. Send a voice note when that is faster. FirstOption finds the right path and asks only for what is missing.</p>
          </Reveal>
          <Reveal><CommandDemo /></Reveal>
        </section>

        <section className="section network-section">
          <Reveal className="section-intro">
            <p className="eyebrow">One connected network</p>
            <h2>Built for the way money already moves.</h2>
          </Reveal>
          <div className="network-grid">
            {NETWORK_AREAS.map(({ icon: Icon, number, title, copy, href }) => (
              <Reveal className="network-item" key={title}>
                <div className="network-item-top"><span>{number}</span><Icon size={25} strokeWidth={1.8} /></div>
                <h3>{title}</h3><p>{copy}</p><a href={href}>Explore <ArrowRight size={16} /></a>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="merchant-story">
          <img src="/firstoption-merchant-studio.jpg" alt="A Nigerian business owner checking a payment on her phone while preparing an order" loading="lazy" />
          <div className="merchant-story-shade" />
          <Reveal className="merchant-story-copy">
            <p className="eyebrow">For business</p>
            <h2>From “I’ve paid” to payment confirmed.</h2>
            <p>Create a request in the customer conversation. FirstOption keeps the amount, order and receipt together.</p>
            <a className="button button-light" href="/business">Explore business payments <ArrowRight size={18} /></a>
          </Reveal>
        </section>

        <section className="section services-section">
          <Reveal className="section-intro section-intro-row">
            <div><p className="eyebrow">Everyday services</p><h2>More reasons to open FirstOption.</h2></div>
            <p>Buy, pay, renew and trade from the same WhatsApp conversation.</p>
          </Reveal>
          <div className="service-grid">
            {SERVICES.map((service) => <ServiceCard service={service} key={service.slug} />)}
          </div>
        </section>

        <section className="section process-section">
          <Reveal className="section-intro section-intro-wide">
            <p className="eyebrow">One clear payment</p>
            <h2>The conversation stays connected to the money.</h2>
          </Reveal>
          <div className="process-line"><span /></div>
          <div className="process-grid">
            {[
              [MessageCircleMore, "Ask", "Send a message, voice note, request link or QR."],
              [ShieldCheck, "Check", "See who you are paying, the amount and the reason."],
              [LockKeyhole, "Confirm", "Authorize the transaction in a focused secure step."],
              [ReceiptText, "Know", "Both sides receive a clear, verifiable receipt."],
            ].map(([Icon, title, copy], index) => {
              const ProcessIcon = Icon as LucideIcon;
              return <Reveal className="process-item" key={title as string}><span>{index + 1}</span><ProcessIcon size={23} /><h3>{title as string}</h3><p>{copy as string}</p></Reveal>;
            })}
          </div>
        </section>

        <section className="section trust-section">
          <Reveal className="trust-statement">
            <ShieldCheck size={34} />
            <p className="eyebrow">Trust is part of the product</p>
            <h2>Know who. Know how much. Know what happened.</h2>
          </Reveal>
          <div className="trust-points">
            {[
              ["Verified identity", "See a trusted name before you act."],
              ["Locked details", "Recipient, amount and purpose stay clear."],
              ["Secure confirmation", "Nothing moves until you approve it."],
              ["Shared receipt", "Both sides see the same result."],
            ].map(([title, copy]) => <Reveal className="trust-point" key={title}><Check size={17} /><div><strong>{title}</strong><span>{copy}</span></div></Reveal>)}
          </div>
        </section>

        <ClosingCta title="Pay, collect and buy what you need on WhatsApp." description="Message FirstOption whenever you are ready." />
      </main>
    </SiteChrome>
  );
}

function PageHero({ eyebrow, title, description, children }: { eyebrow: string; title: string; description: string; children?: ReactNode }) {
  return (
    <section className="page-hero">
      <div className="page-hero-grid" aria-hidden="true" />
      <Reveal className="page-hero-content motion-hero-copy"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{description}</p>{children}</Reveal>
    </section>
  );
}

function FeatureRows({ items }: { items: Array<{ icon: LucideIcon; title: string; copy: string }> }) {
  return <div className="feature-rows">{items.map(({ icon: Icon, title, copy }, index) => <Reveal className="feature-row" key={title}><span>{String(index + 1).padStart(2, "0")}</span><Icon size={23} /><div><h3>{title}</h3><p>{copy}</p></div></Reveal>)}</div>;
}

function PersonalPage() {
  return <SiteChrome currentPath="/personal"><main className="subpage">
    <PageHero eyebrow="FirstOption for people" title="Send it. Request it. Get it done." description="Move money through the conversations you already use, with the details clear before you confirm.">
      <a className="button button-primary" href={WHATSAPP_START_URL} target="_blank" rel="noreferrer">Open WhatsApp <ArrowRight size={18} /></a>
    </PageHero>
    <section className="personal-image-band"><img src="/firstoption-personal-payments.jpg" alt="Two friends reviewing a payment on a phone" /><div><p className="eyebrow">Personal payments</p><h2>Money shared in the conversation.</h2><p>Send it, request it or receive it without losing the people and purpose behind the payment.</p></div></section>
    <section className="section split-copy"><Reveal><p className="eyebrow">Your financial identity</p><h2>Your number connects you. Your name builds trust.</h2></Reveal><Reveal><p>Send to someone you know, respond to a request or share a claim with someone joining FirstOption for the first time.</p></Reveal></section>
    <section className="section"><FeatureRows items={[
      { icon: Send, title: "Send money", copy: "Use a phone number, trusted name, recent recipient, request or QR." },
      { icon: CircleDollarSign, title: "Request money", copy: "Set the amount and reason, then share it in the right conversation." },
      { icon: Link2, title: "Claim money", copy: "Money sent to a new user stays tied to the intended phone number." },
      { icon: ReceiptText, title: "Keep every receipt", copy: "Requests, transfers, refunds and receipts stay organized in one inbox." },
    ]} /></section>
    <ClosingCta title="Move money with a message." description="Open WhatsApp to send, request or receive money." />
  </main></SiteChrome>;
}

function BusinessPage() {
  return <SiteChrome currentPath="/business"><main className="subpage">
    <PageHero eyebrow="FirstOption for business" title="Collect payment where the sale happens." description="Turn a WhatsApp order into a clear payment request, confirmation and record for your business.">
      <a className="button button-primary" href={WHATSAPP_START_URL} target="_blank" rel="noreferrer">Talk to FirstOption <ArrowRight size={18} /></a>
    </PageHero>
    <section className="business-image-band"><img src="/firstoption-merchant-studio.jpg" alt="Nigerian business owner preparing an order" /><div><p className="eyebrow">Social commerce, properly connected</p><h2>No account-number copy. No screenshot matching.</h2></div></section>
    <section className="section"><FeatureRows items={[
      { icon: CircleDollarSign, title: "Payment requests", copy: "Set an amount and order reference, then share it with the customer." },
      { icon: QrCode, title: "Links and QR", copy: "Use the same payment experience in chat, at a counter or on a website." },
      { icon: ReceiptText, title: "Automatic matching", copy: "Keep the payment attached to the customer, amount and order." },
      { icon: Landmark, title: "Settlement your way", copy: "Keep funds ready to use or settle to a verified bank account." },
      { icon: RefreshCcw, title: "Connected refunds", copy: "Return an eligible payment against the original transaction." },
      { icon: Code2, title: "Business infrastructure", copy: "Create payments and receive status through one consistent system." },
    ]} /></section>
    <ClosingCta title="Make every paid order easier to verify." description="Open WhatsApp to create payment requests for your business." />
  </main></SiteChrome>;
}

function GroupsPage() {
  return <SiteChrome currentPath="/groups"><main className="subpage">
    <PageHero eyebrow="Group collections" title="One link for everyone contributing." description="Create dues, open contributions, targets and shared payments for the groups already organizing on WhatsApp." />
    <section className="section collection-demo">
      <Reveal className="collection-copy"><p className="eyebrow">A clearer total</p><h2>Share once. Track every contribution.</h2><p>Participants pay individually while the organizer sees progress without manually matching screenshots.</p></Reveal>
      <Reveal className="collection-visual"><div className="collection-top"><div><span>Family trip</span><strong>₦350,000 target</strong></div><Users size={25} /></div><div className="collection-progress"><span /></div><div className="collection-numbers"><div><strong>₦227,500</strong><span>collected</span></div><div><strong>18</strong><span>contributors</span></div></div><button type="button">Share collection link <Link2 size={16} /></button></Reveal>
    </section>
    <section className="section"><FeatureRows items={[
      { icon: Users, title: "Dues and contributions", copy: "Choose a fixed amount or let each person decide what to give." },
      { icon: CircleDollarSign, title: "Targets and deadlines", copy: "Keep the goal, progress and payment status visible." },
      { icon: ShieldCheck, title: "Privacy controls", copy: "Choose what contributors can see and keep organizer details clear." },
    ]} /></section>
    <ClosingCta title="Organize the money without leaving the group." description="Create a collection and share one clear link." />
  </main></SiteChrome>;
}

function PaymentsPage() {
  return <SiteChrome currentPath="/payments"><main className="subpage">
    <PageHero eyebrow="Payment tools" title="One payment, shared in every useful way." description="A request can travel through WhatsApp, a payment link, a QR code, an invoice or a checkout button." />
    <section className="section payment-tools-grid">
      {[
        [MessageCircleMore, "WhatsApp request", "Share the payment in the customer conversation."],
        [Link2, "Payment link", "Use one protected reference across social channels."],
        [QrCode, "QR payment", "Accept a flexible or exact amount in person."],
        [ReceiptText, "Invoice", "Keep the amount, purpose and reference together."],
      ].map(([Icon, title, copy]) => { const ToolIcon = Icon as LucideIcon; return <Reveal className="payment-tool" key={title as string}><ToolIcon size={28} /><h2>{title as string}</h2><p>{copy as string}</p></Reveal>; })}
    </section>
    <section className="section split-copy"><Reveal><p className="eyebrow">Pay your way</p><h2>Use the source that makes sense.</h2></Reveal><Reveal><p>Complete a payment from your FirstOption balance or an enabled bank, card, USSD or QR route. The request stays connected while payment is confirmed.</p><a href="/wallet-funding">How adding money works <ArrowRight size={16} /></a></Reveal></section>
    <ClosingCta title="Create the payment. Share it anywhere." description="FirstOption keeps the important details together." />
  </main></SiteChrome>;
}

function DevelopersPage() {
  return <SiteChrome currentPath="/developers"><main className="subpage developer-page">
    <PageHero eyebrow="Developer infrastructure" title="One payment layer for conversations and commerce." description="Create a payment, share it through WhatsApp or QR, check its status and receive a clear event when it completes." />
    <section className="section developer-console">
      <Reveal className="developer-copy"><Code2 size={30} /><h2>A simpler integration surface.</h2><p>One payment ID connects the customer, amount, status, receipt and webhook.</p></Reveal>
      <Reveal className="code-window"><div><span /><span /><span /></div><pre>{`POST /payments\n{\n  "amount": 25000,\n  "currency": "NGN",\n  "purpose": "Order 104"\n}\n\n→ payment_url\n→ qr\n→ status\n→ receipt`}</pre></Reveal>
    </section>
    <ClosingCta title="Connect your product to FirstOption." description="Talk to us about payments for your business or platform." />
  </main></SiteChrome>;
}

function ServicesPage() {
  return <SiteChrome currentPath="/services"><main className="subpage">
    <PageHero eyebrow="Everyday services" title="What do you need to get done?" description="Choose a service in WhatsApp, or type what you need.">
      <a className="button button-primary" href={WHATSAPP_START_URL} target="_blank" rel="noreferrer">Open WhatsApp <ArrowRight size={18} /></a>
    </PageHero>
    <section className="section service-grid services-page-grid">{SERVICES.map((service) => <ServiceCard service={service} large key={service.slug} />)}</section>
    <section className="digital-services-story"><img src="/firstoption-digital-services.jpg" alt="A customer using digital services from a phone" loading="lazy" /><div className="digital-services-shade" /><Reveal className="digital-services-copy"><p className="eyebrow">Gift cards and crypto</p><h2>Buy. Sell. Send. Receive.</h2><p>Move between supported digital value and the conversations where you need it.</p><div><a className="button button-light" href="/services/gift-cards">Gift cards <ArrowRight size={17} /></a><a className="button button-secondary" href="/services/crypto">Crypto <ArrowRight size={17} /></a></div></Reveal></section>
    <ClosingCta title="Need airtime, data, bill payment or more?" description="Open WhatsApp and choose what you want to buy or pay for." />
  </main></SiteChrome>;
}

function HowItWorksPage() {
  return <SiteChrome currentPath="/how-it-works"><main className="subpage">
    <PageHero eyebrow="How FirstOption works" title="Type it. Say it. Check it. Done." description="Write or speak naturally on WhatsApp. FirstOption gathers the right details and shows you a clear confirmation before anything moves." />
    <section className="section two-column how-lead"><Reveal className="section-intro"><p className="eyebrow">Conversation first</p><h2>You do not need to learn commands.</h2><p>Use normal English, shorthand or a voice note. Choose from buttons and lists when they are faster.</p></Reveal><Reveal><CommandDemo /></Reveal></section>
    <section className="section"><FeatureRows items={[
      { icon: MessageCircleMore, title: "Describe what you need", copy: "Type a request, send a voice note or choose from the menu." },
      { icon: Headphones, title: "Answer only what is missing", copy: "FirstOption asks for the number, provider, plan or amount it still needs." },
      { icon: ShieldCheck, title: "Review the full details", copy: "See the recipient, service, amount and fee before continuing." },
      { icon: LockKeyhole, title: "Confirm securely", copy: "Use a focused secure screen when authorization is required." },
      { icon: ReceiptText, title: "Receive the result", copy: "Get the receipt, token, pin or confirmation back in WhatsApp." },
    ]} /></section>
    <ClosingCta title="No special wording required." description="Open WhatsApp and type or say your request." />
  </main></SiteChrome>;
}

function ServiceLandingPage({ service }: { service: Service }) {
  const related = SERVICES.filter((item) => item.slug !== service.slug).slice(0, 3);
  return <SiteChrome currentPath={service.path}><main className="subpage">
    <PageHero eyebrow={service.category} title={`${service.cta}, right from WhatsApp.`} description={service.summary}>
      <a className="button button-primary" href={WHATSAPP_START_URL} target="_blank" rel="noreferrer">{service.cta} <ArrowRight size={18} /></a>
    </PageHero>
    <section className="section service-detail-lead" style={{ "--service-accent": service.accent } as CSSProperties}>
      <Reveal className="service-detail-art"><img src={service.image} alt="" /><span>{service.proof}</span></Reveal>
      <Reveal className="section-intro"><p className="eyebrow">How it works</p><h2>{service.steps}</h2></Reveal>
    </section>
    <section className="section feature-rows">{service.details.map((detail, index) => <Reveal className="feature-row" key={detail}><span>{String(index + 1).padStart(2, "0")}</span><Check size={22} /><div><h3>{detail}</h3></div></Reveal>)}</section>
    <section className="section related-services"><Reveal className="section-intro"><p className="eyebrow">You may also need</p><h2>More things you can do.</h2></Reveal><div className="related-grid">{related.map((item) => <ServiceCard service={item} key={item.slug} />)}</div></section>
    <ClosingCta title={`${service.cta} on WhatsApp.`} description="Open the official FirstOption conversation and tell us what you need." />
  </main></SiteChrome>;
}

function ReferralProgramPage() {
  return <SiteChrome currentPath="/referral"><main className="subpage">
    <PageHero eyebrow="Refer & Earn" title="Share FirstOption with people you trust." description="Invite friends and groups with your referral link and follow the current reward steps in WhatsApp." />
    <section className="section referral-layout"><Reveal className="referral-pass"><BrandLogo onDark decorative /><span>YOUR REFERRAL LINK</span><strong>firstoption.com.ng/r/you</strong><button type="button">Share link <Send size={16} /></button></Reveal><Reveal className="section-intro"><p className="eyebrow">Built into your network</p><h2>Your link connects every successful referral to you.</h2><p>Open Refer & Earn in FirstOption to view your link, current reward rules and progress.</p></Reveal></section>
    <ClosingCta title="Open Refer & Earn in WhatsApp." description="Check the current rules before you start sharing." />
  </main></SiteChrome>;
}

function WalletFundingPage() {
  return <SiteChrome currentPath="/wallet-funding"><main className="subpage">
    <PageHero eyebrow="Add money" title="Create one account. Use it whenever you need." description="Your permanent Paga account gives you a reusable way to add money to FirstOption." />
    <section className="section"><FeatureRows items={[
      { icon: MessageCircleMore, title: "Send Hi to FirstOption", copy: "Choose the service you want from the WhatsApp conversation." },
      { icon: WalletCards, title: "Open the service and tap Fund", copy: "The Fund option appears inside the secure service webview." },
      { icon: Landmark, title: "Create your permanent Paga account", copy: "Complete the first-time setup and keep the account details." },
      { icon: RefreshCcw, title: "Transfer any amount whenever you need", copy: "The permanent account is yours to reuse for future FirstOption transactions." },
    ]} /></section>
    <ClosingCta title="Choose a service first." description="Open WhatsApp, choose what you want to do and tap Fund inside the secure screen." />
  </main></SiteChrome>;
}

function AboutPage() {
  return <SiteChrome currentPath="/about"><main className="subpage">
    <PageHero eyebrow="About FirstOption" title="The payment network for commerce happening on WhatsApp." description="FirstOption gives people and businesses a trusted way to pay, collect and manage transactions where their conversations already happen." />
    <section className="section split-copy"><Reveal><p className="eyebrow">Our direction</p><h2>WhatsApp is the interface. FirstOption connects the payment.</h2></Reveal><Reveal><p>Everyday services create useful habits. Personal payments, merchants, groups and developer tools connect those habits into a wider network.</p></Reveal></section>
    <section className="section identity-strip"><div><span>Registered name</span><strong>{LEGAL_NAME}</strong></div><div><span>CAC number</span><strong>BN {CAC_BUSINESS_NUMBER}</strong></div><div><span>Country</span><strong>{OPERATING_COUNTRY}</strong></div></section>
    <ClosingCta title="Everything begins in one conversation." description="Open FirstOption on WhatsApp and make your next payment." />
  </main></SiteChrome>;
}

function ContactPage() {
  return <SiteChrome currentPath="/contact"><main className="subpage">
    <PageHero eyebrow="Contact" title="Reach the real FirstOption." description="Use the details below for support, business conversations and channel verification." />
    <section className="section contact-list">
      {[
        ["WhatsApp", OFFICIAL_WHATSAPP_DISPLAY, WHATSAPP_START_URL],
        ["Support email", SUPPORT_EMAIL, SUPPORT_EMAIL_LINK],
        ["Website", WEBSITE_URL.replace("https://", ""), WEBSITE_URL],
      ].map(([label, value, href]) => <Reveal key={label}><a href={href} className="contact-row"><span>{label}</span><strong>{value}</strong><ArrowRight size={19} /></a></Reveal>)}
    </section>
  </main></SiteChrome>;
}

function OfficialWhatsAppPage() {
  return <SiteChrome currentPath="/official-whatsapp"><main className="subpage">
    <PageHero eyebrow="Official WhatsApp" title="Check the number before you transact." description="Use this website whenever you need to confirm that you are speaking with the real FirstOption." />
    <section className="section verification-layout"><Reveal className="official-number"><MessageCircleMore size={31} /><span>Official WhatsApp</span><strong>{OFFICIAL_WHATSAPP_DISPLAY}</strong><a href={WHATSAPP_START_URL} target="_blank" rel="noreferrer">Open the official chat <ArrowRight size={17} /></a></Reveal><div className="verification-list">{TRUST_CHECKS.slice(1).map((item) => <Reveal className="verification-item" key={item}><Check size={18} /><span>{item}</span></Reveal>)}</div></section>
    <ClosingCta title="Use the right conversation." description="Open FirstOption directly from this website." />
  </main></SiteChrome>;
}

function AntiScamPage() {
  return <SiteChrome currentPath="/anti-scam"><main className="subpage">
    <PageHero eyebrow="Anti-scam guide" title="Pause when the details do not match." description="A real FirstOption transaction should be clear about the account, amount, service and final status." />
    <section className="section safety-columns"><Reveal><ShieldCheck size={27} /><h2>Check first</h2><ul><li>Use the official website or WhatsApp number.</li><li>Review the person, business, service and amount.</li><li>Keep the receipt or transaction reference.</li></ul></Reveal><Reveal><LockKeyhole size={27} /><h2>Never share</h2><ul><li>Your password, PIN or one-time code with support.</li><li>Private card or account access in a chat.</li><li>Money with a different number because someone pressures you.</li></ul></Reveal></section>
  </main></SiteChrome>;
}

function GuidePage({ guide }: { guide: Guide }) {
  return <SiteChrome currentPath={guide.path}><main className="subpage"><PageHero eyebrow="FirstOption guide" title={guide.title} description={guide.summary} /><section className="section"><FeatureRows items={[
    { icon: MessageCircleMore, title: "Open the official chat", copy: "Use the WhatsApp link on this website and choose what you want to buy or pay for." },
    { icon: Check, title: "Check every detail", copy: "Review the service, receiving account and amount before confirming." },
    { icon: ReceiptText, title: "Keep the result", copy: "Save the receipt, token, pin or transaction reference sent to WhatsApp." },
  ]} /></section><ClosingCta title="Get it done on WhatsApp." description="Open the official FirstOption conversation." /></main></SiteChrome>;
}

function ClosingCta({ title, description }: { title: string; description: string }) {
  return <section className="closing-cta"><div className="closing-grid" aria-hidden="true" /><Reveal><BrandLogo onDark decorative /><h2>{title}</h2><p>{description}</p><a className="button button-white" href={WHATSAPP_START_URL} target="_blank" rel="noreferrer">Open WhatsApp <ArrowRight size={18} /></a><span>{OFFICIAL_WHATSAPP_DISPLAY}</span></Reveal></section>;
}

function PaymentResultPage({ search }: { search: string }) {
  const status = new URLSearchParams(search).get("status");
  const failed = Boolean(status && status !== "successful" && status !== "completed");
  return <div className="payment-result-page"><div className="payment-result-card"><div className="payment-brand-strip"><BrandLogo /><span>+</span><img src={flutterwaveLogo} alt="Flutterwave" /></div><span className={`payment-status${failed ? " payment-status-failed" : ""}`}>{failed ? "Payment not completed" : "Payment confirmed"}</span><h1>{failed ? "Return to WhatsApp and try again" : "Payment successful"}</h1><p>{failed ? "Your payment did not complete. Return to FirstOption and try again." : "Your payment has been received. Return to WhatsApp for the receipt and next step."}</p><a className="button button-primary" href={WHATSAPP_START_URL}>Return to WhatsApp <ArrowRight size={18} /></a></div></div>;
}

function App({ initialPath = "/", initialSearch = "" }: AppProps) {
  const { pathname, search } = resolveLocation(initialPath, initialSearch);
  const currentPath = normalizePath(pathname);
  const service = useMemo(() => getServiceByPath(currentPath), [currentPath]);
  const guide = useMemo(() => getGuideByPath(currentPath), [currentPath]);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const label = currentPageLabel(currentPath);
    document.title = label === "Home" ? "FirstOption | Payments and Everyday Services on WhatsApp" : `${label} | FirstOption`;
  }, [currentPath]);

  let page: ReactNode;
  if (currentPath === "/payment-success") page = <PaymentResultPage search={search} />;
  else if (service) page = <ServiceLandingPage service={service} />;
  else if (guide) page = <GuidePage guide={guide} />;
  else {
    switch (currentPath) {
      case "/personal": page = <PersonalPage />; break;
      case "/business": page = <BusinessPage />; break;
      case "/groups": page = <GroupsPage />; break;
      case "/payments": page = <PaymentsPage />; break;
      case "/developers": page = <DevelopersPage />; break;
      case "/services": page = <ServicesPage />; break;
      case "/how-it-works": page = <HowItWorksPage />; break;
      case "/referral":
      case "/services/referral": page = <ReferralProgramPage />; break;
      case "/wallet-funding": page = <WalletFundingPage />; break;
      case "/about": page = <AboutPage />; break;
      case "/contact": page = <ContactPage />; break;
      case "/official-whatsapp": page = <OfficialWhatsAppPage />; break;
      case "/anti-scam": page = <AntiScamPage />; break;
      default: page = <HomePage />;
    }
  }

  return <><SiteMotion currentPath={currentPath} />{page}</>;
}

export default App;
