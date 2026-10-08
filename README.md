# Kaustava Sarma — Writer Portfolio

A personal portfolio website for **Kaustava Sarma** — writer, storyteller, and content marketing specialist. A single-page site with a warm "writer's corner" paper-and-doodle aesthetic.

**Live demo:** run locally (see below) · `npm run dev`

---

## ✨ Features

- **Single-page design** with smooth-scroll navigation
- **Sections:**
  - Hero — introduction with decorative note card
  - About — bio focused on storytelling, SEO, and copywriting
  - Writing — three work directions: storytelling, content marketing, research writing
  - Journey — work experience timeline
  - Toolbox — skill cloud
  - Learning — education (MA, BA, Class 12, Class 10)
  - Highlights — published work and speaking engagements
  - Contact — email, phone, and location
- **Responsive** — mobile hamburger menu, fluid layouts
- **Accessible** — ARIA labels, keyboard support (Esc closes menu), `prefers-reduced-motion` respected
- **Lightweight** — no backend, no analytics, just React + CSS

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| UI library | React 19 |
| Build tool | Vite 8 |
| Icons | lucide-react |
| Fonts | Playfair Display, DM Sans, Caveat (Google Fonts) |
| Styling | Custom CSS (`src/styles.css`) |

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ and npm

### Installation

```bash
git clone <repo-url>
cd kaustava-portfolio
npm install
```

### Development

```bash
npm run dev
```

Starts the Vite dev server with hot-module reload → **http://localhost:5173/**

### Build

```bash
npm run build
```

Outputs a production build to `dist/`.

### Preview Build

```bash
npm run preview
```

Serves the production build locally.

## 📁 Project Structure

```
kaustava-portfolio/
├── index.html          # Entry HTML (fonts, meta, favicon)
├── package.json        # Dependencies & scripts
├── vite.config.js      # Vite config (React plugin)
├── .gitignore
└── src/
    ├── main.jsx        # Entire React app (single component)
    └── styles.css      # All styling
```

## 📬 Contact

- **Email:** [kaustavasarma211@gmail.com](mailto:kaustavasarma211@gmail.com)
- **Location:** Guwahati, Assam, India
- **Phone:** +91 9101506154

---

Made with words & ♡
