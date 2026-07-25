import { useState } from 'react'
import useLenis from './hooks/useLenis'
import Loader from './components/Loader'
import ScrollProgress from './components/ScrollProgress'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Skills from './sections/Skills'
import Achievements from './sections/Achievements'
import Contact from './sections/Contact'

export default function App() {
  const [loaded, setLoaded] = useState(false)
  useLenis()

  return (
    <>
      <Loader onDone={() => setLoaded(true)} />
      <div className="noise-layer" />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />

      <main className={loaded ? 'opacity-100' : 'opacity-0'} style={{ transition: 'opacity 0.6s ease' }}>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
