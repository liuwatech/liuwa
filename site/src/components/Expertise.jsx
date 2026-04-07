const capabilities = [
  {
    title: 'Full-Stack Web Development',
    description: 'React, Django, Node.js — scalable cloud-native applications and APIs.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: 'Mobile Applications',
    description: 'Native and cross-platform iOS/Android apps for enterprise and consumer markets.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'AI & Machine Learning',
    description: 'Predictive analytics, NLP, recommendation engines, and intelligent automation.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Actuarial & Financial Modelling',
    description: 'Risk modelling, cashflow projections, and regulatory capital calculations.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Data Analytics & Dashboards',
    description: 'Interactive visualisations, BI dashboards, and data pipelines.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M18 14v4a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h4" />
      </svg>
    ),
  },
  {
    title: 'Process Automation',
    description: 'Eliminate manual work with intelligent workflows and system integrations.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
]

export default function Expertise() {
  return (
    <section id="expertise" className="py-20 md:py-32 bg-slate-950 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
        backgroundSize: '40px 40px',
      }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-green-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block px-4 py-1.5 bg-green-primary/20 text-green-light text-sm font-semibold rounded-full mb-4">
            Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Engineering Excellence
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Deep technical expertise across the full spectrum of modern software development,
            data science, and financial engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => (
            <div
              key={cap.title}
              className={`animate-on-scroll animate-on-scroll-delay-${(i % 4) + 1} group p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-green-primary/30 transition-all duration-300`}
            >
              <div className="p-2.5 rounded-lg bg-green-primary/20 text-green-light w-fit mb-4 group-hover:bg-green-primary group-hover:text-white transition-colors duration-300">
                {cap.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{cap.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{cap.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
