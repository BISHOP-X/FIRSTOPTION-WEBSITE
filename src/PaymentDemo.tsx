import { useEffect, useRef, useState, useSyncExternalStore, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { ArrowLeft, ArrowRight, BatteryFull, Camera, Check, CheckCheck, ChevronRight, CircleCheck, Expand, Gift, Link2, LockKeyhole, Mic, MoreVertical, Paperclip, Pause, Phone, Play, QrCode, RotateCcw, Send, Signal, Smile, Video, Wallet, Wifi, X } from "lucide-react";
import { WHATSAPP_START_URL } from "./siteData";
import receipts from "../public/demo-receipts/manifest.json";
import "./PaymentDemo.css";

type Journey = "send" | "collect" | "bills";
const JOURNEYS = {
  send: { label: "Send money", message: "Send ₦5,000 to Ada", amount: "₦5,000", name: "Ada Okafor", detail: "Saved recipient · FirstOption", action: "Review & Pay", result: "Money sent", purpose: "FirstOption transfer" },
  collect: { label: "Collect payment", message: "Collect ₦25,000 for order 104", amount: "₦25,000", name: "Order 104", detail: "Single-payment request", action: "Create request", result: "Request ready", purpose: "Order 104" },
  bills: { label: "Pay bills", message: "I want to pay my electricity bill", amount: "₦5,000", name: "Electricity", detail: "Prepaid meter · details checked", action: "Open electricity", result: "Bill paid", purpose: "Electricity payment" },
} as const;
const WAVE = [9, 16, 25, 12, 20, 30, 19, 10, 24, 33, 18, 13, 25, 18, 9, 21, 29, 15, 22, 12, 28, 17, 10, 20];
const motionQuery = "(prefers-reduced-motion: reduce)";
function subscribeMotion(callback: () => void) {
  const query = window.matchMedia(motionQuery);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}
function useReducedMotion() {
  return useSyncExternalStore(subscribeMotion, () => window.matchMedia(motionQuery).matches, () => false);
}

function Logo({ mark = false }: { mark?: boolean }) {
  return <span className={`pd-logo${mark ? " pd-logo-mark" : ""}`} role="img" aria-label="FirstOption" />;
}
function Timestamp({ sent = false }: { sent?: boolean }) {
  return <span className="pd-time">9:41 {sent && <CheckCheck size={13} />}</span>;
}
function Bubble({ children, outgoing = false, className = "" }: { children: ReactNode; outgoing?: boolean; className?: string }) {
  return <div className={`pd-bubble ${outgoing ? "pd-outgoing" : "pd-incoming"} ${className}`}>{children}<Timestamp sent={outgoing} /></div>;
}

function Chat({ children, phone = false }: { children: ReactNode; phone?: boolean }) {
  return <div className={`pd-chat${phone ? " pd-chat-phone product-phone-screen" : ""}`}>
    {phone && <div className="pd-status" aria-hidden="true"><span>9:41</span><span><Signal size={12} /><Wifi size={12} /><BatteryFull size={15} /></span></div>}
    <div className="pd-contact"><ArrowLeft size={20} aria-hidden="true" /><Logo mark /><div><strong>FirstOption</strong><span>Business account</span></div>{phone ? <span className="pd-contact-actions" aria-hidden="true"><Video size={17} /><Phone size={15} /></span> : <MoreVertical size={21} aria-hidden="true" />}</div>
    <div className="pd-thread"><span className="pd-day">Today</span>{children}</div>
    <div className="pd-composer" aria-hidden="true"><div><Smile size={20} /><span>Message</span><Paperclip size={19} /><Camera size={20} /></div><span className="pd-mic"><Mic size={19} /></span></div>
  </div>;
}

type ReceiptExample = keyof typeof receipts;

function ReceiptLightbox({ example, onClose }: { example: ReceiptExample; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const asset = receipts[example];
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const trigger = document.activeElement as HTMLElement | null;
    dialog.current?.showModal();
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; trigger?.focus(); };
  }, []);
  return createPortal(<dialog ref={dialog} className="pd-receipt-dialog" aria-label={`${asset.receipt.title} example receipt`} onClose={onClose} onClick={event => { if (event.target === event.currentTarget) onClose(); }}>
    <div className="pd-receipt-viewer"><header><span>{asset.receipt.title}</span><button type="button" autoFocus onClick={onClose} aria-label="Close receipt" title="Close receipt"><X size={22} /></button></header>
      <img src={asset.src} width={asset.width} height={asset.height} alt={receiptDescription(example)} />
    </div>
  </dialog>, document.body);
}

