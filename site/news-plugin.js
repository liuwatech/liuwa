// Builds the Daily Brief index from the dated HTML files the scheduled routine
// commits to public/news/ (e.g. public/news/2026-10-20.html). Emits
// news/index.json (read by the homepage card) and news/index.html (the archive).
import fs from 'node:fs'
import path from 'node:path'

const NEWS_DIR = path.resolve(import.meta.dirname, 'public/news')
const BRIEF_FILE = /^(\d{4}-\d{2}-\d{2})\.html$/

function readTag(html, regex) {
  const match = html.match(regex)
  return match ? decodeEntities(match[1].trim()) : ''
}

function decodeEntities(text) {
  return text
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, '&')
}

function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function formatDate(date) {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString('en-GB', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC',
  })
}

export function listBriefs() {
  if (!fs.existsSync(NEWS_DIR)) return []
  return fs.readdirSync(NEWS_DIR)
    .map((file) => file.match(BRIEF_FILE))
    .filter(Boolean)
    .map(([file, date]) => {
      const html = fs.readFileSync(path.join(NEWS_DIR, file), 'utf8')
      return {
        date,
        url: `/news/${date}`,
        title: readTag(html, /<title[^>]*>([\s\S]*?)<\/title>/i) || `Daily Brief — ${formatDate(date)}`,
        description: readTag(html, /<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i),
      }
    })
    .sort((a, b) => b.date.localeCompare(a.date))
}

function renderArchive(briefs) {
  const items = briefs.length
    ? briefs.map((b) => `
      <li>
        <a href="${b.url}">
          <span class="date">${formatDate(b.date)}</span>
          <span class="title">${escapeHtml(b.title)}</span>
          ${b.description ? `<span class="desc">${escapeHtml(b.description)}</span>` : ''}
        </a>
      </li>`).join('')
    : '<li class="empty">The first brief is on its way.</li>'

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Daily Brief — Liuwa Technologies</title>
  <meta name="description" content="A daily briefing on the news shaping Zambian business and technology, produced by Liuwa Technologies." />
  <meta property="og:title" content="Daily Brief — Liuwa Technologies" />
  <meta property="og:description" content="A daily briefing on the news shaping Zambian business and technology, produced by Liuwa Technologies." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://liuwa.co.zm/news/" />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    :root { --green: #007550; --green-dark: #005f40; --ink: #111827; --muted: #6b7280; --line: #e5e7eb; }
    * { box-sizing: border-box; }
    body { margin: 0; background: #f9fafb; color: var(--ink); font-family: 'Inter', system-ui, -apple-system, sans-serif; -webkit-font-smoothing: antialiased; }
    header { background: linear-gradient(135deg, #002e20, var(--green)); color: #fff; padding: 24px 16px 56px; }
    .wrap { max-width: 760px; margin: 0 auto; }
    .brand { display: inline-flex; align-items: center; gap: 10px; color: #fff; text-decoration: none; font-weight: 700; }
    .brand img { width: 36px; height: 36px; }
    h1 { font-size: clamp(2rem, 6vw, 3rem); margin: 48px 0 8px; letter-spacing: -0.02em; }
    header p { margin: 0; color: rgba(255,255,255,0.8); font-size: 1.05rem; }
    ul { list-style: none; margin: -32px auto 48px; padding: 0 16px; max-width: 792px; }
    li a { display: block; background: #fff; border: 1px solid var(--line); border-radius: 12px; padding: 20px 24px; margin-bottom: 12px; text-decoration: none; color: inherit; transition: border-color .2s, box-shadow .2s; }
    li a:hover { border-color: rgba(0,117,80,0.35); box-shadow: 0 8px 24px rgba(0,0,0,0.06); }
    .date { display: block; font-size: .8rem; font-weight: 600; color: var(--green); text-transform: uppercase; letter-spacing: .05em; margin-bottom: 6px; }
    .title { display: block; font-weight: 700; font-size: 1.1rem; }
    .desc { display: block; color: var(--muted); font-size: .95rem; margin-top: 6px; line-height: 1.5; }
    .empty { background: #fff; border: 1px solid var(--line); border-radius: 12px; padding: 24px; color: var(--muted); }
    footer { text-align: center; color: var(--muted); font-size: .85rem; padding: 0 16px 48px; }
    footer a { color: var(--green); }
  </style>
</head>
<body>
  <header>
    <div class="wrap">
      <a class="brand" href="/"><img src="/liuwa-wildebeest-hifi.svg" alt="" />Liuwa Technologies</a>
      <h1>Daily Brief</h1>
      <p>The news shaping Zambian business and technology, every morning.</p>
    </div>
  </header>
  <ul>${items}
  </ul>
  <footer>Produced by Liuwa Technologies' automated research pipeline. <a href="/">Back to liuwa.co.zm</a></footer>
</body>
</html>
`
}

export default function newsPlugin() {
  return {
    name: 'liuwa-news',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url.split('?')[0]
        if (url === '/news/index.json') {
          res.setHeader('Content-Type', 'application/json')
          return res.end(JSON.stringify(listBriefs()))
        }
        if (url === '/news' || url === '/news/') {
          res.setHeader('Content-Type', 'text/html')
          return res.end(renderArchive(listBriefs()))
        }
        const brief = url.match(/^\/news\/(\d{4}-\d{2}-\d{2})$/)
        if (brief) req.url = `/news/${brief[1]}.html`
        next()
      })
    },
    generateBundle() {
      const briefs = listBriefs()
      this.emitFile({ type: 'asset', fileName: 'news/index.json', source: JSON.stringify(briefs, null, 2) })
      this.emitFile({ type: 'asset', fileName: 'news/index.html', source: renderArchive(briefs) })
    },
  }
}
