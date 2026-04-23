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

const HOME_TITLE = 'FirstOption Digital Services | WhatsApp Airtime, Bills, Wallet Funding & More in Nigeria'
const HOME_DESCRIPTION = 'FirstOption Digital Services helps Nigerians buy airtime, data, electricity, cable TV, exam pins and more through WhatsApp. Official support and wallet funding in one chat.'
const HOME_OG_DESCRIPTION = 'Buy airtime, data, electricity, cable TV, exam pins and more through one official WhatsApp chat with FirstOption Digital Services.'
const HOME_TWITTER_DESCRIPTION = 'Official WhatsApp digital services for Nigerians: airtime, data, bills, wallet funding and everyday payments in one chat.'

const SERVICE_ROUTE_METADATA = [
  {
    url: 'https://www.thefirstoption.com.ng/services/airtime',
    output: path.join(distDir, 'services', 'airtime', 'index.html'),
    canonical: 'https://www.thefirstoption.com.ng/services/airtime',
    title: 'Buy Airtime on WhatsApp in Nigeria | FirstOption',
    description: 'Buy MTN, Airtel, Glo and 9mobile airtime through FirstOption on WhatsApp in Nigeria. Use one official chat, wallet funding and clear support.',
    ogDescription: 'Buy airtime on WhatsApp in Nigeria with FirstOption across major networks and one verified support flow.',
    twitterDescription: 'Buy airtime in Nigeria through the official FirstOption WhatsApp chat.',
  },
  {
    url: 'https://www.thefirstoption.com.ng/services/data-bundles',
    output: path.join(distDir, 'services', 'data-bundles', 'index.html'),
    canonical: 'https://www.thefirstoption.com.ng/services/data-bundles',
    title: 'Buy Data Bundles on WhatsApp in Nigeria | FirstOption',
    description: 'Buy data bundles through FirstOption on WhatsApp in Nigeria with one official support path, faster repeat payments and a trust-first service flow.',
    ogDescription: 'Buy data bundles on WhatsApp in Nigeria through the verified FirstOption channel.',
    twitterDescription: 'Buy data bundles in Nigeria through the official FirstOption WhatsApp route.',
  },
  {
    url: 'https://www.thefirstoption.com.ng/services/electricity',
    output: path.join(distDir, 'services', 'electricity', 'index.html'),
    canonical: 'https://www.thefirstoption.com.ng/services/electricity',
    title: 'Pay Electricity Bills on WhatsApp in Nigeria | FirstOption',
    description: 'Handle electricity bill and token payments through FirstOption on WhatsApp in Nigeria using one official support path and a wallet-first flow.',
    ogDescription: 'Pay electricity-related bills in Nigeria through the official FirstOption WhatsApp service flow.',
    twitterDescription: 'Use the verified FirstOption chat for electricity bill and token requests in Nigeria.',
  },
  {
    url: 'https://www.thefirstoption.com.ng/services/cable-tv',
    output: path.join(distDir, 'services', 'cable-tv', 'index.html'),
    canonical: 'https://www.thefirstoption.com.ng/services/cable-tv',
    title: 'Renew Cable TV on WhatsApp in Nigeria | FirstOption',
    description: 'Use FirstOption on WhatsApp in Nigeria for cable TV renewals through one official route with visible support and trust pages.',
    ogDescription: 'Handle cable TV renewals in Nigeria through the verified FirstOption WhatsApp channel.',
    twitterDescription: 'Renew cable TV in Nigeria through the official FirstOption chat.',
  },
  {
    url: 'https://www.thefirstoption.com.ng/services/betting-funding',
    output: path.join(distDir, 'services', 'betting-funding', 'index.html'),
    canonical: 'https://www.thefirstoption.com.ng/services/betting-funding',
    title: 'Fund Betting Wallets on WhatsApp in Nigeria | FirstOption',
    description: 'Fund betting wallets through FirstOption on WhatsApp in Nigeria using one official support path instead of random forwarded payment instructions.',
    ogDescription: 'Use the official FirstOption WhatsApp route for betting wallet funding in Nigeria.',
    twitterDescription: 'Fund betting wallets in Nigeria through the verified FirstOption chat.',
  },
  {
    url: 'https://www.thefirstoption.com.ng/services/airtime-to-cash',
    output: path.join(distDir, 'services', 'airtime-to-cash', 'index.html'),
    canonical: 'https://www.thefirstoption.com.ng/services/airtime-to-cash',
    title: 'Convert Airtime to Cash on WhatsApp in Nigeria | FirstOption',
    description: 'Handle airtime-to-cash requests through FirstOption on WhatsApp in Nigeria with one visible verification path and public trust signals.',
    ogDescription: 'Use the official FirstOption route when handling airtime-to-cash requests in Nigeria.',
    twitterDescription: 'Verify the FirstOption support path before any airtime-to-cash request in Nigeria.',
  },
  {
    url: 'https://www.thefirstoption.com.ng/services/exam-pins',
    output: path.join(distDir, 'services', 'exam-pins', 'index.html'),
    canonical: 'https://www.thefirstoption.com.ng/services/exam-pins',
    title: 'Buy Exam Pins on WhatsApp in Nigeria | FirstOption',
    description: 'Use FirstOption on WhatsApp in Nigeria for exam pin requests through one official support path with clear public verification details.',
    ogDescription: 'Handle exam pin requests in Nigeria through the official FirstOption WhatsApp route.',
    twitterDescription: 'Buy exam pins in Nigeria through the verified FirstOption chat and support path.',
  },
  {
    url: 'https://www.thefirstoption.com.ng/services/internet',
    output: path.join(distDir, 'services', 'internet', 'index.html'),
    canonical: 'https://www.thefirstoption.com.ng/services/internet',
    title: 'Pay for Internet Subscriptions on WhatsApp in Nigeria | FirstOption',
    description: 'Handle internet subscription requests through FirstOption on WhatsApp in Nigeria with one public, verifiable support path.',
    ogDescription: 'Use the official FirstOption route for internet subscriptions in Nigeria.',
    twitterDescription: 'Handle internet subscription requests in Nigeria through the verified FirstOption chat.',
  },
]

