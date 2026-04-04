import { useState } from "react";
import "./App.css";
import logo from "/FISRTOPTION-LOGO-removebg-preview (1).png";

function App() {
  const [showToast, setShowToast] = useState(false);

  const handleLaunchClick = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  // Payment success redirect page
  if (window.location.pathname === "/payment-success") {
    const params = new URLSearchParams(window.location.search);
    const status = params.get("status");
    const failed = status && status !== "successful" && status !== "completed";

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          background: "#0a0a0a",
          color: "white",
          textAlign: "center",
          padding: "2rem",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <img
          src={logo}
          alt="FirstOption"
          style={{ width: "100px", marginBottom: "1.5rem" }}
        />
        {failed ? (
          <>
            <h1 style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>
              ❌ Payment Unsuccessful
            </h1>
            <p style={{ color: "#aaa", marginBottom: "2rem", maxWidth: "360px" }}>
              Something went wrong with your payment. Please return to WhatsApp
              and try again.
            </p>
          </>
        ) : (
          <>
            <h1 style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>
              ✅ Payment Successful!
            </h1>
            <p style={{ color: "#aaa", marginBottom: "2rem", maxWidth: "360px" }}>
              Your FirstOption wallet has been funded. Return to WhatsApp to
              continue.
            </p>
          </>
        )}
        <p style={{ color: "#555", fontSize: "0.8rem", marginTop: "2rem" }}>
          You can close this tab and return to your WhatsApp chat.
        </p>
        <p style={{ color: "#333", fontSize: "0.75rem", marginTop: "0.5rem" }}>
          Powered by FirstOption &bull; Secured by Flutterwave 🦋
        </p>
      </div>
    );
  }

  return (
    <div className="app">
      {/* Toast */}
      {showToast && (
        <div className="toast">
          🚀 We haven't launched yet — anticipate our launch!
        </div>
      )}

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
          <button onClick={handleLaunchClick} className="nav-cta">
            Get Started
          </button>
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
            <button onClick={handleLaunchClick} className="cta-btn">
              Get Started
            </button>
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
          <p>We're launching soon. Be the first to know.</p>
          <button onClick={handleLaunchClick} className="cta-btn cta-big">
            🚀 Notify Me at Launch
          </button>
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
