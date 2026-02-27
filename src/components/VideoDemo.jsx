import '../styles/VideoDemo.css'
import demoVideo from '../assets/demo.mp4'

export default function VideoDemo() {
  return (
    <section className="demo-section section-pad" id="demo">
      <div className="container">
        <div className="text-center mb-5 reveal">
          <p className="section-eyebrow mb-3">Demo</p>
          <h2 className="section-title" style={{ fontSize: 'clamp(28px,4vw,42px)' }}>
            Watch it work
          </h2>
          <p className="body-text mt-3" style={{ maxWidth: 480, margin: '12px auto 0' }}>
            See how the extension scans a page, surfaces issues, and applies auto-fixes in real time.
          </p>
        </div>

        <div className="demo-video-wrap reveal" data-delay="100">
          <div className="demo-video-container">
            {/*
              Place your video file inside src/assets/ and update the src below.
              Supported formats: .mp4 (recommended), .webm, .ogg
              Example: import demoVideo from '../assets/demo.mp4'
            */}
            <video
              className="demo-video"
              controls
              playsInline
              preload="metadata"
            >
              {/* Using imported video file from src/assets */}
              <source src={demoVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Quick feature summary under the video */}
        <div className="demo-points row g-3 mt-4">
          {[
            { icon: 'timer', text: 'Scan completes in under 2 seconds' },
            { icon: 'highlight', text: 'Issues highlighted directly on the page' },
            { icon: 'auto_fix_high', text: 'Auto-fix applies changes instantly' },
            { icon: 'download', text: 'Export generated CSS to your codebase' },
          ].map((p, i) => (
            <div className="col-6 col-md-3" key={i}>
              <div className="demo-point reveal" data-delay={i * 60}>
                <span className="material-symbols-outlined demo-point-icon">{p.icon}</span>
                <span className="demo-point-text body-text">{p.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
