import { ADVANTAGES } from '../constants'
import '../styles/Advantages.css'

export default function Advantages() {
  return (
    <section className="adv-section section-pad" id="advantages">
      <div className="container">
        <div className="adv-inner">
          <div className="adv-left reveal">
            <p className="section-eyebrow mb-3">Why use it</p>
            <h2 className="section-title" style={{ fontSize: 'clamp(28px,4vw,42px)' }}>
              Built for developers<br />who care about quality.
            </h2>
            <p className="body-text mt-4" style={{ maxWidth: 400 }}>
              Designed to slot into your existing workflow without friction.
              No accounts, no cloud sync, no tracking — just a tool that works.
            </p>
          </div>

          <div className="adv-grid">
            {ADVANTAGES.map((a, i) => (
              <div className="adv-card card-surface reveal" key={a.title} data-delay={i * 70}>
                <div className="adv-icon-wrap">
                  <span className="material-symbols-outlined adv-icon">{a.icon}</span>
                </div>
                <h3 className="adv-title">{a.title}</h3>
                <p className="adv-desc body-text">{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
