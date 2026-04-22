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
const REGISTERED_ADDRESS = "No. 4, God of Mercy Avenue, Oyigbo, Rivers State, Nigeria";

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

const LIVE_SERVICES = [
  "Airtime top-up across major Nigerian networks",
  "Data bundles and internet subscriptions",
  "Electricity token payments and cable TV renewals",
  "Betting wallet funding, exam pins and airtime to cash",
];

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

  // Payment success redirect page
  if (pathname === "/payment-success") {
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

  return (
    <div className="app">
      {/* Nav */}
      <nav className="nav">
        <div className="nav-inner">
          <div className="nav-left">
            <img src={logo} alt="FirstOption" className="nav-logo" />
          </div>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#how">How It Works</a>
            <a href="#trust">Official</a>
          </div>
          <a href={WHATSAPP_START_URL} className="nav-cta" target="_blank" rel="noreferrer">
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero */}
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
            <a href="#how" className="cta-outline">
              Learn More
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

        {/* Floating Cards */}
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
                <circle cx="60" cy="60" r="50" fill="none" stroke="#25D366" strokeWidth="10"
                  strokeDasharray="251.3" strokeDashoffset="50.3" strokeLinecap="round"
                  transform="rotate(-90 60 60)" />
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

      {/* About */}
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
          <span>{REGISTERED_ADDRESS}</span>
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
              <li>Registered address: {REGISTERED_ADDRESS}</li>
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

      {/* Services */}
      <section className="services" id="services">
        <div className="section-header">
          <div className="about-badge">
            <span className="badge-dot">✦</span>
            OUR SERVICES
          </div>
          <h2>Everything You Need,<br /><em>One Chat Away</em></h2>
        </div>
        <div className="services-grid">
          {[
            { icon: "📱", title: "Airtime Top-Up", desc: "MTN, Airtel, Glo, 9mobile — instant delivery" },
            { icon: "📶", title: "Data Bundles", desc: "Cheap SME & CG data plans for all networks" },
            { icon: "💡", title: "Electricity", desc: "Prepaid meter tokens for all DISCOs nationwide" },
            { icon: "📺", title: "Cable TV", desc: "DSTV, GOtv, Startimes — renew or upgrade" },
            { icon: "🎯", title: "Betting Funding", desc: "Fund Bet9ja, SportyBet & 14 more platforms" },
            { icon: "💸", title: "Airtime to Cash", desc: "Convert excess airtime to real money" },
            { icon: "📝", title: "Exam Pins", desc: "WAEC, NECO, JAMB result checker & registration" },
            { icon: "🌐", title: "Internet", desc: "Spectranet, Smile & other ISP subscriptions" },
          ].map((s) => (
            <div className="service-card" key={s.title}>
              <span className="service-icon">{s.icon}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
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

      {/* Wallet */}
      <section className="wallet-section">
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

      {/* CTA */}
      <section className="final-cta">
        <div className="final-cta-inner">
          <h2>Start With the Official Number</h2>
          <p>
            Start the chat with a simple Hi and follow the menu from there. Use only
            our official WhatsApp number and support email for funding or transaction help.
          </p>
          <a href={WHATSAPP_START_URL} className="cta-btn cta-big" target="_blank" rel="noreferrer">
            Message FirstOption on WhatsApp
          </a>
          <div className="final-cta-meta">
            <span>{OFFICIAL_WHATSAPP_DISPLAY}</span>
            <a href={SUPPORT_EMAIL_LINK}>{SUPPORT_EMAIL}</a>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                <a href="#services">Airtime &amp; Data</a>
                <a href="#services">Electricity &amp; Cable</a>
                <a href="#services">Betting &amp; Exam Pins</a>
              </div>
              <div>
                <h4>Company</h4>
                <a href="#about">About Us</a>
                <a href="#trust">Official Channels</a>
                <a href="#how">How It Works</a>
              </div>
              <div>
                <h4>Legal</h4>
                {LEGAL_LINKS.map((link) => (
                  <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                ))}
              </div>
              <div>
                <h4>Official Socials</h4>
                {SOCIAL_LINKS.map((link) => (
                  <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
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

export default App;
