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

const routes = [
  { url: 'https://www.thefirstoption.com.ng/', output: templatePath },
]

for (const route of routes) {
  const appHtml = render(route.url)
  const html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
  await mkdir(path.dirname(route.output), { recursive: true })
  await writeFile(route.output, html, 'utf8')
}