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
]

for (const route of routes) {
  const appHtml = render(route.url)
  const htmlWithApp = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
  const html = applyMetadata(htmlWithApp, route)
  await mkdir(path.dirname(route.output), { recursive: true })
  await writeFile(route.output, html, 'utf8')
}