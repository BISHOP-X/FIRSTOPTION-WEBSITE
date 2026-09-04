import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')
const distDir = path.join(rootDir, 'dist')
const distServerDir = path.join(rootDir, 'dist-server')

const templatePath = path.join(distDir, 'index.html')
const serverEntryPath = path.join(distServerDir, 'entry-server.js')

const template = await readFile(templatePath, 'utf8')
const { render } = await import(pathToFileURL(serverEntryPath).href)

const HOME_TITLE = 'FirstOption | Payments and Everyday Services on WhatsApp'
const HOME_DESCRIPTION = 'Send, request and collect money, pay bills and use everyday services through FirstOption on WhatsApp. Type naturally or send a voice note.'
const HOME_OG_DESCRIPTION = 'Send a message or voice note to pay, collect and get everyday transactions done through FirstOption on WhatsApp.'
const HOME_TWITTER_DESCRIPTION = 'Payments for people and businesses operating through WhatsApp, with everyday services in the same conversation.'

const SERVICE_ROUTE_METADATA = [
  {
    url: 'https://www.thefirstoption.com.ng/services/airtime',
    output: path.join(distDir, 'services', 'airtime', 'index.html'),
    canonical: 'https://www.thefirstoption.com.ng/services/airtime',
    title: 'Buy Airtime on WhatsApp in Nigeria | FirstOption',
    description: 'Buy MTN, Airtel, Glo and 9mobile airtime through FirstOption on WhatsApp in Nigeria.',
    ogDescription: 'Buy airtime for major Nigerian networks on WhatsApp with FirstOption.',
    twitterDescription: 'Buy airtime in Nigeria through the official FirstOption WhatsApp chat.',
  },
  {
    url: 'https://www.thefirstoption.com.ng/services/data-bundles',
    output: path.join(distDir, 'services', 'data-bundles', 'index.html'),
    canonical: 'https://www.thefirstoption.com.ng/services/data-bundles',
    title: 'Buy Data Bundles on WhatsApp in Nigeria | FirstOption',
    description: 'Buy daily, weekly and monthly data bundles through FirstOption on WhatsApp in Nigeria.',
    ogDescription: 'Buy data bundles on WhatsApp in Nigeria with FirstOption.',
    twitterDescription: 'Buy data bundles in Nigeria through FirstOption on WhatsApp.',
  },
  {
    url: 'https://www.thefirstoption.com.ng/services/electricity',
    output: path.join(distDir, 'services', 'electricity', 'index.html'),
    canonical: 'https://www.thefirstoption.com.ng/services/electricity',
    title: 'Pay Electricity Bills on WhatsApp in Nigeria | FirstOption',
    description: 'Pay electricity bills through FirstOption on WhatsApp in Nigeria and receive your token.',
    ogDescription: 'Pay electricity bills and get prepaid tokens on WhatsApp with FirstOption.',
    twitterDescription: 'Pay electricity bills in Nigeria through FirstOption on WhatsApp.',
  },
  {
    url: 'https://www.thefirstoption.com.ng/services/cable-tv',
    output: path.join(distDir, 'services', 'cable-tv', 'index.html'),
    canonical: 'https://www.thefirstoption.com.ng/services/cable-tv',
    title: 'Renew Cable TV on WhatsApp in Nigeria | FirstOption',
    description: 'Renew DSTV, GOtv, Startimes and Showmax through FirstOption on WhatsApp in Nigeria.',
    ogDescription: 'Renew cable TV in Nigeria through FirstOption on WhatsApp.',
    twitterDescription: 'Renew cable TV in Nigeria through the official FirstOption chat.',
  },
  {
    url: 'https://www.thefirstoption.com.ng/services/exam-pins',
    output: path.join(distDir, 'services', 'exam-pins', 'index.html'),
    canonical: 'https://www.thefirstoption.com.ng/services/exam-pins',
    title: 'Buy Exam Pins on WhatsApp in Nigeria | FirstOption',
    description: 'Buy WAEC and JAMB exam pins through FirstOption on WhatsApp in Nigeria.',
    ogDescription: 'Buy WAEC and JAMB pins on WhatsApp with FirstOption.',
    twitterDescription: 'Buy exam pins in Nigeria through FirstOption on WhatsApp.',
  },
  {
    url: 'https://www.thefirstoption.com.ng/services/internet',
    output: path.join(distDir, 'services', 'internet', 'index.html'),
    canonical: 'https://www.thefirstoption.com.ng/services/internet',
    title: 'Pay for Internet Subscriptions on WhatsApp in Nigeria | FirstOption',
    description: 'Pay for internet subscriptions and gaming services through FirstOption on WhatsApp in Nigeria.',
    ogDescription: 'Pay for internet subscriptions on WhatsApp with FirstOption.',
    twitterDescription: 'Pay for internet subscriptions in Nigeria through FirstOption on WhatsApp.',
  },
  {
    url: 'https://www.thefirstoption.com.ng/services/betting',
    output: path.join(distDir, 'services', 'betting', 'index.html'),
    canonical: 'https://www.thefirstoption.com.ng/services/betting',
    title: 'Fund Betting Wallets on WhatsApp in Nigeria | FirstOption',
    description: 'Fund supported SportyBet and Bet9ja wallets through FirstOption on WhatsApp in Nigeria.',
    ogDescription: 'Fund supported betting wallets through FirstOption on WhatsApp.',
    twitterDescription: 'Use FirstOption for supported betting wallet payments on WhatsApp.',
  },
  {
    url: 'https://www.thefirstoption.com.ng/services/gift-cards',
    output: path.join(distDir, 'services', 'gift-cards', 'index.html'),
    canonical: 'https://www.thefirstoption.com.ng/services/gift-cards',
    title: 'Buy Gift Cards on WhatsApp in Nigeria | FirstOption',
    description: 'Buy and sell supported gift cards through FirstOption on WhatsApp in Nigeria.',
    ogDescription: 'Buy and sell gift cards on WhatsApp with FirstOption.',
    twitterDescription: 'Buy and sell gift cards through FirstOption on WhatsApp.',
  },
  {
    url: 'https://www.thefirstoption.com.ng/services/crypto',
    output: path.join(distDir, 'services', 'crypto', 'index.html'),
    canonical: 'https://www.thefirstoption.com.ng/services/crypto',
    title: 'Buy Crypto on WhatsApp in Nigeria | FirstOption',
    description: 'Buy, sell, send and receive supported crypto through FirstOption on WhatsApp in Nigeria.',
    ogDescription: 'Buy, sell, send and receive crypto on WhatsApp with FirstOption.',
    twitterDescription: 'Use crypto services through FirstOption on WhatsApp.',
  },
  {
    url: 'https://www.thefirstoption.com.ng/services/virtual-cards',
    output: path.join(distDir, 'services', 'virtual-cards', 'index.html'),
    canonical: 'https://www.thefirstoption.com.ng/services/virtual-cards',
    title: 'Virtual Cards on WhatsApp in Nigeria | FirstOption',
    description: 'Create and manage virtual cards through FirstOption on WhatsApp in Nigeria.',
    ogDescription: 'Create and manage virtual cards with FirstOption.',
    twitterDescription: 'Use FirstOption virtual cards from the official WhatsApp menu.',
  },
]

