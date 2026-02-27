import { HOW_TO_USE, EXTENSION_URL } from '../constants'
import '../styles/HowToUse.css'

export default function HowToUse() {
  return (
    <section className="how-section section-pad" id="how-to-use">
      <div className="how-bg-line" aria-hidden="true" />
      <div className="container">
        <div className="text-center mb-5 reveal">
          <p className="section-eyebrow mb-3">Workflow</p>
          <h2 className="section-title" style={{ fontSize: 'clamp(28px,4vw,42px)' }}>
            Up and running in four steps
          </h2>
          <p className="body-text mt-3" style={{ maxWidth: 480, margin: '12px auto 0' }}>
            No learning curve. From install to your first check takes under two minutes.
          </p>
        </div>

        <div className="how-steps">
          {HOW_TO_USE.map((step, i) => (
            <div className="how-step reveal" key={step.step} data-delay={i * 80}>
              {/* Connector line between steps */}
              {i < HOW_TO_USE.length - 1 && (
                <div className="step-connector" aria-hidden="true" />
              )}
              <div className="step-number-wrap">
                <div className={`step-number ${i === 0 ? 'step-number-active' : ''}`}>
                  {step.step}
                </div>
              </div>
              <div className={`step-card card-surface`}>
                <div className="step-icon-wrap">
                  <span className="material-symbols-outlined step-icon">{step.icon}</span>
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc body-text">{step.description}</p>
                {i === 0 && (
                  <a
                    href={EXTENSION_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary-custom step-cta"
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: 17 }}>add_circle</span>
                    Install Now
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
