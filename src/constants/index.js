export const EXTENSION_URL = 'https://chromewebstore.google.com/detail/mgidcbjkhigegdgdehnefogenihoboon?utm_source=item-share-cb'
export const GITHUB_URL = 'https://github.com/Moefaouri'
export const PORTFOLIO_URL = 'https://moelfaouriportfolio.vercel.app/'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/el-fauri/'

export const FEATURES = [
  {
    icon: 'widgets',
    title: 'Component Consistency Check',
    description:
      'Define your design system components — buttons, inputs, cards, modals, navbars — with expected HTML and CSS. The extension scans every matching element on the page and flags deviations in height, border-radius, padding, or any other CSS rule you define.',
    tag: 'Core',
    tagVariant: 'chip-primary',
  },
  {
    icon: 'accessibility_new',
    title: 'Accessibility Audits',
    description:
      'Detects missing alt text on images, unlabeled form inputs, unnamed buttons, absent ARIA labels, poor focus indicators, and low-contrast text elements. Issues are highlighted in-page with an amber A11Y badge.',
    tag: 'A11Y',
    tagVariant: 'chip-warning',
  },
  {
    icon: 'analytics',
    title: 'Page Quality Analysis',
    description:
      'Scores your page across four dimensions: Performance (DOM size, inline styles, unoptimized images), Accessibility, Best Practices (HTTPS, modern CSS usage, deprecated tags), and SEO (title, meta description, Open Graph, structured data).',
    tag: 'Quality',
    tagVariant: 'chip-cyan',
  },
  {
    icon: 'auto_fix_high',
    title: 'One-Click Auto-Fix',
    description:
      'After running a check, click Auto-Fix to apply your defined component styles directly to every failing element on the page. Copy the generated CSS snippet or export it as a file to update your actual codebase.',
    tag: 'Fix',
    tagVariant: 'chip-success',
  },
  {
    icon: 'grid_on',
    title: 'Spacing Grid Overlay',
    description:
      'Toggle a configurable pixel grid overlay directly on any webpage. Grid size is adjustable from 4 px to 128 px in steps of 4, rendered as a semi-transparent indigo grid that makes alignment issues immediately visible.',
    tag: 'Visual',
    tagVariant: 'chip-primary',
  },
  {
    icon: 'import_export',
    title: 'Import & Export Config',
    description:
      'Save your entire component library as a JSON file and import it into any browser session. Share your design system rules across projects or with your team without re-entering definitions manually.',
    tag: 'Workflow',
    tagVariant: 'chip-cyan',
  },
]

export const HOW_TO_USE = [
  {
    step: '01',
    icon: 'extension',
    title: 'Install from Chrome Web Store',
    description: 'Click the install button and add the extension to Chrome. No account, no signup — it activates immediately on any webpage.',
  },
  {
    step: '02',
    icon: 'widgets',
    title: 'Add Your Components',
    description: 'Open the popup, go to the Components tab, and click "Add Component". Paste the HTML tag and CSS styles of your design system elements. Or import a saved JSON config.',
  },
  {
    step: '03',
    icon: 'play_circle',
    title: 'Run the Check',
    description: 'Switch to the Services tab and click "Run Check". Failing elements are highlighted in red in-page with an "!" badge and a description of the exact CSS mismatch.',
  },
  {
    step: '04',
    icon: 'auto_fix_high',
    title: 'Fix and Ship',
    description: 'Click "Auto-Fix" to apply the correct styles instantly on the page. Copy or export the CSS diff. Use the Quality button for an overall page health score.',
  },
]

export const ADVANTAGES = [
  { icon: 'lock', title: 'Fully Private', description: 'No data ever leaves your browser. Everything runs locally — no servers, no tracking, no accounts needed.' },
  { icon: 'bolt', title: 'Works on Any Page', description: 'Compatible with any website or web app, including local dev servers, staging environments, and live production sites.' },
  { icon: 'code', title: 'Zero Setup to Start', description: 'Install and open it. The grid overlay and quality analysis work immediately with no configuration required.' },
  { icon: 'dark_mode', title: 'Dark & Light Theme', description: 'The popup supports both dark and light themes, keeping it comfortable to use in any environment or time of day.' },
]
