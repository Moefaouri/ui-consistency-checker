import { useScrollReveal } from './hooks/useScrollReveal'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Screenshots from './components/Screenshots'
import Features from './components/Features'
import HowToUse from './components/HowToUse'
import Advantages from './components/Advantages'
import VideoDemo from './components/VideoDemo'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  useScrollReveal()

  return (
    <>
      <div className="noise-overlay" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <div className="section-sep" />
        <Screenshots />
        <div className="section-sep" />
        <Features />
        <div className="section-sep" />
        <HowToUse />
        <div className="section-sep" />
        <VideoDemo />
        <div className="section-sep" />
        <Advantages />
        <div className="section-sep" />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
