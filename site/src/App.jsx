import { useScrollAnimation } from './hooks/useScrollAnimation'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FlagshipProducts from './components/FlagshipProducts'
import Projects from './components/Projects'
import Expertise from './components/Expertise'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useScrollAnimation()

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FlagshipProducts />
      <Projects />
      <Expertise />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
