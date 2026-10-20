import { useState, useEffect } from 'react'

function formatDate(date) {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString('en-GB', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC',
  })
}

function todayInLusaka() {
  return new Date().toLocaleDateString('en-CA', { timeZone: 'Africa/Lusaka' })
}

export default function DailyBrief() {
  const [briefs, setBriefs] = useState([])

  useEffect(() => {
    fetch('/news/index.json')
      .then((res) => (res.ok ? res.json() : []))
      .then(setBriefs)
      .catch(() => setBriefs([]))
  }, [])

  if (briefs.length === 0) return null

  const [latest, ...earlier] = briefs
  const isToday = latest.date === todayInLusaka()

  return (
    <section id="news" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-green-primary/10 text-green-primary text-sm font-semibold rounded-full mb-4">
            Daily Brief
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The Morning Brief
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            The news shaping Zambian business and technology, compiled every
            morning by our automated research pipeline.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <a
            href={latest.url}
            className="lg:col-span-2 group relative bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500"
          >
            <div className="h-1.5 bg-gradient-to-r from-green-primary to-emerald-600" />
            <div className="p-8 md:p-10">
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-semibold text-green-primary uppercase tracking-wider">
                  {formatDate(latest.date)}
                </span>
                {isToday && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-green-50 text-green-primary">
                    <span className="w-1.5 h-1.5 rounded-full animate-pulse bg-green-primary" />
                    New today
                  </span>
                )}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-green-primary transition-colors">
                {latest.title}
              </h3>
              {latest.description && (
                <p className="text-gray-500 leading-relaxed mb-6">{latest.description}</p>
              )}
              <span className="inline-flex items-center gap-2 text-green-primary font-semibold group-hover:gap-3 transition-all duration-300">
                Read the brief
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          </a>

          <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 flex flex-col">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Earlier briefs</h3>
            {earlier.length > 0 ? (
              <ul className="space-y-3 mb-6">
                {earlier.slice(0, 5).map((brief) => (
                  <li key={brief.date}>
                    <a href={brief.url} className="block text-sm text-gray-600 hover:text-green-primary transition-colors">
                      <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        {formatDate(brief.date)}
                      </span>
                      {brief.title}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-500 mb-6">More briefs will appear here each morning.</p>
            )}
            <a
              href="/news/"
              className="mt-auto inline-flex items-center gap-1.5 text-green-primary text-sm font-semibold hover:gap-2.5 transition-all duration-300"
            >
              View the archive
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