const GUIDE_ROUTE_METADATA = [
  {
    url: 'https://www.thefirstoption.com.ng/guides/buy-airtime-on-whatsapp-nigeria',
    output: path.join(distDir, 'guides', 'buy-airtime-on-whatsapp-nigeria', 'index.html'),
    canonical: 'https://www.thefirstoption.com.ng/guides/buy-airtime-on-whatsapp-nigeria',
    title: 'How to Buy Airtime on WhatsApp in Nigeria | FirstOption Guide',
    description: 'Learn how to buy airtime on WhatsApp in Nigeria with FirstOption.',
    ogDescription: 'A simple guide to buying airtime on WhatsApp with FirstOption.',
    twitterDescription: 'Learn how to buy airtime on WhatsApp with FirstOption.',
  },
  {
    url: 'https://www.thefirstoption.com.ng/guides/fund-your-wallet-before-paying-bills',
    output: path.join(distDir, 'guides', 'fund-your-wallet-before-paying-bills', 'index.html'),
    canonical: 'https://www.thefirstoption.com.ng/guides/fund-your-wallet-before-paying-bills',
    title: 'How to Pay Faster Next Time | FirstOption Guide',
    description: 'Learn what to check before you pay again with FirstOption on WhatsApp.',
    ogDescription: 'A simple guide to checking payment details before you continue.',
    twitterDescription: 'Learn how to check payment details before using FirstOption again.',
  },
  {
    url: 'https://www.thefirstoption.com.ng/guides/buy-exam-pins-whatsapp-nigeria',
    output: path.join(distDir, 'guides', 'buy-exam-pins-whatsapp-nigeria', 'index.html'),
    canonical: 'https://www.thefirstoption.com.ng/guides/buy-exam-pins-whatsapp-nigeria',
    title: 'How to Buy Exam Pins Without Leaving WhatsApp in Nigeria | FirstOption Guide',
    description: 'Learn how to buy WAEC or JAMB exam pins through FirstOption on WhatsApp.',
    ogDescription: 'A practical FirstOption guide to buying exam pins through WhatsApp in Nigeria.',
    twitterDescription: 'Use this FirstOption guide for WAEC and JAMB pin purchases.',
  },
  {
    url: 'https://www.thefirstoption.com.ng/guides/renew-dstv-gotv-whatsapp-nigeria',
    output: path.join(distDir, 'guides', 'renew-dstv-gotv-whatsapp-nigeria', 'index.html'),
    canonical: 'https://www.thefirstoption.com.ng/guides/renew-dstv-gotv-whatsapp-nigeria',
    title: 'How to Renew DSTV or GOtv Through WhatsApp in Nigeria | FirstOption Guide',
    description: 'Learn how to renew DSTV or GOtv through FirstOption on WhatsApp in Nigeria.',
    ogDescription: 'A practical FirstOption guide to cable subscription renewals on WhatsApp in Nigeria.',
    twitterDescription: 'Use this FirstOption guide for DSTV or GOtv renewals.',
  },
  {
    url: 'https://www.thefirstoption.com.ng/guides/fund-betting-wallets-via-whatsapp',
    output: path.join(distDir, 'guides', 'fund-betting-wallets-via-whatsapp', 'index.html'),
    canonical: 'https://www.thefirstoption.com.ng/guides/fund-betting-wallets-via-whatsapp',
    title: 'How to Check a Payment Before You Continue | FirstOption Guide',
    description: 'Learn how to check the service, amount and account details before you pay with FirstOption.',
    ogDescription: 'A simple FirstOption guide to checking payment details before you continue.',
    twitterDescription: 'Check payment details before you continue with FirstOption.',
  },
]

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