function receiptDescription(example: ReceiptExample) {
  const { receipt } = receipts[example];
  return `Example FirstOption receipt. ${receipt.title}: ${receipt.amount}. ${receipt.details.map(([label, value]) => `${label}: ${value}`).join('. ')}. ${receipt.date}. ${receipt.amounts.map(([label, value]) => `${label}: ${value}`).join('. ')}. ${receipt.total_label}: ${receipt.total}. Reference: ${receipt.reference}.`;
}

export function PaymentReceipt({ example = "send" }: { example?: ReceiptExample }) {
  const [open, setOpen] = useState(false);
  const asset = receipts[example];
  return <>
    <button type="button" className="pd-receipt" onClick={() => setOpen(true)} aria-label={`View ${asset.receipt.title.toLowerCase()} receipt`} title="View full receipt">
      <img src={asset.src} width={asset.width} height={asset.height} alt={receiptDescription(example)} loading="lazy" />
      <span className="pd-receipt-expand" aria-hidden="true"><Expand size={16} /></span>
    </button>
    {open && <ReceiptLightbox example={example} onClose={() => setOpen(false)} />}
  </>;
}

function PhoneFrame({ children, flat }: { children: ReactNode; flat: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  useEffect(() => {
    const element = ref.current;
    if (!element || reduced || flat) return;
    const move = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" || window.innerWidth < 900) return;
      const bounds = element.getBoundingClientRect();
      element.style.setProperty("--phone-rx", `${((event.clientY - bounds.top) / bounds.height - 0.5) * -5}deg`);
      element.style.setProperty("--phone-ry", `${((event.clientX - bounds.left) / bounds.width - 0.5) * 8}deg`);
    };
    const reset = () => { element.style.setProperty("--phone-rx", "0deg"); element.style.setProperty("--phone-ry", "0deg"); };
    element.addEventListener("pointermove", move);
    element.addEventListener("pointerleave", reset);
    return () => { element.removeEventListener("pointermove", move); element.removeEventListener("pointerleave", reset); reset(); };
  }, [reduced, flat]);
  if (flat) return <div className="pd-device-flat">{children}</div>;
  return <div ref={ref} className="product-phone-stage pd-original-phone"><div className="product-phone-shadow" aria-hidden="true" /><div className="product-phone"><div className="phone-hardware phone-hardware-one" aria-hidden="true" /><div className="phone-hardware phone-hardware-two" aria-hidden="true" />{children}</div></div>;
}

function RequestCard({ amount = "₦25,000", purpose = "Order 104" }: { amount?: string; purpose?: string }) {
  return <div className="pd-request"><span className="pd-label">Payment request</span><strong>{amount}</strong><p>{purpose}</p><div><Link2 size={16} /><span>Ready to share</span><QrCode size={25} /></div></div>;
}

function Review({ journey }: { journey: Journey }) {
  const data = JOURNEYS[journey];
  return <div className="pd-review pd-enter">
    <div className="pd-review-brand"><Logo /><LockKeyhole size={15} /></div>
    <span className="pd-label">{journey === "collect" ? "Collect payment" : "Check your payment"}</span>
    <strong className="pd-review-amount">{data.amount}<small>.00</small></strong>
    <dl><div><dt>{journey === "collect" ? "For" : "To"}</dt><dd>{data.name}</dd></div>
      <div><dt>{journey === "collect" ? "Request" : "Payment"}</dt><dd>{journey === "collect" ? "One payment" : journey === "send" ? "FirstOption to FirstOption" : "Prepaid electricity"}</dd></div>
      {journey !== "collect" && <div><dt>From</dt><dd>FirstOption balance</dd></div>}
      {journey === "send" && <div><dt>Fee</dt><dd>₦0.00</dd></div>}
    </dl>
    {journey !== "collect" && <div className="pd-pin"><LockKeyhole size={14} /><span>Confirm with your PIN</span><b aria-label="PIN hidden">••••</b></div>}
    <span className="pd-review-action">{journey === "collect" ? "Create request" : journey === "send" ? "Send ₦5,000" : "Pay ₦5,000"}<ArrowRight size={17} /></span>
    {journey === "bills" && <small className="pd-review-note">Meter and customer details checked in the service.</small>}
  </div>;
}

