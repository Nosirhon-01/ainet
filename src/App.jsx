import { MotionConfig } from 'framer-motion'
import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import Hero from './components/sections/Hero.jsx'
import Marquee from './components/sections/Marquee.jsx'
import Portfolio from './components/sections/Portfolio.jsx'
import Services from './components/sections/Services.jsx'
import Pricing from './components/sections/Pricing.jsx'
import Process from './components/sections/Process.jsx'
import Why from './components/sections/Why.jsx'
import FinalCTA from './components/sections/FinalCTA.jsx'
import Contact from './components/sections/Contact.jsx'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="grain relative min-h-screen" style={{ overflowX: 'clip' }}>
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <Portfolio />
          <Services />
          <Pricing />
          <Process />
          <Why />
          <FinalCTA />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  )
}
