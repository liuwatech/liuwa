export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div className="animate-on-scroll">
            <span className="inline-block px-4 py-1.5 bg-green-primary/10 text-green-primary text-sm font-semibold rounded-full mb-6">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Technology with{' '}
              <span className="text-green-primary">Purpose</span>,
              Built in Zambia
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-6">
              Liuwa Technologies is a Zambian software company named after the
              magnificent Liuwa Plains — reflecting our commitment to vast possibilities
              and resilient growth. We combine world-class software engineering with deep
              local market understanding to build solutions that truly work for Zambian
              businesses.
            </p>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Our team brings expertise spanning actuarial science, financial engineering,
              AI/ML, and full-stack development. We don't just write code — we partner
              with organisations to solve complex challenges and unlock growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-gray-700">
                <svg className="w-5 h-5 text-green-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Zambian-owned & operated</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <svg className="w-5 h-5 text-green-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Enterprise-grade security</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <svg className="w-5 h-5 text-green-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Regulatory compliance focus</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <svg className="w-5 h-5 text-green-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">AI-powered solutions</span>
              </div>
            </div>
          </div>

          {/* Right — visual element */}
          <div className="animate-on-scroll animate-on-scroll-delay-2 flex justify-center">
            <div className="relative">
              {/* Main card */}
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 md:p-10 max-w-md">
                <img
                  src="/liuwa-wildebeest-hifi.svg"
                  alt="Liuwa Technologies wildebeest logo"
                  className="w-32 h-32 mx-auto mb-6"
                />
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">Liuwa Technologies</h3>
                <p className="text-green-primary font-medium text-center mb-4">Lusaka, Zambia</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-600">
                    <svg className="w-5 h-5 text-green-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>michael@liuwa.co.zm</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <svg className="w-5 h-5 text-green-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                    </svg>
                    <span>liuwa.co.zm</span>
                  </div>
                </div>
              </div>

              {/* Background decorations */}
              <div className="absolute -top-4 -right-4 w-full h-full bg-green-primary/10 rounded-2xl" />
              <div className="absolute -bottom-4 -left-4 w-full h-full bg-green-primary/5 rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