function Playback({ journey, walkthrough = false }: { journey: Journey; walkthrough?: boolean }) {
  const reduced = useReducedMotion();
  const [step, setStep] = useState(walkthrough ? 1 : 0);
  const [playing, setPlaying] = useState(!walkthrough);
  const [visible, setVisible] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const ref = useRef<HTMLDivElement>(null);
  const data = JOURNEYS[journey];
  const current = reduced && !walkthrough ? 3 : step;
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.35 });
    if (ref.current) observer.observe(ref.current);
    const onVisibility = () => setPageVisible(!document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => { observer.disconnect(); document.removeEventListener("visibilitychange", onVisibility); };
  }, []);
  useEffect(() => {
    if (reduced || !playing || !visible || !pageVisible || step === 3) return;
    const timer = window.setTimeout(() => setStep(value => value + 1), step === 0 ? 1600 : step === 1 ? 2800 : 3200);
    return () => window.clearTimeout(timer);
  }, [step, reduced, playing, visible, pageVisible]);
  const replay = () => { setStep(0); setPlaying(true); };
  return <div className="pd-playback" ref={ref} aria-label={`${data.label} example`}>
    <PhoneFrame flat={walkthrough}>
      <Chat phone={!walkthrough}>
        <Bubble outgoing><p>{data.message}</p></Bubble>
        {current === 0 && <div className="pd-typing" aria-label="FirstOption is preparing a reply"><i /><i /><i /></div>}
        {current === 1 && <Bubble className="pd-enter"><strong>{journey === "send" ? "Send money" : journey === "collect" ? "Collect payment" : "Pay your electricity bill"}</strong><p>{journey === "bills" ? "Choose your provider and check your meter details." : `${data.amount} · ${data.name}`}</p><small>{data.detail}</small><span className="pd-message-action">{data.action}<ChevronRight size={16} /></span></Bubble>}
        {current === 2 && <Review journey={journey} />}
        {current === 3 && <div className="pd-outcome pd-enter">{journey === "collect" ? <Bubble><strong>Payment request ready</strong><RequestCard /></Bubble> : <div className="pd-media-message"><PaymentReceipt example={journey === "bills" ? "electricity" : "send"} /><Timestamp /></div>}</div>}
      </Chat>
    </PhoneFrame>
    <div className="pd-playback-controls">
      <span className="pd-playback-state" aria-live="polite"><span />{["Your message", "FirstOption replies", journey === "collect" ? "Check the request" : "Review & approve", data.result][current]}</span>
      <div>{!reduced && current !== 3 && <button type="button" onClick={() => setPlaying(!playing)} aria-label={playing ? "Pause demonstration" : "Play demonstration"} title={playing ? "Pause" : "Play"}>{playing ? <Pause size={15} /> : <Play size={15} />}</button>}
        {!reduced && <button type="button" onClick={replay} aria-label="Replay demonstration" title="Replay"><RotateCcw size={15} /></button>}</div>
    </div>
    {walkthrough && <div className="pd-steps" aria-label="Payment stages">{["Message", "Reply", "Review", "Receipt"].map((label, index) => <button type="button" aria-pressed={step === index} onClick={() => { setStep(index); setPlaying(false); }} key={label}><span>{index + 1}</span>{label}</button>)}</div>}
  </div>;
}

export function PaymentDemo({ walkthrough = false, journey = "send" }: { walkthrough?: boolean; journey?: Journey }) {
  return <div className={`payment-demo${walkthrough ? " payment-demo-walkthrough" : " motion-phone"}`}>
    <Playback key={journey} journey={journey} walkthrough={walkthrough} />
  </div>;
}

