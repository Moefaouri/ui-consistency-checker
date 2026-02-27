import { FEATURES } from '../constants'
import '../styles/Features.css'

export default function Features() {
  return (
    <section className="features-section section-pad" id="features">
      <div className="container">
        <div className="row align-items-end justify-content-between mb-5">
          <div className="col-lg-6 reveal">
            <p className="section-eyebrow mb-3">What it does</p>
            <h2 className="section-title" style={{ fontSize: 'clamp(28px,4vw,42px)' }}>
              Every check you need,<br />in one extension.
            </h2>
          </div>
          <div className="col-lg-5 reveal" data-delay="80">
            <p className="body-text mt-3 mt-lg-0">
              All six capabilities are built directly into the extension popup — no external tools,
              no dashboards, no accounts. Open it on any page and start scanning.
            </p>
          </div>
        </div>

        <div className="features-grid">
          {FEATURES.map((f, i) => (
            <div className="feature-card card-surface reveal" key={f.title} data-delay={i * 60}>
              <div className="feature-icon-wrap">
                <span className="material-symbols-outlined feature-icon">{f.icon}</span>
              </div>
              <div className="feature-body">
                <div className="feature-top">
                  <h3 className="feature-title">{f.title}</h3>
                  <span className={`chip ${f.tagVariant} feature-tag`}>{f.tag}</span>
                </div>
                <p className="feature-desc body-text">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
