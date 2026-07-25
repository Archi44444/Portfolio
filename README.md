# Archita Mitra — Portfolio

An editorial, motion-driven developer portfolio built with React, Vite, Tailwind CSS and Framer Motion — inspired by the spacing, typography and restraint of the Framer *Artemis* template, with an original grayscale identity.

## Stack

- **React 19 + Vite** — build tooling
- **Tailwind CSS** — utility styling, custom design tokens in `tailwind.config.js`
- **Framer Motion** — scroll reveals, page transitions, magnetic buttons
- **GSAP + ScrollTrigger** — the animated experience-timeline line
- **Lenis** — smooth scrolling
- **lucide-react** — iconography (GitHub/LinkedIn marks are custom SVGs in `src/components/BrandIcons.jsx`, since lucide dropped brand logos)

Front-end only — no backend. The contact form opens a pre-filled `mailto:` link rather than posting anywhere.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Structure

```
src/
  components/   Navbar, Footer, Loader, ScrollProgress, CustomCursor,
                MagneticButton, SectionTitle, BrandIcons
  sections/     Hero, About, Projects, Experience, Skills, Achievements, Contact
  hooks/        useLenis (smooth scroll), useReveal (shared Framer Motion variants)
  data/         portfolioData.js — all copy, links and content in one place
  assets/       profile.jpg
```

## Editing content

Everything text/link-based (projects, skills, experience, achievements, socials, resume link) lives in `src/data/portfolioData.js` — edit there rather than in the section components.

Two projects (**Skyline** weather app and **this portfolio**) didn't have GitHub repos in the source resume, so their links currently point at the GitHub profile — swap in real repo URLs and live-demo links in `portfolioData.js` once available.

## Design tokens

Defined in `tailwind.config.js`:
- Colors: `canvas #F8F7F4`, `card #FFFFFF`, `ink #111111`, `muted #666666`, `line #E4E1DA`
- Type: `font-display` (Clash Display / General Sans), `font-body` (Inter), `font-mono` (JetBrains Mono)
- Custom fluid sizes: `text-hero`, `text-display-lg`, `text-display-md`

## Notes

- Respects `prefers-reduced-motion` (Lenis and CSS transitions both check it).
- Custom cursor and magnetic buttons are disabled on touch/coarse-pointer devices.
- Replace `og-cover.jpg` in `public/` with a real 1200×630 social preview image before deploying.