export function VoiceDemo() {
  const [playing, setPlaying] = useState(false);
  const [audioError, setAudioError] = useState(false);
  const [seconds, setSeconds] = useState(3);
  const audio = useRef<HTMLAudioElement>(null);
  const toggleVoice = async () => {
    if (!audio.current) return;
    if (playing) audio.current.pause();
    else {
      try { await audio.current.play(); setAudioError(false); }
      catch { setAudioError(true); }
    }
  };
  return <div className="pd-snippet"><Chat>
    <Bubble outgoing className={`pd-voice${playing ? " pd-voice-playing" : ""}`}><audio ref={audio} src="/send-money-voice.wav" preload="none" onLoadedMetadata={event => setSeconds(Math.round(event.currentTarget.duration))} onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onEnded={() => setPlaying(false)} onError={() => setAudioError(true)} /><div className="pd-voice-line"><button type="button" onClick={() => void toggleVoice()} aria-label={playing ? "Pause voice note" : "Play voice note"} title={playing ? "Pause voice note" : "Play voice note"}>{playing ? <Pause size={19} fill="currentColor" /> : <Play size={19} fill="currentColor" />}</button><span className="pd-wave" aria-hidden="true">{WAVE.map((height, index) => <i style={{ height }} key={index} />)}</span><span>0:{String(seconds).padStart(2, "0")}</span><Mic size={17} /></div><p>“Send five thousand naira to Ada.”</p>{audioError && <small role="status">Audio unavailable. The transcript is shown above.</small>}</Bubble>
    <Bubble><strong>Send money</strong><div className="pd-facts"><span>To<b>Ada Okafor</b></span><span>Amount<b>₦5,000</b></span></div><small>Check the details before you pay.</small><a className="pd-message-action" href="/how-it-works">Review & Pay<ArrowRight size={15} /></a></Bubble>
  </Chat></div>;
}

export function ClaimDemo() {
  return <div className="pd-snippet"><Chat>
    <Bubble><strong>Money waiting for you</strong><p>Ada sent you a claim invitation.</p></Bubble>
    <div className="pd-claim"><Logo /><Gift size={30} /><span>Money waiting for you</span><strong>₦5,000</strong><p>For your WhatsApp number</p><span className="pd-claim-action">Claim on FirstOption <ArrowRight size={16} /></span></div>
    <Bubble><p>Open the link with the number the money was sent to.</p></Bubble>
  </Chat></div>;
}

export function MerchantDemo() {
  const [paid, setPaid] = useState(false);
  return <div className="pd-merchant">
    <div className="pd-selector" role="group" aria-label="Order 104 payment status">
      <button type="button" aria-pressed={!paid} onClick={() => setPaid(false)}>Request</button>
      <button type="button" aria-pressed={paid} onClick={() => setPaid(true)}>Payment received</button>
    </div>
    <div className="pd-merchant-stage">
      <PhoneFrame flat={false}>
        <Chat phone>
          <Bubble outgoing><p>Collect ₦25,000 for order 104</p></Bubble>
          {paid ? <div className="pd-outcome pd-enter"><div className="pd-media-message"><PaymentReceipt example="collect" /><Timestamp /></div></div> : <Bubble className="pd-enter"><strong>Payment request ready</strong><RequestCard /><p>Share the link with your customer.</p></Bubble>}
        </Chat>
      </PhoneFrame>
    </div>
    <div className="pd-playback-controls"><span className="pd-playback-state" aria-live="polite"><span />{paid ? "Payment received · Order 104" : "Waiting for payment · Order 104"}</span></div>
  </div>;
}

export function LinkDemo() {
  const [fixed, setFixed] = useState(true);
  return <div className="pd-link-demo"><div className="pd-selector" role="group" aria-label="Payment link example"><button type="button" aria-pressed={fixed} onClick={() => setFixed(true)}>Set the amount</button><button type="button" aria-pressed={!fixed} onClick={() => setFixed(false)}>Let the payer choose</button></div><div className="pd-link-stage"><Logo /><span className="pd-qr"><QrCode size={64} strokeWidth={1.3} /></span><span className="pd-label">Pay Ada's Studio</span><strong>{fixed ? "₦25,000" : "Your amount"}</strong><p>{fixed ? "Order 104 · One payment" : "One reusable link. A separate payment for each customer."}</p><div className="pd-link-result"><Check size={17} />{fixed ? "The amount is already filled in." : "See who you are paying, then enter an amount."}</div></div></div>;
}

