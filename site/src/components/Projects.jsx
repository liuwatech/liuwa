const projects = [
  {
    title: 'Financial Reporting for Law Firms',
    description:
      'Custom-built financial reporting and management tools designed specifically for Zambian law firms. Streamlines billing, trust accounting, matter-based cost tracking, and regulatory compliance reporting.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    category: 'Legal Tech',
  },
  {
    title: 'Farm Operations Dashboard',
    description:
      'Custom agricultural dashboards for managing farm operations, crop tracking, input costs, yield analytics, and seasonal planning. Gives farm managers real-time visibility into every aspect of their operations.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    category: 'AgriTech',
  },
  {
    title: 'Renewable Energy Financial Modelling',
    description:
      'Sophisticated long-term financial models for renewable energy projects, integrating power forecasting for wind, solar, and battery storage assets to provide data-driven foundations for strategic investment decisions.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    category: 'Energy',
  },
  {
    title: 'Insurance Policy Administration',
    description:
      'Enterprise-grade insurance platform with end-to-end policy lifecycle management, granular role-based access, immutable audit trails for regulatory compliance, and automated PDF license disk generation.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    category: 'InsurTech',
  },
  {
    title: 'LuSE Market Data Dashboard',
    description:
      'Interactive dashboard providing live market data from the Lusaka Stock Exchange with historical trend analysis and price tracking. AI-driven analytics and trading signal recommendations coming soon.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M18 14v4a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h4" />
      </svg>
    ),
    category: 'FinTech',
  },
  {
    title: 'AI Agent via SMS',
    description:
      'A mobile AI service leveraging SMS/USSD to deliver Zambian-specific AI information to users without data connectivity or smartphones — bridging the digital divide.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    category: 'AI',
    link: 'https://sms.liuwa.co.zm/',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block px-4 py-1.5 bg-green-primary/10 text-green-primary text-sm font-semibold rounded-full mb-4">
            Project Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Solutions We've Delivered
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            From legal tech to agriculture, energy to insurance — we build software
            that solves real problems for Zambian industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`animate-on-scroll animate-on-scroll-delay-${(i % 4) + 1} group relative bg-white rounded-xl border border-gray-200 p-6 hover:border-green-primary/30 hover:shadow-lg transition-all duration-300`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-lg bg-green-50 text-green-primary group-hover:bg-green-primary group-hover:text-white transition-colors duration-300">
                  {project.icon}
                </div>
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  {project.category}
                </span>
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{project.description}</p>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-green-primary text-sm font-semibold hover:gap-2.5 transition-all duration-300"
                >
                  View Project
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
