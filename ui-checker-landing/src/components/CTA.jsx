import { EXTENSION_URL } from '../constants'
import logo from '../assets/logo.png'
import '../styles/CTA.css'

export default function CTA() {
  return (
    <section className="cta-section section-pad">
      <div className="container">
        <div className="cta-card reveal">
          <div className="cta-glow" aria-hidden="true" />
          <div className="cta-top-bar" aria-hidden="true" />

          <div className="cta-inner">
            <img src={logo} alt="" className="cta-logo" />
            <h2 className="section-title cta-heading">
              Ready to ship a more<br />
              <span className="gradient-text">consistent UI?</span>
            </h2>
            <p className="body-text cta-sub">
              Free, open source, and privacy-first. No data ever leaves your browser.
              Install in seconds and run your first check immediately.
            </p>
            <div className="cta-actions">
              <a
                href={EXTENSION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-custom cta-btn"
              >
                <span className="material-symbols-outlined" style={{ fontSize: 19 }}>add_circle</span>
                Add to Chrome — Free
              </a>
            </div>
            <div className="cta-meta">
              <span className="chip">
                <span className="material-symbols-outlined" style={{ fontSize: 13 }}>lock</span>
                No account required
              </span>
              <span className="chip">
                <span className="material-symbols-outlined" style={{ fontSize: 13 }}>security</span>
                100% private
              </span>
              <span className="chip">
                <span className="material-symbols-outlined" style={{ fontSize: 13 }}>bolt</span>
                Works on any page
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
