import { EXTENSION_URL } from '../constants'
import logo from '../assets/logo.png'
import '../styles/Hero.css'

export default function Hero() {
  return (
    <section className="hero-section section-pad" id="hero">
      {/* Background grid */}
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className="hero-blob hero-blob-1" aria-hidden="true" />
      <div className="hero-blob hero-blob-2" aria-hidden="true" />

      <div className="container">
        <div className="hero-inner">
          {/* Eyebrow */}
          <div className="hero-eyebrow reveal" data-delay="0">
            <span className="status-dot live" />
            <span className="mono" style={{ fontSize: 12, color: 'var(--text-secondary)' }}>Chrome Extension · Free · v1.3</span>
          </div>

          {/* Heading */}
          <h1 className="hero-heading display-heading reveal" data-delay="80">
            Your UI deserves<br />
            <span className="gradient-text">zero inconsistencies.</span>
          </h1>

          {/* Subtext */}
          <p className="hero-sub body-text reveal" data-delay="160">
            UI Consistency Checker is a Chrome extension that scans any webpage for component style
            deviations, accessibility gaps, and quality issues — then fixes them in one click.
          </p>

          {/* CTAs */}
          <div className="hero-ctas reveal" data-delay="240">
            <a
              href={EXTENSION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-custom"
            >
              <span className="material-symbols-outlined" style={{ fontSize: 19 }}>add_circle</span>
              Add to Chrome — Free
            </a>
            <a href="#how-to-use" className="btn-ghost-custom">
              See how it works
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_downward</span>
            </a>
          </div>

          {/* Chips row */}
          <div className="hero-chips reveal" data-delay="300">
            <span className="chip chip-primary">
              <span className="material-symbols-outlined" style={{ fontSize: 14 }}>widgets</span>
              Component scanning
            </span>
            <span className="chip chip-warning">
              <span className="material-symbols-outlined" style={{ fontSize: 14 }}>accessibility_new</span>
              Accessibility
            </span>
            <span className="chip chip-cyan">
              <span className="material-symbols-outlined" style={{ fontSize: 14 }}>analytics</span>
              Quality scores
            </span>
            <span className="chip chip-success">
              <span className="material-symbols-outlined" style={{ fontSize: 14 }}>auto_fix_high</span>
              Auto-Fix CSS
            </span>
            <span className="chip">
              <span className="material-symbols-outlined" style={{ fontSize: 14 }}>grid_on</span>
              Spacing grid
            </span>
          </div>
        </div>

        {/* Extension popup mockup */}
        <div className="hero-mockup reveal" data-delay="200">
          <div className="mockup-glow" aria-hidden="true" />
          <ExtensionMockup />
        </div>
      </div>
    </section>
  )
}

function ExtensionMockup() {
  return (
    <div className="ext-popup">
      {/* Header bar */}
      <div className="ext-header">
        <div className="ext-header-left">
          <img src={logo} alt="" style={{ width: 20, height: 20, borderRadius: 5 }} />
          <div>
            <div className="ext-title">UI Consistency Checker</div>
            <div className="ext-subtitle">Scan &amp; Analysis Tool</div>
          </div>
        </div>
        <div className="ext-theme-pills">
          <div className="ext-pill active">
            <span className="material-symbols-outlined" style={{ fontSize: 13 }}>dark_mode</span>
          </div>
          <div className="ext-pill">
            <span className="material-symbols-outlined" style={{ fontSize: 13 }}>light_mode</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="ext-tabs">
        <div className="ext-tab active">
          <span className="material-symbols-outlined" style={{ fontSize: 14 }}>build</span>
          Services
        </div>
        <div className="ext-tab">
          <span className="material-symbols-outlined" style={{ fontSize: 14 }}>widgets</span>
          Components
        </div>
      </div>

      {/* Action grid */}
      <div className="ext-body">
        <div className="ext-action-grid">
          <div className="ext-action-btn run">
            <span className="material-symbols-outlined" style={{ fontSize: 14 }}>play_circle</span>
            Run Check
          </div>
          <div className="ext-action-btn">
            <span className="material-symbols-outlined" style={{ fontSize: 14 }}>grid_on</span>
            Grid
          </div>
          <div className="ext-action-btn">
            <span className="material-symbols-outlined" style={{ fontSize: 14 }}>analytics</span>
            Quality
          </div>
          <div className="ext-action-btn">
            <span className="material-symbols-outlined" style={{ fontSize: 14 }}>auto_fix_high</span>
            Auto-Fix
          </div>
        </div>

        {/* Results */}
        <div className="ext-results-label">Check Results</div>
        <div className="ext-result pass">
          <div className="ext-result-icon pass">
            <span className="material-symbols-outlined" style={{ fontSize: 15 }}>check_circle</span>
          </div>
          <div className="ext-result-text">
            <div className="ext-result-title">Button height consistent</div>
            <div className="ext-result-sub">height: 40px — passed</div>
          </div>
          <span className="chip chip-success" style={{ fontSize: 9, padding: '2px 7px' }}>PASS</span>
        </div>
        <div className="ext-result fail">
          <div className="ext-result-icon fail">
            <span className="material-symbols-outlined" style={{ fontSize: 15 }}>error</span>
          </div>
          <div className="ext-result-text">
            <div className="ext-result-title">Border-radius mismatch</div>
            <div className="ext-result-sub">expected 8px, found 4px</div>
          </div>
          <span className="chip chip-danger" style={{ fontSize: 9, padding: '2px 7px' }}>FAIL</span>
        </div>
        <div className="ext-result warn">
          <div className="ext-result-icon warn">
            <span className="material-symbols-outlined" style={{ fontSize: 15 }}>warning</span>
          </div>
          <div className="ext-result-text">
            <div className="ext-result-title">Missing alt attribute</div>
            <div className="ext-result-sub">accessibility issue</div>
          </div>
          <span className="chip chip-warning" style={{ fontSize: 9, padding: '2px 7px' }}>A11Y</span>
        </div>
        <div className="ext-result pass">
          <div className="ext-result-icon pass">
            <span className="material-symbols-outlined" style={{ fontSize: 15 }}>check_circle</span>
          </div>
          <div className="ext-result-text">
            <div className="ext-result-title">Input padding correct</div>
            <div className="ext-result-sub">padding: 0 12px — passed</div>
          </div>
          <span className="chip chip-success" style={{ fontSize: 9, padding: '2px 7px' }}>PASS</span>
        </div>

        {/* Scan bar */}
        <div className="ext-scan-bar">
          <div className="ext-scan-fill" />
        </div>
      </div>
    </div>
  )
}