function escapeAttribute(value) {
  return escapeHtml(value)
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function replaceExact(html, source, replacement) {
  if (!html.includes(source)) {
    throw new Error(`Expected template fragment not found: ${source}`)
  }

  return html.replace(source, replacement)
}

function applyMetadata(html, route) {
  let result = replaceExact(html, `<title>${HOME_TITLE}</title>`, `<title>${escapeHtml(route.title)}</title>`)
  result = replaceExact(
    result,
    `<meta\n      name="description"\n      content="${HOME_DESCRIPTION}"\n    />`.replaceAll('\\n', '\n'),
    `<meta\n      name="description"\n      content="${escapeAttribute(route.description)}"\n    />`.replaceAll('\\n', '\n'),
  )
  result = replaceExact(
    result,
    '<link rel="canonical" href="https://www.thefirstoption.com.ng/" />',
    `<link rel="canonical" href="${escapeAttribute(route.canonical)}" />`,
  )
  result = replaceExact(
    result,
    '<meta property="og:url" content="https://www.thefirstoption.com.ng/" />',
    `<meta property="og:url" content="${escapeAttribute(route.canonical)}" />`,
  )
  result = replaceExact(
    result,
    `<meta property="og:title" content="${HOME_TITLE}" />`,
    `<meta property="og:title" content="${escapeAttribute(route.title)}" />`,
  )
  result = replaceExact(
    result,
    `<meta\n      property="og:description"\n      content="${HOME_OG_DESCRIPTION}"\n    />`.replaceAll('\\n', '\n'),
    `<meta\n      property="og:description"\n      content="${escapeAttribute(route.ogDescription ?? route.description)}"\n    />`.replaceAll('\\n', '\n'),
  )
  result = replaceExact(
    result,
    `<meta name="twitter:title" content="${HOME_TITLE}" />`,
    `<meta name="twitter:title" content="${escapeAttribute(route.title)}" />`,
  )
  result = replaceExact(
    result,
    `<meta\n      name="twitter:description"\n      content="${HOME_TWITTER_DESCRIPTION}"\n    />`.replaceAll('\\n', '\n'),
    `<meta\n      name="twitter:description"\n      content="${escapeAttribute(route.twitterDescription ?? route.description)}"\n    />`.replaceAll('\\n', '\n'),
  )
  return result
}

const routes = [
  {
    url: 'https://www.thefirstoption.com.ng/',
    output: templatePath,
    canonical: 'https://www.thefirstoption.com.ng/',
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    ogDescription: HOME_OG_DESCRIPTION,
    twitterDescription: HOME_TWITTER_DESCRIPTION,
  },
  {
    url: 'https://www.thefirstoption.com.ng/personal',
    output: path.join(distDir, 'personal', 'index.html'),
    canonical: 'https://www.thefirstoption.com.ng/personal',
    title: 'Personal Payments on WhatsApp | FirstOption',
    description: 'Send, receive, request and claim money through FirstOption on WhatsApp with clear details and receipts.',
  },
  {
    url: 'https://www.thefirstoption.com.ng/business',
    output: path.join(distDir, 'business', 'index.html'),
    canonical: 'https://www.thefirstoption.com.ng/business',
    title: 'Business Payments on WhatsApp | FirstOption',
    description: 'Collect customer payments through WhatsApp requests, payment links, QR and invoices with FirstOption.',
  },
  {
    url: 'https://www.thefirstoption.com.ng/groups',
    output: path.join(distDir, 'groups', 'index.html'),
    canonical: 'https://www.thefirstoption.com.ng/groups',
    title: 'Group Collections on WhatsApp | FirstOption',
    description: 'Organize group dues, contributions, shared targets and split payments through FirstOption on WhatsApp.',
  },
  {
    url: 'https://www.thefirstoption.com.ng/payments',
    output: path.join(distDir, 'payments', 'index.html'),
    canonical: 'https://www.thefirstoption.com.ng/payments',
    title: 'Payment Links, QR and Invoices | FirstOption',
    description: 'Create and share FirstOption payments through WhatsApp requests, payment links, QR codes and invoices.',
  },
  {
    url: 'https://www.thefirstoption.com.ng/developers',
    output: path.join(distDir, 'developers', 'index.html'),
    canonical: 'https://www.thefirstoption.com.ng/developers',
    title: 'FirstOption Developer Payments',
    description: 'Create payments, receive status updates and connect WhatsApp payment experiences through FirstOption.',
  },
  {
    url: 'https://www.thefirstoption.com.ng/services',
    output: path.join(distDir, 'services', 'index.html'),
    canonical: 'https://www.thefirstoption.com.ng/services',
    title: 'FirstOption Services | Airtime, Data, Bills, Gift Cards, Crypto and More',
    description: 'Explore FirstOption services on WhatsApp, including airtime, data, electricity, cable TV, exam pins, internet, betting, gift cards, crypto and cards.',
    ogDescription: 'Browse the FirstOption WhatsApp services for Nigerians, from airtime and data to electricity, cable, gift cards, crypto and cards.',
    twitterDescription: 'See what you can do with FirstOption on WhatsApp.',
  },
  {
    url: 'https://www.thefirstoption.com.ng/how-it-works',
    output: path.join(distDir, 'how-it-works', 'index.html'),
    canonical: 'https://www.thefirstoption.com.ng/how-it-works',
    title: 'How FirstOption Works | Type or Speak on WhatsApp',
    description: 'Type naturally or send a voice note, review the details, confirm securely and receive the result through FirstOption on WhatsApp.',
    ogDescription: 'See how FirstOption works on WhatsApp.',
    twitterDescription: 'Learn how to use FirstOption on WhatsApp.',
  },
  {
    url: 'https://www.thefirstoption.com.ng/referral',
    output: path.join(distDir, 'referral', 'index.html'),
    canonical: 'https://www.thefirstoption.com.ng/referral',
    title: 'Refer and Earn With FirstOption | Referral Program',
    description: 'Invite people to FirstOption and earn rewards when they start using the service.',
    ogDescription: 'Use the FirstOption Refer and Earn program.',
    twitterDescription: 'Refer people to FirstOption and earn rewards.',
  },
  {
    url: 'https://www.thefirstoption.com.ng/services/referral',
    output: path.join(distDir, 'services', 'referral', 'index.html'),
    canonical: 'https://www.thefirstoption.com.ng/referral',
    title: 'Refer and Earn With FirstOption | Referral Program',
    description: 'Invite people to FirstOption and earn rewards when they start using the service.',
    ogDescription: 'Use the FirstOption Refer and Earn program.',
    twitterDescription: 'Refer people to FirstOption and earn rewards.',
  },
  {
    url: 'https://www.thefirstoption.com.ng/about',
    output: path.join(distDir, 'about', 'index.html'),
    canonical: 'https://www.thefirstoption.com.ng/about',
    title: 'About FirstOption | Payments for Commerce on WhatsApp',
    description: 'FirstOption connects people, businesses and everyday transactions through WhatsApp.',
    ogDescription: 'Learn about the FirstOption payment network for WhatsApp commerce.',
    twitterDescription: 'Learn how FirstOption connects payments and everyday services through WhatsApp.',
  },
  {
    url: 'https://www.thefirstoption.com.ng/contact',
    output: path.join(distDir, 'contact', 'index.html'),
    canonical: 'https://www.thefirstoption.com.ng/contact',
    title: 'Contact FirstOption | Official WhatsApp, Email and Public Channels',
    description: 'Contact FirstOption through the official WhatsApp number, support email, website and public social handle used for brand verification and support.',
    ogDescription: 'Use the public FirstOption contact channels that match across the website, WhatsApp and official social profiles.',
    twitterDescription: 'Official FirstOption contact page with the public WhatsApp number, support email and verification links.',
  },
  {
    url: 'https://www.thefirstoption.com.ng/official-whatsapp',
    output: path.join(distDir, 'official-whatsapp', 'index.html'),
    canonical: 'https://www.thefirstoption.com.ng/official-whatsapp',
    title: 'Official FirstOption WhatsApp Number | Verify the Real Channel',
    description: 'Verify the public FirstOption WhatsApp number and cross-check the matching website, support email and official handle before transacting.',
    ogDescription: 'Verify the real FirstOption WhatsApp channel before using any funding or support instructions.',
    twitterDescription: 'Check the official FirstOption WhatsApp number and matching public verification details.',
  },
  {
    url: 'https://www.thefirstoption.com.ng/anti-scam',
    output: path.join(distDir, 'anti-scam', 'index.html'),
    canonical: 'https://www.thefirstoption.com.ng/anti-scam',
    title: 'FirstOption Anti-Scam Guide | How to Verify Official Channels',
    description: 'Use the FirstOption anti-scam guide to identify impersonation red flags and verify the official WhatsApp number, website, email and social handle before acting.',
    ogDescription: 'Learn the public checks users should use to verify FirstOption and avoid impersonation scams.',
    twitterDescription: 'FirstOption anti-scam guide with official verification checks for WhatsApp, website and support channels.',
  },
  {
    url: 'https://www.thefirstoption.com.ng/wallet-funding',
    output: path.join(distDir, 'wallet-funding', 'index.html'),
    canonical: 'https://www.thefirstoption.com.ng/wallet-funding',
    title: 'Add Money to FirstOption With a Permanent Paga Account',
    description: 'Create a permanent Paga account from a FirstOption service webview and transfer to it whenever you need.',
    ogDescription: 'Learn how to add money to FirstOption using your permanent Paga account.',
    twitterDescription: 'Create and reuse your permanent Paga account for FirstOption transactions.',
  },
  ...SERVICE_ROUTE_METADATA,
  ...GUIDE_ROUTE_METADATA,
]

for (const route of routes) {
  const appHtml = render(route.url)
  const htmlWithApp = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
  const html = applyMetadata(htmlWithApp, route)
  await mkdir(path.dirname(route.output), { recursive: true })
  await writeFile(route.output, html, 'utf8')
}
