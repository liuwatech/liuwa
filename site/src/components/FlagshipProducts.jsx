const flagships = [
  {
    title: 'Automated Stockbroking Platform',
    subtitle: 'Trade shares on the Lusaka Stock Exchange',
    description:
      'A fully automated stockbroking platform and mobile app enabling seamless trading of shares on the Lusaka Stock Exchange (LuSE). Currently in final testing within LuSE\'s UAT environment ahead of production launch. Features include real-time market data, automated order execution, portfolio management, and a sleek mobile experience designed for both retail and institutional investors.',
    tags: ['Mobile App', 'LuSE Integration', 'Real-Time Trading', 'Portfolio Management', 'UAT Testing'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2 12h4l3-9 4 18 3-9h6" />
      </svg>
    ),
    gradient: 'from-green-primary to-emerald-600',
    status: 'Final Testing',
  },
  {
    title: 'Employee HR & Payroll System',
    subtitle: 'payroll.liuwa.co.zm',
    description:
      'A comprehensive HR and payroll management platform built for Zambian businesses. Handles NAPSA, NHIMA, and PAYE tax computations with full compliance. Features employee lifecycle management, leave tracking, automated payslip generation, bulk payments integration, and detailed statutory reporting.',
    tags: ['NAPSA/NHIMA/PAYE', 'Payslips', 'Leave Management', 'Bulk Payments', 'Statutory Reports'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    gradient: 'from-green-dark to-green-primary',
    status: 'Live',
    link: 'https://payroll.liuwa.co.zm',
  },
]

export default function FlagshipProducts() {
  return (
    <section id="flagship" className="py-20 md:py-32 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-green-50 to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block px-4 py-1.5 bg-green-primary/10 text-green-primary text-sm font-semibold rounded-full mb-4">
            Flagship Products
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Powering Zambian Enterprise
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Our flagship platforms are transforming how Zambian businesses operate,
            from capital markets to human resource management.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {flagships.map((product, i) => (
            <div
              key={product.title}
              className={`animate-on-scroll animate-on-scroll-delay-${i + 1} group relative bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500`}
            >
              {/* Top gradient bar */}
              <div className={`h-1.5 bg-gradient-to-r ${product.gradient}`} />

              <div className="p-8 md:p-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${product.gradient} text-white shadow-lg`}>
                    {product.icon}
                  </div>
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                    product.status === 'Live'
                      ? 'bg-green-50 text-green-primary'
                      : 'bg-amber-50 text-amber-600'
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                      product.status === 'Live' ? 'bg-green-primary' : 'bg-amber-500'
                    }`} />
                    {product.status}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 group-hover:text-green-primary transition-colors">
                  {product.title}
                </h3>
                <p className="text-green-primary font-medium mb-4">{product.subtitle}</p>
                <p className="text-gray-500 leading-relaxed mb-6">{product.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                {product.link && (
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-green-primary font-semibold hover:gap-3 transition-all duration-300"
                  >
                    Visit Platform
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
