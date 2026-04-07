export default function Hero() {
  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Animated gradient background */}
      <div className="absolute inset-0 animate-gradient bg-gradient-to-br from-green-900 via-slate-950 to-green-primary/30" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-green-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-light/10 rounded-full blur-3xl animate-float-delay" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-green-light text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-green-light animate-pulse" />
          Zambian Software & Financial Technology
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight">
          Building the Future of{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-light to-green-primary">
            Zambian Finance
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
          From automated stockbroking on the Lusaka Stock Exchange to enterprise HR platforms,
          we engineer the software that powers Zambia's most ambitious organisations.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#flagship"
            className="px-8 py-4 bg-green-primary text-white font-semibold rounded-xl shadow-lg shadow-green-primary/25 hover:shadow-xl hover:shadow-green-primary/40 hover:bg-green-dark transition-all duration-300 text-lg"
          >
            Explore Our Products
          </a>
          <a
            href="#contact"
            className="px-8 py-4 glass text-white font-semibold rounded-xl hover:bg-white/15 transition-all duration-300 text-lg"
          >
            Talk to Us
          </a>
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {[
            { value: '5+', label: 'Enterprise Products' },
            { value: 'LuSE', label: 'Stock Exchange Integration' },
            { value: '100%', label: 'Zambian-Built' },
            { value: 'Secure', label: 'On-Premise & Hosted' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-green-light mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border-2 border-gray-500 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-gray-400 animate-bounce" />
        </div>
      </div>
    </header>
  )
}
