import { useTheme } from '../hooks/useTheme'
import { EXTENSION_URL } from '../constants'
import logo from '../assets/logo.png'
import '../styles/Navbar.css'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className="navbar-custom" id="top">
      <div className="container">
        <div className="navbar-inner">
          {/* Logo */}
          <a href="#top" className="nav-logo">
            <img src={logo} alt="UI Checker Logo" className="nav-logo-img" />
            <span className="nav-logo-text">UI Consistency Checker</span>
          </a>

          {/* Nav links — hidden on mobile */}
          <ul className="nav-links d-none d-md-flex">
            <li><a href="#features">Features</a></li>
            <li><a href="#how-to-use">How it works</a></li>
            <li><a href="#advantages">Why use it</a></li>
            <li><a href="#demo">Demo</a></li>
          </ul>

          {/* Right controls */}
          <div className="nav-right">
            <button
              className="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <span className="material-symbols-outlined">
                {theme === 'dark' ? 'light_mode' : 'dark_mode'}
              </span>
            </button>

            <a
              href={EXTENSION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-custom nav-cta d-none d-sm-inline-flex"
            >
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>add_circle</span>
              Add to Chrome
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
