# UI Consistency Checker — Landing Page

A fully structured React + Vite landing page for the UI Consistency Checker Chrome extension.

## Project Structure

```
src/
├── assets/           # Logo images
├── components/       # One .jsx file per section
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Screenshots.jsx
│   ├── Features.jsx
│   ├── HowToUse.jsx
│   ├── Advantages.jsx
│   ├── VideoDemo.jsx
│   ├── CTA.jsx
│   └── Footer.jsx
├── constants/
│   └── index.js      # All text content & data
├── hooks/
│   ├── useTheme.js       # Dark/light theme toggle
│   └── useScrollReveal.js # Intersection observer reveal
├── styles/
│   ├── global.css        # CSS variables, theme system, utilities
│   ├── Navbar.css
│   ├── Hero.css
│   └── ...               # One CSS file per component
├── App.jsx
└── main.jsx
```

## Getting Started

```bash
npm install
npm run dev
```

## Adding Your Video Demo

In `src/components/VideoDemo.jsx`, replace the placeholder div with:

```jsx
<iframe
  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
  title="UI Consistency Checker Demo"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>
```

## Dependencies

- React 19
- Vite 7
- Bootstrap 5.3 (CDN, responsive grid only)
- Google Fonts: Fraunces + DM Sans + DM Mono
- Material Symbols Outlined (CDN)

No extra npm packages required.
