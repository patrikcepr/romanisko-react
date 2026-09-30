# romanarpas.eu

Personal website of psychotherapist Roman Arpáš – https://www.romanarpas.eu/

Single-page site built with **React 19 + TypeScript + Vite**, styled with SCSS (CSS modules + global design tokens).
The HTML is prerendered at build time, so the full content is available without JavaScript (search engines, link previews).

## Scripts

| Command           | What it does                                                   |
| ----------------- | -------------------------------------------------------------- |
| `npm start`       | Dev server with hot reload (http://localhost:5173)             |
| `npm run build`   | Type-check, client build, SSR build and prerender into `dist/` |
| `npm run preview` | Serve the production build from `dist/` locally                |
| `npm run lint`    | ESLint (+ Prettier) for `src`                                  |
| `npm run ts-lint` | TypeScript type check                                          |

Styles are checked by Stylelint on commit (lint-staged + husky); commit messages follow Conventional Commits (commitlint).

## Project structure

```
src/
  App.tsx                 page composition
  index.tsx               client entry (hydrates the prerendered HTML)
  entry-server.tsx        render-to-string entry used by the prerender step
  components/Layout/      page sections (NavTop, Hero, Terapie, What, Who + Price, Contact, Footer)
  components/UI/          Icon, GestaltMark
  data/site.ts            contact details and practical facts (single source of truth)
  hooks/useReveal.ts      subtle fade-in on scroll (respects prefers-reduced-motion)
  styles/                 global.scss (tokens, typography, buttons), _mixins.scss (breakpoints)
  assets/redesign/        images: hero, artwork, portrait, logo, brush masks, originals
public/                   static files copied as-is (.htaccess, icons, og-image, robots, sitemap)
scripts/
  prerender.mjs           writes the rendered app into dist/index.html (part of `npm run build`)
  generate-brush-mask.cjs generates the brush-edge alpha masks
  recolor-artwork.html    recolours the drawing into the site palette
```

## Content notes

-   Contact data and prices live in `src/data/site.ts`. The JSON-LD block in `index.html` repeats them for search engines – keep both in sync.
-   Skype is hidden with `skype: null` in `src/data/site.ts`.
-   The "Jak pracuji" drawing can be switched between the recoloured and the original version via `ARTWORK_VARIANT` in `src/components/Layout/What/What.tsx`.
-   Mobile/tablet hero artwork strength: `--hero-art-opacity` in `src/components/Layout/Hero/Hero.module.scss`.

## Deployment

GitHub Actions (`.github/workflows/ci.yml`) runs lint, type check and build on pushes and pull requests.
A push to `main` deploys `dist/` over FTP to `www/` on WEDOS.

`public/.htaccess` replaces the hosting's default `.htaccess`: it keeps the original WEDOS rules for subdomains/aliases
and adds a 301 redirect of all variants (http, without www) to `https://www.romanarpas.eu`.
