import "./App.css";
import logo from "/FISRTOPTION-LOGO-removebg-preview (1).png";
import flutterwaveLogo from "/Flutterwave_whitebg.svg";

type AppProps = {
  initialPath?: string;
  initialSearch?: string;
};

const PRODUCTION_WHATSAPP_NUMBER = "2349060689011";
const WHATSAPP_GREETING = "Hi";
const WHATSAPP_START_URL = `https://wa.me/${PRODUCTION_WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_GREETING)}`;

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
            <a href="#about">About</a>
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
            YOUR WHATSAPP FINANCIAL HUB
          </div>
          <h1>
            Pay Bills &amp; Buy <em>Airtime</em> with
            <br />
            Just a Chat
          </h1>
          <p className="hero-sub">
            No app to download. No forms to fill. Just message us on WhatsApp
            and get airtime, data, electricity, cable &amp; more — instantly.
          </p>
          <div className="hero-btns">
            <a href={WHATSAPP_START_URL} className="cta-btn" target="_blank" rel="noreferrer">
              Get Started
            </a>
            <a href="#how" className="cta-outline">
              Learn More
            </a>
          </div>
        </div>

        {/* Floating Cards */}
        <div className="hero-cards">
          <div className="float-card card-left">
            <p className="card-label">Transactions</p>
            <p className="card-big">85%</p>
            <span className="card-tag green">+12%</span>
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
              <span className="ring-pct">80%</span>
            </div>
            <p className="card-note">Success this month</p>
          </div>
          <div className="float-card card-right">
            <p className="card-label">Wallet</p>
            <p className="card-big">₦0.00</p>
            <span className="card-tag blue">Ready</span>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="about" id="about">
        <div className="about-badge">
          <span className="badge-dot">✦</span>
          ABOUT US
        </div>
        <p className="about-text">
          We are passionate about empowering everyday Nigerians to handle airtime,
          data, bills &amp; more — without leaving WhatsApp. No app, no stress,
          just chat.
        </p>
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
            Fund your FirstOption wallet via bank transfer to your personal virtual
            account. Once funded, buy anything instantly — no waiting for transfers
            to confirm each time.
          </p>
          <div className="wallet-perks">
            <span>✅ Instant top-up</span>
            <span>✅ Dedicated virtual account</span>
            <span>✅ Transaction history</span>
            <span>✅ Zero hidden fees</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="final-cta">
        <div className="final-cta-inner">
          <h2>Ready to Get Started?</h2>
          <p>Start the chat with a simple Hi and the bot will guide you from there.</p>
          <a href={WHATSAPP_START_URL} className="cta-btn cta-big" target="_blank" rel="noreferrer">
            Message FirstOption on WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-brand-section">
              <img src={logo} alt="FirstOption" className="footer-logo" />
              <p>Your WhatsApp hub for airtime, data, bills &amp; more.</p>
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
                <a href="#how">How It Works</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>FirstOption Digital Services &bull; RC/BN: 9443317 &bull; CAC Registered, Nigeria</p>
            <p>&copy; {new Date().getFullYear()} FirstOption. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
