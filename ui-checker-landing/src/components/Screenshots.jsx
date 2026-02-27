import '../styles/Screenshots.css'

// Extension screenshots — described as placeholder mockups since actual screenshots weren't provided
const SCREENS = [
  {
    id: 1,
    label: 'Run Check — Services Tab',
    desc: 'The main Services tab with Run Check, Grid, Quality, and Auto-Fix buttons.',
    type: 'services',
  },
  {
    id: 2,
    label: 'Check Results',
    desc: 'Inline results showing passed and failed component checks with CSS details.',
    type: 'results',
  },
  {
    id: 3,
    label: 'Quality Analysis',
    desc: 'Quality scores across Performance, Accessibility, Best Practices, and SEO.',
    type: 'quality',
  },
  {
    id: 4,
    label: 'Components Tab',
    desc: 'The Components tab for adding, editing, importing, and exporting your design system.',
    type: 'components',
  },
]

export default function Screenshots() {
  return (
    <section className="screenshots-section section-pad" id="screenshots">
      <div className="container">
        <div className="section-header text-center reveal">
          <p className="section-eyebrow mb-3">Extension Preview</p>
          <h2 className="section-title">See it in action</h2>
          <p className="body-text mt-3" style={{ maxWidth: 520, margin: '12px auto 0' }}>
            A minimal, focused popup that stays out of your way. Everything you need is one click away.
          </p>
        </div>

        <div className="screenshots-grid mt-5">
          {SCREENS.map((s, i) => (
            <div className="screen-card card-surface reveal" key={s.id} data-delay={i * 80}>
              <div className={`screen-preview screen-preview-${s.type}`}>
                <ScreenPreview type={s.type} />
              </div>
              <div className="screen-info">
                <div className="screen-label">{s.label}</div>
                <div className="screen-desc body-text">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ScreenPreview({ type }) {
  if (type === 'services') {
    return (
      <div className="sp-inner">
        <div className="sp-grid-2">
          <div className="sp-btn sp-btn-grad">
            <span className="material-symbols-outlined" style={{ fontSize: 12 }}>play_circle</span>
            Run Check
          </div>
          <div className="sp-btn">
            <span className="material-symbols-outlined" style={{ fontSize: 12 }}>grid_on</span>
            Grid
          </div>
          <div className="sp-btn">
            <span className="material-symbols-outlined" style={{ fontSize: 12 }}>analytics</span>
            Quality
          </div>
          <div className="sp-btn">
            <span className="material-symbols-outlined" style={{ fontSize: 12 }}>auto_fix_high</span>
            Auto-Fix
          </div>
        </div>
        <div className="sp-notice">
          <span className="material-symbols-outlined" style={{ fontSize: 12, color: 'var(--primary-light)' }}>info</span>
          <span>Add at least one component to enable Run Check</span>
        </div>
      </div>
    )
  }
  if (type === 'results') {
    return (
      <div className="sp-inner">
        <div className="sp-stats-row">
          <div className="sp-stat sp-stat-pass"><div className="sp-stat-num">7</div><div className="sp-stat-label">Passed</div></div>
          <div className="sp-stat sp-stat-fail"><div className="sp-stat-num">3</div><div className="sp-stat-label">Failed</div></div>
        </div>
        {[
          { t: 'Button border-radius', d: 'expected 8px, found 4px', status: 'fail' },
          { t: 'Input height match', d: 'height: 40px — passed', status: 'pass' },
          { t: 'Card padding correct', d: 'padding: 20px — passed', status: 'pass' },
        ].map((r, i) => (
          <div className={`sp-row sp-row-${r.status}`} key={i}>
            <div className={`sp-row-icon ${r.status}`}>
              <span className="material-symbols-outlined" style={{ fontSize: 13 }}>
                {r.status === 'pass' ? 'check_circle' : 'error'}
              </span>
            </div>
            <div><div className="sp-row-title">{r.t}</div><div className="sp-row-sub">{r.d}</div></div>
          </div>
        ))}
      </div>
    )
  }
  if (type === 'quality') {
    const metrics = [
      { label: 'Performance', score: 82, color: '#22c55e' },
      { label: 'Accessibility', score: 68, color: '#f59e0b' },
      { label: 'Best Practices', score: 74, color: '#6c63ff' },
      { label: 'SEO', score: 55, color: '#ef4444' },
    ]
    return (
      <div className="sp-inner">
        <div className="sp-quality-overall">Overall: <strong style={{ color: '#6c63ff' }}>70</strong>/100</div>
        {metrics.map((m, i) => (
          <div className="sp-metric" key={i}>
            <div className="sp-metric-header"><span>{m.label}</span><span style={{ color: m.color, fontWeight: 700 }}>{m.score}</span></div>
            <div className="sp-bar"><div className="sp-bar-fill" style={{ width: `${m.score}%`, background: m.color }} /></div>
          </div>
        ))}
      </div>
    )
  }
  if (type === 'components') {
    return (
      <div className="sp-inner">
        <div className="sp-comp-btn">
          <span className="material-symbols-outlined" style={{ fontSize: 12 }}>add_circle</span>
          Add Component
        </div>
        <div className="sp-comp-label">Saved Components (3)</div>
        {['Primary Button', 'Text Input', 'Card Component'].map((name, i) => (
          <div className="sp-comp-row" key={i}>
            <div>
              <div className="sp-comp-name">{name}</div>
              <div className="sp-comp-type">{['button', 'input', 'card'][i]}</div>
            </div>
            <div className="sp-comp-actions">
              <div className="sp-icon-btn"><span className="material-symbols-outlined" style={{ fontSize: 12 }}>edit</span></div>
              <div className="sp-icon-btn"><span className="material-symbols-outlined" style={{ fontSize: 12 }}>code</span></div>
              <div className="sp-icon-btn sp-icon-del"><span className="material-symbols-outlined" style={{ fontSize: 12 }}>delete</span></div>
            </div>
          </div>
        ))}
      </div>
    )
  }
  return null
}