export function FundingDemo() {
  const [funded, setFunded] = useState(false);
  return <div className="pd-funding"><div className="pd-selector" role="group" aria-label="Funding example"><button type="button" aria-pressed={!funded} onClick={() => setFunded(false)}>Add money</button><button type="button" aria-pressed={funded} onClick={() => setFunded(true)}>Continue payment</button></div><div className="pd-funding-stage"><Logo /><div className="pd-saved-payment"><Send size={19} /><div><span>Your payment is saved</span><strong>₦5,000 to Ada Okafor</strong></div></div>{funded ? <><CircleCheck className="pd-funded-icon" size={42} /><h3>Ready to send</h3><p>Your recipient and amount are right where you left them.</p><div className="pd-funding-summary"><span>To<b>Ada Okafor</b></span><span>Amount<b>₦5,000</b></span><span>From<b>FirstOption balance</b></span></div><span className="pd-review-action"><LockKeyhole size={16} />Confirm with PIN</span></> : <><Wallet size={30} /><h3>One account. Yours to reuse.</h3><p>Create your permanent funding account once. Transfer to it whenever you need.</p><div className="pd-account"><span>Your saved account details</span><strong>••• ••• ••••</strong><span>Bank · Account name · Account number</span></div><p className="pd-funding-note">Extra money stays in your balance.</p></>}</div></div>;
}

export function ServicePreview({ slug }: { slug: string }) {
  const [sell, setSell] = useState(false);
  const crypto = slug === "crypto";
  const gift = slug === "gift-cards";
  if (!crypto && !gift) return <ServiceReceiptDemo slug={slug} />;
  const title = crypto ? "Crypto" : "Gift cards";
  return <div className="pd-service-preview"><div className="pd-review-brand"><Logo /><LockKeyhole size={15} /></div><h3>{title}</h3><div className="pd-selector" role="group" aria-label={`${title} operation`}><button type="button" aria-pressed={!sell} onClick={() => setSell(false)}>Buy</button><button type="button" aria-pressed={sell} onClick={() => setSell(true)}>Sell</button></div><div className="pd-service-route" key={String(sell)}>{(crypto ? ["Choose your asset", sell ? "Check your deposit details" : "Review the rate and amount", sell ? "See your payout" : "Confirm your purchase"] : ["Choose your gift card", sell ? "Add your card details" : "Choose the value", sell ? "Review your offer" : "Check the total"]).map((label, index) => <div key={label}><span>{index + 1}</span><strong>{label}</strong><ChevronRight size={17} /></div>)}</div><a href={WHATSAPP_START_URL} target="_blank" rel="noreferrer" className="pd-service-cta">{sell ? "Sell" : "Buy"} {title.toLowerCase()} on WhatsApp <ArrowRight size={16} /></a></div>;
}

export function ServiceReceiptDemo({ slug }: { slug: string }) {
  const [paid, setPaid] = useState(false);
  const data = slug === "data-bundles";
  const electricity = slug === "electricity";
  const example = electricity ? "electricity" : data ? "data" : "airtime";
  const message = electricity ? "I want to pay my electricity bill" : data ? "Buy MTN data for me" : "Buy ₦1,000 MTN airtime for me";
  return <div className="pd-service-example"><div className="pd-selector" role="group" aria-label={`${example} example`}><button type="button" aria-pressed={!paid} onClick={() => setPaid(false)}>Your message</button><button type="button" aria-pressed={paid} onClick={() => setPaid(true)}>Your receipt</button></div>
    <Chat><Bubble outgoing><p>{message}</p></Bubble>
      {paid ? <div className="pd-outcome pd-enter"><div className="pd-media-message"><PaymentReceipt example={example} /><Timestamp /></div></div> : <Bubble><strong>{electricity ? "Pay your electricity bill" : data ? "Choose your data plan" : "Check your top-up"}</strong><p>{electricity ? "Choose your provider and check your meter details." : data ? "See the current plans, prices and validity." : "MTN · ₦1,000"}</p>{!electricity && <small>Check the full receiving number before you pay.</small>}<a className="pd-message-action" href={WHATSAPP_START_URL} target="_blank" rel="noreferrer">{electricity ? "Open electricity" : data ? "Choose a plan" : "Buy airtime"}<ArrowRight size={16} /></a></Bubble>}
    </Chat>
  </div>;
}
