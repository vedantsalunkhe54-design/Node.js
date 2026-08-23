# RESCUE_INFO

A fast, distraction-free natural calamity information portal built with React + Vite + Tailwind CSS + React Router + Lucide React.

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Structure

- `src/data/disasters.js` — local/offline-first disaster and emergency contact configuration.
- `src/components/` — reserved for extracting reusable UI components as the app grows.
- `src/pages/` — reserved for scaling route-level pages.
- `src/App.jsx` — current compact implementation of the home dashboard, disaster detail route, header, contacts and phase cards.
- `src/index.css` — Tailwind entry point plus small accessibility/layout utilities.

## Routes

- `/` — safety dashboard with search and quick-access disaster cards.
- `/calamity/:id` — Before / During / After action guide.

## Production notes

The warning strip is deliberately a static local-data state in this mockup. For real deployment, connect verified official feeds and timestamp every alert, but keep the local JSON fallback so the core safety content remains usable offline.
