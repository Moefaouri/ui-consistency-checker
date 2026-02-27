import { GITHUB_URL, PORTFOLIO_URL, LINKEDIN_URL, EXTENSION_URL } from '../constants'
import logo from '../assets/logo.png'
import '../styles/Footer.css'

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-sep section-sep" />
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={logo} alt="" className="footer-logo-img" />
              <span className="footer-logo-text">UI Consistency Checker</span>
            </div>
            <p className="footer-tagline body-text">
              A free Chrome extension for UI/UX quality analysis.
            </p>
            <div className="footer-socials">
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="GitHub">
                <span className="material-symbols-outlined">code</span>
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="LinkedIn">
                <span className="material-symbols-outlined">business_center</span>
              </a>
              <a href={PORTFOLIO_URL} target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Portfolio">
                <span className="material-symbols-outlined">person</span>
              </a>
            </div>
          </div>

          <div className="footer-links-col">
            <div className="footer-col-title">Extension</div>
            <ul className="footer-links">
              <li><a href={EXTENSION_URL} target="_blank" rel="noopener noreferrer">Install from Chrome Web Store</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#how-to-use">How it works</a></li>
              <li><a href="#demo">Demo</a></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <div className="footer-col-title">Developer</div>
            <ul className="footer-links">
              <li><a href={PORTFOLIO_URL} target="_blank" rel="noopener noreferrer">Portfolio</a></li>
              <li><a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Mohammad Elfauri. All rights reserved.</span>
          <span className="footer-version mono">v1.3</span>
        </div>
      </div>
    </footer>
  )
}
