export default function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo & tagline */}
          <div className="flex items-center gap-3">
            <img
              src="/liuwa-wildebeest-hifi.svg"
              alt="Liuwa Technologies"
              className="h-8 w-8"
            />
            <div>
              <span className="text-white font-semibold">Liuwa Technologies</span>
              <p className="text-sm text-gray-500">Zambian Software & Financial Technology</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#flagship" className="hover:text-white transition-colors">Products</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#expertise" className="hover:text-white transition-colors">Expertise</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} Liuwa Technologies. All rights reserved.</p>
          <p className="text-sm text-gray-500">Built with purpose in Zambia.</p>
        </div>
      </div>
    </footer>
  )
}