const GUIDE_ROUTE_METADATA = [
  {
    url: 'https://www.thefirstoption.com.ng/guides/buy-airtime-on-whatsapp-nigeria',
    output: path.join(distDir, 'guides', 'buy-airtime-on-whatsapp-nigeria', 'index.html'),
    canonical: 'https://www.thefirstoption.com.ng/guides/buy-airtime-on-whatsapp-nigeria',
    title: 'How to Buy Airtime on WhatsApp in Nigeria | FirstOption Guide',
    description: 'Learn how to buy airtime on WhatsApp in Nigeria through the official FirstOption route, what to verify before paying and how to keep support in one chat.',
    ogDescription: 'A practical FirstOption guide to buying airtime on WhatsApp in Nigeria through the official route.',
    twitterDescription: 'Use this FirstOption guide to buy airtime on WhatsApp in Nigeria through the verified public route.',
  },
  {
    url: 'https://www.thefirstoption.com.ng/guides/fund-your-wallet-before-paying-bills',
    output: path.join(distDir, 'guides', 'fund-your-wallet-before-paying-bills', 'index.html'),
    canonical: 'https://www.thefirstoption.com.ng/guides/fund-your-wallet-before-paying-bills',
    title: 'How to Fund Your Wallet Before Paying Bills on WhatsApp | FirstOption Guide',
    description: 'Learn how the FirstOption wallet-first payment flow works on WhatsApp in Nigeria and why it helps with repeat bill, airtime and subscription payments.',
    ogDescription: 'A practical FirstOption guide to funding your wallet before paying bills on WhatsApp in Nigeria.',
    twitterDescription: 'See how the FirstOption wallet-first flow works before repeat bill payments on WhatsApp.',
  },
  {
    url: 'https://www.thefirstoption.com.ng/guides/airtime-to-cash-whatsapp-nigeria',
    output: path.join(distDir, 'guides', 'airtime-to-cash-whatsapp-nigeria', 'index.html'),
    canonical: 'https://www.thefirstoption.com.ng/guides/airtime-to-cash-whatsapp-nigeria',
    title: 'How Airtime-to-Cash Works in Nigeria on WhatsApp | FirstOption Guide',
    description: 'Learn how to approach airtime-to-cash requests in Nigeria through the official FirstOption route and what to verify before acting on any instruction.',
    ogDescription: 'A practical FirstOption guide to understanding airtime-to-cash requests in Nigeria on WhatsApp.',
    twitterDescription: 'Use this FirstOption guide to verify the official airtime-to-cash route in Nigeria.',
  },
  {
    url: 'https://www.thefirstoption.com.ng/guides/buy-exam-pins-whatsapp-nigeria',
    output: path.join(distDir, 'guides', 'buy-exam-pins-whatsapp-nigeria', 'index.html'),
    canonical: 'https://www.thefirstoption.com.ng/guides/buy-exam-pins-whatsapp-nigeria',
    title: 'How to Buy Exam Pins Without Leaving WhatsApp in Nigeria | FirstOption Guide',
    description: 'Learn how to handle exam pin requests through the official FirstOption WhatsApp route in Nigeria and what to verify before paying.',
    ogDescription: 'A practical FirstOption guide to buying exam pins through WhatsApp in Nigeria.',
    twitterDescription: 'Use this FirstOption guide for exam pin requests through the verified WhatsApp route.',
  },
  {
    url: 'https://www.thefirstoption.com.ng/guides/renew-dstv-gotv-whatsapp-nigeria',
    output: path.join(distDir, 'guides', 'renew-dstv-gotv-whatsapp-nigeria', 'index.html'),
    canonical: 'https://www.thefirstoption.com.ng/guides/renew-dstv-gotv-whatsapp-nigeria',
    title: 'How to Renew DSTV or GOtv Through WhatsApp in Nigeria | FirstOption Guide',
    description: 'Learn how to renew DSTV or GOtv through the official FirstOption WhatsApp route in Nigeria and how to keep support tied to the same verified path.',
    ogDescription: 'A practical FirstOption guide to cable subscription renewals on WhatsApp in Nigeria.',
    twitterDescription: 'Use this FirstOption guide for DSTV or GOtv renewals through the official WhatsApp route.',
  },
  {
    url: 'https://www.thefirstoption.com.ng/guides/fund-betting-wallets-via-whatsapp',
    output: path.join(distDir, 'guides', 'fund-betting-wallets-via-whatsapp', 'index.html'),
    canonical: 'https://www.thefirstoption.com.ng/guides/fund-betting-wallets-via-whatsapp',
    title: 'How to Fund Betting Wallets via WhatsApp in Nigeria | FirstOption Guide',
    description: 'Learn how to handle betting wallet funding through the official FirstOption route in Nigeria and what to verify before using any payment instruction.',
    ogDescription: 'A practical FirstOption guide to funding betting wallets via WhatsApp in Nigeria.',
    twitterDescription: 'Use this FirstOption guide to verify the official betting wallet funding route on WhatsApp.',
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
    title: 'FirstOption Digital Services | WhatsApp Airtime, Bills, Wallet Funding & More in Nigeria',
    description: 'FirstOption Digital Services helps Nigerians buy airtime, data, electricity, cable TV, exam pins and more through WhatsApp. Official support and wallet funding in one chat.',
    ogDescription: 'Buy airtime, data, electricity, cable TV, exam pins and more through one official WhatsApp chat with FirstOption Digital Services.',
    twitterDescription: 'Official WhatsApp digital services for Nigerians: airtime, data, bills, wallet funding and everyday payments in one chat.',
  },
  {
    url: 'https://www.thefirstoption.com.ng/services',
    output: path.join(distDir, 'services', 'index.html'),
    canonical: 'https://www.thefirstoption.com.ng/services',
    title: 'FirstOption Services | Airtime, Data, Bills and Wallet Funding on WhatsApp',
    description: 'Explore the live FirstOption services available on WhatsApp, including airtime, data, electricity, cable TV, betting funding, exam pins and wallet funding.',
    ogDescription: 'Browse the live FirstOption WhatsApp services for Nigerians, from airtime and data to electricity, cable and wallet funding.',
    twitterDescription: 'See the live FirstOption services already available through one official WhatsApp chat.',
  },
  {
    url: 'https://www.thefirstoption.com.ng/about',
    output: path.join(distDir, 'about', 'index.html'),
    canonical: 'https://www.thefirstoption.com.ng/about',
    title: 'About FirstOption Digital Services | WhatsApp Digital Services in Nigeria',
    description: 'Learn what FirstOption Digital Services does, how the WhatsApp-based service model works and why the brand keeps its public trust signals simple and consistent.',
    ogDescription: 'Learn about FirstOption Digital Services, the WhatsApp-first digital services brand for Nigerians.',
    twitterDescription: 'Learn how FirstOption uses one official WhatsApp flow for airtime, bills, wallet funding and everyday digital services.',
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
    title: 'Fund Your Wallet Before Paying Bills on WhatsApp | FirstOption',
    description: 'Learn how FirstOption uses a wallet-first model in Nigeria so repeat service purchases on WhatsApp move faster through one official support path.',
    ogDescription: 'Understand the FirstOption wallet-first payment flow for WhatsApp-based digital services in Nigeria.',
    twitterDescription: 'See how wallet funding works through the official FirstOption WhatsApp service flow in Nigeria.',
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